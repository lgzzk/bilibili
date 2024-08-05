import httpApi from "@/utils/request";

export interface TrendingItem {
    goto: string
    icon: string,
    keyword: string,
    show_name: string,
    uri: string,
}

export interface SuggestItem {
    value: string,
    term: string,
    ref: number,
    name: string,
    spid: number,
    type: string
}

export interface DefaultSuggest {
    id: number
    name: string
    seid: string
    show_name: string
    url: string
}

export async function getDefaultSearch(): Promise<DefaultSuggest> {
    return (await httpApi('/api/x/web-interface/search/default')).data;
}

export async function getTrendingList():Promise<TrendingItem[]> {
    return (await httpApi('/api/x/web-interface/wbi/search/square', {limit: 10})).data.trending.list;
}

export async function getSearchSuggest(keyword: string):Promise<SuggestItem[]> {
    return (await httpApi('/search/main/suggest', {
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
    })).result.tag;
}
