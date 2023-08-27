<?php

namespace AllenKhoury\UserActivity\Services;

class ActivityLoggingService
{
    const DEFAULT_METHODS_ALLOWED = ['POST', 'PUT', 'PATH', 'DELETE'];

    private array $methods_allowed = [];

    public function __construct()
    {
        $this->methods_allowed = config('al-user-activity.activity_log.allowed_methods', self::DEFAULT_METHODS_ALLOWED);
    }

    public function log($request)
    {
        $method = $request->method();

        if( !$this->can_method_be_tracked($method) )
            return;

        if( $this->no_logging($request) )
            return;

        if( !auth()->check() )
            return;

        if( $this->is_broadcasting($request) )
            return;

        \DB::table('al_user_activity')
            ->insert([
                'user_id' => auth()->id(),
                'method' => $request->method(),
                'data' => json_encode($request->all()),
                'route' => $request->path(),
                'ip' => $request->ip(),
                'user_agent' => $request->server('HTTP_USER_AGENT'),
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ]);
    }

    private function can_method_be_tracked(string $method): bool
    {
        return !empty(
            array_intersect(
                [strtolower($method), strtoupper($method)],
                $this->methods_allowed
            )
        );
    }

    private function no_logging($request): bool
    {
        return in_array( trans('al-user-activity::general.no_logging_middleware_alias'), $request->route()->middleware());
    }

    private function is_broadcasting($request): bool
    {
        return $request->input('socket_id') && $request->input('channel_name');
    }
}