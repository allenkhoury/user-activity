<?php

namespace AllenKhoury\UserActivity\Http\Controllers;

use AllenKhoury\UserActivity\Models\UserActivity;
use AllenKhoury\UserActivity\Repositories\UserActivityRepository;
use AllenKhoury\UserActivity\Repositories\UserRepository;
use Illuminate\Http\Request;

class ActivityLogController extends Controller
{
    public function index()
    {
        $userRepository = new UserRepository();
        $user_name_field = $userRepository->get_user_name_field();

        $activity_log_get_route = route('al-user-activity.activity-log.get');

        return view('al-user-activity::mngmnt.activity-log.index', [
            'user_name_field' => $user_name_field,
            'activity_log_get_route' => $activity_log_get_route
        ]);
    }

    public function list(Request $request)
    {
        $userActivityRepository = new UserActivityRepository();
        $result = $userActivityRepository->list($request);

        return datatables()->of($result)->toJson();
    }

    public function get(UserActivity $user_activity)
    {
        $user_activity->load(['user']);

        return [
            'result' => $user_activity
        ];
    }
}