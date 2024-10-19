<?php

namespace App\Http\Controllers\Auth\Contratos\Usinas;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UsinasContratoController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Contratos/Usinas/Index/Page');
    }
}
