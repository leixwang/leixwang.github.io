# Flutter SharedPreferences的封装






## 进行封装

1. 先安装 `shared_preferences` 插件：
```bash
flutter pub add shared_preferences
```


2. 在根目录中 `pubspec.yaml` 文件中添加依赖：
```yaml
dependencies:
  shared_preferences: ^2.2.2
```

以上两种方法都以.


然后在 `lib` 目录下创建一个 `common` 的目录, 用于存储公用的方法, 在 `common` 的目录下, 创建 `cache_data.dart` 文件，用于封装 `SharedPreferences` 的操作。


```dart
import 'package:shared_preferences/shared_preferences.dart';

class CacheData {
  SharedPreferences? _prefs;
  static CacheData? _instance;

  CacheData.of() {
    init();
  }

  CacheData._pre(SharedPreferences prefs) {
    _prefs = prefs;
  }

  static CacheData getInstance() {
    _instance ??= CacheData.of();
    return _instance!;
  }

  void init() async {
    _prefs ??= await SharedPreferences.getInstance();
  }

  static Future<CacheData> preInit() async {
    if (_instance == null) {
      var prefs = await SharedPreferences.getInstance();
      _instance = CacheData._pre(prefs);
    }
    return _instance!;
  }

  void setData<T>(String key, T data) {
    if (data is String) {
      _prefs?.setString(key, data);
    } else if (data is double) {
      _prefs?.setDouble(key, data);
    } else if (data is int) {
      _prefs?.setInt(key, data);
    } else if (data is bool) {
      _prefs?.setBool(key, data);
    } else if (data is List<String>) {
      _prefs?.setStringList(key, data);
    }
  }

  void remove(String key) {
    _prefs?.remove(key);
  }

  T? get<T>(String key) {
    var value = _prefs?.get(key);
    if (value != null) {
      return value as T;
    }
    return null;
  }
}

```



## 基本使用方法


然后在 `main.dart` 中进行初始化：
```dart
@override
void initState() {
  super.initState();
  CacheData.preInit();
}


可以在任何使用的地方通过 `CacheData.getInstance()` 获取到单例对象，然后进行数据读写操作。

```dart
CacheData.getInstance().setData("key", "value");
var value = CacheData.getInstance().get("key");
```

例如:

```dart
CacheData.getInstance().setData("key", "value");
var value = CacheData.getInstance().get("key");

// bool
CacheData.getInstance().setData("isTure", false);
var value = CacheData.getInstance().get("isTure");

// int
CacheData.getInstance().setData("age", 24);
var value = CacheData.getInstance().get("age");

// delete key
CacheData.getInstance().remove("key");

```



