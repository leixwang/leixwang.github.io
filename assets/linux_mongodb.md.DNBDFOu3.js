import{j as i,c as a,b as n,ag as l}from"./chunks/framework.BlzMDYBM.js";const c=JSON.parse('{"title":"Mongodb 数据备份与恢复","description":"","frontmatter":{},"headers":[],"relativePath":"linux/mongodb.md","filePath":"linux/mongodb.md","lastUpdated":1744879674000}'),e={name:"linux/mongodb.md"};function p(t,s,h,r,k,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="mongodb-数据备份与恢复" tabindex="-1">Mongodb 数据备份与恢复 <a class="header-anchor" href="#mongodb-数据备份与恢复" aria-label="Permalink to &quot;Mongodb 数据备份与恢复&quot;">​</a></h1><h2 id="_1-本地数据库备份与恢复" tabindex="-1">1.本地数据库备份与恢复 <a class="header-anchor" href="#_1-本地数据库备份与恢复" aria-label="Permalink to &quot;1.本地数据库备份与恢复&quot;">​</a></h2><h5 id="_1-1-本地docker数据库" tabindex="-1">1.1 本地docker数据库 <a class="header-anchor" href="#_1-1-本地docker数据库" aria-label="Permalink to &quot;1.1 本地docker数据库&quot;">​</a></h5><ul><li>备份</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongodump</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>恢复</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongorestore</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --drop</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_1-2-本地meteor运行数据库" tabindex="-1">1.2 本地meteor运行数据库 <a class="header-anchor" href="#_1-2-本地meteor运行数据库" aria-label="Permalink to &quot;1.2 本地meteor运行数据库&quot;">​</a></h5><p>meteor运行时，默认在3000端口，可以使用meteor mongo查看数据库</p><ul><li>备份</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongodump</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> 127.0.0.1:3001</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> meteor</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>恢复</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongorestore</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> 127.0.0.1:81</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --drop</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>需要注意，restore的数据库collecton文件夹名和collection名要一直</strong></p><h2 id="_2-远程数据库备份与恢复" tabindex="-1">2.远程数据库备份与恢复 <a class="header-anchor" href="#_2-远程数据库备份与恢复" aria-label="Permalink to &quot;2.远程数据库备份与恢复&quot;">​</a></h2><h5 id="_2-1-compose-io数据库" tabindex="-1">2.1 compose.io数据库 <a class="header-anchor" href="#_2-1-compose-io数据库" aria-label="Permalink to &quot;2.1 compose.io数据库&quot;">​</a></h5><ul><li>备份</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongodump</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> lighthouse.5.mongolayer.com:10367</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> Password</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>恢复</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongorestore</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --host</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> lighthouse.5.mongolayer.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --port</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 10367</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> Password</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --drop</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_2-2-aliyun-mongo数据库" tabindex="-1">2.2 aliyun mongo数据库 <a class="header-anchor" href="#_2-2-aliyun-mongo数据库" aria-label="Permalink to &quot;2.2 aliyun mongo数据库&quot;">​</a></h5><p><strong>注意，阿里云的mongo只能阿里云主机才能连接</strong></p><ul><li>备份</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongodump</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> dds-2ze04b800265f5b42.mongodb.rds.aliyuncs.com:3717</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> maodou</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> password</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>恢复</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">mongorestore</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> dds-2ze021cc656a02141.mongodb.rds.aliyuncs.com:3717</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --authenticationDatabase</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> admin</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> password</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --drop</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> testdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="faq" tabindex="-1">Faq <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;Faq&quot;">​</a></h2><ol><li>出现错误</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">terminate</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> called</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> after</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> throwing</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> instance</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &#39;std::runtime_error&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">  what</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">():  locale::facet::_S_create_c_locale name not valid</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解决办法</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> LC_ALL</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;C&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#title         :mongod</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#author        :Bertrand Martel</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#date          :15/08/2015</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#description   :start/stop/restart mongod</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#########################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### install   :  cp mongod /etc/init.d/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                update-rc.d mongod defaults</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### uninstall :  update-rc.d -f mongodb remove</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">PATH_TO_MONGO</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">/usr/bin/mongod</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#file containing all mongodb pid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">PID_FILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">/tmp/mongodb.pid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">case</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> in</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">    start</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">        echo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;Starting mongodb service...&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">        COMMAND_TO_RUN</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">\`start-stop-daemon -S -b -m -p $PID_FILE -x $PATH_TO_MONGO&amp; :\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">        setsid</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -c</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> $COMMAND_TO_RUN</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /dev/null</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> 2&gt;&amp;1</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">        echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;\\E[31;33m[ OK ]\\E[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">    stop</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">        echo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;Stopping mongodb service...&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">        start-stop-daemon</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -K</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -q</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> $PID_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">        echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;\\E[31;33m[ OK ]\\E[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">    restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">reload</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">        &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">$0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">        &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">$0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">    *)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">        echo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> $&quot;Usage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> {start|stop|restart}&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">        exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">esac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> $?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>自动在ubuntu16.04系统启动mongodb</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> mongod</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /etc/init.d/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">update-rc.d</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> mongod</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> defaults</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="数据更新" tabindex="-1">数据更新 <a class="header-anchor" href="#数据更新" aria-label="Permalink to &quot;数据更新&quot;">​</a></h1><div class="language-mysql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>1. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$rename: {&#39;bet&#39;:&#39;slotBet&#39;}})</span></span>
<span class="line"><span>2. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$rename: {&#39;type&#39;:&#39;coinType&#39;}})</span></span>
<span class="line"><span>3. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$set: {&#39;gameType&#39;:&#39;Slot&#39;}})</span></span>
<span class="line"><span>4. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$set: {&#39;dealId&#39;:&#39;&#39;}})</span></span>
<span class="line"><span>5. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$set: {&#39;payoff&#39;: 0}})</span></span>
<span class="line"><span>6. db.getCollection(&#39;allrecords&#39;).updateMany({&#39;isrobot&#39;: {$exists : false}}, {$set: {&#39;isrobot&#39;: false}})</span></span>
<span class="line"><span>7. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$rename: {&#39;isrobot&#39;: &#39;isRobot&#39;}})</span></span>
<span class="line"><span>8. db.getCollection(&#39;allrecords&#39;).updateMany({&#39;upaddress&#39;: {$exists : false}}, {$set: {&#39;upaddress&#39;: null}})</span></span>
<span class="line"><span>9. db.getCollection(&#39;allrecords&#39;).updateMany({}, {$rename: {&#39;upaddress&#39;: &#39;inviterAddress&#39;}})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,36)]))}const g=i(e,[["render",p]]);export{c as __pageData,g as default};
