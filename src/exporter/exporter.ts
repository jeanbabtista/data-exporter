export interface IRow {
    toRow(): string[]
}

export abstract class Exporter<T = unknown> {
    abstract export(): T
    abstract getExtension(): string
    abstract addText(text: string, ...args: any[]): void
    abstract addNewLine(...args: any[]): void
    abstract addTable<U extends IRow>(columns: string[], rows: U[], ...args: any[]): void
}