@extends('al-user-activity::mngmnt.layout.master')

@section('content')

    <div class="row">
        <div class="col-12 order-0 mb-4">
            <div class="card h-100">
                <div class="card-header">
                    <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Activity log</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div v-cloak class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <al-table url="{{ route('al-user-activity.activity-log.list') }}"
                                          :columns="columns"
                                          :filter="filters"
                                          :search="filters.search"
                                ></al-table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    @include('al-user-activity::mngmnt.partials.activity-log-modal')
@endsection

@push('scripts')
    <script>
        var userNameField = "{{ $user_name_field }}";
        var activityLogGetRoute = "{{ $activity_log_get_route }}";
    </script>
    <script src="/vendor/al-user-activity/assets/js/mngmnt/app.js"></script>
    <script src="/vendor/al-user-activity/assets/js/mngmnt/activity-log.js"></script>
@endpush