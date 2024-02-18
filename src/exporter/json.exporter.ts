import {Exporter, IRow} from './exporter'

export class JsonExporter extends Exporter<string> {
    private data: string

    constructor() {
        super()
        this.data = ''
    }

    export() {
        return this.data
    }

    getExtension() {
        return 'json'
    }

    addText(_text: string) {
    }

    addNewLine() {
    }

    addTable<U extends IRow>(columns: string[], rows: U[]) {
        // Convert the rows to an array of objects
        const objects = rows.map(row => {
            const obj: any = {}
            columns.forEach((column, index) => {
                obj[column] = row.toRow()[index]
            })

            return obj
        })

        // Convert the objects to a JSON string
        this.data += JSON.stringify(objects, null, 2)
    }
}
