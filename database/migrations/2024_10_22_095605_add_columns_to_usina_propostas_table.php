<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('usina_propostas', function (Blueprint $table) {
            $table->unsignedBigInteger('seller_id')->after('concessionaria_id')->index()->nullable();
            $table->decimal('potencia_usina', 8, 3)->nullable()->after('prazo_locacao');
            $table->decimal('taxa_comissao', 6, 3)->nullable()->after('seller_id');
            $table->string('inversores')->nullable()->after('potencia_usina');
            $table->string('modulos')->nullable()->after('inversores');
            $table->decimal('taxa_reducao_consumo', 8, 3)->nullable()->after('modulos');

            $table->foreign('seller_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('usina_propostas', function (Blueprint $table) {
            $table->dropForeign(['seller_id']);
            $table->dropColumn([
                'seller_id',
                'potencia_usina',
                'taxa_comissao',
                'inversores',
                'modulos',
                'taxa_reducao_consumo'
            ]);
        });
    }
};
