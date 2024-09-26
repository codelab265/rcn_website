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
        Schema::create('partnerships', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone_number');
            $table->string('address');
            $table->string('city');
            $table->string('country');
            $table->string('communication_mode');
            $table->string('whatsapp');
            $table->string('agreement');
            $table->string("amount");
            $table->string("form_of_partnership");
            $table->string("month_of_commencement");
            $table->string("currency");
            $table->string('partnership_frequency');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partnerships');
    }
};
