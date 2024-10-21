<?php

namespace App\Http\Controllers\Admin\Usuarios\Produtor;

use App\Http\Controllers\Controller;
use App\Repositories\Produtor\ProdutorRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;

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
        $userId = (new ProdutorRepository())->create($request);

        return redirect()->route('admin.produtor.show', $userId);
    }

    public function show($id)
    {
        $usuario = (new ProdutorRepository())->findAllData($id);

        return Inertia::render('Admin/User/Produtor/Show/Page', compact('usuario'));
    }
}
