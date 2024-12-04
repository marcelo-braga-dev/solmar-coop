<?php

namespace App\Http\Controllers\Auth\Usinas;

use App\Http\Controllers\Controller;
use App\Models\Propostas\UsinaProposta;
use App\Repositories\Produtor\ProdutorRepository;

class GetUsinaController extends Controller
{
   public function __invoke($id)
   {
       $date = UsinaProposta::find($id);

       return response()->json($date);
   }
}
