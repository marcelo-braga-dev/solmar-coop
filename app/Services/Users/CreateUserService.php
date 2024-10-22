<?php

namespace App\Services\Users;

use App\DTO\Endereco\CreateEnderecoUsuarioDTO;
use App\Models\Users\User;
use App\Models\Users\UserAddress;
use App\Models\Users\UserContact;
use App\Models\Users\UserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CreateUserService
{
    public function user(array $produtor, Request $data)
    {
        return User::create([
            'name' => $produtor['nome'] ?? $produtor['razao_social'],
            'email' => $produtor['email'],
            'role_id' => 3,
            'status' => 'novo',
            'password' => ($data->senha ?? null) ? Hash::make($data->senha) : Hash::make(uniqid()),
        ]);
    }

    public function userData($user, $produtor)
    {
        UserData::create(['user_id' => $user->id, ...$produtor]);
    }

    function endereco($user, Request $data): void
    {
        $enderecoDTO = CreateEnderecoUsuarioDTO::fromArray($user->id, $data->endereco ?? []);
        $endereco = $enderecoDTO->toArray();
        UserAddress::create($endereco);
    }

    public function contato($user, $data)
    {
        UserContact::create(['user_id' => $user->id, 'email' => $user->email, ...$data['contato']]);
    }
}
