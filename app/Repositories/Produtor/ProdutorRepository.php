<?php

namespace App\Repositories\Produtor;

use App\DTO\Endereco\CreateEnderecoDTO;
use App\DTO\UsinaSolar\CreateUsinaDTO;
use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Users\Produtor;
use App\Models\Users\User;
use App\Models\Usina\UsinaAddress;
use App\Models\Usina\UsinaSolar;
use App\Services\Users\CreateUserService;
use App\src\Roles\RolesUser;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProdutorRepository
{
    public function create(Request $data)
    {
        try {
            return DB::transaction(function () use ($data) {
                $role = (new RolesUser())->produtor();
                $service = new CreateUserService();

                $dto = CreateUsuarioDTO::fromArray($data);
                $produtor = $dto->toArray();

                // Conta Acesso
                $user = $service->user($produtor, $role, $data->senha);

                // Dados do Usuario
                $service->userData($user, $produtor);

                // Dados do Usuario
                $service->contato($user, $data);

                // Endereco
                $service->endereco($user, $data->endereco);

                // Usina Solar
                $usinaDTO = CreateUsinaDTO::fromArray($user->id, $data->usina);
                $usina = $usinaDTO->toArray();
                $usinaData = UsinaSolar::create($usina);
                $usinaEnderecoDTO = CreateEnderecoDTO::fromArray($data->usina_endereco);
                $usinaEndereco = $usinaEnderecoDTO->toArray();

                UsinaAddress::create(['usina_id' => $usinaData->id, ...$usinaEndereco]);

                return $user->id;
            });
        } catch (QueryException|\DomainException $exception) {
            throw new \DomainException($exception->getMessage());
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
            ->with(['dataUser', 'usina', 'propostas', 'contatos'])
            ->find($id);
    }

    public function find($id)
    {
        return (new User)
            ->with(['dataUser', 'endereco', 'usina', 'propostas', 'contatos'])
            ->find($id);
    }
}
