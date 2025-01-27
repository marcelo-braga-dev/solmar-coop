<?php

namespace App\Models\Users;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Usina\UsinaSolar;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;

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

    //--------------
    // relations
    //--------------
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

    public function propostas(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(UsinaSolar::class, 'user_id', 'id');
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
        return [
            'email' => $this->attributes['email'],
            'status' => $this->attributes['status'],
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
