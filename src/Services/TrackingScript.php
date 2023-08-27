<?php

namespace AllenKhoury\UserActivity\Services;

use Illuminate\Support\Collection;

class TrackingScript
{
    private string $tracking_script = '';

    public function __construct( string|null $tag = null)
    {
        $tag = str_replace("'", "", $tag);

        $this->set_tag($tag);

        $config_data = $this->get_config_data();
        $this->tracking_script = '
            <script>
                var broadcastingData = '.$config_data->toJson().'; 
                var broadcastingHost = "'.config('plugin-config.host').'";
            </script>
            <script src="/vendor/al-user-activity/assets/js/tracking-script.js"></script>
        ';
    }

    public function __toString(): string
    {
        return $this->tracking_script;
    }

    private function set_tag(string|null $tag = null): void
    {
        session()->forget('al-user-activity-tag');
        session()->put('al-user-activity-tag', $tag);
    }

    private function get_config_data(): Collection
    {
        return collect(
            data_get(
                config('broadcasting.connections'),
                config('broadcasting.default'),
                []
            )
        );
    }
}