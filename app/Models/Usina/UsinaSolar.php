<?php

namespace App\Models\Usina;

use App\Models\Concessionarias;
use App\Models\Users\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsinaSolar extends Model
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
        return $this->belongsTo(Concessionarias::class, 'concessionaria_id', 'id');
    }
}
