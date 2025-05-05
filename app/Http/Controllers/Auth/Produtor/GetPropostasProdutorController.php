<?php

namespace App\Http\Controllers\Auth\Produtor;

use App\Http\Controllers\Controller;
use App\Repositories\Produtor\ProdutorPropostaRepository;

class GetPropostasProdutorController extends Controller
{
   public function __invoke()
   {
       $registros = (new ProdutorPropostaRepository())->get();

       return response()->json($registros);
   }
}
