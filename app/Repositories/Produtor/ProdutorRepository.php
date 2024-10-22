<?php

namespace App\Repositories\Produtor;

use App\DTO\Endereco\CreateEnderecoUsuarioDTO;
use App\DTO\UsinaSolar\CreateUsinaDTO;
use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Propostas\UsinaProposta;
use App\Models\Users\Produtor;
use App\Models\Users\User;
use App\Services\Users\CreateUserService;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProdutorRepository
{
    public function create(Request $data)
    {
        try {
            return DB::transaction(function () use ($data) {
                $service = new CreateUserService();

                $dto = CreateUsuarioDTO::fromArray($data);
                $produtor = $dto->toArray();

                // Conta Acesso
                $user = $service->user($produtor, $data);

                // Dados do Usuario
                $service->userData($user, $produtor);

                // Dados do Usuario
                $service->contato($user, $data);

                // Endereco
                $service->endereco($user, $data);

                // Usina Solar
                $usinaDTO = CreateUsinaDTO::fromArray($user->id, $data->usina);
                $usina = $usinaDTO->toArray();
                UsinaProposta::create($usina);

                return $user->id;
            });
        } catch (QueryException $exception) {
            dd($exception->getMessage());
        }
    }

    public function getAll()
    {
        return (new Produtor())->produtores();
    }

    public function getGroupByStatus()
    {
        return (new Produtor())
            ->produtores()
            ->groupBy('status');
    }

    public function findAllData($id)
    {
        return (new User)
            ->with(['dataUser', 'endereco', 'usina', 'propostas', 'contatos'])
            ->find($id);
    }
}
