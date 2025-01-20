<?php

namespace App\Http\Controllers\Auth\Cliente;

use App\Http\Controllers\Controller;
use App\Repositories\Produtor\ProdutorRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClienteController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Cliente/Cliente/Index/Page');
    }

    public function show($id, Request $request)
    {
        $tab = $request->tab;

        $usuario = (new ProdutorRepository())->findAllData($id);

        return Inertia::render('Admin/User/Cliente/Show/Page', compact('usuario', 'tab'));
    }
}
