<?php

namespace AllenKhoury\UserActivity\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Blade::directive('tracking_script', function () {
            return '<?php echo $al_user_activity_tracking_script; ?>';
        });
    }
}