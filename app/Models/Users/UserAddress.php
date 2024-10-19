<?php

namespace App\Models\Users;

use App\Utils\StringUtils;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAddress extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'cep', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'referencia'];

    protected $appends = ['cidade_estado'];

    public function getCepAttribute()
    {
        return StringUtils::formatCep($this->attributes['cep']);
    }

    public function getCidadeEstadoAttribute()
    {
        return ($this->attributes['cidade'] ?: '-') . '/' . ($this->attributes['estado'] ?: '-');
    }

    public function setCepAttribute($value)
    {
        $this->attributes['cep'] = $value ? preg_replace('/\D/', '', $value) : null;
    }
}
