import httpApi from "@/utils/request";
import {DefaultSuggest, SuggestItem, TrendingItem} from "@/api/types/serach.ts";


export async function getDefaultSearch(): Promise<DefaultSuggest> {
    return (await httpApi('/api/x/web-interface/search/default')).data;
}

export async function getTrendingList(): Promise<TrendingItem[]> {
    return (await httpApi('/api/x/web-interface/wbi/search/square', {
        params: {
            limit: 10
        }
    })).data.trending.list;
}

export async function getSearchSuggest(keyword: string): Promise<SuggestItem[]> {
    return (await httpApi('/search/main/suggest', {
        params: {
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
            "upuser_num": "3"
        }
    })).result.tag;
}
