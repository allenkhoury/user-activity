@extends('al-user-activity::mngmnt.layout.master')

@section('content')

    <div v-cloak class="row">
        <div class="col-lg-12 order-0 mb-4">
            <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Active users</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex flex-column align-items-center gap-1">
                            <h1 class="my-3 active-users">
                                @{{ usersFiltered.length }}
                            </h1>
                        </div>
                        <div id="orderStatisticsChart"></div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <ul class="p-0 m-0">
                                <li v-for="user in usersFiltered" class="d-flex mb-4 pb-1">
                                    <div style="cursor: auto" class="avatar flex-shrink-0 me-3">
                                        <span class="avatar-initial rounded bg-label-primary">
                                            <i class='bx bx-user-voice'></i>
                                        </span>
                                    </div>
                                    <div class="d-flex w-100 flex-wrap align-items-start justify-content-between gap-2">
                                        <div class="d-flex">
                                            <div class="me-3">
                                                <h6 class="mb-0">
                                                    @{{ user.name }}
                                                    <span class="ms-3">
                                                        <small>
                                                            <activity-browser class="me-2" :user-agent="user.user_agent" :icon-only="true"></activity-browser>
                                                            <activity-system :user-agent="user.user_agent" :icon-only="true"></activity-system>
                                                        </small>
                                                    </span>
                                                </h6>
                                                <small class="text-muted">@{{ user.url }}</small>
                                                <small class="text-muted d-block">
                                                    <em>
                                                        IP address: @{{ user.ip }}
                                                    </em>
                                                </small>

                                                {{--                                        <small class="text-muted">@{{ user.tag }}</small>--}}
                                            </div>
                                            <div class="me-2">
                                                <h6 class="mb-0"></h6>
                                                <small class="text-muted">

                                                </small>
                                            </div>
                                        </div>

                                        <div class="user-progress">
                                            <small class="fw-semibold">
                                                @{{ user.date | dateFormat }}
                                            </small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12 order-0 mb-4">
            <div class="card h-100">
                <div class="card-header">
                    <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Recent activity log</h5>
                    </div>
                </div>
                <div class="table-responsive text-nowrap">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>User</th>
                                <th>Page</th>
                                <th>Method</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            <tr v-for="activity in recentActivity">
                                <td>
                                    @{{ activity.created_at | dateFormat }}
                                </td>
                                <td>
                                    <template v-if="activity.user">
                                        @{{ activity.user[userNameField] }}
                                    </template>
                                    <template v-else>
                                        &mdash;
                                    </template>
                                </td>
                                <td>
                                    <a :href="'/' + activity.route">
                                        @{{ activity.route }}
                                    </a>
                                </td>
                                <td>
                                    <method :method="activity.method"></method>
                                </td>
                                <td>
                                    <button @click="openDetailsModal(activity.id, $event)" type="button" class="btn btn-sm btn-outline-primary">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    @include('al-user-activity::mngmnt.partials.activity-log-modal')
@endsection

@push('scripts')
    <script>
        var broadcastingData = @json(data_get(config('broadcasting.connections'), config('broadcasting.default'), []));
        var broadcastingHost = "{{config('plugin-config.host')}}";
        var recentActivity = @json($recent_activity);
        var thisUser = "{{ auth()->id() }}";
        var userNameField = "{{ $user_name_field }}";
        var activityLogGetRoute = "{{ $activity_log_get_route }}";
    </script>
    <script src="/vendor/al-user-activity/assets/js/mngmnt/app.js"></script>
    <script src="/vendor/al-user-activity/assets/js/mngmnt/dashboard.js"></script>
@endpush