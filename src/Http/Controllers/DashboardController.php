<?php

namespace AllenKhoury\UserActivity\Http\Controllers;

use AllenKhoury\UserActivity\Repositories\UserActivityRepository;
use AllenKhoury\UserActivity\Repositories\UserRepository;

class DashboardController extends Controller
{
    public function index()
    {
        $userActivityRepository = new UserActivityRepository();
        $recent_activity = $userActivityRepository->get_recent_logs();

        $userRepository = new UserRepository();
        $user_name_field = $userRepository->get_user_name_field();

        $activity_log_get_route = route('al-user-activity.activity-log.get');

        return view('al-user-activity::mngmnt.dashboard.index', [
            'recent_activity' => $recent_activity,
            'user_name_field' => $user_name_field,
            'activity_log_get_route' => $activity_log_get_route
        ]);
    }

}