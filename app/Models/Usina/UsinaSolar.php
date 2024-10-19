<?php

namespace App\Models\Usina;

use App\Models\Users\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsinaSolar extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'uc', 'media_geracao', 'prazo_locacao', 'concessionaria_id'];

    public function proprietario()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
