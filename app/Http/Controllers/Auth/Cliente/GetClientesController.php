<?php

namespace App\Http\Controllers\Auth\Cliente;

use App\Http\Controllers\Controller;
use App\Services\Users\Cliente\GetClientesService;

class GetClientesController extends Controller
{
   public function __invoke()
   {
        $registros = (new GetClientesService())->getClientes();

        return response ()->json($registros);
   }
}
