"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Task(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      onPinTask = _ref.onPinTask;
  return _react.default.createElement("div", {
    className: "list-item"
  }, _react.default.createElement("input", {
    type: "text",
    value: title,
    readOnly: true
  }));
}

//# sourceMappingURL=Task.js.map