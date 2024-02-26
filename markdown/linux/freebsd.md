# FreeBSD 13



## 系统更新

```
freebsd-update fetch install
```



## 安装 nginx

```
pkg install nginx
```

配置nginx

```sh
# sudo vi /etc/rc.conf

nginx_enable="YES"
```

启动nginx

```sh
# sudo service nginx start
```


## 安装 php

```
pkg install vim php74 php74-mysqli php74-mbstring php74-zlib php74-curl php74-gd php74-json php74-composer php74-extensions
```



## 安装 mysql

```sh
# pkg update
# pkg install mysql80-server mysql80-client
```

配置mysql

```sh
# vim /etc/rc.conf

mysql_enable="YES"

```



```sh
# service mysql-server start
```



