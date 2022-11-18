"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/v1/user', user_1.default);
//# sourceMappingURL=index.js.map