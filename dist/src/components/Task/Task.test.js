"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.task = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};
exports.task = task;
it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render(_react.default.createElement(_Task.default, {
    task: task
  }), div);

  _reactDom.default.unmountComponentAtNode(div);
});

//# sourceMappingURL=Task.test.js.map