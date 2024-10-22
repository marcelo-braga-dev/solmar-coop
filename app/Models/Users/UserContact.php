<?php

namespace App\Models\Users;

use App\Utils\StringUtils;
use Illuminate\Database\Eloquent\Model;

class UserContact extends Model
{
    protected $fillable = ['user_id', 'email', 'celular', 'celular_2', 'telefone'];

    //---------------
    // setters
    //---------------
    public function setCelularAttribute($value)
    {
        $this->attributes['celular'] = StringUtils::formatInteger($value);
    }

    public function setCelular2Attribute($value)
    {
        $this->attributes['celular_2'] = StringUtils::formatInteger($value);
    }

    public function setTelefoneAttribute($value)
    {
        $this->attributes['telefone'] = StringUtils::formatInteger($value);
    }

    //---------------
    // getters
    //---------------
    public function getCelularAttribute()
    {
        return StringUtils::formatPhone($this->attributes['celular']);
    }

    public function getCelular2Attribute()
    {
        return StringUtils::formatPhone($this->attributes['celular_2']);
    }

    public function getTelefoneAttribute()
    {
        return StringUtils::formatPhone($this->attributes['telefone']);
    }
}
