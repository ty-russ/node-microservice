"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// talks to database layer
const UserService_1 = require("../services/UserService");
const service = new UserService_1.UserService();
class UserController {
}
exports.UserController = UserController;
UserController.listAll = (req, res, next) => {
    service.get().then((users) => {
        if (users) {
            res.json(users);
        }
        else {
            res.json(users);
        }
    }).catch((err) => {
        res.json(err);
    });
};
UserController.addNew = (req, res) => {
    service.add(req.body).then((user) => {
        if (user) {
            res.json(user);
        }
    }).catch((err) => {
        res.json(err);
    });
};
//# sourceMappingURL=UserController.js.map