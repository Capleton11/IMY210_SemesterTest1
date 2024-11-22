"use strict";

var _express = _interopRequireDefault(require("express"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3000;
app.use(_express["default"]["static"]('public'));
app.get('/recipes', function (req, res) {
  _fs["default"].readFile('public/recipes.json', 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});