# webpack

## 懒加载原理
 - 动态import引入
 - 静态import 更容易代码静态分析和treeShaking


## loader
 - loader是一个导出为function 的node模块 可以将匹配到的文件进行一次转换
 - 转换器 可以将A文件转成B文件 a.less => a.css

## plugins
 - 扩展webpack功能,并不会直接操作文件，而且基于事件机制,监听打包过程中的节点，执行广泛的任务