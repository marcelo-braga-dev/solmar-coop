<?php

namespace App\Repositories\Produtor;

use App\DTO\Endereco\CreateEnderecoUsuarioDTO;
use App\DTO\UsinaSolar\CreateUsinaDTO;
use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Users\Produtor;
use App\Models\Users\Roles;
use App\Models\Users\User;
use App\Models\Users\UserAddress;
use App\Models\Users\UserData;
use App\Models\Usina\UsinaSolar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProdutorRepository
{
    public function create(Request $data)
    {
        DB::transaction(function () use ($data) {
            $dto = CreateUsuarioDTO::fromArray($data);
            $produtor = $dto->toArray();

            // Conta Acesso
            $user = User::create([
                'name' => $produtor['nome'] ?? $produtor['razao_social'],
                'email' => $produtor['email'],
                'role_id' => 3,
                'status' => 'novo',
                'password' => ($data->senha ?? null) ? Hash::make($data->senha) : Hash::make(uniqid()),
            ]);

            // Dados do Usuario
            UserData::create(['user_id' => $user->id, ...$produtor]);

            // Endereco
            $enderecoDTO = CreateEnderecoUsuarioDTO::fromArray($user->id, $data->endereco ?? []);
            $endereco = $enderecoDTO->toArray();
            UserAddress::create($endereco);

            // Usina Solar
            $usinaDTO = CreateUsinaDTO::fromArray($user->id, $data->usina);
            $usina = $usinaDTO->toArray();
            UsinaSolar::create($usina);
        });
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
            ->with(['dataUser', 'endereco', 'usina'])
            ->find($id);
    }
}
