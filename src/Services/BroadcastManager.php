<?php

namespace AllenKhoury\UserActivity\Services;

use AllenKhoury\UserActivity\Repositories\UserRepository;
use hisorange\BrowserDetect\Exceptions\Exception;
use Illuminate\Support\Facades\Broadcast;

class BroadcastManager
{

    public function boot_channel()
    {
        if( !$this->isTrackingEnabled() )
            return;

        Broadcast::channel('al.tracking.users', function ($user) {

            $user_data = [
                'id' => $user->id,
                'url' => request()->server('HTTP_REFERER'),
                'name' => $this->get_name($user),
                'date' => new \Carbon\Carbon(),
                'tag' => session()->get('al-user-activity-tag') ?: 'general',
                'ip' => request()->ip(),
                'user_agent' => request()->server('HTTP_USER_AGENT'),
            ];

            foreach (config('al-user-activity.tracking.user_tracking_fields', []) as $field) {
                if (isset($user->{$field}))
                    $user_data[$field] = $user->{$field};
            }

            return $user_data;
        });
    }

    private function get_name($user): string
    {
        $userRepository = new UserRepository();
        $name_field = $userRepository->get_user_name_field();

        return $user->{$name_field};
    }

    private function isTrackingEnabled(): bool
    {
        return config('al-user-activity.tracking.enabled');
    }
}