"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dist_1 = require("./packages/my-lib/dist");
console.log((0, dist_1.greet)("CJS Monorepo")); // Hello, CJS Monorepo!
console.log((0, dist_1.add)(2, 3)); // 5
