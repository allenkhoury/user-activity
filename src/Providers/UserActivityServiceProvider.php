<?php

namespace AllenKhoury\UserActivity\Providers;

use AllenKhoury\UserActivity\Http\Middleware\AuthMiddleware;
use AllenKhoury\UserActivity\Services\BroadcastManager;
use hisorange\BrowserDetect\Exceptions\Exception;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class UserActivityServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->register_config();
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->boot_views_and_langs();

        $this->publish();

        $this->boot_channels();
    }

    private function register_config()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../../config/plugin-config.php', 'plugin-config'
        );

        $this->mergeConfigFrom(
            __DIR__ . '/../../config/al-user-activity.php', 'al-user-activity'
        );
    }

    private function boot_views_and_langs()
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'al-user-activity');

        $this->loadTranslationsFrom(__DIR__ . '/../../resources/lang', 'al-user-activity');
    }

    private function publish()
    {
        $this->publishes([
            __DIR__ . '/../../config/al-user-activity.php' => config_path('al-user-activity'),
            __DIR__.'/../database/migrations/' => database_path('migrations'),
            __DIR__ . '/../../public' => public_path('vendor/al-user-activity'),
        ], 'al-user-activity.package');

        // Publish config
        $this->publishes([
            __DIR__ . '/../../config/al-user-activity.php' => config_path('al-user-activity'),
        ], 'al-user-activity.config');

        // Publish migrations
        $this->publishes([
            __DIR__.'/../database/migrations/' => database_path('migrations')
        ], 'al-user-activity.migrations');

        // Publish assets
        $this->publishes([
            __DIR__ . '/../../public' => public_path('vendor/al-user-activity'),
        ], 'al-user-activity.assets');
    }

    private function boot_channels()
    {
        $broadcastManager = new BroadcastManager();
        $broadcastManager->boot_channel();
    }
}
