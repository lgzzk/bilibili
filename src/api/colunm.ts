import httpApi from "@/utils/request";

export interface ColumnItem {

}
export async function getColumn(): Promise<ColumnItem[]> {
    return (await httpApi('/api/pgc/web/timeline/v2?day_before=6&day_after=0&season_type=1'));
}
