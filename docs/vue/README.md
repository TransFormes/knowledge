---
sidebar: auto
---

# VUE2.X

## 生命周期
 - beforeCreate
   - 数据观测、event、watcher之前调用
 - created
   - 数据观测完成、warch、event事件回调
 - beforeMounted
   -  挂载之前 render首次调用
 - mounted
   - 实例挂载之后 
 - beforeUpdate
   - 数据更新时调用，打补丁之前调用
 - updated
   - 打补丁之后调用
 - beforeUnmounted
   - 卸载组件之前调用
 - unMounted
   - 卸载之后调用 事件组件全部被移除
 - deactive
   - keep-alive 停用时调用
 - activated
   -  keep-alive 激活时调用
 - errorCaptured
   - 捕获一个来自子孙组件的错误调用，接受三个参数 错误对象、错误组件的实例、错误来源的字符串
   - 可以返回false停止向上传播
 - renderTracked
   - dom重新渲染时调用
   - 接受event作为参数 
   - key target type
 - renderTriggered
   - 当虚拟dom重新渲染被触发和调用
   - 此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键
::: tip 提醒
    2.x 和 3.x 先执行setup里面的生命周期 在执行options里面的生命周期
    onBeforeMounted => beforeMouned => onMounted => mounted
:::


## v-if、v-show、v-html
 - v-if 为假的时候render的时候不会渲染
 - v-show 切换的display属性
 - v-html 是设置innerHTML为html的值

## vue 组件加载顺序
 - 父组件beforeCreate => 父组件 created => 父组件 beforeMounted => 子组件 => beforeCreate => => 子组件 created => 子组件 beforeMounted => 子组件 mounted => 父组件 mounted
 - 多个子组件顺序 子组件 => beforeCreate => => 子组件 created => 子组件 beforeMounted => 子组件 beforeCreate => => 子组件 created => 子组件 beforeMounted => mounted => mounted 按照组件组件顺序加载和组件复杂度

## vue组件更新顺序
 - 有pros的时候 父组件beforeUpdate => 子组件 beforeUpdate => 子组件 updated => 父组件 updated
 - 没有props的时候 子组件跟新子组件 不触发父组件事件 父组件更新父组件 不触发子组件

## 子组件可以改props吗
 - 2.x 可以更改 可以通过参数接受的形式 data中重新定义新的值初始化为pros
 - 3.x 不能更改 会直接报错

## 数组更新 dom为什么能更新
 - vue内部劫持了数组更新的方法 


## vue data为什么要声明成一个函数
 - 在组件中data必须声明成函数 因为组件可能在多个地方引用 如果声明成对象可能会造成数据源污染 声明成函数 函数返回一份新的数据 避免相互污染
 - 跟实例中可以声明成对象

## vue 有了数据劫持为什么还要DOM diff
 - vue的响应式系统通过依赖收集可以直接知道哪里在变化。但是绑定需要watcher,如果颗粒度很细就会有很多watcher,很大的开销。所以vue采用的是中等粒度。组件级别监听，然后系统知道哪个组件变化对该组件进行diff


# VUE3.X

## vue3优化了哪些内容
 - treeSking 将API不绑定在this上面 
 - 重写虚拟dom 由模板整体大小相关提升为动态内容的数量相关（Block tree）
 - 优化插槽生成 之前父组件重新渲染 子组件也必须重新渲染 提升为可以单独渲染父组件和子组件
 - 静态树提升 vue3的编译器能够检测什么是静态组件 将其提升 降低渲染成本 只创建一次
 - 静态属性提升 打补丁的时候跳过不会改变的节点
 - 使用proxy代替object.definedProperty 

