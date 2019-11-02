## Child: >

**nav>ul>li**

```emmet
<nav>
    <ul>
        <li></li>
    </ul>
</nav>
```

## Sibling: +

**div+p+bq**

```emmet
<div></div>
<p></p>
<blockquote></blockquote>
```

## Climb-up: ^

**div+div>p>span+em^bq**

```emmet
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

**div+div>p>span+em^^bq**

```emmet
<div></div>
<div>
   <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

## Grouping: ()

**div>(header>ul>li\*2>a)+footer>p**

```emmet
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

**(div>dl>(dt+dd)\*3)+footer>p**

```emmet
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

## Multiplication: \*

**ul>li\*5**

```emmet
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

## Item numbering: \$

**ul>li.item\$\*5**

```emmet
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

**h$[title=item$]{Header \$}\*3**

```emmet
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

**ul>li.item\$\$\$\*5**

```emmet
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

**ul>li.item\$@-\*5**

```emmet
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

**ul>li.item\$@3\*5**

```emmet
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

## ID and CLASS attributes

**#header**

```emmet
<div id="header"></div>
```

**.title**

```emmet
<div class="title"></div>
```

**form#search.wide**

```emmet
<form id="search" class="wide"></form>
```

**p.class1.class2.class3**

```emmet
<p class="class1 class2 class3"></p>
```
