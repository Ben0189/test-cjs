import { add, greet } from "./packages/my-lib/dist";

console.log(greet("CJS Monorepo")); // Hello, CJS Monorepo!
console.log(add(2, 3));             // 5