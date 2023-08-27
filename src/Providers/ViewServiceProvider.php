<?php

namespace AllenKhoury\UserActivity\Providers;

use AllenKhoury\UserActivity\Services\TrackingScript;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    public function boot()
    {
        view()->composer('*', function($view) {
            $trackingScript = new TrackingScript();
            $view->with('al_user_activity_tracking_script', $trackingScript);
        });
    }
}