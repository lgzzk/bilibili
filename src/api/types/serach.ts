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
