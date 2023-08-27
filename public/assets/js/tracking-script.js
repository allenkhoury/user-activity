/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/tracking-script.js":
/*!************************************************!*\
  !*** ./resources/assets/js/tracking-script.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
var _broadcastingData$opt, _broadcastingData$opt2, _broadcastingData$opt3, _broadcastingData$opt4;


window.Pusher = (pusher_js__WEBPACK_IMPORTED_MODULE_1___default());
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: 'pusher',
  key: broadcastingData.key,
  cluster: (_broadcastingData$opt = broadcastingData.options.cluster) !== null && _broadcastingData$opt !== void 0 ? _broadcastingData$opt : 'mt1',
  wsHost: broadcastingHost ? broadcastingHost : "ws-".concat(broadcastingData.options.cluster, ".pusher.com"),
  wsPort: (_broadcastingData$opt2 = broadcastingData.options.port) !== null && _broadcastingData$opt2 !== void 0 ? _broadcastingData$opt2 : 80,
  wssPort: (_broadcastingData$opt3 = broadcastingData.options.port) !== null && _broadcastingData$opt3 !== void 0 ? _broadcastingData$opt3 : 443,
  forceTLS: ((_broadcastingData$opt4 = broadcastingData.options.scheme) !== null && _broadcastingData$opt4 !== void 0 ? _broadcastingData$opt4 : 'https') === 'https',
  enabledTransports: ['ws', 'wss']
});
window.Echo.join('al.tracking.users').here(function (users) {}).joining(function (user) {}).error(function (error) {});

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Channel: () => (/* binding */ Channel),
/* harmony export */   "default": () => (/* binding */ Echo)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/**
 * This class represents a basic channel.
 */
var Channel = /*#__PURE__*/function () {
  function Channel() {
    _classCallCheck(this, Channel);
  }

  _createClass(Channel, [{
    key: "listenForWhisper",
    value:
    /**
     * Listen for a whisper event on the channel instance.
     */
    function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "notification",
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */

  }, {
    key: "stopListeningForWhisper",
    value: function stopListeningForWhisper(event, callback) {
      return this.stopListening('.client-' + event, callback);
    }
  }]);

  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function EventFormatter(namespace) {
    _classCallCheck(this, EventFormatter);

    this.namespace = namespace; //
  }
  /**
   * Format the given event name.
   */


  _createClass(EventFormatter, [{
    key: "format",
    value: function format(event) {
      if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
        return event.substr(1);
      } else if (this.namespace) {
        event = this.namespace + '.' + event;
      }

      return event.replace(/\./g, '\\');
    }
    /**
     * Set the event namespace.
     */

  }, {
    key: "setNamespace",
    value: function setNamespace(value) {
      this.namespace = value;
    }
  }]);

  return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */

var PusherChannel = /*#__PURE__*/function (_Channel) {
  _inherits(PusherChannel, _Channel);

  var _super = _createSuper(PusherChannel);

  /**
   * Create a new class instance.
   */
  function PusherChannel(pusher, name, options) {
    var _this;

    _classCallCheck(this, PusherChannel);

    _this = _super.call(this);
    _this.name = name;
    _this.pusher = pusher;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Pusher channel.
   */


  _createClass(PusherChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.subscription = this.pusher.subscribe(this.name);
    }
    /**
     * Unsubscribe from a Pusher channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.unsubscribe(this.name);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      var _this2 = this;

      this.subscription.bind_global(function (event, data) {
        if (event.startsWith('pusher:')) {
          return;
        }

        var namespace = _this2.options.namespace.replace(/\./g, '\\');

        var formattedEvent = event.startsWith(namespace) ? event.substring(namespace.length + 1) : '.' + event;
        callback(formattedEvent, data);
      });
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      if (callback) {
        this.subscription.unbind(this.eventFormatter.format(event), callback);
      } else {
        this.subscription.unbind(this.eventFormatter.format(event));
      }

      return this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */

  }, {
    key: "stopListeningToAll",
    value: function stopListeningToAll(callback) {
      if (callback) {
        this.subscription.unbind_global(callback);
      } else {
        this.subscription.unbind_global();
      }

      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('pusher:subscription_succeeded', function () {
        callback();
      });
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      this.on('pusher:subscription_error', function (status) {
        callback(status);
      });
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      this.subscription.bind(event, callback);
      return this;
    }
  }]);

  return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */

var PusherPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherPrivateChannel);

  function PusherPrivateChannel() {
    _classCallCheck(this, PusherPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher private channel.
 */

var PusherEncryptedPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherEncryptedPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherEncryptedPrivateChannel);

  function PusherEncryptedPrivateChannel() {
    _classCallCheck(this, PusherEncryptedPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherEncryptedPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherEncryptedPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */

var PusherPresenceChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPresenceChannel, _PusherChannel);

  var _super = _createSuper(PusherPresenceChannel);

  function PusherPresenceChannel() {
    _classCallCheck(this, PusherPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      this.on('pusher:subscription_succeeded', function (data) {
        callback(Object.keys(data.members).map(function (k) {
          return data.members[k];
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('pusher:member_added', function (member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('pusher:member_removed', function (member) {
        callback(member.info);
      });
      return this;
    }
  }]);

  return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */

var SocketIoChannel = /*#__PURE__*/function (_Channel) {
  _inherits(SocketIoChannel, _Channel);

  var _super = _createSuper(SocketIoChannel);

  /**
   * Create a new class instance.
   */
  function SocketIoChannel(socket, name, options) {
    var _this;

    _classCallCheck(this, SocketIoChannel);

    _this = _super.call(this);
    /**
     * The event callbacks applied to the socket.
     */

    _this.events = {};
    /**
     * User supplied callbacks for events on this channel.
     */

    _this.listeners = {};
    _this.name = name;
    _this.socket = socket;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Socket.io channel.
   */


  _createClass(SocketIoChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.socket.emit('subscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Unsubscribe from channel and ubind event callbacks.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.unbind();
      this.socket.emit('unsubscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      this.unbindEvent(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('connect', function (socket) {
        callback(socket);
      });
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      var _this2 = this;

      this.listeners[event] = this.listeners[event] || [];

      if (!this.events[event]) {
        this.events[event] = function (channel, data) {
          if (_this2.name === channel && _this2.listeners[event]) {
            _this2.listeners[event].forEach(function (cb) {
              return cb(data);
            });
          }
        };

        this.socket.on(event, this.events[event]);
      }

      this.listeners[event].push(callback);
      return this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */

  }, {
    key: "unbind",
    value: function unbind() {
      var _this3 = this;

      Object.keys(this.events).forEach(function (event) {
        _this3.unbindEvent(event);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */

  }, {
    key: "unbindEvent",
    value: function unbindEvent(event, callback) {
      this.listeners[event] = this.listeners[event] || [];

      if (callback) {
        this.listeners[event] = this.listeners[event].filter(function (cb) {
          return cb !== callback;
        });
      }

      if (!callback || this.listeners[event].length === 0) {
        if (this.events[event]) {
          this.socket.removeListener(event, this.events[event]);
          delete this.events[event];
        }

        delete this.listeners[event];
      }
    }
  }]);

  return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io private channel.
 */

var SocketIoPrivateChannel = /*#__PURE__*/function (_SocketIoChannel) {
  _inherits(SocketIoPrivateChannel, _SocketIoChannel);

  var _super = _createSuper(SocketIoPrivateChannel);

  function SocketIoPrivateChannel() {
    _classCallCheck(this, SocketIoPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
  }]);

  return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */

var SocketIoPresenceChannel = /*#__PURE__*/function (_SocketIoPrivateChann) {
  _inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

  var _super = _createSuper(SocketIoPresenceChannel);

  function SocketIoPresenceChannel() {
    _classCallCheck(this, SocketIoPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      this.on('presence:subscribed', function (members) {
        callback(members.map(function (m) {
          return m.user_info;
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('presence:joining', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('presence:leaving', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
  }]);

  return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */

var NullChannel = /*#__PURE__*/function (_Channel) {
  _inherits(NullChannel, _Channel);

  var _super = _createSuper(NullChannel);

  function NullChannel() {
    _classCallCheck(this, NullChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullChannel, [{
    key: "subscribe",
    value:
    /**
     * Subscribe to a channel.
     */
    function subscribe() {//
    }
    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {//
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      return this;
    }
  }]);

  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */

var NullPrivateChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPrivateChannel, _NullChannel);

  var _super = _createSuper(NullPrivateChannel);

  function NullPrivateChannel() {
    _classCallCheck(this, NullPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      return this;
    }
  }]);

  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */

var NullPresenceChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPresenceChannel, _NullChannel);

  var _super = _createSuper(NullPresenceChannel);

  function NullPresenceChannel() {
    _classCallCheck(this, NullPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      return this;
    }
  }]);

  return NullPresenceChannel;
}(NullChannel);

var Connector = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Connector(options) {
    _classCallCheck(this, Connector);

    /**
     * Default connector options.
     */
    this._defaultOptions = {
      auth: {
        headers: {}
      },
      authEndpoint: '/broadcasting/auth',
      userAuthentication: {
        endpoint: '/broadcasting/user-auth',
        headers: {}
      },
      broadcaster: 'pusher',
      csrfToken: null,
      bearerToken: null,
      host: null,
      key: null,
      namespace: 'App.Events'
    };
    this.setOptions(options);
    this.connect();
  }
  /**
   * Merge the custom options with the defaults.
   */


  _createClass(Connector, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = _extends(this._defaultOptions, options);
      var token = this.csrfToken();

      if (token) {
        this.options.auth.headers['X-CSRF-TOKEN'] = token;
        this.options.userAuthentication.headers['X-CSRF-TOKEN'] = token;
      }

      token = this.options.bearerToken;

      if (token) {
        this.options.auth.headers['Authorization'] = 'Bearer ' + token;
        this.options.userAuthentication.headers['Authorization'] = 'Bearer ' + token;
      }

      return options;
    }
    /**
     * Extract the CSRF token from the page.
     */

  }, {
    key: "csrfToken",
    value: function csrfToken() {
      var selector;

      if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
        return window['Laravel'].csrfToken;
      } else if (this.options.csrfToken) {
        return this.options.csrfToken;
      } else if (typeof document !== 'undefined' && typeof document.querySelector === 'function' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
        return selector.getAttribute('content');
      }

      return null;
    }
  }]);

  return Connector;
}();

/**
 * This class creates a connector to Pusher.
 */

var PusherConnector = /*#__PURE__*/function (_Connector) {
  _inherits(PusherConnector, _Connector);

  var _super = _createSuper(PusherConnector);

  function PusherConnector() {
    var _this;

    _classCallCheck(this, PusherConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Pusher connection.
   */


  _createClass(PusherConnector, [{
    key: "connect",
    value: function connect() {
      if (typeof this.options.client !== 'undefined') {
        this.pusher = this.options.client;
      } else if (this.options.Pusher) {
        this.pusher = new this.options.Pusher(this.options.key, this.options);
      } else {
        this.pusher = new Pusher(this.options.key, this.options);
      }
    }
    /**
     * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
     */

  }, {
    key: "signin",
    value: function signin() {
      this.pusher.signin();
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new PusherChannel(this.pusher, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      if (!this.channels['private-encrypted-' + name]) {
        this.channels['private-encrypted-' + name] = new PusherEncryptedPrivateChannel(this.pusher, 'private-encrypted-' + name, this.options);
      }

      return this.channels['private-encrypted-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this2 = this;

      var channels = [name, 'private-' + name, 'private-encrypted-' + name, 'presence-' + name];
      channels.forEach(function (name, index) {
        _this2.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.pusher.connection.socket_id;
    }
    /**
     * Disconnect Pusher connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.pusher.disconnect();
    }
  }]);

  return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */

var SocketIoConnector = /*#__PURE__*/function (_Connector) {
  _inherits(SocketIoConnector, _Connector);

  var _super = _createSuper(SocketIoConnector);

  function SocketIoConnector() {
    var _this;

    _classCallCheck(this, SocketIoConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Socket.io connection.
   */


  _createClass(SocketIoConnector, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var io = this.getSocketIO();
      this.socket = io(this.options.host, this.options);
      this.socket.on('reconnect', function () {
        Object.values(_this2.channels).forEach(function (channel) {
          channel.subscribe();
        });
      });
      return this.socket;
    }
    /**
     * Get socket.io module from global scope or options.
     */

  }, {
    key: "getSocketIO",
    value: function getSocketIO() {
      if (typeof this.options.client !== 'undefined') {
        return this.options.client;
      }

      if (typeof io !== 'undefined') {
        return io;
      }

      throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this3 = this;

      var channels = [name, 'private-' + name, 'presence-' + name];
      channels.forEach(function (name) {
        _this3.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.socket.id;
    }
    /**
     * Disconnect Socketio connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.socket.disconnect();
    }
  }]);

  return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */

var NullConnector = /*#__PURE__*/function (_Connector) {
  _inherits(NullConnector, _Connector);

  var _super = _createSuper(NullConnector);

  function NullConnector() {
    var _this;

    _classCallCheck(this, NullConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  _createClass(NullConnector, [{
    key: "connect",
    value: function connect() {//
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {//
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {//
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {//
    }
  }]);

  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Echo(options) {
    _classCallCheck(this, Echo);

    this.options = options;
    this.connect();

    if (!this.options.withoutInterceptors) {
      this.registerInterceptors();
    }
  }
  /**
   * Get a channel instance by name.
   */


  _createClass(Echo, [{
    key: "channel",
    value: function channel(_channel) {
      return this.connector.channel(_channel);
    }
    /**
     * Create a new connection.
     */

  }, {
    key: "connect",
    value: function connect() {
      if (this.options.broadcaster == 'pusher') {
        this.connector = new PusherConnector(this.options);
      } else if (this.options.broadcaster == 'socket.io') {
        this.connector = new SocketIoConnector(this.options);
      } else if (this.options.broadcaster == 'null') {
        this.connector = new NullConnector(this.options);
      } else if (typeof this.options.broadcaster == 'function') {
        this.connector = new this.options.broadcaster(this.options);
      }
    }
    /**
     * Disconnect from the Echo server.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.connector.disconnect();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "join",
    value: function join(channel) {
      return this.connector.presenceChannel(channel);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(channel) {
      this.connector.leave(channel);
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(channel) {
      this.connector.leaveChannel(channel);
    }
    /**
     * Leave all channels.
     */

  }, {
    key: "leaveAllChannels",
    value: function leaveAllChannels() {
      for (var channel in this.connector.channels) {
        this.leaveChannel(channel);
      }
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(channel, event, callback) {
      return this.connector.listen(channel, event, callback);
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "private",
    value: function _private(channel) {
      return this.connector.privateChannel(channel);
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivate",
    value: function encryptedPrivate(channel) {
      return this.connector.encryptedPrivateChannel(channel);
    }
    /**
     * Get the Socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.connector.socketId();
    }
    /**
     * Register 3rd party request interceptiors. These are used to automatically
     * send a connections socket id to a Laravel app with a X-Socket-Id header.
     */

  }, {
    key: "registerInterceptors",
    value: function registerInterceptors() {
      if (typeof Vue === 'function' && Vue.http) {
        this.registerVueRequestInterceptor();
      }

      if (typeof axios === 'function') {
        this.registerAxiosRequestInterceptor();
      }

      if (typeof jQuery === 'function') {
        this.registerjQueryAjaxSetup();
      }

      if ((typeof Turbo === "undefined" ? "undefined" : _typeof(Turbo)) === 'object') {
        this.registerTurboRequestInterceptor();
      }
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerVueRequestInterceptor",
    value: function registerVueRequestInterceptor() {
      var _this = this;

      Vue.http.interceptors.push(function (request, next) {
        if (_this.socketId()) {
          request.headers.set('X-Socket-ID', _this.socketId());
        }

        next();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerAxiosRequestInterceptor",
    value: function registerAxiosRequestInterceptor() {
      var _this2 = this;

      axios.interceptors.request.use(function (config) {
        if (_this2.socketId()) {
          config.headers['X-Socket-Id'] = _this2.socketId();
        }

        return config;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */

  }, {
    key: "registerjQueryAjaxSetup",
    value: function registerjQueryAjaxSetup() {
      var _this3 = this;

      if (typeof jQuery.ajax != 'undefined') {
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (_this3.socketId()) {
            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
          }
        });
      }
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerTurboRequestInterceptor",
    value: function registerTurboRequestInterceptor() {
      var _this4 = this;

      document.addEventListener('turbo:before-fetch-request', function (event) {
        event.detail.fetchOptions.headers['X-Socket-Id'] = _this4.socketId();
      });
    }
  }]);

  return Echo;
}();




/***/ }),

/***/ "./resources/assets/scss/mngmnt/app.scss":
/*!***********************************************!*\
  !*** ./resources/assets/scss/mngmnt/app.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/pusher-js/dist/web/pusher.js":
/*!***************************************************!*\
  !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
  \***************************************************/
/***/ ((module) => {

/*!
 * Pusher JavaScript Library v8.3.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_669__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_669__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_669__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_669__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_669__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_669__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_669__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_669__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_669__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_669__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_669__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_669__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_669__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_669__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_669__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_669__(__nested_webpack_require_669__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package base64 implements Base64 encoding and decoding.
 */
// Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */
var Coder = /** @class */ (function () {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) { _paddingCharacter = "="; }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function (data) {
        var out = "";
        var i = 0;
        for (; i < data.length - 2; i += 3) {
            var c = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            out += this._encodeByte((c >>> 1 * 6) & 63);
            out += this._encodeByte((c >>> 0 * 6) & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = (data[i] << 16) | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            if (left === 2) {
                out += this._encodeByte((c >>> 1 * 6) & 63);
            }
            else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function (s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function (s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            out[op++] = (v1 << 4) | (v2 >>> 2);
            out[op++] = (v2 << 6) | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = (v1 << 4) | (v2 >>> 2);
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v2 << 6) | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function (b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 43);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 43) - 63 + 47);
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function (c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (((42 - c) & (c - 44)) >>> 8) & (-INVALID_BYTE + c - 43 + 62);
        // c == 47 (c > 46 and c < 48)
        result += (((46 - c) & (c - 48)) >>> 8) & (-INVALID_BYTE + c - 47 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    Coder.prototype._getPaddingLength = function (s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}());
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */
var URLSafeCoder = /** @class */ (function (_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function (b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 45);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 45) - 63 + 95);
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function (c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (((44 - c) & (c - 46)) >>> 8) & (-INVALID_BYTE + c - 45 + 62);
        // c == 95 (c > 94 and c < 96)
        result += (((94 - c) & (c - 96)) >>> 8) & (-INVALID_BYTE + c - 95 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    return URLSafeCoder;
}(Coder));
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function (length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function (length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function (s) {
    return stdCoder.decodedLength(s);
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package utf8 implements UTF-8 encoding and decoding.
 */
var INVALID_UTF16 = "utf8: invalid string";
var INVALID_UTF8 = "utf8: invalid source encoding";
/**
 * Encodes the given string into UTF-8 byte array.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encode(s) {
    // Calculate result length and allocate output array.
    // encodedLength() also validates string and throws errors,
    // so we don't need repeat validation here.
    var arr = new Uint8Array(encodedLength(s));
    var pos = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            arr[pos++] = c;
        }
        else if (c < 0x800) {
            arr[pos++] = 0xc0 | c >> 6;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else if (c < 0xd800) {
            arr[pos++] = 0xe0 | c >> 12;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else {
            i++; // get one more character
            c = (c & 0x3ff) << 10;
            c |= s.charCodeAt(i) & 0x3ff;
            c += 0x10000;
            arr[pos++] = 0xf0 | c >> 18;
            arr[pos++] = 0x80 | (c >> 12) & 0x3f;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
    }
    return arr;
}
exports.encode = encode;
/**
 * Returns the number of bytes required to encode the given string into UTF-8.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encodedLength(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            result += 1;
        }
        else if (c < 0x800) {
            result += 2;
        }
        else if (c < 0xd800) {
            result += 3;
        }
        else if (c <= 0xdfff) {
            if (i >= s.length - 1) {
                throw new Error(INVALID_UTF16);
            }
            i++; // "eat" next character
            result += 4;
        }
        else {
            throw new Error(INVALID_UTF16);
        }
    }
    return result;
}
exports.encodedLength = encodedLength;
/**
 * Decodes the given byte array from UTF-8 into a string.
 * Throws if encoding is invalid.
 */
function decode(arr) {
    var chars = [];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b & 0x80) {
            var min = void 0;
            if (b < 0xe0) {
                // Need 1 more byte.
                if (i >= arr.length) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                if ((n1 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x1f) << 6 | (n1 & 0x3f);
                min = 0x80;
            }
            else if (b < 0xf0) {
                // Need 2 more bytes.
                if (i >= arr.length - 1) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 12 | (n1 & 0x3f) << 6 | (n2 & 0x3f);
                min = 0x800;
            }
            else if (b < 0xf8) {
                // Need 3 more bytes.
                if (i >= arr.length - 2) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                var n3 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80 || (n3 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 18 | (n1 & 0x3f) << 12 | (n2 & 0x3f) << 6 | (n3 & 0x3f);
                min = 0x10000;
            }
            else {
                throw new Error(INVALID_UTF8);
            }
            if (b < min || (b >= 0xd800 && b <= 0xdfff)) {
                throw new Error(INVALID_UTF8);
            }
            if (b >= 0x10000) {
                // Surrogate pair.
                if (b > 0x10ffff) {
                    throw new Error(INVALID_UTF8);
                }
                b -= 0x10000;
                chars.push(String.fromCharCode(0xd800 | (b >> 10)));
                b = 0xdc00 | (b & 0x3ff);
            }
        }
        chars.push(String.fromCharCode(b));
    }
    return chars.join("");
}
exports.decode = decode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_19901__) {

// required so we don't have to do require('pusher').default etc.
module.exports = __nested_webpack_require_19901__(3).default;


/***/ }),
/* 3 */
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_20105__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_20105__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_receiver_factory.ts
class ScriptReceiverFactory {
    constructor(prefix, name) {
        this.lastId = 0;
        this.prefix = prefix;
        this.name = name;
    }
    create(callback) {
        this.lastId++;
        var number = this.lastId;
        var id = this.prefix + number;
        var name = this.name + '[' + number + ']';
        var called = false;
        var callbackWrapper = function () {
            if (!called) {
                callback.apply(null, arguments);
                called = true;
            }
        };
        this[number] = callbackWrapper;
        return { number: number, id: id, name: name, callback: callbackWrapper };
    }
    remove(receiver) {
        delete this[receiver.number];
    }
}
var ScriptReceivers = new ScriptReceiverFactory('_pusher_script_', 'Pusher.ScriptReceivers');

// CONCATENATED MODULE: ./src/core/defaults.ts
var Defaults = {
    VERSION: "8.3.0",
    PROTOCOL: 7,
    wsPort: 80,
    wssPort: 443,
    wsPath: '',
    httpHost: 'sockjs.pusher.com',
    httpPort: 80,
    httpsPort: 443,
    httpPath: '/pusher',
    stats_host: 'stats.pusher.com',
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax',
    activityTimeout: 120000,
    pongTimeout: 30000,
    unavailableTimeout: 10000,
    userAuthentication: {
        endpoint: '/pusher/user-auth',
        transport: 'ajax'
    },
    channelAuthorization: {
        endpoint: '/pusher/auth',
        transport: 'ajax'
    },
    cdn_http: "http://js.pusher.com",
    cdn_https: "https://js.pusher.com",
    dependency_suffix: ""
};
/* harmony default export */ var defaults = (Defaults);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependency_loader.ts


class dependency_loader_DependencyLoader {
    constructor(options) {
        this.options = options;
        this.receivers = options.receivers || ScriptReceivers;
        this.loading = {};
    }
    load(name, options, callback) {
        var self = this;
        if (self.loading[name] && self.loading[name].length > 0) {
            self.loading[name].push(callback);
        }
        else {
            self.loading[name] = [callback];
            var request = runtime.createScriptRequest(self.getPath(name, options));
            var receiver = self.receivers.create(function (error) {
                self.receivers.remove(receiver);
                if (self.loading[name]) {
                    var callbacks = self.loading[name];
                    delete self.loading[name];
                    var successCallback = function (wasSuccessful) {
                        if (!wasSuccessful) {
                            request.cleanup();
                        }
                    };
                    for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                    }
                }
            });
            request.send(receiver);
        }
    }
    getRoot(options) {
        var cdn;
        var protocol = runtime.getDocument().location.protocol;
        if ((options && options.useTLS) || protocol === 'https:') {
            cdn = this.options.cdn_https;
        }
        else {
            cdn = this.options.cdn_http;
        }
        return cdn.replace(/\/*$/, '') + '/' + this.options.version;
    }
    getPath(name, options) {
        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependencies.ts



var DependenciesReceivers = new ScriptReceiverFactory('_pusher_dependencies', 'Pusher.DependenciesReceivers');
var Dependencies = new dependency_loader_DependencyLoader({
    cdn_http: defaults.cdn_http,
    cdn_https: defaults.cdn_https,
    version: defaults.VERSION,
    suffix: defaults.dependency_suffix,
    receivers: DependenciesReceivers
});

// CONCATENATED MODULE: ./src/core/utils/url_store.ts
const urlStore = {
    baseUrl: 'https://pusher.com',
    urls: {
        authenticationEndpoint: {
            path: '/docs/channels/server_api/authenticating_users'
        },
        authorizationEndpoint: {
            path: '/docs/channels/server_api/authorizing-users/'
        },
        javascriptQuickStart: {
            path: '/docs/javascript_quick_start'
        },
        triggeringClientEvents: {
            path: '/docs/client_api_guide/client_events#trigger-events'
        },
        encryptedChannelSupport: {
            fullUrl: 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
        }
    }
};
const buildLogSuffix = function (key) {
    const urlPrefix = 'See:';
    const urlObj = urlStore.urls[key];
    if (!urlObj)
        return '';
    let url;
    if (urlObj.fullUrl) {
        url = urlObj.fullUrl;
    }
    else if (urlObj.path) {
        url = urlStore.baseUrl + urlObj.path;
    }
    if (!url)
        return '';
    return `${urlPrefix} ${url}`;
};
/* harmony default export */ var url_store = ({ buildLogSuffix });

// CONCATENATED MODULE: ./src/core/auth/options.ts
var AuthRequestType;
(function (AuthRequestType) {
    AuthRequestType["UserAuthentication"] = "user-authentication";
    AuthRequestType["ChannelAuthorization"] = "channel-authorization";
})(AuthRequestType || (AuthRequestType = {}));

// CONCATENATED MODULE: ./src/core/errors.ts
class BadEventName extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class BadChannelName extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class RequestTimedOut extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class TransportPriorityTooLow extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class TransportClosed extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedFeature extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedTransport extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedStrategy extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class HTTPAuthError extends Error {
    constructor(status, msg) {
        super(msg);
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

// CONCATENATED MODULE: ./src/runtimes/isomorphic/auth/xhr_auth.ts




const ajax = function (context, query, authOptions, authRequestType, callback) {
    const xhr = runtime.createXHR();
    xhr.open('POST', authOptions.endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (var headerName in authOptions.headers) {
        xhr.setRequestHeader(headerName, authOptions.headers[headerName]);
    }
    if (authOptions.headersProvider != null) {
        let dynamicHeaders = authOptions.headersProvider();
        for (var headerName in dynamicHeaders) {
            xhr.setRequestHeader(headerName, dynamicHeaders[headerName]);
        }
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data;
                let parsed = false;
                try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                }
                catch (e) {
                    callback(new HTTPAuthError(200, `JSON returned from ${authRequestType.toString()} endpoint was invalid, yet status code was 200. Data was: ${xhr.responseText}`), null);
                }
                if (parsed) {
                    callback(null, data);
                }
            }
            else {
                let suffix = '';
                switch (authRequestType) {
                    case AuthRequestType.UserAuthentication:
                        suffix = url_store.buildLogSuffix('authenticationEndpoint');
                        break;
                    case AuthRequestType.ChannelAuthorization:
                        suffix = `Clients must be authorized to join private or presence channels. ${url_store.buildLogSuffix('authorizationEndpoint')}`;
                        break;
                }
                callback(new HTTPAuthError(xhr.status, `Unable to retrieve auth string from ${authRequestType.toString()} endpoint - ` +
                    `received status: ${xhr.status} from ${authOptions.endpoint}. ${suffix}`), null);
            }
        }
    };
    xhr.send(query);
    return xhr;
};
/* harmony default export */ var xhr_auth = (ajax);

// CONCATENATED MODULE: ./src/core/base64.ts
function encode(s) {
    return btoa(utob(s));
}
var fromCharCode = String.fromCharCode;
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = {};
for (var base64_i = 0, l = b64chars.length; base64_i < l; base64_i++) {
    b64tab[b64chars.charAt(base64_i)] = base64_i;
}
var cb_utob = function (c) {
    var cc = c.charCodeAt(0);
    return cc < 0x80
        ? c
        : cc < 0x800
            ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
                fromCharCode(0x80 | (cc & 0x3f));
};
var utob = function (u) {
    return u.replace(/[^\x00-\x7F]/g, cb_utob);
};
var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3];
    var ord = (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
    var chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
    ];
    return chars.join('');
};
var btoa = window.btoa ||
    function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };

// CONCATENATED MODULE: ./src/core/utils/timers/abstract_timer.ts
class Timer {
    constructor(set, clear, delay, callback) {
        this.clear = clear;
        this.timer = set(() => {
            if (this.timer) {
                this.timer = callback(this.timer);
            }
        }, delay);
    }
    isRunning() {
        return this.timer !== null;
    }
    ensureAborted() {
        if (this.timer) {
            this.clear(this.timer);
            this.timer = null;
        }
    }
}
/* harmony default export */ var abstract_timer = (Timer);

// CONCATENATED MODULE: ./src/core/utils/timers/index.ts

function timers_clearTimeout(timer) {
    window.clearTimeout(timer);
}
function timers_clearInterval(timer) {
    window.clearInterval(timer);
}
class timers_OneOffTimer extends abstract_timer {
    constructor(delay, callback) {
        super(setTimeout, timers_clearTimeout, delay, function (timer) {
            callback();
            return null;
        });
    }
}
class timers_PeriodicTimer extends abstract_timer {
    constructor(delay, callback) {
        super(setInterval, timers_clearInterval, delay, function (timer) {
            callback();
            return timer;
        });
    }
}

// CONCATENATED MODULE: ./src/core/util.ts

var Util = {
    now() {
        if (Date.now) {
            return Date.now();
        }
        else {
            return new Date().valueOf();
        }
    },
    defer(callback) {
        return new timers_OneOffTimer(0, callback);
    },
    method(name, ...args) {
        var boundArguments = Array.prototype.slice.call(arguments, 1);
        return function (object) {
            return object[name].apply(object, boundArguments.concat(arguments));
        };
    }
};
/* harmony default export */ var util = (Util);

// CONCATENATED MODULE: ./src/core/utils/collections.ts


function extend(target, ...sources) {
    for (var i = 0; i < sources.length; i++) {
        var extensions = sources[i];
        for (var property in extensions) {
            if (extensions[property] &&
                extensions[property].constructor &&
                extensions[property].constructor === Object) {
                target[property] = extend(target[property] || {}, extensions[property]);
            }
            else {
                target[property] = extensions[property];
            }
        }
    }
    return target;
}
function stringify() {
    var m = ['Pusher'];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            m.push(arguments[i]);
        }
        else {
            m.push(safeJSONStringify(arguments[i]));
        }
    }
    return m.join(' : ');
}
function arrayIndexOf(array, item) {
    var nativeIndexOf = Array.prototype.indexOf;
    if (array === null) {
        return -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
    }
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}
function objectApply(object, f) {
    for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            f(object[key], key, object);
        }
    }
}
function keys(object) {
    var keys = [];
    objectApply(object, function (_, key) {
        keys.push(key);
    });
    return keys;
}
function values(object) {
    var values = [];
    objectApply(object, function (value) {
        values.push(value);
    });
    return values;
}
function apply(array, f, context) {
    for (var i = 0; i < array.length; i++) {
        f.call(context || window, array[i], i, array);
    }
}
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(f(array[i], i, array, result));
    }
    return result;
}
function mapObject(object, f) {
    var result = {};
    objectApply(object, function (value, key) {
        result[key] = f(value);
    });
    return result;
}
function filter(array, test) {
    test =
        test ||
            function (value) {
                return !!value;
            };
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array, result)) {
            result.push(array[i]);
        }
    }
    return result;
}
function filterObject(object, test) {
    var result = {};
    objectApply(object, function (value, key) {
        if ((test && test(value, key, object, result)) || Boolean(value)) {
            result[key] = value;
        }
    });
    return result;
}
function flatten(object) {
    var result = [];
    objectApply(object, function (value, key) {
        result.push([key, value]);
    });
    return result;
}
function any(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
function collections_all(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
function encodeParamsObject(data) {
    return mapObject(data, function (value) {
        if (typeof value === 'object') {
            value = safeJSONStringify(value);
        }
        return encodeURIComponent(encode(value.toString()));
    });
}
function buildQueryString(data) {
    var params = filterObject(data, function (value) {
        return value !== undefined;
    });
    var query = map(flatten(encodeParamsObject(params)), util.method('join', '=')).join('&');
    return query;
}
function decycleObject(object) {
    var objects = [], paths = [];
    return (function derez(value, path) {
        var i, name, nu;
        switch (typeof value) {
            case 'object':
                if (!value) {
                    return null;
                }
                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return { $ref: paths[i] };
                    }
                }
                objects.push(value);
                paths.push(path);
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                }
                else {
                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
        }
    })(object, '$');
}
function safeJSONStringify(source) {
    try {
        return JSON.stringify(source);
    }
    catch (e) {
        return JSON.stringify(decycleObject(source));
    }
}

// CONCATENATED MODULE: ./src/core/logger.ts


class logger_Logger {
    constructor() {
        this.globalLog = (message) => {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };
    }
    debug(...args) {
        this.log(this.globalLog, args);
    }
    warn(...args) {
        this.log(this.globalLogWarn, args);
    }
    error(...args) {
        this.log(this.globalLogError, args);
    }
    globalLogWarn(message) {
        if (window.console && window.console.warn) {
            window.console.warn(message);
        }
        else {
            this.globalLog(message);
        }
    }
    globalLogError(message) {
        if (window.console && window.console.error) {
            window.console.error(message);
        }
        else {
            this.globalLogWarn(message);
        }
    }
    log(defaultLoggingFunction, ...args) {
        var message = stringify.apply(this, arguments);
        if (core_pusher.log) {
            core_pusher.log(message);
        }
        else if (core_pusher.logToConsole) {
            const log = defaultLoggingFunction.bind(this);
            log(message);
        }
    }
}
/* harmony default export */ var logger = (new logger_Logger());

// CONCATENATED MODULE: ./src/runtimes/web/auth/jsonp_auth.ts

var jsonp = function (context, query, authOptions, authRequestType, callback) {
    if (authOptions.headers !== undefined ||
        authOptions.headersProvider != null) {
        logger.warn(`To send headers with the ${authRequestType.toString()} request, you must use AJAX, rather than JSONP.`);
    }
    var callbackName = context.nextAuthCallbackID.toString();
    context.nextAuthCallbackID++;
    var document = context.getDocument();
    var script = document.createElement('script');
    context.auth_callbacks[callbackName] = function (data) {
        callback(null, data);
    };
    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
    script.src =
        authOptions.endpoint +
            '?callback=' +
            encodeURIComponent(callback_name) +
            '&' +
            query;
    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.insertBefore(script, head.firstChild);
};
/* harmony default export */ var jsonp_auth = (jsonp);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_request.ts
class ScriptRequest {
    constructor(src) {
        this.src = src;
    }
    send(receiver) {
        var self = this;
        var errorString = 'Error loading ' + self.src;
        self.script = document.createElement('script');
        self.script.id = receiver.id;
        self.script.src = self.src;
        self.script.type = 'text/javascript';
        self.script.charset = 'UTF-8';
        if (self.script.addEventListener) {
            self.script.onerror = function () {
                receiver.callback(errorString);
            };
            self.script.onload = function () {
                receiver.callback(null);
            };
        }
        else {
            self.script.onreadystatechange = function () {
                if (self.script.readyState === 'loaded' ||
                    self.script.readyState === 'complete') {
                    receiver.callback(null);
                }
            };
        }
        if (self.script.async === undefined &&
            document.attachEvent &&
            /opera/i.test(navigator.userAgent)) {
            self.errorScript = document.createElement('script');
            self.errorScript.id = receiver.id + '_error';
            self.errorScript.text = receiver.name + "('" + errorString + "');";
            self.script.async = self.errorScript.async = false;
        }
        else {
            self.script.async = true;
        }
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(self.script, head.firstChild);
        if (self.errorScript) {
            head.insertBefore(self.errorScript, self.script.nextSibling);
        }
    }
    cleanup() {
        if (this.script) {
            this.script.onload = this.script.onerror = null;
            this.script.onreadystatechange = null;
        }
        if (this.script && this.script.parentNode) {
            this.script.parentNode.removeChild(this.script);
        }
        if (this.errorScript && this.errorScript.parentNode) {
            this.errorScript.parentNode.removeChild(this.errorScript);
        }
        this.script = null;
        this.errorScript = null;
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/dom/jsonp_request.ts


class jsonp_request_JSONPRequest {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }
    send(receiver) {
        if (this.request) {
            return;
        }
        var query = buildQueryString(this.data);
        var url = this.url + '/' + receiver.number + '?' + query;
        this.request = runtime.createScriptRequest(url);
        this.request.send(receiver);
    }
    cleanup() {
        if (this.request) {
            this.request.cleanup();
        }
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/timeline/jsonp_timeline.ts


var getAgent = function (sender, useTLS) {
    return function (data, callback) {
        var scheme = 'http' + (useTLS ? 's' : '') + '://';
        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
        var request = runtime.createJSONPRequest(url, data);
        var receiver = runtime.ScriptReceivers.create(function (error, result) {
            ScriptReceivers.remove(receiver);
            request.cleanup();
            if (result && result.host) {
                sender.host = result.host;
            }
            if (callback) {
                callback(error, result);
            }
        });
        request.send(receiver);
    };
};
var jsonp_timeline_jsonp = {
    name: 'jsonp',
    getAgent
};
/* harmony default export */ var jsonp_timeline = (jsonp_timeline_jsonp);

// CONCATENATED MODULE: ./src/core/transports/url_schemes.ts

function getGenericURL(baseScheme, params, path) {
    var scheme = baseScheme + (params.useTLS ? 's' : '');
    var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
    return scheme + '://' + host + path;
}
function getGenericPath(key, queryString) {
    var path = '/app/' + key;
    var query = '?protocol=' +
        defaults.PROTOCOL +
        '&client=js' +
        '&version=' +
        defaults.VERSION +
        (queryString ? '&' + queryString : '');
    return path + query;
}
var ws = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '') + getGenericPath(key, 'flash=false');
        return getGenericURL('ws', params, path);
    }
};
var http = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '/pusher') + getGenericPath(key);
        return getGenericURL('http', params, path);
    }
};
var sockjs = {
    getInitial: function (key, params) {
        return getGenericURL('http', params, params.httpPath || '/pusher');
    },
    getPath: function (key, params) {
        return getGenericPath(key);
    }
};

// CONCATENATED MODULE: ./src/core/events/callback_registry.ts

class callback_registry_CallbackRegistry {
    constructor() {
        this._callbacks = {};
    }
    get(name) {
        return this._callbacks[prefix(name)];
    }
    add(name, callback, context) {
        var prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] =
            this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
            fn: callback,
            context: context
        });
    }
    remove(name, callback, context) {
        if (!name && !callback && !context) {
            this._callbacks = {};
            return;
        }
        var names = name ? [prefix(name)] : keys(this._callbacks);
        if (callback || context) {
            this.removeCallback(names, callback, context);
        }
        else {
            this.removeAllCallbacks(names);
        }
    }
    removeCallback(names, callback, context) {
        apply(names, function (name) {
            this._callbacks[name] = filter(this._callbacks[name] || [], function (binding) {
                return ((callback && callback !== binding.fn) ||
                    (context && context !== binding.context));
            });
            if (this._callbacks[name].length === 0) {
                delete this._callbacks[name];
            }
        }, this);
    }
    removeAllCallbacks(names) {
        apply(names, function (name) {
            delete this._callbacks[name];
        }, this);
    }
}
function prefix(name) {
    return '_' + name;
}

// CONCATENATED MODULE: ./src/core/events/dispatcher.ts


class dispatcher_Dispatcher {
    constructor(failThrough) {
        this.callbacks = new callback_registry_CallbackRegistry();
        this.global_callbacks = [];
        this.failThrough = failThrough;
    }
    bind(eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
    }
    bind_global(callback) {
        this.global_callbacks.push(callback);
        return this;
    }
    unbind(eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
    }
    unbind_global(callback) {
        if (!callback) {
            this.global_callbacks = [];
            return this;
        }
        this.global_callbacks = filter(this.global_callbacks || [], c => c !== callback);
        return this;
    }
    unbind_all() {
        this.unbind();
        this.unbind_global();
        return this;
    }
    emit(eventName, data, metadata) {
        for (var i = 0; i < this.global_callbacks.length; i++) {
            this.global_callbacks[i](eventName, data);
        }
        var callbacks = this.callbacks.get(eventName);
        var args = [];
        if (metadata) {
            args.push(data, metadata);
        }
        else if (data) {
            args.push(data);
        }
        if (callbacks && callbacks.length > 0) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].fn.apply(callbacks[i].context || window, args);
            }
        }
        else if (this.failThrough) {
            this.failThrough(eventName, data);
        }
        return this;
    }
}

// CONCATENATED MODULE: ./src/core/transports/transport_connection.ts





class transport_connection_TransportConnection extends dispatcher_Dispatcher {
    constructor(hooks, name, priority, key, options) {
        super();
        this.initialize = runtime.transportConnectionInitializer;
        this.hooks = hooks;
        this.name = name;
        this.priority = priority;
        this.key = key;
        this.options = options;
        this.state = 'new';
        this.timeline = options.timeline;
        this.activityTimeout = options.activityTimeout;
        this.id = this.timeline.generateUniqueID();
    }
    handlesActivityChecks() {
        return Boolean(this.hooks.handlesActivityChecks);
    }
    supportsPing() {
        return Boolean(this.hooks.supportsPing);
    }
    connect() {
        if (this.socket || this.state !== 'initialized') {
            return false;
        }
        var url = this.hooks.urls.getInitial(this.key, this.options);
        try {
            this.socket = this.hooks.getSocket(url, this.options);
        }
        catch (e) {
            util.defer(() => {
                this.onError(e);
                this.changeState('closed');
            });
            return false;
        }
        this.bindListeners();
        logger.debug('Connecting', { transport: this.name, url });
        this.changeState('connecting');
        return true;
    }
    close() {
        if (this.socket) {
            this.socket.close();
            return true;
        }
        else {
            return false;
        }
    }
    send(data) {
        if (this.state === 'open') {
            util.defer(() => {
                if (this.socket) {
                    this.socket.send(data);
                }
            });
            return true;
        }
        else {
            return false;
        }
    }
    ping() {
        if (this.state === 'open' && this.supportsPing()) {
            this.socket.ping();
        }
    }
    onOpen() {
        if (this.hooks.beforeOpen) {
            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
        }
        this.changeState('open');
        this.socket.onopen = undefined;
    }
    onError(error) {
        this.emit('error', { type: 'WebSocketError', error: error });
        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
    }
    onClose(closeEvent) {
        if (closeEvent) {
            this.changeState('closed', {
                code: closeEvent.code,
                reason: closeEvent.reason,
                wasClean: closeEvent.wasClean
            });
        }
        else {
            this.changeState('closed');
        }
        this.unbindListeners();
        this.socket = undefined;
    }
    onMessage(message) {
        this.emit('message', message);
    }
    onActivity() {
        this.emit('activity');
    }
    bindListeners() {
        this.socket.onopen = () => {
            this.onOpen();
        };
        this.socket.onerror = error => {
            this.onError(error);
        };
        this.socket.onclose = closeEvent => {
            this.onClose(closeEvent);
        };
        this.socket.onmessage = message => {
            this.onMessage(message);
        };
        if (this.supportsPing()) {
            this.socket.onactivity = () => {
                this.onActivity();
            };
        }
    }
    unbindListeners() {
        if (this.socket) {
            this.socket.onopen = undefined;
            this.socket.onerror = undefined;
            this.socket.onclose = undefined;
            this.socket.onmessage = undefined;
            if (this.supportsPing()) {
                this.socket.onactivity = undefined;
            }
        }
    }
    changeState(state, params) {
        this.state = state;
        this.timeline.info(this.buildTimelineMessage({
            state: state,
            params: params
        }));
        this.emit(state, params);
    }
    buildTimelineMessage(message) {
        return extend({ cid: this.id }, message);
    }
}

// CONCATENATED MODULE: ./src/core/transports/transport.ts

class transport_Transport {
    constructor(hooks) {
        this.hooks = hooks;
    }
    isSupported(environment) {
        return this.hooks.isSupported(environment);
    }
    createConnection(name, priority, key, options) {
        return new transport_connection_TransportConnection(this.hooks, name, priority, key, options);
    }
}

// CONCATENATED MODULE: ./src/runtimes/isomorphic/transports/transports.ts




var WSTransport = new transport_Transport({
    urls: ws,
    handlesActivityChecks: false,
    supportsPing: false,
    isInitialized: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    isSupported: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    getSocket: function (url) {
        return runtime.createWebSocket(url);
    }
});
var httpConfiguration = {
    urls: http,
    handlesActivityChecks: false,
    supportsPing: true,
    isInitialized: function () {
        return true;
    }
};
var streamingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createStreamingSocket(url);
    }
}, httpConfiguration);
var pollingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createPollingSocket(url);
    }
}, httpConfiguration);
var xhrConfiguration = {
    isSupported: function () {
        return runtime.isXHRSupported();
    }
};
var XHRStreamingTransport = new transport_Transport((extend({}, streamingConfiguration, xhrConfiguration)));
var XHRPollingTransport = new transport_Transport(extend({}, pollingConfiguration, xhrConfiguration));
var Transports = {
    ws: WSTransport,
    xhr_streaming: XHRStreamingTransport,
    xhr_polling: XHRPollingTransport
};
/* harmony default export */ var transports = (Transports);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transports.ts






var SockJSTransport = new transport_Transport({
    file: 'sockjs',
    urls: sockjs,
    handlesActivityChecks: true,
    supportsPing: false,
    isSupported: function () {
        return true;
    },
    isInitialized: function () {
        return window.SockJS !== undefined;
    },
    getSocket: function (url, options) {
        return new window.SockJS(url, null, {
            js_path: Dependencies.getPath('sockjs', {
                useTLS: options.useTLS
            }),
            ignore_null_origin: options.ignoreNullOrigin
        });
    },
    beforeOpen: function (socket, path) {
        socket.send(JSON.stringify({
            path: path
        }));
    }
});
var xdrConfiguration = {
    isSupported: function (environment) {
        var yes = runtime.isXDRSupported(environment.useTLS);
        return yes;
    }
};
var XDRStreamingTransport = new transport_Transport((extend({}, streamingConfiguration, xdrConfiguration)));
var XDRPollingTransport = new transport_Transport(extend({}, pollingConfiguration, xdrConfiguration));
transports.xdr_streaming = XDRStreamingTransport;
transports.xdr_polling = XDRPollingTransport;
transports.sockjs = SockJSTransport;
/* harmony default export */ var transports_transports = (transports);

// CONCATENATED MODULE: ./src/runtimes/web/net_info.ts

class net_info_NetInfo extends dispatcher_Dispatcher {
    constructor() {
        super();
        var self = this;
        if (window.addEventListener !== undefined) {
            window.addEventListener('online', function () {
                self.emit('online');
            }, false);
            window.addEventListener('offline', function () {
                self.emit('offline');
            }, false);
        }
    }
    isOnline() {
        if (window.navigator.onLine === undefined) {
            return true;
        }
        else {
            return window.navigator.onLine;
        }
    }
}
var net_info_Network = new net_info_NetInfo();

// CONCATENATED MODULE: ./src/core/transports/assistant_to_the_transport_manager.ts


class assistant_to_the_transport_manager_AssistantToTheTransportManager {
    constructor(manager, transport, options) {
        this.manager = manager;
        this.transport = transport;
        this.minPingDelay = options.minPingDelay;
        this.maxPingDelay = options.maxPingDelay;
        this.pingDelay = undefined;
    }
    createConnection(name, priority, key, options) {
        options = extend({}, options, {
            activityTimeout: this.pingDelay
        });
        var connection = this.transport.createConnection(name, priority, key, options);
        var openTimestamp = null;
        var onOpen = function () {
            connection.unbind('open', onOpen);
            connection.bind('closed', onClosed);
            openTimestamp = util.now();
        };
        var onClosed = closeEvent => {
            connection.unbind('closed', onClosed);
            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                this.manager.reportDeath();
            }
            else if (!closeEvent.wasClean && openTimestamp) {
                var lifespan = util.now() - openTimestamp;
                if (lifespan < 2 * this.maxPingDelay) {
                    this.manager.reportDeath();
                    this.pingDelay = Math.max(lifespan / 2, this.minPingDelay);
                }
            }
        };
        connection.bind('open', onOpen);
        return connection;
    }
    isSupported(environment) {
        return this.manager.isAlive() && this.transport.isSupported(environment);
    }
}

// CONCATENATED MODULE: ./src/core/connection/protocol/protocol.ts
const Protocol = {
    decodeMessage: function (messageEvent) {
        try {
            var messageData = JSON.parse(messageEvent.data);
            var pusherEventData = messageData.data;
            if (typeof pusherEventData === 'string') {
                try {
                    pusherEventData = JSON.parse(messageData.data);
                }
                catch (e) { }
            }
            var pusherEvent = {
                event: messageData.event,
                channel: messageData.channel,
                data: pusherEventData
            };
            if (messageData.user_id) {
                pusherEvent.user_id = messageData.user_id;
            }
            return pusherEvent;
        }
        catch (e) {
            throw { type: 'MessageParseError', error: e, data: messageEvent.data };
        }
    },
    encodeMessage: function (event) {
        return JSON.stringify(event);
    },
    processHandshake: function (messageEvent) {
        var message = Protocol.decodeMessage(messageEvent);
        if (message.event === 'pusher:connection_established') {
            if (!message.data.activity_timeout) {
                throw 'No activity timeout specified in handshake';
            }
            return {
                action: 'connected',
                id: message.data.socket_id,
                activityTimeout: message.data.activity_timeout * 1000
            };
        }
        else if (message.event === 'pusher:error') {
            return {
                action: this.getCloseAction(message.data),
                error: this.getCloseError(message.data)
            };
        }
        else {
            throw 'Invalid handshake';
        }
    },
    getCloseAction: function (closeEvent) {
        if (closeEvent.code < 4000) {
            if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                return 'backoff';
            }
            else {
                return null;
            }
        }
        else if (closeEvent.code === 4000) {
            return 'tls_only';
        }
        else if (closeEvent.code < 4100) {
            return 'refused';
        }
        else if (closeEvent.code < 4200) {
            return 'backoff';
        }
        else if (closeEvent.code < 4300) {
            return 'retry';
        }
        else {
            return 'refused';
        }
    },
    getCloseError: function (closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
            return {
                type: 'PusherError',
                data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                }
            };
        }
        else {
            return null;
        }
    }
};
/* harmony default export */ var protocol_protocol = (Protocol);

// CONCATENATED MODULE: ./src/core/connection/connection.ts




class connection_Connection extends dispatcher_Dispatcher {
    constructor(id, transport) {
        super();
        this.id = id;
        this.transport = transport;
        this.activityTimeout = transport.activityTimeout;
        this.bindListeners();
    }
    handlesActivityChecks() {
        return this.transport.handlesActivityChecks();
    }
    send(data) {
        return this.transport.send(data);
    }
    send_event(name, data, channel) {
        var event = { event: name, data: data };
        if (channel) {
            event.channel = channel;
        }
        logger.debug('Event sent', event);
        return this.send(protocol_protocol.encodeMessage(event));
    }
    ping() {
        if (this.transport.supportsPing()) {
            this.transport.ping();
        }
        else {
            this.send_event('pusher:ping', {});
        }
    }
    close() {
        this.transport.close();
    }
    bindListeners() {
        var listeners = {
            message: (messageEvent) => {
                var pusherEvent;
                try {
                    pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                }
                catch (e) {
                    this.emit('error', {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                    });
                }
                if (pusherEvent !== undefined) {
                    logger.debug('Event recd', pusherEvent);
                    switch (pusherEvent.event) {
                        case 'pusher:error':
                            this.emit('error', {
                                type: 'PusherError',
                                data: pusherEvent.data
                            });
                            break;
                        case 'pusher:ping':
                            this.emit('ping');
                            break;
                        case 'pusher:pong':
                            this.emit('pong');
                            break;
                    }
                    this.emit('message', pusherEvent);
                }
            },
            activity: () => {
                this.emit('activity');
            },
            error: error => {
                this.emit('error', error);
            },
            closed: closeEvent => {
                unbindListeners();
                if (closeEvent && closeEvent.code) {
                    this.handleCloseEvent(closeEvent);
                }
                this.transport = null;
                this.emit('closed');
            }
        };
        var unbindListeners = () => {
            objectApply(listeners, (listener, event) => {
                this.transport.unbind(event, listener);
            });
        };
        objectApply(listeners, (listener, event) => {
            this.transport.bind(event, listener);
        });
    }
    handleCloseEvent(closeEvent) {
        var action = protocol_protocol.getCloseAction(closeEvent);
        var error = protocol_protocol.getCloseError(closeEvent);
        if (error) {
            this.emit('error', error);
        }
        if (action) {
            this.emit(action, { action: action, error: error });
        }
    }
}

// CONCATENATED MODULE: ./src/core/connection/handshake/index.ts



class handshake_Handshake {
    constructor(transport, callback) {
        this.transport = transport;
        this.callback = callback;
        this.bindListeners();
    }
    close() {
        this.unbindListeners();
        this.transport.close();
    }
    bindListeners() {
        this.onMessage = m => {
            this.unbindListeners();
            var result;
            try {
                result = protocol_protocol.processHandshake(m);
            }
            catch (e) {
                this.finish('error', { error: e });
                this.transport.close();
                return;
            }
            if (result.action === 'connected') {
                this.finish('connected', {
                    connection: new connection_Connection(result.id, this.transport),
                    activityTimeout: result.activityTimeout
                });
            }
            else {
                this.finish(result.action, { error: result.error });
                this.transport.close();
            }
        };
        this.onClosed = closeEvent => {
            this.unbindListeners();
            var action = protocol_protocol.getCloseAction(closeEvent) || 'backoff';
            var error = protocol_protocol.getCloseError(closeEvent);
            this.finish(action, { error: error });
        };
        this.transport.bind('message', this.onMessage);
        this.transport.bind('closed', this.onClosed);
    }
    unbindListeners() {
        this.transport.unbind('message', this.onMessage);
        this.transport.unbind('closed', this.onClosed);
    }
    finish(action, params) {
        this.callback(extend({ transport: this.transport, action: action }, params));
    }
}

// CONCATENATED MODULE: ./src/core/timeline/timeline_sender.ts

class timeline_sender_TimelineSender {
    constructor(timeline, options) {
        this.timeline = timeline;
        this.options = options || {};
    }
    send(useTLS, callback) {
        if (this.timeline.isEmpty()) {
            return;
        }
        this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
    }
}

// CONCATENATED MODULE: ./src/core/channels/channel.ts





class channel_Channel extends dispatcher_Dispatcher {
    constructor(name, pusher) {
        super(function (event, data) {
            logger.debug('No callbacks on ' + name + ' for ' + event);
        });
        this.name = name;
        this.pusher = pusher;
        this.subscribed = false;
        this.subscriptionPending = false;
        this.subscriptionCancelled = false;
    }
    authorize(socketId, callback) {
        return callback(null, { auth: '' });
    }
    trigger(event, data) {
        if (event.indexOf('client-') !== 0) {
            throw new BadEventName("Event '" + event + "' does not start with 'client-'");
        }
        if (!this.subscribed) {
            var suffix = url_store.buildLogSuffix('triggeringClientEvents');
            logger.warn(`Client event triggered before channel 'subscription_succeeded' event . ${suffix}`);
        }
        return this.pusher.send_event(event, data, this.name);
    }
    disconnect() {
        this.subscribed = false;
        this.subscriptionPending = false;
    }
    handleEvent(event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName === 'pusher_internal:subscription_succeeded') {
            this.handleSubscriptionSucceededEvent(event);
        }
        else if (eventName === 'pusher_internal:subscription_count') {
            this.handleSubscriptionCountEvent(event);
        }
        else if (eventName.indexOf('pusher_internal:') !== 0) {
            var metadata = {};
            this.emit(eventName, data, metadata);
        }
    }
    handleSubscriptionSucceededEvent(event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.emit('pusher:subscription_succeeded', event.data);
        }
    }
    handleSubscriptionCountEvent(event) {
        if (event.data.subscription_count) {
            this.subscriptionCount = event.data.subscription_count;
        }
        this.emit('pusher:subscription_count', event.data);
    }
    subscribe() {
        if (this.subscribed) {
            return;
        }
        this.subscriptionPending = true;
        this.subscriptionCancelled = false;
        this.authorize(this.pusher.connection.socket_id, (error, data) => {
            if (error) {
                this.subscriptionPending = false;
                logger.error(error.toString());
                this.emit('pusher:subscription_error', Object.assign({}, {
                    type: 'AuthError',
                    error: error.message
                }, error instanceof HTTPAuthError ? { status: error.status } : {}));
            }
            else {
                this.pusher.send_event('pusher:subscribe', {
                    auth: data.auth,
                    channel_data: data.channel_data,
                    channel: this.name
                });
            }
        });
    }
    unsubscribe() {
        this.subscribed = false;
        this.pusher.send_event('pusher:unsubscribe', {
            channel: this.name
        });
    }
    cancelSubscription() {
        this.subscriptionCancelled = true;
    }
    reinstateSubscription() {
        this.subscriptionCancelled = false;
    }
}

// CONCATENATED MODULE: ./src/core/channels/private_channel.ts

class private_channel_PrivateChannel extends channel_Channel {
    authorize(socketId, callback) {
        return this.pusher.config.channelAuthorizer({
            channelName: this.name,
            socketId: socketId
        }, callback);
    }
}

// CONCATENATED MODULE: ./src/core/channels/members.ts

class members_Members {
    constructor() {
        this.reset();
    }
    get(id) {
        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
            return {
                id: id,
                info: this.members[id]
            };
        }
        else {
            return null;
        }
    }
    each(callback) {
        objectApply(this.members, (member, id) => {
            callback(this.get(id));
        });
    }
    setMyID(id) {
        this.myID = id;
    }
    onSubscription(subscriptionData) {
        this.members = subscriptionData.presence.hash;
        this.count = subscriptionData.presence.count;
        this.me = this.get(this.myID);
    }
    addMember(memberData) {
        if (this.get(memberData.user_id) === null) {
            this.count++;
        }
        this.members[memberData.user_id] = memberData.user_info;
        return this.get(memberData.user_id);
    }
    removeMember(memberData) {
        var member = this.get(memberData.user_id);
        if (member) {
            delete this.members[memberData.user_id];
            this.count--;
        }
        return member;
    }
    reset() {
        this.members = {};
        this.count = 0;
        this.myID = null;
        this.me = null;
    }
}

// CONCATENATED MODULE: ./src/core/channels/presence_channel.ts
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class presence_channel_PresenceChannel extends private_channel_PrivateChannel {
    constructor(name, pusher) {
        super(name, pusher);
        this.members = new members_Members();
    }
    authorize(socketId, callback) {
        super.authorize(socketId, (error, authData) => __awaiter(this, void 0, void 0, function* () {
            if (!error) {
                authData = authData;
                if (authData.channel_data != null) {
                    var channelData = JSON.parse(authData.channel_data);
                    this.members.setMyID(channelData.user_id);
                }
                else {
                    yield this.pusher.user.signinDonePromise;
                    if (this.pusher.user.user_data != null) {
                        this.members.setMyID(this.pusher.user.user_data.id);
                    }
                    else {
                        let suffix = url_store.buildLogSuffix('authorizationEndpoint');
                        logger.error(`Invalid auth response for channel '${this.name}', ` +
                            `expected 'channel_data' field. ${suffix}, ` +
                            `or the user should be signed in.`);
                        callback('Invalid auth response');
                        return;
                    }
                }
            }
            callback(error, authData);
        }));
    }
    handleEvent(event) {
        var eventName = event.event;
        if (eventName.indexOf('pusher_internal:') === 0) {
            this.handleInternalEvent(event);
        }
        else {
            var data = event.data;
            var metadata = {};
            if (event.user_id) {
                metadata.user_id = event.user_id;
            }
            this.emit(eventName, data, metadata);
        }
    }
    handleInternalEvent(event) {
        var eventName = event.event;
        var data = event.data;
        switch (eventName) {
            case 'pusher_internal:subscription_succeeded':
                this.handleSubscriptionSucceededEvent(event);
                break;
            case 'pusher_internal:subscription_count':
                this.handleSubscriptionCountEvent(event);
                break;
            case 'pusher_internal:member_added':
                var addedMember = this.members.addMember(data);
                this.emit('pusher:member_added', addedMember);
                break;
            case 'pusher_internal:member_removed':
                var removedMember = this.members.removeMember(data);
                if (removedMember) {
                    this.emit('pusher:member_removed', removedMember);
                }
                break;
        }
    }
    handleSubscriptionSucceededEvent(event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.members.onSubscription(event.data);
            this.emit('pusher:subscription_succeeded', this.members);
        }
    }
    disconnect() {
        this.members.reset();
        super.disconnect();
    }
}

// EXTERNAL MODULE: ./node_modules/@stablelib/utf8/lib/utf8.js
var utf8 = __nested_webpack_require_20105__(1);

// EXTERNAL MODULE: ./node_modules/@stablelib/base64/lib/base64.js
var base64 = __nested_webpack_require_20105__(0);

// CONCATENATED MODULE: ./src/core/channels/encrypted_channel.ts





class encrypted_channel_EncryptedChannel extends private_channel_PrivateChannel {
    constructor(name, pusher, nacl) {
        super(name, pusher);
        this.key = null;
        this.nacl = nacl;
    }
    authorize(socketId, callback) {
        super.authorize(socketId, (error, authData) => {
            if (error) {
                callback(error, authData);
                return;
            }
            let sharedSecret = authData['shared_secret'];
            if (!sharedSecret) {
                callback(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                return;
            }
            this.key = Object(base64["decode"])(sharedSecret);
            delete authData['shared_secret'];
            callback(null, authData);
        });
    }
    trigger(event, data) {
        throw new UnsupportedFeature('Client events are not currently supported for encrypted channels');
    }
    handleEvent(event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName.indexOf('pusher_internal:') === 0 ||
            eventName.indexOf('pusher:') === 0) {
            super.handleEvent(event);
            return;
        }
        this.handleEncryptedEvent(eventName, data);
    }
    handleEncryptedEvent(event, data) {
        if (!this.key) {
            logger.debug('Received encrypted event before key has been retrieved from the authEndpoint');
            return;
        }
        if (!data.ciphertext || !data.nonce) {
            logger.error('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' +
                data);
            return;
        }
        let cipherText = Object(base64["decode"])(data.ciphertext);
        if (cipherText.length < this.nacl.secretbox.overheadLength) {
            logger.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${cipherText.length}`);
            return;
        }
        let nonce = Object(base64["decode"])(data.nonce);
        if (nonce.length < this.nacl.secretbox.nonceLength) {
            logger.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${nonce.length}`);
            return;
        }
        let bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
        if (bytes === null) {
            logger.debug('Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
            this.authorize(this.pusher.connection.socket_id, (error, authData) => {
                if (error) {
                    logger.error(`Failed to make a request to the authEndpoint: ${authData}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                }
                bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
                if (bytes === null) {
                    logger.error(`Failed to decrypt event with new key. Dropping encrypted event`);
                    return;
                }
                this.emit(event, this.getDataToEmit(bytes));
                return;
            });
            return;
        }
        this.emit(event, this.getDataToEmit(bytes));
    }
    getDataToEmit(bytes) {
        let raw = Object(utf8["decode"])(bytes);
        try {
            return JSON.parse(raw);
        }
        catch (_a) {
            return raw;
        }
    }
}

// CONCATENATED MODULE: ./src/core/connection/connection_manager.ts





class connection_manager_ConnectionManager extends dispatcher_Dispatcher {
    constructor(key, options) {
        super();
        this.state = 'initialized';
        this.connection = null;
        this.key = key;
        this.options = options;
        this.timeline = this.options.timeline;
        this.usingTLS = this.options.useTLS;
        this.errorCallbacks = this.buildErrorCallbacks();
        this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
        var Network = runtime.getNetwork();
        Network.bind('online', () => {
            this.timeline.info({ netinfo: 'online' });
            if (this.state === 'connecting' || this.state === 'unavailable') {
                this.retryIn(0);
            }
        });
        Network.bind('offline', () => {
            this.timeline.info({ netinfo: 'offline' });
            if (this.connection) {
                this.sendActivityCheck();
            }
        });
        this.updateStrategy();
    }
    connect() {
        if (this.connection || this.runner) {
            return;
        }
        if (!this.strategy.isSupported()) {
            this.updateState('failed');
            return;
        }
        this.updateState('connecting');
        this.startConnecting();
        this.setUnavailableTimer();
    }
    send(data) {
        if (this.connection) {
            return this.connection.send(data);
        }
        else {
            return false;
        }
    }
    send_event(name, data, channel) {
        if (this.connection) {
            return this.connection.send_event(name, data, channel);
        }
        else {
            return false;
        }
    }
    disconnect() {
        this.disconnectInternally();
        this.updateState('disconnected');
    }
    isUsingTLS() {
        return this.usingTLS;
    }
    startConnecting() {
        var callback = (error, handshake) => {
            if (error) {
                this.runner = this.strategy.connect(0, callback);
            }
            else {
                if (handshake.action === 'error') {
                    this.emit('error', {
                        type: 'HandshakeError',
                        error: handshake.error
                    });
                    this.timeline.error({ handshakeError: handshake.error });
                }
                else {
                    this.abortConnecting();
                    this.handshakeCallbacks[handshake.action](handshake);
                }
            }
        };
        this.runner = this.strategy.connect(0, callback);
    }
    abortConnecting() {
        if (this.runner) {
            this.runner.abort();
            this.runner = null;
        }
    }
    disconnectInternally() {
        this.abortConnecting();
        this.clearRetryTimer();
        this.clearUnavailableTimer();
        if (this.connection) {
            var connection = this.abandonConnection();
            connection.close();
        }
    }
    updateStrategy() {
        this.strategy = this.options.getStrategy({
            key: this.key,
            timeline: this.timeline,
            useTLS: this.usingTLS
        });
    }
    retryIn(delay) {
        this.timeline.info({ action: 'retry', delay: delay });
        if (delay > 0) {
            this.emit('connecting_in', Math.round(delay / 1000));
        }
        this.retryTimer = new timers_OneOffTimer(delay || 0, () => {
            this.disconnectInternally();
            this.connect();
        });
    }
    clearRetryTimer() {
        if (this.retryTimer) {
            this.retryTimer.ensureAborted();
            this.retryTimer = null;
        }
    }
    setUnavailableTimer() {
        this.unavailableTimer = new timers_OneOffTimer(this.options.unavailableTimeout, () => {
            this.updateState('unavailable');
        });
    }
    clearUnavailableTimer() {
        if (this.unavailableTimer) {
            this.unavailableTimer.ensureAborted();
        }
    }
    sendActivityCheck() {
        this.stopActivityCheck();
        this.connection.ping();
        this.activityTimer = new timers_OneOffTimer(this.options.pongTimeout, () => {
            this.timeline.error({ pong_timed_out: this.options.pongTimeout });
            this.retryIn(0);
        });
    }
    resetActivityCheck() {
        this.stopActivityCheck();
        if (this.connection && !this.connection.handlesActivityChecks()) {
            this.activityTimer = new timers_OneOffTimer(this.activityTimeout, () => {
                this.sendActivityCheck();
            });
        }
    }
    stopActivityCheck() {
        if (this.activityTimer) {
            this.activityTimer.ensureAborted();
        }
    }
    buildConnectionCallbacks(errorCallbacks) {
        return extend({}, errorCallbacks, {
            message: message => {
                this.resetActivityCheck();
                this.emit('message', message);
            },
            ping: () => {
                this.send_event('pusher:pong', {});
            },
            activity: () => {
                this.resetActivityCheck();
            },
            error: error => {
                this.emit('error', error);
            },
            closed: () => {
                this.abandonConnection();
                if (this.shouldRetry()) {
                    this.retryIn(1000);
                }
            }
        });
    }
    buildHandshakeCallbacks(errorCallbacks) {
        return extend({}, errorCallbacks, {
            connected: (handshake) => {
                this.activityTimeout = Math.min(this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                this.clearUnavailableTimer();
                this.setConnection(handshake.connection);
                this.socket_id = this.connection.id;
                this.updateState('connected', { socket_id: this.socket_id });
            }
        });
    }
    buildErrorCallbacks() {
        let withErrorEmitted = callback => {
            return (result) => {
                if (result.error) {
                    this.emit('error', { type: 'WebSocketError', error: result.error });
                }
                callback(result);
            };
        };
        return {
            tls_only: withErrorEmitted(() => {
                this.usingTLS = true;
                this.updateStrategy();
                this.retryIn(0);
            }),
            refused: withErrorEmitted(() => {
                this.disconnect();
            }),
            backoff: withErrorEmitted(() => {
                this.retryIn(1000);
            }),
            retry: withErrorEmitted(() => {
                this.retryIn(0);
            })
        };
    }
    setConnection(connection) {
        this.connection = connection;
        for (var event in this.connectionCallbacks) {
            this.connection.bind(event, this.connectionCallbacks[event]);
        }
        this.resetActivityCheck();
    }
    abandonConnection() {
        if (!this.connection) {
            return;
        }
        this.stopActivityCheck();
        for (var event in this.connectionCallbacks) {
            this.connection.unbind(event, this.connectionCallbacks[event]);
        }
        var connection = this.connection;
        this.connection = null;
        return connection;
    }
    updateState(newState, data) {
        var previousState = this.state;
        this.state = newState;
        if (previousState !== newState) {
            var newStateDescription = newState;
            if (newStateDescription === 'connected') {
                newStateDescription += ' with new socket ID ' + data.socket_id;
            }
            logger.debug('State changed', previousState + ' -> ' + newStateDescription);
            this.timeline.info({ state: newState, params: data });
            this.emit('state_change', { previous: previousState, current: newState });
            this.emit(newState, data);
        }
    }
    shouldRetry() {
        return this.state === 'connecting' || this.state === 'connected';
    }
}

// CONCATENATED MODULE: ./src/core/channels/channels.ts




class channels_Channels {
    constructor() {
        this.channels = {};
    }
    add(name, pusher) {
        if (!this.channels[name]) {
            this.channels[name] = createChannel(name, pusher);
        }
        return this.channels[name];
    }
    all() {
        return values(this.channels);
    }
    find(name) {
        return this.channels[name];
    }
    remove(name) {
        var channel = this.channels[name];
        delete this.channels[name];
        return channel;
    }
    disconnect() {
        objectApply(this.channels, function (channel) {
            channel.disconnect();
        });
    }
}
function createChannel(name, pusher) {
    if (name.indexOf('private-encrypted-') === 0) {
        if (pusher.config.nacl) {
            return factory.createEncryptedChannel(name, pusher, pusher.config.nacl);
        }
        let errMsg = 'Tried to subscribe to a private-encrypted- channel but no nacl implementation available';
        let suffix = url_store.buildLogSuffix('encryptedChannelSupport');
        throw new UnsupportedFeature(`${errMsg}. ${suffix}`);
    }
    else if (name.indexOf('private-') === 0) {
        return factory.createPrivateChannel(name, pusher);
    }
    else if (name.indexOf('presence-') === 0) {
        return factory.createPresenceChannel(name, pusher);
    }
    else if (name.indexOf('#') === 0) {
        throw new BadChannelName('Cannot create a channel with name "' + name + '".');
    }
    else {
        return factory.createChannel(name, pusher);
    }
}

// CONCATENATED MODULE: ./src/core/utils/factory.ts









var Factory = {
    createChannels() {
        return new channels_Channels();
    },
    createConnectionManager(key, options) {
        return new connection_manager_ConnectionManager(key, options);
    },
    createChannel(name, pusher) {
        return new channel_Channel(name, pusher);
    },
    createPrivateChannel(name, pusher) {
        return new private_channel_PrivateChannel(name, pusher);
    },
    createPresenceChannel(name, pusher) {
        return new presence_channel_PresenceChannel(name, pusher);
    },
    createEncryptedChannel(name, pusher, nacl) {
        return new encrypted_channel_EncryptedChannel(name, pusher, nacl);
    },
    createTimelineSender(timeline, options) {
        return new timeline_sender_TimelineSender(timeline, options);
    },
    createHandshake(transport, callback) {
        return new handshake_Handshake(transport, callback);
    },
    createAssistantToTheTransportManager(manager, transport, options) {
        return new assistant_to_the_transport_manager_AssistantToTheTransportManager(manager, transport, options);
    }
};
/* harmony default export */ var factory = (Factory);

// CONCATENATED MODULE: ./src/core/transports/transport_manager.ts

class transport_manager_TransportManager {
    constructor(options) {
        this.options = options || {};
        this.livesLeft = this.options.lives || Infinity;
    }
    getAssistant(transport) {
        return factory.createAssistantToTheTransportManager(this, transport, {
            minPingDelay: this.options.minPingDelay,
            maxPingDelay: this.options.maxPingDelay
        });
    }
    isAlive() {
        return this.livesLeft > 0;
    }
    reportDeath() {
        this.livesLeft -= 1;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/sequential_strategy.ts



class sequential_strategy_SequentialStrategy {
    constructor(strategies, options) {
        this.strategies = strategies;
        this.loop = Boolean(options.loop);
        this.failFast = Boolean(options.failFast);
        this.timeout = options.timeout;
        this.timeoutLimit = options.timeoutLimit;
    }
    isSupported() {
        return any(this.strategies, util.method('isSupported'));
    }
    connect(minPriority, callback) {
        var strategies = this.strategies;
        var current = 0;
        var timeout = this.timeout;
        var runner = null;
        var tryNextStrategy = (error, handshake) => {
            if (handshake) {
                callback(null, handshake);
            }
            else {
                current = current + 1;
                if (this.loop) {
                    current = current % strategies.length;
                }
                if (current < strategies.length) {
                    if (timeout) {
                        timeout = timeout * 2;
                        if (this.timeoutLimit) {
                            timeout = Math.min(timeout, this.timeoutLimit);
                        }
                    }
                    runner = this.tryStrategy(strategies[current], minPriority, { timeout, failFast: this.failFast }, tryNextStrategy);
                }
                else {
                    callback(true);
                }
            }
        };
        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
    tryStrategy(strategy, minPriority, options, callback) {
        var timer = null;
        var runner = null;
        if (options.timeout > 0) {
            timer = new timers_OneOffTimer(options.timeout, function () {
                runner.abort();
                callback(true);
            });
        }
        runner = strategy.connect(minPriority, function (error, handshake) {
            if (error && timer && timer.isRunning() && !options.failFast) {
                return;
            }
            if (timer) {
                timer.ensureAborted();
            }
            callback(error, handshake);
        });
        return {
            abort: function () {
                if (timer) {
                    timer.ensureAborted();
                }
                runner.abort();
            },
            forceMinPriority: function (p) {
                runner.forceMinPriority(p);
            }
        };
    }
}

// CONCATENATED MODULE: ./src/core/strategies/best_connected_ever_strategy.ts


class best_connected_ever_strategy_BestConnectedEverStrategy {
    constructor(strategies) {
        this.strategies = strategies;
    }
    isSupported() {
        return any(this.strategies, util.method('isSupported'));
    }
    connect(minPriority, callback) {
        return connect(this.strategies, minPriority, function (i, runners) {
            return function (error, handshake) {
                runners[i].error = error;
                if (error) {
                    if (allRunnersFailed(runners)) {
                        callback(true);
                    }
                    return;
                }
                apply(runners, function (runner) {
                    runner.forceMinPriority(handshake.transport.priority);
                });
                callback(null, handshake);
            };
        });
    }
}
function connect(strategies, minPriority, callbackBuilder) {
    var runners = map(strategies, function (strategy, i, _, rs) {
        return strategy.connect(minPriority, callbackBuilder(i, rs));
    });
    return {
        abort: function () {
            apply(runners, abortRunner);
        },
        forceMinPriority: function (p) {
            apply(runners, function (runner) {
                runner.forceMinPriority(p);
            });
        }
    };
}
function allRunnersFailed(runners) {
    return collections_all(runners, function (runner) {
        return Boolean(runner.error);
    });
}
function abortRunner(runner) {
    if (!runner.error && !runner.aborted) {
        runner.abort();
        runner.aborted = true;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/websocket_prioritized_cached_strategy.ts




class websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy {
    constructor(strategy, transports, options) {
        this.strategy = strategy;
        this.transports = transports;
        this.ttl = options.ttl || 1800 * 1000;
        this.usingTLS = options.useTLS;
        this.timeline = options.timeline;
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var usingTLS = this.usingTLS;
        var info = fetchTransportCache(usingTLS);
        var cacheSkipCount = info && info.cacheSkipCount ? info.cacheSkipCount : 0;
        var strategies = [this.strategy];
        if (info && info.timestamp + this.ttl >= util.now()) {
            var transport = this.transports[info.transport];
            if (transport) {
                if (['ws', 'wss'].includes(info.transport) || cacheSkipCount > 3) {
                    this.timeline.info({
                        cached: true,
                        transport: info.transport,
                        latency: info.latency
                    });
                    strategies.push(new sequential_strategy_SequentialStrategy([transport], {
                        timeout: info.latency * 2 + 1000,
                        failFast: true
                    }));
                }
                else {
                    cacheSkipCount++;
                }
            }
        }
        var startTimestamp = util.now();
        var runner = strategies
            .pop()
            .connect(minPriority, function cb(error, handshake) {
            if (error) {
                flushTransportCache(usingTLS);
                if (strategies.length > 0) {
                    startTimestamp = util.now();
                    runner = strategies.pop().connect(minPriority, cb);
                }
                else {
                    callback(error);
                }
            }
            else {
                storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp, cacheSkipCount);
                callback(null, handshake);
            }
        });
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
}
function getTransportCacheKey(usingTLS) {
    return 'pusherTransport' + (usingTLS ? 'TLS' : 'NonTLS');
}
function fetchTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            var serializedCache = storage[getTransportCacheKey(usingTLS)];
            if (serializedCache) {
                return JSON.parse(serializedCache);
            }
        }
        catch (e) {
            flushTransportCache(usingTLS);
        }
    }
    return null;
}
function storeTransportCache(usingTLS, transport, latency, cacheSkipCount) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                timestamp: util.now(),
                transport: transport,
                latency: latency,
                cacheSkipCount: cacheSkipCount
            });
        }
        catch (e) {
        }
    }
}
function flushTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            delete storage[getTransportCacheKey(usingTLS)];
        }
        catch (e) {
        }
    }
}

// CONCATENATED MODULE: ./src/core/strategies/delayed_strategy.ts

class delayed_strategy_DelayedStrategy {
    constructor(strategy, { delay: number }) {
        this.strategy = strategy;
        this.options = { delay: number };
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var strategy = this.strategy;
        var runner;
        var timer = new timers_OneOffTimer(this.options.delay, function () {
            runner = strategy.connect(minPriority, callback);
        });
        return {
            abort: function () {
                timer.ensureAborted();
                if (runner) {
                    runner.abort();
                }
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
}

// CONCATENATED MODULE: ./src/core/strategies/if_strategy.ts
class IfStrategy {
    constructor(test, trueBranch, falseBranch) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
    isSupported() {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.isSupported();
    }
    connect(minPriority, callback) {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.connect(minPriority, callback);
    }
}

// CONCATENATED MODULE: ./src/core/strategies/first_connected_strategy.ts
class FirstConnectedStrategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var runner = this.strategy.connect(minPriority, function (error, handshake) {
            if (handshake) {
                runner.abort();
            }
            callback(error, handshake);
        });
        return runner;
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/default_strategy.ts







function testSupportsStrategy(strategy) {
    return function () {
        return strategy.isSupported();
    };
}
var getDefaultStrategy = function (config, baseOptions, defineTransport) {
    var definedTransports = {};
    function defineTransportStrategy(name, type, priority, options, manager) {
        var transport = defineTransport(config, name, type, priority, options, manager);
        definedTransports[name] = transport;
        return transport;
    }
    var ws_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.wsHost + ':' + config.wsPort,
        hostTLS: config.wsHost + ':' + config.wssPort,
        httpPath: config.wsPath
    });
    var wss_options = Object.assign({}, ws_options, {
        useTLS: true
    });
    var sockjs_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.httpHost + ':' + config.httpPort,
        hostTLS: config.httpHost + ':' + config.httpsPort,
        httpPath: config.httpPath
    });
    var timeouts = {
        loop: true,
        timeout: 15000,
        timeoutLimit: 60000
    };
    var ws_manager = new transport_manager_TransportManager({
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var streaming_manager = new transport_manager_TransportManager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var ws_transport = defineTransportStrategy('ws', 'ws', 3, ws_options, ws_manager);
    var wss_transport = defineTransportStrategy('wss', 'ws', 3, wss_options, ws_manager);
    var sockjs_transport = defineTransportStrategy('sockjs', 'sockjs', 1, sockjs_options);
    var xhr_streaming_transport = defineTransportStrategy('xhr_streaming', 'xhr_streaming', 1, sockjs_options, streaming_manager);
    var xdr_streaming_transport = defineTransportStrategy('xdr_streaming', 'xdr_streaming', 1, sockjs_options, streaming_manager);
    var xhr_polling_transport = defineTransportStrategy('xhr_polling', 'xhr_polling', 1, sockjs_options);
    var xdr_polling_transport = defineTransportStrategy('xdr_polling', 'xdr_polling', 1, sockjs_options);
    var ws_loop = new sequential_strategy_SequentialStrategy([ws_transport], timeouts);
    var wss_loop = new sequential_strategy_SequentialStrategy([wss_transport], timeouts);
    var sockjs_loop = new sequential_strategy_SequentialStrategy([sockjs_transport], timeouts);
    var streaming_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
    ], timeouts);
    var polling_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
    ], timeouts);
    var http_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy_BestConnectedEverStrategy([
            streaming_loop,
            new delayed_strategy_DelayedStrategy(polling_loop, { delay: 4000 })
        ]), polling_loop)
    ], timeouts);
    var http_fallback_loop = new IfStrategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
    var wsStrategy;
    if (baseOptions.useTLS) {
        wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
            ws_loop,
            new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 2000 })
        ]);
    }
    else {
        wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
            ws_loop,
            new delayed_strategy_DelayedStrategy(wss_loop, { delay: 2000 }),
            new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 5000 })
        ]);
    }
    return new websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy(new FirstConnectedStrategy(new IfStrategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
        ttl: 1800000,
        timeline: baseOptions.timeline,
        useTLS: baseOptions.useTLS
    });
};
/* harmony default export */ var default_strategy = (getDefaultStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transport_connection_initializer.ts

/* harmony default export */ var transport_connection_initializer = (function () {
    var self = this;
    self.timeline.info(self.buildTimelineMessage({
        transport: self.name + (self.options.useTLS ? 's' : '')
    }));
    if (self.hooks.isInitialized()) {
        self.changeState('initialized');
    }
    else if (self.hooks.file) {
        self.changeState('initializing');
        Dependencies.load(self.hooks.file, { useTLS: self.options.useTLS }, function (error, callback) {
            if (self.hooks.isInitialized()) {
                self.changeState('initialized');
                callback(true);
            }
            else {
                if (error) {
                    self.onError(error);
                }
                self.onClose();
                callback(false);
            }
        });
    }
    else {
        self.onClose();
    }
});

// CONCATENATED MODULE: ./src/runtimes/web/http/http_xdomain_request.ts

var http_xdomain_request_hooks = {
    getRequest: function (socket) {
        var xdr = new window.XDomainRequest();
        xdr.ontimeout = function () {
            socket.emit('error', new RequestTimedOut());
            socket.close();
        };
        xdr.onerror = function (e) {
            socket.emit('error', e);
            socket.close();
        };
        xdr.onprogress = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
        };
        xdr.onload = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
            socket.emit('finished', 200);
            socket.close();
        };
        return xdr;
    },
    abortRequest: function (xdr) {
        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
        xdr.abort();
    }
};
/* harmony default export */ var http_xdomain_request = (http_xdomain_request_hooks);

// CONCATENATED MODULE: ./src/core/http/http_request.ts


const MAX_BUFFER_LENGTH = 256 * 1024;
class http_request_HTTPRequest extends dispatcher_Dispatcher {
    constructor(hooks, method, url) {
        super();
        this.hooks = hooks;
        this.method = method;
        this.url = url;
    }
    start(payload) {
        this.position = 0;
        this.xhr = this.hooks.getRequest(this);
        this.unloader = () => {
            this.close();
        };
        runtime.addUnloadListener(this.unloader);
        this.xhr.open(this.method, this.url, true);
        if (this.xhr.setRequestHeader) {
            this.xhr.setRequestHeader('Content-Type', 'application/json');
        }
        this.xhr.send(payload);
    }
    close() {
        if (this.unloader) {
            runtime.removeUnloadListener(this.unloader);
            this.unloader = null;
        }
        if (this.xhr) {
            this.hooks.abortRequest(this.xhr);
            this.xhr = null;
        }
    }
    onChunk(status, data) {
        while (true) {
            var chunk = this.advanceBuffer(data);
            if (chunk) {
                this.emit('chunk', { status: status, data: chunk });
            }
            else {
                break;
            }
        }
        if (this.isBufferTooLong(data)) {
            this.emit('buffer_too_long');
        }
    }
    advanceBuffer(buffer) {
        var unreadData = buffer.slice(this.position);
        var endOfLinePosition = unreadData.indexOf('\n');
        if (endOfLinePosition !== -1) {
            this.position += endOfLinePosition + 1;
            return unreadData.slice(0, endOfLinePosition);
        }
        else {
            return null;
        }
    }
    isBufferTooLong(buffer) {
        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
    }
}

// CONCATENATED MODULE: ./src/core/http/state.ts
var State;
(function (State) {
    State[State["CONNECTING"] = 0] = "CONNECTING";
    State[State["OPEN"] = 1] = "OPEN";
    State[State["CLOSED"] = 3] = "CLOSED";
})(State || (State = {}));
/* harmony default export */ var state = (State);

// CONCATENATED MODULE: ./src/core/http/http_socket.ts



var autoIncrement = 1;
class http_socket_HTTPSocket {
    constructor(hooks, url) {
        this.hooks = hooks;
        this.session = randomNumber(1000) + '/' + randomString(8);
        this.location = getLocation(url);
        this.readyState = state.CONNECTING;
        this.openStream();
    }
    send(payload) {
        return this.sendRaw(JSON.stringify([payload]));
    }
    ping() {
        this.hooks.sendHeartbeat(this);
    }
    close(code, reason) {
        this.onClose(code, reason, true);
    }
    sendRaw(payload) {
        if (this.readyState === state.OPEN) {
            try {
                runtime.createSocketRequest('POST', getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    reconnect() {
        this.closeStream();
        this.openStream();
    }
    onClose(code, reason, wasClean) {
        this.closeStream();
        this.readyState = state.CLOSED;
        if (this.onclose) {
            this.onclose({
                code: code,
                reason: reason,
                wasClean: wasClean
            });
        }
    }
    onChunk(chunk) {
        if (chunk.status !== 200) {
            return;
        }
        if (this.readyState === state.OPEN) {
            this.onActivity();
        }
        var payload;
        var type = chunk.data.slice(0, 1);
        switch (type) {
            case 'o':
                payload = JSON.parse(chunk.data.slice(1) || '{}');
                this.onOpen(payload);
                break;
            case 'a':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                for (var i = 0; i < payload.length; i++) {
                    this.onEvent(payload[i]);
                }
                break;
            case 'm':
                payload = JSON.parse(chunk.data.slice(1) || 'null');
                this.onEvent(payload);
                break;
            case 'h':
                this.hooks.onHeartbeat(this);
                break;
            case 'c':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                this.onClose(payload[0], payload[1], true);
                break;
        }
    }
    onOpen(options) {
        if (this.readyState === state.CONNECTING) {
            if (options && options.hostname) {
                this.location.base = replaceHost(this.location.base, options.hostname);
            }
            this.readyState = state.OPEN;
            if (this.onopen) {
                this.onopen();
            }
        }
        else {
            this.onClose(1006, 'Server lost session', true);
        }
    }
    onEvent(event) {
        if (this.readyState === state.OPEN && this.onmessage) {
            this.onmessage({ data: event });
        }
    }
    onActivity() {
        if (this.onactivity) {
            this.onactivity();
        }
    }
    onError(error) {
        if (this.onerror) {
            this.onerror(error);
        }
    }
    openStream() {
        this.stream = runtime.createSocketRequest('POST', getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
        this.stream.bind('chunk', chunk => {
            this.onChunk(chunk);
        });
        this.stream.bind('finished', status => {
            this.hooks.onFinished(this, status);
        });
        this.stream.bind('buffer_too_long', () => {
            this.reconnect();
        });
        try {
            this.stream.start();
        }
        catch (error) {
            util.defer(() => {
                this.onError(error);
                this.onClose(1006, 'Could not start streaming', false);
            });
        }
    }
    closeStream() {
        if (this.stream) {
            this.stream.unbind_all();
            this.stream.close();
            this.stream = null;
        }
    }
}
function getLocation(url) {
    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
    return {
        base: parts[1],
        queryString: parts[2]
    };
}
function getSendURL(url, session) {
    return url.base + '/' + session + '/xhr_send';
}
function getUniqueURL(url) {
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    return url + separator + 't=' + +new Date() + '&n=' + autoIncrement++;
}
function replaceHost(url, hostname) {
    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
    return urlParts[1] + hostname + urlParts[3];
}
function randomNumber(max) {
    return runtime.randomInt(max);
}
function randomString(length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(randomNumber(32).toString(32));
    }
    return result.join('');
}
/* harmony default export */ var http_socket = (http_socket_HTTPSocket);

// CONCATENATED MODULE: ./src/core/http/http_streaming_socket.ts
var http_streaming_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr_streaming' + url.queryString;
    },
    onHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
    }
};
/* harmony default export */ var http_streaming_socket = (http_streaming_socket_hooks);

// CONCATENATED MODULE: ./src/core/http/http_polling_socket.ts
var http_polling_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr' + url.queryString;
    },
    onHeartbeat: function () {
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        if (status === 200) {
            socket.reconnect();
        }
        else {
            socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
        }
    }
};
/* harmony default export */ var http_polling_socket = (http_polling_socket_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http_xhr_request.ts

var http_xhr_request_hooks = {
    getRequest: function (socket) {
        var Constructor = runtime.getXHRAPI();
        var xhr = new Constructor();
        xhr.onreadystatechange = xhr.onprogress = function () {
            switch (xhr.readyState) {
                case 3:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    break;
                case 4:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    socket.emit('finished', xhr.status);
                    socket.close();
                    break;
            }
        };
        return xhr;
    },
    abortRequest: function (xhr) {
        xhr.onreadystatechange = null;
        xhr.abort();
    }
};
/* harmony default export */ var http_xhr_request = (http_xhr_request_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http.ts





var HTTP = {
    createStreamingSocket(url) {
        return this.createSocket(http_streaming_socket, url);
    },
    createPollingSocket(url) {
        return this.createSocket(http_polling_socket, url);
    },
    createSocket(hooks, url) {
        return new http_socket(hooks, url);
    },
    createXHR(method, url) {
        return this.createRequest(http_xhr_request, method, url);
    },
    createRequest(hooks, method, url) {
        return new http_request_HTTPRequest(hooks, method, url);
    }
};
/* harmony default export */ var http_http = (HTTP);

// CONCATENATED MODULE: ./src/runtimes/web/http/http.ts


http_http.createXDR = function (method, url) {
    return this.createRequest(http_xdomain_request, method, url);
};
/* harmony default export */ var web_http_http = (http_http);

// CONCATENATED MODULE: ./src/runtimes/web/runtime.ts












var Runtime = {
    nextAuthCallbackID: 1,
    auth_callbacks: {},
    ScriptReceivers: ScriptReceivers,
    DependenciesReceivers: DependenciesReceivers,
    getDefaultStrategy: default_strategy,
    Transports: transports_transports,
    transportConnectionInitializer: transport_connection_initializer,
    HTTPFactory: web_http_http,
    TimelineTransport: jsonp_timeline,
    getXHRAPI() {
        return window.XMLHttpRequest;
    },
    getWebSocketAPI() {
        return window.WebSocket || window.MozWebSocket;
    },
    setup(PusherClass) {
        window.Pusher = PusherClass;
        var initializeOnDocumentBody = () => {
            this.onDocumentBody(PusherClass.ready);
        };
        if (!window.JSON) {
            Dependencies.load('json2', {}, initializeOnDocumentBody);
        }
        else {
            initializeOnDocumentBody();
        }
    },
    getDocument() {
        return document;
    },
    getProtocol() {
        return this.getDocument().location.protocol;
    },
    getAuthorizers() {
        return { ajax: xhr_auth, jsonp: jsonp_auth };
    },
    onDocumentBody(callback) {
        if (document.body) {
            callback();
        }
        else {
            setTimeout(() => {
                this.onDocumentBody(callback);
            }, 0);
        }
    },
    createJSONPRequest(url, data) {
        return new jsonp_request_JSONPRequest(url, data);
    },
    createScriptRequest(src) {
        return new ScriptRequest(src);
    },
    getLocalStorage() {
        try {
            return window.localStorage;
        }
        catch (e) {
            return undefined;
        }
    },
    createXHR() {
        if (this.getXHRAPI()) {
            return this.createXMLHttpRequest();
        }
        else {
            return this.createMicrosoftXHR();
        }
    },
    createXMLHttpRequest() {
        var Constructor = this.getXHRAPI();
        return new Constructor();
    },
    createMicrosoftXHR() {
        return new ActiveXObject('Microsoft.XMLHTTP');
    },
    getNetwork() {
        return net_info_Network;
    },
    createWebSocket(url) {
        var Constructor = this.getWebSocketAPI();
        return new Constructor(url);
    },
    createSocketRequest(method, url) {
        if (this.isXHRSupported()) {
            return this.HTTPFactory.createXHR(method, url);
        }
        else if (this.isXDRSupported(url.indexOf('https:') === 0)) {
            return this.HTTPFactory.createXDR(method, url);
        }
        else {
            throw 'Cross-origin HTTP requests are not supported';
        }
    },
    isXHRSupported() {
        var Constructor = this.getXHRAPI();
        return (Boolean(Constructor) && new Constructor().withCredentials !== undefined);
    },
    isXDRSupported(useTLS) {
        var protocol = useTLS ? 'https:' : 'http:';
        var documentProtocol = this.getProtocol();
        return (Boolean(window['XDomainRequest']) && documentProtocol === protocol);
    },
    addUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
            window.addEventListener('unload', listener, false);
        }
        else if (window.attachEvent !== undefined) {
            window.attachEvent('onunload', listener);
        }
    },
    removeUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
            window.removeEventListener('unload', listener, false);
        }
        else if (window.detachEvent !== undefined) {
            window.detachEvent('onunload', listener);
        }
    },
    randomInt(max) {
        const random = function () {
            const crypto = window.crypto || window['msCrypto'];
            const random = crypto.getRandomValues(new Uint32Array(1))[0];
            return random / Math.pow(2, 32);
        };
        return Math.floor(random() * max);
    }
};
/* harmony default export */ var runtime = (Runtime);

// CONCATENATED MODULE: ./src/core/timeline/level.ts
var TimelineLevel;
(function (TimelineLevel) {
    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
})(TimelineLevel || (TimelineLevel = {}));
/* harmony default export */ var timeline_level = (TimelineLevel);

// CONCATENATED MODULE: ./src/core/timeline/timeline.ts



class timeline_Timeline {
    constructor(key, session, options) {
        this.key = key;
        this.session = session;
        this.events = [];
        this.options = options || {};
        this.sent = 0;
        this.uniqueID = 0;
    }
    log(level, event) {
        if (level <= this.options.level) {
            this.events.push(extend({}, event, { timestamp: util.now() }));
            if (this.options.limit && this.events.length > this.options.limit) {
                this.events.shift();
            }
        }
    }
    error(event) {
        this.log(timeline_level.ERROR, event);
    }
    info(event) {
        this.log(timeline_level.INFO, event);
    }
    debug(event) {
        this.log(timeline_level.DEBUG, event);
    }
    isEmpty() {
        return this.events.length === 0;
    }
    send(sendfn, callback) {
        var data = extend({
            session: this.session,
            bundle: this.sent + 1,
            key: this.key,
            lib: 'js',
            version: this.options.version,
            cluster: this.options.cluster,
            features: this.options.features,
            timeline: this.events
        }, this.options.params);
        this.events = [];
        sendfn(data, (error, result) => {
            if (!error) {
                this.sent++;
            }
            if (callback) {
                callback(error, result);
            }
        });
        return true;
    }
    generateUniqueID() {
        this.uniqueID++;
        return this.uniqueID;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/transport_strategy.ts




class transport_strategy_TransportStrategy {
    constructor(name, priority, transport, options) {
        this.name = name;
        this.priority = priority;
        this.transport = transport;
        this.options = options || {};
    }
    isSupported() {
        return this.transport.isSupported({
            useTLS: this.options.useTLS
        });
    }
    connect(minPriority, callback) {
        if (!this.isSupported()) {
            return failAttempt(new UnsupportedStrategy(), callback);
        }
        else if (this.priority < minPriority) {
            return failAttempt(new TransportPriorityTooLow(), callback);
        }
        var connected = false;
        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
        var handshake = null;
        var onInitialized = function () {
            transport.unbind('initialized', onInitialized);
            transport.connect();
        };
        var onOpen = function () {
            handshake = factory.createHandshake(transport, function (result) {
                connected = true;
                unbindListeners();
                callback(null, result);
            });
        };
        var onError = function (error) {
            unbindListeners();
            callback(error);
        };
        var onClosed = function () {
            unbindListeners();
            var serializedTransport;
            serializedTransport = safeJSONStringify(transport);
            callback(new TransportClosed(serializedTransport));
        };
        var unbindListeners = function () {
            transport.unbind('initialized', onInitialized);
            transport.unbind('open', onOpen);
            transport.unbind('error', onError);
            transport.unbind('closed', onClosed);
        };
        transport.bind('initialized', onInitialized);
        transport.bind('open', onOpen);
        transport.bind('error', onError);
        transport.bind('closed', onClosed);
        transport.initialize();
        return {
            abort: () => {
                if (connected) {
                    return;
                }
                unbindListeners();
                if (handshake) {
                    handshake.close();
                }
                else {
                    transport.close();
                }
            },
            forceMinPriority: p => {
                if (connected) {
                    return;
                }
                if (this.priority < p) {
                    if (handshake) {
                        handshake.close();
                    }
                    else {
                        transport.close();
                    }
                }
            }
        };
    }
}
function failAttempt(error, callback) {
    util.defer(function () {
        callback(error);
    });
    return {
        abort: function () { },
        forceMinPriority: function () { }
    };
}

// CONCATENATED MODULE: ./src/core/strategies/strategy_builder.ts





const { Transports: strategy_builder_Transports } = runtime;
var strategy_builder_defineTransport = function (config, name, type, priority, options, manager) {
    var transportClass = strategy_builder_Transports[type];
    if (!transportClass) {
        throw new UnsupportedTransport(type);
    }
    var enabled = (!config.enabledTransports ||
        arrayIndexOf(config.enabledTransports, name) !== -1) &&
        (!config.disabledTransports ||
            arrayIndexOf(config.disabledTransports, name) === -1);
    var transport;
    if (enabled) {
        options = Object.assign({ ignoreNullOrigin: config.ignoreNullOrigin }, options);
        transport = new transport_strategy_TransportStrategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
    }
    else {
        transport = strategy_builder_UnsupportedStrategy;
    }
    return transport;
};
var strategy_builder_UnsupportedStrategy = {
    isSupported: function () {
        return false;
    },
    connect: function (_, callback) {
        var deferred = util.defer(function () {
            callback(new UnsupportedStrategy());
        });
        return {
            abort: function () {
                deferred.ensureAborted();
            },
            forceMinPriority: function () { }
        };
    }
};

// CONCATENATED MODULE: ./src/core/options.ts

function validateOptions(options) {
    if (options == null) {
        throw 'You must pass an options object';
    }
    if (options.cluster == null) {
        throw 'Options object must provide a cluster';
    }
    if ('disableStats' in options) {
        logger.warn('The disableStats option is deprecated in favor of enableStats');
    }
}

// CONCATENATED MODULE: ./src/core/auth/user_authenticator.ts


const composeChannelQuery = (params, authOptions) => {
    var query = 'socket_id=' + encodeURIComponent(params.socketId);
    for (var key in authOptions.params) {
        query +=
            '&' +
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(authOptions.params[key]);
    }
    if (authOptions.paramsProvider != null) {
        let dynamicParams = authOptions.paramsProvider();
        for (var key in dynamicParams) {
            query +=
                '&' +
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(dynamicParams[key]);
        }
    }
    return query;
};
const UserAuthenticator = (authOptions) => {
    if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw `'${authOptions.transport}' is not a recognized auth transport`;
    }
    return (params, callback) => {
        const query = composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.UserAuthentication, callback);
    };
};
/* harmony default export */ var user_authenticator = (UserAuthenticator);

// CONCATENATED MODULE: ./src/core/auth/channel_authorizer.ts


const channel_authorizer_composeChannelQuery = (params, authOptions) => {
    var query = 'socket_id=' + encodeURIComponent(params.socketId);
    query += '&channel_name=' + encodeURIComponent(params.channelName);
    for (var key in authOptions.params) {
        query +=
            '&' +
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(authOptions.params[key]);
    }
    if (authOptions.paramsProvider != null) {
        let dynamicParams = authOptions.paramsProvider();
        for (var key in dynamicParams) {
            query +=
                '&' +
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(dynamicParams[key]);
        }
    }
    return query;
};
const ChannelAuthorizer = (authOptions) => {
    if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw `'${authOptions.transport}' is not a recognized auth transport`;
    }
    return (params, callback) => {
        const query = channel_authorizer_composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.ChannelAuthorization, callback);
    };
};
/* harmony default export */ var channel_authorizer = (ChannelAuthorizer);

// CONCATENATED MODULE: ./src/core/auth/deprecated_channel_authorizer.ts
const ChannelAuthorizerProxy = (pusher, authOptions, channelAuthorizerGenerator) => {
    const deprecatedAuthorizerOptions = {
        authTransport: authOptions.transport,
        authEndpoint: authOptions.endpoint,
        auth: {
            params: authOptions.params,
            headers: authOptions.headers
        }
    };
    return (params, callback) => {
        const channel = pusher.channel(params.channelName);
        const channelAuthorizer = channelAuthorizerGenerator(channel, deprecatedAuthorizerOptions);
        channelAuthorizer.authorize(params.socketId, callback);
    };
};

// CONCATENATED MODULE: ./src/core/config.ts





function getConfig(opts, pusher) {
    let config = {
        activityTimeout: opts.activityTimeout || defaults.activityTimeout,
        cluster: opts.cluster,
        httpPath: opts.httpPath || defaults.httpPath,
        httpPort: opts.httpPort || defaults.httpPort,
        httpsPort: opts.httpsPort || defaults.httpsPort,
        pongTimeout: opts.pongTimeout || defaults.pongTimeout,
        statsHost: opts.statsHost || defaults.stats_host,
        unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
        wsPath: opts.wsPath || defaults.wsPath,
        wsPort: opts.wsPort || defaults.wsPort,
        wssPort: opts.wssPort || defaults.wssPort,
        enableStats: getEnableStatsConfig(opts),
        httpHost: getHttpHost(opts),
        useTLS: shouldUseTLS(opts),
        wsHost: getWebsocketHost(opts),
        userAuthenticator: buildUserAuthenticator(opts),
        channelAuthorizer: buildChannelAuthorizer(opts, pusher)
    };
    if ('disabledTransports' in opts)
        config.disabledTransports = opts.disabledTransports;
    if ('enabledTransports' in opts)
        config.enabledTransports = opts.enabledTransports;
    if ('ignoreNullOrigin' in opts)
        config.ignoreNullOrigin = opts.ignoreNullOrigin;
    if ('timelineParams' in opts)
        config.timelineParams = opts.timelineParams;
    if ('nacl' in opts) {
        config.nacl = opts.nacl;
    }
    return config;
}
function getHttpHost(opts) {
    if (opts.httpHost) {
        return opts.httpHost;
    }
    if (opts.cluster) {
        return `sockjs-${opts.cluster}.pusher.com`;
    }
    return defaults.httpHost;
}
function getWebsocketHost(opts) {
    if (opts.wsHost) {
        return opts.wsHost;
    }
    return getWebsocketHostFromCluster(opts.cluster);
}
function getWebsocketHostFromCluster(cluster) {
    return `ws-${cluster}.pusher.com`;
}
function shouldUseTLS(opts) {
    if (runtime.getProtocol() === 'https:') {
        return true;
    }
    else if (opts.forceTLS === false) {
        return false;
    }
    return true;
}
function getEnableStatsConfig(opts) {
    if ('enableStats' in opts) {
        return opts.enableStats;
    }
    if ('disableStats' in opts) {
        return !opts.disableStats;
    }
    return false;
}
function buildUserAuthenticator(opts) {
    const userAuthentication = Object.assign(Object.assign({}, defaults.userAuthentication), opts.userAuthentication);
    if ('customHandler' in userAuthentication &&
        userAuthentication['customHandler'] != null) {
        return userAuthentication['customHandler'];
    }
    return user_authenticator(userAuthentication);
}
function buildChannelAuth(opts, pusher) {
    let channelAuthorization;
    if ('channelAuthorization' in opts) {
        channelAuthorization = Object.assign(Object.assign({}, defaults.channelAuthorization), opts.channelAuthorization);
    }
    else {
        channelAuthorization = {
            transport: opts.authTransport || defaults.authTransport,
            endpoint: opts.authEndpoint || defaults.authEndpoint
        };
        if ('auth' in opts) {
            if ('params' in opts.auth)
                channelAuthorization.params = opts.auth.params;
            if ('headers' in opts.auth)
                channelAuthorization.headers = opts.auth.headers;
        }
        if ('authorizer' in opts)
            channelAuthorization.customHandler = ChannelAuthorizerProxy(pusher, channelAuthorization, opts.authorizer);
    }
    return channelAuthorization;
}
function buildChannelAuthorizer(opts, pusher) {
    const channelAuthorization = buildChannelAuth(opts, pusher);
    if ('customHandler' in channelAuthorization &&
        channelAuthorization['customHandler'] != null) {
        return channelAuthorization['customHandler'];
    }
    return channel_authorizer(channelAuthorization);
}

// CONCATENATED MODULE: ./src/core/watchlist.ts


class watchlist_WatchlistFacade extends dispatcher_Dispatcher {
    constructor(pusher) {
        super(function (eventName, data) {
            logger.debug(`No callbacks on watchlist events for ${eventName}`);
        });
        this.pusher = pusher;
        this.bindWatchlistInternalEvent();
    }
    handleEvent(pusherEvent) {
        pusherEvent.data.events.forEach(watchlistEvent => {
            this.emit(watchlistEvent.name, watchlistEvent);
        });
    }
    bindWatchlistInternalEvent() {
        this.pusher.connection.bind('message', pusherEvent => {
            var eventName = pusherEvent.event;
            if (eventName === 'pusher_internal:watchlist_events') {
                this.handleEvent(pusherEvent);
            }
        });
    }
}

// CONCATENATED MODULE: ./src/core/utils/flat_promise.ts
function flatPromise() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject };
}
/* harmony default export */ var flat_promise = (flatPromise);

// CONCATENATED MODULE: ./src/core/user.ts





class user_UserFacade extends dispatcher_Dispatcher {
    constructor(pusher) {
        super(function (eventName, data) {
            logger.debug('No callbacks on user for ' + eventName);
        });
        this.signin_requested = false;
        this.user_data = null;
        this.serverToUserChannel = null;
        this.signinDonePromise = null;
        this._signinDoneResolve = null;
        this._onAuthorize = (err, authData) => {
            if (err) {
                logger.warn(`Error during signin: ${err}`);
                this._cleanup();
                return;
            }
            this.pusher.send_event('pusher:signin', {
                auth: authData.auth,
                user_data: authData.user_data
            });
        };
        this.pusher = pusher;
        this.pusher.connection.bind('state_change', ({ previous, current }) => {
            if (previous !== 'connected' && current === 'connected') {
                this._signin();
            }
            if (previous === 'connected' && current !== 'connected') {
                this._cleanup();
                this._newSigninPromiseIfNeeded();
            }
        });
        this.watchlist = new watchlist_WatchlistFacade(pusher);
        this.pusher.connection.bind('message', event => {
            var eventName = event.event;
            if (eventName === 'pusher:signin_success') {
                this._onSigninSuccess(event.data);
            }
            if (this.serverToUserChannel &&
                this.serverToUserChannel.name === event.channel) {
                this.serverToUserChannel.handleEvent(event);
            }
        });
    }
    signin() {
        if (this.signin_requested) {
            return;
        }
        this.signin_requested = true;
        this._signin();
    }
    _signin() {
        if (!this.signin_requested) {
            return;
        }
        this._newSigninPromiseIfNeeded();
        if (this.pusher.connection.state !== 'connected') {
            return;
        }
        this.pusher.config.userAuthenticator({
            socketId: this.pusher.connection.socket_id
        }, this._onAuthorize);
    }
    _onSigninSuccess(data) {
        try {
            this.user_data = JSON.parse(data.user_data);
        }
        catch (e) {
            logger.error(`Failed parsing user data after signin: ${data.user_data}`);
            this._cleanup();
            return;
        }
        if (typeof this.user_data.id !== 'string' || this.user_data.id === '') {
            logger.error(`user_data doesn't contain an id. user_data: ${this.user_data}`);
            this._cleanup();
            return;
        }
        this._signinDoneResolve();
        this._subscribeChannels();
    }
    _subscribeChannels() {
        const ensure_subscribed = channel => {
            if (channel.subscriptionPending && channel.subscriptionCancelled) {
                channel.reinstateSubscription();
            }
            else if (!channel.subscriptionPending &&
                this.pusher.connection.state === 'connected') {
                channel.subscribe();
            }
        };
        this.serverToUserChannel = new channel_Channel(`#server-to-user-${this.user_data.id}`, this.pusher);
        this.serverToUserChannel.bind_global((eventName, data) => {
            if (eventName.indexOf('pusher_internal:') === 0 ||
                eventName.indexOf('pusher:') === 0) {
                return;
            }
            this.emit(eventName, data);
        });
        ensure_subscribed(this.serverToUserChannel);
    }
    _cleanup() {
        this.user_data = null;
        if (this.serverToUserChannel) {
            this.serverToUserChannel.unbind_all();
            this.serverToUserChannel.disconnect();
            this.serverToUserChannel = null;
        }
        if (this.signin_requested) {
            this._signinDoneResolve();
        }
    }
    _newSigninPromiseIfNeeded() {
        if (!this.signin_requested) {
            return;
        }
        if (this.signinDonePromise && !this.signinDonePromise.done) {
            return;
        }
        const { promise, resolve, reject: _ } = flat_promise();
        promise.done = false;
        const setDone = () => {
            promise.done = true;
        };
        promise.then(setDone).catch(setDone);
        this.signinDonePromise = promise;
        this._signinDoneResolve = resolve;
    }
}

// CONCATENATED MODULE: ./src/core/pusher.ts













class pusher_Pusher {
    static ready() {
        pusher_Pusher.isReady = true;
        for (var i = 0, l = pusher_Pusher.instances.length; i < l; i++) {
            pusher_Pusher.instances[i].connect();
        }
    }
    static getClientFeatures() {
        return keys(filterObject({ ws: runtime.Transports.ws }, function (t) {
            return t.isSupported({});
        }));
    }
    constructor(app_key, options) {
        checkAppKey(app_key);
        validateOptions(options);
        this.key = app_key;
        this.config = getConfig(options, this);
        this.channels = factory.createChannels();
        this.global_emitter = new dispatcher_Dispatcher();
        this.sessionID = runtime.randomInt(1000000000);
        this.timeline = new timeline_Timeline(this.key, this.sessionID, {
            cluster: this.config.cluster,
            features: pusher_Pusher.getClientFeatures(),
            params: this.config.timelineParams || {},
            limit: 50,
            level: timeline_level.INFO,
            version: defaults.VERSION
        });
        if (this.config.enableStats) {
            this.timelineSender = factory.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: '/timeline/v2/' + runtime.TimelineTransport.name
            });
        }
        var getStrategy = (options) => {
            return runtime.getDefaultStrategy(this.config, options, strategy_builder_defineTransport);
        };
        this.connection = factory.createConnectionManager(this.key, {
            getStrategy: getStrategy,
            timeline: this.timeline,
            activityTimeout: this.config.activityTimeout,
            pongTimeout: this.config.pongTimeout,
            unavailableTimeout: this.config.unavailableTimeout,
            useTLS: Boolean(this.config.useTLS)
        });
        this.connection.bind('connected', () => {
            this.subscribeAll();
            if (this.timelineSender) {
                this.timelineSender.send(this.connection.isUsingTLS());
            }
        });
        this.connection.bind('message', event => {
            var eventName = event.event;
            var internal = eventName.indexOf('pusher_internal:') === 0;
            if (event.channel) {
                var channel = this.channel(event.channel);
                if (channel) {
                    channel.handleEvent(event);
                }
            }
            if (!internal) {
                this.global_emitter.emit(event.event, event.data);
            }
        });
        this.connection.bind('connecting', () => {
            this.channels.disconnect();
        });
        this.connection.bind('disconnected', () => {
            this.channels.disconnect();
        });
        this.connection.bind('error', err => {
            logger.warn(err);
        });
        pusher_Pusher.instances.push(this);
        this.timeline.info({ instances: pusher_Pusher.instances.length });
        this.user = new user_UserFacade(this);
        if (pusher_Pusher.isReady) {
            this.connect();
        }
    }
    channel(name) {
        return this.channels.find(name);
    }
    allChannels() {
        return this.channels.all();
    }
    connect() {
        this.connection.connect();
        if (this.timelineSender) {
            if (!this.timelineSenderTimer) {
                var usingTLS = this.connection.isUsingTLS();
                var timelineSender = this.timelineSender;
                this.timelineSenderTimer = new timers_PeriodicTimer(60000, function () {
                    timelineSender.send(usingTLS);
                });
            }
        }
    }
    disconnect() {
        this.connection.disconnect();
        if (this.timelineSenderTimer) {
            this.timelineSenderTimer.ensureAborted();
            this.timelineSenderTimer = null;
        }
    }
    bind(event_name, callback, context) {
        this.global_emitter.bind(event_name, callback, context);
        return this;
    }
    unbind(event_name, callback, context) {
        this.global_emitter.unbind(event_name, callback, context);
        return this;
    }
    bind_global(callback) {
        this.global_emitter.bind_global(callback);
        return this;
    }
    unbind_global(callback) {
        this.global_emitter.unbind_global(callback);
        return this;
    }
    unbind_all(callback) {
        this.global_emitter.unbind_all();
        return this;
    }
    subscribeAll() {
        var channelName;
        for (channelName in this.channels.channels) {
            if (this.channels.channels.hasOwnProperty(channelName)) {
                this.subscribe(channelName);
            }
        }
    }
    subscribe(channel_name) {
        var channel = this.channels.add(channel_name, this);
        if (channel.subscriptionPending && channel.subscriptionCancelled) {
            channel.reinstateSubscription();
        }
        else if (!channel.subscriptionPending &&
            this.connection.state === 'connected') {
            channel.subscribe();
        }
        return channel;
    }
    unsubscribe(channel_name) {
        var channel = this.channels.find(channel_name);
        if (channel && channel.subscriptionPending) {
            channel.cancelSubscription();
        }
        else {
            channel = this.channels.remove(channel_name);
            if (channel && channel.subscribed) {
                channel.unsubscribe();
            }
        }
    }
    send_event(event_name, data, channel) {
        return this.connection.send_event(event_name, data, channel);
    }
    shouldUseTLS() {
        return this.config.useTLS;
    }
    signin() {
        this.user.signin();
    }
}
pusher_Pusher.instances = [];
pusher_Pusher.isReady = false;
pusher_Pusher.logToConsole = false;
pusher_Pusher.Runtime = runtime;
pusher_Pusher.ScriptReceivers = runtime.ScriptReceivers;
pusher_Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
pusher_Pusher.auth_callbacks = runtime.auth_callbacks;
/* harmony default export */ var core_pusher = __nested_webpack_exports__["default"] = (pusher_Pusher);
function checkAppKey(key) {
    if (key === null || key === undefined) {
        throw 'You must pass your app key when you instantiate Pusher.';
    }
}
runtime.setup(pusher_Pusher);


/***/ })
/******/ ]);
});
//# sourceMappingURL=pusher.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/tracking-script": 0,
/******/ 			"assets/css/mngmnt/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/mngmnt/app"], () => (__webpack_require__("./resources/assets/js/tracking-script.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/mngmnt/app"], () => (__webpack_require__("./resources/assets/scss/mngmnt/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy90cmFja2luZy1zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBRUQ7QUFDL0JFLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxrREFBTTtBQUV0QkMsTUFBTSxDQUFDRixJQUFJLEdBQUcsSUFBSUEsb0RBQUksQ0FBQztFQUNuQkcsV0FBVyxFQUFFLFFBQVE7RUFDckJDLEdBQUcsRUFBRUMsZ0JBQWdCLENBQUNELEdBQUc7RUFDekJFLE9BQU8sR0FBQUMscUJBQUEsR0FBRUYsZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQ0YsT0FBTyxjQUFBQyxxQkFBQSxjQUFBQSxxQkFBQSxHQUFJLEtBQUs7RUFDbERFLE1BQU0sRUFBRUMsZ0JBQWdCLEdBQUdBLGdCQUFnQixTQUFBQyxNQUFBLENBQVNOLGdCQUFnQixDQUFDRyxPQUFPLENBQUNGLE9BQU8sZ0JBQWE7RUFDakdNLE1BQU0sR0FBQUMsc0JBQUEsR0FBRVIsZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQ00sSUFBSSxjQUFBRCxzQkFBQSxjQUFBQSxzQkFBQSxHQUFJLEVBQUU7RUFDM0NFLE9BQU8sR0FBQUMsc0JBQUEsR0FBRVgsZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQ00sSUFBSSxjQUFBRSxzQkFBQSxjQUFBQSxzQkFBQSxHQUFJLEdBQUc7RUFDN0NDLFFBQVEsRUFBRSxFQUFBQyxzQkFBQSxHQUFDYixnQkFBZ0IsQ0FBQ0csT0FBTyxDQUFDVyxNQUFNLGNBQUFELHNCQUFBLGNBQUFBLHNCQUFBLEdBQUksT0FBTyxNQUFNLE9BQU87RUFDbEVFLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUs7QUFDbkMsQ0FBQyxDQUFDO0FBRUZsQixNQUFNLENBQUNGLElBQUksQ0FBQ3FCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNoQ0MsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUNuQkMsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUNyQkMsS0FBSyxDQUFDLFVBQUNBLEtBQUssRUFBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLGtDQUFrQztBQUNsQztBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVtQzs7Ozs7Ozs7Ozs7OztBQ3ZvRHBDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLdUI7QUFDN0IsQ0FBQztBQUNELHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsOEJBQW1CO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QixlQUFlLDhCQUFtQjtBQUNsQyxtREFBbUQsK0JBQStCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQSxpRUFBaUUsaUJBQWlCO0FBQ2xGO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QixnQ0FBZ0MsOEJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQW1CO0FBQzlCLGtEQUFrRCxnQ0FBZ0M7QUFDbEYsMEVBQTBFLDhCQUFtQiw0QkFBNEIsb0JBQW9CO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQSxvQ0FBb0MsNEJBQTRCO0FBQ2hFLDBDQUEwQztBQUMxQyxXQUFXLDhCQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CLGtDQUFrQztBQUMvRDtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUFtQixDQUFDLDhCQUFtQjtBQUN4RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEO0FBQ0EsaUJBQWlCLGdDQUFtQjs7O0FBR3BDLE9BQU87QUFDUDtBQUNBLHdCQUF3QiwwQkFBbUIsRUFBRSxnQ0FBbUI7O0FBRWhFO0FBQ0E7QUFDQSxnQ0FBbUIsR0FBRywwQkFBbUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsRUFBRSxJQUFJO0FBQy9CO0FBQ0EsZ0RBQWdELGdCQUFnQjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsNEJBQTRCLDJEQUEyRCxpQkFBaUI7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQXFHLGtEQUFrRDtBQUN2SjtBQUNBO0FBQ0EsOEZBQThGLDRCQUE0QjtBQUMxSCx3Q0FBd0MsWUFBWSxPQUFPLHFCQUFxQixJQUFJLE9BQU87QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDRCQUE0QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMkJBQTJCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQ0FBc0M7QUFDbkUsd0RBQXdELHlCQUF5QjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJDQUEyQztBQUMxRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxPQUFPO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBLGlCQUFpQixxQ0FBcUMsdUJBQXVCLElBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE1BQWdDO0FBQ2pELDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsVUFBVTtBQUNyRiw4REFBOEQsT0FBTztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxnQ0FBbUI7O0FBRTlCO0FBQ0EsYUFBYSxnQ0FBbUI7O0FBRWhDOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLFVBQVU7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLG1DQUFtQyxTQUFTLGtCQUFrQjtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxnQ0FBZ0MsU0FBUyxhQUFhO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLFNBQVM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlDQUFpQyxvQkFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsMENBQTBDLGlDQUFpQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQ0FBMEM7QUFDNUU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsaURBQWlEO0FBQ2pELGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwyQkFBMkI7QUFDM0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw2Q0FBNkM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrQkFBK0I7QUFDaEUsd0NBQXdDLDRDQUE0QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU8sSUFBSSxPQUFPO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixrQ0FBa0M7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDJDQUEyQztBQUNqSDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsYUFBYTtBQUMxRSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZCQUE2QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7QUFDdkI7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFdBQVcsdUJBQXVCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxRQUFRLDBDQUEwQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUEyQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFVBQVU7QUFDM0UsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsSUFBSTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVEQUF1RCxtQkFBbUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsa0JBQWtCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE9BQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkJBQTJCO0FBQzlELG1DQUFtQztBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkJBQTZCLDJDQUEyQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQW1CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7VUMxK0lBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdHJhY2tpbmctc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXJhdmVsLWVjaG8vZGlzdC9lY2hvLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Nzcy9tbmdtbnQvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcclxuXHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxud2luZG93LlB1c2hlciA9IFB1c2hlcjtcclxuXHJcbndpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xyXG4gICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxyXG4gICAga2V5OiBicm9hZGNhc3RpbmdEYXRhLmtleSxcclxuICAgIGNsdXN0ZXI6IGJyb2FkY2FzdGluZ0RhdGEub3B0aW9ucy5jbHVzdGVyID8/ICdtdDEnLFxyXG4gICAgd3NIb3N0OiBicm9hZGNhc3RpbmdIb3N0ID8gYnJvYWRjYXN0aW5nSG9zdCA6IGB3cy0ke2Jyb2FkY2FzdGluZ0RhdGEub3B0aW9ucy5jbHVzdGVyfS5wdXNoZXIuY29tYCxcclxuICAgIHdzUG9ydDogYnJvYWRjYXN0aW5nRGF0YS5vcHRpb25zLnBvcnQgPz8gODAsXHJcbiAgICB3c3NQb3J0OiBicm9hZGNhc3RpbmdEYXRhLm9wdGlvbnMucG9ydCA/PyA0NDMsXHJcbiAgICBmb3JjZVRMUzogKGJyb2FkY2FzdGluZ0RhdGEub3B0aW9ucy5zY2hlbWUgPz8gJ2h0dHBzJykgPT09ICdodHRwcycsXHJcbiAgICBlbmFibGVkVHJhbnNwb3J0czogWyd3cycsICd3c3MnXSxcclxufSk7XHJcblxyXG53aW5kb3cuRWNoby5qb2luKCdhbC50cmFja2luZy51c2VycycpXHJcbiAgICAuaGVyZSgodXNlcnMpID0+IHt9KVxyXG4gICAgLmpvaW5pbmcoKHVzZXIpID0+IHt9KVxyXG4gICAgLmVycm9yKChlcnJvcikgPT4ge30pOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIGJhc2ljIGNoYW5uZWwuXHJcbiAqL1xudmFyIENoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaGFubmVsLCBbe1xuICAgIGtleTogXCJsaXN0ZW5Gb3JXaGlzcGVyXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGEgd2hpc3BlciBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlbkZvcldoaXNwZXIoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5jbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibm90aWZpY2F0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuSWxsdW1pbmF0ZVxcXFxOb3RpZmljYXRpb25zXFxcXEV2ZW50c1xcXFxCcm9hZGNhc3ROb3RpZmljYXRpb25DcmVhdGVkJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhIHdoaXNwZXIgZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdGb3JXaGlzcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdGb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcExpc3RlbmluZygnLmNsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbm5lbDtcbn0oKTtcblxuLyoqXHJcbiAqIEV2ZW50IG5hbWUgZm9ybWF0dGVyXHJcbiAqL1xudmFyIEV2ZW50Rm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGNsYXNzIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudEZvcm1hdHRlcihuYW1lc3BhY2UpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRGb3JtYXR0ZXIpO1xuXG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7IC8vXG4gIH1cbiAgLyoqXHJcbiAgICogRm9ybWF0IHRoZSBnaXZlbiBldmVudCBuYW1lLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50Rm9ybWF0dGVyLCBbe1xuICAgIGtleTogXCJmb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0KGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY2hhckF0KDApID09PSAnLicgfHwgZXZlbnQuY2hhckF0KDApID09PSAnXFxcXCcpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnN1YnN0cigxKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgZXZlbnQgPSB0aGlzLm5hbWVzcGFjZSArICcuJyArIGV2ZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnQucmVwbGFjZSgvXFwuL2csICdcXFxcJyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBldmVudCBuYW1lc3BhY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldE5hbWVzcGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROYW1lc3BhY2UodmFsdWUpIHtcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50Rm9ybWF0dGVyO1xufSgpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgX2luaGVyaXRzKFB1c2hlckNoYW5uZWwsIF9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlckNoYW5uZWwpO1xuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gUHVzaGVyQ2hhbm5lbChwdXNoZXIsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG5cbiAgICBfdGhpcy5zdWJzY3JpYmUoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gYSBQdXNoZXIgY2hhbm5lbC5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIGEgUHVzaGVyIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbih0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYWxsIGV2ZW50cyBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuVG9BbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuVG9BbGwoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kX2dsb2JhbChmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKGV2ZW50LnN0YXJ0c1dpdGgoJ3B1c2hlcjonKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBfdGhpczIub3B0aW9ucy5uYW1lc3BhY2UucmVwbGFjZSgvXFwuL2csICdcXFxcJyk7XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZEV2ZW50ID0gZXZlbnQuc3RhcnRzV2l0aChuYW1lc3BhY2UpID8gZXZlbnQuc3Vic3RyaW5nKG5hbWVzcGFjZS5sZW5ndGggKyAxKSA6ICcuJyArIGV2ZW50O1xuICAgICAgICBjYWxsYmFjayhmb3JtYXR0ZWRFdmVudCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZCh0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZCh0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYWxsIGV2ZW50cyBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1RvQWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb0FsbChjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kX2dsb2JhbCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZWQoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fZXJyb3InLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEJpbmQgYSBjaGFubmVsIHRvIGFuIGV2ZW50LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJDaGFubmVsO1xufShDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBwcml2YXRlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUHVzaGVyUHJpdmF0ZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlclByaXZhdGVDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcIndoaXNwZXJcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAqIFNlbmQgYSB3aGlzcGVyIGV2ZW50IHRvIG90aGVyIGNsaWVudHMgaW4gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKFwiY2xpZW50LVwiLmNvbmNhdChldmVudE5hbWUpLCBkYXRhKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBQdXNoZXIgcHJpdmF0ZSBjaGFubmVsLlxyXG4gKi9cblxudmFyIFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGEgd2hpc3BlciBldmVudCB0byBvdGhlciBjbGllbnRzIGluIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcihcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSwgZGF0YSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByZXNlbmNlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyUHJlc2VuY2VDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJQcmVzZW5jZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcImhlcmVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGEubWVtYmVyc1trXTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIHNvbWVvbmUgam9pbmluZyB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiam9pbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNlbmQgYSB3aGlzcGVyIGV2ZW50IHRvIG90aGVyIGNsaWVudHMgaW4gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndoaXNwZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcihcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSwgZGF0YSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIHNvbWVvbmUgbGVhdmluZyB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX3JlbW92ZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgIGNhbGxiYWNrKG1lbWJlci5pbmZvKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gY2hhbm5lbC5cclxuICovXG5cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGNsYXNzIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIC8qKlxyXG4gICAgICogVGhlIGV2ZW50IGNhbGxiYWNrcyBhcHBsaWVkIHRvIHRoZSBzb2NrZXQuXHJcbiAgICAgKi9cblxuICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgIC8qKlxyXG4gICAgICogVXNlciBzdXBwbGllZCBjYWxsYmFja3MgZm9yIGV2ZW50cyBvbiB0aGlzIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICAgIF90aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG5cbiAgICBfdGhpcy5zdWJzY3JpYmUoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gYSBTb2NrZXQuaW8gY2hhbm5lbC5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXRJb0NoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCdzdWJzY3JpYmUnLCB7XG4gICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlIGZyb20gY2hhbm5lbCBhbmQgdWJpbmQgZXZlbnQgY2FsbGJhY2tzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCd1bnN1YnNjcmliZScsIHtcbiAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudW5iaW5kRXZlbnQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZWQoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIGNhbGxiYWNrKHNvY2tldCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCB0byBhbiBldmVudCBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0gfHwgW107XG5cbiAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IGZ1bmN0aW9uIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09PSBjaGFubmVsICYmIF90aGlzMi5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBfdGhpczIubGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgICByZXR1cm4gY2IoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIHRoaXMuZXZlbnRzW2V2ZW50XSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuYmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCBmcm9tIGFsbCBzdG9yZWQgZXZlbnQgY2FsbGJhY2tzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMudW5iaW5kRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVW5iaW5kIHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBldmVudC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0gfHwgW107XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0uZmlsdGVyKGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgIHJldHVybiBjYiAhPT0gY2FsbGJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNhbGxiYWNrIHx8IHRoaXMubGlzdGVuZXJzW2V2ZW50XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCB0aGlzLmV2ZW50c1tldmVudF0pO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIHByaXZhdGUgY2hhbm5lbC5cclxuICovXG5cbnZhciBTb2NrZXRJb1ByaXZhdGVDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBfU29ja2V0SW9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcIndoaXNwZXJcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAqIFNlbmQgYSB3aGlzcGVyIGV2ZW50IHRvIG90aGVyIGNsaWVudHMgaW4gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnY2xpZW50IGV2ZW50Jywge1xuICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgIGV2ZW50OiBcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbDtcbn0oU29ja2V0SW9DaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFNvY2tldC5pbyBwcmVzZW5jZSBjaGFubmVsLlxyXG4gKi9cblxudmFyIFNvY2tldElvUHJlc2VuY2VDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU29ja2V0SW9Qcml2YXRlQ2hhbm4pIHtcbiAgX2luaGVyaXRzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBfU29ja2V0SW9Qcml2YXRlQ2hhbm4pO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcImhlcmVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwcmVzZW5jZTpzdWJzY3JpYmVkJywgZnVuY3Rpb24gKG1lbWJlcnMpIHtcbiAgICAgICAgY2FsbGJhY2sobWVtYmVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS51c2VyX2luZm87XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImpvaW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHJlc2VuY2U6am9pbmluZycsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lbWJlci51c2VyX2luZm8pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGEgd2hpc3BlciBldmVudCB0byBvdGhlciBjbGllbnRzIGluIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgZXZlbnQ6IFwiY2xpZW50LVwiLmNvbmNhdChldmVudE5hbWUpLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmxlYXZpbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgY2hhbm5lbC5cclxuICovXG5cbnZhciBOdWxsQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgX2luaGVyaXRzKE51bGxDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbENoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgdG8gYSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKCkgey8vXG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgZnJvbSBhIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkgey8vXG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYWxsIGV2ZW50cyBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuVG9BbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuVG9BbGwoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBzdWNjZWVkcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVkKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEJpbmQgYSBjaGFubmVsIHRvIGFuIGV2ZW50LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIHByaXZhdGUgY2hhbm5lbC5cclxuICovXG5cbnZhciBOdWxsUHJpdmF0ZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9OdWxsQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoTnVsbFByaXZhdGVDaGFubmVsLCBfTnVsbENoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTnVsbFByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBOdWxsUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVsbFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGEgd2hpc3BlciBldmVudCB0byBvdGhlciBjbGllbnRzIGluIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsUHJpdmF0ZUNoYW5uZWw7XG59KE51bGxDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJlc2VuY2UgY2hhbm5lbC5cclxuICovXG5cbnZhciBOdWxsUHJlc2VuY2VDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTnVsbENoYW5uZWwpIHtcbiAgX2luaGVyaXRzKE51bGxQcmVzZW5jZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsUHJlc2VuY2VDaGFubmVsKTtcblxuICBmdW5jdGlvbiBOdWxsUHJlc2VuY2VDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJoZXJlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImpvaW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIHdoaXNwZXIgZXZlbnQgdG8gb3RoZXIgY2xpZW50cyBpbiB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2hpc3BlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE51bGxQcmVzZW5jZUNoYW5uZWw7XG59KE51bGxDaGFubmVsKTtcblxudmFyIENvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gQ29ubmVjdG9yKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBjb25uZWN0b3Igb3B0aW9ucy5cclxuICAgICAqL1xuICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYXV0aDoge1xuICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgfSxcbiAgICAgIGF1dGhFbmRwb2ludDogJy9icm9hZGNhc3RpbmcvYXV0aCcsXG4gICAgICB1c2VyQXV0aGVudGljYXRpb246IHtcbiAgICAgICAgZW5kcG9pbnQ6ICcvYnJvYWRjYXN0aW5nL3VzZXItYXV0aCcsXG4gICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICB9LFxuICAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuICAgICAgY3NyZlRva2VuOiBudWxsLFxuICAgICAgYmVhcmVyVG9rZW46IG51bGwsXG4gICAgICBob3N0OiBudWxsLFxuICAgICAga2V5OiBudWxsLFxuICAgICAgbmFtZXNwYWNlOiAnQXBwLkV2ZW50cydcbiAgICB9O1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuICAvKipcclxuICAgKiBNZXJnZSB0aGUgY3VzdG9tIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdHMuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJzZXRPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdmFyIHRva2VuID0gdGhpcy5jc3JmVG9rZW4oKTtcblxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW47XG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VyQXV0aGVudGljYXRpb24uaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0b2tlbjtcbiAgICAgIH1cblxuICAgICAgdG9rZW4gPSB0aGlzLm9wdGlvbnMuYmVhcmVyVG9rZW47XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJBdXRoZW50aWNhdGlvbi5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgQ1NSRiB0b2tlbiBmcm9tIHRoZSBwYWdlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjc3JmVG9rZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3NyZlRva2VuKCkge1xuICAgICAgdmFyIHNlbGVjdG9yO1xuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydMYXJhdmVsJ10gJiYgd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jc3JmVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jc3JmVG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgJiYgKHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpKSkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25uZWN0b3I7XG59KCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNyZWF0ZXMgYSBjb25uZWN0b3IgdG8gUHVzaGVyLlxyXG4gKi9cblxudmFyIFB1c2hlckNvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICBfaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlckNvbm5lY3Rvcik7XG5cbiAgZnVuY3Rpb24gUHVzaGVyQ29ubmVjdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDb25uZWN0b3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvKipcclxuICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSBmcmVzaCBQdXNoZXIgY29ubmVjdGlvbi5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wdXNoZXIgPSB0aGlzLm9wdGlvbnMuY2xpZW50O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuUHVzaGVyKSB7XG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IHRoaXMub3B0aW9ucy5QdXNoZXIodGhpcy5vcHRpb25zLmtleSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNpZ24gaW4gdGhlIHVzZXIgdmlhIFB1c2hlciB1c2VyIGF1dGhlbnRpY2F0aW9uIChodHRwczovL3B1c2hlci5jb20vZG9jcy9jaGFubmVscy91c2luZ19jaGFubmVscy91c2VyLWF1dGhlbnRpY2F0aW9uLykuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNpZ25pblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaWduaW4oKSB7XG4gICAgICB0aGlzLnB1c2hlci5zaWduaW4oKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgUHVzaGVyQ2hhbm5lbCh0aGlzLnB1c2hlciwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByaXZhdGVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgUHVzaGVyUHJpdmF0ZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcml2YXRlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBlbmNyeXB0ZWQgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtZW5jcnlwdGVkLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZV0gPSBuZXcgUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtZW5jcnlwdGVkLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByZXNlbmNlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUobmFtZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGFubmVscyA9IFtuYW1lLCAncHJpdmF0ZS0nICsgbmFtZSwgJ3ByaXZhdGUtZW5jcnlwdGVkLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgX3RoaXMyLmxlYXZlQ2hhbm5lbChuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzb2NrZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IFB1c2hlciBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlckNvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIGNvbm5uZWN0b3IgdG8gYSBTb2NrZXQuaW8gc2VydmVyLlxyXG4gKi9cblxudmFyIFNvY2tldElvQ29ubmVjdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb0Nvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgZnVuY3Rpb24gU29ja2V0SW9Db25uZWN0b3IoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cclxuICAgICAqL1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZnJlc2ggU29ja2V0LmlvIGNvbm5lY3Rpb24uXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU29ja2V0SW9Db25uZWN0b3IsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhfdGhpczIuY2hhbm5lbHMpLmZvckVhY2goZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICAgICAgICBjaGFubmVsLnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBzb2NrZXQuaW8gbW9kdWxlIGZyb20gZ2xvYmFsIHNjb3BlIG9yIG9wdGlvbnMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFNvY2tldElPXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvY2tldElPKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY2xpZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsaWVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGlvO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvY2tldC5pbyBjbGllbnQgbm90IGZvdW5kLiBTaG91bGQgYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIG9yIHBhc3NlZCB2aWEgb3B0aW9ucy5jbGllbnQnKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgU29ja2V0SW9DaGFubmVsKHRoaXMuc29ja2V0LCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSA9IG5ldyBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKHRoaXMuc29ja2V0LCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJlc2VuY2VDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIF90aGlzMy5sZWF2ZUNoYW5uZWwobmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAodGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb2NrZXQuaWQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCBTb2NrZXRpbyBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgbnVsbCBjb25uZWN0b3IuXHJcbiAqL1xuXG52YXIgTnVsbENvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICBfaW5oZXJpdHMoTnVsbENvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsQ29ubmVjdG9yKTtcblxuICBmdW5jdGlvbiBOdWxsQ29ubmVjdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cclxuICAgICAqL1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZnJlc2ggY29ubmVjdGlvbi5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7Ly9cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBuZXcgTnVsbENoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByaXZhdGVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgTnVsbFByaXZhdGVDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBlbmNyeXB0ZWQgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcml2YXRlQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJlc2VuY2VDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcmVzZW5jZUNoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHsvL1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHsvL1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gJ2Zha2Utc29ja2V0LWlkJztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7Ly9cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVsbENvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdGhlIHByaW1hcnkgQVBJIGZvciBpbnRlcmFjdGluZyB3aXRoIGJyb2FkY2FzdGluZy5cclxuICovXG5cbnZhciBFY2hvID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGNsYXNzIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBFY2hvKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWNobyk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMud2l0aG91dEludGVyY2VwdG9ycykge1xuICAgICAgdGhpcy5yZWdpc3RlckludGVyY2VwdG9ycygpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRWNobywgW3tcbiAgICBrZXk6IFwiY2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKF9jaGFubmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChfY2hhbm5lbCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3B1c2hlcicpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnc29ja2V0LmlvJykge1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBTb2NrZXRJb0Nvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ251bGwnKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IE51bGxDb25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IHRoaXMub3B0aW9ucy5icm9hZGNhc3Rlcih0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgZnJvbSB0aGUgRWNobyBzZXJ2ZXIuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImpvaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gam9pbihjaGFubmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUoY2hhbm5lbCkge1xuICAgICAgdGhpcy5jb25uZWN0b3IubGVhdmUoY2hhbm5lbCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgdGhpcy5jb25uZWN0b3IubGVhdmVDaGFubmVsKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIGFsbCBjaGFubmVscy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVBbGxDaGFubmVsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUFsbENoYW5uZWxzKCkge1xuICAgICAgZm9yICh2YXIgY2hhbm5lbCBpbiB0aGlzLmNvbm5lY3Rvci5jaGFubmVscykge1xuICAgICAgICB0aGlzLmxlYXZlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5saXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJpdmF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJpdmF0ZShjaGFubmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBlbmNyeXB0ZWQgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbmNyeXB0ZWRQcml2YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuY3J5cHRlZFByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmVuY3J5cHRlZFByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgU29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3Iuc29ja2V0SWQoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciAzcmQgcGFydHkgcmVxdWVzdCBpbnRlcmNlcHRpb3JzLiBUaGVzZSBhcmUgdXNlZCB0byBhdXRvbWF0aWNhbGx5XHJcbiAgICAgKiBzZW5kIGEgY29ubmVjdGlvbnMgc29ja2V0IGlkIHRvIGEgTGFyYXZlbCBhcHAgd2l0aCBhIFgtU29ja2V0LUlkIGhlYWRlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJJbnRlcmNlcHRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcnMoKSB7XG4gICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCh0eXBlb2YgVHVyYm8gPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihUdXJibykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVHVyYm9SZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIFZ1ZSBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFZ1ZS5odHRwLmludGVyY2VwdG9ycy5wdXNoKGZ1bmN0aW9uIChyZXF1ZXN0LCBuZXh0KSB7XG4gICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldCgnWC1Tb2NrZXQtSUQnLCBfdGhpcy5zb2NrZXRJZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFuIEF4aW9zIEhUVFAgaW50ZXJjZXB0b3IgdG8gYWRkIHRoZSBYLVNvY2tldC1JRCBoZWFkZXIuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBpZiAoX3RoaXMyLnNvY2tldElkKCkpIHtcbiAgICAgICAgICBjb25maWcuaGVhZGVyc1snWC1Tb2NrZXQtSWQnXSA9IF90aGlzMi5zb2NrZXRJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGpRdWVyeSBBamF4UHJlZmlsdGVyIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlcmpRdWVyeUFqYXhTZXR1cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIGpRdWVyeS5hamF4ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGpRdWVyeS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uIChvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIHhocikge1xuICAgICAgICAgIGlmIChfdGhpczMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtU29ja2V0LUlkJywgX3RoaXMzLnNvY2tldElkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgdGhlIFR1cmJvIFJlcXVlc3QgaW50ZXJjZXB0b3IgdG8gYWRkIHRoZSBYLVNvY2tldC1JRCBoZWFkZXIuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlZ2lzdGVyVHVyYm9SZXF1ZXN0SW50ZXJjZXB0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUdXJib1JlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpiZWZvcmUtZmV0Y2gtcmVxdWVzdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5kZXRhaWwuZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczQuc29ja2V0SWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFY2hvO1xufSgpO1xuXG5leHBvcnQgeyBDaGFubmVsLCBFY2hvIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIVxuICogUHVzaGVyIEphdmFTY3JpcHQgTGlicmFyeSB2OC4zLjBcbiAqIGh0dHBzOi8vcHVzaGVyLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgMjAyMCwgUHVzaGVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2VuY2UuXG4gKi9cblxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlB1c2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIGJhc2U2NCBpbXBsZW1lbnRzIEJhc2U2NCBlbmNvZGluZyBhbmQgZGVjb2RpbmcuXG4gKi9cbi8vIEludmFsaWQgY2hhcmFjdGVyIHVzZWQgaW4gZGVjb2RpbmcgdG8gaW5kaWNhdGVcbi8vIHRoYXQgdGhlIGNoYXJhY3RlciB0byBkZWNvZGUgaXMgb3V0IG9mIHJhbmdlIG9mXG4vLyBhbHBoYWJldCBhbmQgY2Fubm90IGJlIGRlY29kZWQuXG52YXIgSU5WQUxJRF9CWVRFID0gMjU2O1xuLyoqXG4gKiBJbXBsZW1lbnRzIHN0YW5kYXJkIEJhc2U2NCBlbmNvZGluZy5cbiAqXG4gKiBPcGVyYXRlcyBpbiBjb25zdGFudCB0aW1lLlxuICovXG52YXIgQ29kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyhkY2hlc3QpOiBtZXRob2RzIHRvIGVuY29kZSBjaHVuay1ieS1jaHVuay5cbiAgICBmdW5jdGlvbiBDb2RlcihfcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICBpZiAoX3BhZGRpbmdDaGFyYWN0ZXIgPT09IHZvaWQgMCkgeyBfcGFkZGluZ0NoYXJhY3RlciA9IFwiPVwiOyB9XG4gICAgICAgIHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgPSBfcGFkZGluZ0NoYXJhY3RlcjtcbiAgICB9XG4gICAgQ29kZXIucHJvdG90eXBlLmVuY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIChsZW5ndGggKiA4ICsgNSkgLyA2IHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGxlbmd0aCArIDIpIC8gMyAqIDQgfCAwO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBvdXQgPSBcIlwiO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgZGF0YS5sZW5ndGggLSAyOyBpICs9IDMpIHtcbiAgICAgICAgICAgIHZhciBjID0gKGRhdGFbaV0gPDwgMTYpIHwgKGRhdGFbaSArIDFdIDw8IDgpIHwgKGRhdGFbaSArIDJdKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAzICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMiAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDEgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAwICogNikgJiA2Myk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlZnQgPSBkYXRhLmxlbmd0aCAtIGk7XG4gICAgICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgICAgICAgdmFyIGMgPSAoZGF0YVtpXSA8PCAxNikgfCAobGVmdCA9PT0gMiA/IGRhdGFbaSArIDFdIDw8IDggOiAwKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAzICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMiAqIDYpICYgNjMpO1xuICAgICAgICAgICAgaWYgKGxlZnQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMSAqIDYpICYgNjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgfHwgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyIHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5tYXhEZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAobGVuZ3RoICogNiArIDcpIC8gOCB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlbmd0aCAvIDQgKiAzIHwgMDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5kZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4RGVjb2RlZExlbmd0aChzLmxlbmd0aCAtIHRoaXMuX2dldFBhZGRpbmdMZW5ndGgocykpO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWRkaW5nTGVuZ3RoID0gdGhpcy5fZ2V0UGFkZGluZ0xlbmd0aChzKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHMubGVuZ3RoIC0gcGFkZGluZ0xlbmd0aDtcbiAgICAgICAgdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KHRoaXMubWF4RGVjb2RlZExlbmd0aChsZW5ndGgpKTtcbiAgICAgICAgdmFyIG9wID0gMDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgaGF2ZUJhZCA9IDA7XG4gICAgICAgIHZhciB2MCA9IDAsIHYxID0gMCwgdjIgPSAwLCB2MyA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICB2MCA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAwKSk7XG4gICAgICAgICAgICB2MSA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAxKSk7XG4gICAgICAgICAgICB2MiA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICAgICAgICB2MyA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAzKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjAgPDwgMikgfCAodjEgPj4+IDQpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYxIDw8IDQpIHwgKHYyID4+PiAyKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MiA8PCA2KSB8IHYzO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MCAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjEgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYyICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MyAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHYwID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgdjEgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMSkpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYwIDw8IDIpIHwgKHYxID4+PiA0KTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjAgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYxICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgdjIgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMikpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYxIDw8IDQpIHwgKHYyID4+PiAyKTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjIgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAzKSB7XG4gICAgICAgICAgICB2MyA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAzKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjIgPDwgNikgfCB2MztcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjMgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhdmVCYWQgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhc2U2NENvZGVyOiBpbmNvcnJlY3QgY2hhcmFjdGVycyBmb3IgZGVjb2RpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIC8vIFN0YW5kYXJkIGVuY29kaW5nIGhhdmUgdGhlIGZvbGxvd2luZyBlbmNvZGVkL2RlY29kZWQgcmFuZ2VzLFxuICAgIC8vIHdoaWNoIHdlIG5lZWQgdG8gY29udmVydCBiZXR3ZWVuLlxuICAgIC8vXG4gICAgLy8gQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXogMDEyMzQ1Njc4OSAgKyAgIC9cbiAgICAvLyBJbmRleDogICAwIC0gMjUgICAgICAgICAgICAgICAgICAgIDI2IC0gNTEgICAgICAgICAgICAgIDUyIC0gNjEgICA2MiAgNjNcbiAgICAvLyBBU0NJSTogIDY1IC0gOTAgICAgICAgICAgICAgICAgICAgIDk3IC0gMTIyICAgICAgICAgICAgIDQ4IC0gNTcgICA0MyAgNDdcbiAgICAvL1xuICAgIC8vIEVuY29kZSA2IGJpdHMgaW4gYiBpbnRvIGEgbmV3IGNoYXJhY3Rlci5cbiAgICBDb2Rlci5wcm90b3R5cGUuX2VuY29kZUJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAvLyBFbmNvZGluZyB1c2VzIGNvbnN0YW50IHRpbWUgb3BlcmF0aW9ucyBhcyBmb2xsb3dzOlxuICAgICAgICAvL1xuICAgICAgICAvLyAxLiBEZWZpbmUgY29tcGFyaXNvbiBvZiBBIHdpdGggQiB1c2luZyAoQSAtIEIpID4+PiA4OlxuICAgICAgICAvLyAgICAgICAgICBpZiBBID4gQiwgdGhlbiByZXN1bHQgaXMgcG9zaXRpdmUgaW50ZWdlclxuICAgICAgICAvLyAgICAgICAgICBpZiBBIDw9IEIsIHRoZW4gcmVzdWx0IGlzIDBcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMi4gRGVmaW5lIHNlbGVjdGlvbiBvZiBDIG9yIDAgdXNpbmcgYml0d2lzZSBBTkQ6IFggJiBDOlxuICAgICAgICAvLyAgICAgICAgICBpZiBYID09IDAsIHRoZW4gcmVzdWx0IGlzIDBcbiAgICAgICAgLy8gICAgICAgICAgaWYgWCAhPSAwLCB0aGVuIHJlc3VsdCBpcyBDXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDMuIFN0YXJ0IHdpdGggdGhlIHNtYWxsZXN0IGNvbXBhcmlzb24gKGIgPj0gMCksIHdoaWNoIGlzIGFsd2F5c1xuICAgICAgICAvLyAgICB0cnVlLCBzbyBzZXQgdGhlIHJlc3VsdCB0byB0aGUgc3RhcnRpbmcgQVNDSUkgdmFsdWUgKDY1KS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gNC4gQ29udGludWUgY29tcGFyaW5nIGIgdG8gaGlnaGVyIEFTQ0lJIHZhbHVlcywgYW5kIHNlbGVjdGluZ1xuICAgICAgICAvLyAgICB6ZXJvIGlmIGNvbXBhcmlzb24gaXNuJ3QgdHJ1ZSwgb3RoZXJ3aXNlIHNlbGVjdGluZyBhIHZhbHVlXG4gICAgICAgIC8vICAgIHRvIGFkZCB0byByZXN1bHQsIHdoaWNoOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICBhKSB1bmRvZXMgdGhlIHByZXZpb3VzIGFkZGl0aW9uXG4gICAgICAgIC8vICAgICAgICAgIGIpIHByb3ZpZGVzIG5ldyB2YWx1ZSB0byBhZGRcbiAgICAgICAgLy9cbiAgICAgICAgdmFyIHJlc3VsdCA9IGI7XG4gICAgICAgIC8vIGIgPj0gMFxuICAgICAgICByZXN1bHQgKz0gNjU7XG4gICAgICAgIC8vIGIgPiAyNVxuICAgICAgICByZXN1bHQgKz0gKCgyNSAtIGIpID4+PiA4KSAmICgoMCAtIDY1KSAtIDI2ICsgOTcpO1xuICAgICAgICAvLyBiID4gNTFcbiAgICAgICAgcmVzdWx0ICs9ICgoNTEgLSBiKSA+Pj4gOCkgJiAoKDI2IC0gOTcpIC0gNTIgKyA0OCk7XG4gICAgICAgIC8vIGIgPiA2MVxuICAgICAgICByZXN1bHQgKz0gKCg2MSAtIGIpID4+PiA4KSAmICgoNTIgLSA0OCkgLSA2MiArIDQzKTtcbiAgICAgICAgLy8gYiA+IDYyXG4gICAgICAgIHJlc3VsdCArPSAoKDYyIC0gYikgPj4+IDgpICYgKCg2MiAtIDQzKSAtIDYzICsgNDcpO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShyZXN1bHQpO1xuICAgIH07XG4gICAgLy8gRGVjb2RlIGEgY2hhcmFjdGVyIGNvZGUgaW50byBhIGJ5dGUuXG4gICAgLy8gTXVzdCByZXR1cm4gMjU2IGlmIGNoYXJhY3RlciBpcyBvdXQgb2YgYWxwaGFiZXQgcmFuZ2UuXG4gICAgQ29kZXIucHJvdG90eXBlLl9kZWNvZGVDaGFyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gRGVjb2Rpbmcgd29ya3Mgc2ltaWxhciB0byBlbmNvZGluZzogdXNpbmcgdGhlIHNhbWUgY29tcGFyaXNvblxuICAgICAgICAvLyBmdW5jdGlvbiwgYnV0IG5vdyBpdCB3b3JrcyBvbiByYW5nZXM6IHJlc3VsdCBpcyBhbHdheXMgaW5jcmVtZW50ZWRcbiAgICAgICAgLy8gYnkgdmFsdWUsIGJ1dCB0aGlzIHZhbHVlIGJlY29tZXMgemVybyBpZiB0aGUgcmFuZ2UgaXMgbm90XG4gICAgICAgIC8vIHNhdGlzZmllZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRGVjb2Rpbmcgc3RhcnRzIHdpdGggaW52YWxpZCB2YWx1ZSwgMjU2LCB3aGljaCBpcyB0aGVuXG4gICAgICAgIC8vIHN1YnRyYWN0ZWQgd2hlbiB0aGUgcmFuZ2UgaXMgc2F0aXNmaWVkLiBJZiBub25lIG9mIHRoZSByYW5nZXNcbiAgICAgICAgLy8gYXBwbHksIHRoZSBmdW5jdGlvbiByZXR1cm5zIDI1Niwgd2hpY2ggaXMgdGhlbiBjaGVja2VkIGJ5XG4gICAgICAgIC8vIHRoZSBjYWxsZXIgdG8gdGhyb3cgZXJyb3IuXG4gICAgICAgIHZhciByZXN1bHQgPSBJTlZBTElEX0JZVEU7IC8vIHN0YXJ0IHdpdGggaW52YWxpZCBjaGFyYWN0ZXJcbiAgICAgICAgLy8gYyA9PSA0MyAoYyA+IDQyIGFuZCBjIDwgNDQpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0MiAtIGMpICYgKGMgLSA0NCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQzICsgNjIpO1xuICAgICAgICAvLyBjID09IDQ3IChjID4gNDYgYW5kIGMgPCA0OClcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ2IC0gYykgJiAoYyAtIDQ4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDcgKyA2Myk7XG4gICAgICAgIC8vIGMgPiA0NyBhbmQgYyA8IDU4XG4gICAgICAgIHJlc3VsdCArPSAoKCg0NyAtIGMpICYgKGMgLSA1OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ4ICsgNTIpO1xuICAgICAgICAvLyBjID4gNjQgYW5kIGMgPCA5MVxuICAgICAgICByZXN1bHQgKz0gKCgoNjQgLSBjKSAmIChjIC0gOTEpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA2NSArIDApO1xuICAgICAgICAvLyBjID4gOTYgYW5kIGMgPCAxMjNcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk2IC0gYykgJiAoYyAtIDEyMykpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk3ICsgMjYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLl9nZXRQYWRkaW5nTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHBhZGRpbmdMZW5ndGggPSAwO1xuICAgICAgICBpZiAodGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc1tpXSAhPT0gdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMubGVuZ3RoIDwgNCB8fCBwYWRkaW5nTGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhc2U2NENvZGVyOiBpbmNvcnJlY3QgcGFkZGluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFkZGluZ0xlbmd0aDtcbiAgICB9O1xuICAgIHJldHVybiBDb2Rlcjtcbn0oKSk7XG5leHBvcnRzLkNvZGVyID0gQ29kZXI7XG52YXIgc3RkQ29kZXIgPSBuZXcgQ29kZXIoKTtcbmZ1bmN0aW9uIGVuY29kZShkYXRhKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmVuY29kZShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuZnVuY3Rpb24gZGVjb2RlKHMpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZGVjb2RlKHMpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vKipcbiAqIEltcGxlbWVudHMgVVJMLXNhZmUgQmFzZTY0IGVuY29kaW5nLlxuICogKFNhbWUgYXMgQmFzZTY0LCBidXQgJysnIGlzIHJlcGxhY2VkIHdpdGggJy0nLCBhbmQgJy8nIHdpdGggJ18nKS5cbiAqXG4gKiBPcGVyYXRlcyBpbiBjb25zdGFudCB0aW1lLlxuICovXG52YXIgVVJMU2FmZUNvZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVUkxTYWZlQ29kZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVVJMU2FmZUNvZGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8vIFVSTC1zYWZlIGVuY29kaW5nIGhhdmUgdGhlIGZvbGxvd2luZyBlbmNvZGVkL2RlY29kZWQgcmFuZ2VzOlxuICAgIC8vXG4gICAgLy8gQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXogMDEyMzQ1Njc4OSAgLSAgIF9cbiAgICAvLyBJbmRleDogICAwIC0gMjUgICAgICAgICAgICAgICAgICAgIDI2IC0gNTEgICAgICAgICAgICAgIDUyIC0gNjEgICA2MiAgNjNcbiAgICAvLyBBU0NJSTogIDY1IC0gOTAgICAgICAgICAgICAgICAgICAgIDk3IC0gMTIyICAgICAgICAgICAgIDQ4IC0gNTcgICA0NSAgOTVcbiAgICAvL1xuICAgIFVSTFNhZmVDb2Rlci5wcm90b3R5cGUuX2VuY29kZUJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYjtcbiAgICAgICAgLy8gYiA+PSAwXG4gICAgICAgIHJlc3VsdCArPSA2NTtcbiAgICAgICAgLy8gYiA+IDI1XG4gICAgICAgIHJlc3VsdCArPSAoKDI1IC0gYikgPj4+IDgpICYgKCgwIC0gNjUpIC0gMjYgKyA5Nyk7XG4gICAgICAgIC8vIGIgPiA1MVxuICAgICAgICByZXN1bHQgKz0gKCg1MSAtIGIpID4+PiA4KSAmICgoMjYgLSA5NykgLSA1MiArIDQ4KTtcbiAgICAgICAgLy8gYiA+IDYxXG4gICAgICAgIHJlc3VsdCArPSAoKDYxIC0gYikgPj4+IDgpICYgKCg1MiAtIDQ4KSAtIDYyICsgNDUpO1xuICAgICAgICAvLyBiID4gNjJcbiAgICAgICAgcmVzdWx0ICs9ICgoNjIgLSBiKSA+Pj4gOCkgJiAoKDYyIC0gNDUpIC0gNjMgKyA5NSk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc3VsdCk7XG4gICAgfTtcbiAgICBVUkxTYWZlQ29kZXIucHJvdG90eXBlLl9kZWNvZGVDaGFyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IElOVkFMSURfQllURTtcbiAgICAgICAgLy8gYyA9PSA0NSAoYyA+IDQ0IGFuZCBjIDwgNDYpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0NCAtIGMpICYgKGMgLSA0NikpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ1ICsgNjIpO1xuICAgICAgICAvLyBjID09IDk1IChjID4gOTQgYW5kIGMgPCA5NilcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk0IC0gYykgJiAoYyAtIDk2KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTUgKyA2Myk7XG4gICAgICAgIC8vIGMgPiA0NyBhbmQgYyA8IDU4XG4gICAgICAgIHJlc3VsdCArPSAoKCg0NyAtIGMpICYgKGMgLSA1OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ4ICsgNTIpO1xuICAgICAgICAvLyBjID4gNjQgYW5kIGMgPCA5MVxuICAgICAgICByZXN1bHQgKz0gKCgoNjQgLSBjKSAmIChjIC0gOTEpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA2NSArIDApO1xuICAgICAgICAvLyBjID4gOTYgYW5kIGMgPCAxMjNcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk2IC0gYykgJiAoYyAtIDEyMykpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk3ICsgMjYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIFVSTFNhZmVDb2Rlcjtcbn0oQ29kZXIpKTtcbmV4cG9ydHMuVVJMU2FmZUNvZGVyID0gVVJMU2FmZUNvZGVyO1xudmFyIHVybFNhZmVDb2RlciA9IG5ldyBVUkxTYWZlQ29kZXIoKTtcbmZ1bmN0aW9uIGVuY29kZVVSTFNhZmUoZGF0YSkge1xuICAgIHJldHVybiB1cmxTYWZlQ29kZXIuZW5jb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGVVUkxTYWZlID0gZW5jb2RlVVJMU2FmZTtcbmZ1bmN0aW9uIGRlY29kZVVSTFNhZmUocykge1xuICAgIHJldHVybiB1cmxTYWZlQ29kZXIuZGVjb2RlKHMpO1xufVxuZXhwb3J0cy5kZWNvZGVVUkxTYWZlID0gZGVjb2RlVVJMU2FmZTtcbmV4cG9ydHMuZW5jb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZW5jb2RlZExlbmd0aChsZW5ndGgpO1xufTtcbmV4cG9ydHMubWF4RGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIubWF4RGVjb2RlZExlbmd0aChsZW5ndGgpO1xufTtcbmV4cG9ydHMuZGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmRlY29kZWRMZW5ndGgocyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIHV0ZjggaW1wbGVtZW50cyBVVEYtOCBlbmNvZGluZyBhbmQgZGVjb2RpbmcuXG4gKi9cbnZhciBJTlZBTElEX1VURjE2ID0gXCJ1dGY4OiBpbnZhbGlkIHN0cmluZ1wiO1xudmFyIElOVkFMSURfVVRGOCA9IFwidXRmODogaW52YWxpZCBzb3VyY2UgZW5jb2RpbmdcIjtcbi8qKlxuICogRW5jb2RlcyB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gVVRGLTggYnl0ZSBhcnJheS5cbiAqIFRocm93cyBpZiB0aGUgc291cmNlIHN0cmluZyBoYXMgaW52YWxpZCBVVEYtMTYgZW5jb2RpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzKSB7XG4gICAgLy8gQ2FsY3VsYXRlIHJlc3VsdCBsZW5ndGggYW5kIGFsbG9jYXRlIG91dHB1dCBhcnJheS5cbiAgICAvLyBlbmNvZGVkTGVuZ3RoKCkgYWxzbyB2YWxpZGF0ZXMgc3RyaW5nIGFuZCB0aHJvd3MgZXJyb3JzLFxuICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgcmVwZWF0IHZhbGlkYXRpb24gaGVyZS5cbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZExlbmd0aChzKSk7XG4gICAgdmFyIHBvcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4YzAgfCBjID4+IDY7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IGMgJiAweDNmO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGUwIHwgYyA+PiAxMjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gNikgJiAweDNmO1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkrKzsgLy8gZ2V0IG9uZSBtb3JlIGNoYXJhY3RlclxuICAgICAgICAgICAgYyA9IChjICYgMHgzZmYpIDw8IDEwO1xuICAgICAgICAgICAgYyB8PSBzLmNoYXJDb2RlQXQoaSkgJiAweDNmZjtcbiAgICAgICAgICAgIGMgKz0gMHgxMDAwMDtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGYwIHwgYyA+PiAxODtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gMTIpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gNikgJiAweDNmO1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyByZXF1aXJlZCB0byBlbmNvZGUgdGhlIGdpdmVuIHN0cmluZyBpbnRvIFVURi04LlxuICogVGhyb3dzIGlmIHRoZSBzb3VyY2Ugc3RyaW5nIGhhcyBpbnZhbGlkIFVURi0xNiBlbmNvZGluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlZExlbmd0aChzKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8PSAweGRmZmYpIHtcbiAgICAgICAgICAgIGlmIChpID49IHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjE2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKzsgLy8gXCJlYXRcIiBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgcmVzdWx0ICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEYxNik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZW5jb2RlZExlbmd0aCA9IGVuY29kZWRMZW5ndGg7XG4vKipcbiAqIERlY29kZXMgdGhlIGdpdmVuIGJ5dGUgYXJyYXkgZnJvbSBVVEYtOCBpbnRvIGEgc3RyaW5nLlxuICogVGhyb3dzIGlmIGVuY29kaW5nIGlzIGludmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShhcnIpIHtcbiAgICB2YXIgY2hhcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYiA9IGFycltpXTtcbiAgICAgICAgaWYgKGIgJiAweDgwKSB7XG4gICAgICAgICAgICB2YXIgbWluID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGIgPCAweGUwKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAxIG1vcmUgYnl0ZS5cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbjEgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4xICYgMHhjMCkgIT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSAoYiAmIDB4MWYpIDw8IDYgfCAobjEgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYiA8IDB4ZjApIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkIDIgbW9yZSBieXRlcy5cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG4xID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgdmFyIG4yID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgaWYgKChuMSAmIDB4YzApICE9PSAweDgwIHx8IChuMiAmIDB4YzApICE9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiID0gKGIgJiAweDBmKSA8PCAxMiB8IChuMSAmIDB4M2YpIDw8IDYgfCAobjIgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGIgPCAweGY4KSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAzIG1vcmUgYnl0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuMSA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMiA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMyA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIGlmICgobjEgJiAweGMwKSAhPT0gMHg4MCB8fCAobjIgJiAweGMwKSAhPT0gMHg4MCB8fCAobjMgJiAweGMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IChiICYgMHgwZikgPDwgMTggfCAobjEgJiAweDNmKSA8PCAxMiB8IChuMiAmIDB4M2YpIDw8IDYgfCAobjMgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDEwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYiA8IG1pbiB8fCAoYiA+PSAweGQ4MDAgJiYgYiA8PSAweGRmZmYpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYiA+PSAweDEwMDAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU3Vycm9nYXRlIHBhaXIuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiAweDEwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiAtPSAweDEwMDAwO1xuICAgICAgICAgICAgICAgIGNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgfCAoYiA+PiAxMCkpKTtcbiAgICAgICAgICAgICAgICBiID0gMHhkYzAwIHwgKGIgJiAweDNmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oXCJcIik7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gcmVxdWlyZWQgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyByZXF1aXJlKCdwdXNoZXInKS5kZWZhdWx0IGV0Yy5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKS5kZWZhdWx0O1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL3NjcmlwdF9yZWNlaXZlcl9mYWN0b3J5LnRzXG5jbGFzcyBTY3JpcHRSZWNlaXZlckZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCwgbmFtZSkge1xuICAgICAgICB0aGlzLmxhc3RJZCA9IDA7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBjcmVhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sYXN0SWQrKztcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubGFzdElkO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLnByZWZpeCArIG51bWJlcjtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWUgKyAnWycgKyBudW1iZXIgKyAnXSc7XG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzW251bWJlcl0gPSBjYWxsYmFja1dyYXBwZXI7XG4gICAgICAgIHJldHVybiB7IG51bWJlcjogbnVtYmVyLCBpZDogaWQsIG5hbWU6IG5hbWUsIGNhbGxiYWNrOiBjYWxsYmFja1dyYXBwZXIgfTtcbiAgICB9XG4gICAgcmVtb3ZlKHJlY2VpdmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW3JlY2VpdmVyLm51bWJlcl07XG4gICAgfVxufVxudmFyIFNjcmlwdFJlY2VpdmVycyA9IG5ldyBTY3JpcHRSZWNlaXZlckZhY3RvcnkoJ19wdXNoZXJfc2NyaXB0XycsICdQdXNoZXIuU2NyaXB0UmVjZWl2ZXJzJyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZGVmYXVsdHMudHNcbnZhciBEZWZhdWx0cyA9IHtcbiAgICBWRVJTSU9OOiBcIjguMy4wXCIsXG4gICAgUFJPVE9DT0w6IDcsXG4gICAgd3NQb3J0OiA4MCxcbiAgICB3c3NQb3J0OiA0NDMsXG4gICAgd3NQYXRoOiAnJyxcbiAgICBodHRwSG9zdDogJ3NvY2tqcy5wdXNoZXIuY29tJyxcbiAgICBodHRwUG9ydDogODAsXG4gICAgaHR0cHNQb3J0OiA0NDMsXG4gICAgaHR0cFBhdGg6ICcvcHVzaGVyJyxcbiAgICBzdGF0c19ob3N0OiAnc3RhdHMucHVzaGVyLmNvbScsXG4gICAgYXV0aEVuZHBvaW50OiAnL3B1c2hlci9hdXRoJyxcbiAgICBhdXRoVHJhbnNwb3J0OiAnYWpheCcsXG4gICAgYWN0aXZpdHlUaW1lb3V0OiAxMjAwMDAsXG4gICAgcG9uZ1RpbWVvdXQ6IDMwMDAwLFxuICAgIHVuYXZhaWxhYmxlVGltZW91dDogMTAwMDAsXG4gICAgdXNlckF1dGhlbnRpY2F0aW9uOiB7XG4gICAgICAgIGVuZHBvaW50OiAnL3B1c2hlci91c2VyLWF1dGgnLFxuICAgICAgICB0cmFuc3BvcnQ6ICdhamF4J1xuICAgIH0sXG4gICAgY2hhbm5lbEF1dGhvcml6YXRpb246IHtcbiAgICAgICAgZW5kcG9pbnQ6ICcvcHVzaGVyL2F1dGgnLFxuICAgICAgICB0cmFuc3BvcnQ6ICdhamF4J1xuICAgIH0sXG4gICAgY2RuX2h0dHA6IFwiaHR0cDovL2pzLnB1c2hlci5jb21cIixcbiAgICBjZG5faHR0cHM6IFwiaHR0cHM6Ly9qcy5wdXNoZXIuY29tXCIsXG4gICAgZGVwZW5kZW5jeV9zdWZmaXg6IFwiXCJcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkZWZhdWx0cyA9IChEZWZhdWx0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vZGVwZW5kZW5jeV9sb2FkZXIudHNcblxuXG5jbGFzcyBkZXBlbmRlbmN5X2xvYWRlcl9EZXBlbmRlbmN5TG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMucmVjZWl2ZXJzID0gb3B0aW9ucy5yZWNlaXZlcnMgfHwgU2NyaXB0UmVjZWl2ZXJzO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB7fTtcbiAgICB9XG4gICAgbG9hZChuYW1lLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLmxvYWRpbmdbbmFtZV0gJiYgc2VsZi5sb2FkaW5nW25hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYubG9hZGluZ1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYubG9hZGluZ1tuYW1lXSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHJ1bnRpbWUuY3JlYXRlU2NyaXB0UmVxdWVzdChzZWxmLmdldFBhdGgobmFtZSwgb3B0aW9ucykpO1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gc2VsZi5yZWNlaXZlcnMuY3JlYXRlKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNlbGYucmVjZWl2ZXJzLnJlbW92ZShyZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubG9hZGluZ1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gc2VsZi5sb2FkaW5nW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5sb2FkaW5nW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24gKHdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldKGVycm9yLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvb3Qob3B0aW9ucykge1xuICAgICAgICB2YXIgY2RuO1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSBydW50aW1lLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGlmICgob3B0aW9ucyAmJiBvcHRpb25zLnVzZVRMUykgfHwgcHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHBzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2RuID0gdGhpcy5vcHRpb25zLmNkbl9odHRwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZG4ucmVwbGFjZSgvXFwvKiQvLCAnJykgKyAnLycgKyB0aGlzLm9wdGlvbnMudmVyc2lvbjtcbiAgICB9XG4gICAgZ2V0UGF0aChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJvb3Qob3B0aW9ucykgKyAnLycgKyBuYW1lICsgdGhpcy5vcHRpb25zLnN1ZmZpeCArICcuanMnO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9kZXBlbmRlbmNpZXMudHNcblxuXG5cbnZhciBEZXBlbmRlbmNpZXNSZWNlaXZlcnMgPSBuZXcgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KCdfcHVzaGVyX2RlcGVuZGVuY2llcycsICdQdXNoZXIuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzJyk7XG52YXIgRGVwZW5kZW5jaWVzID0gbmV3IGRlcGVuZGVuY3lfbG9hZGVyX0RlcGVuZGVuY3lMb2FkZXIoe1xuICAgIGNkbl9odHRwOiBkZWZhdWx0cy5jZG5faHR0cCxcbiAgICBjZG5faHR0cHM6IGRlZmF1bHRzLmNkbl9odHRwcyxcbiAgICB2ZXJzaW9uOiBkZWZhdWx0cy5WRVJTSU9OLFxuICAgIHN1ZmZpeDogZGVmYXVsdHMuZGVwZW5kZW5jeV9zdWZmaXgsXG4gICAgcmVjZWl2ZXJzOiBEZXBlbmRlbmNpZXNSZWNlaXZlcnNcbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL3VybF9zdG9yZS50c1xuY29uc3QgdXJsU3RvcmUgPSB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vcHVzaGVyLmNvbScsXG4gICAgdXJsczoge1xuICAgICAgICBhdXRoZW50aWNhdGlvbkVuZHBvaW50OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvY2hhbm5lbHMvc2VydmVyX2FwaS9hdXRoZW50aWNhdGluZ191c2VycydcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvY2hhbm5lbHMvc2VydmVyX2FwaS9hdXRob3JpemluZy11c2Vycy8nXG4gICAgICAgIH0sXG4gICAgICAgIGphdmFzY3JpcHRRdWlja1N0YXJ0OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvamF2YXNjcmlwdF9xdWlja19zdGFydCdcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcmluZ0NsaWVudEV2ZW50czoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2NsaWVudF9hcGlfZ3VpZGUvY2xpZW50X2V2ZW50cyN0cmlnZ2VyLWV2ZW50cydcbiAgICAgICAgfSxcbiAgICAgICAgZW5jcnlwdGVkQ2hhbm5lbFN1cHBvcnQ6IHtcbiAgICAgICAgICAgIGZ1bGxVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vcHVzaGVyL3B1c2hlci1qcy90cmVlL2NjNDkxMDE1MzcxYTRiZGU1NzQzZDFjODdhMGZiYWMwZmViNTMxOTUjZW5jcnlwdGVkLWNoYW5uZWwtc3VwcG9ydCdcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBidWlsZExvZ1N1ZmZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBjb25zdCB1cmxQcmVmaXggPSAnU2VlOic7XG4gICAgY29uc3QgdXJsT2JqID0gdXJsU3RvcmUudXJsc1trZXldO1xuICAgIGlmICghdXJsT2JqKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgbGV0IHVybDtcbiAgICBpZiAodXJsT2JqLmZ1bGxVcmwpIHtcbiAgICAgICAgdXJsID0gdXJsT2JqLmZ1bGxVcmw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybE9iai5wYXRoKSB7XG4gICAgICAgIHVybCA9IHVybFN0b3JlLmJhc2VVcmwgKyB1cmxPYmoucGF0aDtcbiAgICB9XG4gICAgaWYgKCF1cmwpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gYCR7dXJsUHJlZml4fSAke3VybH1gO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHVybF9zdG9yZSA9ICh7IGJ1aWxkTG9nU3VmZml4IH0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2F1dGgvb3B0aW9ucy50c1xudmFyIEF1dGhSZXF1ZXN0VHlwZTtcbihmdW5jdGlvbiAoQXV0aFJlcXVlc3RUeXBlKSB7XG4gICAgQXV0aFJlcXVlc3RUeXBlW1wiVXNlckF1dGhlbnRpY2F0aW9uXCJdID0gXCJ1c2VyLWF1dGhlbnRpY2F0aW9uXCI7XG4gICAgQXV0aFJlcXVlc3RUeXBlW1wiQ2hhbm5lbEF1dGhvcml6YXRpb25cIl0gPSBcImNoYW5uZWwtYXV0aG9yaXphdGlvblwiO1xufSkoQXV0aFJlcXVlc3RUeXBlIHx8IChBdXRoUmVxdWVzdFR5cGUgPSB7fSkpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Vycm9ycy50c1xuY2xhc3MgQmFkRXZlbnROYW1lIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmNsYXNzIEJhZENoYW5uZWxOYW1lIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmNsYXNzIFJlcXVlc3RUaW1lZE91dCBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdyBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBUcmFuc3BvcnRDbG9zZWQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuY2xhc3MgVW5zdXBwb3J0ZWRGZWF0dXJlIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3VwcG9ydGVkVHJhbnNwb3J0IGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3VwcG9ydGVkU3RyYXRlZ3kgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuY2xhc3MgSFRUUEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvYXV0aC94aHJfYXV0aC50c1xuXG5cblxuXG5jb25zdCBhamF4ID0gZnVuY3Rpb24gKGNvbnRleHQsIHF1ZXJ5LCBhdXRoT3B0aW9ucywgYXV0aFJlcXVlc3RUeXBlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHhociA9IHJ1bnRpbWUuY3JlYXRlWEhSKCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCBhdXRoT3B0aW9ucy5lbmRwb2ludCwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBmb3IgKHZhciBoZWFkZXJOYW1lIGluIGF1dGhPcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgYXV0aE9wdGlvbnMuaGVhZGVyc1toZWFkZXJOYW1lXSk7XG4gICAgfVxuICAgIGlmIChhdXRoT3B0aW9ucy5oZWFkZXJzUHJvdmlkZXIgIT0gbnVsbCkge1xuICAgICAgICBsZXQgZHluYW1pY0hlYWRlcnMgPSBhdXRoT3B0aW9ucy5oZWFkZXJzUHJvdmlkZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaGVhZGVyTmFtZSBpbiBkeW5hbWljSGVhZGVycykge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgZHluYW1pY0hlYWRlcnNbaGVhZGVyTmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEhUVFBBdXRoRXJyb3IoMjAwLCBgSlNPTiByZXR1cm5lZCBmcm9tICR7YXV0aFJlcXVlc3RUeXBlLnRvU3RyaW5nKCl9IGVuZHBvaW50IHdhcyBpbnZhbGlkLCB5ZXQgc3RhdHVzIGNvZGUgd2FzIDIwMC4gRGF0YSB3YXM6ICR7eGhyLnJlc3BvbnNlVGV4dH1gKSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1ZmZpeCA9ICcnO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXV0aFJlcXVlc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXV0aFJlcXVlc3RUeXBlLlVzZXJBdXRoZW50aWNhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeCA9IHVybF9zdG9yZS5idWlsZExvZ1N1ZmZpeCgnYXV0aGVudGljYXRpb25FbmRwb2ludCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXV0aFJlcXVlc3RUeXBlLkNoYW5uZWxBdXRob3JpemF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4ID0gYENsaWVudHMgbXVzdCBiZSBhdXRob3JpemVkIHRvIGpvaW4gcHJpdmF0ZSBvciBwcmVzZW5jZSBjaGFubmVscy4gJHt1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2F1dGhvcml6YXRpb25FbmRwb2ludCcpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEhUVFBBdXRoRXJyb3IoeGhyLnN0YXR1cywgYFVuYWJsZSB0byByZXRyaWV2ZSBhdXRoIHN0cmluZyBmcm9tICR7YXV0aFJlcXVlc3RUeXBlLnRvU3RyaW5nKCl9IGVuZHBvaW50IC0gYCArXG4gICAgICAgICAgICAgICAgICAgIGByZWNlaXZlZCBzdGF0dXM6ICR7eGhyLnN0YXR1c30gZnJvbSAke2F1dGhPcHRpb25zLmVuZHBvaW50fS4gJHtzdWZmaXh9YCksIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIuc2VuZChxdWVyeSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB4aHJfYXV0aCA9IChhamF4KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9iYXNlNjQudHNcbmZ1bmN0aW9uIGVuY29kZShzKSB7XG4gICAgcmV0dXJuIGJ0b2EodXRvYihzKSk7XG59XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBiNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbnZhciBiNjR0YWIgPSB7fTtcbmZvciAodmFyIGJhc2U2NF9pID0gMCwgbCA9IGI2NGNoYXJzLmxlbmd0aDsgYmFzZTY0X2kgPCBsOyBiYXNlNjRfaSsrKSB7XG4gICAgYjY0dGFiW2I2NGNoYXJzLmNoYXJBdChiYXNlNjRfaSldID0gYmFzZTY0X2k7XG59XG52YXIgY2JfdXRvYiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiBjYyA8IDB4ODBcbiAgICAgICAgPyBjXG4gICAgICAgIDogY2MgPCAweDgwMFxuICAgICAgICAgICAgPyBmcm9tQ2hhckNvZGUoMHhjMCB8IChjYyA+Pj4gNikpICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSlcbiAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKDB4ZTAgfCAoKGNjID4+PiAxMikgJiAweDBmKSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gNikgJiAweDNmKSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpO1xufTtcbnZhciB1dG9iID0gZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gdS5yZXBsYWNlKC9bXlxceDAwLVxceDdGXS9nLCBjYl91dG9iKTtcbn07XG52YXIgY2JfZW5jb2RlID0gZnVuY3Rpb24gKGNjYykge1xuICAgIHZhciBwYWRsZW4gPSBbMCwgMiwgMV1bY2NjLmxlbmd0aCAlIDNdO1xuICAgIHZhciBvcmQgPSAoY2NjLmNoYXJDb2RlQXQoMCkgPDwgMTYpIHxcbiAgICAgICAgKChjY2MubGVuZ3RoID4gMSA/IGNjYy5jaGFyQ29kZUF0KDEpIDogMCkgPDwgOCkgfFxuICAgICAgICAoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApO1xuICAgIHZhciBjaGFycyA9IFtcbiAgICAgICAgYjY0Y2hhcnMuY2hhckF0KG9yZCA+Pj4gMTgpLFxuICAgICAgICBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gMTIpICYgNjMpLFxuICAgICAgICBwYWRsZW4gPj0gMiA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiA2KSAmIDYzKSxcbiAgICAgICAgcGFkbGVuID49IDEgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQob3JkICYgNjMpXG4gICAgXTtcbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG59O1xudmFyIGJ0b2EgPSB3aW5kb3cuYnRvYSB8fFxuICAgIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UoL1tcXHNcXFNdezEsM30vZywgY2JfZW5jb2RlKTtcbiAgICB9O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL3RpbWVycy9hYnN0cmFjdF90aW1lci50c1xuY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKHNldCwgY2xlYXIsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNsZWFyID0gY2xlYXI7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gY2FsbGJhY2sodGhpcy50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gICAgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lciAhPT0gbnVsbDtcbiAgICB9XG4gICAgZW5zdXJlQWJvcnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFic3RyYWN0X3RpbWVyID0gKFRpbWVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy90aW1lcnMvaW5kZXgudHNcblxuZnVuY3Rpb24gdGltZXJzX2NsZWFyVGltZW91dCh0aW1lcikge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xufVxuZnVuY3Rpb24gdGltZXJzX2NsZWFySW50ZXJ2YWwodGltZXIpIHtcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG59XG5jbGFzcyB0aW1lcnNfT25lT2ZmVGltZXIgZXh0ZW5kcyBhYnN0cmFjdF90aW1lciB7XG4gICAgY29uc3RydWN0b3IoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHN1cGVyKHNldFRpbWVvdXQsIHRpbWVyc19jbGVhclRpbWVvdXQsIGRlbGF5LCBmdW5jdGlvbiAodGltZXIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgdGltZXJzX1BlcmlvZGljVGltZXIgZXh0ZW5kcyBhYnN0cmFjdF90aW1lciB7XG4gICAgY29uc3RydWN0b3IoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHN1cGVyKHNldEludGVydmFsLCB0aW1lcnNfY2xlYXJJbnRlcnZhbCwgZGVsYXksIGZ1bmN0aW9uICh0aW1lcikge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWwudHNcblxudmFyIFV0aWwgPSB7XG4gICAgbm93KCkge1xuICAgICAgICBpZiAoRGF0ZS5ub3cpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWZlcihjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IHRpbWVyc19PbmVPZmZUaW1lcigwLCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBtZXRob2QobmFtZSwgLi4uYXJncykge1xuICAgICAgICB2YXIgYm91bmRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFtuYW1lXS5hcHBseShvYmplY3QsIGJvdW5kQXJndW1lbnRzLmNvbmNhdChhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdXRpbCA9IChVdGlsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy9jb2xsZWN0aW9ucy50c1xuXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBzb3VyY2VzW2ldO1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBleHRlbnNpb25zKSB7XG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uc1twcm9wZXJ0eV0gJiZcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gZXh0ZW5kKHRhcmdldFtwcm9wZXJ0eV0gfHwge30sIGV4dGVuc2lvbnNbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbnNpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KCkge1xuICAgIHZhciBtID0gWydQdXNoZXInXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG0ucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbS5wdXNoKHNhZmVKU09OU3RyaW5naWZ5KGFyZ3VtZW50c1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtLmpvaW4oJyA6ICcpO1xufVxuZnVuY3Rpb24gYXJyYXlJbmRleE9mKGFycmF5LCBpdGVtKSB7XG4gICAgdmFyIG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICBpZiAoYXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIG9iamVjdEFwcGx5KG9iamVjdCwgZikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgIGYob2JqZWN0W2tleV0sIGtleSwgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZnVuY3Rpb24gYXBwbHkoYXJyYXksIGYsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGYuY2FsbChjb250ZXh0IHx8IHdpbmRvdywgYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXAoYXJyYXksIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChmKGFycmF5W2ldLCBpLCBhcnJheSwgcmVzdWx0KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtYXBPYmplY3Qob2JqZWN0LCBmKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBmKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gICAgdGVzdCA9XG4gICAgICAgIHRlc3QgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGVzdChhcnJheVtpXSwgaSwgYXJyYXksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyT2JqZWN0KG9iamVjdCwgdGVzdCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICgodGVzdCAmJiB0ZXN0KHZhbHVlLCBrZXksIG9iamVjdCwgcmVzdWx0KSkgfHwgQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmxhdHRlbihvYmplY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBhbnkoYXJyYXksIHRlc3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNvbGxlY3Rpb25zX2FsbChhcnJheSwgdGVzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuY29kZVBhcmFtc09iamVjdChkYXRhKSB7XG4gICAgcmV0dXJuIG1hcE9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2FmZUpTT05TdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSkge1xuICAgIHZhciBwYXJhbXMgPSBmaWx0ZXJPYmplY3QoZGF0YSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIHZhciBxdWVyeSA9IG1hcChmbGF0dGVuKGVuY29kZVBhcmFtc09iamVjdChwYXJhbXMpKSwgdXRpbC5tZXRob2QoJ2pvaW4nLCAnPScpKS5qb2luKCcmJyk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gZGVjeWNsZU9iamVjdChvYmplY3QpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdLCBwYXRocyA9IFtdO1xuICAgIHJldHVybiAoZnVuY3Rpb24gZGVyZXoodmFsdWUsIHBhdGgpIHtcbiAgICAgICAgdmFyIGksIG5hbWUsIG51O1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0c1tpXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICRyZWY6IHBhdGhzW2ldIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgICAgICBudSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51W2ldID0gZGVyZXoodmFsdWVbaV0sIHBhdGggKyAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51W25hbWVdID0gZGVyZXoodmFsdWVbbmFtZV0sIHBhdGggKyAnWycgKyBKU09OLnN0cmluZ2lmeShuYW1lKSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51O1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KShvYmplY3QsICckJyk7XG59XG5mdW5jdGlvbiBzYWZlSlNPTlN0cmluZ2lmeShzb3VyY2UpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc291cmNlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRlY3ljbGVPYmplY3Qoc291cmNlKSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2xvZ2dlci50c1xuXG5cbmNsYXNzIGxvZ2dlcl9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdsb2JhbExvZyA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBkZWJ1ZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nLCBhcmdzKTtcbiAgICB9XG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nV2FybiwgYXJncyk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2dFcnJvciwgYXJncyk7XG4gICAgfVxuICAgIGdsb2JhbExvZ1dhcm4obWVzc2FnZSkge1xuICAgICAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdsb2JhbExvZ0Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTG9nV2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2coZGVmYXVsdExvZ2dpbmdGdW5jdGlvbiwgLi4uYXJncykge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHN0cmluZ2lmeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAoY29yZV9wdXNoZXIubG9nKSB7XG4gICAgICAgICAgICBjb3JlX3B1c2hlci5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29yZV9wdXNoZXIubG9nVG9Db25zb2xlKSB7XG4gICAgICAgICAgICBjb25zdCBsb2cgPSBkZWZhdWx0TG9nZ2luZ0Z1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgICAgICBsb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBsb2dnZXIgPSAobmV3IGxvZ2dlcl9Mb2dnZXIoKSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9hdXRoL2pzb25wX2F1dGgudHNcblxudmFyIGpzb25wID0gZnVuY3Rpb24gKGNvbnRleHQsIHF1ZXJ5LCBhdXRoT3B0aW9ucywgYXV0aFJlcXVlc3RUeXBlLCBjYWxsYmFjaykge1xuICAgIGlmIChhdXRoT3B0aW9ucy5oZWFkZXJzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgYXV0aE9wdGlvbnMuaGVhZGVyc1Byb3ZpZGVyICE9IG51bGwpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oYFRvIHNlbmQgaGVhZGVycyB3aXRoIHRoZSAke2F1dGhSZXF1ZXN0VHlwZS50b1N0cmluZygpfSByZXF1ZXN0LCB5b3UgbXVzdCB1c2UgQUpBWCwgcmF0aGVyIHRoYW4gSlNPTlAuYCk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFja05hbWUgPSBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRC50b1N0cmluZygpO1xuICAgIGNvbnRleHQubmV4dEF1dGhDYWxsYmFja0lEKys7XG4gICAgdmFyIGRvY3VtZW50ID0gY29udGV4dC5nZXREb2N1bWVudCgpO1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb250ZXh0LmF1dGhfY2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9O1xuICAgIHZhciBjYWxsYmFja19uYW1lID0gXCJQdXNoZXIuYXV0aF9jYWxsYmFja3NbJ1wiICsgY2FsbGJhY2tOYW1lICsgXCInXVwiO1xuICAgIHNjcmlwdC5zcmMgPVxuICAgICAgICBhdXRoT3B0aW9ucy5lbmRwb2ludCArXG4gICAgICAgICAgICAnP2NhbGxiYWNrPScgK1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGNhbGxiYWNrX25hbWUpICtcbiAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICBxdWVyeTtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5maXJzdENoaWxkKTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBqc29ucF9hdXRoID0gKGpzb25wKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9zY3JpcHRfcmVxdWVzdC50c1xuY2xhc3MgU2NyaXB0UmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3Ioc3JjKSB7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIH1cbiAgICBzZW5kKHJlY2VpdmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGVycm9yU3RyaW5nID0gJ0Vycm9yIGxvYWRpbmcgJyArIHNlbGYuc3JjO1xuICAgICAgICBzZWxmLnNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzZWxmLnNjcmlwdC5pZCA9IHJlY2VpdmVyLmlkO1xuICAgICAgICBzZWxmLnNjcmlwdC5zcmMgPSBzZWxmLnNyYztcbiAgICAgICAgc2VsZi5zY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzZWxmLnNjcmlwdC5jaGFyc2V0ID0gJ1VURi04JztcbiAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2soZXJyb3JTdHJpbmcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5jYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5zY3JpcHQuYXN5bmMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQgJiZcbiAgICAgICAgICAgIC9vcGVyYS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQuaWQgPSByZWNlaXZlci5pZCArICdfZXJyb3InO1xuICAgICAgICAgICAgc2VsZi5lcnJvclNjcmlwdC50ZXh0ID0gcmVjZWl2ZXIubmFtZSArIFwiKCdcIiArIGVycm9yU3RyaW5nICsgXCInKTtcIjtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gc2VsZi5lcnJvclNjcmlwdC5hc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2VsZi5zY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGlmIChzZWxmLmVycm9yU2NyaXB0KSB7XG4gICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzZWxmLmVycm9yU2NyaXB0LCBzZWxmLnNjcmlwdC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5vbmxvYWQgPSB0aGlzLnNjcmlwdC5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NyaXB0ICYmIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVycm9yU2NyaXB0ICYmIHRoaXMuZXJyb3JTY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvclNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZXJyb3JTY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvclNjcmlwdCA9IG51bGw7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2pzb25wX3JlcXVlc3QudHNcblxuXG5jbGFzcyBqc29ucF9yZXF1ZXN0X0pTT05QUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBkYXRhKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBzZW5kKHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcXVlcnkgPSBidWlsZFF1ZXJ5U3RyaW5nKHRoaXMuZGF0YSk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVybCArICcvJyArIHJlY2VpdmVyLm51bWJlciArICc/JyArIHF1ZXJ5O1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZVNjcmlwdFJlcXVlc3QodXJsKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdGltZWxpbmUvanNvbnBfdGltZWxpbmUudHNcblxuXG52YXIgZ2V0QWdlbnQgPSBmdW5jdGlvbiAoc2VuZGVyLCB1c2VUTFMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzY2hlbWUgPSAnaHR0cCcgKyAodXNlVExTID8gJ3MnIDogJycpICsgJzovLyc7XG4gICAgICAgIHZhciB1cmwgPSBzY2hlbWUgKyAoc2VuZGVyLmhvc3QgfHwgc2VuZGVyLm9wdGlvbnMuaG9zdCkgKyBzZW5kZXIub3B0aW9ucy5wYXRoO1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHJ1bnRpbWUuY3JlYXRlSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHJ1bnRpbWUuU2NyaXB0UmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgICAgU2NyaXB0UmVjZWl2ZXJzLnJlbW92ZShyZWNlaXZlcik7XG4gICAgICAgICAgICByZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICBzZW5kZXIuaG9zdCA9IHJlc3VsdC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgIH07XG59O1xudmFyIGpzb25wX3RpbWVsaW5lX2pzb25wID0ge1xuICAgIG5hbWU6ICdqc29ucCcsXG4gICAgZ2V0QWdlbnRcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBqc29ucF90aW1lbGluZSA9IChqc29ucF90aW1lbGluZV9qc29ucCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy91cmxfc2NoZW1lcy50c1xuXG5mdW5jdGlvbiBnZXRHZW5lcmljVVJMKGJhc2VTY2hlbWUsIHBhcmFtcywgcGF0aCkge1xuICAgIHZhciBzY2hlbWUgPSBiYXNlU2NoZW1lICsgKHBhcmFtcy51c2VUTFMgPyAncycgOiAnJyk7XG4gICAgdmFyIGhvc3QgPSBwYXJhbXMudXNlVExTID8gcGFyYW1zLmhvc3RUTFMgOiBwYXJhbXMuaG9zdE5vblRMUztcbiAgICByZXR1cm4gc2NoZW1lICsgJzovLycgKyBob3N0ICsgcGF0aDtcbn1cbmZ1bmN0aW9uIGdldEdlbmVyaWNQYXRoKGtleSwgcXVlcnlTdHJpbmcpIHtcbiAgICB2YXIgcGF0aCA9ICcvYXBwLycgKyBrZXk7XG4gICAgdmFyIHF1ZXJ5ID0gJz9wcm90b2NvbD0nICtcbiAgICAgICAgZGVmYXVsdHMuUFJPVE9DT0wgK1xuICAgICAgICAnJmNsaWVudD1qcycgK1xuICAgICAgICAnJnZlcnNpb249JyArXG4gICAgICAgIGRlZmF1bHRzLlZFUlNJT04gK1xuICAgICAgICAocXVlcnlTdHJpbmcgPyAnJicgKyBxdWVyeVN0cmluZyA6ICcnKTtcbiAgICByZXR1cm4gcGF0aCArIHF1ZXJ5O1xufVxudmFyIHdzID0ge1xuICAgIGdldEluaXRpYWw6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICB2YXIgcGF0aCA9IChwYXJhbXMuaHR0cFBhdGggfHwgJycpICsgZ2V0R2VuZXJpY1BhdGgoa2V5LCAnZmxhc2g9ZmFsc2UnKTtcbiAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoJ3dzJywgcGFyYW1zLCBwYXRoKTtcbiAgICB9XG59O1xudmFyIGh0dHAgPSB7XG4gICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBwYXRoID0gKHBhcmFtcy5odHRwUGF0aCB8fCAnL3B1c2hlcicpICsgZ2V0R2VuZXJpY1BhdGgoa2V5KTtcbiAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoJ2h0dHAnLCBwYXJhbXMsIHBhdGgpO1xuICAgIH1cbn07XG52YXIgc29ja2pzID0ge1xuICAgIGdldEluaXRpYWw6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTCgnaHR0cCcsIHBhcmFtcywgcGFyYW1zLmh0dHBQYXRoIHx8ICcvcHVzaGVyJyk7XG4gICAgfSxcbiAgICBnZXRQYXRoOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNQYXRoKGtleSk7XG4gICAgfVxufTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkudHNcblxuY2xhc3MgY2FsbGJhY2tfcmVnaXN0cnlfQ2FsbGJhY2tSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XG4gICAgfVxuICAgIGFkZChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPVxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBrZXlzKHRoaXMuX2NhbGxiYWNrcyk7XG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGFwcGx5KG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW25hbWVdID0gZmlsdGVyKHRoaXMuX2NhbGxiYWNrc1tuYW1lXSB8fCBbXSwgZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKChjYWxsYmFjayAmJiBjYWxsYmFjayAhPT0gYmluZGluZy5mbikgfHxcbiAgICAgICAgICAgICAgICAgICAgKGNvbnRleHQgJiYgY29udGV4dCAhPT0gYmluZGluZy5jb250ZXh0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcykge1xuICAgICAgICBhcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XG4gICAgcmV0dXJuICdfJyArIG5hbWU7XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZXZlbnRzL2Rpc3BhdGNoZXIudHNcblxuXG5jbGFzcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKGZhaWxUaHJvdWdoKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IGNhbGxiYWNrX3JlZ2lzdHJ5X0NhbGxiYWNrUmVnaXN0cnkoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFpbFRocm91Z2ggPSBmYWlsVGhyb3VnaDtcbiAgICB9XG4gICAgYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBmaWx0ZXIodGhpcy5nbG9iYWxfY2FsbGJhY2tzIHx8IFtdLCBjID0+IGMgIT09IGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVuYmluZF9hbGwoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZW1pdChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uZm4uYXBwbHkoY2FsbGJhY2tzW2ldLmNvbnRleHQgfHwgd2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZhaWxUaHJvdWdoKSB7XG4gICAgICAgICAgICB0aGlzLmZhaWxUaHJvdWdoKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdHJhbnNwb3J0X2Nvbm5lY3Rpb24udHNcblxuXG5cblxuXG5jbGFzcyB0cmFuc3BvcnRfY29ubmVjdGlvbl9UcmFuc3BvcnRDb25uZWN0aW9uIGV4dGVuZHMgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUgPSBydW50aW1lLnRyYW5zcG9ydENvbm5lY3Rpb25Jbml0aWFsaXplcjtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ25ldyc7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGltZW91dCA9IG9wdGlvbnMuYWN0aXZpdHlUaW1lb3V0O1xuICAgICAgICB0aGlzLmlkID0gdGhpcy50aW1lbGluZS5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgfVxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrcygpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5ob29rcy5oYW5kbGVzQWN0aXZpdHlDaGVja3MpO1xuICAgIH1cbiAgICBzdXBwb3J0c1BpbmcoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3Muc3VwcG9ydHNQaW5nKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0IHx8IHRoaXMuc3RhdGUgIT09ICdpbml0aWFsaXplZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXJsID0gdGhpcy5ob29rcy51cmxzLmdldEluaXRpYWwodGhpcy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IHRoaXMuaG9va3MuZ2V0U29ja2V0KHVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdXRpbC5kZWZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnQ29ubmVjdGluZycsIHsgdHJhbnNwb3J0OiB0aGlzLm5hbWUsIHVybCB9KTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnY29ubmVjdGluZycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbmQoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB1dGlsLmRlZmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnb3BlbicgJiYgdGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQucGluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uT3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9va3MuYmVmb3JlT3Blbikge1xuICAgICAgICAgICAgdGhpcy5ob29rcy5iZWZvcmVPcGVuKHRoaXMuc29ja2V0LCB0aGlzLmhvb2tzLnVybHMuZ2V0UGF0aCh0aGlzLmtleSwgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnb3BlbicpO1xuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmVycm9yKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2UoeyBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9KSk7XG4gICAgfVxuICAgIG9uQ2xvc2UoY2xvc2VFdmVudCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnY2xvc2VkJywge1xuICAgICAgICAgICAgICAgIGNvZGU6IGNsb3NlRXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICByZWFzb246IGNsb3NlRXZlbnQucmVhc29uLFxuICAgICAgICAgICAgICAgIHdhc0NsZWFuOiBjbG9zZUV2ZW50Lndhc0NsZWFuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgb25BY3Rpdml0eSgpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpdml0eScpO1xuICAgIH1cbiAgICBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IGNsb3NlRXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKGNsb3NlRXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgIHRoaXMub25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25hY3Rpdml0eSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZpdHkoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5iaW5kTGlzdGVuZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKHN0YXRlLCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8odGhpcy5idWlsZFRpbWVsaW5lTWVzc2FnZSh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZW1pdChzdGF0ZSwgcGFyYW1zKTtcbiAgICB9XG4gICAgYnVpbGRUaW1lbGluZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHsgY2lkOiB0aGlzLmlkIH0sIG1lc3NhZ2UpO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydC50c1xuXG5jbGFzcyB0cmFuc3BvcnRfVHJhbnNwb3J0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29rcykge1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgfVxuICAgIGlzU3VwcG9ydGVkKGVudmlyb25tZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvb2tzLmlzU3VwcG9ydGVkKGVudmlyb25tZW50KTtcbiAgICB9XG4gICAgY3JlYXRlQ29ubmVjdGlvbihuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fVHJhbnNwb3J0Q29ubmVjdGlvbih0aGlzLmhvb2tzLCBuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvdHJhbnNwb3J0cy90cmFuc3BvcnRzLnRzXG5cblxuXG5cbnZhciBXU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfVHJhbnNwb3J0KHtcbiAgICB1cmxzOiB3cyxcbiAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3M6IGZhbHNlLFxuICAgIHN1cHBvcnRzUGluZzogZmFsc2UsXG4gICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihydW50aW1lLmdldFdlYlNvY2tldEFQSSgpKTtcbiAgICB9LFxuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bnRpbWUuZ2V0V2ViU29ja2V0QVBJKCkpO1xuICAgIH0sXG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLmNyZWF0ZVdlYlNvY2tldCh1cmwpO1xuICAgIH1cbn0pO1xudmFyIGh0dHBDb25maWd1cmF0aW9uID0ge1xuICAgIHVybHM6IGh0dHAsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiBmYWxzZSxcbiAgICBzdXBwb3J0c1Bpbmc6IHRydWUsXG4gICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xudmFyIHN0cmVhbWluZ0NvbmZpZ3VyYXRpb24gPSBleHRlbmQoe1xuICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5IVFRQRmFjdG9yeS5jcmVhdGVTdHJlYW1pbmdTb2NrZXQodXJsKTtcbiAgICB9XG59LCBodHRwQ29uZmlndXJhdGlvbik7XG52YXIgcG9sbGluZ0NvbmZpZ3VyYXRpb24gPSBleHRlbmQoe1xuICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5IVFRQRmFjdG9yeS5jcmVhdGVQb2xsaW5nU29ja2V0KHVybCk7XG4gICAgfVxufSwgaHR0cENvbmZpZ3VyYXRpb24pO1xudmFyIHhockNvbmZpZ3VyYXRpb24gPSB7XG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuaXNYSFJTdXBwb3J0ZWQoKTtcbiAgICB9XG59O1xudmFyIFhIUlN0cmVhbWluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfVHJhbnNwb3J0KChleHRlbmQoe30sIHN0cmVhbWluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKSk7XG52YXIgWEhSUG9sbGluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfVHJhbnNwb3J0KGV4dGVuZCh7fSwgcG9sbGluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKTtcbnZhciBUcmFuc3BvcnRzID0ge1xuICAgIHdzOiBXU1RyYW5zcG9ydCxcbiAgICB4aHJfc3RyZWFtaW5nOiBYSFJTdHJlYW1pbmdUcmFuc3BvcnQsXG4gICAgeGhyX3BvbGxpbmc6IFhIUlBvbGxpbmdUcmFuc3BvcnRcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRzID0gKFRyYW5zcG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdHJhbnNwb3J0cy90cmFuc3BvcnRzLnRzXG5cblxuXG5cblxuXG52YXIgU29ja0pTVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF9UcmFuc3BvcnQoe1xuICAgIGZpbGU6ICdzb2NranMnLFxuICAgIHVybHM6IHNvY2tqcyxcbiAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3M6IHRydWUsXG4gICAgc3VwcG9ydHNQaW5nOiBmYWxzZSxcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5Tb2NrSlMgIT09IHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IHdpbmRvdy5Tb2NrSlModXJsLCBudWxsLCB7XG4gICAgICAgICAgICBqc19wYXRoOiBEZXBlbmRlbmNpZXMuZ2V0UGF0aCgnc29ja2pzJywge1xuICAgICAgICAgICAgICAgIHVzZVRMUzogb3B0aW9ucy51c2VUTFNcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaWdub3JlX251bGxfb3JpZ2luOiBvcHRpb25zLmlnbm9yZU51bGxPcmlnaW5cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbiAoc29ja2V0LCBwYXRoKSB7XG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xudmFyIHhkckNvbmZpZ3VyYXRpb24gPSB7XG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uIChlbnZpcm9ubWVudCkge1xuICAgICAgICB2YXIgeWVzID0gcnVudGltZS5pc1hEUlN1cHBvcnRlZChlbnZpcm9ubWVudC51c2VUTFMpO1xuICAgICAgICByZXR1cm4geWVzO1xuICAgIH1cbn07XG52YXIgWERSU3RyZWFtaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF9UcmFuc3BvcnQoKGV4dGVuZCh7fSwgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpKTtcbnZhciBYRFJQb2xsaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF9UcmFuc3BvcnQoZXh0ZW5kKHt9LCBwb2xsaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpO1xudHJhbnNwb3J0cy54ZHJfc3RyZWFtaW5nID0gWERSU3RyZWFtaW5nVHJhbnNwb3J0O1xudHJhbnNwb3J0cy54ZHJfcG9sbGluZyA9IFhEUlBvbGxpbmdUcmFuc3BvcnQ7XG50cmFuc3BvcnRzLnNvY2tqcyA9IFNvY2tKU1RyYW5zcG9ydDtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydHNfdHJhbnNwb3J0cyA9ICh0cmFuc3BvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL25ldF9pbmZvLnRzXG5cbmNsYXNzIG5ldF9pbmZvX05ldEluZm8gZXh0ZW5kcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnb25saW5lJyk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29mZmxpbmUnKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc09ubGluZSgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIG5ldF9pbmZvX05ldHdvcmsgPSBuZXcgbmV0X2luZm9fTmV0SW5mbygpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlci50c1xuXG5cbmNsYXNzIGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMubWluUGluZ0RlbGF5ID0gb3B0aW9ucy5taW5QaW5nRGVsYXk7XG4gICAgICAgIHRoaXMubWF4UGluZ0RlbGF5ID0gb3B0aW9ucy5tYXhQaW5nRGVsYXk7XG4gICAgICAgIHRoaXMucGluZ0RlbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjcmVhdGVDb25uZWN0aW9uKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLnBpbmdEZWxheVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLnRyYW5zcG9ydC5jcmVhdGVDb25uZWN0aW9uKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpO1xuICAgICAgICB2YXIgb3BlblRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgIHZhciBvbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgICAgIG9wZW5UaW1lc3RhbXAgPSB1dGlsLm5vdygpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25DbG9zZWQgPSBjbG9zZUV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24udW5iaW5kKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gICAgICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlID09PSAxMDAyIHx8IGNsb3NlRXZlbnQuY29kZSA9PT0gMTAwMykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNsb3NlRXZlbnQud2FzQ2xlYW4gJiYgb3BlblRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHZhciBsaWZlc3BhbiA9IHV0aWwubm93KCkgLSBvcGVuVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIGlmIChsaWZlc3BhbiA8IDIgKiB0aGlzLm1heFBpbmdEZWxheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZXIucmVwb3J0RGVhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waW5nRGVsYXkgPSBNYXRoLm1heChsaWZlc3BhbiAvIDIsIHRoaXMubWluUGluZ0RlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbm5lY3Rpb24uYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZChlbnZpcm9ubWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmlzQWxpdmUoKSAmJiB0aGlzLnRyYW5zcG9ydC5pc1N1cHBvcnRlZChlbnZpcm9ubWVudCk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vcHJvdG9jb2wvcHJvdG9jb2wudHNcbmNvbnN0IFByb3RvY29sID0ge1xuICAgIGRlY29kZU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZUV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50RGF0YSA9IG1lc3NhZ2VEYXRhLmRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHB1c2hlckV2ZW50RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwdXNoZXJFdmVudERhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VEYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHVzaGVyRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IG1lc3NhZ2VEYXRhLmV2ZW50LFxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IG1lc3NhZ2VEYXRhLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZGF0YTogcHVzaGVyRXZlbnREYXRhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnVzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBwdXNoZXJFdmVudC51c2VyX2lkID0gbWVzc2FnZURhdGEudXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwdXNoZXJFdmVudDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgeyB0eXBlOiAnTWVzc2FnZVBhcnNlRXJyb3InLCBlcnJvcjogZSwgZGF0YTogbWVzc2FnZUV2ZW50LmRhdGEgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZW5jb2RlTWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmVudCk7XG4gICAgfSxcbiAgICBwcm9jZXNzSGFuZHNoYWtlOiBmdW5jdGlvbiAobWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gUHJvdG9jb2wuZGVjb2RlTWVzc2FnZShtZXNzYWdlRXZlbnQpO1xuICAgICAgICBpZiAobWVzc2FnZS5ldmVudCA9PT0gJ3B1c2hlcjpjb25uZWN0aW9uX2VzdGFibGlzaGVkJykge1xuICAgICAgICAgICAgaWYgKCFtZXNzYWdlLmRhdGEuYWN0aXZpdHlfdGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdObyBhY3Rpdml0eSB0aW1lb3V0IHNwZWNpZmllZCBpbiBoYW5kc2hha2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdjb25uZWN0ZWQnLFxuICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlLmRhdGEuc29ja2V0X2lkLFxuICAgICAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogbWVzc2FnZS5kYXRhLmFjdGl2aXR5X3RpbWVvdXQgKiAxMDAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdwdXNoZXI6ZXJyb3InKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5nZXRDbG9zZUFjdGlvbihtZXNzYWdlLmRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLmdldENsb3NlRXJyb3IobWVzc2FnZS5kYXRhKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIGhhbmRzaGFrZSc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldENsb3NlQWN0aW9uOiBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDAwMCkge1xuICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA+PSAxMDAyICYmIGNsb3NlRXZlbnQuY29kZSA8PSAxMDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrb2ZmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA9PT0gNDAwMCkge1xuICAgICAgICAgICAgcmV0dXJuICd0bHNfb25seSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdyZWZ1c2VkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhY2tvZmYnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQzMDApIHtcbiAgICAgICAgICAgIHJldHVybiAncmV0cnknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdyZWZ1c2VkJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q2xvc2VFcnJvcjogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSAhPT0gMTAwMCAmJiBjbG9zZUV2ZW50LmNvZGUgIT09IDEwMDEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1B1c2hlckVycm9yJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGNsb3NlRXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2xvc2VFdmVudC5yZWFzb24gfHwgY2xvc2VFdmVudC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHByb3RvY29sX3Byb3RvY29sID0gKFByb3RvY29sKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL2Nvbm5lY3Rpb24udHNcblxuXG5cblxuY2xhc3MgY29ubmVjdGlvbl9Db25uZWN0aW9uIGV4dGVuZHMgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdHJhbnNwb3J0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lb3V0ID0gdHJhbnNwb3J0LmFjdGl2aXR5VGltZW91dDtcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmhhbmRsZXNBY3Rpdml0eUNoZWNrcygpO1xuICAgIH1cbiAgICBzZW5kKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoZGF0YSk7XG4gICAgfVxuICAgIHNlbmRfZXZlbnQobmFtZSwgZGF0YSwgY2hhbm5lbCkge1xuICAgICAgICB2YXIgZXZlbnQgPSB7IGV2ZW50OiBuYW1lLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICBldmVudC5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIuZGVidWcoJ0V2ZW50IHNlbnQnLCBldmVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQocHJvdG9jb2xfcHJvdG9jb2wuZW5jb2RlTWVzc2FnZShldmVudCkpO1xuICAgIH1cbiAgICBwaW5nKCkge1xuICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZF9ldmVudCgncHVzaGVyOnBpbmcnLCB7fSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfVxuICAgIGJpbmRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50ID0gcHJvdG9jb2xfcHJvdG9jb2wuZGVjb2RlTWVzc2FnZShtZXNzYWdlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ01lc3NhZ2VQYXJzZUVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZUV2ZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwdXNoZXJFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRXZlbnQgcmVjZCcsIHB1c2hlckV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwdXNoZXJFdmVudC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOmVycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUHVzaGVyRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwdXNoZXJFdmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6cGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6cG9uZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwb25nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgcHVzaGVyRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpdml0eTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aXZpdHknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VkOiBjbG9zZUV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VFdmVudCAmJiBjbG9zZUV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDbG9zZUV2ZW50KGNsb3NlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuYmluZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIG9iamVjdEFwcGx5KGxpc3RlbmVycywgKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZChldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9iamVjdEFwcGx5KGxpc3RlbmVycywgKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuYmluZChldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQ2xvc2VFdmVudChjbG9zZUV2ZW50KSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUFjdGlvbihjbG9zZUV2ZW50KTtcbiAgICAgICAgdmFyIGVycm9yID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChhY3Rpb24sIHsgYWN0aW9uOiBhY3Rpb24sIGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL2hhbmRzaGFrZS9pbmRleC50c1xuXG5cblxuY2xhc3MgaGFuZHNoYWtlX0hhbmRzaGFrZSB7XG4gICAgY29uc3RydWN0b3IodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfVxuICAgIGJpbmRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMub25NZXNzYWdlID0gbSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvdG9jb2xfcHJvdG9jb2wucHJvY2Vzc0hhbmRzaGFrZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goJ2Vycm9yJywgeyBlcnJvcjogZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQuYWN0aW9uID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoKCdjb25uZWN0ZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IG5ldyBjb25uZWN0aW9uX0Nvbm5lY3Rpb24ocmVzdWx0LmlkLCB0aGlzLnRyYW5zcG9ydCksXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogcmVzdWx0LmFjdGl2aXR5VGltZW91dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2gocmVzdWx0LmFjdGlvbiwgeyBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DbG9zZWQgPSBjbG9zZUV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VBY3Rpb24oY2xvc2VFdmVudCkgfHwgJ2JhY2tvZmYnO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKGFjdGlvbiwgeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoJ2Nsb3NlZCcsIHRoaXMub25DbG9zZWQpO1xuICAgIH1cbiAgICB1bmJpbmRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZCgnbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQudW5iaW5kKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2VkKTtcbiAgICB9XG4gICAgZmluaXNoKGFjdGlvbiwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soZXh0ZW5kKHsgdHJhbnNwb3J0OiB0aGlzLnRyYW5zcG9ydCwgYWN0aW9uOiBhY3Rpb24gfSwgcGFyYW1zKSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL3RpbWVsaW5lX3NlbmRlci50c1xuXG5jbGFzcyB0aW1lbGluZV9zZW5kZXJfVGltZWxpbmVTZW5kZXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWVsaW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgc2VuZCh1c2VUTFMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZWxpbmUuc2VuZChydW50aW1lLlRpbWVsaW5lVHJhbnNwb3J0LmdldEFnZW50KHRoaXMsIHVzZVRMUyksIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvY2hhbm5lbC50c1xuXG5cblxuXG5cbmNsYXNzIGNoYW5uZWxfQ2hhbm5lbCBleHRlbmRzIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHN1cGVyKGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdObyBjYWxsYmFja3Mgb24gJyArIG5hbWUgKyAnIGZvciAnICsgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXV0aG9yaXplKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgeyBhdXRoOiAnJyB9KTtcbiAgICB9XG4gICAgdHJpZ2dlcihldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoZXZlbnQuaW5kZXhPZignY2xpZW50LScpICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFkRXZlbnROYW1lKFwiRXZlbnQgJ1wiICsgZXZlbnQgKyBcIicgZG9lcyBub3Qgc3RhcnQgd2l0aCAnY2xpZW50LSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ3RyaWdnZXJpbmdDbGllbnRFdmVudHMnKTtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGBDbGllbnQgZXZlbnQgdHJpZ2dlcmVkIGJlZm9yZSBjaGFubmVsICdzdWJzY3JpcHRpb25fc3VjY2VlZGVkJyBldmVudCAuICR7c3VmZml4fWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KGV2ZW50LCBkYXRhLCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudE5hbWUgPT09ICdwdXNoZXJfaW50ZXJuYWw6c3Vic2NyaXB0aW9uX2NvdW50Jykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Db3VudEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudE5hbWUuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGEgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudChldmVudCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGV2ZW50LmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVN1YnNjcmlwdGlvbkNvdW50RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3Vic2NyaXB0aW9uX2NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNvdW50ID0gZXZlbnQuZGF0YS5zdWJzY3JpcHRpb25fY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX2NvdW50JywgZXZlbnQuZGF0YSk7XG4gICAgfVxuICAgIHN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXplKHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkLCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fZXJyb3InLCBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBdXRoRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIGVycm9yIGluc3RhbmNlb2YgSFRUUEF1dGhFcnJvciA/IHsgc3RhdHVzOiBlcnJvci5zdGF0dXMgfSA6IHt9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6c3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgICAgICBhdXRoOiBkYXRhLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZGF0YS5jaGFubmVsX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6dW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbmNlbFN1YnNjcmlwdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZWluc3RhdGVTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC50c1xuXG5jbGFzcyBwcml2YXRlX2NoYW5uZWxfUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBjaGFubmVsX0NoYW5uZWwge1xuICAgIGF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLmNvbmZpZy5jaGFubmVsQXV0aG9yaXplcih7XG4gICAgICAgICAgICBjaGFubmVsTmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgc29ja2V0SWQ6IHNvY2tldElkXG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvbWVtYmVycy50c1xuXG5jbGFzcyBtZW1iZXJzX01lbWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIGdldChpZCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMubWVtYmVycywgaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLm1lbWJlcnNbaWRdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWFjaChjYWxsYmFjaykge1xuICAgICAgICBvYmplY3RBcHBseSh0aGlzLm1lbWJlcnMsIChtZW1iZXIsIGlkKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzLmdldChpZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0TXlJRChpZCkge1xuICAgICAgICB0aGlzLm15SUQgPSBpZDtcbiAgICB9XG4gICAgb25TdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmhhc2g7XG4gICAgICAgIHRoaXMuY291bnQgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmNvdW50O1xuICAgICAgICB0aGlzLm1lID0gdGhpcy5nZXQodGhpcy5teUlEKTtcbiAgICB9XG4gICAgYWRkTWVtYmVyKG1lbWJlckRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lbWJlcnNbbWVtYmVyRGF0YS51c2VyX2lkXSA9IG1lbWJlckRhdGEudXNlcl9pbmZvO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobWVtYmVyRGF0YS51c2VyX2lkKTtcbiAgICB9XG4gICAgcmVtb3ZlTWVtYmVyKG1lbWJlckRhdGEpIHtcbiAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1lbWJlcnNbbWVtYmVyRGF0YS51c2VyX2lkXTtcbiAgICAgICAgICAgIHRoaXMuY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtYmVyO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLm15SUQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lID0gbnVsbDtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC50c1xudmFyIF9fYXdhaXRlciA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuXG5cblxuXG5jbGFzcyBwcmVzZW5jZV9jaGFubmVsX1ByZXNlbmNlQ2hhbm5lbCBleHRlbmRzIHByaXZhdGVfY2hhbm5lbF9Qcml2YXRlQ2hhbm5lbCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHB1c2hlcik7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG5ldyBtZW1iZXJzX01lbWJlcnMoKTtcbiAgICB9XG4gICAgYXV0aG9yaXplKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlci5hdXRob3JpemUoc29ja2V0SWQsIChlcnJvciwgYXV0aERhdGEpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhdXRoRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICAgIGlmIChhdXRoRGF0YS5jaGFubmVsX2RhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbERhdGEgPSBKU09OLnBhcnNlKGF1dGhEYXRhLmNoYW5uZWxfZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVtYmVycy5zZXRNeUlEKGNoYW5uZWxEYXRhLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5wdXNoZXIudXNlci5zaWduaW5Eb25lUHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaGVyLnVzZXIudXNlcl9kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVtYmVycy5zZXRNeUlEKHRoaXMucHVzaGVyLnVzZXIudXNlcl9kYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2F1dGhvcml6YXRpb25FbmRwb2ludCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBJbnZhbGlkIGF1dGggcmVzcG9uc2UgZm9yIGNoYW5uZWwgJyR7dGhpcy5uYW1lfScsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBleHBlY3RlZCAnY2hhbm5lbF9kYXRhJyBmaWVsZC4gJHtzdWZmaXh9LCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgb3IgdGhlIHVzZXIgc2hvdWxkIGJlIHNpZ25lZCBpbi5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdJbnZhbGlkIGF1dGggcmVzcG9uc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnRlcm5hbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS51c2VyX2lkID0gZXZlbnQudXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVJbnRlcm5hbEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9jb3VudCc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Db3VudEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3B1c2hlcl9pbnRlcm5hbDptZW1iZXJfYWRkZWQnOlxuICAgICAgICAgICAgICAgIHZhciBhZGRlZE1lbWJlciA9IHRoaXMubWVtYmVycy5hZGRNZW1iZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgYWRkZWRNZW1iZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOm1lbWJlcl9yZW1vdmVkJzpcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZE1lbWJlciA9IHRoaXMubWVtYmVycy5yZW1vdmVNZW1iZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRNZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6bWVtYmVyX3JlbW92ZWQnLCByZW1vdmVkTWVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVtYmVycy5vblN1YnNjcmlwdGlvbihldmVudC5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCB0aGlzLm1lbWJlcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycy5yZXNldCgpO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0KCk7XG4gICAgfVxufVxuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvdXRmOC9saWIvdXRmOC5qc1xudmFyIHV0ZjggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvYmFzZTY0L2xpYi9iYXNlNjQuanNcbnZhciBiYXNlNjQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL2VuY3J5cHRlZF9jaGFubmVsLnRzXG5cblxuXG5cblxuY2xhc3MgZW5jcnlwdGVkX2NoYW5uZWxfRW5jcnlwdGVkQ2hhbm5lbCBleHRlbmRzIHByaXZhdGVfY2hhbm5lbF9Qcml2YXRlQ2hhbm5lbCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyLCBuYWNsKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHB1c2hlcik7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYWNsID0gbmFjbDtcbiAgICB9XG4gICAgYXV0aG9yaXplKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlci5hdXRob3JpemUoc29ja2V0SWQsIChlcnJvciwgYXV0aERhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNoYXJlZFNlY3JldCA9IGF1dGhEYXRhWydzaGFyZWRfc2VjcmV0J107XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFNlY3JldCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihgTm8gc2hhcmVkX3NlY3JldCBrZXkgaW4gYXV0aCBwYXlsb2FkIGZvciBlbmNyeXB0ZWQgY2hhbm5lbDogJHt0aGlzLm5hbWV9YCksIG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMua2V5ID0gT2JqZWN0KGJhc2U2NFtcImRlY29kZVwiXSkoc2hhcmVkU2VjcmV0KTtcbiAgICAgICAgICAgIGRlbGV0ZSBhdXRoRGF0YVsnc2hhcmVkX3NlY3JldCddO1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgYXV0aERhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdHJpZ2dlcihldmVudCwgZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRGZWF0dXJlKCdDbGllbnQgZXZlbnRzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBmb3IgZW5jcnlwdGVkIGNoYW5uZWxzJyk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMCB8fFxuICAgICAgICAgICAgZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcjonKSA9PT0gMCkge1xuICAgICAgICAgICAgc3VwZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlRW5jcnlwdGVkRXZlbnQoZXZlbnROYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgaGFuZGxlRW5jcnlwdGVkRXZlbnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBlbmNyeXB0ZWQgZXZlbnQgYmVmb3JlIGtleSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYXV0aEVuZHBvaW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhLmNpcGhlcnRleHQgfHwgIWRhdGEubm9uY2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignVW5leHBlY3RlZCBmb3JtYXQgZm9yIGVuY3J5cHRlZCBldmVudCwgZXhwZWN0ZWQgb2JqZWN0IHdpdGggYGNpcGhlcnRleHRgIGFuZCBgbm9uY2VgIGZpZWxkcywgZ290OiAnICtcbiAgICAgICAgICAgICAgICBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2lwaGVyVGV4dCA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKGRhdGEuY2lwaGVydGV4dCk7XG4gICAgICAgIGlmIChjaXBoZXJUZXh0Lmxlbmd0aCA8IHRoaXMubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXhwZWN0ZWQgZW5jcnlwdGVkIGV2ZW50IGNpcGhlcnRleHQgbGVuZ3RoIHRvIGJlICR7dGhpcy5uYWNsLnNlY3JldGJveC5vdmVyaGVhZExlbmd0aH0sIGdvdDogJHtjaXBoZXJUZXh0Lmxlbmd0aH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9uY2UgPSBPYmplY3QoYmFzZTY0W1wiZGVjb2RlXCJdKShkYXRhLm5vbmNlKTtcbiAgICAgICAgaWYgKG5vbmNlLmxlbmd0aCA8IHRoaXMubmFjbC5zZWNyZXRib3gubm9uY2VMZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXhwZWN0ZWQgZW5jcnlwdGVkIGV2ZW50IG5vbmNlIGxlbmd0aCB0byBiZSAke3RoaXMubmFjbC5zZWNyZXRib3gubm9uY2VMZW5ndGh9LCBnb3Q6ICR7bm9uY2UubGVuZ3RofWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBieXRlcyA9IHRoaXMubmFjbC5zZWNyZXRib3gub3BlbihjaXBoZXJUZXh0LCBub25jZSwgdGhpcy5rZXkpO1xuICAgICAgICBpZiAoYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGRlY3J5cHQgYW4gZXZlbnQsIHByb2JhYmx5IGJlY2F1c2UgaXQgd2FzIGVuY3J5cHRlZCB3aXRoIGEgZGlmZmVyZW50IGtleS4gRmV0Y2hpbmcgYSBuZXcga2V5IGZyb20gdGhlIGF1dGhFbmRwb2ludC4uLicpO1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpemUodGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWQsIChlcnJvciwgYXV0aERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGF1dGhFbmRwb2ludDogJHthdXRoRGF0YX0uIFVuYWJsZSB0byBmZXRjaCBuZXcga2V5LCBzbyBkcm9wcGluZyBlbmNyeXB0ZWQgZXZlbnRgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBieXRlcyA9IHRoaXMubmFjbC5zZWNyZXRib3gub3BlbihjaXBoZXJUZXh0LCBub25jZSwgdGhpcy5rZXkpO1xuICAgICAgICAgICAgICAgIGlmIChieXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBkZWNyeXB0IGV2ZW50IHdpdGggbmV3IGtleS4gRHJvcHBpbmcgZW5jcnlwdGVkIGV2ZW50YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCB0aGlzLmdldERhdGFUb0VtaXQoYnl0ZXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIHRoaXMuZ2V0RGF0YVRvRW1pdChieXRlcykpO1xuICAgIH1cbiAgICBnZXREYXRhVG9FbWl0KGJ5dGVzKSB7XG4gICAgICAgIGxldCByYXcgPSBPYmplY3QodXRmOFtcImRlY29kZVwiXSkoYnl0ZXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiByYXc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9jb25uZWN0aW9uX21hbmFnZXIudHNcblxuXG5cblxuXG5jbGFzcyBjb25uZWN0aW9uX21hbmFnZXJfQ29ubmVjdGlvbk1hbmFnZXIgZXh0ZW5kcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKGtleSwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLm9wdGlvbnMudGltZWxpbmU7XG4gICAgICAgIHRoaXMudXNpbmdUTFMgPSB0aGlzLm9wdGlvbnMudXNlVExTO1xuICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2tzID0gdGhpcy5idWlsZEVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcyA9IHRoaXMuYnVpbGRDb25uZWN0aW9uQ2FsbGJhY2tzKHRoaXMuZXJyb3JDYWxsYmFja3MpO1xuICAgICAgICB0aGlzLmhhbmRzaGFrZUNhbGxiYWNrcyA9IHRoaXMuYnVpbGRIYW5kc2hha2VDYWxsYmFja3ModGhpcy5lcnJvckNhbGxiYWNrcyk7XG4gICAgICAgIHZhciBOZXR3b3JrID0gcnVudGltZS5nZXROZXR3b3JrKCk7XG4gICAgICAgIE5ldHdvcmsuYmluZCgnb25saW5lJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogJ29ubGluZScgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RpbmcnIHx8IHRoaXMuc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBOZXR3b3JrLmJpbmQoJ29mZmxpbmUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBuZXRpbmZvOiAnb2ZmbGluZScgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHJhdGVneSgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uIHx8IHRoaXMucnVubmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2ZhaWxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2Nvbm5lY3RpbmcnKTtcbiAgICAgICAgdGhpcy5zdGFydENvbm5lY3RpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRVbmF2YWlsYWJsZVRpbWVyKCk7XG4gICAgfVxuICAgIHNlbmQoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VuZF9ldmVudChuYW1lLCBkYXRhLCBjaGFubmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChuYW1lLCBkYXRhLCBjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RJbnRlcm5hbGx5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgIH1cbiAgICBpc1VzaW5nVExTKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2luZ1RMUztcbiAgICB9XG4gICAgc3RhcnRDb25uZWN0aW5nKCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoZXJyb3IsIGhhbmRzaGFrZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uZXIgPSB0aGlzLnN0cmF0ZWd5LmNvbm5lY3QoMCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRzaGFrZS5hY3Rpb24gPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdIYW5kc2hha2VFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogaGFuZHNoYWtlLmVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmVycm9yKHsgaGFuZHNoYWtlRXJyb3I6IGhhbmRzaGFrZS5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRDb25uZWN0aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZHNoYWtlQ2FsbGJhY2tzW2hhbmRzaGFrZS5hY3Rpb25dKGhhbmRzaGFrZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGFib3J0Q29ubmVjdGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgdGhpcy5ydW5uZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RJbnRlcm5hbGx5KCkge1xuICAgICAgICB0aGlzLmFib3J0Q29ubmVjdGluZygpO1xuICAgICAgICB0aGlzLmNsZWFyUmV0cnlUaW1lcigpO1xuICAgICAgICB0aGlzLmNsZWFyVW5hdmFpbGFibGVUaW1lcigpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTdHJhdGVneSgpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMub3B0aW9ucy5nZXRTdHJhdGVneSh7XG4gICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMudGltZWxpbmUsXG4gICAgICAgICAgICB1c2VUTFM6IHRoaXMudXNpbmdUTFNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHJ5SW4oZGVsYXkpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgYWN0aW9uOiAncmV0cnknLCBkZWxheTogZGVsYXkgfSk7XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdGluZ19pbicsIE1hdGgucm91bmQoZGVsYXkgLyAxMDAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXRyeVRpbWVyID0gbmV3IHRpbWVyc19PbmVPZmZUaW1lcihkZWxheSB8fCAwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RJbnRlcm5hbGx5KCk7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUmV0cnlUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmV0cnlUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5yZXRyeVRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VW5hdmFpbGFibGVUaW1lcigpIHtcbiAgICAgICAgdGhpcy51bmF2YWlsYWJsZVRpbWVyID0gbmV3IHRpbWVyc19PbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMudW5hdmFpbGFibGVUaW1lb3V0LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJVbmF2YWlsYWJsZVRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy51bmF2YWlsYWJsZVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnVuYXZhaWxhYmxlVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbmRBY3Rpdml0eUNoZWNrKCkge1xuICAgICAgICB0aGlzLnN0b3BBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5waW5nKCk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lciA9IG5ldyB0aW1lcnNfT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLnBvbmdUaW1lb3V0LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmVycm9yKHsgcG9uZ190aW1lZF9vdXQ6IHRoaXMub3B0aW9ucy5wb25nVGltZW91dCB9KTtcbiAgICAgICAgICAgIHRoaXMucmV0cnlJbigwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc2V0QWN0aXZpdHlDaGVjaygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uICYmICF0aGlzLmNvbm5lY3Rpb24uaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lciA9IG5ldyB0aW1lcnNfT25lT2ZmVGltZXIodGhpcy5hY3Rpdml0eVRpbWVvdXQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wQWN0aXZpdHlDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHlUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZENvbm5lY3Rpb25DYWxsYmFja3MoZXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZXJyb3JDYWxsYmFja3MsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZF9ldmVudCgncHVzaGVyOnBvbmcnLCB7fSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZpdHk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZWQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFiYW5kb25Db25uZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmV0cnkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHJ5SW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYnVpbGRIYW5kc2hha2VDYWxsYmFja3MoZXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZXJyb3JDYWxsYmFja3MsIHtcbiAgICAgICAgICAgIGNvbm5lY3RlZDogKGhhbmRzaGFrZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lb3V0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmFjdGl2aXR5VGltZW91dCwgaGFuZHNoYWtlLmFjdGl2aXR5VGltZW91dCwgaGFuZHNoYWtlLmNvbm5lY3Rpb24uYWN0aXZpdHlUaW1lb3V0IHx8IEluZmluaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyVW5hdmFpbGFibGVUaW1lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29ubmVjdGlvbihoYW5kc2hha2UuY29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXRfaWQgPSB0aGlzLmNvbm5lY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnY29ubmVjdGVkJywgeyBzb2NrZXRfaWQ6IHRoaXMuc29ja2V0X2lkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYnVpbGRFcnJvckNhbGxiYWNrcygpIHtcbiAgICAgICAgbGV0IHdpdGhFcnJvckVtaXR0ZWQgPSBjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0bHNfb25seTogd2l0aEVycm9yRW1pdHRlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2luZ1RMUyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJhdGVneSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmV0cnlJbigwKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVmdXNlZDogd2l0aEVycm9yRW1pdHRlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGJhY2tvZmY6IHdpdGhFcnJvckVtaXR0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmV0cnlJbigxMDAwKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmV0cnk6IHdpdGhFcnJvckVtaXR0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmV0cnlJbigwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNldENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKGV2ZW50LCB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3NbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgIH1cbiAgICBhYmFuZG9uQ29ubmVjdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgIGZvciAodmFyIGV2ZW50IGluIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnVuYmluZChldmVudCwgdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSwgZGF0YSkge1xuICAgICAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGVEZXNjcmlwdGlvbiA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlRGVzY3JpcHRpb24gPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGVEZXNjcmlwdGlvbiArPSAnIHdpdGggbmV3IHNvY2tldCBJRCAnICsgZGF0YS5zb2NrZXRfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1N0YXRlIGNoYW5nZWQnLCBwcmV2aW91c1N0YXRlICsgJyAtPiAnICsgbmV3U3RhdGVEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBzdGF0ZTogbmV3U3RhdGUsIHBhcmFtczogZGF0YSB9KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhdGVfY2hhbmdlJywgeyBwcmV2aW91czogcHJldmlvdXNTdGF0ZSwgY3VycmVudDogbmV3U3RhdGUgfSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQobmV3U3RhdGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZFJldHJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RpbmcnIHx8IHRoaXMuc3RhdGUgPT09ICdjb25uZWN0ZWQnO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9jaGFubmVscy50c1xuXG5cblxuXG5jbGFzcyBjaGFubmVsc19DaGFubmVscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG4gICAgYWRkKG5hbWUsIHB1c2hlcikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICAgIGFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyh0aGlzLmNoYW5uZWxzKTtcbiAgICB9XG4gICAgZmluZChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICByZXR1cm4gY2hhbm5lbDtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgb2JqZWN0QXBwbHkodGhpcy5jaGFubmVscywgZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtZW5jcnlwdGVkLScpID09PSAwKSB7XG4gICAgICAgIGlmIChwdXNoZXIuY29uZmlnLm5hY2wpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZUVuY3J5cHRlZENoYW5uZWwobmFtZSwgcHVzaGVyLCBwdXNoZXIuY29uZmlnLm5hY2wpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJNc2cgPSAnVHJpZWQgdG8gc3Vic2NyaWJlIHRvIGEgcHJpdmF0ZS1lbmNyeXB0ZWQtIGNoYW5uZWwgYnV0IG5vIG5hY2wgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlJztcbiAgICAgICAgbGV0IHN1ZmZpeCA9IHVybF9zdG9yZS5idWlsZExvZ1N1ZmZpeCgnZW5jcnlwdGVkQ2hhbm5lbFN1cHBvcnQnKTtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkRmVhdHVyZShgJHtlcnJNc2d9LiAke3N1ZmZpeH1gKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZVByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBCYWRDaGFubmVsTmFtZSgnQ2Fubm90IGNyZWF0ZSBhIGNoYW5uZWwgd2l0aCBuYW1lIFwiJyArIG5hbWUgKyAnXCIuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL2ZhY3RvcnkudHNcblxuXG5cblxuXG5cblxuXG5cbnZhciBGYWN0b3J5ID0ge1xuICAgIGNyZWF0ZUNoYW5uZWxzKCkge1xuICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxzX0NoYW5uZWxzKCk7XG4gICAgfSxcbiAgICBjcmVhdGVDb25uZWN0aW9uTWFuYWdlcihrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjb25uZWN0aW9uX21hbmFnZXJfQ29ubmVjdGlvbk1hbmFnZXIoa2V5LCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2hhbm5lbF9DaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBwcml2YXRlX2NoYW5uZWxfUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9LFxuICAgIGNyZWF0ZVByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBwcmVzZW5jZV9jaGFubmVsX1ByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH0sXG4gICAgY3JlYXRlRW5jcnlwdGVkQ2hhbm5lbChuYW1lLCBwdXNoZXIsIG5hY2wpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlbmNyeXB0ZWRfY2hhbm5lbF9FbmNyeXB0ZWRDaGFubmVsKG5hbWUsIHB1c2hlciwgbmFjbCk7XG4gICAgfSxcbiAgICBjcmVhdGVUaW1lbGluZVNlbmRlcih0aW1lbGluZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IHRpbWVsaW5lX3NlbmRlcl9UaW1lbGluZVNlbmRlcih0aW1lbGluZSwgb3B0aW9ucyk7XG4gICAgfSxcbiAgICBjcmVhdGVIYW5kc2hha2UodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IGhhbmRzaGFrZV9IYW5kc2hha2UodHJhbnNwb3J0LCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjcmVhdGVBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcl9Bc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZmFjdG9yeSA9IChGYWN0b3J5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydF9tYW5hZ2VyLnRzXG5cbmNsYXNzIHRyYW5zcG9ydF9tYW5hZ2VyX1RyYW5zcG9ydE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5saXZlc0xlZnQgPSB0aGlzLm9wdGlvbnMubGl2ZXMgfHwgSW5maW5pdHk7XG4gICAgfVxuICAgIGdldEFzc2lzdGFudCh0cmFuc3BvcnQpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKHRoaXMsIHRyYW5zcG9ydCwge1xuICAgICAgICAgICAgbWluUGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWluUGluZ0RlbGF5LFxuICAgICAgICAgICAgbWF4UGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWF4UGluZ0RlbGF5XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0FsaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXZlc0xlZnQgPiAwO1xuICAgIH1cbiAgICByZXBvcnREZWF0aCgpIHtcbiAgICAgICAgdGhpcy5saXZlc0xlZnQgLT0gMTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9zZXF1ZW50aWFsX3N0cmF0ZWd5LnRzXG5cblxuXG5jbGFzcyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ2llcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuICAgICAgICB0aGlzLmxvb3AgPSBCb29sZWFuKG9wdGlvbnMubG9vcCk7XG4gICAgICAgIHRoaXMuZmFpbEZhc3QgPSBCb29sZWFuKG9wdGlvbnMuZmFpbEZhc3QpO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICAgIHRoaXMudGltZW91dExpbWl0ID0gb3B0aW9ucy50aW1lb3V0TGltaXQ7XG4gICAgfVxuICAgIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gYW55KHRoaXMuc3RyYXRlZ2llcywgdXRpbC5tZXRob2QoJ2lzU3VwcG9ydGVkJykpO1xuICAgIH1cbiAgICBjb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IHRoaXMuc3RyYXRlZ2llcztcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICB2YXIgdGltZW91dCA9IHRoaXMudGltZW91dDtcbiAgICAgICAgdmFyIHJ1bm5lciA9IG51bGw7XG4gICAgICAgIHZhciB0cnlOZXh0U3RyYXRlZ3kgPSAoZXJyb3IsIGhhbmRzaGFrZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCAlIHN0cmF0ZWdpZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA8IHN0cmF0ZWdpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdGltZW91dCAqIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gTWF0aC5taW4odGltZW91dCwgdGhpcy50aW1lb3V0TGltaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lciA9IHRoaXMudHJ5U3RyYXRlZ3koc3RyYXRlZ2llc1tjdXJyZW50XSwgbWluUHJpb3JpdHksIHsgdGltZW91dCwgZmFpbEZhc3Q6IHRoaXMuZmFpbEZhc3QgfSwgdHJ5TmV4dFN0cmF0ZWd5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcnVubmVyID0gdGhpcy50cnlTdHJhdGVneShzdHJhdGVnaWVzW2N1cnJlbnRdLCBtaW5Qcmlvcml0eSwgeyB0aW1lb3V0OiB0aW1lb3V0LCBmYWlsRmFzdDogdGhpcy5mYWlsRmFzdCB9LCB0cnlOZXh0U3RyYXRlZ3kpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJ5U3RyYXRlZ3koc3RyYXRlZ3ksIG1pblByaW9yaXR5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICB2YXIgcnVubmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHRpbWVyID0gbmV3IHRpbWVyc19PbmVPZmZUaW1lcihvcHRpb25zLnRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJ1bm5lciA9IHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgdGltZXIgJiYgdGltZXIuaXNSdW5uaW5nKCkgJiYgIW9wdGlvbnMuZmFpbEZhc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgaGFuZHNoYWtlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgICAgICAgICB0aW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneS50c1xuXG5cbmNsYXNzIGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ2llcykge1xuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGFueSh0aGlzLnN0cmF0ZWdpZXMsIHV0aWwubWV0aG9kKCdpc1N1cHBvcnRlZCcpKTtcbiAgICB9XG4gICAgY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3QodGhpcy5zdHJhdGVnaWVzLCBtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGksIHJ1bm5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIHJ1bm5lcnNbaV0uZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFJ1bm5lcnNGYWlsZWQocnVubmVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShoYW5kc2hha2UudHJhbnNwb3J0LnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29ubmVjdChzdHJhdGVnaWVzLCBtaW5Qcmlvcml0eSwgY2FsbGJhY2tCdWlsZGVyKSB7XG4gICAgdmFyIHJ1bm5lcnMgPSBtYXAoc3RyYXRlZ2llcywgZnVuY3Rpb24gKHN0cmF0ZWd5LCBpLCBfLCBycykge1xuICAgICAgICByZXR1cm4gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2tCdWlsZGVyKGksIHJzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFwcGx5KHJ1bm5lcnMsIGFib3J0UnVubmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIGFwcGx5KHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFsbFJ1bm5lcnNGYWlsZWQocnVubmVycykge1xuICAgIHJldHVybiBjb2xsZWN0aW9uc19hbGwocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihydW5uZXIuZXJyb3IpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYWJvcnRSdW5uZXIocnVubmVyKSB7XG4gICAgaWYgKCFydW5uZXIuZXJyb3IgJiYgIXJ1bm5lci5hYm9ydGVkKSB7XG4gICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICBydW5uZXIuYWJvcnRlZCA9IHRydWU7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvd2Vic29ja2V0X3ByaW9yaXRpemVkX2NhY2hlZF9zdHJhdGVneS50c1xuXG5cblxuXG5jbGFzcyB3ZWJzb2NrZXRfcHJpb3JpdGl6ZWRfY2FjaGVkX3N0cmF0ZWd5X1dlYlNvY2tldFByaW9yaXRpemVkQ2FjaGVkU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5LCB0cmFuc3BvcnRzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnRzID0gdHJhbnNwb3J0cztcbiAgICAgICAgdGhpcy50dGwgPSBvcHRpb25zLnR0bCB8fCAxODAwICogMTAwMDtcbiAgICAgICAgdGhpcy51c2luZ1RMUyA9IG9wdGlvbnMudXNlVExTO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gb3B0aW9ucy50aW1lbGluZTtcbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfVxuICAgIGNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB1c2luZ1RMUyA9IHRoaXMudXNpbmdUTFM7XG4gICAgICAgIHZhciBpbmZvID0gZmV0Y2hUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUyk7XG4gICAgICAgIHZhciBjYWNoZVNraXBDb3VudCA9IGluZm8gJiYgaW5mby5jYWNoZVNraXBDb3VudCA/IGluZm8uY2FjaGVTa2lwQ291bnQgOiAwO1xuICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IFt0aGlzLnN0cmF0ZWd5XTtcbiAgICAgICAgaWYgKGluZm8gJiYgaW5mby50aW1lc3RhbXAgKyB0aGlzLnR0bCA+PSB1dGlsLm5vdygpKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzW2luZm8udHJhbnNwb3J0XTtcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoWyd3cycsICd3c3MnXS5pbmNsdWRlcyhpbmZvLnRyYW5zcG9ydCkgfHwgY2FjaGVTa2lwQ291bnQgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IGluZm8udHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZW5jeTogaW5mby5sYXRlbmN5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdHJhdGVnaWVzLnB1c2gobmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KFt0cmFuc3BvcnRdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBpbmZvLmxhdGVuY3kgKiAyICsgMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxGYXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlU2tpcENvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydFRpbWVzdGFtcCA9IHV0aWwubm93KCk7XG4gICAgICAgIHZhciBydW5uZXIgPSBzdHJhdGVnaWVzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiBjYihlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmbHVzaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyYXRlZ2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wID0gdXRpbC5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ2llcy5wb3AoKS5jb25uZWN0KG1pblByaW9yaXR5LCBjYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RvcmVUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUywgaGFuZHNoYWtlLnRyYW5zcG9ydC5uYW1lLCB1dGlsLm5vdygpIC0gc3RhcnRUaW1lc3RhbXAsIGNhY2hlU2tpcENvdW50KTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBtaW5Qcmlvcml0eSA9IHA7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0VHJhbnNwb3J0Q2FjaGVLZXkodXNpbmdUTFMpIHtcbiAgICByZXR1cm4gJ3B1c2hlclRyYW5zcG9ydCcgKyAodXNpbmdUTFMgPyAnVExTJyA6ICdOb25UTFMnKTtcbn1cbmZ1bmN0aW9uIGZldGNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2FjaGUgPSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV07XG4gICAgICAgICAgICBpZiAoc2VyaWFsaXplZENhY2hlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZENhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZmx1c2hUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzdG9yZVRyYW5zcG9ydENhY2hlKHVzaW5nVExTLCB0cmFuc3BvcnQsIGxhdGVuY3ksIGNhY2hlU2tpcENvdW50KSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV0gPSBzYWZlSlNPTlN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB1dGlsLm5vdygpLFxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogdHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgIGxhdGVuY3k6IGxhdGVuY3ksXG4gICAgICAgICAgICAgICAgY2FjaGVTa2lwQ291bnQ6IGNhY2hlU2tpcENvdW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZmx1c2hUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUykge1xuICAgIHZhciBzdG9yYWdlID0gcnVudGltZS5nZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JhZ2VbZ2V0VHJhbnNwb3J0Q2FjaGVLZXkodXNpbmdUTFMpXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZGVsYXllZF9zdHJhdGVneS50c1xuXG5jbGFzcyBkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ3ksIHsgZGVsYXk6IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0geyBkZWxheTogbnVtYmVyIH07XG4gICAgfVxuICAgIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgICBjb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3RyYXRlZ3kgPSB0aGlzLnN0cmF0ZWd5O1xuICAgICAgICB2YXIgcnVubmVyO1xuICAgICAgICB2YXIgdGltZXIgPSBuZXcgdGltZXJzX09uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5kZWxheSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2lmX3N0cmF0ZWd5LnRzXG5jbGFzcyBJZlN0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCB0cnVlQnJhbmNoLCBmYWxzZUJyYW5jaCkge1xuICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgICAgICB0aGlzLnRydWVCcmFuY2ggPSB0cnVlQnJhbmNoO1xuICAgICAgICB0aGlzLmZhbHNlQnJhbmNoID0gZmFsc2VCcmFuY2g7XG4gICAgfVxuICAgIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuICAgICAgICByZXR1cm4gYnJhbmNoLmlzU3VwcG9ydGVkKCk7XG4gICAgfVxuICAgIGNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBicmFuY2ggPSB0aGlzLnRlc3QoKSA/IHRoaXMudHJ1ZUJyYW5jaCA6IHRoaXMuZmFsc2VCcmFuY2g7XG4gICAgICAgIHJldHVybiBicmFuY2guY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2ZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneS50c1xuY2xhc3MgRmlyc3RDb25uZWN0ZWRTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9XG4gICAgY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kZWZhdWx0X3N0cmF0ZWd5LnRzXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbn1cbnZhciBnZXREZWZhdWx0U3RyYXRlZ3kgPSBmdW5jdGlvbiAoY29uZmlnLCBiYXNlT3B0aW9ucywgZGVmaW5lVHJhbnNwb3J0KSB7XG4gICAgdmFyIGRlZmluZWRUcmFuc3BvcnRzID0ge307XG4gICAgZnVuY3Rpb24gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3kobmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpIHtcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydChjb25maWcsIG5hbWUsIHR5cGUsIHByaW9yaXR5LCBvcHRpb25zLCBtYW5hZ2VyKTtcbiAgICAgICAgZGVmaW5lZFRyYW5zcG9ydHNbbmFtZV0gPSB0cmFuc3BvcnQ7XG4gICAgICAgIHJldHVybiB0cmFuc3BvcnQ7XG4gICAgfVxuICAgIHZhciB3c19vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZU9wdGlvbnMsIHtcbiAgICAgICAgaG9zdE5vblRMUzogY29uZmlnLndzSG9zdCArICc6JyArIGNvbmZpZy53c1BvcnQsXG4gICAgICAgIGhvc3RUTFM6IGNvbmZpZy53c0hvc3QgKyAnOicgKyBjb25maWcud3NzUG9ydCxcbiAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy53c1BhdGhcbiAgICB9KTtcbiAgICB2YXIgd3NzX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB3c19vcHRpb25zLCB7XG4gICAgICAgIHVzZVRMUzogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBzb2NranNfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VPcHRpb25zLCB7XG4gICAgICAgIGhvc3ROb25UTFM6IGNvbmZpZy5odHRwSG9zdCArICc6JyArIGNvbmZpZy5odHRwUG9ydCxcbiAgICAgICAgaG9zdFRMUzogY29uZmlnLmh0dHBIb3N0ICsgJzonICsgY29uZmlnLmh0dHBzUG9ydCxcbiAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy5odHRwUGF0aFxuICAgIH0pO1xuICAgIHZhciB0aW1lb3V0cyA9IHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgdGltZW91dDogMTUwMDAsXG4gICAgICAgIHRpbWVvdXRMaW1pdDogNjAwMDBcbiAgICB9O1xuICAgIHZhciB3c19tYW5hZ2VyID0gbmV3IHRyYW5zcG9ydF9tYW5hZ2VyX1RyYW5zcG9ydE1hbmFnZXIoe1xuICAgICAgICBtaW5QaW5nRGVsYXk6IDEwMDAwLFxuICAgICAgICBtYXhQaW5nRGVsYXk6IGNvbmZpZy5hY3Rpdml0eVRpbWVvdXRcbiAgICB9KTtcbiAgICB2YXIgc3RyZWFtaW5nX21hbmFnZXIgPSBuZXcgdHJhbnNwb3J0X21hbmFnZXJfVHJhbnNwb3J0TWFuYWdlcih7XG4gICAgICAgIGxpdmVzOiAyLFxuICAgICAgICBtaW5QaW5nRGVsYXk6IDEwMDAwLFxuICAgICAgICBtYXhQaW5nRGVsYXk6IGNvbmZpZy5hY3Rpdml0eVRpbWVvdXRcbiAgICB9KTtcbiAgICB2YXIgd3NfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3dzJywgJ3dzJywgMywgd3Nfb3B0aW9ucywgd3NfbWFuYWdlcik7XG4gICAgdmFyIHdzc190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnd3NzJywgJ3dzJywgMywgd3NzX29wdGlvbnMsIHdzX21hbmFnZXIpO1xuICAgIHZhciBzb2NranNfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3NvY2tqcycsICdzb2NranMnLCAxLCBzb2NranNfb3B0aW9ucyk7XG4gICAgdmFyIHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hocl9zdHJlYW1pbmcnLCAneGhyX3N0cmVhbWluZycsIDEsIHNvY2tqc19vcHRpb25zLCBzdHJlYW1pbmdfbWFuYWdlcik7XG4gICAgdmFyIHhkcl9zdHJlYW1pbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hkcl9zdHJlYW1pbmcnLCAneGRyX3N0cmVhbWluZycsIDEsIHNvY2tqc19vcHRpb25zLCBzdHJlYW1pbmdfbWFuYWdlcik7XG4gICAgdmFyIHhocl9wb2xsaW5nX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd4aHJfcG9sbGluZycsICd4aHJfcG9sbGluZycsIDEsIHNvY2tqc19vcHRpb25zKTtcbiAgICB2YXIgeGRyX3BvbGxpbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hkcl9wb2xsaW5nJywgJ3hkcl9wb2xsaW5nJywgMSwgc29ja2pzX29wdGlvbnMpO1xuICAgIHZhciB3c19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KFt3c190cmFuc3BvcnRdLCB0aW1lb3V0cyk7XG4gICAgdmFyIHdzc19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KFt3c3NfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciBzb2NranNfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneShbc29ja2pzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgc3RyZWFtaW5nX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneV9TZXF1ZW50aWFsU3RyYXRlZ3koW1xuICAgICAgICBuZXcgSWZTdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh4aHJfc3RyZWFtaW5nX3RyYW5zcG9ydCksIHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0LCB4ZHJfc3RyZWFtaW5nX3RyYW5zcG9ydClcbiAgICBdLCB0aW1lb3V0cyk7XG4gICAgdmFyIHBvbGxpbmdfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneShbXG4gICAgICAgIG5ldyBJZlN0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHhocl9wb2xsaW5nX3RyYW5zcG9ydCksIHhocl9wb2xsaW5nX3RyYW5zcG9ydCwgeGRyX3BvbGxpbmdfdHJhbnNwb3J0KVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgaHR0cF9sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KFtcbiAgICAgICAgbmV3IElmU3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koc3RyZWFtaW5nX2xvb3ApLCBuZXcgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneV9CZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KFtcbiAgICAgICAgICAgIHN0cmVhbWluZ19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5KHBvbGxpbmdfbG9vcCwgeyBkZWxheTogNDAwMCB9KVxuICAgICAgICBdKSwgcG9sbGluZ19sb29wKVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgaHR0cF9mYWxsYmFja19sb29wID0gbmV3IElmU3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koaHR0cF9sb29wKSwgaHR0cF9sb29wLCBzb2NranNfbG9vcCk7XG4gICAgdmFyIHdzU3RyYXRlZ3k7XG4gICAgaWYgKGJhc2VPcHRpb25zLnVzZVRMUykge1xuICAgICAgICB3c1N0cmF0ZWd5ID0gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneShbXG4gICAgICAgICAgICB3c19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5KGh0dHBfZmFsbGJhY2tfbG9vcCwgeyBkZWxheTogMjAwMCB9KVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdzU3RyYXRlZ3kgPSBuZXcgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneV9CZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KFtcbiAgICAgICAgICAgIHdzX2xvb3AsXG4gICAgICAgICAgICBuZXcgZGVsYXllZF9zdHJhdGVneV9EZWxheWVkU3RyYXRlZ3kod3NzX2xvb3AsIHsgZGVsYXk6IDIwMDAgfSksXG4gICAgICAgICAgICBuZXcgZGVsYXllZF9zdHJhdGVneV9EZWxheWVkU3RyYXRlZ3koaHR0cF9mYWxsYmFja19sb29wLCB7IGRlbGF5OiA1MDAwIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHdlYnNvY2tldF9wcmlvcml0aXplZF9jYWNoZWRfc3RyYXRlZ3lfV2ViU29ja2V0UHJpb3JpdGl6ZWRDYWNoZWRTdHJhdGVneShuZXcgRmlyc3RDb25uZWN0ZWRTdHJhdGVneShuZXcgSWZTdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh3c190cmFuc3BvcnQpLCB3c1N0cmF0ZWd5LCBodHRwX2ZhbGxiYWNrX2xvb3ApKSwgZGVmaW5lZFRyYW5zcG9ydHMsIHtcbiAgICAgICAgdHRsOiAxODAwMDAwLFxuICAgICAgICB0aW1lbGluZTogYmFzZU9wdGlvbnMudGltZWxpbmUsXG4gICAgICAgIHVzZVRMUzogYmFzZU9wdGlvbnMudXNlVExTXG4gICAgfSk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVmYXVsdF9zdHJhdGVneSA9IChnZXREZWZhdWx0U3RyYXRlZ3kpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdHJhbnNwb3J0cy90cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplci50c1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudGltZWxpbmUuaW5mbyhzZWxmLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHtcbiAgICAgICAgdHJhbnNwb3J0OiBzZWxmLm5hbWUgKyAoc2VsZi5vcHRpb25zLnVzZVRMUyA/ICdzJyA6ICcnKVxuICAgIH0pKTtcbiAgICBpZiAoc2VsZi5ob29rcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZi5ob29rcy5maWxlKSB7XG4gICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemluZycpO1xuICAgICAgICBEZXBlbmRlbmNpZXMubG9hZChzZWxmLmhvb2tzLmZpbGUsIHsgdXNlVExTOiBzZWxmLm9wdGlvbnMudXNlVExTIH0sIGZ1bmN0aW9uIChlcnJvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgIH1cbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvaHR0cC9odHRwX3hkb21haW5fcmVxdWVzdC50c1xuXG52YXIgaHR0cF94ZG9tYWluX3JlcXVlc3RfaG9va3MgPSB7XG4gICAgZ2V0UmVxdWVzdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgeGRyID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgbmV3IFJlcXVlc3RUaW1lZE91dCgpKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICB4ZHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4ZHIucmVzcG9uc2VUZXh0ICYmIHhkci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGRyLnJlc3BvbnNlVGV4dCAmJiB4ZHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuaygyMDAsIHhkci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2ZpbmlzaGVkJywgMjAwKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geGRyO1xuICAgIH0sXG4gICAgYWJvcnRSZXF1ZXN0OiBmdW5jdGlvbiAoeGRyKSB7XG4gICAgICAgIHhkci5vbnRpbWVvdXQgPSB4ZHIub25lcnJvciA9IHhkci5vbnByb2dyZXNzID0geGRyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIHhkci5hYm9ydCgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3hkb21haW5fcmVxdWVzdCA9IChodHRwX3hkb21haW5fcmVxdWVzdF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3JlcXVlc3QudHNcblxuXG5jb25zdCBNQVhfQlVGRkVSX0xFTkdUSCA9IDI1NiAqIDEwMjQ7XG5jbGFzcyBodHRwX3JlcXVlc3RfSFRUUFJlcXVlc3QgZXh0ZW5kcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKGhvb2tzLCBtZXRob2QsIHVybCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG4gICAgc3RhcnQocGF5bG9hZCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy54aHIgPSB0aGlzLmhvb2tzLmdldFJlcXVlc3QodGhpcyk7XG4gICAgICAgIHRoaXMudW5sb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJ1bnRpbWUuYWRkVW5sb2FkTGlzdGVuZXIodGhpcy51bmxvYWRlcik7XG4gICAgICAgIHRoaXMueGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54aHIuc2VuZChwYXlsb2FkKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnVubG9hZGVyKSB7XG4gICAgICAgICAgICBydW50aW1lLnJlbW92ZVVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuICAgICAgICAgICAgdGhpcy51bmxvYWRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLmFib3J0UmVxdWVzdCh0aGlzLnhocik7XG4gICAgICAgICAgICB0aGlzLnhociA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaHVuayhzdGF0dXMsIGRhdGEpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBjaHVuayA9IHRoaXMuYWR2YW5jZUJ1ZmZlcihkYXRhKTtcbiAgICAgICAgICAgIGlmIChjaHVuaykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2h1bmsnLCB7IHN0YXR1czogc3RhdHVzLCBkYXRhOiBjaHVuayB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQnVmZmVyVG9vTG9uZyhkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdidWZmZXJfdG9vX2xvbmcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZHZhbmNlQnVmZmVyKGJ1ZmZlcikge1xuICAgICAgICB2YXIgdW5yZWFkRGF0YSA9IGJ1ZmZlci5zbGljZSh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIGVuZE9mTGluZVBvc2l0aW9uID0gdW5yZWFkRGF0YS5pbmRleE9mKCdcXG4nKTtcbiAgICAgICAgaWYgKGVuZE9mTGluZVBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiArPSBlbmRPZkxpbmVQb3NpdGlvbiArIDE7XG4gICAgICAgICAgICByZXR1cm4gdW5yZWFkRGF0YS5zbGljZSgwLCBlbmRPZkxpbmVQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0J1ZmZlclRvb0xvbmcoYnVmZmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBidWZmZXIubGVuZ3RoICYmIGJ1ZmZlci5sZW5ndGggPiBNQVhfQlVGRkVSX0xFTkdUSDtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9zdGF0ZS50c1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiQ09OTkVDVElOR1wiXSA9IDBdID0gXCJDT05ORUNUSU5HXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJPUEVOXCJdID0gMV0gPSBcIk9QRU5cIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNMT1NFRFwiXSA9IDNdID0gXCJDTE9TRURcIjtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzdGF0ZSA9IChTdGF0ZSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3NvY2tldC50c1xuXG5cblxudmFyIGF1dG9JbmNyZW1lbnQgPSAxO1xuY2xhc3MgaHR0cF9zb2NrZXRfSFRUUFNvY2tldCB7XG4gICAgY29uc3RydWN0b3IoaG9va3MsIHVybCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHJhbmRvbU51bWJlcigxMDAwKSArICcvJyArIHJhbmRvbVN0cmluZyg4KTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGdldExvY2F0aW9uKHVybCk7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLkNPTk5FQ1RJTkc7XG4gICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuICAgIH1cbiAgICBzZW5kKHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFJhdyhKU09OLnN0cmluZ2lmeShbcGF5bG9hZF0pKTtcbiAgICB9XG4gICAgcGluZygpIHtcbiAgICAgICAgdGhpcy5ob29rcy5zZW5kSGVhcnRiZWF0KHRoaXMpO1xuICAgIH1cbiAgICBjbG9zZShjb2RlLCByZWFzb24pIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKGNvZGUsIHJlYXNvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIHNlbmRSYXcocGF5bG9hZCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJ1bnRpbWUuY3JlYXRlU29ja2V0UmVxdWVzdCgnUE9TVCcsIGdldFVuaXF1ZVVSTChnZXRTZW5kVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKS5zdGFydChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZVN0cmVhbSgpO1xuICAgICAgICB0aGlzLm9wZW5TdHJlYW0oKTtcbiAgICB9XG4gICAgb25DbG9zZShjb2RlLCByZWFzb24sIHdhc0NsZWFuKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gc3RhdGUuQ0xPU0VEO1xuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2xvc2Uoe1xuICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgd2FzQ2xlYW46IHdhc0NsZWFuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNodW5rKGNodW5rKSB7XG4gICAgICAgIGlmIChjaHVuay5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLk9QRU4pIHtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXlsb2FkO1xuICAgICAgICB2YXIgdHlwZSA9IGNodW5rLmRhdGEuc2xpY2UoMCwgMSk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAne30nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbihwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXlsb2FkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FdmVudChwYXlsb2FkW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdudWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50KHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy5vbkhlYXJ0YmVhdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKHBheWxvYWRbMF0sIHBheWxvYWRbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uT3BlbihvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLkNPTk5FQ1RJTkcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmJhc2UgPSByZXBsYWNlSG9zdCh0aGlzLmxvY2F0aW9uLmJhc2UsIG9wdGlvbnMuaG9zdG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gc3RhdGUuT1BFTjtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ub3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoMTAwNiwgJ1NlcnZlciBsb3N0IHNlc3Npb24nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLk9QRU4gJiYgdGhpcy5vbm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25tZXNzYWdlKHsgZGF0YTogZXZlbnQgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25BY3Rpdml0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMub25hY3Rpdml0eSkge1xuICAgICAgICAgICAgdGhpcy5vbmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25FcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5vbmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLm9uZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wZW5TdHJlYW0oKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gcnVudGltZS5jcmVhdGVTb2NrZXRSZXF1ZXN0KCdQT1NUJywgZ2V0VW5pcXVlVVJMKHRoaXMuaG9va3MuZ2V0UmVjZWl2ZVVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2NodW5rJywgY2h1bmsgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNodW5rKGNodW5rKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2ZpbmlzaGVkJywgc3RhdHVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9va3Mub25GaW5pc2hlZCh0aGlzLCBzdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnYnVmZmVyX3Rvb19sb25nJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdXRpbC5kZWZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UoMTAwNiwgJ0NvdWxkIG5vdCBzdGFydCBzdHJlYW1pbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbG9zZVN0cmVhbSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RyZWFtKSB7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbS51bmJpbmRfYWxsKCk7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0TG9jYXRpb24odXJsKSB7XG4gICAgdmFyIHBhcnRzID0gLyhbXlxcP10qKVxcLyooXFw/Py4qKS8uZXhlYyh1cmwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IHBhcnRzWzFdLFxuICAgICAgICBxdWVyeVN0cmluZzogcGFydHNbMl1cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0U2VuZFVSTCh1cmwsIHNlc3Npb24pIHtcbiAgICByZXR1cm4gdXJsLmJhc2UgKyAnLycgKyBzZXNzaW9uICsgJy94aHJfc2VuZCc7XG59XG5mdW5jdGlvbiBnZXRVbmlxdWVVUkwodXJsKSB7XG4gICAgdmFyIHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgIHJldHVybiB1cmwgKyBzZXBhcmF0b3IgKyAndD0nICsgK25ldyBEYXRlKCkgKyAnJm49JyArIGF1dG9JbmNyZW1lbnQrKztcbn1cbmZ1bmN0aW9uIHJlcGxhY2VIb3N0KHVybCwgaG9zdG5hbWUpIHtcbiAgICB2YXIgdXJsUGFydHMgPSAvKGh0dHBzPzpcXC9cXC8pKFteXFwvOl0rKSgoXFwvfDopPy4qKS8uZXhlYyh1cmwpO1xuICAgIHJldHVybiB1cmxQYXJ0c1sxXSArIGhvc3RuYW1lICsgdXJsUGFydHNbM107XG59XG5mdW5jdGlvbiByYW5kb21OdW1iZXIobWF4KSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUucmFuZG9tSW50KG1heCk7XG59XG5mdW5jdGlvbiByYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocmFuZG9tTnVtYmVyKDMyKS50b1N0cmluZygzMikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xufVxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9zb2NrZXQgPSAoaHR0cF9zb2NrZXRfSFRUUFNvY2tldCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3N0cmVhbWluZ19zb2NrZXQudHNcbnZhciBodHRwX3N0cmVhbWluZ19zb2NrZXRfaG9va3MgPSB7XG4gICAgZ2V0UmVjZWl2ZVVSTDogZnVuY3Rpb24gKHVybCwgc2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gdXJsLmJhc2UgKyAnLycgKyBzZXNzaW9uICsgJy94aHJfc3RyZWFtaW5nJyArIHVybC5xdWVyeVN0cmluZztcbiAgICB9LFxuICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5zZW5kUmF3KCdbXScpO1xuICAgIH0sXG4gICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuICAgICAgICBzb2NrZXQub25DbG9zZSgxMDA2LCAnQ29ubmVjdGlvbiBpbnRlcnJ1cHRlZCAoJyArIHN0YXR1cyArICcpJywgZmFsc2UpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3N0cmVhbWluZ19zb2NrZXQgPSAoaHR0cF9zdHJlYW1pbmdfc29ja2V0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9odHRwL2h0dHBfcG9sbGluZ19zb2NrZXQudHNcbnZhciBodHRwX3BvbGxpbmdfc29ja2V0X2hvb2tzID0ge1xuICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyJyArIHVybC5xdWVyeVN0cmluZztcbiAgICB9LFxuICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzZW5kSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5zZW5kUmF3KCdbXScpO1xuICAgIH0sXG4gICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKHNvY2tldCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc29ja2V0LnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgJ0Nvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKCcgKyBzdGF0dXMgKyAnKScsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3BvbGxpbmdfc29ja2V0ID0gKGh0dHBfcG9sbGluZ19zb2NrZXRfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2h0dHAvaHR0cF94aHJfcmVxdWVzdC50c1xuXG52YXIgaHR0cF94aHJfcmVxdWVzdF9ob29rcyA9IHtcbiAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHJ1bnRpbWUuZ2V0WEhSQVBJKCk7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZVRleHQgJiYgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuayh4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2ZpbmlzaGVkJywgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHhocjtcbiAgICB9LFxuICAgIGFib3J0UmVxdWVzdDogZnVuY3Rpb24gKHhocikge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfeGhyX3JlcXVlc3QgPSAoaHR0cF94aHJfcmVxdWVzdF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvaHR0cC9odHRwLnRzXG5cblxuXG5cblxudmFyIEhUVFAgPSB7XG4gICAgY3JlYXRlU3RyZWFtaW5nU29ja2V0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTb2NrZXQoaHR0cF9zdHJlYW1pbmdfc29ja2V0LCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlUG9sbGluZ1NvY2tldCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU29ja2V0KGh0dHBfcG9sbGluZ19zb2NrZXQsIHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVTb2NrZXQoaG9va3MsIHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IGh0dHBfc29ja2V0KGhvb2tzLCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlWEhSKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoaHR0cF94aHJfcmVxdWVzdCwgbWV0aG9kLCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlUmVxdWVzdChob29rcywgbWV0aG9kLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBodHRwX3JlcXVlc3RfSFRUUFJlcXVlc3QoaG9va3MsIG1ldGhvZCwgdXJsKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9odHRwID0gKEhUVFApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvaHR0cC9odHRwLnRzXG5cblxuaHR0cF9odHRwLmNyZWF0ZVhEUiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoaHR0cF94ZG9tYWluX3JlcXVlc3QsIG1ldGhvZCwgdXJsKTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB3ZWJfaHR0cF9odHRwID0gKGh0dHBfaHR0cCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9ydW50aW1lLnRzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgUnVudGltZSA9IHtcbiAgICBuZXh0QXV0aENhbGxiYWNrSUQ6IDEsXG4gICAgYXV0aF9jYWxsYmFja3M6IHt9LFxuICAgIFNjcmlwdFJlY2VpdmVyczogU2NyaXB0UmVjZWl2ZXJzLFxuICAgIERlcGVuZGVuY2llc1JlY2VpdmVyczogRGVwZW5kZW5jaWVzUmVjZWl2ZXJzLFxuICAgIGdldERlZmF1bHRTdHJhdGVneTogZGVmYXVsdF9zdHJhdGVneSxcbiAgICBUcmFuc3BvcnRzOiB0cmFuc3BvcnRzX3RyYW5zcG9ydHMsXG4gICAgdHJhbnNwb3J0Q29ubmVjdGlvbkluaXRpYWxpemVyOiB0cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplcixcbiAgICBIVFRQRmFjdG9yeTogd2ViX2h0dHBfaHR0cCxcbiAgICBUaW1lbGluZVRyYW5zcG9ydDoganNvbnBfdGltZWxpbmUsXG4gICAgZ2V0WEhSQVBJKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xuICAgIH0sXG4gICAgZ2V0V2ViU29ja2V0QVBJKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0O1xuICAgIH0sXG4gICAgc2V0dXAoUHVzaGVyQ2xhc3MpIHtcbiAgICAgICAgd2luZG93LlB1c2hlciA9IFB1c2hlckNsYXNzO1xuICAgICAgICB2YXIgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Qm9keShQdXNoZXJDbGFzcy5yZWFkeSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghd2luZG93LkpTT04pIHtcbiAgICAgICAgICAgIERlcGVuZGVuY2llcy5sb2FkKCdqc29uMicsIHt9LCBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldERvY3VtZW50KCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfSxcbiAgICBnZXRQcm90b2NvbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICB9LFxuICAgIGdldEF1dGhvcml6ZXJzKCkge1xuICAgICAgICByZXR1cm4geyBhamF4OiB4aHJfYXV0aCwganNvbnA6IGpzb25wX2F1dGggfTtcbiAgICB9LFxuICAgIG9uRG9jdW1lbnRCb2R5KGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Qm9keShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IGpzb25wX3JlcXVlc3RfSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSk7XG4gICAgfSxcbiAgICBjcmVhdGVTY3JpcHRSZXF1ZXN0KHNyYykge1xuICAgICAgICByZXR1cm4gbmV3IFNjcmlwdFJlcXVlc3Qoc3JjKTtcbiAgICB9LFxuICAgIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVYSFIoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFhIUkFQSSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWljcm9zb2Z0WEhSKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgfSxcbiAgICBjcmVhdGVNaWNyb3NvZnRYSFIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9LFxuICAgIGdldE5ldHdvcmsoKSB7XG4gICAgICAgIHJldHVybiBuZXRfaW5mb19OZXR3b3JrO1xuICAgIH0sXG4gICAgY3JlYXRlV2ViU29ja2V0KHVybCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFdlYlNvY2tldEFQSSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVTb2NrZXRSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzWEhSU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhIUihtZXRob2QsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1hEUlN1cHBvcnRlZCh1cmwuaW5kZXhPZignaHR0cHM6JykgPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5IVFRQRmFjdG9yeS5jcmVhdGVYRFIobWV0aG9kLCB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0Nyb3NzLW9yaWdpbiBIVFRQIHJlcXVlc3RzIGFyZSBub3Qgc3VwcG9ydGVkJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNYSFJTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0WEhSQVBJKCk7XG4gICAgICAgIHJldHVybiAoQm9vbGVhbihDb25zdHJ1Y3RvcikgJiYgbmV3IENvbnN0cnVjdG9yKCkud2l0aENyZWRlbnRpYWxzICE9PSB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaXNYRFJTdXBwb3J0ZWQodXNlVExTKSB7XG4gICAgICAgIHZhciBwcm90b2NvbCA9IHVzZVRMUyA/ICdodHRwczonIDogJ2h0dHA6JztcbiAgICAgICAgdmFyIGRvY3VtZW50UHJvdG9jb2wgPSB0aGlzLmdldFByb3RvY29sKCk7XG4gICAgICAgIHJldHVybiAoQm9vbGVhbih3aW5kb3dbJ1hEb21haW5SZXF1ZXN0J10pICYmIGRvY3VtZW50UHJvdG9jb2wgPT09IHByb3RvY29sKTtcbiAgICB9LFxuICAgIGFkZFVubG9hZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlVW5sb2FkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5kZXRhY2hFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByYW5kb21JbnQobWF4KSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNyeXB0byA9IHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Wydtc0NyeXB0byddO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbSAvIE1hdGgucG93KDIsIDMyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKCkgKiBtYXgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBydW50aW1lID0gKFJ1bnRpbWUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL2xldmVsLnRzXG52YXIgVGltZWxpbmVMZXZlbDtcbihmdW5jdGlvbiAoVGltZWxpbmVMZXZlbCkge1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkVSUk9SXCJdID0gM10gPSBcIkVSUk9SXCI7XG4gICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiSU5GT1wiXSA9IDZdID0gXCJJTkZPXCI7XG4gICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiREVCVUdcIl0gPSA3XSA9IFwiREVCVUdcIjtcbn0pKFRpbWVsaW5lTGV2ZWwgfHwgKFRpbWVsaW5lTGV2ZWwgPSB7fSkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfbGV2ZWwgPSAoVGltZWxpbmVMZXZlbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdGltZWxpbmUvdGltZWxpbmUudHNcblxuXG5cbmNsYXNzIHRpbWVsaW5lX1RpbWVsaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHNlc3Npb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMuc2VudCA9IDA7XG4gICAgICAgIHRoaXMudW5pcXVlSUQgPSAwO1xuICAgIH1cbiAgICBsb2cobGV2ZWwsIGV2ZW50KSB7XG4gICAgICAgIGlmIChsZXZlbCA8PSB0aGlzLm9wdGlvbnMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXh0ZW5kKHt9LCBldmVudCwgeyB0aW1lc3RhbXA6IHV0aWwubm93KCkgfSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdCAmJiB0aGlzLmV2ZW50cy5sZW5ndGggPiB0aGlzLm9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVycm9yKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKHRpbWVsaW5lX2xldmVsLkVSUk9SLCBldmVudCk7XG4gICAgfVxuICAgIGluZm8oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2codGltZWxpbmVfbGV2ZWwuSU5GTywgZXZlbnQpO1xuICAgIH1cbiAgICBkZWJ1ZyhldmVudCkge1xuICAgICAgICB0aGlzLmxvZyh0aW1lbGluZV9sZXZlbC5ERUJVRywgZXZlbnQpO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudHMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBzZW5kKHNlbmRmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSBleHRlbmQoe1xuICAgICAgICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuICAgICAgICAgICAgYnVuZGxlOiB0aGlzLnNlbnQgKyAxLFxuICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgIGxpYjogJ2pzJyxcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxuICAgICAgICAgICAgY2x1c3RlcjogdGhpcy5vcHRpb25zLmNsdXN0ZXIsXG4gICAgICAgICAgICBmZWF0dXJlczogdGhpcy5vcHRpb25zLmZlYXR1cmVzLFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMuZXZlbnRzXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICBzZW5kZm4oZGF0YSwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdlbmVyYXRlVW5pcXVlSUQoKSB7XG4gICAgICAgIHRoaXMudW5pcXVlSUQrKztcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pcXVlSUQ7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvdHJhbnNwb3J0X3N0cmF0ZWd5LnRzXG5cblxuXG5cbmNsYXNzIHRyYW5zcG9ydF9zdHJhdGVneV9UcmFuc3BvcnRTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmlzU3VwcG9ydGVkKHtcbiAgICAgICAgICAgIHVzZVRMUzogdGhpcy5vcHRpb25zLnVzZVRMU1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWlsQXR0ZW1wdChuZXcgVW5zdXBwb3J0ZWRTdHJhdGVneSgpLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcmlvcml0eSA8IG1pblByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbEF0dGVtcHQobmV3IFRyYW5zcG9ydFByaW9yaXR5VG9vTG93KCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydC5jcmVhdGVDb25uZWN0aW9uKHRoaXMubmFtZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5vcHRpb25zLmtleSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdmFyIGhhbmRzaGFrZSA9IG51bGw7XG4gICAgICAgIHZhciBvbkluaXRpYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnaW5pdGlhbGl6ZWQnLCBvbkluaXRpYWxpemVkKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5jb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYW5kc2hha2UgPSBmYWN0b3J5LmNyZWF0ZUhhbmRzaGFrZSh0cmFuc3BvcnQsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25DbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkVHJhbnNwb3J0O1xuICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zcG9ydCA9IHNhZmVKU09OU3RyaW5naWZ5KHRyYW5zcG9ydCk7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgVHJhbnNwb3J0Q2xvc2VkKHNlcmlhbGl6ZWRUcmFuc3BvcnQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2luaXRpYWxpemVkJywgb25Jbml0aWFsaXplZCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdvcGVuJywgb25PcGVuKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRyYW5zcG9ydC5iaW5kKCdpbml0aWFsaXplZCcsIG9uSW5pdGlhbGl6ZWQpO1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgIHRyYW5zcG9ydC5iaW5kKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICB0cmFuc3BvcnQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kc2hha2UuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBwID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJpb3JpdHkgPCBwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gZmFpbEF0dGVtcHQoZXJyb3IsIGNhbGxiYWNrKSB7XG4gICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAoKSB7IH1cbiAgICB9O1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvc3RyYXRlZ3lfYnVpbGRlci50c1xuXG5cblxuXG5cbmNvbnN0IHsgVHJhbnNwb3J0czogc3RyYXRlZ3lfYnVpbGRlcl9UcmFuc3BvcnRzIH0gPSBydW50aW1lO1xudmFyIHN0cmF0ZWd5X2J1aWxkZXJfZGVmaW5lVHJhbnNwb3J0ID0gZnVuY3Rpb24gKGNvbmZpZywgbmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpIHtcbiAgICB2YXIgdHJhbnNwb3J0Q2xhc3MgPSBzdHJhdGVneV9idWlsZGVyX1RyYW5zcG9ydHNbdHlwZV07XG4gICAgaWYgKCF0cmFuc3BvcnRDbGFzcykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRUcmFuc3BvcnQodHlwZSk7XG4gICAgfVxuICAgIHZhciBlbmFibGVkID0gKCFjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMgfHxcbiAgICAgICAgYXJyYXlJbmRleE9mKGNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cywgbmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAoIWNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMgfHxcbiAgICAgICAgICAgIGFycmF5SW5kZXhPZihjb25maWcuZGlzYWJsZWRUcmFuc3BvcnRzLCBuYW1lKSA9PT0gLTEpO1xuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBpZ25vcmVOdWxsT3JpZ2luOiBjb25maWcuaWdub3JlTnVsbE9yaWdpbiB9LCBvcHRpb25zKTtcbiAgICAgICAgdHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF9zdHJhdGVneV9UcmFuc3BvcnRTdHJhdGVneShuYW1lLCBwcmlvcml0eSwgbWFuYWdlciA/IG1hbmFnZXIuZ2V0QXNzaXN0YW50KHRyYW5zcG9ydENsYXNzKSA6IHRyYW5zcG9ydENsYXNzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyYW5zcG9ydCA9IHN0cmF0ZWd5X2J1aWxkZXJfVW5zdXBwb3J0ZWRTdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9VbnN1cHBvcnRlZFN0cmF0ZWd5ID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIChfLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBVbnN1cHBvcnRlZFN0cmF0ZWd5KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uICgpIHsgfVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvb3B0aW9ucy50c1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgJ1lvdSBtdXN0IHBhc3MgYW4gb3B0aW9ucyBvYmplY3QnO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jbHVzdGVyID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgJ09wdGlvbnMgb2JqZWN0IG11c3QgcHJvdmlkZSBhIGNsdXN0ZXInO1xuICAgIH1cbiAgICBpZiAoJ2Rpc2FibGVTdGF0cycgaW4gb3B0aW9ucykge1xuICAgICAgICBsb2dnZXIud2FybignVGhlIGRpc2FibGVTdGF0cyBvcHRpb24gaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBlbmFibGVTdGF0cycpO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9hdXRoL3VzZXJfYXV0aGVudGljYXRvci50c1xuXG5cbmNvbnN0IGNvbXBvc2VDaGFubmVsUXVlcnkgPSAocGFyYW1zLCBhdXRoT3B0aW9ucykgPT4ge1xuICAgIHZhciBxdWVyeSA9ICdzb2NrZXRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXMuc29ja2V0SWQpO1xuICAgIGZvciAodmFyIGtleSBpbiBhdXRoT3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgcXVlcnkgKz1cbiAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAgICc9JyArXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGF1dGhPcHRpb25zLnBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgaWYgKGF1dGhPcHRpb25zLnBhcmFtc1Byb3ZpZGVyICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGR5bmFtaWNQYXJhbXMgPSBhdXRoT3B0aW9ucy5wYXJhbXNQcm92aWRlcigpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZHluYW1pY1BhcmFtcykge1xuICAgICAgICAgICAgcXVlcnkgKz1cbiAgICAgICAgICAgICAgICAnJicgK1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArXG4gICAgICAgICAgICAgICAgICAgICc9JyArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChkeW5hbWljUGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn07XG5jb25zdCBVc2VyQXV0aGVudGljYXRvciA9IChhdXRoT3B0aW9ucykgPT4ge1xuICAgIGlmICh0eXBlb2YgcnVudGltZS5nZXRBdXRob3JpemVycygpW2F1dGhPcHRpb25zLnRyYW5zcG9ydF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IGAnJHthdXRoT3B0aW9ucy50cmFuc3BvcnR9JyBpcyBub3QgYSByZWNvZ25pemVkIGF1dGggdHJhbnNwb3J0YDtcbiAgICB9XG4gICAgcmV0dXJuIChwYXJhbXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gY29tcG9zZUNoYW5uZWxRdWVyeShwYXJhbXMsIGF1dGhPcHRpb25zKTtcbiAgICAgICAgcnVudGltZS5nZXRBdXRob3JpemVycygpW2F1dGhPcHRpb25zLnRyYW5zcG9ydF0ocnVudGltZSwgcXVlcnksIGF1dGhPcHRpb25zLCBBdXRoUmVxdWVzdFR5cGUuVXNlckF1dGhlbnRpY2F0aW9uLCBjYWxsYmFjayk7XG4gICAgfTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB1c2VyX2F1dGhlbnRpY2F0b3IgPSAoVXNlckF1dGhlbnRpY2F0b3IpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2F1dGgvY2hhbm5lbF9hdXRob3JpemVyLnRzXG5cblxuY29uc3QgY2hhbm5lbF9hdXRob3JpemVyX2NvbXBvc2VDaGFubmVsUXVlcnkgPSAocGFyYW1zLCBhdXRoT3B0aW9ucykgPT4ge1xuICAgIHZhciBxdWVyeSA9ICdzb2NrZXRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXMuc29ja2V0SWQpO1xuICAgIHF1ZXJ5ICs9ICcmY2hhbm5lbF9uYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zLmNoYW5uZWxOYW1lKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXV0aE9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgICAnJicgK1xuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICtcbiAgICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChhdXRoT3B0aW9ucy5wYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIGlmIChhdXRoT3B0aW9ucy5wYXJhbXNQcm92aWRlciAhPSBudWxsKSB7XG4gICAgICAgIGxldCBkeW5hbWljUGFyYW1zID0gYXV0aE9wdGlvbnMucGFyYW1zUHJvdmlkZXIoKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGR5bmFtaWNQYXJhbXMpIHtcbiAgICAgICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoZHluYW1pY1BhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59O1xuY29uc3QgQ2hhbm5lbEF1dGhvcml6ZXIgPSAoYXV0aE9wdGlvbnMpID0+IHtcbiAgICBpZiAodHlwZW9mIHJ1bnRpbWUuZ2V0QXV0aG9yaXplcnMoKVthdXRoT3B0aW9ucy50cmFuc3BvcnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBgJyR7YXV0aE9wdGlvbnMudHJhbnNwb3J0fScgaXMgbm90IGEgcmVjb2duaXplZCBhdXRoIHRyYW5zcG9ydGA7XG4gICAgfVxuICAgIHJldHVybiAocGFyYW1zLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGNoYW5uZWxfYXV0aG9yaXplcl9jb21wb3NlQ2hhbm5lbFF1ZXJ5KHBhcmFtcywgYXV0aE9wdGlvbnMpO1xuICAgICAgICBydW50aW1lLmdldEF1dGhvcml6ZXJzKClbYXV0aE9wdGlvbnMudHJhbnNwb3J0XShydW50aW1lLCBxdWVyeSwgYXV0aE9wdGlvbnMsIEF1dGhSZXF1ZXN0VHlwZS5DaGFubmVsQXV0aG9yaXphdGlvbiwgY2FsbGJhY2spO1xuICAgIH07XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2hhbm5lbF9hdXRob3JpemVyID0gKENoYW5uZWxBdXRob3JpemVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9hdXRoL2RlcHJlY2F0ZWRfY2hhbm5lbF9hdXRob3JpemVyLnRzXG5jb25zdCBDaGFubmVsQXV0aG9yaXplclByb3h5ID0gKHB1c2hlciwgYXV0aE9wdGlvbnMsIGNoYW5uZWxBdXRob3JpemVyR2VuZXJhdG9yKSA9PiB7XG4gICAgY29uc3QgZGVwcmVjYXRlZEF1dGhvcml6ZXJPcHRpb25zID0ge1xuICAgICAgICBhdXRoVHJhbnNwb3J0OiBhdXRoT3B0aW9ucy50cmFuc3BvcnQsXG4gICAgICAgIGF1dGhFbmRwb2ludDogYXV0aE9wdGlvbnMuZW5kcG9pbnQsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgIHBhcmFtczogYXV0aE9wdGlvbnMucGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczogYXV0aE9wdGlvbnMuaGVhZGVyc1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5jaGFubmVsKHBhcmFtcy5jaGFubmVsTmFtZSk7XG4gICAgICAgIGNvbnN0IGNoYW5uZWxBdXRob3JpemVyID0gY2hhbm5lbEF1dGhvcml6ZXJHZW5lcmF0b3IoY2hhbm5lbCwgZGVwcmVjYXRlZEF1dGhvcml6ZXJPcHRpb25zKTtcbiAgICAgICAgY2hhbm5lbEF1dGhvcml6ZXIuYXV0aG9yaXplKHBhcmFtcy5zb2NrZXRJZCwgY2FsbGJhY2spO1xuICAgIH07XG59O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NvbmZpZy50c1xuXG5cblxuXG5cbmZ1bmN0aW9uIGdldENvbmZpZyhvcHRzLCBwdXNoZXIpIHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG9wdHMuYWN0aXZpdHlUaW1lb3V0IHx8IGRlZmF1bHRzLmFjdGl2aXR5VGltZW91dCxcbiAgICAgICAgY2x1c3Rlcjogb3B0cy5jbHVzdGVyLFxuICAgICAgICBodHRwUGF0aDogb3B0cy5odHRwUGF0aCB8fCBkZWZhdWx0cy5odHRwUGF0aCxcbiAgICAgICAgaHR0cFBvcnQ6IG9wdHMuaHR0cFBvcnQgfHwgZGVmYXVsdHMuaHR0cFBvcnQsXG4gICAgICAgIGh0dHBzUG9ydDogb3B0cy5odHRwc1BvcnQgfHwgZGVmYXVsdHMuaHR0cHNQb3J0LFxuICAgICAgICBwb25nVGltZW91dDogb3B0cy5wb25nVGltZW91dCB8fCBkZWZhdWx0cy5wb25nVGltZW91dCxcbiAgICAgICAgc3RhdHNIb3N0OiBvcHRzLnN0YXRzSG9zdCB8fCBkZWZhdWx0cy5zdGF0c19ob3N0LFxuICAgICAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IG9wdHMudW5hdmFpbGFibGVUaW1lb3V0IHx8IGRlZmF1bHRzLnVuYXZhaWxhYmxlVGltZW91dCxcbiAgICAgICAgd3NQYXRoOiBvcHRzLndzUGF0aCB8fCBkZWZhdWx0cy53c1BhdGgsXG4gICAgICAgIHdzUG9ydDogb3B0cy53c1BvcnQgfHwgZGVmYXVsdHMud3NQb3J0LFxuICAgICAgICB3c3NQb3J0OiBvcHRzLndzc1BvcnQgfHwgZGVmYXVsdHMud3NzUG9ydCxcbiAgICAgICAgZW5hYmxlU3RhdHM6IGdldEVuYWJsZVN0YXRzQ29uZmlnKG9wdHMpLFxuICAgICAgICBodHRwSG9zdDogZ2V0SHR0cEhvc3Qob3B0cyksXG4gICAgICAgIHVzZVRMUzogc2hvdWxkVXNlVExTKG9wdHMpLFxuICAgICAgICB3c0hvc3Q6IGdldFdlYnNvY2tldEhvc3Qob3B0cyksXG4gICAgICAgIHVzZXJBdXRoZW50aWNhdG9yOiBidWlsZFVzZXJBdXRoZW50aWNhdG9yKG9wdHMpLFxuICAgICAgICBjaGFubmVsQXV0aG9yaXplcjogYnVpbGRDaGFubmVsQXV0aG9yaXplcihvcHRzLCBwdXNoZXIpXG4gICAgfTtcbiAgICBpZiAoJ2Rpc2FibGVkVHJhbnNwb3J0cycgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmRpc2FibGVkVHJhbnNwb3J0cyA9IG9wdHMuZGlzYWJsZWRUcmFuc3BvcnRzO1xuICAgIGlmICgnZW5hYmxlZFRyYW5zcG9ydHMnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cyA9IG9wdHMuZW5hYmxlZFRyYW5zcG9ydHM7XG4gICAgaWYgKCdpZ25vcmVOdWxsT3JpZ2luJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuaWdub3JlTnVsbE9yaWdpbiA9IG9wdHMuaWdub3JlTnVsbE9yaWdpbjtcbiAgICBpZiAoJ3RpbWVsaW5lUGFyYW1zJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcudGltZWxpbmVQYXJhbXMgPSBvcHRzLnRpbWVsaW5lUGFyYW1zO1xuICAgIGlmICgnbmFjbCcgaW4gb3B0cykge1xuICAgICAgICBjb25maWcubmFjbCA9IG9wdHMubmFjbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbmZ1bmN0aW9uIGdldEh0dHBIb3N0KG9wdHMpIHtcbiAgICBpZiAob3B0cy5odHRwSG9zdCkge1xuICAgICAgICByZXR1cm4gb3B0cy5odHRwSG9zdDtcbiAgICB9XG4gICAgaWYgKG9wdHMuY2x1c3Rlcikge1xuICAgICAgICByZXR1cm4gYHNvY2tqcy0ke29wdHMuY2x1c3Rlcn0ucHVzaGVyLmNvbWA7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0cy5odHRwSG9zdDtcbn1cbmZ1bmN0aW9uIGdldFdlYnNvY2tldEhvc3Qob3B0cykge1xuICAgIGlmIChvcHRzLndzSG9zdCkge1xuICAgICAgICByZXR1cm4gb3B0cy53c0hvc3Q7XG4gICAgfVxuICAgIHJldHVybiBnZXRXZWJzb2NrZXRIb3N0RnJvbUNsdXN0ZXIob3B0cy5jbHVzdGVyKTtcbn1cbmZ1bmN0aW9uIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihjbHVzdGVyKSB7XG4gICAgcmV0dXJuIGB3cy0ke2NsdXN0ZXJ9LnB1c2hlci5jb21gO1xufVxuZnVuY3Rpb24gc2hvdWxkVXNlVExTKG9wdHMpIHtcbiAgICBpZiAocnVudGltZS5nZXRQcm90b2NvbCgpID09PSAnaHR0cHM6Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0cy5mb3JjZVRMUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldEVuYWJsZVN0YXRzQ29uZmlnKG9wdHMpIHtcbiAgICBpZiAoJ2VuYWJsZVN0YXRzJyBpbiBvcHRzKSB7XG4gICAgICAgIHJldHVybiBvcHRzLmVuYWJsZVN0YXRzO1xuICAgIH1cbiAgICBpZiAoJ2Rpc2FibGVTdGF0cycgaW4gb3B0cykge1xuICAgICAgICByZXR1cm4gIW9wdHMuZGlzYWJsZVN0YXRzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBidWlsZFVzZXJBdXRoZW50aWNhdG9yKG9wdHMpIHtcbiAgICBjb25zdCB1c2VyQXV0aGVudGljYXRpb24gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLnVzZXJBdXRoZW50aWNhdGlvbiksIG9wdHMudXNlckF1dGhlbnRpY2F0aW9uKTtcbiAgICBpZiAoJ2N1c3RvbUhhbmRsZXInIGluIHVzZXJBdXRoZW50aWNhdGlvbiAmJlxuICAgICAgICB1c2VyQXV0aGVudGljYXRpb25bJ2N1c3RvbUhhbmRsZXInXSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1c2VyQXV0aGVudGljYXRpb25bJ2N1c3RvbUhhbmRsZXInXTtcbiAgICB9XG4gICAgcmV0dXJuIHVzZXJfYXV0aGVudGljYXRvcih1c2VyQXV0aGVudGljYXRpb24pO1xufVxuZnVuY3Rpb24gYnVpbGRDaGFubmVsQXV0aChvcHRzLCBwdXNoZXIpIHtcbiAgICBsZXQgY2hhbm5lbEF1dGhvcml6YXRpb247XG4gICAgaWYgKCdjaGFubmVsQXV0aG9yaXphdGlvbicgaW4gb3B0cykge1xuICAgICAgICBjaGFubmVsQXV0aG9yaXphdGlvbiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuY2hhbm5lbEF1dGhvcml6YXRpb24pLCBvcHRzLmNoYW5uZWxBdXRob3JpemF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNoYW5uZWxBdXRob3JpemF0aW9uID0ge1xuICAgICAgICAgICAgdHJhbnNwb3J0OiBvcHRzLmF1dGhUcmFuc3BvcnQgfHwgZGVmYXVsdHMuYXV0aFRyYW5zcG9ydCxcbiAgICAgICAgICAgIGVuZHBvaW50OiBvcHRzLmF1dGhFbmRwb2ludCB8fCBkZWZhdWx0cy5hdXRoRW5kcG9pbnRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCdhdXRoJyBpbiBvcHRzKSB7XG4gICAgICAgICAgICBpZiAoJ3BhcmFtcycgaW4gb3B0cy5hdXRoKVxuICAgICAgICAgICAgICAgIGNoYW5uZWxBdXRob3JpemF0aW9uLnBhcmFtcyA9IG9wdHMuYXV0aC5wYXJhbXM7XG4gICAgICAgICAgICBpZiAoJ2hlYWRlcnMnIGluIG9wdHMuYXV0aClcbiAgICAgICAgICAgICAgICBjaGFubmVsQXV0aG9yaXphdGlvbi5oZWFkZXJzID0gb3B0cy5hdXRoLmhlYWRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdhdXRob3JpemVyJyBpbiBvcHRzKVxuICAgICAgICAgICAgY2hhbm5lbEF1dGhvcml6YXRpb24uY3VzdG9tSGFuZGxlciA9IENoYW5uZWxBdXRob3JpemVyUHJveHkocHVzaGVyLCBjaGFubmVsQXV0aG9yaXphdGlvbiwgb3B0cy5hdXRob3JpemVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxBdXRob3JpemF0aW9uO1xufVxuZnVuY3Rpb24gYnVpbGRDaGFubmVsQXV0aG9yaXplcihvcHRzLCBwdXNoZXIpIHtcbiAgICBjb25zdCBjaGFubmVsQXV0aG9yaXphdGlvbiA9IGJ1aWxkQ2hhbm5lbEF1dGgob3B0cywgcHVzaGVyKTtcbiAgICBpZiAoJ2N1c3RvbUhhbmRsZXInIGluIGNoYW5uZWxBdXRob3JpemF0aW9uICYmXG4gICAgICAgIGNoYW5uZWxBdXRob3JpemF0aW9uWydjdXN0b21IYW5kbGVyJ10gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY2hhbm5lbEF1dGhvcml6YXRpb25bJ2N1c3RvbUhhbmRsZXInXTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxfYXV0aG9yaXplcihjaGFubmVsQXV0aG9yaXphdGlvbik7XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvd2F0Y2hsaXN0LnRzXG5cblxuY2xhc3Mgd2F0Y2hsaXN0X1dhdGNobGlzdEZhY2FkZSBleHRlbmRzIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IocHVzaGVyKSB7XG4gICAgICAgIHN1cGVyKGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gY2FsbGJhY2tzIG9uIHdhdGNobGlzdCBldmVudHMgZm9yICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIHRoaXMuYmluZFdhdGNobGlzdEludGVybmFsRXZlbnQoKTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQocHVzaGVyRXZlbnQpIHtcbiAgICAgICAgcHVzaGVyRXZlbnQuZGF0YS5ldmVudHMuZm9yRWFjaCh3YXRjaGxpc3RFdmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQod2F0Y2hsaXN0RXZlbnQubmFtZSwgd2F0Y2hsaXN0RXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYmluZFdhdGNobGlzdEludGVybmFsRXZlbnQoKSB7XG4gICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnbWVzc2FnZScsIHB1c2hlckV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBwdXNoZXJFdmVudC5ldmVudDtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdwdXNoZXJfaW50ZXJuYWw6d2F0Y2hsaXN0X2V2ZW50cycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUV2ZW50KHB1c2hlckV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL2ZsYXRfcHJvbWlzZS50c1xuZnVuY3Rpb24gZmxhdFByb21pc2UoKSB7XG4gICAgbGV0IHJlc29sdmUsIHJlamVjdDtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICByZXR1cm4geyBwcm9taXNlLCByZXNvbHZlLCByZWplY3QgfTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGZsYXRfcHJvbWlzZSA9IChmbGF0UHJvbWlzZSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXNlci50c1xuXG5cblxuXG5cbmNsYXNzIHVzZXJfVXNlckZhY2FkZSBleHRlbmRzIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IocHVzaGVyKSB7XG4gICAgICAgIHN1cGVyKGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnTm8gY2FsbGJhY2tzIG9uIHVzZXIgZm9yICcgKyBldmVudE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaWduaW5fcmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlcl9kYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaWduaW5Eb25lUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NpZ25pbkRvbmVSZXNvbHZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fb25BdXRob3JpemUgPSAoZXJyLCBhdXRoRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGBFcnJvciBkdXJpbmcgc2lnbmluOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZF9ldmVudCgncHVzaGVyOnNpZ25pbicsIHtcbiAgICAgICAgICAgICAgICBhdXRoOiBhdXRoRGF0YS5hdXRoLFxuICAgICAgICAgICAgICAgIHVzZXJfZGF0YTogYXV0aERhdGEudXNlcl9kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnc3RhdGVfY2hhbmdlJywgKHsgcHJldmlvdXMsIGN1cnJlbnQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzICE9PSAnY29ubmVjdGVkJyAmJiBjdXJyZW50ID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25pbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXZpb3VzID09PSAnY29ubmVjdGVkJyAmJiBjdXJyZW50ICE9PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXdTaWduaW5Qcm9taXNlSWZOZWVkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud2F0Y2hsaXN0ID0gbmV3IHdhdGNobGlzdF9XYXRjaGxpc3RGYWNhZGUocHVzaGVyKTtcbiAgICAgICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdtZXNzYWdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3B1c2hlcjpzaWduaW5fc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vblNpZ25pblN1Y2Nlc3MoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsLm5hbWUgPT09IGV2ZW50LmNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclRvVXNlckNoYW5uZWwuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbmluKCkge1xuICAgICAgICBpZiAodGhpcy5zaWduaW5fcmVxdWVzdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaWduaW5fcmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2lnbmluKCk7XG4gICAgfVxuICAgIF9zaWduaW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5zaWduaW5fcmVxdWVzdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbmV3U2lnbmluUHJvbWlzZUlmTmVlZGVkKCk7XG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnN0YXRlICE9PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaGVyLmNvbmZpZy51c2VyQXV0aGVudGljYXRvcih7XG4gICAgICAgICAgICBzb2NrZXRJZDogdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWRcbiAgICAgICAgfSwgdGhpcy5fb25BdXRob3JpemUpO1xuICAgIH1cbiAgICBfb25TaWduaW5TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMudXNlcl9kYXRhID0gSlNPTi5wYXJzZShkYXRhLnVzZXJfZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRmFpbGVkIHBhcnNpbmcgdXNlciBkYXRhIGFmdGVyIHNpZ25pbjogJHtkYXRhLnVzZXJfZGF0YX1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXNlcl9kYXRhLmlkICE9PSAnc3RyaW5nJyB8fCB0aGlzLnVzZXJfZGF0YS5pZCA9PT0gJycpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgdXNlcl9kYXRhIGRvZXNuJ3QgY29udGFpbiBhbiBpZC4gdXNlcl9kYXRhOiAke3RoaXMudXNlcl9kYXRhfWApO1xuICAgICAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NpZ25pbkRvbmVSZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZUNoYW5uZWxzKCk7XG4gICAgfVxuICAgIF9zdWJzY3JpYmVDaGFubmVscygpIHtcbiAgICAgICAgY29uc3QgZW5zdXJlX3N1YnNjcmliZWQgPSBjaGFubmVsID0+IHtcbiAgICAgICAgICAgIGlmIChjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcgJiYgY2hhbm5lbC5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNoYW5uZWwuc3Vic2NyaXB0aW9uUGVuZGluZyAmJlxuICAgICAgICAgICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc3RhdGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsID0gbmV3IGNoYW5uZWxfQ2hhbm5lbChgI3NlcnZlci10by11c2VyLSR7dGhpcy51c2VyX2RhdGEuaWR9YCwgdGhpcy5wdXNoZXIpO1xuICAgICAgICB0aGlzLnNlcnZlclRvVXNlckNoYW5uZWwuYmluZF9nbG9iYWwoKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDAgfHxcbiAgICAgICAgICAgICAgICBldmVudE5hbWUuaW5kZXhPZigncHVzaGVyOicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbnN1cmVfc3Vic2NyaWJlZCh0aGlzLnNlcnZlclRvVXNlckNoYW5uZWwpO1xuICAgIH1cbiAgICBfY2xlYW51cCgpIHtcbiAgICAgICAgdGhpcy51c2VyX2RhdGEgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZlclRvVXNlckNoYW5uZWwudW5iaW5kX2FsbCgpO1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2lnbmluX3JlcXVlc3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fc2lnbmluRG9uZVJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfbmV3U2lnbmluUHJvbWlzZUlmTmVlZGVkKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2lnbmluX3JlcXVlc3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNpZ25pbkRvbmVQcm9taXNlICYmICF0aGlzLnNpZ25pbkRvbmVQcm9taXNlLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHByb21pc2UsIHJlc29sdmUsIHJlamVjdDogXyB9ID0gZmxhdF9wcm9taXNlKCk7XG4gICAgICAgIHByb21pc2UuZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBzZXREb25lID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHNldERvbmUpLmNhdGNoKHNldERvbmUpO1xuICAgICAgICB0aGlzLnNpZ25pbkRvbmVQcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5fc2lnbmluRG9uZVJlc29sdmUgPSByZXNvbHZlO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9wdXNoZXIudHNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY2xhc3MgcHVzaGVyX1B1c2hlciB7XG4gICAgc3RhdGljIHJlYWR5KCkge1xuICAgICAgICBwdXNoZXJfUHVzaGVyLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHB1c2hlcl9QdXNoZXIuaW5zdGFuY2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgcHVzaGVyX1B1c2hlci5pbnN0YW5jZXNbaV0uY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDbGllbnRGZWF0dXJlcygpIHtcbiAgICAgICAgcmV0dXJuIGtleXMoZmlsdGVyT2JqZWN0KHsgd3M6IHJ1bnRpbWUuVHJhbnNwb3J0cy53cyB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaXNTdXBwb3J0ZWQoe30pO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGFwcF9rZXksIG9wdGlvbnMpIHtcbiAgICAgICAgY2hlY2tBcHBLZXkoYXBwX2tleSk7XG4gICAgICAgIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5rZXkgPSBhcHBfa2V5O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGdldENvbmZpZyhvcHRpb25zLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IGZhY3RvcnkuY3JlYXRlQ2hhbm5lbHMoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlciA9IG5ldyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBydW50aW1lLnJhbmRvbUludCgxMDAwMDAwMDAwKTtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IG5ldyB0aW1lbGluZV9UaW1lbGluZSh0aGlzLmtleSwgdGhpcy5zZXNzaW9uSUQsIHtcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMuY29uZmlnLmNsdXN0ZXIsXG4gICAgICAgICAgICBmZWF0dXJlczogcHVzaGVyX1B1c2hlci5nZXRDbGllbnRGZWF0dXJlcygpLFxuICAgICAgICAgICAgcGFyYW1zOiB0aGlzLmNvbmZpZy50aW1lbGluZVBhcmFtcyB8fCB7fSxcbiAgICAgICAgICAgIGxpbWl0OiA1MCxcbiAgICAgICAgICAgIGxldmVsOiB0aW1lbGluZV9sZXZlbC5JTkZPLFxuICAgICAgICAgICAgdmVyc2lvbjogZGVmYXVsdHMuVkVSU0lPTlxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZVN0YXRzKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyID0gZmFjdG9yeS5jcmVhdGVUaW1lbGluZVNlbmRlcih0aGlzLnRpbWVsaW5lLCB7XG4gICAgICAgICAgICAgICAgaG9zdDogdGhpcy5jb25maWcuc3RhdHNIb3N0LFxuICAgICAgICAgICAgICAgIHBhdGg6ICcvdGltZWxpbmUvdjIvJyArIHJ1bnRpbWUuVGltZWxpbmVUcmFuc3BvcnQubmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdldFN0cmF0ZWd5ID0gKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBydW50aW1lLmdldERlZmF1bHRTdHJhdGVneSh0aGlzLmNvbmZpZywgb3B0aW9ucywgc3RyYXRlZ3lfYnVpbGRlcl9kZWZpbmVUcmFuc3BvcnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBmYWN0b3J5LmNyZWF0ZUNvbm5lY3Rpb25NYW5hZ2VyKHRoaXMua2V5LCB7XG4gICAgICAgICAgICBnZXRTdHJhdGVneTogZ2V0U3RyYXRlZ3ksXG4gICAgICAgICAgICB0aW1lbGluZTogdGhpcy50aW1lbGluZSxcbiAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogdGhpcy5jb25maWcuYWN0aXZpdHlUaW1lb3V0LFxuICAgICAgICAgICAgcG9uZ1RpbWVvdXQ6IHRoaXMuY29uZmlnLnBvbmdUaW1lb3V0LFxuICAgICAgICAgICAgdW5hdmFpbGFibGVUaW1lb3V0OiB0aGlzLmNvbmZpZy51bmF2YWlsYWJsZVRpbWVvdXQsXG4gICAgICAgICAgICB1c2VUTFM6IEJvb2xlYW4odGhpcy5jb25maWcudXNlVExTKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQWxsKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXIuc2VuZCh0aGlzLmNvbm5lY3Rpb24uaXNVc2luZ1RMUygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdtZXNzYWdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICAgICAgdmFyIGludGVybmFsID0gZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMDtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWwoZXZlbnQuY2hhbm5lbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbC5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuZW1pdChldmVudC5ldmVudCwgZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGluZycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Rpc2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBwdXNoZXJfUHVzaGVyLmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBpbnN0YW5jZXM6IHB1c2hlcl9QdXNoZXIuaW5zdGFuY2VzLmxlbmd0aCB9KTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IHVzZXJfVXNlckZhY2FkZSh0aGlzKTtcbiAgICAgICAgaWYgKHB1c2hlcl9QdXNoZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbm5lbChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmZpbmQobmFtZSk7XG4gICAgfVxuICAgIGFsbENoYW5uZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5hbGwoKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNvbm5lY3QoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmVTZW5kZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50aW1lbGluZVNlbmRlclRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzaW5nVExTID0gdGhpcy5jb25uZWN0aW9uLmlzVXNpbmdUTFMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdGltZWxpbmVTZW5kZXIgPSB0aGlzLnRpbWVsaW5lU2VuZGVyO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXJUaW1lciA9IG5ldyB0aW1lcnNfUGVyaW9kaWNUaW1lcig2MDAwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVNlbmRlci5zZW5kKHVzaW5nVExTKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlclRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1bmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci51bmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1bmJpbmRfYWxsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2FsbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICB2YXIgY2hhbm5lbE5hbWU7XG4gICAgICAgIGZvciAoY2hhbm5lbE5hbWUgaW4gdGhpcy5jaGFubmVscy5jaGFubmVscykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHMuY2hhbm5lbHMuaGFzT3duUHJvcGVydHkoY2hhbm5lbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoY2hhbm5lbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmFkZChjaGFubmVsX25hbWUsIHRoaXMpO1xuICAgICAgICBpZiAoY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmIGNoYW5uZWwuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjaGFubmVsLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfVxuICAgIHVuc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZmluZChjaGFubmVsX25hbWUpO1xuICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuY2FuY2VsU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFubmVsID0gdGhpcy5jaGFubmVscy5yZW1vdmUoY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgICAgIGlmIChjaGFubmVsICYmIGNoYW5uZWwuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZW5kX2V2ZW50KGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kX2V2ZW50KGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpO1xuICAgIH1cbiAgICBzaG91bGRVc2VUTFMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy51c2VUTFM7XG4gICAgfVxuICAgIHNpZ25pbigpIHtcbiAgICAgICAgdGhpcy51c2VyLnNpZ25pbigpO1xuICAgIH1cbn1cbnB1c2hlcl9QdXNoZXIuaW5zdGFuY2VzID0gW107XG5wdXNoZXJfUHVzaGVyLmlzUmVhZHkgPSBmYWxzZTtcbnB1c2hlcl9QdXNoZXIubG9nVG9Db25zb2xlID0gZmFsc2U7XG5wdXNoZXJfUHVzaGVyLlJ1bnRpbWUgPSBydW50aW1lO1xucHVzaGVyX1B1c2hlci5TY3JpcHRSZWNlaXZlcnMgPSBydW50aW1lLlNjcmlwdFJlY2VpdmVycztcbnB1c2hlcl9QdXNoZXIuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gcnVudGltZS5EZXBlbmRlbmNpZXNSZWNlaXZlcnM7XG5wdXNoZXJfUHVzaGVyLmF1dGhfY2FsbGJhY2tzID0gcnVudGltZS5hdXRoX2NhbGxiYWNrcztcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvcmVfcHVzaGVyID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAocHVzaGVyX1B1c2hlcik7XG5mdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93ICdZb3UgbXVzdCBwYXNzIHlvdXIgYXBwIGtleSB3aGVuIHlvdSBpbnN0YW50aWF0ZSBQdXNoZXIuJztcbiAgICB9XG59XG5ydW50aW1lLnNldHVwKHB1c2hlcl9QdXNoZXIpO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVzaGVyLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9qcy90cmFja2luZy1zY3JpcHRcIjogMCxcblx0XCJhc3NldHMvY3NzL21uZ21udC9hcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9jc3MvbW5nbW50L2FwcFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3Jlc291cmNlcy9hc3NldHMvanMvdHJhY2tpbmctc2NyaXB0LmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL2Nzcy9tbmdtbnQvYXBwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcmVzb3VyY2VzL2Fzc2V0cy9zY3NzL21uZ21udC9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkVjaG8iLCJQdXNoZXIiLCJ3aW5kb3ciLCJicm9hZGNhc3RlciIsImtleSIsImJyb2FkY2FzdGluZ0RhdGEiLCJjbHVzdGVyIiwiX2Jyb2FkY2FzdGluZ0RhdGEkb3B0Iiwib3B0aW9ucyIsIndzSG9zdCIsImJyb2FkY2FzdGluZ0hvc3QiLCJjb25jYXQiLCJ3c1BvcnQiLCJfYnJvYWRjYXN0aW5nRGF0YSRvcHQyIiwicG9ydCIsIndzc1BvcnQiLCJfYnJvYWRjYXN0aW5nRGF0YSRvcHQzIiwiZm9yY2VUTFMiLCJfYnJvYWRjYXN0aW5nRGF0YSRvcHQ0Iiwic2NoZW1lIiwiZW5hYmxlZFRyYW5zcG9ydHMiLCJqb2luIiwiaGVyZSIsInVzZXJzIiwiam9pbmluZyIsInVzZXIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=