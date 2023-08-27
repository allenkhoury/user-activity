<?php

namespace AllenKhoury\UserActivity\Http\Middleware;

use Closure;

class AuthMiddleware
{
    public function handle($request, Closure $next)
    {
        $allowed_users = config('al-user-activity.tracking.allowed_users', []);

        if( !auth()->check() )
            abort(403);

        if( !empty($allowed_users) )
            if( !in_array(auth()->id(), $allowed_users) ){
                abort(403);
            }

        return $next($request);
    }
}