<?php

namespace App\Http\Controllers\Auth\Propostas\Produtor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;

class GerarPropostaUsinaController extends Controller
{
    public function gerarPdf(Request $request)
    {
        $html = $request->input('html');

        // Caminho para a imagem da capa (usar 'asset()' para gerar URL acessível publicamente)
        $dirCapa = public_path('storage/propostas/produtores/layout/capa.jpg');
        $capa = '
        <div style="text-align: center; page-break-after: always;">
            <img src="' . $dirCapa . '" alt="Capa" style="width: 100%; height: auto;" />
        </div>';

        // Caminho para a imagem do cabeçalho
        $dirHeader = public_path('storage/propostas/produtores/layout/cabecalho.jpg');
        $headerHtml = '
                <div class="header">
                    <img src="' . $dirHeader . '" alt="Cabeçalho" style="width: 100%; height: auto;">
                </div>
        ';

        // Adiciona o cabeçalho logo após cada ocorrência de 'style="text-align: center; page-break-after: always;"'
//        $html = preg_replace(
//            '/style="text-align: center; page-break-after: always;"/i',
//            'style="text-align: center; page-break-after: always;"' . $headerHtml,
//            $html
//        );

        // Gera o PDF com o Snappy, configurando o cabeçalho e ajustando margens
        $pdf = PDF::loadHTML($capa . $headerHtml . $html)
            ->setOption('encoding', 'UTF-8')
            ->setOption('enable-local-file-access', true)
            ->setOption('margin-top', '5mm')
            ->setOption('margin-bottom', '5mm');

        // Retorna o PDF para download
        return $pdf->inline('proposta_comercial_' . uniqid() . '.pdf');
    }

    public function layoutPdf()
    {
        return [
            'capa' => url('storage/propostas/produtores/layout/capa.jpg'),
            'header' => url('storage/propostas/produtores/layout/cabecalho.jpg'),
        ];
    }
}
