- 如何设计一个跨终端的网页栅格系统，实现4等分(在PC)，实现3等分（ipad），在手机里2等分.

- Twitter Bootstrap 是自适应的前端框架，一份代码，到处运行。
    核心： 在一个col上定义多个尺寸，
    media query 
    .col-lg-n 超大型电脑                大于1200像素         min-width: 1200px
    .col-md-n 中等电脑 （笔记本）        大于1000像素         1000-1200px
    .col-sm-n ipad                     大于768像素          768-1024
    .col-xs-n 手机                     小于768像素           max-width: 767px


-   .container
    .row
    .col-${n}

- float 具有更好的兼容性