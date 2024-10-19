<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory;

    public function produtores()
    {
        return $this->hasMany(User::class, 'role_id', 'id');
    }
}
