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
        Schema::create('usina_propostas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index();
            $table->string('status')->index();
            $table->unsignedBigInteger('concessionaria_id')->nullable()->index();
            $table->integer('uc');
            $table->decimal('media_geracao', 8, 2);
            $table->integer('prazo_locacao')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('concessionaria_id')->references('id')->on('concessionarias');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usina_propostas');
    }
};
