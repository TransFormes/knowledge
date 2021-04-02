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
    const newArr = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
            newArr = [...newArr, ...flat(item)]
        } else {
            newArr = [...newArr, ...item]
        }
    })
    return newArr;
}
```