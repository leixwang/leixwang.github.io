# Flutter 常用布局
## 1. 线性布局（LinearLayout）
线性布局是最基本的布局，它可以将子组件按行或按列排列。
```dart
Row(
  children: <Widget>[
  Text('Hello'),
  Text('World'),
  ],
)
```

## 2. 流式布局（Wrap）
流式布局可以将子组件按行或按列排列，并在需要时自动换行。
```dart
Wrap(
  spacing: 8, // 主轴(水平)方向子组件的间距
  runSpacing: 4, // 交叉轴(垂直)方向子组件的间距
  alignment: WrapAlignment.center, // 子组件的对齐方式
  children: <Widget>[
    Chip(label: Text('Hello')),
    Chip(label: Text('World')),
  ],
)
```

## 3. 弹性布局（Flex）
弹性布局可以根据子组件的权重来分配空间。
```dart
Row(
  children: <Widget>[
    Flexible(
      flex: 1,
      child: Container(
        height: 100,
        color: Colors.red,
      ),
    ),
    Flexible(
      flex: 2,
      child: Container(
        height: 100,
        color: Colors.blue,
      ),
    ),
  ],
)
```

## 4. 网格布局（GridView）
网格布局可以将子组件按网格排列。
```dart
GridView.count(
  crossAxisCount: 2, // 每行显示的子组件数量
  children: <Widget>[
    Container(color: Colors.red),
    Container(color: Colors.blue),
    Container(color: Colors.green),
    Container(color: Colors.yellow),
  ],
)
```

## 5. 层叠布局（Stack）
层叠布局可以将子组件按照层级堆叠显示。
```dart
Stack(
  children: <Widget>[
    Positioned(
      top: 50,
      left: 50,
      child: CircleAvatar(	
        backgroundImage: NetworkImage('https://example.com/avatar.jpg'),
        radius: 50,
      ),
    ),
    Positioned(	
      top: 100,
      left: 100,
      child: Text(
        'John Doe',
        style: TextStyle(fontSize: 24),
      ),
    ),
  ],
)
```
## 6. 表格布局（Table）
表格布局可以将子组件按照表格形式排列。
```dart
Table(
  children: <TableRow>[
    TableRow(
      children: <Widget>[
        Text('Name'),
        Text('Age'),
      ],
    ),
    TableRow(
      children: <Widget>[
        Text('John Doe'),
        Text('25'),
      ],
    ),
    TableRow(
      children: <Widget>[
        Text('Jane Smith'),
        Text('30'),
      ],
    ),
  ],
)
```

## 7. 流式布局（Wrap）
流式布局可以将子组件按照流式方式排列。
```dart
Wrap(
  spacing: 8, // 主轴方向子组件之间的间距
  runSpacing: 4, // 交叉轴方向子组件之间的间距
  children: <Widget>[
    Chip(label: Text('Chip 1')),
    Chip(label: Text('Chip 2')),
    Chip(label: Text('Chip 3')),
    Chip(label: Text('Chip 4')),
    Chip(label: Text('Chip 5')),
  ],
)
```

## 8. 弹性布局（Flex）
弹性布局可以将子组件按照弹性方式排列。
```dart
Flex(
  direction: Axis.horizontal, // 主轴方向
  mainAxisAlignment: MainAxisAlignment.spaceEvenly, // 主轴方向上的对齐方式
  crossAxisAlignment: CrossAxisAlignment.start, // 交叉轴方向上的对齐方式
  children: <Widget>[
    Text('Hello'),	
    Text('World'),
  ],
)
```



