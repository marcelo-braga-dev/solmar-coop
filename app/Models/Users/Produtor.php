<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produtor extends Model
{
    protected $appends = ['users'];

    public function produtores()
    {
        return (new User())->where('role_id', 3)
            ->with(['userData', 'endereco'])
            ->orderBy('id', 'desc')
            ->get();
    }

    public function getUsersAttribute()
    {
        return User::where('role_id', 3)->get();
    }
}
