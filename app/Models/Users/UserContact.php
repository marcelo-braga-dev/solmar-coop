<?php

namespace App\Models\Users;

use App\Utils\FormatValues;
use Illuminate\Database\Eloquent\Model;

class UserContact extends Model
{
    protected $fillable = ['user_id', 'email', 'celular', 'celular_2', 'telefone'];

    //---------------
    // setters
    //---------------
    public function setCelularAttribute($value)
    {
        $this->attributes['celular'] = FormatValues::formatInteger($value);
    }

    public function setCelular2Attribute($value)
    {
        $this->attributes['celular_2'] = FormatValues::formatInteger($value);
    }

    public function setTelefoneAttribute($value)
    {
        $this->attributes['telefone'] = FormatValues::formatInteger($value);
    }

    //---------------
    // getters
    //---------------
    public function getCelularAttribute()
    {
        return FormatValues::formatPhone($this->attributes['celular']);
    }

    public function getCelular2Attribute()
    {
        return FormatValues::formatPhone($this->attributes['celular_2']);
    }

    public function getTelefoneAttribute()
    {
        return FormatValues::formatPhone($this->attributes['telefone']);
    }
}
