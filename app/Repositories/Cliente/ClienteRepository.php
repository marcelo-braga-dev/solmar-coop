<?php

namespace App\Repositories\Cliente;

use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Users\Cliente;
use App\Models\Users\User;
use App\Services\Users\CreateUserService;
use App\src\Roles\RoleUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClienteRepository
{
    public function create(Request $data)
    {
        try {
            $dto = CreateUsuarioDTO::fromArray($data);
            $userData = $dto->toArray();
        } catch (\TypeError) {
            throw new \DomainException('Dados Inválidos!');
        }

        DB::transaction(function () use ($data, $userData) {
            $role = RoleUser::$CLIENTE;
            $service = new CreateUserService();

            // Conta Acesso
            $user = $service->createUser($userData, $role, $data->senha);

            // Dados do Usuario
            $user->userData()->create($userData);

            // Dados do Usuario
            $user->contatos()->create(['email' => $data['contato']['email'] ?? $user->email, ...$data['contato']]);

            // Endereco
            $service->endereco($user, $data->endereco ?? []);
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
            ->with('userData')
            ->with('endereco')
            ->with('usina')
            ->find($id);
    }
}
