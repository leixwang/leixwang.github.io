import{j as s,c as i,b as a,a4 as n}from"./chunks/framework.CXlYEdFK.js";const u=JSON.parse('{"title":"Ubuntu 16.04 x64 安装 React Native 开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"linux/ubuntu-install-rn-env.md","filePath":"linux/ubuntu-install-rn-env.md","lastUpdated":1721298994000}'),e={name:"linux/ubuntu-install-rn-env.md"},t=n(`<h1 id="ubuntu-16-04-x64-安装-react-native-开发环境" tabindex="-1">Ubuntu 16.04 x64 安装 React Native 开发环境 <a class="header-anchor" href="#ubuntu-16-04-x64-安装-react-native-开发环境" aria-label="Permalink to &quot;Ubuntu 16.04 x64 安装 React Native 开发环境&quot;">​</a></h1><h2 id="toc-前言" tabindex="-1">[TOC] 前言 <a class="header-anchor" href="#toc-前言" aria-label="Permalink to &quot;[TOC]
前言&quot;">​</a></h2><p>NodeJs安装请参照 <a href="https://reactnative.cn/docs/0.41/getting-started.html" target="_blank" rel="noreferrer">https://reactnative.cn/docs/0.41/getting-started.html</a></p><h2 id="一、准备" tabindex="-1">一、准备 <a class="header-anchor" href="#一、准备" aria-label="Permalink to &quot;一、准备&quot;">​</a></h2><p>1、<a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank" rel="noreferrer">jdk-8u121-linux-x64.tar.gz</a><br> 2、<a href="http://www.android-studio.org" target="_blank" rel="noreferrer">android-studio-ide-145.3360264-linux.zip</a><br> 3、如果是64位系统还需要安装32位运行库</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> lib32z1</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> lib32ncurses5</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">  lib32stdc++6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二、安装" tabindex="-1">二、安装 <a class="header-anchor" href="#二、安装" aria-label="Permalink to &quot;二、安装&quot;">​</a></h2><p>###1、解压</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> jdk-8u121-linux-x64.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /opt/.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> android-studio-ide-145.3360264-linux.zip</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /opt/.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> jdk-8u121-linux-x64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> android-studio-ide-145.3360264-linux.zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>###2、赋权</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> android-sdk</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -R</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> $USER</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">$USER </span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">android-sdk</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -R</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> $USER</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">$USER </span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">android-studio</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /opt/android-studio/bin/studio.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>###3、启动Android Studio</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /opt/android-studio/bin/studio.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>###4、配置Android Studio ***提示：***初次启动会弹出以下界面，点击“OK” <img src="http://www.2cto.com/uploadfile/Collfiles/20160502/2016050211205292.png" alt="enter image description here"></p><p>***提示：***点击“Next” <img src="http://www.2cto.com/uploadfile/Collfiles/20160502/2016050211205294.png" alt="enter image description here"></p><p><em><strong>提示：</strong></em></p><blockquote><p>1、选择“Custom”，点击“Next”。<br> 2、 .....<br> 3、选择SDK路径：/opt/android-sdk，点击“Next”</p></blockquote><p><img src="http://www.2cto.com/uploadfile/Collfiles/20160502/2016050211205398.png" alt="enter image description here"></p><p>***提示：***等待下载，最后点击“Finish” <img src="http://www.2cto.com/uploadfile/Collfiles/20160502/2016050211205399.png" alt="enter image description here"></p><p>***提示：***关闭Android Studio <img src="http://www.2cto.com/uploadfile/Collfiles/20160502/20160502112054100.png" alt="enter image description here"></p><p>###5、下载Android SDK <em><strong>注意</strong></em></p><blockquote><p>不要使用Android Studio自带的Android SDK Manager下载，可能会造成Android Studio无法启动的问题</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /opt/android-sdk/tools/android</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><em><strong>提示：</strong></em> 1、启动 Android SDK Manager ，打开主界面，依次选择「Tools」、「Options...」，弹出『Android SDK Manager - Settings』窗口； 2、在『Android SDK Manager - Settings』窗口中，在「HTTP Proxy Server」和「HTTP Proxy Port」输入框内填入 mirrors.neusoft.edu.cn 和 80，并且选中「Force https://... sources to be fetched using http://...」复选框。设置完成后单击「Close」按钮关闭『Android SDK Manager - Settings』窗口返回到主界面； 3、依次选择「Packages」、「Reload」 4、在Tools中勾选Android SDK Build-tools 23.0.1 5、在Android 6.0 (Marshmallow)中勾选Google APIs、Android SDK Platform 23、Intel x86 Atom System Image、Intel x86 Atom_64 System Image以及Google APIs Intel x86 Atom_64 System Image。 6、下载完成后关闭Android SDK Manager</p></blockquote><h2 id="常见问题解决" tabindex="-1">常见问题解决 <a class="header-anchor" href="#常见问题解决" aria-label="Permalink to &quot;常见问题解决&quot;">​</a></h2><p>1、apt无法安装,提示错误</p><blockquote><p>E:Could not get lock /var/lib/apt/lists/lock - open (11: Resource temporarily unavailable)</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /var/cache/apt/archives/lock</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> /var/lib/dpkg/lock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2、运行react-native run-android时，出现unzip错误,此问题一般是gradle下载不完整造成，删除~/.gradle/wrapper/dists/gradle-3.4-all/目录后再试，如果依然出现此错误，可使用方法二</p><p>方法一：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> .gradle/wrapper/dists/gradle-3.4-all/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>方法二：</p><blockquote><p>下载gradle-3.4-all.zip文件到本地，并修改android/gradle/wrapper/gradle-wrapper.properties文件：</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">distributionUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">https</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">\\:</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">//services.gradle.org/distributions/gradle-2.14.1-all.zip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">改为本地路径：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">distributionUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">file</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">\\:</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">/Users/sandy/Downloads/gradle-3.4-all.zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3、虚拟机无法启动Android模拟器</p><blockquote><p>将虚拟机CPU虚拟化模式设为SVM或VT-x,VirtualBox未解决。</p></blockquote>`,36),l=[t];function p(r,h,d,o,k,c){return a(),i("div",null,l)}const b=s(e,[["render",p]]);export{u as __pageData,b as default};