<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public function getAll()
    {
        return User::where('role_id', 1)
            ->with('dataUser');
    }
}
