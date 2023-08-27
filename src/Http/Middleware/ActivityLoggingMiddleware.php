<?php

namespace AllenKhoury\UserActivity\Http\Middleware;

use AllenKhoury\UserActivity\Services\ActivityLoggingService;
use Closure;

class ActivityLoggingMiddleware
{
    public function handle($request, Closure $next)
    {
        $activityLoggingService = new ActivityLoggingService();
        $activityLoggingService->log($request);
        return $next($request);
    }
}