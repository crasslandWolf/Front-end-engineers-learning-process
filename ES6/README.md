学习ES6
=============
#### 什么事ES6?
  ```ES6``` 是 JavaScript 语言的下一代标准, 在2015年6月正式发布.<br>
  ```ES6``` 的目标: 使得 JavaScript 语言可以用来编写大型的复杂的应用程序, 成为企业级开发语言. 

#### 环境支持
  直接插入网页
  <a href="http://aikar.co/projects/traceur/">Traceur</a>允许将 ES6 代码直接插入网页。首先, 必须在网页头部加载 ```Traceur``` 库文件<br>
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
  注意, ```script``` 标签的 ```type``` 属性的值是 ```module``` (或者是traceur), 而不是 ```text/javascript```。 这是 Traceur 编辑器识别 ES6 代码的标识, 编辑器会自动将所有 ```type=module``` 的代码编译为 ```ES5```, 然后交给浏览器执行

#### ES6语法
##### let
  ```let``` 是 ES6 中新增关键字. 
  它的作用类似于 var , 用来声明变量, 但是做声明的变量, 只在 ```let``` 命令所在的代码快内有效.<br>
  ```
  if(true) { let a = 2;} document.write(a);// a is not defined
  ```
###### let 应用
  ```for``` 循环的计数器

###### const命令
  1、```const``` 声明的是常量, 一旦声明, 值将是不可改变的<br>
  2、```const``` 也具有块级作用域<br>
  3、```const``` 不能变量提升(必须先声明后使用)<br>
  4、```const``` 不可重复声明<br>
  5、```const``` 指令指向变量所在的地址, 所以对该变量进行属性设置是可行的(未改变变量地址),
  如果想完全不可改变(包括属性), 那么可以使用冻结<br>
  const C1 = {}; <br>
  C1.a = 1;<br>
  console.log(C1.a);//1<br>
  C1 = {}; // 报错  重新赋值, 地址改变`<br>
  // 冻结对象, 此时前面用不用 const 都是一个效果<br>
  const C2 = Object.freeze({});<br>
  C2.a = 1; //  error, 对象不可扩展
##### 是否包含字符串三种新方法
  传统上, JS 只有 <a href="http://www.w3school.com.cn/jsref/jsref_indexOf.asp">indexOf</a> 方法, 可以用来确定一个字符串是否包含在另一个字符串中. 
###### indexOf(searchvalue, formindex) 方法
  返回一个指定的字符串值在另一个字符串中首次出现的位置, 参数介绍:<br>
  ``` searchvalue ``` : 必须, 规定所检索的字符串<br>
  ``` formindex ```   : 非必须, 规定开始检索的位置, 为空时默认从开头检索, 范围是 0 ~ fatherStr.length - 1<br>
####### 语法: <br>
  ```
  fatherStr.indexOf(childStr, 2);
  ```
###### 提示 
  <ol>
    <li>indexOf() 方法对大小写敏感</li>
    <li>如果没有检索到将返回 -1</li>
  </ol> 

######  ``` ES6 ``` 又提供了三种新方法
  <ul>
    <li>includes(): 返回布尔值, 表示是否找到了参数字符串</li>
    <li>startsWith(): 返回布尔值, 表示参数字符串是否在源字符串的头部</li>
    <li>endsWith(): 返回布尔值, 表示参数字符串是否在源字符串的尾部</li>
  </ul>
  提示: 这三个方法都支持第三个参数, 表示开始搜索的位置
##### repeat() 原字符串重复
  ```repeat(n)``` 返回一个新字符串, 表示将原字符串重复 n 次
###### 语法
  ```
  str.repeat(n)
  ```
##### 模板字符串
###### 模板字符串中, 支持字符串插值: 
  ```
   let first = 'hello'; let last = 'ES6'; console.log('模板字符串: ${first} ${last}');
  ```
###### 模板字符串可以包含多行
  语法请看 <a href="https://github.com/crasslandWolf/Front-end-engineers-learning-process/blob/master/ES6/ES6.html">ES6.html</a>
###### 标签模板
  语法请看 <a href="https://github.com/crasslandWolf/Front-end-engineers-learning-process/blob/master/ES6/ES6.html">ES6.html</a>
##### String.raw()
###### 模板字符串可以是原始的: 
  ```ES6```  还为原生的 ``` String ``` 对象提供了一个 ``` raw ``` 方法.<br>
  若使用 ``` String.raw() ``` 作为模板字符串的前缀, 则字符串可以使原始的, ```反斜线``` 也不再是特殊字符, ``` \n ``` 也不会被解析为换行符.<br>
  语法: let raw = String.raw`hello, ES6. \n`
##### 值是否无穷, NaN
  ```ES6``` 在```Numbe``` 对象上, 新提供了 ```Number.isFinite()``` 和 ```Number.isNaN()``` 两个方法, 用来检查 ```Infinite``` 和 ```NaN``` 这两个特殊值
  <ul>
    <li>Number.isFinite() 用来检查一个数值是否为非无穷</li>
    <li>Number.isNaN() 用来检查一个数值是否为 NaN</li>
    <li>Number.isInteger() 用来判断一个数值是否为 整数</li>
  </ul>
  * 注意: 在 ```JS``` 中 ```整数``` 和 ```浮点数``` 是同样的储存方法, 所以 3 和 3.0 被视为同一个值<br>
  ```
  Number.isInteger(3.0); //true
  ```
##### Mtahd对象
  ```Math``` 对象新增的方法, 都是静态方法, 只能在 ```Math```对象上调用
###### Math.trunc(): 去除一个数的小数部分, 返回整数部分.
  * 注意: 对于空值和无法截取整数的值, 返回NaN
###### Math.sign(): 判断一个数到底是正数、负数、还是零.
  返回五种值:
  <ul>
    <li>参数为 正数, 返回 +1 </li>
	<li>参数为 负数, 返回 -1 </li>
	<li>参数为 0  , 返回  0 </li>
	<li>参数为 -0 , 返回 -0 </li>
	<li>参数为 其他, 返回 NaN</li>
  </ul>
###### Math.cbrt() : 计算一个数的立方根
  语法: Math.cbrt(8); //2
###### Math.fround() :返回一个数的单精度浮点数形式
  语法: Math.fround(1.337); //1.3370000123977661 
###### Math.hypot(): 返回所有参数的的平方和的平方根
  语法: Math.hypot(3, 4); //5
  *注意: 如果参数不是数值, Math.hypot 方法会将其转为数值, 如果有一个参数 ```无法转为数值``` 将返回 ```NaN```
 
