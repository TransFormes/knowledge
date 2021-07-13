# javascript

## 微任务、宏任务
   - 执行顺序 先执行宏任务开始 宏任务里面有微任务，执行所有微任务、在开始一下轮
   - 微任务包含 Promise MutationObserver Promise.then queueMicrotask
   - 宏任务 script setTimeOut setInterval
```js
    async function start1(){
        console.log('1')
        await start2();
        console.log('2')
    }
    console.log('3')
    start1();
    async function start2(){
        console.log('4')
        return new Promise((resolve, reject) => {
            console.log('5')
            setTimeout(() => {
                resolve('6')
            }, 0)
        })
    }
    setTimeout(() => {
        console.log('7')
    }, 0)
    new Promise((resolve, reject) => {
        console.log('8')
        resolve('9')
        console.log('10')
        setTimeout(() => {
            console.log('12')
        }, 0)
    })
    console.log('11')

    // 执行顺序 => 3 1 4 5 8 10 11 2 7 12
```

### Promise链式调用
 - 链式调用中，只有前一个then的回调执行完毕后，跟着的then的回调才会被加入至微任务
 ```js
    Promise.resolve()
    .then(() => {
        console.log("then1");
        Promise.resolve().then(() => {
            console.log("then1-1");
        });
        Promise.resolve().then(() => {
            console.log("then1-2");
        });
    })
    .then(() => {
        console.log("then2");
    });
 ```
 - 同一个Promise的每个链式调用的开端会依次进入微任务
   ```js
      const p = Promise.resolve()
      p.then(() => {
        console.log("then1");
        Promise.resolve().then(() => {
            console.log("then1-1");
        });
      }).then(() => {
        console.log("then1-2");
      });

      p.then(() => {
        console.log("then2");
      }); 
   ``` 
 - 当 Promise resolve了一个Promise时 会产生一个NewPromiseResolveThenableJob 也是一个微任务 并且jobs还会调用一次then函数来resolve Promise 又产生了一次微任务 所以会触发两次微任务

## 深浅拷贝
```js
浅拷贝
Object.assing(obj1, obj2)
深拷贝
const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]'
function deep(obj){
    const res = {};
    Object.keys(obj).forEach(item => {
        if(isObject(obj[item])){
            res[item] = deep(obj[item])
        } else {
            res[item] = obj[item];
        }
    })
    return res;
}
```
## 数组降维
```js
es6 数组新增方法  Array.prototype.flat(arg) 不传参数 降成一维数组

function flat(arr){
    let newArr = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
            newArr = [...newArr, ...flat(item)]
        } else {
            newArr.push(item)
        }
    })
    return newArr;
}
```

## call apply bind
 - 都是改变this指向
 - call example.call(this, arg1, arg2, ...)
 - apply xx.apply(this, [arg1, arg2])
 - bind 返回一个新数组 xx.bind(this)  
   1. bind会创建一个新的绑定函数（bound function, BF）
   2. 绑定函数具有的内部属性
     1. [[BoundTargetFunction]] 包装的函数对象
     2. [[BoundThis]] 在调用包装函数时始终作为this值传递的值
     3. [[BoundArguments]] 对包装函数调用优先使用列表元素填充参数列表
     4. [[Call]] 执行与此对象关联的代码
   3. 绑定函数可以使用new运算符
```js
call
function myCall(context, ...arg){
    context = context ?? window
    context.fn = this;
    const args = Array.from(arg).splice(1)
    const res = context.fn(...args)
    delete context.fn;
    return res;
}

apply 
function myApply(context, ...arg){
    context = context ?? window
    context.fn = this;
    let res;
    if(arg.length){
        res = context.fn(...arg)
    } else {
        res = context.fn();
    }
    delete context.fn;
    return res;
}

bind
function myBind(context){
    const _this = this;
    const arg = Array.from(arguments).splice(1);
    return function F(){
        if(_this instanceof F){
            return new _this(...arg, ...arguments)
        } 
        return _this.apply(context, [...arg, ...arguments])
    }
}
```

## intanceof
 - 判断一个实例是否是其父类或祖先类型的实例
```js

    function myIntanceof(target, origin){
        while(target){
            if(target.__proto__ === origin.prototype){
                return true;
            }
            target = target.__proto__
        }
        return false;
    }

```

## new
  - 能让一个构造函数返回一个对象
  - 会让函数体内的this指向当前函数
  - 会让当前实例指向构造函数的peototype
```js
    function myNew(){
        const obj = {};
        const arg = [].shift.call(arguments)
        obj.__proto__ = arg.prototype;
        const res = arg.apply(obj, arguments);
        return res instanceof Object ? res : obj;
    }
```

## 继承

### 原型链继承
 - 原型中的引用类型将被所有实例共享
 - 子类实例化的时候不能传参
```js
    function Parent(){
        this.children = ['1', '2']
    }
    Parent.prototype.getChildren = function() {
        return this.children;
    }
    function child(){}
    child.prototype = new Parent();
    const child1 = new child();
    child1.children.push('3')
    const child2 = new child();
    console.log(child2.children);
```
### es6 extends

### 借用构造函数实现继承
```js
   function Parent(name){
       this.name = name;
       this.getName = function(){
           return this.name;
       }
   } 
   function child(name){
       Parent.call(this, name);
   }
   child.prototype = new Parent();
```
### 组合继承
```js
    function Parent(name){
        this.name = name;
        this.children = [1, 2]
    }
    Parent.prototype.getName = function(){
        return this.name;
    }
    function child(name, age){
        Parent.call(this, name);
        this.age = age;
    }
    child.prototype = new Parent();
    child.prototype.constructor = child;

```
### create继承
```js
    function Parent(){}
    Parent.prototype.getName =function(){
        return '22';
    }
    function Child(){}
    Child.prototype = Object.create(Parent.prototype);
    const child = new Child();
    child.getName();
```

### ES5和ES6继承的区别
 - ES5的继承先创建子类的实例，然后将父类的方法添加到this上面（Parent.call(this)）
 - ES6的继承是先将父类实例对象的属性和方法加到this上面（所以必须先调用super方法）,然后在意子类的构造函数修改this

## 数组去重
```js
    function unique(arr){
        return arr.filter((item, index, array) => array.indexOf(item) === index)
    }

    es6
    function unique(arr){
        return [...new Set(arr)]
    }
```
## 发布订阅模式
```js
    class EventBus{
        constructor(){
            this.cache = {}
        }
        on(name, fn){
            this.cache[name] = this.cache[name] || [];
            this.cache[name].push(fn);
        }
        off(name){
            if(this.cache[name]){
                delete this.cache[name];
            }
        }
        emit(name, arg){
            if(this.cache[name]){
                this.cache[name].forEach(cb => cb(arg));
            }
        }
    }
```

## 偏函数
 - 将一个n参的函数转成固定x参的函数，剩余参数（n-x）将在下次调用全部传入
```js
    function add(a, b ,c){
        return a + b + c
    }
    function curring(fn, ...args){
        return (...arg) => {
            return fn(...args, ...arg)
        }
    }
```

## 原生ajax
 - readyState 状态码
   - 0 代理被创建 但未调用open方法
   - 1 open方法已经被调用
   - 2 send方法已经被调用 并且头部和状态已经可以获得
   - 3 下载中 responseText 已经包含部分数据
   - 4 下载操作已经完成
- status 浏览器状态码
```js

    function request(){
        const xml = new XMLHttpRequest();
        xml.open('get', 'https://www.baidu.com');
        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
                console.log(xml.responseText)
            }
        }
        xml.send();
    }

```

## JOSN.stringify
 - function 转换成 undefined
 - Sysbol 转换成 undefined
 - NaN Infinity 转化成 null
 - 会过滤值为undefined的键值对

## async await 
 - async函数 async是asyncFunction构造函数的实例 允许使用await关键字
 - async函数 会返回一个promise
   - 如果async函数返回值不像promise 将会被隐式的包装在一个promise里面 
   ```js
    async function test(){
        return 1;
    }
    等价于
    function test(){
        return Promise.resolve(1)
    }
   ```   
 - async 函数从第一行代码到第一个await 表达式是同步运行
 - async 函数体内有一个await表达式 async函数就一定会异步执行
  ```js
    async function test(){
        await 1
    }
    等价于
    async function test(){
        return Promise.resolve(1).then(() => undefined)
    }
  ``` 
  
## 对象赋值
```js
    const data = {
        age: 2
    }
    function setAge(myData){
        myData.age = 3;
        myData = {};
        return myData;
    }

    const newData = setAge(data)
    console.log(newData)  // {}
    console.log(data)  // {age: 3}
```
 - 对象是引用类型，都是值的传递，一旦值改变了 大家都改变了
 - 但是如果函数把对象重新赋值了，除非自己重新赋值， 不然都不可能成功

## IIFE自执行函数（函数表达式、与函数声明不一样）   
```js
    ;(function a(){
        a = 10;
        console.log(a)
    })()
    // 打印函数a
```
 - 函数表达式与函数声明不同，函数名只在函数内部有效，并且是常量，不能改变
 - 严格莫斯下会报错 不是严格模式会忽略对常量的赋值


## generate与async的区别
 - generate 是ES2015提出的 函数需要增加一个*符号 配合yield使用
 - generate函数会返回一个遍历器，可以用for of循环出每个状态
 - generate并不会立即执行，需要手动调用next获取下一个状态
 - async函数 是ES2017提成的，需要增加async 配合await使用
 - async函数会返回一个promise 就算是普通值也会被promise.resolve()包裹

