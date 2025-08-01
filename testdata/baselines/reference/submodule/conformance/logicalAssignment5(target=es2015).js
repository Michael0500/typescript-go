//// [tests/cases/conformance/es2021/logicalAssignment/logicalAssignment5.ts] ////

//// [logicalAssignment5.ts]
function foo1 (f?: (a: number) => void) {
    f ??= (a => a)
    f(42)
}

function foo2 (f?: (a: number) => void) {
    f ||= (a => a)
    f(42)
}

function foo3 (f?: (a: number) => void) {
    f &&= (a => a)
    f(42)
}

function bar1 (f?: (a: number) => void) {
    f ??= (f.toString(), (a => a))
    f(42)
}

function bar2 (f?: (a: number) => void) {
    f ||= (f.toString(), (a => a))
    f(42)
}

function bar3 (f?: (a: number) => void) {
    f &&= (f.toString(), (a => a))
    f(42)
}


//// [logicalAssignment5.js]
function foo1(f) {
    f !== null && f !== void 0 ? f : (f = a => a);
    f(42);
}
function foo2(f) {
    f || (f = a => a);
    f(42);
}
function foo3(f) {
    f && (f = a => a);
    f(42);
}
function bar1(f) {
    f !== null && f !== void 0 ? f : (f = (f.toString(), (a => a)));
    f(42);
}
function bar2(f) {
    f || (f = (f.toString(), (a => a)));
    f(42);
}
function bar3(f) {
    f && (f = (f.toString(), (a => a)));
    f(42);
}
