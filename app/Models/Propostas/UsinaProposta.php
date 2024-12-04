<?php

namespace App\Models\Propostas;

use App\Models\Concessionarias;
use App\Models\Users\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsinaProposta extends Model
{

    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'uc',
        'media_geracao',
        'prazo_locacao',
        'concessionaria_id',
        'seller_id',
        'potencia_usina',
        'taxa_comissao',
        'inversores',
        'modulos',
        'taxa_reducao_consumo',
    ];

    protected $with = ['concessionaria', 'consultor', 'proprietario'];

    //--------------
    // relations
    //--------------
    public function consultor()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }

    public function proprietario()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')
            ->with('dataUser');
    }

    public function concessionaria()
    {
        return $this->belongsTo(Concessionarias::class, 'concessionaria_id', 'id');
    }
}
