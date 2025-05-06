<?php

namespace App\Http\Controllers\Auth\Produtor;

use App\Http\Controllers\Controller;
use App\Repositories\Produtor\ProdutorPropostaRepository;
use App\Utils\AlertMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdutorPropostasController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Produtor/Proposta/Index/Page', []);
    }

    public function create()
    {
        return Inertia::render('Auth/Produtor/Proposta/Create/Page', []);
    }

    public function store(Request $request)
    {
        (new ProdutorPropostaRepository())->store($request);

        AlertMessage::success('Proposta gerada com sucesso!');
        return redirect()->route('auth.produtor.proposta.index');
    }

    public function show($id)
    {
        $proposta = (new ProdutorPropostaRepository)->get($id);

        return Inertia::render('Auth/Produtor/Proposta/Show/Page', ['idProposta' => $id]);
    }
}
