"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Links_1 = __importDefault(require("../controllers/Links"));
const router = express_1.Router();
router.post('/links', Links_1.default.postLink);
router.get('/links/:code', Links_1.default.hitLink);
router.get('/links/:code/stats', Links_1.default.getLink);
exports.default = router;
