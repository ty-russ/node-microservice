"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router.get('/', UserController_1.UserController.listAll);
router.post('/', UserController_1.UserController.addNew);
exports.default = router;
//# sourceMappingURL=user.js.map