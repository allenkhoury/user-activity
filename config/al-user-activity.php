<?php

return [

    /*
    |--------------------------------------------------------------------------
    | User identifier
    |--------------------------------------------------------------------------
    |
    | This is the column in the users table used to identify any user.
    | It will be used throughout the dashboard when showing users.
    |
    | Example: "name", "full_name", "fullName", "first_name"...
    |
    */
    'user_identifier' => 'full_name',


    /*
    |--------------------------------------------------------------------------
    | User activity dashboard
    |--------------------------------------------------------------------------
    |
    | This is the user activity dashboard options.
    | The user activity dashboard is where we can see all logs and track active users
    |
    | "enabled": This will enable/disable the dashboard using this option.
    | "url_prefix": The dashboard is initially available on /al-user-activity.
    |       However, this option can add a custom prefix to the url.
    |       Example: if we set this option to admin/, the dashboard URL will become /admin/al-user-activity
    | "extra_middlewares": These are extra middlewares that can be set to allow access to the user activity dashboard.
    |       - It consist of an array of middleware aliases.
    |       - By default, only authenticated users can access the user activity dashboard.
    |       - A good practice is to add a middleware alias to only give admins access.
    |
    */
    'dashboard' => [

        /*
         * @param boolean
         * */
        'enabled' => env('AL_DASHBOARD_ENABLED', true),

        /*
         * @param string
         * */
        'url_prefix' => '',

        /*
        * @param array
        * */
        'extra_middlewares' => [],
    ],


    /*
    |--------------------------------------------------------------------------
    | Activity log
    |--------------------------------------------------------------------------
    |
    | These are the options for the user activity logging.
    | User activity logging will log any action made by users on the website.
    |
    | "enabled": This will enable/disable user activity logging.
    | "allowed_methods": This will specify what methods should be tracked.
    | Check https://laravel.com/docs/10.x/routing#available-router-methods for a list of methods used in laravel.
    |
    */
    'activity_log' => [

        /*
         * @param boolean
         * */
        'enabled' => env('AL_ACTIVITY_LOG_ENABLED', false),

        /*
         * @param array
         * */
        'allowed_methods' => [
            'POST', 'PUT', 'PATH', 'DELETE'
        ],
    ],


    /*
    |--------------------------------------------------------------------------
    | Active users tracking
    |--------------------------------------------------------------------------
    |
    | These are the options active users tracking.
    | This will track in realtime active users on the website.
    | Tracking users will work with Pusher, so pusher should be installed and set properly before enabling tracking.
    | https://laravel.com/docs/8.x/broadcasting#main-content
    |
    | "enabled": This will enable/disable tracking users.
    |
    */
    'tracking' => [

        /*
         * @param boolean
         * */
        'enabled' => env('AL_TRACKING_ENABLED', false),

    ],

];