html标签笔记
----------
##什么是 HTML？

	HTML 是用来描述网页的一种语言。
	HTML 指的是超文本标记语言 (Hyper Text Markup Language)
	HTML 不是一种编程语言，而是一种标记语言 (markup language)
	标记语言是一套标记标签 (markup tag)
	HTML 使用标记标签来描述网页


**HTML 标签**



- HTML 标记标签通常被称为 HTML 标签 (HTML tag)。


- HTML 标签是由尖括号包围的关键词，比如 <html>


- HTML 标签通常是成对出现的


- 标签对中的第一个标签是开始标签，第二个标签是结束标签


- 开始和结束标签也被称为开放标签和闭合标签


**HTML 文档 = 网页**


- HTML 文档描述网页


- HTML 文档包含 HTML 标签和纯文本


- HTML 文档也被称为网页


###四个实例
1. 标题
2. 段落
3. 链接
4. 图像

###元素
>html 文档是由 html 元素定义的
**html元素**
htm元素是从开始标签到借宿标签的所有代码

**注释**：开始标签常被称为开放标签（opening tag），结束标签常称为闭合标签（closing tag）。

**HTML 元素语法**

	HTML 元素以开始标签起始
	HTML 元素以结束标签终止
	元素的内容是开始标签与结束标签之间的内容
	某些 HTML 元素具有空内容（empty content）
	空元素在开始标签中进行关闭（以开始标签的结束而结束）
	大多数 HTML 元素可拥有属性

**空的 HTML 元素**

	没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。
	<br> 就是没有关闭标签的空元素（<br> 标签定义换行）。
	在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。
	在开始标签中添加斜杠，比如 <br />，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。
	即使 <br> 在所有浏览器中都是有效的，但使用 <br /> 其实是更长远的保障。

**HTML 提示：使用小写标签**

	HTML 标签对大小写不敏感：<P> 等同于 <p>。许多网站都使用大写的 HTML 标签。
	W3School 使用的是小写标签，因为万维网联盟（W3C）在 HTML 4 中推荐使用小写，而在未来 (X)HTML 版本中强制使用小写。

###属性
>属性是 html 为元素提供的附加信息。

**HTML 属性**



1. HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。


1. 属性总是以名称/值对的形式出现，比如：name="value"。


1. 属性总是在 HTML 元素的开始标签中规定。


**始终为属性值加引号**

属性值应该始终被包括在引号内。双引号是最常用的，不过使用单引号也没有问题。
在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：

	name='Bill "HelloWorld" Gates'
###标题
>在 html 中，标题很重要

**HTML 标题**

标题（Heading）是通过	< h1> -< h6> 等标签进行定义的。
< h1 > 定义最大的标题。< h6 > 定义最小的标题。

	实例
	<h1>This is a heading</h1>
	<h2>This is a heading</h2>
	<h3>This is a heading</h3>


**注释：**浏览器会自动地在标题的前后添加空行。

**注释：**默认情况下，HTML 会自动地在块级元素前后添加一个额外的空行，比如段落、标题元素前后。

**标题很重要**



- 请确保将 HTML heading 标签只用于标题。不要仅仅是为了产生粗体或大号的文本而使用标题。


- 搜索引擎使用标题为您的网页的结构和内容编制索引。
因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。


- 应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

**HTML 水平线**

< hr /> 标签在 HTML 页面中创建水平线。
hr 元素可用于分隔内容。

	实例
	<p>This is a paragraph</p>
	<hr />
	<p>This is a paragraph</p>
	<hr />
	<p>This is a paragraph</p>


**HTML 注释**
可以将注释插入 HTML 代码中，这样可以提高其可读性，使代码更易被人理解。浏览器会忽略注释，也不会显示它们。
注释是这样写的：

	实例
	<!-- This is a comment -->

**注释：**开始括号之后（左边的括号）需要紧跟一个叹号，结束括号之前（右边的括号）不需要。

**提示**：合理地使用注释可以对未来的代码编辑工作产生帮助。

###段落

>把html文档分成若干段落

**HTML 段落**
段落是通过 <p> 标签定义的。

	实例
	<p>This is a paragraph</p>
	<p>This is another paragraph</p>

**注释：**浏览器会自动地在段落的前后添加空行。（<p> 是块级元素）
提示：使用空的段落标记 <p></p> 去插入一个空行是个坏习惯。用 <br /> 标签代替它！

**HTML 折行**
如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 < br /> 标签：

	<p>This is<br />a para<br />graph with line breaks</p>

< br /> 元素是一个空的 HTML 元素。由于关闭标签没有任何意义，因此它没有结束标签。

###样式

**如何使用样式**

当浏览器读到一个样式表，它就会按照这个样式表来对文档进行格式化。有以下三种方式来插入样式表：


- 外部样式表
	- 当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。
	
	<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
	</head>



- 内部样式表


	- 当单个文件需要特别样式时，就可以使用内部样式表。你可以在 head 部分通过 <style> 标签定义内部样式表。
	
	<head>
	<style type="text/css">
	body {background-color: red}
	p {margin-left: 20px}
	</style>
	</head>



- 内联样式


	- 当特殊的样式需要应用到个别元素时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。以下实例显示出如何改变段落的颜色和左外边距。
	
	<p style="color: red; margin-left: 20px">
	This is a paragraph
	</p>


###链接

**HTML 超链接（链接）**

超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。
当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。
我们通过使用 < a> 标签在 HTML 中创建链接。

	有两种使用 < a> 标签的方式：
	通过使用 href 属性 - 创建指向另一个文档的链接
	通过使用 name 属性 - 创建文档内的书签

**HTML 链接 - target 属性**

使用 Target 属性，你可以定义被链接的文档在何处显示。

下面的这行会在新窗口打开文档：

	<a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a>

**HTML 链接 - name 属性**

- name 属性规定锚（anchor）的名称。


- 您可以使用 name 属性创建 HTML 页面中的书签。


- 书签不会以任何特殊方式显示，它对读者是不可见的。


- 当使用命名锚（named anchors）时，我们可以创建直接跳至该命名锚（比如页面中某个小节）的链接，这样使用者就无需不停地滚动页面来寻找他们需要的信息了。

	命名锚的语法：
	<a name="label">锚（显示在页面上的文本）</a>

**提示：**锚的名称可以是任何你喜欢的名字。

**提示：**您可以使用 id 属性来替代 name 属性，命名锚同样有效。
###图像

**图像标签（<img>）和源属性（Src）**

在 HTML 中，图像由 < img> 标签定义。
< img> 是空标签，意思是说，它只包含属性，并且没有闭合标签。
要在页面上显示图像，你需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL 地址。

	定义图像的语法是：
	<img src="url" />

**替换文本属性（Alt）**

alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。

	<img src="boat.gif" alt="Big Boat">

在浏览器无法载入图像时，替换文本属性告诉读者她们失去的信息。此时，浏览器将显示这个替代性的文本而不是图像。为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好的显示信息，并且对于那些使用纯文本浏览器的人来说是非常有用的。

###表格

>表格由 < table> 标签来定义。每个表格均有若干行（由 < tr> 标签定义），每行被分割为若干单元格（由 < td> 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。

	<table border="1">
	<tr>
	<td>row 1, cell 1</td>
	<td>row 1, cell 2</td>
	</tr>
	<tr>
	<td>row 2, cell 1</td>
	<td>row 2, cell 2</td>
	</tr>
	</table>
显示结果如下

<table border="1">
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td>row 2, cell 1</td>
<td>row 2, cell 2</td>
</tr>
</table>

**表格和边框属性**

如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。

**表格的表头**

表格的表头使用 <th> 标签进行定义。

###列表

- 无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。
无序列表始于 < ul> 标签。每个列表项始于 < li>。
<pre>
	< ul>
	< li>Coffee< /li>
	< li>Milk< /li>
	< /ul>
</pre>
浏览器显示如下：

<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>

列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。




- 序列表同样，有序列表也是一列项目，列表项目使用数字进行标记。
有序列表始于 < ol> 标签。每个列表项始于 < li> 标签。
<pre>
	< ol>
	< li>Coffee< /li>
	< li>Milk< /li>
	< /ol>
</pre>
浏览器显示如下：
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。



- 自定义列表不仅仅是一列项目，而是项目及其注释的组合。
自定义列表以 < dl> 标签开始。每个自定义列表项以 < dt> 开始。每个自定义列表项的定义以 < dd> 开始。
<pre>
< dl>
< dt> Coffee < /dt>
< dd> Black hot drink < /dd>
< dt> Milk < /dt>
< dd> White cold drink < /dd>
< /dl>
</pre>
浏览器显示如下：
<dl>
<dt>Coffee</dt>
<dd>Black hot drink</dd>
<dt>Milk</dt>
<dd>White cold drink</dd>
</dl>
定义列表的列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

###div和span
>可以通过< div>和< span>将html元素组合起来。

**HTML 内联元素**

内联元素在显示时通常不会以新行开始。

	例子：<b>, <td>, <a>, <img>

**HTML < div> 元素**


- HTML < div> 元素是块级元素，它是可用于组合其他 HTML 元素的容器。
< div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。


- 如果与 CSS 一同使用，< div> 元素可用于对大的内容块设置样式属性。
< div> 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 < table> 元素进行文档布局不是表格的正确用法。< table> 元素的作用是显示表格化的数据。


**HTML  < span> 元素**



- HTML < span> 元素是内联元素，可用作文本的容器。


- < span> 元素也没有特定的含义。


- 当与 CSS 一同使用时，< span> 元素可用于为部分文本设置样式属性。

###布局

>网页布局对改善网站的外观非常重要。请慎重设计您的网页布局。

**网站布局**



- 大多数网站会把内容安排到多个列中（就像杂志或报纸那样）。


- 可以使用 < div> 或者 < table> 元素来创建多列。CSS 用于对元素进行定位，或者为页面创建背景以及色彩丰富的外观。

**提示**：即使可以使用 HTML 表格来创建漂亮的布局，但设计表格的目的是呈现表格化数据 - 表格不是布局工具！

**HTML 布局 - 使用表格**



- 使用 HTML < table> 标签是创建布局的一种简单的方式。


- 可以使用 < div> 或者 < table> 元素来创建多列。CSS 用于对元素进行定位，或者为页面创建背景以及色彩丰富的外观。

**提示**：即使可以使用 HTML 表格来创建漂亮的布局，但设计表格的目的是呈现表格化数据 - 表格不是布局工具！

###表单



- 表单是一个包含表单元素的区域。


- 表单元素是允许用户在表单中（比如：文本域、下拉列表、单选框、复选框等等）输入信息的元素。

<pre>
	表单使用表单标签（< form>）定义。
	< form>
	...
	  input 元素
	...
	< /form>
</pre>

**表单的动作属性（Action）和确认按钮**

当用户单击确认按钮时，表单的内容会被传送到另一个文件。表单的动作属性定义了目的文件的文件名。由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理。
###框架
>通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架。

使用框架的坏处：
	

1. 开发人员必须同时跟踪更多的HTML文档
	

1.	 很难打印整张页面

**框架结构标签（< frameset >）**



- 框架结构标签（ < frameset>）定义如何将窗口分割为框架


- 每个 frameset 定义了一系列行或列


- rows/columns 的值规定了每行或每列占据屏幕的面积

**编者注：**frameset 标签也被某些文章和书籍译为框架集。

**框架标签（Frame）**

Frame 标签定义了放置在每个框架中的 HTML 文档。
<pre>
在下面的这个例子中，我们设置了一个两列的框架集。第一列被设置为占据浏览器窗口的 25%。第二列被设置为占据浏览器窗口的 75%。HTML 文档 "frame_a.htm" 被置于第一个列中，而 HTML 文档 "frame_b.htm" 被置于第二个列中：

	< frameset cols="25%,75%">
   	< frame src="frame_a.htm">
   	< frame src="frame_b.htm">
	< /frameset>
</pre>

**基本的注意事项 - 有用的提示：**


1.假如一个框架有可见边框，用户可以拖动边框来改变它的大小。为了避免这种情况发生，可以在 < frame> 标签中加入：
	noresize="noresize"。
为不支持框架的浏览器添加 < noframes> 标签。

1. 不能将 < body>< /body> 标签与 < frameset>< /frameset> 标签同时使用！不过，假如你添加包含一段文本的 < noframes> 标签，就必须将这段文字嵌套于 < body>< /body> 标签内。（在下面的第一个实例中，可以查看它是如何实现的。）



###frameset标签
>用来组织一组被称为框架的、通过<code>frame</code>标签独立的窗口区域。这个元素在框架文档中代替一般文档中的bod元素。

<pre>
专用属性
1. border
2. bordercolor
3. cols
4. frameborder
5. framespacing
6. rows

基本属性
1. id
2. class
3. style
4. title

事件属性
1. onload
2. onunload


</pre>

提示
不能与 frameset 标签一起使用 body 标签！不过，如果需要为不支持框架的浏览器添加一个 noframes 标签，请将 body 标签放到 noframes 标签中！

###faremeset中的bordercolor属性
>用来设置frameset框架的边框颜色的
<pre>
语法：
  &lt frameset bordercolor="value" &gt
</pre>

###faremeset中的frameborder属性
>用来设置框架集 frameset 中的边框是否显示。

<pre>
语法：
&lt frameset frameborder="value" &gt

属性值：
1或yes :显示边框
0或no：隐藏边框
</pre>

###frameset中的border属性
>设置框架集 frameset 中框架的边框宽度。

###iframe标签
>HTML的 iframe 标签实际上是在窗口中再创建一个窗口。创建的这个窗口也称为浮动框架，可以插入到网页中的任何位置，还可以自由控制自身尺寸的大小。它比使用 frameset 标签创建的子窗口灵活多了。

<pre>
iframe属性简介：



1. src属性：表示框架中要显示的URL。
2. width属性：表示框架的宽度。
3. height属性：表示框架的高度。
4. marginwidth属性：表示框架的内容和框架左右两边的空白的宽度。
5. marginheight属性：表示框架的内容和框架上下两边的空白的高度。
6. frameborder属性：1，表示显示框架边框；0，表示隐藏框架边框。
7. scrolling属性：表示框架是否显示滚动条。

</pre>

**提示**：尽量不要使用框架滚动条，影响网页的整体美观。也不要将框架的宽度和高度设置为0，那样没有任何意义。

###framespacing属性
>使用框架集 frameset 标签中的framespacing属性可以设置边框的宽度。

<pre>
语法：
	&lt frameset framespacing="value" &gt
属性值：
value的值是一个整数，单位是像素（px）

</pre>

###背景

**背景（Backgrounds）**

< body> 拥有两个配置背景的标签。背景可以是颜色或者图像。



1. 背景颜色（Bgcolor）
背景颜色属性将背景设置为某种颜色。属性值可以是十六进制数、RGB 值或颜色名。
<pre>
	< body bgcolor="#000000">
	< body bgcolor="rgb(0,0,0)">
	< body bgcolor="black">
</pre>
以上的代码均将背景颜色设置为黑色。

 

2.背景（Background）

背景属性将背景设置为图像。属性值为图像的URL。如果图像尺寸小于浏览器窗口，那么图像将在整个浏览器窗口进行复制。

	< body background="clouds.gif">
	< body background="http://www.w3school.com.cn/clouds.gif">

URL可以是相对地址，如第一行代码。也可以使绝对地址，如第二行代码。

**提示：**如果你打算使用背景图片，你需要紧记一下几点：



- 背景图像是否增加了页面的加载时间。小贴士：图像文件不应超过 10k。


- 背景图像是否与页面中的其他图象搭配良好。


- 背景图像是否与页面中的文字颜色搭配良好。


- 图像在页面中平铺后，看上去还可以吗？


- 对文字的注意力被背景图像喧宾夺主了吗？

##html高级教程
###html文档类型
**<!DOCTYPE> 声明**

Web 世界中存在许多不同的文档。只有了解文档的类型，浏览器才能正确地显示文档。

HTML 也有多个不同的版本，只有完全明白页面中使用的确切 HTML 版本，浏览器才能完全正确地显示出 HTML 页面。这就是 <!DOCTYPE> 的用处。
<!DOCTYPE> 不是 HTML 标签。它为浏览器提供一项信息（声明），即 HTML 是用什么版本编写的。

**提示：**W3School 即将升级为最新的 HTML5 文档类型。

**HTML <head> 元素**

< head> 元素是所有头部元素的容器。< head> 内的元素可包含脚本，指示浏览器在何处可以找到样式表，提供元信息，等等。

	以下标签都可以添加到 head 部分：<title>、<base>、<link>、<meta>、<script> 以及 <style>。


**HTML < title> 元素**

1. < title> 标签定义文档的标题。


1. title 元素在所有 HTML/XHTML 文档中都是必需的。


1. title 元素能够：


	- 定义浏览器工具栏中的标题


	- 提供页面被添加到收藏夹时显示的标题


	- 显示在搜索引擎结果中的页面标题

**HTML < base> 元素**
< base> 标签为页面上的所有链接规定默认地址或默认目标（target）：

	< head>
	< base href="http://www.w3school.com.cn/images/" />
	< base target="_blank" />
	< /head>

**HTML < link> 元素**

< link> 标签定义文档与外部资源之间的关系。
< link> 标签最常用于连接样式表：

	 <head>
	< link rel="stylesheet" type="text/css" href="mystyle.css" />
	< /head>


**HTML < style> 元素**

< style> 标签用于为 HTML 文档定义样式信息。
您可以在 style 元素内规定 HTML 元素在浏览器中呈现的样式：

	< head>
	< style type="text/css">
	body {background-color:yellow}
	p {color:blue}
	< /style>
	< /head>


**HTML < meta> 元素**

元数据（metadata）是关于数据的信息。

< meta> 标签提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。

典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。

< meta> 标签始终位于 head 元素中。

元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

**针对搜索引擎的关键词**

一些搜索引擎会利用 meta 元素的 name 和 content 属性来索引您的页面。
下面的 meta 元素定义页面的描述：

	<meta name="description" content="Free Web tutorials on HTML, CSS, XML" />
下面的 meta 元素定义页面的关键词：

	< meta name="keywords" content="HTML, CSS, XML" />
name 和 content 属性的作用是描述页面的内容。

**HTML script 元素**

< script> 标签用于定义客户端脚本，比如 JavaScript。

script 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件。
必需的 type 属性规定脚本的 MIME 类型。

JavaScript 最常用于图片操作、表单验证以及内容动态更新。
下面的脚本会向浏览器输出“Hello World!”：

	< script type="text/javascript">
	document.write("Hello World!")
	< /script>

**< noscript> 标签**

< noscript> 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时。

noscript 元素可包含普通 HTML 页面的 body 元素中能够找到的所有元素。

只有在浏览器不支持脚本或者禁用脚本时，才会显示 noscript 元素中的内容：

	< script type="text/javascript">
	document.write("Hello World!")
	< /script>
	< noscript>Your browser does not support JavaScript!</noscript>

###实体


在 HTML 中，某些字符是预留的。

在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。

如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。

字符实体类似这样：
&entity_name;

或者

&#entity_number;
如需显示小于号，我们必须这样写：&lt; 或 &#60;

**提示：**使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。

**不间断空格（non-breaking space）**

HTML 中的常用字符实体是不间断空格(&nbsp;)。

浏览器总是会截短 HTML 页面中的空格。如果您在文本中写 10 个空格，在显示该页面之前，浏览器会删除它们中的 9 个。如需在页面中增加空格的数量，您需要使用 &nbsp; 字符实体。

![实体字符](https://github.com/BaiLinLin/Class-notes/blob/06970ecea5b525a5f60aa7aff9e8d178be778b55/img/zifu.jpg)

###url

当您点击 HTML 页面中的某个链接时，对应的 < a> 标签指向万维网上的一个地址。

统一资源定位器（URL）用于定位万维网上的文档（或其他数据）。

网址，比如 http://www.w3school.com.cn/html/index.asp，遵守以下的语法规则：

	scheme://host.domain:port/path/filename
	解释：
	scheme - 定义因特网服务的类型。最常见的类型是 http
	host - 定义域主机（http 的默认主机是 www）
	domain - 定义因特网域名，比如 w3school.com.cn
	:port - 定义主机上的端口号（http 的默认端口号是 80）
	path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
	filename - 定义文档/资源的名称

###字符编码

URL - 统一资源定位器

Web 浏览器通过 URL 从 web 服务器请求页面。

URL 是网页的地址，比如 http://www.w3school.com.cn。

URL 只能使用 ASCII 字符集来通过因特网进行发送。

由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。

URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。
URL 
不能包含空格。URL 编码通常使用 + 来替换空格。

###web服务器

