<?php

namespace App\Http\Controllers\Admin\Usuarios\Vendedor;

use App\Http\Controllers\Controller;
use App\Repositories\Vendedor\VendedorRepository;

class GetAllVendedoresController extends Controller
{
    public function __invoke()
    {
        $user = (new VendedorRepository())->getAll();

        return response()->json($user);
    }
}
