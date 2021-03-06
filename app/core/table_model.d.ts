export default class TableModel {
    columns: any[];
    rows: any[];
    type: string;
    constructor();
    sort(options: any): void;
}

export function mergeTablesIntoModel(dst?: TableModel, ...tables: TableModel[]): TableModel;
