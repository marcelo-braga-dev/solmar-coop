<?php

namespace App\Http\Controllers\Auth\Cliente\Propostas;

use App\Http\Controllers\Controller;
use App\Models\Cliente\ClienteProposta;
use App\Repositories\Cliente\ClientePropostaRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropostaController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Cliente/Proposta/Index/Page');
    }

    public function create()
    {
        return Inertia::render('Auth/Cliente/Proposta/Create/Page');
    }

    public function store(Request $request)
    {
        (new ClientePropostaRepository())->create($request);

        return redirect()->route('auth.cliente.proposta.index')->with('success', 'Proposta cadastrado com sucesso.');
    }

    public function show($id)
    {
        $idProposta = $id;

        return Inertia::render('Auth/Cliente/Proposta/Show/Page', compact('idProposta'));
    }
}
