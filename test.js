
function request(name) {
    return new Promise((resolve, reject) => {
        const time = Math.random();
        if (time > 0.5) {
            console.log('请求成功', name);
            resolve(name);
        } else {
            console.log('请求失败，继续请求', name);
            request(name);
        }
    })
}



// const a = request('a');
// const b = request('b');
// const c = request('c');
// const d = request('d');

// Promise.all([a, b, c, d]).then(res => {
//     console.log(res);
// })

// const p = Promise.resolve();

// p.then(res => {
//     console.log(1);
//     setTimeout(() => {
//         return 4;
//     }, 2000)
// }).then(res => {
//     console.log(res);
// })

// p.then(res => {
//     console.log(2);
// })

// console.log(module.exports === exports);

// function debounce(fn, wait){
//     let timer = null;
//     return (...args) => {
//         if(timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, wait)
//     }
// }

// function debounce(fm, wait){
//     let timer;
//     return (...args) => {
//         if(timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             fm.applu(this, args)
//         }, wait)
//     }
// }


// function debounces(fn, wait, immediate = true){
//     let timer;
//     const later = () => setTimeout(() => {

//     }, wait)
// }

// class Events{
//     constructor(){
//         this.events = {};
//     }
//     add(key, fn, isOnce = false, ...args){
//         if(!key || !fn){
//             throw `${key} or ${fn} is not defined`;
//         }
//         this.events[key] = this.events[key] || [];
//         if(this.events[key].indexOf(fn) === -1){
//             this.events[key].push(fn); 
//             if(isOnce){
//                 fn(...args);
//                 this.off(key)
//             }
//         }
//     }
//     on(key, fn){
//         this.add(key, fn)
//     }
//     off(key){
//         if(key && this.events[key]){
//             delete this.events[key]
//         }
//     }
//     once(key, fn, ...args){
//         this.add(key, fn, true, ...args)
//     }
//     emit(key, ...args){
//         if(this.events[key]){
//             this.events[key].forEach(cb => cb(...args))
//         }
//     }
// }

// const text = new Events();

// text.on("name", function a(arg) {
//     console.log('on', arg);
// })

// text.on("name", function a(arg) {
//     console.log('on', arg);
// })

// text.once('age', (arg) => {
//     console.log('once', arg);
// }, 2222222)


// text.emit('name', 222)
const p = Promise.resolve();
const temp = []
function basehandleClick(name) {
    return new Promise((resolve, reject) => {
        const time = Math.random();
        setTimeout(() => {
            console.log(name);
            resolve(name)
        }, time * 500)
    })
}

const handleClick = async (name) => {
    temp.push(name);
    const res = await basehandleClick(name);
    if (res) {
        const first = temp.shift();
        console.log(first);
    }
}

function http(name) {
    return new Promise((resolve, reject) => {
        const time = Math.random();
        if (time > 0.5) {
            console.log('请求成功', name);
            resolve(name)
        } else {
            console.log('请求失败', name);
            http(name)
        }
    })
}



const a1 = http('a1')
const a2 = http('a2')
const a3 = http('a3')
const a4 = http('a4')
const a5 = http('a5')


Promise.all([a1, a2, a3, a4, a5]).then(res => {
    console.log(res);
})

function chunk(arr, size) {
    if (size === 0) {
        return [];
    }
    if (arr.length <= size) {
        return [arr]
    }
    const newArr = arr.join(",").split(",")
    let baseArr = newArr.splice(size);
    return [newArr, baseArr]
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))
console.log(chunk(['a', 'b', 'c', 'd'], 3))
console.log(chunk(['a', 'b', 'c', 'd'], 5))

const isObj = (val) => Object.prototype.toString.call(val) === '[object Object]'
function deep(obj) {
    if (!isObj(obj)) {
        throw 'obj 不是对象'
    }
    const newObj = {};
    Object.keys(obj).forEach(key => {
        if (isObj(obj[key])) {
            newObj[key] = deep(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    })
    return newObj
}
const data = {
    name: '2',
    age: {
        test: 2,
        a: undefined,
        c: null,
        d: NaN
    }
}
// console.log(deep(data));


const unique = (arr) => [...new Set(arr)]

const arr = [1, 2, 3, 1, 2, 3]

// console.log(unique(arr));


// function base(a, b, c, d){
//     return a+b+c+d
// }

// function cruying(fn, ...args){
//     return fn.length > args.length ? (...arg) => cruying(fn, ...args, ...arg) : fn(...args)
// }

// console.log(cruying(base)(1)(2)(3, 4));

const a = {
    a_y: {
        a_z: {
            y_x: 6
        },
        b_c: 1
    }
}

function trans(base) {
    const stak = [base];
    while (stak.length) {
        const current = stak.pop();
        for (let i in current) {
            if (typeof current[i] === 'object' && typeof current[i] !== null) {
                stak.push(current[i])
            }
            const newKey = i.replace(/_/g, '')
            current[newKey] = current[i]
            delete current[i]
        }
    }
    return base
}

const res = trans(a);
console.log(res);

function Parent() { }

Parent.prototype.say = function () {
    console.log('parent');
}

Parent.name = function () {
    console.log('parent name');
}

function Child() { }
Child.prototype = Object.create(Parent.prototype);
const c = new Child();
c.say()


function myAll(arr) {
    if (!Array.isArray(arr)) return;
    const res = [];
    let index = 0;
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            Promise.resolve(item).then((val) => {
                res[index] = val;
                index++;
                if (index === arr.length) {
                    resolve(res)
                }
            }, (e) => {
                reject(e)
            })
        })
    })
}

Promise.myAll = myAll;

function test(value) {
    return new Promise(resolve => {
        const time = Math.random() * 1000;
        setTimeout(resolve, time, value)
    })
}

Promise.myAll([test(1), test(2)]).then(res => {
    console.log(res);
})

//基本类型和引用类型的地址存在栈上  引用类型存在堆上
//引用类型的大小不确定 栈是程序在运行编译的时候，系统以及分配好了的， 堆的大小是动态的


const weakMap = new WeakMap();
function deepClone(data) {
    if (!data) return;
    if (weakMap.has(data)) return data;
    switch (Object.prototype.toString.call(data)) {
        case '[object String]':
        case '[object Number]':
        case '[object Boolean]':
        case '[object RegExp]':
        case '[object Date]':
        case '[object Error]':
            return new data.constructor(data.valueOf())
    }
    const res = data instanceof Array ? [] : {};
    weakMap.set(data, res)
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            res[i] = deepClone(data[i])
        }
    }
    return res;
}

const obj = {
    a: [1, 2, 3],
    b: {
        c: 1
    },
    c: 1,
    date: new Date(),
    regExp: new RegExp(/a/),
    fn: () => { console.log('fn') },
    symbol: Symbol()
}
const trans = deepClone(obj);
console.log(trans);


function test(undefined) {
    console.log(undefined);
}
test()


//箭头函数没有this 没有argumens 不能new 参数不能重名 没有原型 箭头函数中的this永远不会改变

class Queue {
    p = Promise.resolve();

    next(pro) {
        this.p = this.p.then(() => pro);
        return this.p;
    }
}

function https(x) {
    const time = (Math.random() + 1) * 500;
    return new Promise((resolve) => {
        setTimeout(resolve, time, x)
    })
}

const myThem = new Queue();

async function handler(x) {
    const res = await myThem.next(https(x));
    console.log(res);
}

handler("A");
handler("B");
handler("C");
handler("D");



p = Promise.resolve();
function next(pro) {
    p = p.then(() => pro);
    return p;
}

function https(x) {
    const time = (Math.random() + 1) * 500;
    return new Promise((resolve) => {
        setTimeout(resolve, time, x)
    })
}

async function handler(x) {
    const res = await next(https(x));
    console.log(res);
}

handler("A");
handler("B");
handler("C");
handler("D");





// let p = Promise.resolve();
// function next(pro){
//     p = p.then(() => pro);
//     return p;
// }

// function https(x){
//     const time = (Math.random() + 1) * 500;
//     return new Promise((resolve) => {
//         setTimeout(resolve, time, x)
//     })
// }

// async function handler(x){
//     const res = await next(https(x));
//     console.log(res);
// }
// handler('A');
// handler('B');
// handler('C');
// handler('A');   

var val = 0

Object.defineProperty(window, "a", {
    get() {
        return val++;
    }
})

// console.log(a);
// console.log(a);
// console.log(a);
if (a == 1 && a == 2 && a == 3) {
    console.log('success');
}

{
    function a() {
        console.log(10);
    }
    console.log(a);
    a = 10;
    a = 210;
    a = 220;
    console.log(a);
    function a() {
        console.log(20);
    }
    console.log(a);
    a = 30;
    console.log(a);
}

class Ads {
    #name;
    constructor(name) {
        this.name = name;
    }
    say() {
        this.#name = 2;
        console.log(this.#name);
    }
}

class Bds extends Ads {
    say() {
        console.log(this.name);
    }
}

const c = new Bds('child')
c.say()


console.log(2);

Promise.resolve().then(() => {
    console.log(1)
});
console.log(3);


Promise.retry = function (fn, time = 4) {
    return new Promise(async (resolve, reject) => {
        while (time--) {
            try {
                const res = await fn();
                resolve(res)
                break;
            } catch (e) {
                if (time === 0) reject(e)
            }
        }
    })
}

const arr = [10, 21, 0, -7, 35, 7, 9, 23, 18];

function getIndex(arr) {
    const newArr = arr.join(",").split(",").filter(x => {
        return x > 0
    }).sort((a, b) => a - b);
    console.log(arr);
    return arr.indexOf(newArr[0])
}
console.log(getIndex(arr));

function getResolve(fn, time = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < time; i++) {
            try {
                const res = await fn();
                resolve(res);
            } catch (e) {
                if (i === time - 1) reject(e)
            }
        }
    })
}


// flex: 0 1 auto
// flex-grow 定义项目放大比例 0为不放大
// flex-shrink 定义项目缩小比例 空间不足 会缩小
// flex-basis 定义在分配多余空间之前，项目占据主轴的空间


function multiRequest(urls, maxNum = 3) {
    const start = async () => {
        return new Promise((resolve) => {
            const pop = urls.pop();
            if (pop) {
                const res = await Promise.resolve(pop);
                resolve(res)
            }
        })
    }

    while (maxNum > 0) {
        maxNum--;
        start();
    }
}

const url = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
]

// 'abc' => {value: 'abc'}
// [abc[bcd[def]]] => {value: abc, childred: {}}

function normalize(str) {
    const result = {};
    let arr = str.match(/\w+/g);
    let c;
    arr.forEach((item, index) => {
        if (index === 0) {
            result.value = item;
            c = result;
        } else {
            c.children = {}
            c.children.value = item
            c = c.children;
        }
    })
    return result;
}

console.log(normalize('[abc[bcd[def]]]'));

var myNum = Number('10000000000'); //字符串转数字后就可以使用toLocaleString()啦~

var num2Str = myNum.toLocaleString(); //"10,000,000,000"
console.log(num2Str);
console.log('10000000000'.replace(/${3}\w/g, '$1.'));



function mySettime(fn, time) {
    let timer;
    timer = setTimeout(() => {
        fn();
        mySettime(fn, time);
    }, time);
    timer.cancel = () => {
        clearTimeout(timer);
    }
    return timer;
}


const obj = {
    'a.b.c': 123,
    'a.d.e': 456
}

function trans(obj) {
    const newObj = {};
    for (const key in obj) {
        const keys = key.split('.');
        if (!newObj[keys[0]]) {
            newObj[keys[0]] = {};
        }
        let temp = newObj[keys[0]];
        for (let i = 1; i < keys.length; i++) {
            const item = keys[i]
            if (i === keys.length - 1) {
                temp[item] = obj[key];
            } else {
                if (!temp[item]) temp[item] = {};
                temp = temp[item];
            }
        }
    }
    console.log(newObj);
}


trans(obj)



function convert(obj) {
    var returnObj = {};
    for (var key in obj) {
        var keyList = key.split('.');
        if (!returnObj[keyList[0]]) {
            returnObj[keyList[0]] = {};
        }
        console.log(returnObj[keyList[0]]);
        var mapObj = returnObj[keyList[0]];
        for (var i = 1; i < keyList.length; i++) {
            var k = keyList[i];
            if (i === keyList.length - 1) {
                mapObj[k] = obj[key];
            } else {
                if (!mapObj[k]) {
                    mapObj[k] = {};
                }
                mapObj = mapObj[k];
            }
        }
    }
    return returnObj;
}

console.log(convert(obj));


// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}


function forEachs(str) {
    let couner = 0;
    let maxNum = 0;
    let s = str[0];
    let res = {};
    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        if (item === s) {
            couner++;
            if (couner > maxNum) {
                maxNum = couner;
                res = { [item]: couner }
            }
            if (couner === maxNum) {
                res[item] = couner;
            }
        } else {
            couner = 1;
            s = item;
        }
    }
    console.log(res);
}

function changeObjProperty(o) {
    o.siteUrl = "http://www.baidu.com"
    o = 1
    o.siteUrl = "http://www.google.com"
}
const webSite = {};
changeObjProperty(webSite);
console.log(webSite);

// function _race(promise){
//     return new Promise((resolve, reject) => {
//         promise.forEach(item => {
//             item.then(resolve,reject);
//         })
//     })
// }

// const reg = /^http(s)?:\/\/\w+.\w+$/;

function cury(fn, ...arg) {
    return fn.length > arg.length ? (...args) => cury(fn, ...arg, ...args) : fn(...arg)
}


function Foo() {
    Foo.a = function () {
        console.log(1)
    }
    this.b = function () {
        console.log(2)
    }
}
Foo.prototype.a = function () {
    console.log(3)
}
Foo.a = function () {
    console.log(4)
}
a = '11\'\'1'
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();

console.log([] == ![]);
// ! > ==
// var 会预先分配内存空间 等真正执行的时候在存储对应的变量 如果是引用类型 会在堆内存存储内容，在栈中存储一个指向堆内存的指针
// const 一样会先检查 
// let 会先检查是否有相同的变量名 ，有就报错

const admins = Promise.resolve(1);

Promise.prototype.fin = function (callback) {
    const p = this.constructor;
    console.log(p);
    return this.then(value => p.resolve(callback()).then(() => value), reason => p.reject(callback()).then(() => reason))
}

admins.fin((val) => {
    console.log('val', val);
})
admins.then(res => {
    console.log(res);
    return 4;
})


const phone = 15079283571;
    
const reg = /^(\d{3})(\d{4})(\d{4})$/;

console.log(reg.test(phone));