"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var timeout = function (second) {
    //<() => string>はresolveの引数の型
    return new Promise(function (resolve, reject) {
        if (second < 4) {
            setTimeout(function () { return resolve(function () {
                return second.toString();
            }); }, second * 1000);
        }
        else {
            // rejectの引数はvoidである必要はない。
            // この場合stringが引数に入ってるが問題ない。
            // rejectの引数に型アノテーションできない？
            // 我々はその謎を解明すべくアマゾンの奥地へ向かった。
            // 参考:https://orgachem.hatenablog.com/entry/2016/05/25/185157
            setTimeout(function () { return reject("hey"); }, second * 1000);
        }
    });
};
// async functionが値を返す場合、例えばstrirng型を返す場合、
// 関数の型は() => stringではなく() => Promise<string>となる。
// stringをreturnしているが、
// 厳密にいうとresolveでstringを引数にとるPromiseを返している。
// つまり、返り値を使いたい場合awaitが必要ということ。
var outputTimeLog = function (second) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, timeout(second)];
            case 1:
                data = _a.sent();
                console.log(data());
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var testFunc = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("start");
        outputTimeLog(1);
        outputTimeLog(2);
        outputTimeLog(3);
        outputTimeLog(4);
        outputTimeLog(5);
        outputTimeLog(6);
        return [2 /*return*/];
    });
}); };
// testFunc()
console.log(Array(5).map(function (_, i) { return i; }).slice());
