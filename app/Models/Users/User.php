<?php

namespace App\Models\Users;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Usina\UsinaSolar;
use App\src\Roles\RoleUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'consultor_id',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'name',
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected $appends = ['nome', 'status_nome', 'cadastrado_em', 'dados_acesso'];

    protected $with = ['userData', 'contatos'];

    public function scopeSomenteMeusClientes($query)
    {
        $user = Auth::user();

        // Aplica o filtro apenas se o usuário for um consultor
        if ($user && $user->role_id == RoleUser::$CONSULTOR) {
            return $query->where('consultor_id', $user->id);
        }

        return $query;
    }

    //--------------
    // relations
    //--------------

    public function consultor()
    {
        return $this->belongsTo(User::class, 'consultor_id');
    }
    public function userData(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(UserData::class, 'user_id', 'id');
    }

    public function usina(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(UsinaSolar::class, 'user_id', 'id');
    }

    public function contatos(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(UserContact::class, 'user_id', 'id');
    }

    public function vendedor(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'consultor_id');
    }

    public function clientes()
    {
        return $this->hasMany(User::class, 'consultor_id');
    }

    //--------------
    // getters
    //--------------
    public function getNomeAttribute()
    {
        return $this->attributes['name'];
    }

    public function getDadosAcessoAttribute()
    {
        switch ($this->attributes['status']) {
            case '0':
                $statusNome = 'Bloqueado'; break;
            case '1':
                $statusNome = 'Ativo';; break;
            default:
                $statusNome =  'Desconhecido';
        }

        return [
            'email' => $this->attributes['email'],
            'status' => $this->attributes['status'],
            'status_nome' => $statusNome,
        ];
    }

    public function getCadastradoEmAttribute()
    {
        $data = Carbon::parse($this->attributes['created_at']);
        return $data->format('d/m/Y H:i');
    }

    public function getStatusNomeAttribute()
    {
        switch ($this->attributes['status']) {
            case '1':
                return 'Ativo';
            case 'novo':
                return 'Aguardando Análise Documentos';
            case 'documentacao-aprovada':
                return 'Documentação Aprovada';
            case 'assinar_contrato':
                return 'Assinar Contrato';
            default:
                return '-';
        }
    }
}
