"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompatibleCasesConstants = void 0;
const lodash_1 = __importDefault(require("lodash"));
const types_1 = require("./types");
Object.defineProperty(exports, "CompatibleCasesConstants", { enumerable: true, get: function () { return types_1.CompatibleCasesConstants; } });
const cases = {
    [types_1.CompatibleCasesConstants.CAMELCASE]: (key) => lodash_1.default.camelCase(key),
    [types_1.CompatibleCasesConstants.SNAKECASE]: (key) => lodash_1.default.snakeCase(key),
};
const caseize = (data, casing) => {
    if (lodash_1.default.isArray(data))
        data = lodash_1.default.map(data, (item) => caseize(item, casing));
    if (lodash_1.default.isPlainObject(data)) {
        lodash_1.default.each(lodash_1.default.keys(data), (key) => {
            const value = data[key];
            delete data[key];
            data[cases[casing](key)] = caseize(value, casing);
        });
    }
    return data;
};
exports.default = caseize;
//# sourceMappingURL=index.js.map