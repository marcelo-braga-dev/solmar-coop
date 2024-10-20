<?php

namespace App\Models\Propostas;

use App\Models\ConcessionariasEnergia;
use App\Models\Users\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsinaProposta extends Model
{

    use HasFactory;

    protected $fillable = ['user_id', 'uc', 'media_geracao', 'prazo_locacao', 'concessionaria_id'];

    protected $with = ['concessionaria'];

    //--------------
    // relations
    //--------------
    public function proprietario()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function concessionaria()
    {
        return $this->belongsTo(ConcessionariasEnergia::class, 'concessionaria_id', 'id');
    }
}
