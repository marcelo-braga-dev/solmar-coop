<?php

namespace App\Http\Controllers\Auth\ConcessionariasEnegia;

use App\Http\Controllers\Controller;
use App\Models\ConcessionariasEnergia;

class GetAllConcessionariasController extends Controller
{
    public function __invoke()
    {
        $get = (new ConcessionariasEnergia())
            ->orderBy('nome')
            ->get();

        return response()->json($get);
    }
}
