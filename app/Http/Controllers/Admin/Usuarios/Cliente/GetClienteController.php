<?php

namespace App\Http\Controllers\Admin\Usuarios\Cliente;

use App\Http\Controllers\Controller;
use App\Repositories\Cliente\ClienteRepository;

class GetClienteController extends Controller
{
    public function __invoke()
    {
        $date = (new ClienteRepository())->getAll();

        return response()->json($date);
    }
}
