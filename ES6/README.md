学习ES6
=============
#### 什么事ES6?
  ES6是 JavaScript 语言的下一代标准, 在2015年6月正式发布.<br>
  ES6的目标: 使得 JavaScript 语言可以用来编写大型的复杂的应用程序, 成为企业级开发语言. 

#### 环境支持
  直接插入网页
  <a href="http://aikar.co/projects/traceur/">Traceur</a>允许将 ES6 代码直接插入网页。首先, 必须在网页头部加载 Traceur 库文件<br>
#####  加载Traceur编译器
  ```
  <script src="http://google.github.io/traceur-compiler/bin/traceur.js" type="text/javascript"></script>
  ```
##### 将Traceur编译器用于网页
  ```
  <script src="http://google.github.io/traceur-compiler/src/bootstrap.js" type="text/javascript"></script>
  ```
##### 打开实验选项，否则有些特性可能编译不成功
  ```
  <script> traceur.options.experimental = true;</script>
  ```

  ```
  <script type="module">(content)</script>
  ```
  注意, script 标签的 type 属性的值是 module (或者是traceur), 而不是 text/javascript。 这是 Traceur 编辑器识别 ES6 代码的标识, 编辑器会自动将所有 type=module 的代码编译为 ES5, 然后交给浏览器执行

#### ES6语法
##### let
  let 是 ES6 中新增关键字. 
  它的作用类似于 var , 用来声明变量, 但是做声明的变量, 只在 let 命令所在的代码快内有效.<br>
  ```
  if(true) { let a = 2;} document.write(a);// a is not defined
  ```
###### let 应用
  for 循环的计数器

###### const命令
  1、const 声明的是常量, 一旦声明, 值将是不可改变的
  2、const 也具有块级作用域
  3、const 不能变量提升(必须先声明后使用)
  4、const 不可重复声明
  5、const 指令指向变量所在的地址, 所以对该变量进行属性设置是可行的(未改变变量地址), 
     如果想完全不可改变(包括属性), 那么可以使用冻结
  ```
  const C1 = {}; <br>
  C1.a = 1;<br>
  console.log(C1.a);//1<br>
  C1 = {}; // 报错  重新赋值, 地址改变`<br>
  // 冻结对象, 此时前面用不用 const 都是一个效果<br>
  const C2 = Object.freeze({});<br>
  C2.a = 1; //  error, 对象不可扩展