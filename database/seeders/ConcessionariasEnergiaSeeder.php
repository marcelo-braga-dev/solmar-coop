<?php

namespace Database\Seeders;

use App\Models\ConcessionariasEnergia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConcessionariasEnergiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ConcessionariasEnergia::create(['nome' => 'Eletroacre (Grupo Energisa)', 'estado' => 'AC']);
        ConcessionariasEnergia::create(['nome' => 'Equatorial Alagoas', 'estado' => 'AL']);
        ConcessionariasEnergia::create(['nome' => 'CEA (Companhia de Eletricidade do Amapá)', 'estado' => 'AP']);
        ConcessionariasEnergia::create(['nome' => 'Amazonas Energia', 'estado' => 'AM']);
        ConcessionariasEnergia::create(['nome' => 'Neoenergia Coelba', 'estado' => 'BA']);
        ConcessionariasEnergia::create(['nome' => 'Enel Distribuição Ceará', 'estado' => 'CE']);
        ConcessionariasEnergia::create(['nome' => 'Neoenergia Brasília', 'estado' => 'DF']);
        ConcessionariasEnergia::create(['nome' => 'EDP Espírito Santo', 'estado' => 'ES']);
        ConcessionariasEnergia::create(['nome' => 'Enel Distribuição Goiás', 'estado' => 'GO']);
        ConcessionariasEnergia::create(['nome' => 'Equatorial Maranhão', 'estado' => 'MA']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Mato Grosso', 'estado' => 'MT']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Mato Grosso do Sul', 'estado' => 'MS']);
        ConcessionariasEnergia::create(['nome' => 'Cemig Distribuição', 'estado' => 'MG']);
        ConcessionariasEnergia::create(['nome' => 'Equatorial Pará', 'estado' => 'PA']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Paraíba', 'estado' => 'PB']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Borborema', 'estado' => 'PB']);
        ConcessionariasEnergia::create(['nome' => 'Copel Distribuição', 'estado' => 'PR']);
        ConcessionariasEnergia::create(['nome' => 'Neoenergia Pernambuco', 'estado' => 'PE']);
        ConcessionariasEnergia::create(['nome' => 'Equatorial Piauí', 'estado' => 'PI']);
        ConcessionariasEnergia::create(['nome' => 'Light SESA', 'estado' => 'RJ']);
        ConcessionariasEnergia::create(['nome' => 'Enel Distribuição Rio', 'estado' => 'RJ']);
        ConcessionariasEnergia::create(['nome' => 'Neoenergia Cosern', 'estado' => 'RN']);
        ConcessionariasEnergia::create(['nome' => 'CEEE Grupo Equatorial', 'estado' => 'RS']);
        ConcessionariasEnergia::create(['nome' => 'RGE Sul Distribuidora de Energia S.A.', 'estado' => 'RS']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Rondônia', 'estado' => 'RO']);
        ConcessionariasEnergia::create(['nome' => 'Roraima Energia', 'estado' => 'RR']);
        ConcessionariasEnergia::create(['nome' => 'Celesc Distribuição', 'estado' => 'SC']);
        ConcessionariasEnergia::create(['nome' => 'Enel Distribuição São Paulo', 'estado' => 'SP']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Sul-Sudeste', 'estado' => 'SP']);
        ConcessionariasEnergia::create(['nome' => 'CPFL Paulista', 'estado' => 'SP']);
        ConcessionariasEnergia::create(['nome' => 'CPFL Piratininga', 'estado' => 'SP']);
        ConcessionariasEnergia::create(['nome' => 'CPFL Santa Cruz', 'estado' => 'SP']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Sergipe', 'estado' => 'SE']);
        ConcessionariasEnergia::create(['nome' => 'Energisa Tocantins', 'estado' => 'TO']);
        ConcessionariasEnergia::create(['nome' => 'Companhia Energética de Roraima (CERR)', 'estado' => 'AC']);
        ConcessionariasEnergia::create(['nome' => 'Eletrobras', 'estado' => 'BR']);
        ConcessionariasEnergia::create(['nome' => 'Furnas', 'estado' => 'BR']);
        ConcessionariasEnergia::create(['nome' => 'Chesf (Companhia Hidro Elétrica do São Francisco)', 'estado' => 'BR']);
        ConcessionariasEnergia::create(['nome' => 'Eletronorte', 'estado' => 'BR']);
        ConcessionariasEnergia::create(['nome' => 'Eletrosul', 'estado' => 'BR']);
        ConcessionariasEnergia::create(['nome' => 'CPFL Sul', 'estado' => 'RS']);
        ConcessionariasEnergia::create(['nome' => 'RGE (Rio Grande Energia)', 'estado' => 'RS']);
        ConcessionariasEnergia::create(['nome' => 'Cemig', 'estado' => 'MG']);
        ConcessionariasEnergia::create(['nome' => 'Amazonas Distribuidora de Energia', 'estado' => 'AM']);
        ConcessionariasEnergia::create(['nome' => 'Companhia de Eletricidade do Amapá (CEA)', 'estado' => 'AP']);
        ConcessionariasEnergia::create(['nome' => 'Companhia Energética de Brasília (CEB)', 'estado' => 'DF']);
        ConcessionariasEnergia::create(['nome' => 'Equatorial Pará', 'estado' => 'PA']);
        ConcessionariasEnergia::create(['nome' => 'Equatorial Maranhão', 'estado' => 'MA']);
        ConcessionariasEnergia::create(['nome' => 'Neoenergia Brasília', 'estado' => 'DF']);
    }
}
