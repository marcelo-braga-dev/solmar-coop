<?php

namespace App\Http\Controllers\Admin\Usuarios\Produtor;

use App\Http\Controllers\Controller;
use App\Repositories\Produtor\ProdutorRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdutorController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/User/Produtor/Index/Page');
    }

    public function create()
    {
        return Inertia::render('Admin/User/Produtor/Create/Page');
    }

    public function store(Request $request)
    {
        (new ProdutorRepository())->create($request);

        return redirect()->route('admin.produtor.index');
    }

    public function show($id)
    {
        $usuario = (new ProdutorRepository())->findAllData($id);

        return Inertia::render('Admin/User/Produtor/Show/Page', compact('usuario'));
    }
}
