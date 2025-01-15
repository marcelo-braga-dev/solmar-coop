<?php

namespace App\Models\Cliente;

use Illuminate\Database\Eloquent\Model;

class ClienteData extends Model
{
    protected $fillable = [
        'user_id',
        'media_consumo',
        'prazo_locacao'
    ];
}
