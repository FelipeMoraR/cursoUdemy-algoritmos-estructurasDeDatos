"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var ask = function (question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) { return resolve(answer); });
    });
};
var createDinamicMatrix = function () { return __awaiter(void 0, void 0, void 0, function () {
    var numRows, _a, pointer, i, numColums, _b, newArrayColums, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, ask('Tell me the num of rows: ')];
            case 1:
                numRows = _a.apply(void 0, [_c.sent()]);
                if (!numRows) {
                    console.error('Num rows not valid, insert a number.');
                    rl.close();
                    return [2 /*return*/];
                }
                pointer = new Array(numRows);
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < numRows)) return [3 /*break*/, 5];
                _b = Number;
                return [4 /*yield*/, ask("Tell me the num of colums of the row ".concat(i + 1, ": "))];
            case 3:
                numColums = _b.apply(void 0, [_c.sent()]);
                if (!numColums) {
                    console.error('invalid num of columns');
                    rl.close();
                    return [2 /*return*/];
                }
                newArrayColums = new Array(numColums);
                for (j = 0; j < numColums; j++) {
                    newArrayColums[j] = Math.pow((i + 1), (j + 1));
                }
                pointer[i] = newArrayColums;
                _c.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                console.log(pointer);
                // NOTE freeing memory 
                pointer = null;
                rl.close();
                return [2 /*return*/];
        }
    });
}); };
createDinamicMatrix();
