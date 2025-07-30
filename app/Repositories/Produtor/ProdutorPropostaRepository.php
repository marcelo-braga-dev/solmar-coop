<?php

namespace App\Repositories\Produtor;

use App\Models\Produtor\ProdutorPropostas;
use App\Models\Users\User;
use App\Models\Users\UserData;
use App\Services\Users\CreateUserService;
use App\src\Roles\RoleUser;

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

    public function store(array $data)
    {
        $produtorId = $data['produtor_id'] ?? $this->verificarOuCriarUsuarioPorDocumento($data);

        $proposta = (new ProdutorPropostas())->create([
            'produtor_id' => $produtorId,
            'consultor_id' => auth()->id(),
            'potencia' => $data['dados']['potencia'],
            'geracao_media' => $data['dados']['geracao_media'],
            'valor_investimento' => $data['dados']['valor_investimento'],
            'prazo_locacao' => $data['dados']['prazo_locacao'],
            'taxa_reducao' => $data['taxa_reducao'],
        ]);

        $proposta->endereco()->create($data['endereco'] ?? []);
    }

    function verificarOuCriarUsuarioPorDocumento($userData): int
    {
        $cnpj = preg_replace('/\D/', '', $userData['cnpj'] ?? null);
        $cpf = preg_replace('/\D/', '', $userData['cpf'] ?? null);

        if ($cpf) {
            $registroExistente = UserData::where('cpf', $cpf)->first();
        }

        if ($cnpj) {
            $registroExistente = UserData::where('cnpj', $cnpj)->first();
        }

        if ($registroExistente) return $registroExistente->user_id;

        $role = RoleUser::$PRODUTOR;
        $service = new CreateUserService();

        // Conta Acesso
        $user = $service->createUser($userData, $role, null, auth()->id());

        // Dados do Usuario
        $user->userData()->create($userData);

        return $user->id;
    }
}
