<?php

namespace App\Models\Cliente;

use App\Models\Users\User;
use Illuminate\Database\Eloquent\Model;

class ClienteProposta extends Model
{
    protected $fillable = [
        'user_id',
        'media_consumo',
        'prazo_locacao'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
