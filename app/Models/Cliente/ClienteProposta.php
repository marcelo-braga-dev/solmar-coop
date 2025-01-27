<?php

namespace App\Models\Cliente;

use App\Models\Concessionarias;
use App\Models\Users\User;
use Illuminate\Database\Eloquent\Model;

class ClienteProposta extends Model
{
    protected $fillable = [
        'user_id',
        'media_consumo',
        'concessionaria_id',
        'prazo_locacao'
    ];

    protected $with = ['endereco', 'concessionaria', 'cliente'];

    public function cliente()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function endereco()
    {
        return $this->hasOne(ClientePropostaAddress::class, 'proposta_id', 'id');
    }

    public function concessionaria()
    {
        return $this->hasOne(Concessionarias::class, 'id', 'concessionaria_id');
    }
}
