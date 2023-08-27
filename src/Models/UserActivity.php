<?php

namespace AllenKhoury\UserActivity\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserActivity extends Model
{
    protected $guarded = ['id'];

    protected $table = 'al_user_activity';

    public function user(): BelongsTo
    {
        return $this->belongsTo( config('auth.providers.users.model') );
    }
}