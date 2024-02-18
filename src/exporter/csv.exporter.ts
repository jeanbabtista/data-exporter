import {Exporter, IRow} from './exporter'

export class CsvExporter extends Exporter<string> {
    private data: string

    constructor() {
        super()
        this.data = ''
    }

    export() {
        return this.data
    }

    getExtension() {
        return 'csv'
    }

    addText(text: string) {
        this.data += text
    }

    addNewLine() {
        this.data += '\n'
    }

    addTable<U extends IRow>(columns: string[], rows: U[]) {
        this.addText(columns.join(','))
        this.addNewLine()

        for (const row of rows) {
            this.addText(row.toRow().join(','))
            this.addNewLine()
        }
    }
}
