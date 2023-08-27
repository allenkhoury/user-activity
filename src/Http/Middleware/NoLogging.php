<?php

namespace AllenKhoury\UserActivity\Http\Middleware;

use Closure;

class NoLogging
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}