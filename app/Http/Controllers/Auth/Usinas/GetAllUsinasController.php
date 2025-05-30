<?php

namespace App\Http\Controllers\Auth\Usinas;

use App\Http\Controllers\Controller;
use App\Models\Usina\UsinaSolar;

class GetAllUsinasController extends Controller
{
    public function __invoke()
    {
        $usinas = UsinaSolar::get()->groupBy('status');

        return response()->json($usinas);
    }
}
