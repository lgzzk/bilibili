import httpApi from "@/utils/request";

export function getDefaultSearch() {
return httpApi('/api/x/web-interface/search/default');
}

export function getTrendingList() {
    return httpApi('/api/x/web-interface/wbi/search/square', {limit: 10});
}

export function getSearchSuggest(keyword: string) {
    return httpApi('/search/main/suggest', {
        "term": keyword,
        "rnd": "0.9941034137736526",
        "buvid": "6326C827-4CBC-68B2-70AC-5F6921FC488118553infoc",
        "spmid": "333.1007",
        "func": "suggest",
        "suggest_type": "accurate",
        "sub_type": "tag",
        "main_ver": "v1",
        "highlight": "",
        "userid": "",
        "bangumi_acc_num": "1",
        "special_acc_num": "1",
        "topic_acc_num": "1",
        "upuser_acc_num": "3",
        "tag_num": "10",
        "special_num": "10",
        "bangumi_num": "10",
        "upuser_num": "3",
    });
}
