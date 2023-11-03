"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middlewars_1 = __importDefault(require("../middlewares/auth.middlewars"));
const actor_controller_1 = __importDefault(require("../controllers/actor.controller"));
const actorRouter = express_1.default.Router();
const authMiddlewareInstance = new auth_middlewars_1.default();
const actorInstance = new actor_controller_1.default();
actorRouter.get('/', actorInstance.getAllActors);
actorRouter.get('/:aid', actorInstance.getAnActor);
actorRouter.post('/', authMiddlewareInstance.isAuthenticated, authMiddlewareInstance.isAdmin, actorInstance.createAnActor);
exports.default = actorRouter;
