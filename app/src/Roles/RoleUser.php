<?php

namespace App\src\Roles;

class RoleUser
{
    static int $CLIENTE = 4;

    public function admin(): int
    {
        return 1;
    }

    public function consultor(): int
    {
        return 2;
    }

    public function produtor(): int
    {
        return 3;
    }

    public function cliente(): int
    {
        return 4;
    }
}
