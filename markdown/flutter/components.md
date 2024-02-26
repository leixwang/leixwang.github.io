# Flutter 常用组件
## 1. 文本组件








## 2. 图片组件



## 3. 按钮组件


### 按钮样式

```dart
ButtonStyle(
    textStyle: MaterialStatePropertyAll<TextStyle?>(textStyle),
    backgroundColor: backgroundColorProp,
    foregroundColor: foregroundColorProp,
    overlayColor: overlayColor,
    shadowColor: ButtonStyleButton.allOrNull<Color>(shadowColor),
    surfaceTintColor: ButtonStyleButton.allOrNull<Color>(surfaceTintColor),
    elevation: elevationValue,
    padding: ButtonStyleButton.allOrNull<EdgeInsetsGeometry>(padding),
    minimumSize: ButtonStyleButton.allOrNull<Size>(minimumSize),
    fixedSize: ButtonStyleButton.allOrNull<Size>(fixedSize),
    maximumSize: ButtonStyleButton.allOrNull<Size>(maximumSize),
    side: ButtonStyleButton.allOrNull<BorderSide>(side),
    shape: ButtonStyleButton.allOrNull<OutlinedBorder>(shape),
    mouseCursor: mouseCursor,
    visualDensity: visualDensity,
    tapTargetSize: tapTargetSize,
    animationDuration: animationDuration,
    enableFeedback: enableFeedback,
    alignment: alignment,
    splashFactory: splashFactory,
  );
```