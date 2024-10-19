<?php

namespace App\Http\Controllers\Admin\Usuarios\Produtor;

use App\Http\Controllers\Controller;
use App\Repositories\Produtor\ProdutorRepository;

class GetKanbanController extends Controller
{
   public function __invoke()
   {
       $produtores = (new ProdutorRepository())->getGroupByStatus();

       return response()->json($produtores);
   }
}
