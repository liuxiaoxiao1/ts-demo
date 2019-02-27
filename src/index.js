"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index22_1 = require("./test/index22");
exports.S = index22_1.default;
var ClassDemo = /** @class */ (function () {
    function ClassDemo() {
    }
    Object.defineProperty(ClassDemo.prototype, "name", {
        // 这是我的注释代码
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return ClassDemo;
}());
exports.ClassDemo = ClassDemo;
//# sourceMappingURL=index.js.map