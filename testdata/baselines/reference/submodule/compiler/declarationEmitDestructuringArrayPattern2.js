//// [tests/cases/compiler/declarationEmitDestructuringArrayPattern2.ts] ////

//// [declarationEmitDestructuringArrayPattern2.ts]
var [x10, [y10, [z10]]] = [1, ["hello", [true]]];

var [x11 = 0, y11 = ""] = [1, "hello"];
var [a11, b11, c11] = [];

var [a2, [b2, { x12, y12: c2 }]=["abc", { x12: 10, y12: false }]] = [1, ["hello", { x12: 5, y12: true }]];

var [x13, y13] = [1, "hello"];
var [a3, b3] = [[x13, y13], { x: x13, y: y13 }];


//// [declarationEmitDestructuringArrayPattern2.js]
var [x10, [y10, [z10]]] = [1, ["hello", [true]]];
var [x11 = 0, y11 = ""] = [1, "hello"];
var [a11, b11, c11] = [];
var [a2, [b2, { x12, y12: c2 }] = ["abc", { x12: 10, y12: false }]] = [1, ["hello", { x12: 5, y12: true }]];
var [x13, y13] = [1, "hello"];
var [a3, b3] = [[x13, y13], { x: x13, y: y13 }];


//// [declarationEmitDestructuringArrayPattern2.d.ts]
declare var x10: number, y10: string, z10: boolean;
declare var x11: number, y11: string;
declare var a11: undefined, b11: undefined, c11: undefined;
declare var a2: number, b2: string, x12: number, c2: boolean;
declare var x13: number, y13: string;
declare var a3: (string | number)[], b3: {
    x: number;
    y: string;
};
