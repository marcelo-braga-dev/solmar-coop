<?php

namespace App\Repositories\Cliente;

use App\DTO\Endereco\CreateEnderecoUsuarioDTO;
use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Users\Cliente;
use App\Models\Users\User;
use App\Models\Users\UserAddress;
use App\Models\Users\UserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ClienteRepository
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
                'role_id' => 4,
                'status' => 'novo',
                'password' => ($data->senha ?? null) ? Hash::make($data->senha) : Hash::make(uniqid()),
            ]);

            // Dados do Usuario
            UserData::create(['user_id' => $user->id, ...$produtor]);

            // Endereco
            $enderecoDTO = CreateEnderecoUsuarioDTO::fromArray($user->id, $data->endereco ?? []);
            $endereco = $enderecoDTO->toArray();
            UserAddress::create($endereco);
        });
    }

    public function getAll()
    {
        return (new Cliente())->getAll()
            ->orderByDesc('id')
            ->get();
    }

    public function findAllData($id)
    {
        return (new User)
            ->with('dataUser')
            ->with('endereco')
            ->with('usina')
            ->find($id);
    }
}
