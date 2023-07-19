# Rust 实现 cat 命令
实现第一个常用的`Linux`命令, `cat`命令.

## cat 命令

```bash
$ cat date.txt
Hello world!
Hi china!
```



## 简单的实现

我现在先简单的 `v0.0.1` 版本的实现.读文件并显示出来. 我们可以成功的显示出来 `data.txt` 文件内容.

### 1. 打开文件

`Rust` 标准库提供了大量的模块和方法用于读写文件。
`Rust` 标准库中的 `std::fs::File` 模块提供了静态方法 `open()` 用于打开一个文件并返回文件句柄。
`open()` 函数的原型如下:
```rust
std::fs::File	open()
pub fn open(path: P) -> Result	 // 静态方法，以 `只读` 模式打开文件
```
`open()` 函数用于以只读模式打开一个已经存在的文件，如果文件不存在，则会抛出一个错误。如果文件不可读，那么也会抛出一个错误。


打开文件例如:

下面的范例，我们使用 `open()` 打开当前目录下的 `data.txt` 文件，已经文件已经存在，所以不会抛出任何错误.

```rust
fn main() {
    let file = std::fs::File::open("data.txt").unwrap();
    println!("open File: {:?}", file);
}
```

:::tip
编译运行以上 Rust 代码，输出结果如下:

```powershell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/rcat`
open File: { fd: 3, path: "/Users/richard/project/00.rust/01.rust-commnad-line/rcat/data.txt", read: true, write: false }
```
:::

:::danger
如果文件 `data.txt` 不存在，则会抛出以下错误:

```powershell
# cargo run
   Compiling rcat v0.1.0 (/Users/richard/project/00.rust/01.rust-commnad-line/rcat)
    Finished dev [unoptimized + debuginfo] target(s) in 3.42s
     Running `target/debug/rcat`
thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: Os { code: 2, kind: NotFound, message: "No such file or directory" }', src/main.rs:2:48
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```
:::

### 2. 读文件内容

使用 `read_to_string()` 函数从文件中读取所有内容并转换为字符串。`read_to_string()` 函数用于从一个文件中读取所有剩余的内容并转换为字符串。

`read_to_string()` 函数的原型如下:

```powershell
fn read_to_string(&mut self, buf: &mut String) -> Result
```

`read_to_string()` 函数用于读取文件中的所有内容并追加到 `buf` 中，如果读取成功则返回读取的字节数，如果读取失败则抛出错误。

使用 `read_to_string` 函数, 实现我们第一个版本的`cat`命令。
```rust
use std::io::Read;

fn main() {
    let mut file = std::fs::File::open("data.txt").unwrap();
    let mut contents = String::new();

    file.read_to_string(&mut contents).unwrap();

    print!("open {}", contents);
}

```



### 3. 增加显示版本号

如果实现个显示版本号, 我们先看一下, `cargo` 它的实现风格.

```bash
$ cargo -V
cargo 1.59.0 (49d8809dc 2022-02-10)
```
`cargo` 显示软件名子, `1.59.0` 软件版本号. `(49d8809dc 2022-02-10)`, 这块是由两部分组成, 第一块 `49d8809dc` 是`hash`值, 这个值是 `Rust` y语言提交 `git commit` 值. 第二块 `2022-02-10` 是提交的日期. 

那我们参考 `cargo` 命令, 实现我们显示的版本信息, 这里我们先只是显示版本号.

``` 
$ rcat -V
rcat ver: 0.0.1
```

### 命令行
首先我们要实现, 从命令行中读取参数, 根据参数后, 我们在根据参数进行处理. 我现在只有一个参数 `-V`.


```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    for (index, value) in args.iter().enumerate() {
        println!("{} => {}", index,value );
    }
}

```

:::tip
我们使用上面的命令:
```powershell
$ cargo build     //编译
   Compiling rcat v0.1.0 (/Users/richard/project/00.rust/01.rust-commnad-line/rcat)
    Finished dev [unoptimized + debuginfo] target(s) in 0.41s

$ ./target/debug/rcat -V     //运行
0 => ./target/debug/rcat
1 => -V
```
:::


如果现在我们只输入 `rcat` 时, 出现错误了. 为什么? 怎么去解决这个问题

```rust
use std::env;

fn main() {
    let ver = "0.0.1";
    let args: Vec<String> = env::args().collect();
    
    if args.len() == 2 {
        let cmd = &args[1];
        match cmd as &str {
            "-V" => println!("rcat {}", ver),
            _ => println!("filename: {}", cmd);),
        }
    }
}
```


通地上面的例子, 我们已经完成, 当输入 `rcat -V` 时显示, 我们软件的版本号. 那么接下来, 我们实现当输入文件名时, 显示文件内容. `rcat data.txt`.



```rust
use std::env;
use std::io::Read;

fn main() {
    let ver = "0.0.1";
    let args: Vec<String> = env::args().collect();
    
    if args.len() == 2 {
        let cmd = &args[1];
        match cmd as &str {
            "-V" => println!("rcat {}", ver),
            _ => show_file(cmd),
        }
    }
}

fn show_file(filename: &str) {
    let mut file = std::fs::File::open(filename).unwrap();
    let mut contents = String::new();

    file.read_to_string(&mut contents).unwrap();
    print!("{}", contents);
}

```

:::tip
我们对上面代码进行测试. (我们对软件进行升级了, 那我们是不是可以升级一下版本号. `ver = "0.0.2"`)

```powershell
$ cargo run --  data.txt
   Compiling rcat v0.1.0 (/Users/richard/project/00.rust/01.rust-commnad-line/rcat)
    Finished dev [unoptimized + debuginfo] target(s) in 0.50s
     Running `target/debug/rcat data.txt`
Hello world!
Hi china!
```
:::

如果我们想显示某一行输出.而不是全部输出到屏幕上. 那我们想一想怎么去实现?

1. 我们可以先实现, 全部都输出到屏幕上. 这样相对来说简单一点.(相对.将某一行输出到屏幕上)
2. 我们需要知道要显示第几行. 那个也需要通过命令行传入进来.
3. 我们将这行显示到屏幕上.
4. (重要)处理各种异常情况, 处理正常情况需要20%的时间, 那么处理异常情况需要80%的时间. 这样程序才会很强壮.




```rust
use std::env;
use std::io::Read;

fn main() {
    let ver = "0.0.2";
    let args: Vec<String> = env::args().collect();
    
    if args.len() == 2 {
        let cmd = &args[1];
        match cmd as &str {
            "-V" => println!("rcat {}", ver),
            _ => show_file(cmd),
        }
    }
}

fn show_file(filename: &str) {
    let mut file = std::fs::File::open(filename).unwrap();
    let mut contents = String::new();

    file.read_to_string(&mut contents).unwrap();
    for (line, text) in contents.lines().enumerate() {
        println!("{}: {}", line, text)
    }
}
```

:::tip
先完成第一步, 实现打印行输入文件内容.
```powershell
$ cargo run --  data.txt
   Compiling rcat v0.1.0 (/Users/richard/project/00.rust/01.rust-commnad-line/rcat)
    Finished dev [unoptimized + debuginfo] target(s) in 1.96s
     Running `target/debug/rcat data.txt`
0: Hello world!
1: Hi china!
```
其实上, 有一点显示小问题. 就是我们正常行号应该是从1开始. 把上面的行号改成从1开始的. 这时候我们可以更新的我们 `rcat` 版本号了. (ver = 0.0.3)
:::

接下来我们将第2和第3一块实现, 当然也可以分着实现.

```rust
use std::env;
use std::io::Read;

fn main() {
    let ver = "0.0.1";
    let args: Vec<String> = env::args().collect();
    
    if args.len() >= 2 {
        let cmd = &args[1];
        let mut num =  -1;
        match cmd as &str {
            "-V" => println!("rcat {}", ver),
            _ => {
                if args.len() == 3 {
                    let tmp = &args[2];
                    num = tmp.parse::<i32>().unwrap();
                }
                show_file(cmd, num);
            }
        }
    }
}

fn show_file(filename: &str, exline: i32) {
    let mut file = std::fs::File::open(filename).unwrap();
    let mut contents = String::new();

    file.read_to_string(&mut contents).unwrap();
    for (line, text) in contents.lines().enumerate() {
        if exline == (line as i32)  || exline < 0 {
            println!("{}: {}", line, text)
        }
    }
}
```


:::tip
```powershell
$ rcat git:(master) ✗ cargo run --  data.txt 1
    Finished dev [unoptimized + debuginfo] target(s) in 0.01s
     Running `target/debug/rcat data.txt 1`
1: Hi china!
```
:::


:::tip
```powershell
$ cargo run --  data.txt
   Compiling rcat v0.1.0 (/Users/richard/project/00.rust/01.rust-commnad-line/rcat)
    Finished dev [unoptimized + debuginfo] target(s) in 1.74s
     Running `target/debug/rcat data.txt`
0: Hello world!
1: Hi china!
```
:::


第四部分, 需要自己去实现一下. 把所有的场景都要想到. 都要进行处理.













#### Clap 第三方库

我们需要用到第三方库 `clap` 来实现读取命令行的参数.



