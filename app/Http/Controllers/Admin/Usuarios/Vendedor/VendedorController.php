<?php

namespace App\Http\Controllers\Admin\Usuarios\Vendedor;

use App\Http\Controllers\Controller;
use App\Repositories\Vendedor\VendedorRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VendedorController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/User/Vendedor/Index/Page');
    }

    public function create()
    {
        return Inertia::render('Admin/User/Vendedor/Create/Page');
    }

    public function store(Request $request)
    {
        (new VendedorRepository())->create($request);

        return redirect()->route('admin.user.vendedor.index');
    }
}
