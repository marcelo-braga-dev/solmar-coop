<?php

namespace App\Repositories\Produtor;

use App\Models\Produtor\ProdutorPropostas;
use App\Models\Users\User;

class ProdutorPropostaRepository
{
    public function find(int $id)
    {
        return ProdutorPropostas::find($id);
    }

    public function getProdutor(int $id)
    {
        return (new ProdutorPropostas())
            ->where('produtor_id', $id)
            ->orderByDesc('id')
            ->get();
    }

    public function getAll()
    {
        return (new ProdutorPropostas)
            ->orderByDesc('id')
            ->get();
    }

    public function store($data)
    {
        $proposta = (new ProdutorPropostas())->create([
            'produtor_id' => $data->produtor_id,
            'consultor_id' => auth()->id(),
            'concessionaria_id' => $data->concessionaria_id,
            'potencia' => $data->potencia,
//            'potencia_ac' => $data->,
            'geracao' => $data->geracao,
            'valor' => $data->valor,
        ]);

        $proposta->endereco()->create($data['endereco'] ?? []);
    }
}
