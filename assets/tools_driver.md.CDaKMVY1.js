import{j as a,c as n,b as t,ag as s}from"./chunks/framework.BlzMDYBM.js";const u=JSON.parse('{"title":"字符驱动模型","description":"","frontmatter":{},"headers":[],"relativePath":"tools/driver.md","filePath":"tools/driver.md","lastUpdated":1744879674000}'),i={name:"tools/driver.md"};function r(l,e,o,c,d,p){return t(),n("div",null,e[0]||(e[0]=[s(`<h1 id="字符驱动模型" tabindex="-1">字符驱动模型 <a class="header-anchor" href="#字符驱动模型" aria-label="Permalink to &quot;字符驱动模型&quot;">​</a></h1><pre><code>1. __init
	1. 设备号(主, 次设备号)
		1. 设备号是由主,次设备号拼接而成.
		2. 主,次设备号的拼接(高12位为主设备号, 低20位为次设备号)
		3. register_chrdev_region().
		4. 字符设备号存储在哈希表中.
		5. 主设备1~255, 次设备0~255.
	2. 注册设备
		1. 初始化cdev结构体.
			1. 给.owner = THIS_MODULE
			2. 给.fops = file_operations
			3. 给.name = 设备字
			4. 给.count = 设备数量
			5. 给.dev = 设备号
		2. 将cdev加入由系统维护的字符设备双向循环链表中.
2. __exit
	1. device_destroy();
	2. class_destroy();  udev
	3. cdev_del()
	4. unregister_chrdev_region()
3. 模块宏-&gt; license, 作者, 描述.
4. file_operations结体
5. open()函数方法 -&gt; 自旋锁()
6. read()函数方法 -&gt; 返回值为0表示EOF. 标记读的偏移量.
7. write()函数方法 -&gt; 标记写的偏移量.
8. ioctl()函数方法 -&gt; _IO: 1.nr(0~7) 2:type(8~15) 3.size(16~29) 4.dir(30~31)
                      _IOR
                      _IOW
                      _IORW
9. release()函数方法 -&gt; 应用close()
10. 自动创建设备节点.
    1. class_create(THIS_MODULE, &quot;hello&quot;) -&gt; /sys/class/hello
    2. device_create(&quot;led&quot;)   -&gt; /dev/led
</code></pre><h2 id="misc" tabindex="-1">misc: <a class="header-anchor" href="#misc" aria-label="Permalink to &quot;misc:&quot;">​</a></h2><pre><code>1. misc_register() -&gt; 注册misc设备到miscedevice结构体中
2. misc_unregister() -&gt; 注销misc设备
3. misc_init()  -&gt; misc设备初始化
	1. 申请设备号, 主10, 次0, 数量 256
	2. 注册misc设备到字符设备双向循环链表中.
	3. file_operations -&gt; open()
4. misce_open()
	1. 使用次设备号,在miscdevice结构体中, 查找misc设备.
	2. 用misc设备中的fops替换file结体中的fops方法.
	3. 调用misc设备中实现的file_operations中open方法.
</code></pre><h2 id="数据结构" tabindex="-1">数据结构: <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构:&quot;">​</a></h2><pre><code>1. 单向链表 (设备号)
2. 双向循环链表
	1. container_of()
	2. list_for_each()
</code></pre><h2 id="锁操作" tabindex="-1">锁操作 <a class="header-anchor" href="#锁操作" aria-label="Permalink to &quot;锁操作&quot;">​</a></h2><h3 id="原子操作" tabindex="-1">原子操作 <a class="header-anchor" href="#原子操作" aria-label="Permalink to &quot;原子操作&quot;">​</a></h3><pre><code>1. atomic_t v = ATOMIC_INIT(1) 初始化原子操作变量为1
2. atomic_inc(&amp;v) 对变量加1操作
3. atomic_dec_and_test(&amp;v) 先对变量减一操作,再测试变量是否等于0.
	 如果等于返回真.否则返回假.注: 变量值不会自动加1.
</code></pre><h3 id="自旋锁" tabindex="-1">自旋锁 <a class="header-anchor" href="#自旋锁" aria-label="Permalink to &quot;自旋锁&quot;">​</a></h3><pre><code>0. spinlock_t lock;      定义自旋锁结构体变量
1. spin_lock_init(&amp;lock); 初始化自旋锁结构体.
2. spin_lock(&amp;lock);      加锁
3. spin_unlock(&amp;lock);    解锁
注意: 自旋锁不能进行休眠操作.
</code></pre><h3 id="信号量" tabindex="-1">信号量 <a class="header-anchor" href="#信号量" aria-label="Permalink to &quot;信号量&quot;">​</a></h3><pre><code>0. semaphore sem      定义信号量变量
1. sema_init(&amp;sem, 1) 初始化信号量
2. down(&amp;sem);        对信号量进行P操作, 减1操作
3. up(&amp;sem);          对信息量进行V操作, 加1操作
注意: 信号量可以进行休眠操作.
</code></pre><h3 id="等待队列" tabindex="-1">等待队列 <a class="header-anchor" href="#等待队列" aria-label="Permalink to &quot;等待队列&quot;">​</a></h3><pre><code>0. work_struct queue;  定义等待队列变量
1. init_waitqueue_head(&amp;queue); 初始化等待队列
2. wait_event_interruptible(&amp;queue, 条件); 进行等待队列,等待唤醒. 唤醒后检查条件是否满足.
3. wake_up(&amp;queue);    唤醒等待队列
注意: 可以进行休眠操作.
</code></pre><h2 id="中断" tabindex="-1">中断 <a class="header-anchor" href="#中断" aria-label="Permalink to &quot;中断&quot;">​</a></h2><h3 id="tasklet" tabindex="-1">tasklet <a class="header-anchor" href="#tasklet" aria-label="Permalink to &quot;tasklet&quot;">​</a></h3><pre><code>0. tasklet_struct task;  定义tasklet变量
1. tasklet_init(&amp;task, func, arg);
	1. tasklet变量
	2. 中断处理函数
	3. 中断处理函数参数
2. tasklet_schedule(&amp;task); 将中断加入到中断下半部处理的tasklet处理列表中.
3. void func(unsigned long arg); 中断处理函数
注意: 不能进行休眠操作. 软件中断也不能进行休眠操作.
</code></pre><h3 id="工作队列" tabindex="-1">工作队列 <a class="header-anchor" href="#工作队列" aria-label="Permalink to &quot;工作队列&quot;">​</a></h3><pre><code>0. work_struct work; 定义工作队列变量
1. INIT_WORK(&amp;work, (void *)func); 初始化工作队列
	1. 工作队列变量
	2. 处理函数
2. schedule_work(&amp;work); 将中断加入到中断下半部处理的工作队列处理列表中.
3. void func(struct work_struct work); 工作队列处理函数
注意：可以进行休眠操作.
</code></pre><h3 id="中断注册操作" tabindex="-1">中断注册操作 <a class="header-anchor" href="#中断注册操作" aria-label="Permalink to &quot;中断注册操作&quot;">​</a></h3><pre><code>0. request_irq(irq_no, func, flag, name, NULL);
	1. 中断号
	2. 中断处理函数
	3. 中断标记位.IRQF_DISABLE: 当处理中断时,不能被其它中断打断.
	4. 中断名子.
	5. NULL.
1. irqreturn_t func(int irq_no, void * devid);
	1. 返回值 IRQ_HANDLED  中断成功
	2. 返回值 IRQ_NONE     中断失败
	3. ?还有一个返回值, 需要自己补充上.
2. free_irq(irq_no, NULL); 释放申请的中断号.
</code></pre><h2 id="platform-总线" tabindex="-1">platform 总线 <a class="header-anchor" href="#platform-总线" aria-label="Permalink to &quot;platform 总线&quot;">​</a></h2><pre><code>1. platform_device_register
2. platform_drvice_register
3. platform_match_device
通用总线, 是虚构出来的.
</code></pre><h3 id="注册driver和device" tabindex="-1">注册driver和device <a class="header-anchor" href="#注册driver和device" aria-label="Permalink to &quot;注册driver和device&quot;">​</a></h3><pre><code>1. 这块使用name进行匹配
2. platform_get_ioresourec
	1. IORESOUREC_MEM
	2. IORESOUREC_IRQ
</code></pre><h3 id="设备树" tabindex="-1">设备树 <a class="header-anchor" href="#设备树" aria-label="Permalink to &quot;设备树&quot;">​</a></h3><pre><code>1. .compatible进行匹配
2. platform_get_ioresourec
	1. IORESOUREC_MEM
	2. IORESOUREC_IRQ
</code></pre><h2 id="i2c总线" tabindex="-1">I2C总线 <a class="header-anchor" href="#i2c总线" aria-label="Permalink to &quot;I2C总线&quot;">​</a></h2><pre><code>1. i2c_match_device()
2. i2c_init()
3. i2c_probe()
4. i2c_open()
5. i2c_read()
6. i2c_write()
7. i2c_relsease()
8. i2c_ioctl()
</code></pre><h3 id="i2c-dev" tabindex="-1">i2c-dev <a class="header-anchor" href="#i2c-dev" aria-label="Permalink to &quot;i2c-dev&quot;">​</a></h3><pre><code>1. .of_match_table -&gt; .compatible
2. algos
	1. strcut i2c_msg
		1. .addr
		2. .flags
		3. .len
		4. .*buf
	2. i2c_transfer(adapter, msg, ARRAY_SIZE(smg))
</code></pre><h1 id="附录" tabindex="-1">附录: <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录:&quot;">​</a></h1><h2 id="读设备文件" tabindex="-1">读设备文件 <a class="header-anchor" href="#读设备文件" aria-label="Permalink to &quot;读设备文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ sudo insmod hello.ko</span></span>
<span class="line"><span>$ cat /dev/hello</span></span>
<span class="line"><span>$ sudo rmmod hello</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="写设备文件" tabindex="-1">写设备文件 <a class="header-anchor" href="#写设备文件" aria-label="Permalink to &quot;写设备文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ sudo insmod hello.ko</span></span>
<span class="line"><span>$ sudo chown linux:linux /dev/hello</span></span>
<span class="line"><span>$ echo &quot;Welcome to kernel&quot; &gt; /dev/hello</span></span>
<span class="line"><span>$ sudo rmmod hello</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="查看kernel连接符号表" tabindex="-1">查看kernel连接符号表 <a class="header-anchor" href="#查看kernel连接符号表" aria-label="Permalink to &quot;查看kernel连接符号表&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ cat /proc/kallsyms</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看设备号" tabindex="-1">查看设备号 <a class="header-anchor" href="#查看设备号" aria-label="Permalink to &quot;查看设备号&quot;">​</a></h2><p>查看当前系统设备已使用的设备号, 包括字符设备和块设备.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ cat /proc/devices</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看中断" tabindex="-1">查看中断 <a class="header-anchor" href="#查看中断" aria-label="Permalink to &quot;查看中断&quot;">​</a></h2><p>第一列是中断号, 第二列是接收中断数目的计数器. 第三列是中断的中断控制器.第四列是中断相关的设备名子.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ cat /proc/interrupts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="管道操作" tabindex="-1">管道操作 <a class="header-anchor" href="#管道操作" aria-label="Permalink to &quot;管道操作&quot;">​</a></h2><p>需要保证在同一个目录下.</p><h3 id="窗口-1" tabindex="-1">窗口-1 <a class="header-anchor" href="#窗口-1" aria-label="Permalink to &quot;窗口-1&quot;">​</a></h3><ol><li>创建管道文件.</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ mkfifo ps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>用cat读ps</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ cat ps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="窗口-2" tabindex="-1">窗口-2 <a class="header-anchor" href="#窗口-2" aria-label="Permalink to &quot;窗口-2&quot;">​</a></h3><ol><li>向ps写数据</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ cat &gt; ps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看内核log信息" tabindex="-1">查看内核log信息 <a class="header-anchor" href="#查看内核log信息" aria-label="Permalink to &quot;查看内核log信息&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ dmesg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,57)]))}const m=a(i,[["render",r]]);export{u as __pageData,m as default};
