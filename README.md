# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# 多页面
https://vitejs.cn/guide/build.html#multi-page-app
匹配 src/pages 目录下html文件，文件名作为chunk名

默认情况下，开发服务器 (dev 命令) 运行在 development (开发) 模式，而 build 以及 serve 命令则运行在 production (生产) 模式。
--mode 选项标志来覆盖命令使用的默认模式，能希望有一个 “staging” (预发布|预上线) 模式，还需要一个 .env.staging 文件

1. public不做修改直接复制到dist
2. root项目根目录（index.html 文件所在的位置）
3. base公共基础路径，由 JS 引入的资源 URL，CSS 中的 url() 引用以及 .html 文件中引用的资源在构建过程中都会自动调整，以适配此选项。当然，情况也有例外，当访问过程中需要使用动态连接的 url 时，可以使用全局注入的 import.meta.env.BASE_URL 变量，它的值为公共基础路径。注意，这个变量在构建时会被静态替换，因此，它必须按 import.meta.env.BASE_URL 的原样出现（例如 import.meta.env['BASE_URL'] 是无效的）
4. rollupOptions自定义构建，直接调用底层rollup选项（多页面场景等）