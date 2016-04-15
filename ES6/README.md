学习ES6
=============
----------

## 什么是ES6?
  ```ES6``` 是 JavaScript 语言的下一代标准, 在2015年6月正式发布.<br>
  ```ES6``` 的目标: 使得 JavaScript 语言可以用来编写大型的复杂的应用程序, 成为企业级开发语言. 

## 环境支持
  直接插入网页
  <a href="http://aikar.co/projects/traceur/">Traceur</a>允许将 ES6 代码直接插入网页。首先, 必须在网页头部加载 ```Traceur``` 库文件<br>
##  加载Traceur编译器
  ```
  <script src="http://google.github.io/traceur-compiler/bin/traceur.js" type="text/javascript"></script>
  ```
#### 将Traceur编译器用于网页
  ```
  <script src="http://google.github.io/traceur-compiler/src/bootstrap.js" type="text/javascript"></script>
  ```
#### 打开实验选项，否则有些特性可能编译不成功
  ```
  <script> traceur.options.experimental = true;</script>
  ```

  ```
  <script type="module">(content)</script>
  ```

 *注意, ```script``` 标签的 ```type``` 属性的值是 ```module``` (或者是traceur), 而不是 ```text/javascript```。 这是 Traceur 编辑器识别 ES6 代码的标识, 编辑器会自动将所有 ```type=module``` 的代码编译为 ```ES5```, 然后交给浏览器执行*

## ES6语法
#### let
  
**let** 是 ES6 中新增关键字. 
  它的作用类似于 var , 用来声明变量, 但是做声明的变量, 只在 ```let``` 命令所在的代码快内有效.<br>
  ```
  if(true) { let a = 2;} document.write(a);// a is not defined
  ```
#### let 应用
  **for** 循环的计数器

#### const命令
  1、**const** 声明的是常量, 一旦声明, 值将是不可改变的<br>
  2、**const** 也具有块级作用域<br>
  3、**const** 不能变量提升(必须先声明后使用)<br>
  4、**const** 不可重复声明<br>
  5、**const** 指令指向变量所在的地址, 所以对该变量进行属性设置是可行的(未改变变量地址),
  如果想完全不可改变(包括属性), 那么可以使用冻结<br>
  const C1 = {}; <br>
  C1.a = 1;<br>
  console.log(C1.a);//1<br>
  C1 = {}; // 报错  重新赋值, 地址改变`<br>
  // 冻结对象, 此时前面用不用 const 都是一个效果<br>
  const C2 = Object.freeze({});<br>
  C2.a = 1; //  error, 对象不可扩展
#### 是否包含字符串三种新方法
  传统上, JS 只有 <a href="http://www.w3school.com.cn/jsref/jsref_indexOf.asp">indexOf</a> 方法, 可以用来确定一个字符串是否包含在另一个字符串中. 
##### indexOf(searchvalue, formindex) 方法
  返回一个指定的字符串值在另一个字符串中首次出现的位置, 参数介绍:<br>
  **searchvalue** : 必须, 规定所检索的字符串<br>
  **formindex**   : 非必须, 规定开始检索的位置, 为空时默认从开头检索, 范围是 0 ~ fatherStr.length - 1<br>
##### 语法: <br>
  ```
  fatherStr.indexOf(childStr, 2);
  ```
##### 提示 
  <ol>
    <li>indexOf() 方法对大小写敏感</li>
    <li>如果没有检索到将返回 -1</li>
  </ol> 

####  ``` ES6 ``` 又提供了三种新方法
  <ul>
    <li>includes(): 返回布尔值, 表示是否找到了参数字符串</li>
    <li>startsWith(): 返回布尔值, 表示参数字符串是否在源字符串的头部</li>
    <li>endsWith(): 返回布尔值, 表示参数字符串是否在源字符串的尾部</li>
  </ul>
  提示: 这三个方法都支持第三个参数, 表示开始搜索的位置
#### repeat() 原字符串重复
  **repeat(n)** 返回一个新字符串, 表示将原字符串重复 n 次
##### 语法
  ```
  str.repeat(n)
  ```
#### 模板字符串
##### 模板字符串中, 支持字符串插值: 
  ```
   let first = 'hello'; let last = 'ES6'; console.log('模板字符串: ${first} ${last}');
  ```
##### 模板字符串可以包含多行
  语法请看 <a href="https://github.com/crasslandWolf/Front-end-engineers-learning-process/blob/master/ES6/ES6.html">ES6.html</a>
##### 标签模板
  语法请看 <a href="https://github.com/crasslandWolf/Front-end-engineers-learning-process/blob/master/ES6/ES6.html">ES6.html</a>
#### String.raw()
##### 模板字符串可以是原始的: 
  **ES6**  还为原生的  String  对象提供了一个  raw  方法.<br>
  若使用**String.raw()** 作为模板字符串的前缀, 则字符串可以使原始的, **反斜线** 也不再是特殊字符, **\n**  也不会被解析为换行符.<br>
  语法: let raw = String.raw`hello, ES6. \n`
#### 值是否无穷, NaN
  ```ES6``` 在```Numbe``` 对象上, 新提供了 ```Number.isFinite()``` 和 ```Number.isNaN()``` 两个方法, 用来检查 ```Infinite``` 和 ```NaN``` 这两个特殊值
  <ul>
    <li>Number.isFinite() 用来检查一个数值是否为非无穷</li>
    <li>Number.isNaN() 用来检查一个数值是否为 NaN</li>
    <li>Number.isInteger() 用来判断一个数值是否为 整数</li>
  </ul>
  *注意: 在 ```JS``` 中 ```整数``` 和 ```浮点数``` 是同样的储存方法, 所以 3 和 3.0 被视为同一个值*<br>
  ```
  Number.isInteger(3.0); ---> true
  ```
#### Math对象
  **Math** 对象新增的方法, 都是静态方法, 只能在 ```Math```对象上调用
##### Math.trunc(): 去除一个数的小数部分, 返回整数部分.
  *注意: 对于空值和无法截取整数的值, 返回NaN*
##### Math.sign(): 判断一个数到底是正数、负数、还是零.
  返回五种值:
  <ul>
    <li>参数为 正数, 返回 +1 </li>
	<li>参数为 负数, 返回 -1 </li>
	<li>参数为 0  , 返回  0 </li>
	<li>参数为 -0 , 返回 -0 </li>
	<li>参数为 其他, 返回 NaN</li>
  </ul>
##### Math.cbrt() : 计算一个数的立方根
  语法: Math.cbrt(8); ---> 2
##### Math.fround() :返回一个数的单精度浮点数形式
  语法: Math.fround(1.337); ---> 1.3370000123977661 
##### Math.hypot(): 返回所有参数的的平方和的平方根
  语法: Math.hypot(3, 4); ---> 5
  *注意: 如果参数不是数值, Math.hypot 方法会将其转为数值, 如果有一个参数 ```无法转为数值``` 将返回 ```NaN```*
#### Math 对数的方法
  请在 <a href="http://www.hubwiz.com/class/5594e91ac086935f4a6fb8ef">汇智网</a> 查看
#### 将两类对象转为真正的数组
  **Array.from()** 方法用于将两类对象转为真正的数组: 类似数组的对象(`array-like object`)和可遍历(`iterable`)的对象(包括ES6新增的数组结构Set和Map).<br>
  `forEach` 方法, 只有真正的数组才能使用这个方法, 使用**Array.from()** 将`类似数组的对象`转为真正的`数组`.<br>
  任何有 `length` 属性的对象, 都可以通过 `Array.from` 方法转换为 `数组`<br>
  语法: `Array.from({0: "jinzk", 1: "lzx", length: 2})`<br>
  **Array.from()** 还可以接受 `第二个参数`, 作用类似于数组的 **map** 方法, 用来对每个元素进行处理<br>
  语法:
  `Array.from([1, 2, ,3 , , 4], x => x || 0)`,将数组中布尔值为false的成员转换为0<br>
  `Array.from([1, 2, ,3 , , 4]).map(x => x || 0)`
#### 将值转换为数组
  **Array.of** 方法用于将一组值, 转换为数组
  语法: Array.of(3,2,7); ---> [3,2,7]<br>
  *这个方法主要目的是弥补数组构造函数 Array() 的不足, 因为参数个数的不同, 造成 Array() 的行为有差异, 只有当参数不少于2个, Array() 才能返回由参数组成的新的新数组*
#### 找出第一个符合条件的数组成员和位置
  **数组实例的 find 方法**, 用于找出第一个符合条件的数组成员,它的参数是一个回调函数, 所有数组成员依次执行该回调函数, 直到找出第一个返回值为 `true` 的成员, 然后返回该成员。如果没有符合条件的成员, 则返回 `undefined` <br>
  语法: 
  ```
  array.find(function(value, index, arr) { return value > 10}); ---> 返回数组第一个大于10的成员
  ```
  回调函数参数代表的依次是: *当前的值*、*当前的位置*和*原数组*<br>
  **数组实例的findIndex方法**, 用法一 **find**方法非常类似, 返回第一个符合条件的数组成员的位置, 如果所有成员都不符合条件, 则返回-1
#### fill()填充数组
  **fill()** 使用给定的值, 填充一个数组<br>
  该方法用于空数组初始化非常方便, 数组中已有的元素, 会被全部抹去<br>
  **fill()**还可以接受第二个和第三个参数, 用于指定填充的*起始位置*和*结束位值*<br>
  语法: ```new Array(3).fill(7)```
#### ES6 提供的三个新的方法
  <ul>
    <li>entries()</li>
	<li>keys()</li>
	<li>values()</li>
  </ul>
  这三个方法用于遍历数组. 他们都返回一个遍历器, 可以用for...of循环进行遍历, 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历、entries()是对键值对的遍历<br>
  语法: 
  ```
  for(let index of [1,2].keys()) {console.log(index)}
  ```
#### 属性的简洁表示法
  ```
  function(){var x = 1; var y = 2; return {x, y};} -->{x:1,y:2}
  ```
#### 属性名表达式
  ```
  var key1 = 'name'; var obj = {[key1]: "jinzk"}
  ```
#### 比较两个值是否严格相等
  **Object.is()**用来比较两个值是否严格相等, 它与**===**的行为基本一致,有两个不同之处:
  <ul>
	<li>Object.is(+0, -0)----> false</li>
    <li>Object.is(NaN, NaN)---->true</li>
  </ul>
#### 源对象的所有可枚举属性, 全部复制到目标对象
  **Object.assign**放假用来将源对象`source`的所有可枚举属性, 复制到目标对象`target`中, 它至少需要两个参数, 第一个是目标对象, 之后的都是源对象, 又要有一个参数不是对象就会报错
  语法:
  ```
  Object.assign(target, source1, source2,...)
  ```
  *注意: 如果目标对象与源对象有同名属性, 或者多个源对象有同名的属性, 则后面你的会覆盖前面的属性*
#### 默认参数
  现在可以在定义函数额时候指定函数参数的**默认值**了, 而不用想以前那样通过逻辑或者操作符来达到目的了<br>
  语法:
  ```
  function fn(name='jinzk', age=23){console.log(`name:${name}, age: ${age}`)}; fn(undefined, 44);
  ```
#### rest参数
  **rest 参数**(形式为`...变量名`)可以成为补丁参数, 用于获取函数的多余参数, 这样就不需要使用 `arguments` 对象了
  语法: `function add(...value){//TODO...}` value 是一个数组, 代表函数 `add` 的所有参数
#### 扩展运算符
  **扩转运算符(spread)**是三个点(...). 它好比**rest**参数的逆运算,将一个数组转为用 **,** 分割的**参数数列**.<br>
  语法: 
  ```
  var arr = [1,2,3];function fn(a,b,c){//TODO...}; fn(...arr); 
  ```
#### 箭头函数
  **箭头函数**是使用**=>**语法的函数的简写形式.他同时支持表达式体和语句体, 和普通函数不同的是箭头函数和其上下文中的大妈共享同一个this.<br>
  语法: 
  ```
  num.forEach(v => {if(v > 0){arr.push(v)}});
  ```<br>
  *箭头函数的三个注意点*<br>
  <ul>
    <li>函数体内的this对象,绑定定义时所在的对象,而不是使用时所在的对象</li>
	<li>不可以当做构造函数, 也就是说不能使用new命令</li>
	<li>不可以使用arguments对象,不存在</li>
  </ul>
#### 函数绑定
  **函数绑定运算符**是并排的两个双引号: `::`.双引号左边是一个对象, 右边是一个函数. 自动将左边的对象作为上下文的环境(即 this 对象),绑定到右边的函数上去<br>
  语法: 
  ```
  foo::bar  --->  bar.call(foo);    foo::bar(...arg)--->bar.apply(foo, arg)
  ```
#### 尾调用优化
  指某个函数的最后一步是调用另一个函数
#### 基本用法
  **数据结构Set**类似于数组, 但是成员的值都是 `唯一的`, 没有重复的值<br>
  Set函数可以接受一个数组作为参数, 用来初始化<br>
  `var set = new Set([1,1,2,3,4,3,2]);  ---> 1,2,3,4`
  <br>
###### Set结构的实例有以下属性
  <ul>
    <li>Set.prototype.constructor: 构造函数, 默认就是Set函数</li>
    <li>Set.prototype.size: 返回Set实例的成员总数</li>
  </ul>
###### Set实例的方法
  一、操作方法
  <ul>
    <li>add(value): 添加某个值, 返回Set结构本身</li>
    <li>delete(value): 删除某个值, 返回一个布尔值, 表示删除是否成功</li>
	<li>has(value): 返回一个布尔值, 表示是否为Set的成员</li>
	<li>clear(): 清除所有的成员, 没有返回值</li>
  </ul>
  二、遍历操作
  <ul>
    <li>keys(): 返回一个键名的遍历器</li>
    <li>values(): 返回一个键值的遍历器</li>
	<li>entries(): 返回一个键值对的遍历器</li>
	<li>forEach(): 利用回调函数遍历整个Set</li>
  </ul>
  *由于Set只有键值, 没有键名,(或者说键值和键名是同一个值), 因此keys和 values的行为完全一致*
#### WeakSet
  WeakSet和set一样都不存储重复的元素, 但有一点一同: WeakSet只能存储对象
#### Map 
  **Map**是一个"超对象", 其中 key 值不仅可以为 string, 还可以为其他类型, 如对象
###### 实例属性和操作方法
  <ul>
    <li>size: 返回成员的总数</li>
	<li>set(key, value): 设置 key 的键值, 存在更新, 不存在创建</li>
	<li>get(key): 获取键名 key 对应的键值</li>
	<li>has(key): 返回一个布尔值, 判断你有没有这个键</li>
	<li>delete(key): 删除 Key 对应的键</li>
	<li>clear(): 清除所有成员</li>
	<li>keys(): 返回键名的遍历器</li>
	<li>values(): 返回键值的遍历器</li>
	<li>entries(): 返回键的遍历器</li>
  </ul>
  *set()方法返回的是Map本身, 所有可以采用链式写法*
#### WeakMap
  **WeakMap**与**Map**的结构基本相似, 唯一的区别是指接受随想作为键名(除 null 之外).
###### WeakMap和Map在API上的区别
  <ol>
    <li>没有遍历操作, 也没有size属性</li>
    <li>没法清空</li>
  </ol>
  *WeakMap 只有四个方法: set()、get()、delete()、has()*
  
  

 
