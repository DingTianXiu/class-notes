javaScript笔记
----------
JavaScript 是属于网络的脚本语言！
JavaScript 被数百万计的网页用来改进设计、验证表单、检测浏览器、创建cookies，以及更多的应用。
JavaScript 是因特网上最流行的脚本语言。
JavaScript 很容易使用！你一定会喜欢它的！
##js教程

###输出
如需从 JavaScript 访问某个 HTML 元素，您可以使用 document.getElementById(id) 方法。

<pre>
警告
请使用 document.write() 仅仅向文档输出写内容。
如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖：****
</pre>


###语句
JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。



- 分号 
<pre>
分号用于分隔 JavaScript 语句。
通常我们在每条可执行的语句结尾添加分号。
使用分号的另一用处是在一行中编写多条语句。
提示：您也可能看到不带有分号的案例。
</pre>


- 代码块
<pre>
JavaScript 语句通过代码块的形式进行组合。
块由左花括号开始，由右花括号结束。
块的作用是使语句序列一起执行。
JavaScript 函数是将语句组合在块中的典型例子。
</pre>


- JavaScript 对大小写敏感
<pre>
JavaScript 对大小写是敏感的。
当编写 JavaScript 语句时，请留意是否关闭大小写切换键。
函数 getElementById 与 getElementbyID 是不同的。
同样，变量 myVariable 与 MyVariable 也是不同的。
</pre>

###变量

与代数一样，JavaScript 变量可用于存放值（比如 x=2）和表达式（比如 z=x+y）

<pre>
变量可以使用短名称（比如 x 和 y），也可以使用描述性更好的名称（比如 age, sum, totalvolume）。
变量必须以字母开头
变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
变量名称对大小写敏感（y 和 Y 是不同的变量）
提示：JavaScript 语句和 JavaScript 变量都对大小写敏感。
</pre>

###属性和方法
属性是与对象相关的值。
方法是能够在对象上执行的动作。
在 JavaScript 中，对象是数据（变量），拥有属性和方法。

###函数
函数就是包裹在花括号中的代码块，前面使用了关键词 function：

<pre>
function functionname()
{
这里是要执行的代码
}
</pre>

当调用该函数时，会执行函数内的代码。
可以在某事件发生时直接调用函数（比如当用户点击按钮时），并且可由 JavaScript 在任何位置进行调用。

**提示**：JavaScript 对大小写敏感。关键词 function 必须是小写的，并且必须以与函数名称相同的大小写来调用函数。



- 调用带参数的函数
- <pre>
在调用函数时，您可以向其传递值，这些值被称为参数。
这些参数可以在函数中使用。
您可以发送任意多的参数，由逗号 (,) 分隔
</pre>



- 带有返回值的函数

有时，我们会希望函数将值返回调用它的地方。
通过使用 return 语句就可以实现。
在使用 return 语句时，函数会停止执行，并返回指定的值。
<pre>
语法
function myFunction()
{
var x=5;
return x;
}
上面的函数会返回值 5。
</pre>

**注释**：整个 JavaScript 并不会停止执行，仅仅是函数。JavaScript 将继续执行代码，从调用函数的地方。

###比较运算符
比较运算符在逻辑语句中使用，以测定变量或值是否相等。

- 给定x=5，===	全等（值和类型）	x===5 为 true；x==="5" 为 false

###if....else
条件语句用于基于不同的条件来执行不同的动作。

<pre>
条件语句
通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务。
在 JavaScript 中，我们可使用以下条件语句：
if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
if...else if....else 语句 - 使用该语句来选择多个代码块之一来执行
switch 语句 - 使用该语句来选择多个代码块之一来执行
</pre>
**注意**：请使用小写的 if。使用大写字母（IF）会生成 JavaScript 错误！

###for循环

for 循环是您在希望创建循环时常会用到的工具。
下面是 for 循环的语法：
<pre>
for (语句 1; 语句 2; 语句 3)
  {
  被执行的代码块
  }

语句 1 在循环（代码块）开始前执行
语句 2 定义运行循环（代码块）的条件
语句 3 在循环（代码块）已被执行之后执行
</pre>


**不同类型的循环**

- JavaScript 支持不同类型的循环：
- for - 循环代码块一定的次数
- for/in - 循环遍历对象的属性
- while - 当指定的条件为 true 时循环指定的代码块
- do/while - 同样当指定的条件为 true 时循环指定的代码块

###break和continue
break 语句用于跳出循环。
continue 用于跳过循环中的一个迭代。

**break 语句可用于跳出循环。**
<pre>
break 语句跳出循环后，会继续执行该循环之后的代码（如果有的话）：
实例
for (i=0;i<10;i++)
  {
  if (i==3)
    {
    break;
    }
  x=x + "The number is " + i + "<br>";
  }
</pre>

**Continue 语句**
<pre>
continue 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。
该例子跳过了值 3：
实例
for (i=0;i<=10;i++)
 {
 if (i==3) continue;
  x=x + "The number is " + i + "<br>";
  }

</pre>

**JavaScript 标签**

正如您在 switch 语句那一章中看到的，可以对 JavaScript 语句进行标记。
如需标记 JavaScript 语句，请在语句之前加上冒号：
<pre>
label:
语句
</pre>
break 和 continue 语句仅仅是能够跳出代码块的语句。
<pre>
语法
break labelname;
</pre>
continue labelname;
continue 语句（带有或不带标签引用）只能用在循环中。
break 语句（不带标签引用），只能用在循环或 switch 中。
通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：

###Throw、Try 和 Catch
>try 语句测试代码块的错误
catch 语句处理错误。
throw 语句创建自定义错误。

错误一定会发生
<pre>
当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误：
可能是语法错误，通常是程序员造成的编码错误或错别字。
可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。
可能是由于来自服务器或用户的错误输出而导致的错误。
当然，也可能是由于许多其他不可预知的因素。
</pre>
JavaScript 抛出错误
<pre>
当错误发生时，当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。
描述这种情况的技术术语是：JavaScript 将抛出一个错误。
</pre>
JavaScript 测试和捕捉
<pre>
try 语句允许我们定义在执行时进行错误测试的代码块。
catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
JavaScript 语句 try 和 catch 是成对出现的。
</pre>
###表单验证
JavaScript 可用来在数据被送往服务器前对 HTML 表单中的这些输入数据进行验证。
<pre>
1. JavaScript 表单验证
2. JavaScript 可用来在数据被送往服务器前对 HTML 表单中的这些输入 数据进行验证。
3. 被 JavaScript 验证的这些典型的表单数据有：
4. 用户是否已填写表单中的必填项目？
5. 用户输入的邮件地址是否合法？
6. 用户是否已输入合法的日期？
7. 用户是否在数据域 (numeric field) 中输入了文本？
</pre>

**必填（或必选）项目**

下面的函数用来检查用户是否已填写表单中的必填（或必选）项目。假如必填或必选项为空，那么警告框会弹出，并且函数的返回值为 false，否则函数的返回值则为 true（意味着数据没有问题）：
<pre>
function validate_required(field,alerttxt)
{
with (field)
{
if (value==null||value=="")
  {alert(alerttxt);return false}
else {return true}
}
}
</pre>

**E-mail 验证**
下面的函数检查输入的数据是否符合电子邮件地址的基本语法。
意思就是说，输入的数据必须包含 @ 符号和点号(.)。同时，@ 不可以是邮件地址的首字符，并且 @ 之后需有至少一个点号：
<pre>
function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@")
dotpos=value.lastIndexOf(".")
if (apos<1||dotpos-apos<2) 
  {alert(alerttxt);return false}
else {return true}
}
}
</pre>

###节点
文档对象模型中，每个节点都是一个对象，DOM节点有三个重要的特性：

1. 结点名称
2. 结点值
3. 节点类型

<pre>
一、nodeName 属性: 节点的名称，是只读的。

1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document

二、nodeValue 属性：节点的值

1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值
4. 
三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:
元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
</pre> 

##HTML DOM 文档对象模型
>通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
HTML DOM 模型被构造为对象的树。

HTML DOM 树

![DOM HTML 树](http://www.w3school.com.cn/i/ct_htmltree.gif)

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。


- JavaScript 能够改变页面中的所有 HTML 元素


- JavaScript 能够改变页面中的所有 HTML 属性


- JavaScript 能够改变页面中的所有 CSS 样式


- JavaScript 能够对页面中的所有事件做出反应

**查找 HTML 元素**

通常，通过 JavaScript，您需要操作 HTML 元素。
为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：

<pre>

1. 通过 id 找到 HTML 元素
2. 通过标签名找到 HTML 元素
3. 通过类名找到 HTML 元素
</pre>

**通过 id 查找 HTML 元素**

在 DOM 中查找 HTML 元素的最简单的方法，是通过使用元素的 id。
实例
本例查找 id="intro" 元素：
<pre>
var x=document.getElementById("intro");
</pre>

**通过标签名查找 HTML 元素**
实例
本例查找 id="main" 的元素，然后查找 "main" 中的所有 <p> 元素：
<pre>
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");
</pre>

###改变html

>HTML DOM 允许 JavaScript 改变 HTML 元素的内容。

改变 HTML 输出流

在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。
<pre>
实例
 
 &lt!DOCTYPE html &gt
&lt html &gt
&lt body &gt

&ltscript &gt
document.write(Date());
&lt/script &gt

&lt/body &gt
&lt/html &gt
&ltcode  &gt
</pre>
**提示**：绝不要使用在文档加载之后使用 document.write()。这会覆盖该文档。

**改变 HTML 内容**

修改 HTML 内容的最简单的方法时使用 innerHTML 属性。
如需改变 HTML 元素的内容，请使用这个语法：

<pre>
document.getElementById(id).innerHTML=new HTML
</pre>

**改变 HTML 属性**
如需改变 HTML 元素的属性，请使用这个语法：
<pre>
document.getElementById(id).attribute=new value
</pre>

###改变css

**改变 HTML 样式**

如需改变 HTML 元素的样式，请使用这个语法：
<pre>
document.getElementById(id).style.property=new style
</pre>

###事件
HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。

**对事件做出反应**

我们可以在事件发生时执行 JavaScript，比如当用户在 HTML 元素上点击时。
<pre>
如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：
onclick=JavaScript
HTML 事件的例子：
当用户点击鼠标时
当网页已加载时
当图像已加载时
当鼠标移动到元素上时
当输入字段被改变时
当提交 HTML 表单时
当用户触发按键时
</pre>

**使用 HTML DOM 来分配事件**

HTML DOM 允许您通过使用 JavaScript 来向 HTML 元素分配事件：
实例
向 button 元素分配 onclick 事件：
<pre>
&lt script &gt
document.getElementById("myBtn").onclick=function(){displayDate()};
&ltscript &gt
</pre>
亲自试一试
在上面的例子中，名为 displayDate 的函数被分配给 id=myButn" 的 HTML 元素。
当按钮被点击时，会执行该函数。

**onload 和 onunload 事件**

onload 和 onunload 事件会在用户进入或离开页面时被触发。


- onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。


- onload 和 onunload 事件可用于处理 cookie。

 <pre>
实例
&lt body onload="checkCookies()" &gt

</pre>

**onchange 事件**

onchange 事件常结合对输入字段的验证来使用。
下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。
<pre>
实例
&lt input type="text" id="fname" onchange="upperCase()" &gt
</pre>

**onmouseover 和 onmouseout 事件**

onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

**onmousedown、onmouseup 以及 onclick 事件**

onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。

###结点
>如需向 HTML DOM 添加新元素，您必须首先创建该元素（元素节点），然后向一个已存在的元素追加该元素

<pre>
实例

&lt div id="div1" &gt
&lt p id="p1" &gt这是一个段落 &gt /p &gt
&lt p id="p2" &gt这是另一个段落 &gt /p &gt
&lt /div &gt

&lt script &gt
var para=document.createElement("p"); //创建新的 p 元素
var node=document.createTextNode("这是新段落。"); //创建文本节点
para.appendChild(node); //向 p 元素追加这个文本节点

var element=document.getElementById("div1");//这段代码找到一个已有的元素
element.appendChild(para);//向这个已有的元素追加新元素
&lt /script &gt

</pre>

##对象
>JavaScript 提供多个内建对象，比如 String、Date、Array 等等。
对象只是带有属性和方法的特殊数据类型。

JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...
此外，JavaScript 允许自定义对象。

**访问对象的属性**

<pre>
属性是与对象相关的值。

访问对象属性的语法是：

objectName.propertyName

这个例子使用了 String 对象的 length 属性来获得字符串的长度：

var message="Hello World!";
var x=message.length;

在以上代码执行后，x 的值将是：

12
</pre>

**创建 JavaScript 对象**

通过 JavaScript，您能够定义并创建自己的对象。

创建新对象有两种不同的方法：

    定义并创建对象的实例
    使用函数来定义对象，然后创建新的对象实例

创建直接的实例

这个例子创建了对象的一个新实例，并向其添加了四个属性：
实例
<pre>
person=new Object();
person.firstname="Bill";
person.lastname="Gates";
person.age=56;
person.eyecolor="blue";
</pre>


**使用对象构造器**

本例使用函数来构造对象：
<pre>
实例
function person(firstname,lastname,age,eyecolor)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;
}
</pre>
一旦您有了对象构造器，就可以创建新的对象实例，就像这样：
<pre>
var myFather=new person("Bill","Gates",56,"blue");
var myMother=new person("Steve","Jobs",48,"green");
</pre>


**JavaScript 类**

JavaScript 是面向对象的语言，但 JavaScript 不使用类。

在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。

JavaScript 基于 prototype，而不是基于类的。

**JavaScript for...in 循环**

JavaScript for...in 语句循环遍历对象的属性。
语法
<pre>
for (对象中的变量)
  {
  要执行的代码
  }
</pre>
**注释**：for...in 循环中的代码块将针对每个属性执行一

###数字
>JavaScript 只有一种数字类型。可以使用也可以不使用小数点来书写数字。


**所有 JavaScript 数字均为 64 位**

JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。

JavaScript 中的所有数字都存储为根为 10 的 64 位（8 比特），浮点数。

**数字属性和方法**
属性：

    MAX VALUE
    MIN VALUE
    NEGATIVE INFINITIVE
    POSITIVE INFINITIVE
    NaN
    prototype
    constructor

方法：

    toExponential()
    toFixed()
    toPrecision()
    toString()
    valueOf()

###字符串对象


字符串对象

字符串对象用于处理已有的字符块。
例子：

下面的例子使用字符串对象的长度属性来计算字符串的长度。

	var txt="Hello world!"
	document.write(txt.length)

上面的代码输出为：

	12

下面的例子使用字符串对象的toUpperCase()方法将字符串转换为大写：

	var txt="Hello world!"
	document.write(txt.toUpperCase())

上面的代码输出为：

	HELLO WORLD!

###数组



**定义数组**

数组对象用来在单独的变量名中存储一系列的值。

我们使用关键词 new 来创建数组对象。下面的代码定义了一个名为 myArray 的数组对象：

	var myArray=new Array()

有两种向数组赋值的方法（你可以添加任意多的值，就像你可以定义你需要的任意多的变量一样）。

1:

	var mycars=new Array()
	mycars[0]="Saab"
	mycars[1]="Volvo"
	mycars[2]="BMW"

也可以使用一个整数自变量来控制数组的容量：

	var mycars=new Array(3)
	mycars[0]="Saab"
	mycars[1]="Volvo"
	mycars[2]="BMW"

2:

	var mycars=new Array("Saab","Volvo","BMW")

**注意**：如果你需要在数组内指定数值或者逻辑值，那么变量类型应该是数值变量或者布尔变量，而不是字符变量。

###逻辑
**Boolean 对象**

您可以将 Boolean 对象理解为一个产生逻辑值的对象包装器。

Boolean（逻辑）对象用于将非逻辑值转换为逻辑值（true 或者 false）。

**创建 Boolean 对象**

使用关键词 new 来定义 Boolean 对象。下面的代码定义了一个名为 myBoolean 的逻辑对象：

	var myBoolean=new Boolean()

**注释**：如果逻辑对象无初始值或者其值为 0、-0、null、""、false、undefined 或者 NaN，那么对象的值为 false。否则，其值为 true（即使当自变量为字符串 "false" 时）！

###算数


Math 对象

Math（算数）对象的作用是：执行普通的算数任务。

Math 对象提供多种算数值类型和函数。无需在使用这个对象之前对它进行定义。
算数值

JavaScript 提供 8 种可被 Math 对象访问的算数值：

    常数
    圆周率
    2 的平方根
    1/2 的平方根
    2 的自然对数
    10 的自然对数
    以 2 为底的 e 的对数
    以 10 为底的 e 的对数

这是在 Javascript 中使用这些值的方法：（与上面的算数值一一对应）

    Math.E
    Math.PI
    Math.SQRT2
    Math.SQRT1_2
    Math.LN2
    Math.LN10
    Math.LOG2E
    Math.LOG10E


**算数方法**

除了可被 Math 对象访问的算数值以外，还有几个函数（方法）可以使用。
函数（方法）实例：

下面的例子使用了 Math 对象的 round 方法对一个数进行四舍五入。

	document.write(Math.round(4.7))

上面的代码输出为：

	5

下面的例子使用了 Math 对象的 random() 方法来返回一个介于 0 和 1 之间的随机数：

	document.write(Math.random())

上面的代码输出为：

	0.9370844220218102

下面的例子使用了 Math 对象的 floor() 方法和 random() 来返回一个介于 0 和 10 之间的随机数：

	document.write(Math.floor(Math.random()*11)) 

上面的代码输出为：

	3
###正则表达式

**什么是 RegExp？**

RegExp 是正则表达式的缩写。

当您检索某个文本时，可以使用一种模式来描述要检索的内容。RegExp 就是这种模式。

简单的模式可以是一个单独的字符。

更复杂的模式包括了更多的字符，并可用于解析、格式检查、替换等等。

您可以规定字符串中的检索位置，以及要检索的字符类型，等等。

**定义 RegExp**

RegExp 对象用于存储检索模式。

通过 new 关键词来定义 RegExp 对象。以下代码定义了名为 patt1 的 RegExp 对象，其模式是 "e"：

	var patt1=new RegExp("e");

当您使用该 RegExp 对象在一个字符串中检索时，将寻找的是字符 "e"。
RegExp 对象的方法

	RegExp 对象有 3 个方法：test()、exec() 以及 compile()。

**test()**

test() 方法检索字符串中的指定值。返回值是 true 或 false。
例子：

	var patt1=new RegExp("e");

	document.write(patt1.test("The best things in life are free")); 

由于该字符串中存在字母 "e"，以上代码的输出将是：

	true


**exec()**

exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
例子 1：

	var patt1=new RegExp("e");

	document.write(patt1.exec("The best things in life are free")); 

由于该字符串中存在字母 "e"，以上代码的输出将是：

	e

您可以向 RegExp 对象添加第二个参数，以设定检索。例如，如果需要找到所有某个字符的所有存在，则可以使用 "g" 参数 ("global")。


在使用 "g" 参数时，exec() 的工作原理如下：

    找到第一个 "e"，并存储其位置
    如果再次运行 exec()，则从存储的位置开始检索，并找到下一个 "e"，并存储其位置

	var patt1=new RegExp("e","g");
	do
	{
	result=patt1.exec("The best things in life are free");
	document.write(result);
	}
	while (result!=null) 

由于这个字符串中 6 个 "e" 字母，代码的输出将是：

	eeeeeenull

**compile()**

compile() 方法用于改变 RegExp。

compile() 既可以改变检索模式，也可以添加或删除第二个参数。
例子：

	var patt1=new RegExp("e");

	document.write(patt1.test("The best things in life are free"));

	patt1.compile("d");

	document.write(patt1.test("The best things in life are free"));

由于字符串中存在 "e"，而没有 "d"，以上代码的输出是：

	truefalse



