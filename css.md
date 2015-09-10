
css学习笔记

---------
**CSS 概述**



- CSS 指层叠样式表 (Cascading Style Sheets)


- 样式定义如何显示 HTML 元素


- 样式通常存储在样式表中


- 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题


- 外部样式表可以极大提高工作效率


- 外部样式表通常存储在 CSS 文件中


- 多个样式定义可层叠为一

**层叠次序**

当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？
一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。



1. 浏览器缺省设置


1. 外部样式表


1. 内部样式表（位于 <head> 标签内部）


1. 内联样式（在 HTML 元素内部）

因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：< head> 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。

**选择器**

1. 所有html中的标记样式都是通过不同的css样式选择器进行控制的，实现css对html的选择
2. 选择器分基本选择器和和复合选择器
	- 标记选择器
	- 类别选择器 .class
	- id选择器  #id
3. 同一个类别选择器可以应用于多个标签，也可以将多个类别运用到一个标签，将两个类编同时用于class的值，两个类别之间用空格隔开就行了。
4. 一个id选择器只能运用于一个html元素，一个html元素只能运用一个id选择器

**html中嵌入css方法**

1. 行内样式
2. 内嵌样式
3. 外部样式（导入式，链接式）
4. 优先级关系：行内式>嵌入式 >导入式
5. 外部样式中出现在后面的样式的优先级大于出现在前面的优先级

**css的复合选择器**

1. “交集”复合选择器是由两个选择器直接链接构成的，其结果是选中二者的元素范围内的交集，期中一个必须是标记选择器，第二个必须是类别选择器或则ID选择器。
2. “并集”选择器，任何形式的选择器都可以做并集选择器的一部分并集选择器是多个选择器通过逗号连接而成的
3. 后代选择器，子选择器

**CSS的继承特性**

1. 简单的说就是把html的标记看成是一个个的容器，期中被包含的小容器会继承包含他们的大容器的风格样式。
2. 父标记的样式风格会影响子标记，但子标记的风格不会影响父标记
3. css的继承贯穿整个css设计的始终，每个标记都遵循着css的继承的概念
4. 不是所有的属性会继承父类的属性值。比如给某个元素一个边框，他的子元素不会自动加上一个边框，因为边框属性是非继承的。



**CSS 语法**

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

下面这行代码的作用是将 h1 元素内的文字颜色定义为红色，同时将字体大小设置为 14 像素。

在这个例子中，h1 是选择器，color 和 font-size 是属性，red 和 14px 是值。

	h1 {color:red; font-size:14px;}

**代码结构**

![代码结构](https://github.com/BaiLinLin/Class-notes/blob/4090341ca9c691256fc8bb7e6c7e4690cf1dd6b6/img/css%E8%AF%AD%E6%B3%95.jpg)

**值的不同写法和单位**

除了英文单词 red，我们还可以使用十六进制的颜色值 #ff0000：


请注意，当使用 RGB 百分比时，即使当值为 0 时也要写百分比符号。但是在其他的情况下就不需要这么做了。比如说，当尺寸为 0 像素时，0 之后不需要使用 px 单位，因为 0 就是 0，无论单位是什么。

**记得写引号**

提示：如果值为若干单词，则要给值加引号：

	p {font-family: "sans serif";}


**多重声明：**

提示：如果要定义不止一个声明，则需要用分号将每个声明分开。下面的例子展示出如何定义一个红色文字的居中段落。最后一条规则是不需要加分号的，因为分号在英语中是一个分隔符号，不是结束符号。然而，大多数有经验的设计师会在每条声明的末尾都加上分号，这么做的好处是，当你从现有的规则中增减声明时，会尽可能地减少出错的可能性。

**派生选择器**

通过依据元素在其位置的上下文关系来定义样式，你可以使标记更加简洁。
在 CSS1 中，通过这种方式来应用规则的选择器被称为上下文选择器 (contextual selectors)，这是由于它们依赖于上下文关系来应用或者避免某项规则。在 CSS2 中，它们称为派生选择器，但是无论你如何称呼它们，它们的作用都是相同的。

派生选择器允许你根据文档的上下文关系来确定某个标签的样式。通过合理地使用派生选择器，我们可以使 HTML 代码变得更加整洁。

比方说，你希望列表中的 strong 元素变为斜体字，而不是通常的粗体字，可以这样定义一个派生选择器：

	li strong {
    	font-style: italic;
   	 font-weight: normal;


###id 选择器

- id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

- id 选择器以 "#" 来定义。

**注意：**id 属性只能在每个 HTML 文档中出现一次。

id 选择器和派生选择器
在现代布局中，id 选择器常常用于建立派生选择器。

	#sidebar p {
		font-style: italic;
		text-align: right;
		margin-top: 0.5em;
		}

**类选择器**
在 CSS 中，类选择器以一个点号显示：
.center {text-align: center}
在上面的例子中，所有拥有 center 类的 HTML 元素均为居中。

对带有指定属性的 HTML 元素设置样式。
可以为拥有指定属性的 HTML 元素设置样式，而不仅限于 class 和 id 属性。
注释：只有在规定了 !DOCTYPE 时，IE7 和 IE8 才支持属性选择器。在 IE6 及更低的版本中，不支持属性选择。

**属性选择器**

下面的例子为带有 title 属性的所有元素设置样式：
	[title]
	{
	color:red;
	}

###css背景

>CSS 允许应用纯色作为背景，也允许使用背景图像创建相当复杂的效果。
CSS 在这方面的能力远远在 HTML 之上。


**背景色**

可以使用 background-color 属性为元素设置背景色。这个属性接受任何合法的颜色值。

这条规则把元素的背景设置为灰色：

	p {background-color: gray;}

如果您希望背景色从元素中的文本向外少有延伸，只需增加一些内边距：

	p {background-color: gray; padding: 20px;}

可以为所有元素设置背景色，这包括 body 一直到 em 和 a 等行内元素。
background-color 不能继承，其默认值是 transparent。

transparent 有“透明”之意。也就是说，如果一个元素没有指定背景色，那么背景就是透明的，这样其祖先元素的背景才能可见。

**背景图像**

要把图像放入背景，需要使用 background-image 属性。background-image 属性的默认值是 none，表示背景上没有放置任何图像。

如果需要设置一个背景图像，必须为这个属性设置一个 URL 值：

	body {background-image: url(/i/eg_bg_04.gif);}


大多数背景都应用到 body 元素，不过并不仅限于此。

下面例子为一个段落应用了一个背景，而不会对文档的其他部分应用背景：

	p.flower {background-image: url(/i/eg_bg_03.gif);}

您甚至可以为行内元素设置背景图像，下面的例子为一个链接设置了背景图像：

	a.radio {background-image: url(/i/eg_bg_07.gif);}


**背景重复**

如果需要在页面上对背景图像进行平铺，可以使用 background-repeat 属性。

属性值 repeat 导致图像在水平垂直方向上都平铺，就像以往背景图像的通常做法一样。repeat-x 和 repeat-y 分别导致图像只在水平或垂直方向上重复，no-repeat 则不允许图像在任何方向上平铺。

默认地，背景图像将从一个元素的左上角开始。请看下面的例子：

	body
 	 { 
 	 background-image: url(/i/eg_bg_03.gif);
 	 background-repeat: repeat-y;
 	 }

**背景定位**

可以利用 background-position 属性改变图像在背景中的位置。
下面的例子在 body 元素中将一个背景图像居中放置：

	body
 	 { 
 	   background-image:url('/i/eg_bg_03.gif');
  	  background-repeat:no-repeat;
  	  background-position:center;
 	 }

为 background-position 属性提供值有很多方法。首先，可以使用一些关键字：top、bottom、left、right 和 center。通常，这些关键字会成对出现，不过也不总是这样。还可以使用长度值，如 100px 或 5cm，最后也可以使用百分数值。不同类型的值对于背景图像的放置稍有差异。

**关键字**

图像放置关键字最容易理解，其作用如其名称所表明的。例如，top right 使图像放置在元素内边距区的右上角。

根据规范，位置关键字可以按任何顺序出现，只要保证不超过两个关键字 - 一个对应水平方向，另一个对应垂直方向。

如果只出现一个关键字，则认为另一个关键字是 center。
所以，如果希望每个段落的中部上方出现一个图像，只需声明如下：

	p
	  	{ 
	    background-image:url('bgimg.gif');
   		background-repeat:no-repeat;
   		background-position:top;
 		 }	

**百分数值**

百分数值的表现方式更为复杂。假设你希望用百分数值将图像在其元素中居中，这很容易：

	body
	  { 
	    background-image:url('/i/eg_bg_03.gif');
	    background-repeat:no-repeat;
	    background-position:50% 50%;
	  }

这会导致图像适当放置，其中心与其元素的中心对齐。换句话说，百分数值同时应用于元素和图像。也就是说，图像中描述为 50% 50% 的点（中心点）与元素中描述为 50% 50% 的点（中心点）对齐。

如果图像位于 0% 0%，其左上角将放在元素内边距区的左上角。如果图像位置是 100% 100%，会使图像的右下角放在右边距的右下角。

**长度值**

长度值解释的是元素内边距区左上角的偏移。偏移点是图像的左上角。
比如，如果设置值为 50px 100px，图像的左上角将在元素内边距区左上角向右 50 像素、向下 100 像素的位置上：

	body
	  { 
	    background-image:url('/i/eg_bg_03.gif');
	    background-repeat:no-repeat;
	    background-position:50px 100px;
	  }

注意，这一点与百分数值不同，因为偏移只是从一个左上角到另一个左上角。也就是说，图像的左上角与 background-position 声明中的指定的点对齐。

**背景关联**

如果文档比较长，那么当文档向下滚动时，背景图像也会随之滚动。当文档滚动到超过图像的位置时，图像就会消失。

您可以通过 background-attachment 属性防止这种滚动。通过这个属性，可以声明图像相对于可视区是固定的（fixed），因此不会受到滚动的影响：

	body 
	  {
	  background-image:url(/i/eg_bg_02.gif);
	  background-repeat:no-repeat;
	  background-attachment:fixed
	  }
###文本
>CSS 文本属性可定义文本的外观。
通过文本属性，您可以改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。

**缩进文本**

把 Web 页面上的段落的第一行缩进，这是一种最常用的文本格式化效果。
CSS 提供了 text-indent 属性，该属性可以方便地实现文本缩进。

通过使用 text-indent 属性，所有元素的第一行都可以缩进一个给定的长度，甚至该长度可以是负值。

这个属性最常见的用途是将段落的首行缩进，下面的规则会使所有段落的首行缩进 5 em：

	p {text-indent: 5em;}

**注意：**一般来说，可以为所有块级元素应用 text-indent，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性。不过，如果一个块级元素（比如段落）的首行中有一个图像，它会随该行的其余文本移动。

**提示：**如果想把一个行内元素的第一行“缩进”，可以用左内边距或外边距创造这种效果。

**使用负值**

text-indent 还可以设置为负值。利用这种技术，可以实现很多有趣的效果，比如“悬挂缩进”，即第一行悬挂在元素中余下部分的左边：

	p {text-indent: -5em;}

不过在为 text-indent 设置负值时要当心，如果对一个段落设置了负值，那么首行的某些文本可能会超出浏览器窗口的左边界。为了避免出现这种显示问题，建议针对负缩进再设置一个外边距或一些内边距：

	p {text-indent: -5em; padding-left: 5em;}


**使用百分比值**

text-indent 可以使用所有长度单位，包括百分比值。

百分数要相对于缩进元素父元素的宽度。换句话说，如果将缩进值设置为 20%，所影响元素的第一行会缩进其父元素宽度的 20%。

在下例中，缩进值是父元素的 20%，即 100 个像素：

	div {width: 500px;}
	p {text-indent: 20%;}

	<div>
	<p>this is a paragragh</p>
	</div>


**继承**

text-indent 属性可以继承，请考虑如下标记：

	div#outer {width: 500px;}
	div#inner {text-indent: 10%;}
	p {width: 200px;}

	<div id="outer">
	<div id="inner">some text. some text. some text.
	<p>this is a paragragh.</p>
	</div>
	</div>

以上标记中的段落也会缩进 50 像素，这是因为这个段落继承了 id 为 inner 的 div 元素的缩进值。

###CSS字体
>CSS 字体属性定义文本的字体系列、大小、加粗、风格（如斜体）和变形（如小型大写字母）。
>
![css字体](https://github.com/BaiLinLin/Class-notes/blob/master/img/CSS%E5%AD%97%E4%BD%93.jpg)

**CSS 字体系列**

在 CSS 中，有两种不同类型的字体系列名称：

- 通用字体系列 - 拥有相似外观的字体系统组合（比如 "Serif" 或 "Monospace"）

- 特定字体系列 - 具体的字体系列（比如 "Times" 或 "Courier"）

除了各种特定的字体系列外，CSS 定义了 5 种通用字体系列：

- Serif 字体
- Sans-serif 字体
- Monospace 字体
- Cursive 字体
- Fantasy 字体

**指定字体系列**

使用 font-family 属性 定义文本的字体系列。

如果你希望文档使用一种 sans-serif 字体，但是你并不关心是哪一种字体，以下就是一个合适的声明：

	body {font-family: sans-serif;}

这样用户代理就会从 sans-serif 字体系列中选择一个字体（如 Helvetica），并将其应用到 body 元素。因为有继承，这种字体选择还将应用到 body 元素中包含的所有元素，除非有一种更特定的选择器将其覆盖

除了使用通用的字体系列，您还可以通过 font-family 属性设置更具体的字体。
下面的例子为所有 h1 元素设置了 Georgia 字体：

	h1 {font-family: Georgia;}

**字体风格**

font-style 属性最常用于规定斜体文本。
该属性有三个值：

- normal - 文本正常显示
- italic - 文本斜体显示
- oblique - 文本倾斜显示
<pre>
	实例
	p.normal {font-style:normal;}

	p.italic {font-style:italic;}

	p.oblique {font-style:oblique;}
</pre>

**italic 和 oblique 的区别**

font-style 非常简单：用于在 normal 文本、italic 文本和 oblique 文本之间选择。唯一有点复杂的是明确 italic 文本和 oblique 文本之间的差别。

斜体（italic）是一种简单的字体风格，对每个字母的结构有一些小改动，来反映变化的外观。与此不同，倾斜（oblique）文本则是正常竖直文本的一个倾斜版本。

通常情况下，italic 和 oblique 文本在 web 浏览器中看上去完全一样。

**字体变形**

font-variant 属性可以设定小型大写字母。

小型大写字母不是一般的大写字母，也不是小写字母，这种字母采用不同大小的大写字母。

	实例
	p {font-variant:small-caps;}

**字体加粗**

font-weight 属性设置文本的粗细。

使用 bold 关键字可以将文本设置为粗体。

关键字 100 ~ 900 为字体指定了 9 级加粗度。如果一个字体内置了这些加粗级别，那么这些数字就直接映射到预定义的级别，100 对应最细的字体变形，900 对应最粗的字体变形。数字 400 等价于 normal，而 700 等价于 bold。

如果将元素的加粗设置为 bolder，浏览器会设置比所继承值更粗的一个字体加粗。与此相反，关键词 lighter 会导致浏览器将加粗度下移而不是上移。

	实例
	p.normal {font-weight:normal;}
	p.thick {font-weight:bold;}
	p.thicker {font-weight:900;}

**字体大小**

font-size 属性设置文本的大小。

有能力管理文本的大小在 web 设计领域很重要。但是，您不应当通过调整文本大小使段落看上去像标题，或者使标题看上去像段落。

请始终使用正确的 HTML 标题，比如使用 < h1> - < h6> 来标记标题，使用 < p> 来标记段落。

font-size 值可以是绝对或相对值。

绝对值：

- 将文本设置为指定的大小
- 不允许用户在所有浏览器中改变文本大小（不利于可用性）
- 绝对大小在确定了输出的物理尺寸时很有用

相对大小：

- 相对于周围的元素来设置大小
- 允许用户在浏览器改变文本大小

**注意：**如果您没有规定字体大小，普通文本（比如段落）的默认大小是 16 像素 (16px=1em)。

**使用像素来设置字体大小**

通过像素设置文本大小，可以对文本大小进行完全控制：

	实例
	h1 {font-size:60px;}
	h2 {font-size:40px;}
	p {font-size:14px;}

**使用 em 来设置字体大小**

如果要避免在 Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替 pixels。

W3C 推荐使用 em 尺寸单位。

1em 等于当前的字体尺寸。如果一个元素的 font-size 为 16 像素，那么对于该元素，1em 就等于 16 像素。在设置字体大小时，em 的值会相对于父元素的字体大小改变。

浏览器中默认的文本大小是 16 像素。因此 1em 的默认尺寸是 16 像素。
可以使用下面这个公式将像素转换为 em：pixels/16=em

（注：16 等于父元素的默认字体大小，假设父元素的 font-size 为 20px，那么公式需改为：pixels/20=em）

	实例
	h1 {font-size:3.75em;} /* 60px/16=3.75em */
	h2 {font-size:2.5em;}  /* 40px/16=2.5em */
	p {font-size:0.875em;} /* 14px/16=0.875em */

###CSS链接
>我们能够以不同的方法为链接设置样式。

设置链接的样式

能够设置链接样式的 CSS 属性有很多种（例如 color, font-family, background 等等）。

链接的特殊性在于能够根据它们所处的状态来设置它们的样式。

链接的四种状态：

- a:link - 普通的、未被访问的链接
- a:visited - 用户已访问的链接
- a:hover - 鼠标指针位于链接的上方
- a:active - 链接被点击的时刻

	a:link {color:#FF0000;}		/* 未被访问的链接 */
	a:visited {color:#00FF00;}	/* 已被访问的链接 */
	a:hover {color:#FF00FF;}	/* 鼠标指针移动到链接上 */
	a:active {color:#0000FF;}	/* 正在被点击的链接 */

当为链接的不同状态设置样式时，请按照以下次序规则：

- a:hover 必须位于 a:link 和 a:visited 之后
- a:active 必须位于 a:hover 之后

**文本修饰**

text-decoration 属性大多用于去掉链接中的下划线：

	实例
	a:link {text-decoration:none;}
	a:visited {text-decoration:none;}
	a:hover {text-decoration:underline;}
	a:active {text-decoration:underline;}

**景色**

background-color 属性规定链接的背景色：

	实例
	a:link {background-color:#B2FF99;}
	a:visited {background-color:#FFFF85;}
	a:hover {background-color:#FF704D;}
	a:active {background-color:#FF704D;}

###CSS列表

>css列表允许你放置、改变列表标志，或则将图像作为列表项标志。

**CSS 列表**

从某种意义上讲，不是描述性的文本的任何内容都可以认为是列表。人口普查、太阳系、家谱、参观菜单，甚至你的所有朋友都可以表示为一个列表或者是列表的列表。

由于列表如此多样，这使得列表相当重要，所以说，CSS 中列表样式不太丰富确实是一大憾事。

**列表类型**

要影响列表的样式，最简单（同时支持最充分）的办法就是改变其标志类型。

例如，在一个无序列表中，列表项的标志 (marker) 是出现在各列表项旁边的圆点。在有序列表中，标志可能是字母、数字或另外某种计数体系中的一个符号。

要修改用于列表项的标志类型，可以使用属性 list-style-type：

	ul {list-style-type : square}

上面的声明把无序列表中的列表项标志设置为方块。

**列表项图像**

有时，常规的标志是不够的。你可能想对各标志使用一个图像，这可以利用 list-style-image 属性做到：

	ul li {list-style-image : url(xxx.gif)}

只需要简单地使用一个 url() 值，就可以使用图像作为标志。

**列表标志位置**

CSS2.1 可以确定标志出现在列表项内容之外还是内容内部。这是利用 list-style-position 完成的。

**简写列表样式**

为简单起见，可以将以上 3 个列表样式属性合并为一个方便的属性：list-style，就像这样：

	li {list-style : url(example.gif) square inside}

list-style 的值可以按任何顺序列出，而且这些值都可以忽略。只要提供了一个值，其它的就会填入其默认值。

###CSS表格
>css表格属性可以帮助极大地改善表格的外观。

**表格边框**

如需在 CSS 中设置表格边框，请使用 border 属性。
下面的例子为 table、th 以及 td 设置了蓝色边框：

	table, th, td
	  {
	  border: 1px solid blue;
	  }

请注意，上例中的表格具有双线条边框。这是由于 table、th 以及 td 元素都有独立的边框。

如果需要把表格显示为单线条边框，请使用 border-collapse 属性。
折叠边框

border-collapse 属性设置是否将表格边框折叠为单一边框：

	table
	  {
	  border-collapse:collapse;
	  }

	table,th, td
	  {
	  border: 1px solid black;
	  }

**表格宽度和高度**

通过 width 和 height 属性定义表格的宽度和高度
。
下面的例子将表格宽度设置为 100%，同时将 th 元素的高度设置为 50px：

	table
	  {
	  width:100%;
	  }
	
	th
	  {
	  height:50px;
	  }

**表格文本对齐**

text-align 和 vertical-align 属性设置表格中文本的对齐方式。
text-align 属性设置水平对齐方式，比如左对齐、右对齐或者居中：

	td
	  {
	  text-align:right;
	  }

vertical-align 属性设置垂直对齐方式，比如顶部对齐、底部对齐或居中对齐：

	td
	  {
	  height:50px;
	  vertical-align:bottom;
	  }

**表格内边距**

如需控制表格中内容与边框的距离，请为 td 和 th 元素设置 padding 属性：

	td
	  {
	  padding:15px;
	  }

**表格颜色**

下面的例子设置边框的颜色，以及 th 元素的文本和背景颜色：

	table, td, th
	  {
	  border:1px solid green;
	  }
	
	th
	  {
	  background-color:green;
	  color:white;
	  }
###CSS轮廓

>轮廓是绘制于元素周围的一条线，位于边框外缘的外围，可起到突出元素的作用，CSS outline 属性规定元素轮廓的样式、颜色和宽度。