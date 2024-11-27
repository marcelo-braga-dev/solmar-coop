<?php

namespace App\Models;

use App\Utils\ConvertValues;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Concessionarias extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'tarifa_gd2', 'estado'];

    public function setTarifaGd2Attribute($value)
    {
        $this->attributes['tarifa_gd2'] = ConvertValues::convertMoneyToFloat($value);
    }
}
