<?php

namespace AllenKhoury\UserActivity\Repositories;

use AllenKhoury\UserActivity\Models\UserActivity;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class UserActivityRepository
{

    public function get_recent_logs(): Collection
    {
        $result = UserActivity::orderBy('created_at', 'desc')
            ->with(['user'])
            ->limit(10)
            ->get();

        return $result;
    }

    public function list(Request $request): Builder
    {
        $userRepository = new UserRepository();
        $user_name_field = $userRepository->get_user_name_field();

        $user_name_query = 'users.'.$user_name_field.' as user_full_name';

        $result = UserActivity::select([
            'al_user_activity.id as id',
            'al_user_activity.method as method',
            'al_user_activity.route as route',
            $user_name_query
        ])
            ->selectRaw('DATE_FORMAT(al_user_activity.created_at, "%d/%m/%Y %H:%i") as created_at_formatted')

            ->leftJoin('users', 'users.id', '=', 'al_user_activity.user_id')
            ->whereNotNull('users.id')

            ->orderBy('al_user_activity.created_at', 'desc');

        return $result;
    }
    
}