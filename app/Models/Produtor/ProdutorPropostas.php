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
        'consultor_id',
        'produtor_id',
        'taxa_reducao',
        'prazo_locacao',
        //'concessionaria_id',
        'potencia',
        //'potencia_ac',
        'geracao_media',//'geracao',
        'valor_investimento',//'valor'
    ];

    protected static function booted()
    {
        static::addGlobalScope('consultor_filter', function ($query) {
            $user = Auth::user();

            if ($user && $user->role_id == RoleUser::$ADMIN) return;

            $query->whereHas('produtor', function ($q) use ($user) {
                $q->where('consultor_id', $user->id);
            });
        });
    }

    protected $with = ['produtor', 'endereco', 'consultor'];

    protected $appends = ['geracao_anual', 'retorno_anual_bruto', 'criado_em'];

    public function produtor()
    {
        return $this->hasOne(User::class, 'id', 'produtor_id');
    }

    public function consultor()
    {
        return $this->belongsTo(User::class, 'consultor_id');
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

    public function setGeracaoMediaAttribute($value)
    {
        $this->attributes['geracao_media'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    public function setValorInvestimentoAttribute($value)
    {
        $this->attributes['valor_investimento'] = $value ? ConvertValues::moneyToFloat($value) : null;
    }

    // ==== Getters ====

    public function getValorInvestimentoAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['valor_investimento']);
    }

    public function getPotenciaAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['potencia']);
    }

    public function getGeracaoMediaAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['geracao_media']);
    }

    public function getCriadoEmAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('d/m/Y H:i:s');
    }

    public function getGeracaoAnualAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['geracao_media'] * 12);
    }

    public function getRetornoAnualBrutoAttribute()
    {
        return ConvertValues::floatToMoney($this->attributes['geracao_media'] * 12 * 0.41);
    }
}
