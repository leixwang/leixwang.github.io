# CRM项目设计


## 组织架构



### 总经理

1. 副总经理
   1. 增加副总经理
   2. 删除副总经理
   3. 修改副总经理



### 副总经理

1. 总监
   1. 增加总监
   2. 删除总监
   3. 修改总监
   4. 查询总监
2. 业务员
   1. 增加业务员
   2. 删除业务员
   3. 修改业务员信息
   4. 查询业务员信息
   5. 可以分配业务员给其他总监
3. 客户
   1. 查看业务员下所有客户相关信息
   2. 可以分配客户给其他总监
   3. 修改客户信息





### 总监

1. 业务员
   1. 增加业务员
   2. 删除业务员
   3. 修改业务员信息
   4. 查询业务员信息
2. 客户
   1. 查看业务员下所有客户相关信息(只有姓名, 性别, 客户来源, 客户等级, 客户状态)
   2. 可以分配客户给其他业务员
   3. 修改客户信息
   



### 业务员

1. 新客户 (电话开发的客户)
   1. 信息的录入
2. 客户回访 (电话或是微信)
   1. 2日内对新客户进行跟踪回访, 并填写相关信息
   2. 5日内对新客户进行跟踪回访, 并填写相关信息
   3. 10日内对新客户进行跟踪回访, 并填写相关信息
3. 邀约客户上门
   1. 信息的录入
   2. 进行客户跟踪回访并填写3次回访记录
4. 成交
   1. 需要提交成交信息到总监.
5. 客户开发
   1. 总监分配的客户
   2. 1朋友，2单页，3电话，4快手, 5老客户介绍, 6抖音, 7.其他






















## 客户管理

## 联系人管理

## 交易管理

## 报表管理

## 系统管理



## 数据库表设计


### 用户表

```sql
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 客户表

```sql
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `graduation_school` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `customer_status` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `introducer` varchar(255) DEFAULT NULL,
  `introduce_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 客户意向表

```sql
CREATE TABLE `customer_intention` (
  `id` int(11) NOT NULL AUTO
  `customer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `intention_level` varchar(255) DEFAULT NULL,
  `intention_status` varchar(255) DEFAULT NULL,
  `intention_content` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 客户意向表跟进记录表
```sql
CREATE TABLE `customer_intention_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `customer_intention_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```



### 客户需求表

```sql
CREATE TABLE `customer_demand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```


### 用户权限表

```sql
CREATE TABLE `user_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `permission_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 权限表
```sql
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 用户表
```sql




