<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('al_user_activity', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->index();
            $table->string('method', 10)->index();
            $table->string('route');
            $table->string('ip', 50);
            $table->string('user_agent');
            $table->longText('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('al_user_activity');
    }
};
