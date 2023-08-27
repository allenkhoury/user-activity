<?php

namespace AllenKhoury\UserActivity\Providers;

use AllenKhoury\UserActivity\Http\Middleware\ActivityLoggingMiddleware;
use AllenKhoury\UserActivity\Http\Middleware\AuthMiddleware;
use AllenKhoury\UserActivity\Http\Middleware\NoLogging;

class RouteServiceProvider extends \Illuminate\Foundation\Support\Providers\RouteServiceProvider
{
    public function boot()
    {
        $this->app['router']->aliasMiddleware('al-auth', AuthMiddleware::class );
        $this->app['router']->aliasMiddleware(trans('al-user-activity::general.no_logging_middleware_alias'), NoLogging::class );

        if( $this->isLoggingEnabled() )
            $this->app['router']->pushMiddlewareToGroup('web', ActivityLoggingMiddleware::class);

        if( $this->isDashboardEnabled() )
            $this->loadRoutesFrom(__DIR__ . '/../Routes/mngmnt.php');
    }

    private function isLoggingEnabled(): bool
    {
        return config('al-user-activity.activity_log.enabled');
    }

    private function isDashboardEnabled(): bool
    {
        return config('al-user-activity.dashboard.enabled');
    }
}