<?php

use AllenKhoury\UserActivity\Http\Controllers\ActivityLogController;
use AllenKhoury\UserActivity\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

$middlewares = ['web', 'al-auth', 'no-logging'];
$middlewares = array_merge($middlewares, config('al-user-activity.tracking.extra_middlewares', []));

$prefix = config('al-user-activity.dashboard.url_prefix', '');
if( $prefix && !str_ends_with($prefix, '/'))
    $prefix .= '/';

Route::prefix($prefix.'al-user-activity/')
    ->name('al-user-activity.')
    ->middleware($middlewares)
    ->group(function (){

        Route::get('dashboard', [DashboardController::class, 'index'])
            ->name('dashboard.index');

        Route::get('activity-log/list', [ActivityLogController::class, 'list'])
            ->name('activity-log.list');

        Route::get('activity-log', [ActivityLogController::class, 'index'])
            ->name('activity-log.index');

        Route::get('activity-log/{user_activity?}', [ActivityLogController::class, 'get'])
            ->name('activity-log.get');
    });
