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

        // Caminho para as imagens das páginas
        $dirCapa = public_path('storage/propostas/cliente/paginas/1.jpg');
        $image2 = public_path('storage/propostas/cliente/paginas/2.jpg');
        $image3 = public_path('storage/propostas/cliente/paginas/3.jpg');
        $image4 = public_path('storage/propostas/cliente/paginas/4.jpg');
        $image5 = public_path('storage/propostas/cliente/paginas/5.jpg');

        // HTML para a capa
        $capa = '
    <div style="position: relative; text-align: center; width: 100%; height: 100%;">
        <img src="' . $dirCapa . '" alt="Background" style="width: 100%; height: 100%" />
    </div>
    ';

        // HTML para a segunda página com sobreposição de texto
        $page2 = '
    <div style="position: relative; text-align: center; width: 100%; height: 100%;">
        <img src="' . $image2 . '" alt="Background" style="width: 100%; height: 100%" />
        <div style="
            position: absolute;
            top: 50;
            left: 10;
            width: 100%;
            text-align: left;
        ">
            ' . $html . '
        </div>
    </div>


    ';

        // Outras páginas
        $page3 = '
    <div style="position: relative; text-align: center; width: 100%; height: 100%;">
        <img src="' . $image3 . '" alt="Background" style="width: 100%; height: 100%" />
    </div>
    ';
        $page4 = '
    <div style="position: relative; text-align: center; width: 100%; height: 100%;">
        <img src="' . $image4 . '" alt="Background" style="width: 100%; height: 100%" />
    </div>
    ';
        $page5 = '
    <div style="position: relative; text-align: center; width: 100%; height: 100%;">
        <img src="' . $image5 . '" alt="Background" style="width: 100%; height: 100%" />
    </div>
    ';

        // Gera o PDF com Snappy
        $pdf = PDF::loadHTML($capa . $page2 . $page3 . $page4 . $page5)
            ->setOption('encoding', 'UTF-8')
            ->setOption('enable-local-file-access', true)
            ->setOption('margin-top', '0mm')
            ->setOption('margin-bottom', '0mm');

        // Retorna o PDF gerado
        return $pdf->inline('proposta_comercial_' . uniqid() . '.pdf');
    }


    public function layoutPdf()
    {
        return [
            'capa' => url('storage/propostas/cliente/paginas/1.jpg'),
            'header' => url('storage/propostas/cliente/paginas/cabecalho.jpg'),
            'page_2' => url('storage/propostas/cliente/paginas/2.jpg'),
            'page_3' => url('storage/propostas/cliente/paginas/3.jpg'),
            'page_4' => url('storage/propostas/cliente/paginas/4.jpg'),
            'page_5' => url('storage/propostas/cliente/paginas/5.jpg'),
        ];
    }
}
