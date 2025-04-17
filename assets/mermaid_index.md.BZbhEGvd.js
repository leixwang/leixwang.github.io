import{j as l,E as t,c as r,b as a,ag as h,h as d,q as i,w as e,f as n,I as k,ah as o}from"./chunks/framework.BlzMDYBM.js";const f=JSON.parse('{"title":"Mermaid 介M","description":"","frontmatter":{},"headers":[],"relativePath":"mermaid/index.md","filePath":"mermaid/index.md","lastUpdated":1744879674000}'),c={name:"mermaid/index.md"};function m(g,s,u,b,y,E){const p=t("Mermaid");return a(),r("div",null,[s[1]||(s[1]=h(`<h1 id="mermaid-介m" tabindex="-1">Mermaid 介M <a class="header-anchor" href="#mermaid-介m" aria-label="Permalink to &quot;Mermaid 介M&quot;">​</a></h1><p><code>Mermaid</code>是一种基于<code>Javascript</code>的绘图工具，使用类似于<code>Markdown</code>的语法，使用户可以方便快捷地通过代码创建图表。</p><p><a href="https://mermaid-js.github.io/" target="_blank" rel="noreferrer">Mermaid 官方网站</a><a href="https://github.com/mermaid-js/mermaid" target="_blank" rel="noreferrer">Mermaid github</a></p><h2 id="vitepress-安装-mermaid" tabindex="-1">VitePress 安装 Mermaid <a class="header-anchor" href="#vitepress-安装-mermaid" aria-label="Permalink to &quot;VitePress 安装 Mermaid&quot;">​</a></h2><p>使用 <code>npm</code> 安装 <code>Mermaid</code></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> vitepress-plugin-mermaid</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -s</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置使用" tabindex="-1">配置使用 <a class="header-anchor" href="#配置使用" aria-label="Permalink to &quot;配置使用&quot;">​</a></h2><p>需要在<code>.vitepress</code>的文件中进行配置.</p><h3 id="在config文件配置" tabindex="-1">在<code>config</code>文件配置 <a class="header-anchor" href="#在config文件配置" aria-label="Permalink to &quot;在\`config\`文件配置&quot;">​</a></h3><p>在<code>.vitepress/config.js</code> 文件中, 增加引入<code>Mermaid</code>.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> MermaidPlugin </span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;vitepress-plugin-mermaid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  markdown: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    config: MermaidPlugin,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="配置-theme" tabindex="-1">配置 <code>theme</code> <a class="header-anchor" href="#配置-theme" aria-label="Permalink to &quot;配置 \`theme\`&quot;">​</a></h4><p>在<code>.vitepress/theme/index.js</code>文件中, 配置使用<code>Mermaid</code>.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;vitepress/theme&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> Mermaid </span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &quot;vitepress-plugin-mermaid/Mermaid.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#E36209;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // register global components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;Mermaid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, Mermaid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="配置完成后-需要在md文件中使用" tabindex="-1">配置完成后, 需要在<code>md</code>文件中使用. <a class="header-anchor" href="#配置完成后-需要在md文件中使用" aria-label="Permalink to &quot;配置完成后, 需要在\`md\`文件中使用.&quot;">​</a></h4><p>需要使用在代码块中标记为<code>mermaid</code>, 如果下面代码所示:</p><div class="tip custom-block"><p class="custom-block-title">示例代码</p><p>\`\`\`mermaid</p><p>flowchart TD</p><p>Start --&gt; Stop</p><p>\`\`\`</p></div><p>上面代码的样式:</p>`,18)),(a(),d(o,null,{default:e(()=>[k(p,{id:"mermaid-60",class:"mermaid",graph:"flowchart%20TD%0A%20%20Start%20--%3E%20Stop%0A"})]),fallback:e(()=>s[0]||(s[0]=[n(" Loading... ")])),_:1})),s[2]||(s[2]=i("p",null,[n("可以使用下面的在线工具, 可以实现边编辑边看效果 "),i("a",{href:"https://mermaid-js.github.io/mermaid-live-editor/",target:"_blank",rel:"noreferrer"},"Mermaid editor online")],-1))])}const A=l(c,[["render",m]]);export{f as __pageData,A as default};
