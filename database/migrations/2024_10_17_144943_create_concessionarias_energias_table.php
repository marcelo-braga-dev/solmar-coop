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
        Schema::create('concessionarias_energias', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('estado', 2);
            $table->timestamps();
        });

        Schema::table('usina_solars', function (Blueprint $table) {
            $table->unsignedBigInteger('concessionaria_id')->after('prazo_locacao')->nullable();
            $table->foreign('concessionaria_id')->references('id')->on('concessionarias_energias');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('concessionarias_energias');
    }
};
