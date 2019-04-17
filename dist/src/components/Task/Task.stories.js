"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.task = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};
exports.task = task;
var actions = {
  onPinTask: (0, _addonActions.action)('onPinTask'),
  onArchiveTask: (0, _addonActions.action)('onArchiveTask')
};
exports.actions = actions;
(0, _react2.storiesOf)('Task', module).add('default', function () {
  return _react.default.createElement(_Task.default, _extends({
    task: task
  }, actions));
}).add('pinned', function () {
  return _react.default.createElement(_Task.default, _extends({
    task: _objectSpread({}, task, {
      state: 'TASK_PINNED'
    })
  }, actions));
}).add('archived', function () {
  return _react.default.createElement(_Task.default, _extends({
    task: _objectSpread({}, task, {
      state: 'TASK_ARCHIVED'
    })
  }, actions));
});

//# sourceMappingURL=Task.stories.js.map