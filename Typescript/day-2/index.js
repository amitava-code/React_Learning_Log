"use strict";
// -  Type Infernece and Annotation
Object.defineProperty(exports, "__esModule", { value: true });
let a = 90;
a = 70;
a = 2000;
console.log(a);
// primitive data types 
// string
let val = "ami";
// boolean 
let val1 = true;
// number
let b = 90;
// undefined
let i = undefined;
//bigint
let x = 999999999n;
// symbol
let d = Symbol("hello");
// enums - options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.SUP_ADMIN;
//# sourceMappingURL=index.js.map