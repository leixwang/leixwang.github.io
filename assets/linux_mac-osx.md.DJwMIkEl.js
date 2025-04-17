import{j as i,c as a,b as n,ag as e}from"./chunks/framework.BlzMDYBM.js";const c=JSON.parse('{"title":"Mac os X 系统中一些常用软件的配置","description":"","frontmatter":{"sidebar":1},"headers":[],"relativePath":"linux/mac-osx.md","filePath":"linux/mac-osx.md","lastUpdated":1744879674000}'),l={name:"linux/mac-osx.md"};function t(h,s,p,r,k,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="mac-os-x-系统中一些常用软件的配置" tabindex="-1">Mac os X 系统中一些常用软件的配置 <a class="header-anchor" href="#mac-os-x-系统中一些常用软件的配置" aria-label="Permalink to &quot;Mac os X 系统中一些常用软件的配置&quot;">​</a></h1><h2 id="install-meteor-for-sublime-text3" tabindex="-1">Install Meteor for Sublime text3 <a class="header-anchor" href="#install-meteor-for-sublime-text3" aria-label="Permalink to &quot;Install Meteor for Sublime text3&quot;">​</a></h2><h3 id="设置命令行快捷方式-有两种方法效果都一样" tabindex="-1">设置命令行快捷方式(有两种方法效果都一样) <a class="header-anchor" href="#设置命令行快捷方式-有两种方法效果都一样" aria-label="Permalink to &quot;设置命令行快捷方式(有两种方法效果都一样)&quot;">​</a></h3><ul><li>如果是在默认shell下,</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">$sudo ln -s </span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;/Applications/Sublime\\ Text.app/Contents/SharedSupport/bin/subl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> /usr/bin/subl</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">sh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> 放在bash_profile文件中使用以下命令</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">sh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> subl</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;&#39;/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> nano</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;subl&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> EDITOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;subl&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="配置meteor" tabindex="-1">配置Meteor <a class="header-anchor" href="#配置meteor" aria-label="Permalink to &quot;配置Meteor&quot;">​</a></h3><p>参考下面的链接.</p><p><a href="https://github.com/wangleihd/tern-meteor-sublime" target="_blank" rel="noreferrer">meteor</a></p><h2 id="git-自动补齐" tabindex="-1">GIT 自动补齐 <a class="header-anchor" href="#git-自动补齐" aria-label="Permalink to &quot;GIT 自动补齐&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> ruby</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> https://raw.github.com/Homebrew/homebrew/go/install)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> bash-completion</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &#39;if [ -f $(brew --prefix)/etc/bash_completion ]; then . $(brew --prefix)/etc/bash_completion; fi&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> ~/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &#39;echo &quot;/usr/local/bin/bash&quot; &gt;&gt; /etc/shells&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /usr/local/bin/bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="bash-profile-配置" tabindex="-1">.bash_profile 配置 <a class="header-anchor" href="#bash-profile-配置" aria-label="Permalink to &quot;.bash_profile 配置&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> CLICOLOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> LSCOLORS</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">ExFxBxDxCxegedabagacad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&#39;ls -al&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="vim-配色方案" tabindex="-1">vim 配色方案 <a class="header-anchor" href="#vim-配色方案" aria-label="Permalink to &quot;vim 配色方案&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> .vimrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">---------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">syntax</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> enable</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> background=light</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> nu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="install-brew" tabindex="-1">install brew <a class="header-anchor" href="#install-brew" aria-label="Permalink to &quot;install brew&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /usr/bin/ruby</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="tree命令支持中文" tabindex="-1">tree命令支持中文 <a class="header-anchor" href="#tree命令支持中文" aria-label="Permalink to &quot;tree命令支持中文&quot;">​</a></h2><p>使用<code>tree</code>命令, 需要支持显示中文目录</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> uni2ascii</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> tree</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> ascii2uni</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> K</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="web-server" tabindex="-1">Web server <a class="header-anchor" href="#web-server" aria-label="Permalink to &quot;Web server&quot;">​</a></h2><p>启动mac ox10.11 自带的apache服务.</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> apachectl</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>目录:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ cd Library/WebServer/Documents/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="关闭自动生成-ds-store-文件" tabindex="-1">关闭自动生成.DS_store 文件 <a class="header-anchor" href="#关闭自动生成-ds-store-文件" aria-label="Permalink to &quot;关闭自动生成.DS_store 文件&quot;">​</a></h2><p>打开 “终端” ，复制粘贴下面的命令，回车执行，重启Mac即可生效。 禁止生成的命令：(不知道需不需要加sudo执行)</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> write</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> com.apple.desktopservices</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> DSDontWriteNetworkStores</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -bool</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> TRUE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>恢复.DS_store生成：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> com.apple.desktopservices</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> DSDontWriteNetworkStores</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="install-gcc" tabindex="-1">install gcc <a class="header-anchor" href="#install-gcc" aria-label="Permalink to &quot;install gcc&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span>$ brew tap homebrew/versions</span></span>
<span class="line"><span>$ brew install gcc</span></span>
<span class="line"><span>$ brew install binutils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,31)]))}const b=i(l,[["render",t]]);export{c as __pageData,b as default};
