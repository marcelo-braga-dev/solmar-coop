<?php

namespace App\Http\Controllers\Auth\Perfil;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PerfilController extends Controller
{
   public function index()
   {
        return Inertia::render('Auth/Perfil/Index/Page');
   }
}
