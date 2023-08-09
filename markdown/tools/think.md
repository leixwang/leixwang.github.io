# 关于教学课件的协工作步骤
 [[toc]]


## 拉取远程库

先将远程库拉取的本地, 拉下的分支是 `gh-pages`. 需要切到 `main` 支分上, 进行工作.


```sh
$ git clone git@github.com:leixwang/think.github.io.git
---
正克隆到 'think.github.io'...
remote: Enumerating objects: 230, done.
remote: Counting objects: 100% (230/230), done.
remote: Compressing objects: 100% (123/123), done.
remote: Total 230 (delta 53), reused 225 (delta 48), pack-reused 0
接收对象中: 100% (230/230), 1.34 MiB | 14.00 KiB/s, 完成.
处理 delta 中: 100% (53/53), 完成.
```


### 拉取远程分支 main


```sh
$ git fetch origin main
---
来自 github.com:leixwang/think.github.io
 * branch            main       -> FETCH_HEAD
```



### 切换本地分支到 main


```sh
$ git checkout main
---
分支 'main' 设置为跟踪 'origin/main'。
切换到一个新分支 'main'
```



## 工作流程

因为现在我们多名老师同时修改课件, 为了保证大家高效的协同工作. 每一次向服务提交的时候, 必须按下面的步骤进行.


### 缓存本地修改的文件

为了保证本地与远程仓库的一致性, 所以需要将地修改的文件缓存一下. 然后再拉取远程仓库的代码.

```sh
$ git stash           // 本地修改的文件进行缓存一下.
$ git stash list      // 查看缓存的列表
```

### 同步远程仓库

拉取远程仓库的代码到本地仓库.

```sh
$ git pull
```

### 将缓存的修改释放到本地仓库

将本地的修改文件释放到最新的文件代码中.

```sh
$ git stash list     // 查看缓存的列表
$ git stash pop      // 将刚刚缓存的列表取出来.
```

### 查看本地仓库的状态


```sh
$ git status
```

### 将修改的文件


```sh
$ git add .
```

### 本地提交

提交信息, 进入vim模式填写提交信息. 

```sh
$ git commit
```

-m 输入需要提交的信息, 直接完成提交.

```sh
$ git commit -m "commit log" 
```

### 查看本地提交信息


```sh
$ git log
```


### 将新提交同步到远程仓库

本地提交完成后, 需要将本地最新修改的文件, 同步到远程仓库中.

```sh
$ git push origin main
```




