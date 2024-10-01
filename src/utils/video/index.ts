export const getVideoPlayCount = (data: number) => {
    if (data < 10000) return data
    else return (data / 10000).toFixed(1) + '万'
}
