import httpApi from "@/utils/request";

export interface HeaderBarItem {
    id: number
    name: string
    pic: string
    url: string
}

export async function getHeaderBar(): Promise<HeaderBarItem[]> {
    let respData: Record<string, any[]> = (await httpApi('/api/x/web-show/wbi/res/locs?pf=0&ids=2837,2836,2870,2953,2954,2955,2956,5672'))
        .data
    return Object.entries(respData)
        .filter(item => item[1] !== null)
        .map(item => item[1][0])
}
