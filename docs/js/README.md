# javascript

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
```