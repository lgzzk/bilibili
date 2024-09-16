// import * as cheerio from 'cheerio';
//
// async function getBannerData(url: string) {
//   try {
//     // 发起 HTTP 请求
//     const response = await fetch(url);
//     // 获取响应的 HTML 内容
//     const html = await response.text();
//     // 使用 cheerio 解析 HTML
//     // console.log(html)
//     const $ = cheerio.load(html);
//     const scriptContent = $('script').filter((_, el) => {
//       return $(el).html()?.includes('window.__INITIAL_DATA__');
//     }).html();
//     console.log(scriptContent)
//     let jsonDataStr = scriptContent.match(/window\.__INITIAL_DATA__\s*=\s*(\[[^\]]*\])/)[1];
//     jsonDataStr = jsonDataStr.replace(/\\u002F/g, '/');
//     console.log(jsonDataStr)
//     // let jsonData = JSON.parse(jsonDataStr);
//
// // 打印转换后的 JSON 对象
// //     console.log(jsonData);
//     // console.log($('script').text())
//     // 假设 banner 数据在某个特定的 div 中
//     // const bannerData: Banner[] = [];
//     // $('.bili-banner .bili-banner-item').each((i, elem) => {
//     //   bannerData.push({
//     //     title: $(elem).find('.title').text(),
//     //     image: $(elem).find('img').attr('src'),
//     //   });
//     // });
//
//     // return bannerData;
//   } catch (error) {
//     console.error('Error fetching banner data:', error);
//     return [];
//   }
// }
//
// // 调用函数并输出结果
// getBannerData('/host')
