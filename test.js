
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
    // temp.push(name);
    const res = await p.then(basehandleClick(name));
    console.log(res);
    // if(res){
    //     const first = temp.shift();
    //     console.log(first);
    // }
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