<?php

namespace App\Http\Controllers\Auth\Contratos\Usinas;

use App\Http\Controllers\Controller;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;
use Illuminate\Http\Request;

class GerarContratoProdutorController extends Controller
{
    public function gerarPdf(Request $request)
    {
        $html = $request->input('html');

        $pdf = PDF::loadHTML($html)
            ->setOption('encoding', 'UTF-8')
            ->setOption('enable-local-file-access', true)
            ->setOption('margin-top', '15mm')
            ->setOption('margin-bottom', '15mm');

        // Retorna o PDF para download
        return $pdf->inline('contrato_' . uniqid() . '.pdf');
    }
}
