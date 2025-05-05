<?php

namespace App\Models\Produtor;

use App\Models\Concessionarias;
use App\Models\Users\User;
use App\Utils\ConvertValues;
use App\Utils\FormatValues;
use Illuminate\Database\Eloquent\Model;

class ProdutorPropostas extends Model
{
    protected $fillable = [
        'produtor_id',
        'consultor_id',
        'concessionaria_id',
        'potencia',
        'potencia_ac',
        'geracao',
        'valor'
    ];

    protected $with = ['produtor', 'consultor', 'concessionaria', 'endereco'];

    public function produtor()
    {
        return $this->belongsTo(User::class, 'produtor_id', 'id');
    }

    public function consultor()
    {
        return $this->belongsTo(User::class, 'consultor_id', 'id');
    }

    public function concessionaria()
    {
        return $this->belongsTo(Concessionarias::class, 'concessionaria_id', 'id');
    }

    public function endereco()
    {
        return $this->hasOne(ProdutorPropostasEnderecos::class, 'proposta_id', 'id');
    }

    // ==== Setters ====
    public function setPotenciaAttribute($value)
    {
        $this->attributes['potencia'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    public function setGeracaoAttribute($value)
    {
        $this->attributes['geracao'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    public function setValorAttribute($value)
    {
        $this->attributes['valor'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    // ==== Getters ====

    public function getValorAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['valor']);
    }
}
