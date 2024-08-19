import httpApi from "@/utils/request";

export interface HeaderBarItem {
    id: number
    name: string
    pic: string
    url: string
}

export async function getHeaderBar(): Promise<HeaderBarItem> {
    return (await httpApi('api/x/web-show/wbi/res/locs?pf=0&ids=2837,2836,2870,2953,2954,2955,2956,5672'))
        .data[2954][0]
}
