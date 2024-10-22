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
        $headerHtml = '<img src="' . $dirHeader . '" alt="Cabeçalho" style="width: 100%; height: auto; margin-botton: 15px">';

        // Caminho para a imagem do rodape
        $dirFooter = public_path('storage/propostas/produtores/layout/rodape.jpg');
        $footerHtml = '<img src="' . $dirFooter . '" alt="Cabeçalho" style="width: 100%; height: auto;">';

        // Adiciona o cabeçalho logo após cada ocorrência de 'style="text-align: center; page-break-after: always;"'
        $html = preg_replace(
            '/<div style="break-after: page;"><\/div>/i',
            '<div style="text-align: center; page-break-after: always;"></div>' . $headerHtml,
            $html
        );

        // Adiciona img1
        $img1 = public_path('storage/propostas/produtores/assets/img1.jpg');
        $img1Html = '<img src="' . $img1 . '" alt="Cabeçalho" style="width: 100%; height: auto;">';
        $html = preg_replace(
            '/<div id="img1"><\/div>/i',
            $img1Html,
            $html
        );

        // Gera o PDF com o Snappy, configurando o cabeçalho e ajustando margens
        $pdf = PDF::loadHTML($capa . $headerHtml . $html . $footerHtml)
            ->setOption('encoding', 'UTF-8')
            ->setOption('enable-local-file-access', true)
            ->setOption('margin-top', '2mm')
            ->setOption('margin-bottom', '2mm');

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
