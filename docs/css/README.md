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
   - flex-grow 定义项目放大比例
   - flex-shrink 定义项目缩小比例，当空间不足时，会缩小
   - flex-basis 定义项目在分配多余空间之前，项目占据主轴的大小
   - flex计算规则
     - 当container比内容大时，超出的部分会按照子元素的占比等比分配
     - 当container比内容小，会按照缩小比例等比缩小 缩小后自身大小 = 自身大小 - 自身大小 * 缩小比例 * 超出大小 / (所以子元素大小 * 缩放大小)

## rem em px
 - rem是指相对根元素的字体大小单位(HTML)
 - em 相对于父级的字体大小从而设置自己的字体大小
 - px 像素，相当于显示器屏幕分辨率而言

## vw vh
 - 视口大小，100vw相当于整个屏幕的宽度
 - 100vh相当于整个屏幕的高度

## 动画
 - animation
 - .example{animation: 动画名称 执行时长 执行次数 是否延迟执行}
```css
@keyframes 动画名称 {}
```

## 外边距塌陷
 - 竖直方向margin 取最大值
 - 水平方向相加

## iPod iPad适配
```css
<meta name="viewport" content="width=720, user-scalable=no, target-densitydpi=device-dpi">
```
   - target-densitydpi 表示目标设备的密度等级 作用决定css中的1px代表多少物理像素
     1. 值可以是high-dpi、nedium-dpi、low-dpi、device-dpi
     2. chrome 上面会有警告错误