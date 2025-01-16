<?php

namespace App\Models\Users;

use App\Utils\FormatValues;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class UserData extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tipo_pessoa',
        'nome',
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

    protected $appends = ['cadastrado_em'];
    protected $with = ['endereco'];

    //--------------
    // getters
    //--------------
    public function getCadastradoEmAttribute()
    {
        $data = Carbon::parse($this->attributes['created_at']);
        return $data->format('d/m/Y H:i');
    }

    public function getCnpjAttribute()
    {
        return FormatValues::formatCnpj($this->attributes['cnpj']);
    }

    public function getCpfAttribute()
    {
        return FormatValues::formatCpf($this->attributes['cpf']);
    }

    //--------------
    // setters
    //--------------
    public function setCnpjAttribute($value)
    {
        $this->attributes['cnpj'] = $value ? preg_replace('/\D/', '', $value) : null;
    }
    public function setCpfAttribute($value)
    {
        $this->attributes['cpf'] = $value ? preg_replace('/\D/', '', $value) : null;
    }

    //--------------
    // relations
    //--------------
    public function endereco()
    {
        return $this->hasOne(UserAddress::class, 'user_id', 'user_id');
    }

    /**
     * @param string[] $fillable
     * @return UserData
     */
    public function setFillable(array $fillable): UserData
    {
        $this->fillable = $fillable;
        return $this;
    }
}
