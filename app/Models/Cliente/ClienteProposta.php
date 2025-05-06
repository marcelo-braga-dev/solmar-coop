<?php

namespace App\Models\Cliente;

use App\Models\Concessionarias;
use App\Models\Users\User;
use App\src\Roles\RoleUser;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class ClienteProposta extends Model
{
    protected $fillable = [
        'user_id',
        'media_consumo',
        'taxa_reducao',
        'concessionaria_id',
        'prazo_locacao'
    ];

    protected static function booted()
    {
        static::addGlobalScope('consultor_filter', function ($query) {
            $user = Auth::user();

            if ($user && $user->role_id == RoleUser::$CONSULTOR) {
                $query->whereHas('cliente', function ($q) use ($user) {
                    $q->where('consultor_id', $user->id);
                });
            }
        });
    }

    protected $appends = ['criado_em'];

    protected $casts = [
        'taxa_reducao' => 'float',
        'media_consumo' => 'float'
    ];

    protected $with = ['endereco', 'concessionaria', 'cliente'];

    public function getCriadoEmAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('d/m/Y H:i:s');
    }

    public function cliente()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function endereco()
    {
        return $this->hasOne(ClientePropostaAddress::class, 'proposta_id', 'id');
    }

    public function concessionaria()
    {
        return $this->hasOne(Concessionarias::class, 'id', 'concessionaria_id');
    }
}
