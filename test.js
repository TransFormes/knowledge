
function request(name){
    return new Promise((resolve, reject) => {
        const time = Math.random();
        if(time > 0.5){
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
function basehandleClick(name){
    return new Promise((resolve, reject) => {
        const time = Math.random();
        setTimeout(() => {
            console.log(name);
            resolve(name)
        }, time * 500)
    })
}

const handleClick = async(name) => {
    temp.push(name);
    const res = await basehandleClick(name);
    if(res){
        const first = temp.shift();
        console.log(first);
    }
}

function http(name){
    return new Promise((resolve, reject) => {
        const time = Math.random();
        if(time > 0.5){
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

function chunk(arr, size){
    if(size === 0){
        return [];
    }
    if(arr.length <= size){
        return [arr]
    }
    const newArr = arr.join(",").split(",")
    let baseArr = newArr.splice(size );
    return [newArr, baseArr]
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))
console.log(chunk(['a', 'b', 'c', 'd'], 3))
console.log(chunk(['a', 'b', 'c', 'd'], 5))

const isObj = (val) => Object.prototype.toString.call(val) === '[object Object]'
    function deep(obj){
        if(!isObj(obj)){
            throw 'obj 不是对象'
        }
        const newObj = {};
        Object.keys(obj).forEach(key => {
            if(isObj(obj[key])){
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

function trans(base){
    const stak = [base];
    while(stak.length){
        const current = stak.pop();
        for(let i in current){
            if(typeof current[i] === 'object' && typeof current[i] !== null){
                stak.push(current[i])
            }
            const newKey = i.replace(/_/g, '')
            current[newKey]  = current[i]
            delete current[i]
        }
    }
    return base
}

const res = trans(a);
console.log(res);

function Parent(){}

Parent.prototype.say = function(){
    console.log('parent');
}

Parent.name = function(){
    console.log('parent name');
}

function Child(){}
Child.prototype = Object.create(Parent.prototype);
const c = new Child();
c.say()


function myAll(arr){
    if(!Array.isArray(arr)) return;
    const res = [];
    let index = 0;
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            Promise.resolve(item).then((val) => {
                res[index] = val;
                index++;
                if(index === arr.length){
                    resolve(res)
                }
            }, (e) => {
                reject(e)
            })
        })
    })
}

Promise.myAll = myAll;

function test(value){
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
function deepClone(data){
    if(!data) return;
    if(weakMap.has(data)) return data;
    switch(Object.prototype.toString.call(data)){
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
    for(let i in data){
        if(data.hasOwnProperty(i)){
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


function test(undefined){
    console.log(undefined);
}
test()


//箭头函数没有this 没有argumens 不能new 参数不能重名 没有原型 箭头函数中的this永远不会改变

class Queue{
     p = Promise.resolve();

     next(pro){
         this.p = this.p.then(() => pro);
         return this.p;
     }
}

function https(x){
    const time = (Math.random() + 1) * 500;
    return new Promise((resolve) => {
        setTimeout(resolve, time, x)
    })
}

const myThem = new Queue();

async function handler(x){
    const res = await myThem.next(https(x));
    console.log(res);
}

handler("A");
handler("B");
handler("C");
handler("D");



p = Promise.resolve();
function next(pro){
    p = p.then(() => pro);
    return p;
}

function https(x){
    const time = (Math.random() + 1) * 500;
    return new Promise((resolve) => {
        setTimeout(resolve, time, x)
    })
}

async function handler(x){
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
    get(){
        return val++;
    }
})

// console.log(a);
// console.log(a);
// console.log(a);
if(a == 1 && a == 2 && a == 3){
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

class Ads{
    #name;
    constructor(name){
        this.name = name;
    }
    say(){
        this.#name = 2;
        console.log(this.#name);
    }
}

class Bds extends Ads{
    say(){
        console.log(this.name);
    }
}

const c = new Bds('child')
c.say()