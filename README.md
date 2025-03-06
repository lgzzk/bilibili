## 👉[在线体验](https://www.lgzzk.site/bilibili/)
## 🚀技术栈
- [Vue3.5](https://cn.vuejs.org/)
- [Typescript](https://www.tslang.cn/index.html)
- [Vite](https://vitejs.cn/)
- [Vue-Router](https://router.vuejs.org/zh)
- [VueUse](https://vueuse.pages.dev/guide)
- [Tailwind CSS](https://www.tailwindcss.cn/)
- [Media Source Extensions API](https://developer.mozilla.org/zh-CN/docs/Web/API/Media_Source_Extensions_API)

## 🏃‍➡️运行
```sh
  pnpm i
  pnpm dev
```
## 🐱nginx部署

```
location /bilibili/ {
        try_files $uri $uri/ /bilibili/index.html;
    }

    location /api/ {
        proxy_pass https://api.bilibili.com/;
        proxy_set_header Referer "https://www.bilibili.com";
    }

    location /search/ {
        proxy_pass https://s.search.bilibili.com/;
        proxy_set_header Referer "https://www.bilibili.com";
    }

    location /stream/ {
        resolver 8.8.8.8 1.1.1.1 valid=31536000s;

        proxy_pass https://upos-sz-mirror08c.bilivideo.com/;
        proxy_set_header Referer "https://www.bilibili.com";
        
        proxy_hide_header Content-Type;
        add_header Content-Type "application/octet-stream";
        
        proxy_set_header User-Agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
    }

    location /range {
        # resolver 223.5.5.5 119.29.29.29 valid=31536000s;
        resolver 114.114.114.114 223.5.5.5;
        resolver_timeout 1s;
        
        proxy_pass $http_url;
        proxy_set_header Host $proxy_host;

        proxy_set_header Range "bytes=0-0";
        proxy_set_header Referer "https://www.bilibili.com";
        add_header Access-Control-Expose-Headers Content-Range;
        proxy_buffering off;
        proxy_set_header User-Agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
    }
```
  
## 👀声明
此项目是个人为了兴趣而开发, 仅用于学习和测试，所用API皆从官方网站收集, 不提供任何破解内容。
## 🎉致谢
- [bilibili](https://www.bilibili.com/)
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
- [PiliPalaX](https://github.com/orz12/PiliPalaX)
## 🌈截图
![image](https://github.com/user-attachments/assets/a9de1a8c-4601-4d68-9b8b-3a3396a03e71)

![image](https://github.com/user-attachments/assets/d272ab33-b43e-4265-900a-4f573e38dd16)
