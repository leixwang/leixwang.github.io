# Ubuntu的安装和服务的配置

Ubuntu是一个以桌面应用为主的Linux发行版操作系统，其名称来自非洲南部祖鲁语或豪萨语的“ubuntu"一词，意思是“人性”“我的存在是因为大家的存在"，是非洲传统的一种价值观。Ubuntu基于Debian发行版和GNOME桌面环境，而从11.04版起，Ubuntu发行版放弃了GNOME桌面环境，改为Unity。此前人们认为Linux难以安装、难以使用，在Ubuntu出现后这些都成为了历史。Ubuntu也拥有庞大的社区力量，用户可以方便地从社区获得帮助。 自Ubuntu 18.04 LTS起，Ubuntu发行版重新开始使用GNOME3桌面环境。

## ETCHER

可以使用 `ETCHER` 快速高效的,将iso镜像文件写到 U 盘或SD卡里. 支持所有平台. 

![](/images/linux/Etcher_steps.gif)



[ETCHER官方下载工具](https://etcher.balena.io/)
### Linux Mint 

Linux Mint 是一个对硬件要求更低的图形化Linux操作. Linux Mint 有三种不同风格的版本，分别提供三种不同的桌面环境。

发行版本 | 简介
--------|-----------------------
Cinnamon |	最现代，最新颖，全功能的桌面
MATE |	A more traditional, and faster desktop
Xfce |	The most lightweight desktop

#### Cinnamon

Linux Mint 最流行的版本是 Cinnamon 版。Cinnamon 是主要由 Linux Mint 团队开发，专为 Linux Mint 打造的桌面环境，流畅，美观，充满新特性。

![](/images/linux/cinnamon.webp)


#### MATE

Linux Mint 还参与了 MATE 的开发，这是一个经典的桌面环境，它是 GNOME 2 的延续，GNOME 2 是 Linux Mint 在 2006 年至 2011 年间的默认桌面。尽管它缺少一些功能，并且开发速度比 Cinnamon 慢，但 MATE 使用的资源更少，并且可以在旧计算机上运行得更快。

![](/images/linux/mate.webp)


#### Xfce


Xfce 是一个轻量级的桌面环境。它支持的特性没有 Cinnamon 和 MATE 那么多，但极其稳定，消耗极少的资源。



![](/images/linux/xfce.webp)









[linuxmint 官方网站](https://linuxmint.com/)

## Universal USB Installer下载并安装

![](/images/linux/inub001.jpg)
![](/images/linux/inub002.jpg)


### 下载 ubuntu 桌面的镜像

* [下载ubuntu镜像](http://www.ubuntu.com/desktop)

![](/images/linux/inub003.jpg)


### 打开Universal USB Installer 在setp 1:select... 下选择ubuntu

![](/images/linux/inub004.jpg)

### 在setp 2:select ...下选择你下载的ubuntu的iso镜像位置

![](/images/linux/inub005.jpg)

### 在setp 3:select...下选择你U盘所在的盘符(也可以勾选format进行格式化，但是U盘中的内容记得备份一下)

![](/images/linux/inub006.jpg)

### 完成配置后 点击下面的creat 进行制作

![](/images/linux/inub007.jpg)

![](/images/linux/inub008.jpg)

![](/images/linux/inub009.jpg)

### 安装ubuntu系统

* 重新启动计算机，选择USB盘启动，就可以进行ubuntu的安装.


### 配置网卡ip地址

* 图形界面:


* 命令方式:
```bash
 $ sudo ifconfig eth0 192.168.1.101
```


## 安装必须软件

### 首先更新软件源
```bash
 $ sudo apt-get update
 $ sudo apt-get upgrade
```
### 安装 git 下载运行需要安装软件的sh

```sh
 $ sudo apt-get install git-all -y
 $ git clone https://github.com/wangleihd/software.git
 $ cd software
 $ chmod 755 software.sh
 $ ./software.sh
 ```

### 配置vim

```sh
 $ chmod 755 install.sh
 $ ./install.sh
```

### 安装vscode

[vscode 下载页面](https://code.visualstudio.com/download)




```bash
$ sudo dpkg --add-architecture i386
$ sudo apt-get update
$ sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386
```


## 安装node.js 开发环境

系统为ubuntu14.04 node.js + express + mongodb + redis

### 安装Node.js

安装node.js, npm
```bash
 $ sudo apt-get install node npm
```


## 配置远程服务器

生成配置`ssh-key`文件

### 生成密 pem

客户端（本地主机 ）生成验证没有密码密钥对

```sh
 $ ssh-keygen -t rsa -b 2048 -v
```

执行上述命令首先会让你输入生成密钥的文件名：我这里输入的 `mykey` ，之后一路回车。

```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/anonymouse/.ssh/id_rsa): mykey
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in mykey.
Your public key has been saved in mykey.pub.
The key fingerprint is:
bb:c6:9c:ee:6b:c0:67:58:b2:bb:4b:44:72:d3:cc:a5 localhost@localhost
The key's randomart image is:
+---[RSA 2048]----+
|++o +    OO0     |
|ooo+ O   yt      |
|EB+ =.+  o       |
|+=ooo.o.. +      |
|. o..+ oS. .     |
|.  .o  . ..      |
|.  oo o o  .     |
| . .== .... .    |
|  ...+o... .     |
+----[SHA256]-----+
```

在执行命令的当前目录下会生成一个 `mykey.pub`、`mykey` 两个文件。并将这两个文件移到 `~/.ssh` 目录下.
```sh
 $ mv mykey* ~/.ssh
```

### 将公匙推放到服务器上
把生成的 `mykey.pub` 通过本地命令推送到服务器端，使服务器自动添加认证这个证书.
```sh
 $ ssh-copy-id -i ~/.ssh/mykey.pub root@12.34.56.78
```

测试连接:

使用`pem`连拉服务器, 如果设置成功, 不需要输入密码, 就果以进入到服务器上.

```sh
 $ ssh -i ~/.ssh/mykey root@12.34.56.78
```
