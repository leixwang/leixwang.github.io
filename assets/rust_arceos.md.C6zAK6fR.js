import{j as a,c as i,b as n,ag as l}from"./chunks/framework.BlzMDYBM.js";const o=JSON.parse('{"title":"arce os 开发文档","description":"","frontmatter":{},"headers":[],"relativePath":"rust/arceos.md","filePath":"rust/arceos.md","lastUpdated":1744879674000}'),e={name:"rust/arceos.md"};function p(t,s,h,r,k,c){return n(),i("div",null,s[0]||(s[0]=[l(`<h1 id="arce-os-开发文档" tabindex="-1">arce os 开发文档 <a class="header-anchor" href="#arce-os-开发文档" aria-label="Permalink to &quot;arce os 开发文档&quot;">​</a></h1><h2 id="_1-开发环境搭建" tabindex="-1">1. 开发环境搭建 <a class="header-anchor" href="#_1-开发环境搭建" aria-label="Permalink to &quot;1. 开发环境搭建&quot;">​</a></h2><p>官方文档中, 已经有windows版本的搭建开发环境的的步骤, 但是没有macos的, 这里补充一下.</p><h3 id="_1-1-安装rust" tabindex="-1">1.1 安装rust <a class="header-anchor" href="#_1-1-安装rust" aria-label="Permalink to &quot;1.1 安装rust&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --proto</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> &#39;=https&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> --tlsv1.2</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -sSf</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> https://sh.rustup.rs</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> https://sh.rustup.rs</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -sSf</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;"> sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-2-安装rust工具链" tabindex="-1">1.2 安装rust工具链 <a class="header-anchor" href="#_1-2-安装rust工具链" aria-label="Permalink to &quot;1.2 安装rust工具链&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> cargo-binutils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-3-安装qemu" tabindex="-1">1.3 安装qemu <a class="header-anchor" href="#_1-3-安装qemu" aria-label="Permalink to &quot;1.3 安装qemu&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> qemu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-4-安装arceos" tabindex="-1">1.4 安装arceos <a class="header-anchor" href="#_1-4-安装arceos" aria-label="Permalink to &quot;1.4 安装arceos&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> https://github.com/rcore-os/arceos.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> arceos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-5-创建自己的开发分支" tabindex="-1">1.5 创建自己的开发分支 <a class="header-anchor" href="#_1-5-创建自己的开发分支" aria-label="Permalink to &quot;1.5 创建自己的开发分支&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> my-branch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-6-编译并运行-hello-world-程序" tabindex="-1">1.6 编译并运行 hello world 程序 <a class="header-anchor" href="#_1-6-编译并运行-hello-world-程序" aria-label="Permalink to &quot;1.6 编译并运行 hello world 程序&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> 只编译</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> ARCH=riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> A=apps/helloworld</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> 编译并运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> ARCH=riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> A=apps/helloworld</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> run</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>执行结果:</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    Building App: helloworld, Arch: riscv64, Platform: riscv64-qemu-virt, App type: rust</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">cargo build --target riscv64gc-unknown-none-elf --target-dir /Users/richard/project/00.rust/os-20240226/arceos/target --release  --manifest-path apps/helloworld/Cargo.toml --features &quot;axstd/log-level-warn&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    Finished release [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#032F62;--shiki-dark-text-decoration:underline;">optimized</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">] target(s) in 0.06s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">rust-objcopy --binary-architecture=riscv64 apps/helloworld/helloworld_riscv64-qemu-virt.elf --strip-all -O binary apps/helloworld/helloworld_riscv64-qemu-virt.bin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    Running on qemu...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">qemu-system-riscv64 -m 128M -smp 1 -machine virt -bios default -kernel apps/helloworld/helloworld_riscv64-qemu-virt.bin -nographic</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">OpenSBI v1.3.1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">   __</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">__                    </span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">___ </span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">__ _____</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  / __ \\                  / </span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">__|  _ </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">\\_</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">   _|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> | |  | |_ __   </span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">___</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> _ __ | (</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">___</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> | |_) || |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> | |  | | &#39;_ \\ / _ \\ &#39;_ \\ </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">\\_</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">__ \\|  _ &lt; | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> | |__| | |</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">_) |  __</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">/ | | |</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">__) | |</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">_) || |_</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">  \\_</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">___/| .</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#24292E;--shiki-dark-font-weight:bold;">__/ </span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#005CC5;--shiki-dark-font-weight:bold;">\\_</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#24292E;--shiki-dark-font-weight:bold;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">|</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">_| |_</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">|</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">___/|</span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#24292E;--shiki-dark-font-style:italic;">___</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">/_____|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">        | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">        |_|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Name             : riscv-virtio,qemu</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Features         : medeleg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform HART Count       : 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform IPI Device       : aclint-mswi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Timer Device     : aclint-mtimer @ 10000000Hz</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Console Device   : uart8250</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform HSM Device       : ---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform PMU Device       : ---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Reboot Device    : sifive_test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Shutdown Device  : sifive_test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform Suspend Device   : ---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Platform CPPC Device      : ---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware Base             : 0x80000000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware Size             : 194 KB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware RW Offset        : 0x20000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware RW Size          : 66 KB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware Heap Offset      : 0x28000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware Heap Size        : 34 KB (total), 2 KB (reserved), 9 KB (used), 22 KB (free)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Firmware Scratch Size     : 4096 B (total), 760 B (used), 3336 B (free)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Runtime SBI Version       : 1.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Name              : root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Boot HART         : 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 HARTs             : 0*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Region00          : 0x0000000002000000-0x000000000200ffff M: (I,R,W) S/U: ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Region01          : 0x0000000080000000-0x000000008001ffff M: (R,X) S/U: ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Region02          : 0x0000000080020000-0x000000008003ffff M: (R,W) S/U: ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Region03          : 0x0000000000000000-0xffffffffffffffff M: (R,W,X) S/U: (R,W,X)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Next Address      : 0x0000000080200000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Next Arg1         : 0x0000000087e00000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 Next Mode         : S-mode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 SysReset          : yes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Domain0 SysSuspend        : yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART ID              : 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART Domain          : root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART Priv Version    : v1.12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART Base ISA        : rv64imafdch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART ISA Extensions  : time,sstc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART PMP Count       : 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART PMP Granularity : 4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART PMP Address Bits: 54</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART MHPM Count      : 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART MIDELEG         : 0x0000000000001666</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Boot HART MEDELEG         : 0x0000000000f0b509</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">       d8888                            .d88888b.   .d8888b.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">      d88888                           d88P&quot; &quot;Y88b d88P  Y88b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">     d88P888                           888     888 Y88b.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">    d88P 888 888d888  .d8888b  .d88b.  888     888  &quot;Y888b.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">   d88P  888 888P&quot;   d88P&quot;    d8P  Y8b 888     888     &quot;Y88b.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">  d88P   888 888     888      88888888 888     888       &quot;888</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> d8888888888 888     Y88b.    Y8b.     Y88b. .d88P Y88b  d88P</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">d88P     888 888      &quot;Y8888P  &quot;Y8888   &quot;Y88888P&quot;   &quot;Y8888P&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">arch = riscv64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">platform = riscv64-qemu-virt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">target = riscv64gc-unknown-none-elf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">smp = 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">build_mode = release</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">log_level = warn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">Hello, world!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div>`,17)]))}const b=a(e,[["render",p]]);export{o as __pageData,b as default};
