---
# 这是文章的标题
title: Markdown 基本语法
# 你可以自定义封面图片
cover: https://image.dreamruins.com/images/anime.jpg
# 这是页面的图标
icon: markdown
# 这是侧边栏的顺序
order: 1
# 设置作者
author: 望间
# 设置写作时间
date: 2023-05-31
# 一个页面可以有多个分类
category:
  - Markdown
# 一个页面可以有多个标签
tag:
  - 笔记
# 摘要
excerpt: 一个编程人员怎么能不会 Markdown 呢
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
---

## 标题

::: tabs#title

@tab 效果

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

@tab 语法

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

:::

## 段落

::: tabs#paragraph

@tab 效果

第三行

第四行

@tab 语法

```markdown
// 使用空行
第三行

第四行
```

:::

## 换行

::: tabs#br

@tab 效果

第一行  
第二行

第五行<br/>第六行

@tab 语法

```markdown
// 第一行后使用两个空格加回车
第一行  
第二行

第五行<br/>第六行
```

:::

## 字体

::: tabs#font

@tab 效果

_斜体_

**粗体**

**_粗斜体_**

@tab 语法

```markdown
_斜体_

**粗体**

**_粗斜体_**
```

:::

## 删除线

::: tabs#strikethrough

@tab 效果

~~删除线~~

@tab 语法

```markdown
~~删除线~~
```

:::

## 下划线

::: tabs#underline

@tab 效果

<u>下划线</u>

@tab 语法

```markdown
<u>下划线</u>
```

:::

## 脚注

::: tabs#footnote

@tab 效果

一个含有脚注的文本[^脚注]

[^脚注]: 脚注内容

@tab 语法

```markdown
一个含有脚注的文本[^脚注]

[^脚注]: 脚注内容
```

:::

## 分割线

::: tabs#divider

@tab 效果

---

@tab 语法

```markdown
---
```

:::

## 列表

### 无序列表

::: tabs#ul

@tab 效果

- item
- item
- item

* item
* item
* item

@tab 语法

```markdown
- item
- item
- item

* item
* item
* item
```

:::

---

### 有序列表

::: tabs#ol

@tab 效果

1. item1
2. item2
3. item3

@tab 语法

```markdown
1. item1
2. item2
3. item3
```

:::

---

### 嵌套列表

::: tabs#list

@tab 效果

1. 第一项
   - 内容一
   - 内容二
2. 第二项
   - 内容一
   - 内容二

@tab 语法

```markdown
1. 第一项
   - 内容一
   - 内容二
2. 第二项
   - 内容一
   - 内容二
```

:::

---

### 任务列表

::: tabs#task-list

@tab 效果

- [x] HTML
- [x] CSS
- [ ] JS

@tab 语法

```markdown
- [x] HTML
- [x] CSS
- [ ] JS
```

:::

## 区块

### 正常区块

::: tabs#block

@tab 效果

> 区块内容
> 区块内容

@tab 语法

```markdown
> 区块内容
> 区块内容
```

:::

---

### 嵌套区块

::: tabs#nest-block

@tab 效果

> 区块内容
>
> > 嵌套内容

@tab 语法

```markdown
> 区块内容
>
> > 嵌套内容
```

:::

## 代码

### 代码片段

::: tabs#line-code

@tab 效果

`a line code`

@tab 语法

```markdown
`a line code`
```

:::

在代码片段中使用 **刻度线(`)**

::: tabs#

@tab 效果

`` `code` ``

@tab 语法

```markdown
`` `code` ``
```

:::

---

### 代码块

::: tabs#block-code

@tab 效果

``` shell
hexo cl
hexo g
hexo d
```

@tab 语法

````markdown
```
hexo cl
hexo g
hexo d
```
````

:::

---

### 指定语言代码块

::: tabs#block-code

@tab 效果

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

@tab 语法

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```
````

:::

## 链接

### 普通链接

::: tabs#link

@tab 效果

[View Room](https://blog.dreamruins.com/)

@tab 语法

```markdown
[View Room](https://blog.dreamruins.com/)
```

:::

---

### 网址和邮箱链接

::: tabs#url-link

@tab 效果

<https://blog.dreamruins.com/>

<thedreamruins@163.com>

@tab 语法

```markdown
<https://blog.dreamruins.com/>

<thedreamruins@163.com>
```

:::

---

### 脚注链接

::: tabs#footnote-link

@tab 效果

[View Room][View Room]

[View Room]: https://blog.dreamruins.com/

@tab 语法

```markdown
[View Room][View Room]

[View Room]: https://blog.dreamruins.com/
```

:::

## 图片

::: tabs#image

@tab 效果

![View Room](http://image.dreamruins.com/images/viewroom.png)

@tab 语法

```markdown
![View Room](http://image.dreamruins.com/images/viewroom.png)
```

:::

## 表格

::: tabs#table

@tab 效果

| 默认对齐 | 左对齐 | 居中对齐 | 右对齐 |
| -------- | :----- | :------: | -----: |
| 单元格   | 单元格 |  单元格  | 单元格 |
| 单元格   | 单元格 |  单元格  | 单元格 |

@tab 语法

```markdown
| 默认对齐 | 左对齐 | 居中对齐 | 右对齐 |
| -------- | :----- | :------: | -----: |
| 单元格   | 单元格 |  单元格  | 单元格 |
| 单元格   | 单元格 |  单元格  | 单元格 |
```

:::

## 转义字符

可以使用 **反斜杠(\\)** 转义以下字符

| 字符 | 名称           | 写法              |
| ---- | -------------- | ----------------- |
| \    | 反斜杠         | `\*`              |
| `    | 刻度线         | <code>\\\`</code> |
| \*   | 星号           | `\*`              |
| \_   | 下划线         | `\_`              |
| {}   | 大括号         | `\{\}`            |
| []   | 中括号         | `\[\]`            |
| ()   | 括号           | `\(\)`            |
| #    | 井号           | `\#`              |
| +    | 加号           | `\+`              |
| -    | 减号（连字符） | `\-`              |
| .    | 点             | `\.`              |
| !    | 感叹号         | `\!`              |
| \|   | 管道           | <code>\\\|</code> |
