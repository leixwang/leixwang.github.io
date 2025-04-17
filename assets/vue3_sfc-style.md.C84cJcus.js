import{j as i,c as a,b as n,ag as l}from"./chunks/framework.BlzMDYBM.js";const g=JSON.parse('{"title":"单文件组件样式特性","description":"","frontmatter":{"sidebarDepth":1},"headers":[],"relativePath":"vue3/sfc-style.md","filePath":"vue3/sfc-style.md","lastUpdated":1744879674000}'),e={name:"vue3/sfc-style.md"};function p(t,s,h,k,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="单文件组件样式特性" tabindex="-1">单文件组件样式特性 <a class="header-anchor" href="#单文件组件样式特性" aria-label="Permalink to &quot;单文件组件样式特性&quot;">​</a></h1><h2 id="style-scoped" tabindex="-1"><code>&lt;style scoped&gt;</code> <a class="header-anchor" href="#style-scoped" aria-label="Permalink to &quot;\`&lt;style scoped&gt;\`&quot;">​</a></h2><p>当 <code>&lt;style&gt;</code> 标签带有 <code>scoped</code> attribute 的时候，它的 CSS 只会应用到当前组件的元素上。这类似于 Shadow DOM 中的样式封装。它带有一些注意事项，不过好处是不需要任何的 polyfill。它是通过 PostCSS 转换以下内容来实现的：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.example</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;hi&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>转换为：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.example</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">data-v-f3f3eg9</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;example&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> data-v-f3f3eg9</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;hi&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="子组件的根元素" tabindex="-1">子组件的根元素 <a class="header-anchor" href="#子组件的根元素" aria-label="Permalink to &quot;子组件的根元素&quot;">​</a></h3><p>在带有 <code>scoped</code> 的时候，父组件的样式将不会泄露到子组件当中。不过，子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响。这是有意为之的，这样父组件就可以设置子组件根节点的样式，以达到调整布局的目的。</p><h3 id="深度选择器" tabindex="-1">深度选择器 <a class="header-anchor" href="#深度选择器" aria-label="Permalink to &quot;深度选择器&quot;">​</a></h3><p>处于 <code>scoped</code> 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 <code>:deep()</code> 这个伪类：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.a</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> :deep(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.b</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面的代码会被编译成：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.a</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">data-v-f3f3eg9</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.b</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过 <code>v-html</code> 创建的 DOM 内容不会被作用域样式影响，但你仍然可以使用深度选择器来设置其样式。</p></div><h3 id="插槽选择器" tabindex="-1">插槽选择器 <a class="header-anchor" href="#插槽选择器" aria-label="Permalink to &quot;插槽选择器&quot;">​</a></h3><p>默认情况下，作用域样式不会影响到 <code>&lt;slot/&gt;</code> 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。使用 <code>:slotted</code> 伪类以确切地将插槽内容作为选择器的目标：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">:slotted(</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="全局选择器" tabindex="-1">全局选择器 <a class="header-anchor" href="#全局选择器" aria-label="Permalink to &quot;全局选择器&quot;">​</a></h3><p>如果想让其中一个样式规则应用到全局，比起另外创建一个 <code>&lt;style&gt;</code>，可以使用 <code>:global</code> 伪类来实现 (看下面的代码)：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">:global(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="混合使用局部与全局样式" tabindex="-1">混合使用局部与全局样式 <a class="header-anchor" href="#混合使用局部与全局样式" aria-label="Permalink to &quot;混合使用局部与全局样式&quot;">​</a></h3><p>你也可以在同一个组件中同时包含作用域样式和非作用域样式：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* global styles */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* local styles */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="作用域样式提示" tabindex="-1">作用域样式提示 <a class="header-anchor" href="#作用域样式提示" aria-label="Permalink to &quot;作用域样式提示&quot;">​</a></h3><ul><li><p><strong>作用域样式并没有消除对 CSS 类的需求</strong>。由于浏览器渲染各种各样 CSS 选择器的方式，<code>p { color: red }</code> 结合作用域样式使用时会慢很多倍 (即，当与 attribute 选择器组合使用的时候)。如果使用 class 或者 id 来替代，例如 <code>.example { color: red }</code>，那你几乎就可以避免这个性能的损失。</p></li><li><p><strong>小心递归组件中的后代选择器</strong>。对于一个使用了 <code>.a .b</code> 选择器的样式规则来说，如果匹配到 <code>.a</code> 的元素包含了一个递归的子组件，那么所有的在那个子组件中的 <code>.b</code> 都会匹配到这条样式规则。</p></li></ul><h2 id="style-module" tabindex="-1"><code>&lt;style module&gt;</code> <a class="header-anchor" href="#style-module" aria-label="Permalink to &quot;\`&lt;style module&gt;\`&quot;">​</a></h2><p><code>&lt;style module&gt;</code> 标签会被编译为 <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS Modules</a> 并且将生成的 CSS 类作为 <code>$style</code> 对象的键暴露给组件：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">$style.red</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    This should be red</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>对生成的类做 hash 计算以避免冲突，实现了和 scope CSS 一样将 CSS 仅作用于当前组件的效果。</p><p>参考 <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS Modules 规范</a>以查看更多详情，例如 <a href="https://github.com/css-modules/css-modules#exceptions" target="_blank" rel="noreferrer">global exceptions</a> 和 <a href="https://github.com/css-modules/css-modules#composition" target="_blank" rel="noreferrer">composition</a>。</p><h3 id="自定义注入名称" tabindex="-1">自定义注入名称 <a class="header-anchor" href="#自定义注入名称" aria-label="Permalink to &quot;自定义注入名称&quot;">​</a></h3><p>你可以通过给 <code>module</code> attribute 一个值来自定义注入的类对象的 property 键：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">classes.red</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;red&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;classes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="与组合式-api-一同使用" tabindex="-1">与组合式 API 一同使用 <a class="header-anchor" href="#与组合式-api-一同使用" aria-label="Permalink to &quot;与组合式 API 一同使用&quot;">​</a></h3><p>注入的类可以通过 <code>useCssModule</code> API 在 <code>setup()</code> 和 <code>&lt;script setup&gt;</code> 中使用。对于使用了自定义注入名称的 <code>&lt;style module&gt;</code> 模块，<code>useCssModule</code> 接收一个对应的 <code>module</code> attribute 值作为第一个参数。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认, 返回 &lt;style module&gt; 中的类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">useCssModule</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 命名, 返回 &lt;style module=&quot;classes&quot;&gt; 中的类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">useCssModule</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&#39;classes&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="状态驱动的动态-css" tabindex="-1">状态驱动的动态 CSS <a class="header-anchor" href="#状态驱动的动态-css" aria-label="Permalink to &quot;状态驱动的动态 CSS&quot;">​</a></h2><p>单文件组件的 <code>&lt;style&gt;</code> 标签可以通过 <code>v-bind</code> 这一 CSS 函数将 CSS 的值关联到动态的组件状态上：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;hello&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">      color: </span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&#39;red&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">.text</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">(color);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>这个语法同样也适用于 <code>&lt;script setup&gt;</code>，且支持 JavaScript 表达式 (需要用引号包裹起来)</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  color: </span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;">&#39;red&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;hello&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">(&#39;theme.color&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#22863A;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>实际的值会被编译成 hash 的 CSS 自定义 property，CSS 本身仍然是静态的。自定义 property 会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式更新。</p>`,42)]))}const o=i(e,[["render",p]]);export{g as __pageData,o as default};
