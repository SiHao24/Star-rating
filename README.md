# Star-rating
星级评分


## style标签放置位置
    放在head标签里面，这是因为我们不希望看到裸奔的页面，在看到它穿衣服的样子，而是希望它能直接穿着衣服出现在我们的面前。
## script标签放置位置
1.放在head里面    
    需要将程序写在window.onload里面，不然找不见DOM节点，当JavaScript代码没有加载完成的话，后面的所有DOM节点就无法加载，这样以来就会阻塞页面的渲染，导致出现长时间的空白，造成很糟糕的用户体验。
2.放在body尾部
    不需要写window.onload，能找到DOM节点

### demo01存在问题
 * 1.含有过多的全局变量num,$rating,$item等，多人共同开发时容易造成变量同名从而被覆盖产生bug（模拟命名空间或者用闭包解决）

   * 2.事件绑定的写法为每颗星星都绑定了事件，当星星数过多时造成浪费

   	    （事件委托（事件代理）：根据冒泡的特性，在父容器上绑定一次事件即可，通过判断在父元素中判断是不是相应的子元素触发了相应的事件）

   * 3.不能实现代码复用，多个评分要通过复制代码修改后使用。


### 设计模式
1.设计模式是在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方法呢    
2.设计模式是一套被反复使用、多数人知晓的、经过分类编程的、代码设计经验的总结。
