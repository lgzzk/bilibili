export interface IDanmakuElem {
    id: number
    progress: number
    mode: number
    fontsize: number
    color: number
    midHash: string
    content: string
    ctime: string
    weight: number
    action: string
    pool: number
    idStr: string
    attr: number
}

export interface SimpleDanmaku {
    content: string   // 显示内容
    time: number      // 出现时间
    ctime: string
    color: number     // 颜色
    type: number      // 类型
}
