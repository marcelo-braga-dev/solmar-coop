<?php

namespace App\Http\Controllers\Admin\Usuarios\Cliente;

use App\Http\Controllers\Controller;
use App\Repositories\Cliente\ClienteRepository;
use App\Repositories\Produtor\ProdutorRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClienteController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/User/Cliente/Index/Page');
    }

    public function show($id, Request $request)
    {
        $tab = $request->tab;

        $usuario = (new ProdutorRepository())->findAllData($id);

        return Inertia::render('Admin/User/Cliente/Show/Page', compact('usuario', 'tab'));
    }

    public function create()
    {
        return Inertia::render('Admin/User/Cliente/Create/Page');
    }

    public function store(Request $request)
    {
        (new ClienteRepository())->create($request);

        return redirect()->route('admin.user.cliente.index');
    }
}
