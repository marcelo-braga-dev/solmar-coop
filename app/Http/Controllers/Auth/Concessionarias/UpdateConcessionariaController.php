<?php

namespace App\Http\Controllers\Auth\Concessionarias;

use App\Http\Controllers\Controller;
use App\Models\Concessionarias;
use Illuminate\Http\Request;

class UpdateConcessionariaController extends Controller
{
    public function __invoke($id, Request $request)
    {
        $tarifaGd2 = $request->get("tarifa_gd2") ?? 0;

        Concessionarias::find($id)
            ->update(['tarifa_gd2' => $tarifaGd2]);
    }
}
