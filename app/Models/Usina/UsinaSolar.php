<?php

namespace App\Models\Usina;

use App\Models\Concessionarias;
use App\Models\Users\User;
use App\Models\Users\UserAddress;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsinaSolar extends Model
{

    protected $fillable = [
        'user_id',
        'seller_id',
        'concessionaria_id',
        'status',
        'uc',
        'media_geracao',
        'prazo_locacao',
        'potencia_usina',
        'taxa_comissao',
        'inversores',
        'modulos',
    ];

    use HasFactory;

    protected $hidden = ['concessionaria_id', 'seller_id', 'created_at', 'updated_at'];

    protected $with = ['concessionaria', 'consultor', 'proprietario', 'endereco'];

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
            ->with('userData');
    }

    public function concessionaria()
    {
        return $this->belongsTo(Concessionarias::class, 'concessionaria_id', 'id');
    }

    public function endereco()
    {
        return $this->hasOne(UsinaAddress::class, 'usina_id', 'id');
    }
}
