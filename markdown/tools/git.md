### 全局配置命令



```sh
$ git config --global user.name "Richard"
$ git config --global user.email "wangleihd@gmail.com"
$ git config --global init.defaultBranch main
```


### 初始化本地git仓库

```sh
$ mkdir project      // 项目目录
$ cd project
$ git init           // 将 project 目录, 初始化为 git 仓库.
$ git branch -m main // 修改当前分支名为main
```

git init 后出现在的信息提示

```sh
$ git init
提示：使用 'master' 作为初始分支的名称。这个默认分支名称可能会更改。要在新仓库中
提示：配置使用初始分支名，并消除这条警告，请执行：
提示：
提示：	git config --global init.defaultBranch <名称>
提示：
提示：除了 'master' 之外，通常选定的名字有 'main'、'trunk' 和 'development'。
提示：可以通过以下命令重命名刚创建的分支：
提示：
提示：	git branch -m <name>
已初始化空的 Git 仓库于 /git-study/c/.git/

```


### 查看当前git仓库的中的文件状态

将会列所当前 git 仓库中发生变化的文件和未进入仓库的文件的状态.

```sh
$ git status
```

git status 的提示信息

```sh
$ git status
位于分支 main

尚无提交

未跟踪的文件:
  （使用 "git add <文件>..." 以包含要提交的内容）
	hello.c
	loop.c

提交为空，但是存在尚未跟踪的文件（使用 "git add" 建立跟踪）
```

### 把文件加入到跟踪列表并暂存文件.

暂存的新文件或修改后的文件, 是为了提交到本地仓库进行的准备工作.

1. 当目录下有新的文件,需要将它暂存.
1. 当 git 仓库中的文件修改了, 需要重新 git add 操作. 只有重新 git add 才能进行提交操作.


```sh
$ git add .       // 将当前目录下所有文件都进行暂存
$ git add filename // 将指定文件进行暂存
$ git add dirname // 将指定目录下的文件进行暂存
```


### 提交到仓库中

```sh
$ git commit            // 将文件提交到 git 本地仓库中.
$ git commit -m “msg”   // -m 参数直接编写 git log 信息内容.
```

### 查看提交信息

```sh
$ git log              // 查看提交信息
```

git log 提示信息

```sh
commit 6b3196bb4eac0244ea449fc3e99be0a71f70703f (HEAD -> main)
Author: Richard Wang <wangleihd@gmail.com>
Date:   Sat Aug 5 00:00:35 2023 +0800

    change hello.c file.

commit 0c7da67dae2d1c8e41a4f8b9e8450f9b8b02e83e
Author: Richard Wang <wangleihd@gmail.com>
Date:   Fri Aug 4 23:49:41 2023 +0800

    Add loop.c file.

commit dfc7536c4c9582c28f48b0357699ad66fffc4c0d
Author: Richard Wang <wangleihd@gmail.com>
Date:   Fri Aug 4 23:41:40 2023 +0800

    Add hello.c file

    Add hello.c file
```




### git diff

```sh
$ git diff              // 查看当前修改文件与 git 仓库, 文件的差异.
$ git diff commit ID    // 查看当前提交与上次或上几个提交的差异.
```





