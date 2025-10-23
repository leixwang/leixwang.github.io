# 基于Shadowsocks-libev配置服务器及手机Clash客户端连接

## 一、服务器端配置（Ubuntu系统）

### 1. 安装Shadowsocks-libev
```bash
# 更新系统包
sudo apt update && sudo apt upgrade -y

# 安装依赖
sudo apt install -y software-properties-common

# 添加Shadowsocks-libev仓库
sudo add-apt-repository -y ppa:max-c-lv/shadowsocks-libev

# 安装Shadowsocks-libev
sudo apt install -y shadowsocks-libev
```

### 2. 配置Shadowsocks服务器

```bash
# 创建并编辑配置文件
sudo nano /etc/shadowsocks-libev/config.json
```

配置文件内容（按需修改以下参数）：

```json
{
  "server": "0.0.0.0",  // 监听所有网卡
  "server_port": 8388,  // 服务器端口（建议自定义，如10000-65535之间）
  "local_address": "127.0.0.1",
  "local_port": 1080,
  "password": "password123",  // 建议包含大小写字母+数字+符号
  "timeout": 300,
  "method": "aes-128-gcm",  // 加密方式（推荐此方式，安全性高）
  "fast_open": false,
  "workers": 1
}
```

- 保存退出：按`Ctrl+O`→回车→`Ctrl+X`

### 3. 配置系统服务（开机自启）

```bash
# 启动服务
sudo systemctl start shadowsocks-libev

# 设置开机自启
sudo systemctl enable shadowsocks-libev

# 查看服务状态（确认是否运行正常）
sudo systemctl status shadowsocks-libev
```

- 若显示`active (running)`则表示启动成功

### 4. 开放防火墙端口

```bash
# 开放配置文件中设置的端口（以8388为例）
sudo ufw allow 8388/tcp
sudo ufw allow 8388/udp

# 重启防火墙
sudo ufw reload

# 查看端口是否开放
sudo ufw status | grep 8388
```

### 5. 检查服务器端口监听

```bash
# 确认Shadowsocks是否在监听配置的端口
sudo ss -tuln | grep 8388  # 替换为你的server_port
```

- 若输出包含`LISTEN`则表示端口监听正常

## 二、手机Clash客户端连接步骤

### 1. 准备工作

- 手机安装Clash客户端：
  - Android：从[Clash for Android官网](https://github.com/Kr328/ClashForAndroid)下载APK安装（需开启"未知来源应用安装"）
  - iOS：需在App Store搜索"Shadowrocket"等支持Clash的客户端（部分需外区账号）
- 记录服务器信息：
  - 服务器IP（公网IP）
  - 端口（即配置文件中的`server_port`，如8388）
  - 密码（配置文件中的`password`）
  - 加密方式（配置文件中的`method`，如`chacha20-ietf-poly1305`）

### 2. 配置Clash客户端（以Android为例）

1. 打开Clash客户端，首次启动会提示"添加配置"，选择「手动添加」→「服务器」。

2. 选择服务器类型：在弹出的类型列表中，选择「Shadowsocks」。

3. 填写服务器信息：
   - 名称：自定义（如"我的Shadowsocks服务器"）
   - 服务器地址：输入你的服务器公网IP
   - 端口：输入配置的`server_port`（如8388）
   - 密码：输入配置的`password`
   - 加密方式：选择与服务器一致的`method`（如`chacha20-ietf-poly1305`）
   - 其他选项默认即可

4. 保存配置：点击右上角「√」保存服务器配置。

### 3. 启动代理

1. 返回Clash主界面，在「代理」选项卡中，选择你刚添加的服务器（如"我的Shadowsocks服务器"）。

2. 点击主界面顶部的「启动」按钮（通常是一个电源图标），此时会提示"设置VPN连接"，点击「允许」并验证手机密码（系统要求）。

3. 验证连接：打开浏览器访问谷歌等网站，若能正常访问则表示连接成功。

## 三、常见问题排查

1. **连接失败**：
   - 检查服务器IP、端口、密码、加密方式是否与客户端一致
   - 服务器端执行`journalctl -u shadowsocks-libev -f`查看日志，排查错误
   - 确认云服务器安全组已开放对应端口（如阿里云、AWS等需在控制台配置）

2. **速度慢**：
   - 尝试更换服务器端口（避免被封锁）
   - 切换加密方式为`aes-128-gcm`（兼容性更好但安全性略低）（如`chacha20-ietf-poly1305`）

3. **客户端提示"无法连接"**：
   - 服务器端执行`ping 服务器IP`检查网络连通性
   - 确认手机网络正常（切换4G/5G尝试）

## Clash 配置文件yaml的参考用例

```chash.yaml

# ClashX 1.118.0 兼容配置（匹配当前Shadowsocks服务器，支持视频加速+Telegram）
# 已按服务器实际配置优化，无需额外修改（仅确认服务器IP是否正确）

mode: rule
log-level: info
external-controller: 127.0.0.1:9090  # ClashX默认控制端口，保留

# 代理服务器列表（完全匹配服务器配置）
proxies:
  - name: "ssServer"  # 自定义名称（无特殊字符，与代理组对应）
    type: ss  # 规范类型写法（ss也支持，shadowsocks更清晰）
    server: 3.3.3.3  # 你的服务器公网IP（已确认，无需修改）
    port: 8388             # 服务器端口（与server_port一致，无需修改）
    password: "password123"# 服务器密码（完全一致，无需修改）
    cipher: aes-128-gcm    # 关键：与服务器method同步（原chacha20已改为aes-128-gcm）
    udp: true              # 启用UDP（Telegram语音/视频必需，无需修改）
      # tls: true          # 关键：注释/删除（服务器已禁用TLS，启用会连接失败）
    
  - name: "usa"  # 自定义名称（无特殊字符，与代理组对应）
    type: ss  # 规范类型写法（ss也支持，shadowsocks更清晰）
    server: 2.2.2.2  # 你的服务器公网IP（已确认，无需修改）
    port: 8388             # 服务器端口（与server_port一致，无需修改）
    password: "password123"# 服务器密码（完全一致，无需修改）
    cipher: aes-128-gcm    # 关键：与服务器method同步（原chacha20已改为aes-128-gcm）
    udp: true              # 启用UDP（Telegram语音/视频必需，无需修改）
      # tls: true          # 关键：注释/删除（服务器已禁用TLS，启用会连接失败）

# 代理组配置（引用上述服务器，无需修改）
proxy-groups:
  - name: "自动选择"
    type: url-test
    proxies:
      - "ssServer"  # 必须与proxies中的name完全一致（大小写敏感）
      - "usa"
    url: http://www.gstatic.com/generate_204  # 测试URL（稳定，无需修改）
    interval: 300  # 测试间隔（5分钟，无需修改）

  - name: "手动选择"
    type: select
    proxies:
      - "ssServer"  # 同上，确保名称匹配
      - "usa"
      - DIRECT  # 可选：添加直连选项，方便切换

# 规则配置（保留Telegram+视频网站规则，无需修改）
rules:
  # Telegram核心规则（确保TG功能正常）
  - DOMAIN-SUFFIX,telegram.org,自动选择
  - DOMAIN-SUFFIX,t.me,自动选择
  - DOMAIN-SUFFIX,telegram.me,自动选择
  - DOMAIN-SUFFIX,telegra.ph,自动选择
  - IP-CIDR,149.154.0.0/16,自动选择  # TG IPv4核心段
  - IP-CIDR,91.108.0.0/16,自动选择   # TG IPv4核心段

  # 视频网站规则（适配YouTube/Netflix等）
  - DOMAIN-SUFFIX,youtube.com,自动选择
  - DOMAIN-SUFFIX,youtu.be,自动选择
  - DOMAIN-SUFFIX,netflix.com,自动选择
  - DOMAIN-SUFFIX,disneyplus.com,自动选择

  # 其他常用代理规则
  - DOMAIN-SUFFIX,google.com,自动选择
  - DOMAIN-SUFFIX,facebook.com,自动选择
  - DOMAIN-SUFFIX,twitter.com,自动选择

  # 国内直连规则（避免国内网站走代理，节省带宽）
  - GEOIP,CN,DIRECT  # 中国大陆IP直连
  - DOMAIN-SUFFIX,cn,DIRECT  # 国内域名直连
  - MATCH,自动选择  # 剩余流量走代理（兜底规则）

```




视频加载慢通常与服务器带宽、网络线路质量、协议优化或客户端设置有关，可按以下步骤逐步优化提速：


### 一、优先排查服务器带宽和负载（核心瓶颈）
服务器的带宽大小和当前负载是影响速度的首要因素：

#### 1. 检查服务器当前带宽使用情况
```bash
# 安装带宽监控工具
sudo apt install -y iftop

# 实时监控带宽（按q退出）
sudo iftop
```
- 观察 `TX`（上传速度）是否接近服务器的带宽上限（如服务器是10Mbps带宽，TX长期9-10Mbps就是满负载）；
- 若带宽跑满，说明服务器带宽不足，需升级服务器套餐（如从10Mbps升到50Mbps）。

#### 2. 检查服务器负载（CPU/内存）
```bash
# 实时查看系统负载
top  # 按q退出
```
- `CPU` 使用率长期超过80%，或 `内存` 不足（Swap频繁使用），会导致处理速度慢，需升级服务器配置（如增加CPU核心数或内存）。


### 二、优化Shadowsocks服务器配置（提升传输效率）
通过调整服务器配置，减少加密开销和网络延迟：

#### 1. 启用TCP Fast Open（减少连接延迟）
```bash
# 临时启用（立即生效，重启后失效）
sudo echo 3 > /proc/sys/net/ipv4/tcp_fastopen

# 永久启用（重启后仍有效）
echo "net.ipv4.tcp_fastopen = 3" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p  # 生效配置
```
然后修改Shadowsocks配置，开启`fast_open`：
```bash
sudo nano /etc/shadowsocks-libev/config.json
```
将 `"fast_open": false` 改为 `"fast_open": true`，重启服务：
```bash
sudo systemctl restart shadowsocks-libev
```

#### 2. 优化加密方式（平衡速度与安全）
如果对极致速度需求高于安全性，可将加密方式从 `chacha20-ietf-poly1305` 改为更轻量的 `aes-128-gcm`（加密开销更小，速度更快）：
```json
// 服务器config.json中修改
"method": "aes-128-gcm"
```
**注意**：修改后需同步更新ClashX客户端配置中的 `cipher` 字段，否则会连接失败。


### 三、优化ClashX客户端设置（减少本地延迟）
#### 1. 调整代理模式（避免规则冗余）
- 打开ClashX → 代理模式 → 选择 **“全局”**（适合纯境外使用，减少规则匹配开销）；
- 若需国内网站直连，保留“规则”模式，但简化`rules`配置（删除不必要的域名规则，减少匹配耗时）。

#### 2. 启用缓存和压缩（减少重复加载）
ClashX默认支持缓存，可在配置文件中添加（加速重复资源加载）：
```yaml
# 在配置文件顶部添加
allow-lan: false
mode: rule  # 或global
log-level: info
external-controller: 127.0.0.1:9090
cache-file: /tmp/clash.cache  # 启用缓存
```


### 四、优化网络线路（避开拥堵节点）
#### 1. 测试服务器到国内的网络延迟
在服务器上测试到国内节点的延迟，判断线路质量：
```bash
# 测试到国内节点的延迟（如阿里云杭州节点）
ping 115.239.210.27  # 淘宝IP，仅作延迟测试
```
- 延迟超过200ms说明线路质量差，可尝试更换服务器机房（如从美国换到日本/新加坡，离国内更近）。

#### 2. 更换服务器端口（避开ISP限速）
部分运营商会对常见端口（如8388）限速，可修改为冷门端口（10000-65535之间）：
```bash
# 修改服务器端口（以12345为例）
sudo nano /etc/shadowsocks-libev/config.json
# 改 "server_port": 12345
sudo ufw allow 12345/tcp
sudo ufw allow 12345/udp
sudo systemctl restart shadowsocks-libev
```
同步更新ClashX客户端的`port`字段为12345。


### 五、终极方案：使用更优协议（如V2Ray/XRay）
如果Shadowsocks速度仍不理想，可考虑换成 **V2Ray/XRay + VMess/VMessAEAD** 协议，其传输效率和抗封锁能力更强，尤其适合视频流媒体。配置步骤可参考之前的XRay教程，核心优势：
- 支持动态端口和伪装域名，减少被限速概率；
- 协议头部加密更隐蔽，避免ISP深度包检测（DPI）导致的限速。


### 总结提速优先级
1. **检查服务器带宽**（最常见瓶颈，优先确认）；
2. **启用TCP Fast Open**（简单有效，延迟降低30%+）；
3. **更换离国内近的服务器**（如日本/新加坡节点，延迟更低）；
4. **更换冷门端口**（避开运营商限速）。

按以上步骤操作，通常能提升30%-100%的视频加载速度，若仍不理想，建议升级服务器带宽或更换线路质量更好的服务器。