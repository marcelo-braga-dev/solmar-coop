<?php

namespace App\Repositories\Consultor;

use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Users\User;
use App\Models\Users\Vendedor;
use App\Services\Users\CreateUserService;
use App\src\Roles\RolesUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConsultorRepository
{
    public function create(Request $data)
    {
        DB::transaction(function () use ($data) {
            $role = (new RolesUser())->consultor();
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
            $service->endereco($user, $data);
        });
    }

    public function getAll()
    {
        return (new Vendedor())->getAll()
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