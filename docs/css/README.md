---
prev: false
next: /js/
---
# CSS整理

## CSS加载规则
  - 从右向左加载，选择器层级越多，加载越慢
  - !important > 内联样式 > ID选择器 > 类选择器 > 类型选择器
```css
 !important > style=“height: 20px” > #example > .example > h1
```

## CSS盒模型（box-sizing）
 - content-box是默认值，最后大小 = 内容+border+padding
 - border-box  内容区域大小 = 宽度 - border - padding 
::: tip 提醒
border-box不包含margin
:::

## 伪类和伪元素的区别
 - 伪类：不属于dom结构，属于css行为，例（:first-child）/ 用户行为伪类：:hover
 - 伪元素：属于dom结构，例：::after
::: tip 提醒
伪类用:开头 
伪元素用::开头
:::

## BFC概念
 - 块格式化上下文(Block Formating Context) 常见的例如块元素 （div, p）

## 水平垂直居中
```css
#parent{
    display:flex;flex-direction: row; just-content: center
}
```
```css
#parent{position: relative;}
#child{
    position: absolute;left: 50%;transform:translateX(-50%);
}
```
```css
#parent{
    display:table-cell;
    text-align:center;
    width: 240px;   
}
```
## Flex: 1
 - 铺满弹性容器中可用的空间
 - 是flex-grow、flex-shrink、flex-basis的缩写

## rem em px
 - rem是指相对根元素的字体大小单位(HTML)
 - em 相对于父级的字体大小从而设置自己的字体大小
 - px 像素，相当于显示器屏幕分辨率而言

## vw vh
 - 视口大小，100vw相当于整个屏幕的宽度
 - 100vh相当于整个屏幕的高度

## 外边距塌陷
 - 竖直方向margin 取最大值
 - 水平方向相加