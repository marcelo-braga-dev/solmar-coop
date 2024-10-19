<?php

namespace App\Models\Users;

use App\Utils\StringUtils;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserData extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tipo_pessoa',
        'cpf',
        'data_nascimento',
        'rg',
        'genero',
        'estado_civil',
        'profissao',
        'data_fundacao',
        'cnpj',
        'razao_social',
        'nome_fantasia',
        'tipo_empresa',
        'ie',
        'im',
        'ramo_atividade',
    ];

    public function getCnpjAttribute()
    {
        return StringUtils::formatCnpj($this->attributes['cnpj']);
    }

    public function setCnpjAttribute($value)
    {
        $this->attributes['cnpj'] = preg_replace('/\D/', '', $value);
    }
}
