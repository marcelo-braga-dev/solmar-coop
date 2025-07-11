<?php

namespace App\Repositories\Cliente;

use App\Models\Cliente\ClienteProposta;
use App\Services\Config\ConfigService;
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
                'taxa_reducao' => (new ConfigService())->getTaxaReducao(),
                'media_consumo' => $data?->dados['media_consumo'],
                'prazo_locacao' => $data?->dados['prazo_locacao'],
                'valor_medio' => $data?->dados['valor_medio'],
                'unidade_consumidora' => $data?->dados['unidade_consumidora'],
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

    public function findCliente($id)
    {
        return (new ClienteProposta)
            ->where('user_id', $id)
            ->orderByDesc('id')
            ->get();
    }
}
