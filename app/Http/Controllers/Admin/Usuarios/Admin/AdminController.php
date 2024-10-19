<?php

namespace App\Http\Controllers\Admin\Usuarios\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Admin\AdminRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/User/Admin/Index/Page');
    }

    public function create()
    {
        return Inertia::render('Admin/User/Admin/Create/Page');
    }

    public function store(Request $request)
    {
        (new AdminRepository())->create($request);

        return redirect()->route('admin.user.admin.index');
    }
}
