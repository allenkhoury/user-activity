<div class="modal fade" id="ActivityLogDetailsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel3">
                    Activity log details
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <div v-if="activityLog.item" class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">Date</small>
                            <h6 class="mb-0">
                                @{{ activityLog.item.created_at | dateFormat }}
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">User</small>
                            <h6 class="mb-0">
                                @{{ activityLog.item.user[userNameField] }}
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">Page</small>
                            <h6 class="mb-0">
                                <a :href="'/'+activityLog.item.route">
                                    @{{ activityLog.item.route }}
                                </a>
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">Method</small>
                            <h6 class="mb-0">
                                <method :method="activityLog.item.method"></method>
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">IP address</small>
                            <h6 class="mb-0">
                                @{{ activityLog.item.ip }}
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">Browser</small>
                            <h6 class="mb-0">
                                <activity-browser :user-agent="activityLog.item.user_agent"></activity-browser>
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">System</small>
                            <h6 class="mb-0">
                                <activity-system :user-agent="activityLog.item.user_agent"></activity-system>
                            </h6>
                        </div>
                        <div class="mb-3">
                            <small class="text-muted d-block mb-1">Data</small>
                            <h6 class="mb-0">
                                <vue-json-pretty
                                        :show-icon="true"
                                        :show-line-number="true"
                                        deep="2"
                                        :data="JSON.parse(activityLog.item.data)" />
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>