import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: broadcastingData.key,
    cluster: broadcastingData.options.cluster ?? 'mt1',
    wsHost: broadcastingHost ? broadcastingHost : `ws-${broadcastingData.options.cluster}.pusher.com`,
    wsPort: broadcastingData.options.port ?? 80,
    wssPort: broadcastingData.options.port ?? 443,
    forceTLS: (broadcastingData.options.scheme ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

window.Echo.join('al.tracking.users')
    .here((users) => {})
    .joining((user) => {})
    .error((error) => {});