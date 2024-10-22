<?php

namespace App\Repositories\Cliente;

use App\DTO\Endereco\CreateEnderecoUsuarioDTO;
use App\DTO\Usuario\CreateUsuarioDTO;
use App\Models\Users\Cliente;
use App\Models\Users\User;
use App\Models\Users\UserAddress;
use App\Models\Users\UserData;
use App\Services\Users\CreateUserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ClienteRepository
{
    public function create(Request $data)
    {
        DB::transaction(function () use ($data) {
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
