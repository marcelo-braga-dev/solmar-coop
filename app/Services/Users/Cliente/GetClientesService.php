<?php

namespace App\Services\Users\Cliente;

use App\Models\Users\User;
use App\src\Roles\RoleUser;

class GetClientesService
{
    public function getClientes()
    {
        return User::where('role_id', RoleUser::$CLIENTE)
            ->with('userData')
            ->orderByDesc('id')
            ->paginate();
    }
}
