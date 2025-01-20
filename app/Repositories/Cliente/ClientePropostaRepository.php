<?php

namespace App\Repositories\Cliente;

use App\Models\Cliente\ClienteProposta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientePropostaRepository
{
    public function create(Request $data)
    {
        DB::transaction(function () use ($data) {
            ClienteProposta::create([
                'user_id' => $data->cliente_id,
                'media_consumo' => $data?->dados['media_consumo'],
                'prazo_locacao' => $data?->dados['prazo_locacao']
            ]);
        });
    }

    public function get()
    {
        return (new ClienteProposta)
            ->with('user.userData')
            ->orderByDesc('id')
            ->get();
    }
}
