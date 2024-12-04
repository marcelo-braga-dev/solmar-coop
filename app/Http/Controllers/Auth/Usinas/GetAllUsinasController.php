<?php

namespace App\Http\Controllers\Auth\Usinas;

use App\Http\Controllers\Controller;
use App\Models\Propostas\UsinaProposta;
use App\Repositories\Produtor\ProdutorRepository;

class GetAllUsinasController extends Controller
{
    public function __invoke()
    {
        $usinas = UsinaProposta::get()->groupBy('status');

        return response()->json($usinas);
    }
}
