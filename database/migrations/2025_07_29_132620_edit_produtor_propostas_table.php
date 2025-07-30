<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('produtor_propostas', function (Blueprint $table) {
            // 1. Remover foreign key
            $table->dropForeign(['concessionaria_id']);

            // 2. Renomear colunas
            $table->renameColumn('geracao', 'geracao_media');
            $table->renameColumn('valor', 'valor_investimento');

            // 3. Remover colunas
            $table->dropColumn('potencia_ac');
            $table->dropColumn('concessionaria_id');
        });

        Schema::table('produtor_propostas', function (Blueprint $table) {
            // 4. Adicionar novas colunas
            $table->decimal('taxa_reducao', 8, 2)->after('potencia');
            $table->integer('prazo_locacao')->after('potencia');
            $table->foreignId('consultor_id')->after('produtor_id')->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
    }
};
