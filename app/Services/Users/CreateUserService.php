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
    public function user(array $produtor, int $role, ?string $senha)
    {
        try {
            return User::create([
                'name' => $produtor['nome'] ?? $produtor['razao_social'],
                'email' => $produtor['email'],
                'role_id' => $role,
                'status' => 1,
                'password' => ($senha ?? null) ? Hash::make($senha) : Hash::make(uniqid()),
            ]);
        } catch (\Exception $e) {
            throw new \Exception('E-mail de acesso já está cadastrado em outro usuário!');
        }
    }

    public function userData($user, $produtor)
    {
        try {
            UserData::create(['user_id' => $user->id, ...$produtor]);
        } catch (\Exception) {
         throw new \Exception('Dados do usuário inválidos ou duplicados!');
        }
    }

    function endereco($user, array $endereco = []): void
    {
        $enderecoDTO = CreateEnderecoUsuarioDTO::fromArray($user->id, $endereco ?? []);
        $endereco = $enderecoDTO->toArray();
        UserAddress::create($endereco);
    }

    public function contato($user, $data)
    {
        UserContact::create(['user_id' => $user->id, 'email' => $data['contato']['email'] ?? $user->email, ...$data['contato']]);
    }
}
