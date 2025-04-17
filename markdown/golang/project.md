# feiMall

小程序商铺


## api 接口

### 获取区域地址的接口

```
// 查询省级直辖市
/app/v1/arealists

//查询市区或区域的方式
/app/v1/arealists?id=上级区域ID号
```


### 获取商品列表








## 第三方接口

### 高德天气

```
https://restapi.amap.com/v3/weather/weatherInfo?key=066f23e0b0676&city=110101
https://restapi.amap.com/v3/weather/weatherInfo?key=066f0676&city=110101

```



## limitoo SSR

```mermaid
	flowchart TB
	Chrome --> Server --> Code

	subgraph Computer
		Chrome
	end

	subgraph Server
		Nginx --:3000--> Limitoo
	end

	subgraph Code
		Main --> Router --> API --> WebPage
	end








```



## limitoo 运营方案

```mermaid
	flowchart LR
		limitoo --> 注册 --> google广告
		limitoo --> 评论 --> google广告 
		google广告 --> lmt币ETH
		lmt币ETH --> 跑马游戏 --> 交易所
```



## 参考文档

[微信小程序支付](https://github.com/go-pay/gopay/blob/main/doc/wechat_v3.md)
[微信小程序API](https://github.com/silenceper/wechat/blob/v2/doc/api/README.md)






