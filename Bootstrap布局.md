Bootstrap网格布局
----------

本网格布局系统属于Scaffolding（框架，布局）部分。在Scaffolding里面有（固定）网格布局（Grid System）和流式网格布局（Fluid Grid System）。本文讨论第一种固定网格布局。

Bootstrap采用的是12列布局格式，即在页面一行之内最多可以布置12列。当然我们通常不会那么变态。我们通常是使用2列，或者3列，最多不会超过4列。那么具体怎么设置这些列呢？ok，慢慢说来。

Bootstrap中规定页面的总的宽度为940px，这个跟其他的CSS框架不太一样（其他有的是960px（960grid等），有点是950px（blueprint等））。这个940px是在一个名称为container的类中规定的，具体如下

<pre>
.container,
{
  width: 940px;
}
 
</pre>
还有就是规定了这个container的页面居中

<pre>
.container {
  margin-left: auto;
  margin-right: auto;
  *zoom: 1;
}

</pre>

（这里有个技巧，为了让div在各种浏览器下下产生同样的居中效果将margin-left和margin-right的值为auto是最简单的方式。*zoom这个css hack是为了兼容ie6和7，但具体为什么要使用zoom=1还不得而知。）

同时，还使用了css伪元素选择器，在这个类里面还清空了前后的内容，并且在后面还清除了浮动
<pre>
.container:before,
.container:after {
  display: table;
  content: "";
}

.container:after {
  clear: both;
}

</pre>
在container里面还不能直接进行多列布局，这个时候还需要使用row作为二级容器，row这个容器的样式挺有意思
<pre>
.row {
  margin-left: -20px;
  *zoom: 1;
}
</pre>

左边的margin为-20px，注意是负20.即是说row的宽度会突破外部的container20个像素。为什么呢？待会你就知道了。当然row里面也有设置清空前后内容和浮动的样式，跟container类似，此处不多敖述。
row里面才是我们要进行的具体多列布局的类span。具体使用布局时，代码大概这样

    <div class="container">
        <div class="row">
            <div class="span4">
                span4</div>
            <div class="span8">
                span8</div>
        </div>
    </div>
 

 

为什么不能将span直接放入container中，为什么row要margin-left=-20px？这就要细说一下span，这个也是笔者所讲“精巧网格布局”的原因。

确实情形下，Bootstrap共有12个span类，分别为span1,span2,….span12.他们的定义非常简单

<pre>
.span12 {
  width: 940px;
}
.span11 {
  width: 860px;
}
。。。
.span4 {
  width: 300px;
}
.span3 {
  width: 220px;
}
.span2 {
  width: 140px;
}
.span1 {
  width: 60px;
}

</pre>

当然还有使用伪类选择器统一将他们设置为浮动的样式
<pre>
[class*="span"] {
  float: left;
}
</pre>

浮动是另外的理论，我们按下不表。我们仔细看从span1到span12，发现一个规律，就是span每增加一次，就增加80px。只是span1是从60开始计数的，为什么不让span1从80开始计数，然后每个span都是80的倍数，这样也容易记忆呢？实际上啊，span还真是从80开始计数的。只不过其可视部分是60，另外的20在样式里面设置了margin-left=20；如下
<pre>
[class*="span"] {
  margin-left: 20px;
}
</pre>

这个20还有另外一个意义，就是其可以在页面上表示两个span之间的间隔，即所有的span之间都有20px的间隔，不至于黏在一起，让终端用户分不开。
 

即是80的整数倍便于记忆和使用，又能巧妙的分割多个span，多完美的解决方案啊。但是这样真的没有问题吗？好像不对，你看啊，我们例子中span4的实际宽度为300+20，span8的实际宽度为620+20.那么他们的总和为960. 960突破了container的940了啊？并且如果每个span左侧都有20px的空白，那么第一列也会有这个20px的空白，那页面最左侧是不是就难看了啊？

最左span的空白边

 

这个就是刚才我们引入row作为二级容器，并将其margin-left设置为-20的原因。你刚才看到的蓝色相框就是row容器。

具体如下，整个row的宽度为960，但是其向左偏移20px（margin-left=-20），这20个px纯粹是不可见的空白。row内真正可视的部分正好对其了页面的左边。同时因为向左偏移了20px，那么可视部分也正好放入了容器container的940px内。


Bootstrap布局理论大略如此。

接下来简单谈一下使用span进行整页布局的一个技巧：无论是做几列的布局，那么请一定保证在一个row内的各个span的名字加起来正好是12. 比如可以是前面说的span4+span8；也可以是一个单独的span12；也可以是span6+ span6；或者span4+ span4+ span4等等。



注：文字中谈的数字（比如container的宽度为940px，每个span的宽度都是缺省值，实际开发中我们可以适当重写。）