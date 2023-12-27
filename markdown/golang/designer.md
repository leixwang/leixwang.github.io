# Golang 工厂模式

[[toc]]


## 创建型模式

### 简单工厂模式（Simple Factory）

`go` 语言没有构造函数一说，所以一般会定义 `NewXXX` 函数来初始化相关类。
`NewXXX` 函数返回接口时就是简单工厂模式，也就是说 `Golang` 的一般推荐做法就是简单工厂。

在这个 `simplefactory` 包中只有API 接口和 `NewAPI` 函数为包外可见，封装了实现细节。

::: details 代码
<<< @/code/golang/designer/00_simple_factory/simple.go
:::


### 工厂方法模式（Factory Method）

工厂方法模式使用子类的方式延迟生成对象到子类中实现。

`Go` 中不存在继承 所以使用匿名组合来实现

::: details 代码
<<< @/code/golang/designer/04_factory_method/factorymethod.go
:::

### 抽象工厂模式（Abstract Factory）

抽象工厂模式用于生成产品族的工厂，所生成的对象是有关联的。如果抽象工厂退化成生成的对象无关联则成为工厂函数模式。
比如本例子中使用 `RDB` 和 `XML` 存储订单信息，抽象工厂分别能生成相关的主订单信息和订单详情信息。 如果业务逻辑中需要替换使用的时候只需要改动工厂函数相关的类就能替换使用不同的存储方式了。

::: details 代码
<<< @/code/golang/designer/05_abstract_factory/abstractfactory.go
:::

### 创建者模式（Builder）


::: details 代码
<<< @/code/golang/designer/06_builder
:::


### 原型模式（Prototype）

原型模式使对象能复制自身，并且暴露到接口中，使客户端面向接口编程时，不知道接口实际对象的情况下生成新的对象。

原型模式配合原型管理器使用，使得客户端在不知道具体类的情况下，通过接口管理器得到新的实例，并且包含部分预设定配置。


::: details 代码
<<< @/code/golang/designer/07_prototype/prototype.go
:::

### 单例模式（Singleton）


使用懒惰模式的单例模式，使用双重检查加锁保证线程安全


::: details 代码
<<< @/code/golang/designer/03_singleton/singleton.go
:::

## 结构型模式

### 外观模式（Facade）

`API` 为 `facade` 模块的外观接口，大部分代码使用此接口简化对 `facade` 类的访问。

`facade` 模块同时暴露了 `a` 和 `b` 两个 `Module` 的 `NewXXX` 和 `interface`，其它代码如果需要使用细节功能时可以直接调用。


::: details 代码
<<< @/code/golang/designer/01_facade/facade.go
:::


### 适配器模式（Adapter）


适配器模式用于转换一种接口适配另一种接口。

实际使用中 `Adaptee` 一般为接口，并且使用工厂函数生成实例。

在 `Adapter` 中匿名组合 `Adaptee` 接口，所以 `Adapter` 类也拥有 `SpecificRequest` 实例方法，又因为 `Go` 语言中非入侵式接口特征，其实 `Adapter` 也适配 `Adaptee`
接口。


::: details 代码
<<< @/code/golang/designer/02_adapter/adapter.go
:::


### 代理模式（Proxy）


代理模式用于延迟处理操作或者在进行实际操作前后进行其它处理。

##### 代理模式的常见用法有

* 虚代理
* COW代理
* 远程代理
* 保护代理
* Cache 代理
* 防火墙代理
* 同步代理
* 智能指引



::: details 代码
<<< @/code/golang/designer/09_proxy/proxy.go
:::


### 组合模式（Composite）

组合模式统一对象和对象集，使得使用相同接口使用对象和对象集。

组合模式常用于树状结构，用于统一叶子节点和树节点的访问，并且可以用于应用某一操作到所有子节点。

::: details 代码
<<< @/code/golang/designer/13_composite/composite.go
:::


### 享元模式（Flyweight）

享元模式从对象中剥离出不发生改变且多个实例需要的重复数据，独立出一个享元，使多个对象共享，从而节省内存以及减少对象数量。


::: details 代码
<<< @/code/golang/designer/18_flyweight/flyweight.go
:::


### 装饰模式（Decorator）


装饰模式使用对象组合的方式动态改变或增加对象行为。

Go语言借助于匿名组合和非入侵式接口可以很方便实现装饰模式。

使用匿名组合，在装饰器中不必显式定义转调原对象方法。


::: details 代码
<<< @/code/golang/designer/20_decorator/decorator.go
:::

### 桥模式（Bridge）

桥接模式分离抽象部分和实现部分。使得两部分独立扩展。

桥接模式类似于策略模式，区别在于策略模式封装一系列算法使得算法可以互相替换。

策略模式使抽象部分和实现部分分离，可以独立变化。


::: details 代码
<<< @/code/golang/designer/22_bridge/bridge.go
:::

## 行为型模式

### 中介者模式（Mediator）

中介者模式封装对象之间互交，使依赖变的简单，并且使复杂互交简单化，封装在中介者中。

例子中的中介者使用单例模式生成中介者。

中介者的change使用switch判断类型。


::: details 代码
<<< @/code/golang/designer/08_mediator/mediator.go
:::

### 观察者模式（Observer）

观察者模式用于触发联动。

一个对象的改变会触发其它观察者的相关动作，而此对象无需关心连动对象的具体实现。


::: details 代码
<<< @/code/golang/designer/10_observer/observer.go
:::

### 命令模式（Command）

命令模式本质是把某个对象的方法调用封装到对象中，方便传递、存储、调用。

示例中把主板单中的启动(start)方法和重启(reboot)方法封装为命令对象，再传递到主机(box)对象中。于两个按钮进行绑定：

* 第一个机箱(box1)设置按钮1(button1) 为开机按钮2(button2)为重启。
* 第二个机箱(box1)设置按钮2(button2) 为开机按钮1(button1)为重启。

从而得到配置灵活性。

除了配置灵活外，使用命令模式还可以用作：

* 批处理
* 任务队列
* undo, redo

等把具体命令封装到对象中使用的场合



::: details 代码
<<< @/code/golang/designer/11_command/command.go
:::

### 迭代器模式（Iterator）

迭代器模式用于使用相同方式送代不同类型集合或者隐藏集合类型的具体实现。

可以使用迭代器模式使遍历同时应用送代策略，如请求新对象、过滤、处理对象等。


::: details 代码
<<< @/code/golang/designer/12_iterator/iterator.go
:::

### 模板方法模式（Template Method）

模版方法模式使用继承机制，把通用步骤和通用方法放到父类中，把具体实现延迟到子类中实现。使得实现符合开闭原则。

如实例代码中通用步骤在父类中实现（`准备`、`下载`、`保存`、`收尾`）下载和保存的具体实现留到子类中，并且提供 `保存`方法的默认实现。

因为Golang不提供继承机制，需要使用匿名组合模拟实现继承。

此处需要注意：因为父类需要调用子类方法，所以子类需要匿名组合父类的同时，父类需要持有子类的引用。


::: details 代码
<<< @/code/golang/designer/14_template_method/templatemethod.go
:::

### 策略模式（Strategy）

定义一系列算法，让这些算法在运行时可以互换，使得分离算法，符合开闭原则。


::: details 代码
<<< @/code/golang/designer/15_strategy/strategy.go
:::

### 状态模式（State）

状态模式用于分离状态和行为。


::: details 代码
<<< @/code/golang/designer/16_state/state.go
:::


### 备忘录模式（Memento）


备忘录模式用于保存程序内部状态到外部，又不希望暴露内部状态的情形。

程序内部状态使用窄接口传递给外部进行存储，从而不暴露程序实现细节。

备忘录模式同时可以离线保存内部状态，如保存到数据库，文件等。


::: details 代码
<<< @/code/golang/designer/17_memento/memento.go
:::


### 解释器模式（Interpreter）

解释器模式定义一套语言文法，并设计该语言解释器，使用户能使用特定文法控制解释器行为。

解释器模式的意义在于，它分离多种复杂功能的实现，每个功能只需关注自身的解释。

对于调用者不用关心内部的解释器的工作，只需要用简单的方式组合命令就可以。



::: details 代码
<<< @/code/golang/designer/19_interpreter/interpreter.go
:::


### 职责链模式（Chain of Responsibility）

职责链模式用于分离不同职责，并且动态组合相关职责。

Golang实现职责链模式时候，因为没有继承的支持，使用链对象包涵职责的方式，即：

* 链对象包含当前职责对象以及下一个职责链。
* 职责对象提供接口表示是否能处理对应请求。
* 职责对象提供处理函数处理相关职责。

同时可在职责链类中实现职责接口相关函数，使职责链对象可以当做一般职责对象是用。


::: details 代码
<<< @/code/golang/designer/21_chain_of_responsibility/chain.go
:::


### 访问者模式（Visitor）

访问者模式可以给一系列对象透明的添加功能，并且把相关代码封装到一个类中。

对象只要预留访问者接口`Accept`则后期为对象添加功能的时候就不需要改动对象。


::: details 代码

<<< @/code/golang/designer/23_visitor/visitor.go

:::
