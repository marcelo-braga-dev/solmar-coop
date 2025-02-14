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
            $proposta = ClienteProposta::create([
                'user_id' => $data->cliente_id,
                'concessionaria_id' => $data?->concessionaria_id,
                'taxa_reducao' => 20,
                'media_consumo' => $data?->dados['media_consumo'],
                'prazo_locacao' => $data?->dados['prazo_locacao']
            ]);

            $proposta->endereco()->create([
                'cep' => $data?->endereco['cep'] ?? null,
                'rua' => $data?->endereco['rua'] ?? null,
                'numero' => $data?->endereco['numero'] ?? null,
                'complemento' => $data?->endereco['complemento'] ?? null,
                'bairro' => $data?->endereco['bairro'] ?? null,
                'cidade' => $data?->endereco['cidade'] ?? null,
                'estado' => $data?->endereco['estado'] ?? null,
                'referencia' => $data?->endereco['referencia'] ?? null
            ]);
        });
    }

    public function get()
    {
        return (new ClienteProposta)
            ->orderByDesc('id')
            ->get();
    }
}
