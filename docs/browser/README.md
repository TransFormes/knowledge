---
sidebar: auto
---
# HTML

## keep-alive
  - 是指在一次TCP连接中完成多个http请求 为了达到复用tcp连接的行为

## webscoket
 - 先发起一个http协议 服务器进行回应

## CDN原理
 - 把内容缓存到多个节点，用户向域名发起请求时，请求会被调度至最接近用户的服务节点，从而降低访问延迟

## 从浏览器地址栏输入 URL 到显示网页，这个过程是怎么实现的？
 - DNS解析
 - TCP连接 TCP三次握手
   - 第一次由浏览器发起，告诉服务器，我准备发送请求了
   - 第二次由服务器发起，告诉浏览器我准备好了。还会告诉浏览器我收到了你的请求
   - 第三次由浏览器发送，告诉服务器，我马上发送，准备接受吧
 - 发送HTTP请求
 - 服务器处理请求并返回HTTP报文
 - 浏览器解析渲染页面
 - 连接结束 TCP四次挥手
   - 第一次由浏览器发送，告诉服务器我东西发送完了，准备关闭吧
   - 第二次由服务器发送，告诉浏览器，我东西接受完了，我准备关闭了
   - 第三次由服务器发送，我东西发送完了，你准备关闭吧
   - 第四次由浏览器发送，我东西接受完了，我准备关闭了，你也准备关闭吧

## 浏览器渲染机制
 - 在浏览器输入url
 - 浏览器向服务器发送请求，接收响应
 - HTML解析器自上而下将HTML文件解析成一颗DOM树，树上的节点就是相应的元素
 - CSS解析器将css解析成CSSOM树
 - 根据DOM树和CSSOM树构建相应的render树
 - 布局：计算出每个节点在屏幕中的位置
 - 绘制：将内容显示在屏幕上

## 回流、重绘
 - 回流：当浏览器上面某个位置的布局发生了变化，浏览器会重新计算出该节点的布局，重新验证并计算render树
 - 重绘：只改变元素的颜色、字体等不影响布局的属性时，浏览器会重新渲染render树，进行重绘操作
 - 回流一定会引起重绘
  

## http1.x
 - http1.x是序列和阻塞机制 文本传输
 - http2.x是多路复用TCP连接，在一个连接里，客户端和浏览器端都可以发送多个请求和回应，并且顺序不用对应，这样就避免了队头阻塞

## 浏览器状态码
 - 200 成功
 - 300 重定向
   - 301 永久重定向 搜索引擎抓取新地址将旧的网址替换为重定向后的地址
   - 302 临时重定向 搜索引擎抓取新的内容会保存旧的地址
 - 400 客户端错误
 - 500 服务端错误