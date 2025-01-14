<?php

namespace App\Models\Usina;

use App\Utils\FormatValues;
use Illuminate\Database\Eloquent\Model;

class UsinaAddress extends Model
{
    protected $fillable = [
        'usina_id',
        'cep',
        'rua',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'estado',
        'referencia',
        'latitude',
        'longitude'
    ];

    protected $appends = ['cidade_estado', 'endereco_completo'];

    // ==== Getters ====
    public function getCepAttribute()
    {
        return FormatValues::formatCep($this->attributes['cep']);
    }

    public function getCidadeEstadoAttribute()
    {
        return ($this->attributes['cidade'] ?: '-') . '/' . ($this->attributes['estado'] ?: '-');
    }

    public function getEnderecoCompletoAttribute()
    {
        return
            $this->attributes['rua'] . ', '.
            $this->attributes['numero'] . ', '.
            $this->attributes['complemento'] . ', '.
            $this->attributes['bairro'] . ', '.
            $this->attributes['cidade'] . ', '.
            $this->attributes['estado'] . ', '.
            $this->attributes['cep'] . ', '.
            $this->attributes['referencia']
            ;
    }

    // ==== Setters ====
    public function setCepAttribute($value)
    {
        $this->attributes['cep'] = $value ? preg_replace('/\D/', '', $value) : null;
    }
}
