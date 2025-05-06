<?php

namespace App\Models\Produtor;

use App\Models\Concessionarias;
use App\Models\Users\User;
use App\src\Roles\RoleUser;
use App\Utils\ConvertValues;
use App\Utils\FormatValues;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class ProdutorPropostas extends Model
{
    protected $fillable = [
        'produtor_id',
        'concessionaria_id',
        'potencia',
        'potencia_ac',
        'geracao',
        'valor'
    ];

    protected static function booted()
    {
        static::addGlobalScope('consultor_filter', function ($query) {
            $user = Auth::user();

            if ($user && $user->role_id == RoleUser::$CONSULTOR) {
                $query->whereHas('produtor', function ($q) use ($user) {
                    $q->where('consultor_id', $user->id);
                });
            }
        });
    }

    protected $with = ['produtor', 'concessionaria', 'endereco'];

    protected $appends = ['geracao_anual', 'retorno_anual_bruto', 'criado_em'];

    public function produtor()
    {
        return $this->hasOne(User::class, 'id', 'produtor_id');
    }

    public function consultor()
    {
        return $this->belongsTo(User::class, 'consultor_id');
    }

    public function concessionaria()
    {
        return $this->belongsTo(Concessionarias::class, 'concessionaria_id', 'id');
    }

    public function endereco()
    {
        return $this->hasOne(ProdutorPropostasEnderecos::class, 'proposta_id', 'id');
    }

    // ==== Setters ====
    public function setPotenciaAttribute($value)
    {
        $this->attributes['potencia'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    public function setGeracaoAttribute($value)
    {
        $this->attributes['geracao'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    public function setValorAttribute($value)
    {
        $this->attributes['valor'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    // ==== Getters ====

    public function getValorAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['valor']);
    }

    public function getPotenciaAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['potencia']);
    }

    public function getGeracaoAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['geracao']);
    }

    public function getCriadoEmAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('d/m/Y H:i:s');
    }

    public function getGeracaoAnualAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['geracao'] * 12);
    }

    public function getRetornoAnualBrutoAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['geracao'] * 12 * 0.41);
    }
}
