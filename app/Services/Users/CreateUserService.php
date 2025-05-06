<?php

namespace App\Services\Users;

use App\DTO\Endereco\CreateEnderecoUsuarioDTO;
use App\Models\Users\User;
use App\Models\Users\UserAddress;
use Illuminate\Support\Facades\Hash;

class CreateUserService
{
    public function createUser(array $produtor, int $role, ?string $senha, ?int $vendedor = null)
    {
        try {
            return User::create([
                'name' => $produtor['nome'] ?? $produtor['razao_social'],
                'email' => $produtor['email'],
                'role_id' => $role,
                'consultor_id' => $vendedor,
                'status' => 1,
                'password' => ($senha ?? null) ? Hash::make($senha) : Hash::make(uniqid()),
            ]);
        } catch (\Exception) {
            throw new \Exception('E-mail de acesso já está cadastrado em outro usuário!');
        }
    }

    function endereco($user, array $endereco = []): void
    {
        $enderecoDTO = CreateEnderecoUsuarioDTO::fromArray($user->id, $endereco ?? []);
        $endereco = $enderecoDTO->toArray();
        UserAddress::create($endereco);
    }
}
