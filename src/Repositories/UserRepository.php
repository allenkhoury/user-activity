<?php

namespace AllenKhoury\UserActivity\Repositories;

class UserRepository
{

    public function get_user_name_field(): string
    {
        $config_field = config('al-user-activity.user_identifier');

        if ($config_field) {
            if (auth()->user()->{$config_field}) {
                return $config_field;
            }
        }

        return $this->guess_user_name_field();
    }

    private function guess_user_name_field(): string
    {
        $dictionary = [
            'name',
            'full_name',
            'fullName',
            'first_name',
            'firstName'
        ];

        foreach ($dictionary as $field) {
            if (auth()->user()->{$field})
                return $field;
        }

        throw new \Exception(
            'Cannot find the user name field, please make sure to set the config user_identifier.'
        );
    }

}