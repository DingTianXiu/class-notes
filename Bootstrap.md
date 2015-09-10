Bootstrap框架学习笔记
----------

>Bootstrap是简单灵活的可用于搭建web页面的html、css、javascript的工具集。基于html5和css3，具有漂亮的设计，是一款简洁强大的开发框架。让web开发更迅速更简单。
GitHub上这样介绍 bootstrap：


-   ☑  简单灵活可用于架构流行的用户界面和交互接口的html、css、javascript工具集。
  
-   ☑  基于html5、css3的bootstrap，具有大量的诱人特性：友好的学习曲线，卓越的兼容性，响应式设计，12列格网，样式向导文档。

-   ☑  自定义JQuery插件，完整的类库，基于Less等。

##开始使用Bootstrap

- 打开官方页面http://getbootstrap.com/
- Bootstrap分为2和3版本，2兼容多浏览器，代码不够简洁，3浏览器支持有限。
- 官网的结构清晰，起步页面，可以下载框架和源码，不想下载只要引用链接就可以了
- 框架主要包括css、js、和字体文件
- Bootstrap中的js插件主要依赖于jQuery，因此jQuery要在Bootstrap之前引用。
- 页面模版
	- html5的定义
	- utf-8编码
	- 在ie浏览器中运行最新的渲染模式
	- 初始化浏览器显示，页面放在虚拟的适口，viewport控制视图的大小，控制缩放，宽度等于适口的宽度，缩放的比例。
	- 载入Bootstrap的css样式
	- 加入jQuery和Bootstrap的插件，平时把css文件放到head中，**把js放在body的最下面**
	
- 全局样式
	- Bootstrap框架中也有设置全局样式，Bootstrap的核心是轻量级的Css代码库，并没有一味的重置样式，而是注重各浏览器的基础表现，降低了开发难度。
	- Bootstrap框架保留和坚持部分浏览器的基础样式，解决部分潜在额问题，提升一些细节的体验，具体如下：
		- 移除body的margin声明
		- 设置body的背景为白色
		- 为排班设置了基本的字体，字号，行高
		- 设置全局链接颜色，且当链接处于悬浮“：hover”的状态时才会显示下划线样式
		
##排版

- 标题1
	- 重置了margin-top和margin-bottom的值
	- 所有的行高都是1.1
	- 固定不同级别的标题的字体大小
	
- 标题2
	- 使用了`<small>`标签来制作副标题，副标题具有自己的独特的样式
		- 行高都是1，`font-weight`设置成常规效果（不加粗），同时颜色设置成灰色
		- `<small>`标签在`<h1>~<h3>`内设置成当前字号的65%，在`<h4>~<h6>`内设置成当前字号的75%
		- 用法如：`<h1>Bootstrap标题一<small>我是副标题</small></h1>`
		
- ###**段落正文文本**
- 强调内容
- 粗体
	- 在Bootstrap中，可以使用`<b>和<strong>`标签让文本直接加粗。
- 斜体
	- Bootstrap中还可以通过使用标签`<em>或<i>`来实现。斜体
	
- ###**强调相关的类**
	- 这些强调类都是通过颜色来表示强调，具本说明如下：
		- .text-muted：提示，使用浅灰色（#999）
		- .text-primary：主要，使用蓝色（#428bca）
		- .text-success：成功，使用浅绿色(#3c763d)
		- .text-info：通知信息，使用浅蓝色（#31708f）
		- .text-warning：警告，使用黄色（#8a6d3b）
		- .text-danger：危险，使用褐色（##a94442）
		

- ###**文本对齐风格**
	- 为了简化操作，方便使用，Bootstrap通过定义四个类名来控制文本的对齐风格：
		  - ☑   .text-left：左对齐
		  - ☑   .text-center：居中对齐
		  - ☑   .text-right：右对齐
		  -  ☑   .text-justify：两端对齐
		
- ###列表
	- Bootstrap根据平时的使用情形提供了六种形式的列表：
		  -  ☑  普通列表
		  -  ☑  有序列表
		  -  ☑  去点列表
		  -  ☑  内联列表
		  -  ☑  描述列表
		  -  ☑  水平描述列表
		 
	- 去点列表
		- 通过给无序列表添加一个类名“.list-unstyled”,这样就可以去除默认的列表样式的风格。
		
	- 内联列表
		>Bootstrap像去点列表一样，通过添加类名“.list-inline”来实现内联列表，简单点说就是把垂直列表换成水平列表，而且去掉项目符号（编号），保持水平显示。也可以说内联列表就是为制作水平导航而生。
		
	- 定义列表
		- 水平定义列表.dl-horizontal给定义的列表实现水平显示的效果
		- 添加类名“.dl-horizontal”才具有水平定义列表效果。其实现主要方式：
		- 1、将dt设置了一个左浮动，并且设置了一个宽度为160px
		- 2、将dd设置一个margin-left的值为180px，达到水平的效果
		- 3、当标题宽度超过160px时，将会显示三个省略号
		
	
	- 代码
		- 三种代码风格：
			- 1、使用`<code></code>`来显示单行内联代码
			- 2、使用`<pre></pre>`来显示多行块代码
			- 3、使用`<kbd></kbd>`来显示用户输入代码
			
		- 在使用代码时，用户可以根据具体的需求来使用不同的类型：
			- 1、`<code>`：一般是针对于单个单词或单个句子的代码
			- 2、`<pre>`：一般是针对于多行代码（也就是成块的代码）
			- 3、`<kbd>`:一般是表示用户要通过键盘输入的内容
			
 
		- 不管使用哪种代码风格，在代码中碰到小于号（<）要使用硬编码`“&lt;”`来替代，大于号(>)使用`“&gt;”`来替代。而且对于`<pre>`代码块风格，标签前面留多少个空格，在显示效果中就会留多少个空格。
		- 但有时候代码太多，而且不想让其占有太大的页面篇幅，就想控制代码块的大小。.pre-scrollable”，就可以控制代码块区域最大高度为340px，一旦超出这个高度，就会在Y轴出现滚动条。
	
##表格

>表格是Bootstrap的一个基础组件之一，Bootstrap为表格提供了1种基础样式和4种附加样式以及1个支持响应式的表格。在使用Bootstrap的表格过程中，只需要添加对应的类名就可以得到不同的表格风格

- Bootstrap为表格不同的样式风格提供了不同的类名，主要包括：
	 -  ☑  .table：基础表格
	 - ☑  .table-striped：斑马线表格
	 -  ☑  .table-bordered：带边框的表格
	 -  ☑  .table-hover：鼠标悬停高亮的表格
	 -  ☑  .table-condensed：紧凑型表格
	 - ☑  .table-responsive：响应式表格
	 
- Bootstrap还为表格的行元素<tr>提供了五种不同的类名，每种类名控制了行的不同**背景颜色**，具体说明如下:
	- .active	表示当前活动的信息
	- .success	表示成功或者正确的行为
	- .info	表示中立的信息或行为
	- .warning	表示警告，需要特别注意
	- .danger	表示危险或者可能是错误的行为
	
- 除了”.active”之外，其他四个类名和”.table-hover”配合使用时，Bootstrap针对这几种样式也做了相应的悬浮状态的样式设置，所以如果需要给tr元素添加其他颜色样式时，在”.table-hover”表格中也要做相应的调整。

###基础表格 

- “.table”主要有三个作用：
   - ☑  给表格设置了margin-bottom:20px以及设置单元内距
  -  ☑  在thead底部设置了一个2px的浅灰实线
  - ☑  每个单元格顶部设置了一个1px的浅灰实线
 	 
###斑马线表格
 简单点说就是让表格带有背景条纹效果。在Bootstrap中实现这种表格效果并不困难，只需要在<table class="table">的基础上增加类名“.table-striped”即可

###带边框的表格

- Bootstrap中带边框的表格使用方法和斑马线表格的使用方法类似，只需要在基础表格<table class="table">基础上添加一个“.table-bordered”类名即可：

### 鼠标悬浮高亮的表格

-  当鼠标悬停在表格的行上面有一个高亮的背景色，这样的表格让人看起来就是舒服，时刻告诉用户正在阅读表格哪一行的数据。Bootstrap其提供了一个“.table-hover”类名来实现这种表格效果。
**鼠标悬浮高亮表格，可以和Bootstrap其他表格混合使用。**

###紧凑型表格
 - 何谓紧凑型表格，简单理解，就是单元格没内距或者内距较其他表格的内距更小。换句话说，要实现紧凑型表格只需要重置表格单元格的内距padding的值。那么在Bootstrap中，通过类名“table-condensed”重置了单元格内距值。

###响应型表格
Bootstrap中响应式表格效果表现为：当你的浏览器可视区域小于768px时，表格底部会出现水平滚动条。当你的浏览器可视区域大于768px时，表格底部水平滚动条就会消失。

##表单

###基础表单

>表单的主要功能是用来和用户做交流的网页控件，良好的表单设计能让网页与用户更好的沟通，表单中最常见的主要包括：文本输入框，下拉选择框，单选按钮，复选按钮，文本和按钮。期中每个控件起的作用都各不相同，而且不同的浏览器对表单控件渲染的风格都各有不同。


- 在Bootstrap框架中，通过定制了一个类名`form-control`，也就是说，如果这几个元素使用了类名“form-control”，将会实现一些设计上的定制效果。
	- 1、宽度变成了100%
	- 2、设置了一个浅灰色（#ccc）的边框
	- 3、具有4px的圆角
	- 4、设置阴影效果，并且元素得到焦点之时，阴影和边框效果会有所变化
	- 5、设置了placeholder的颜色为#999

###水平表单

- Bootstrap要实现水平表单效果，必须满足以下两个条件
	- 在form中使用类名“form-horizontal”
	- 配合Bootstrap框架的网络系统。
	
- 在form中使用类名‘form-horizontal’主要有以下的作用
	- 设置表单控件padding和margin
	- 改变‘form-group’的表现形式，类似于网格系统的row。

###内联表单

- 在Bootstrap框架中实现这样的表单效果是轻而易举的，你只需要在<form>元素中添加类名“form-inline”即可。