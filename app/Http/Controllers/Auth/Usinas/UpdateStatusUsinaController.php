<?php

namespace App\Http\Controllers\Auth\Usinas;

use App\Http\Controllers\Controller;
use App\Models\Usina\UsinaSolar;
use App\Utils\AlertMessage;
use Illuminate\Http\Request;

class UpdateStatusUsinaController extends Controller
{
    public function __invoke($id, Request $request)
    {
        UsinaSolar::find($id)
            ->update(['status' => $request->status]);

        AlertMessage::success('Ação realizada com sucesso');
    }
}
