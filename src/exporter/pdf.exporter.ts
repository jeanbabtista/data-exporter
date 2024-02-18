import PDFDocument from 'pdfkit'
import {Exporter, IRow} from './exporter'

interface Options {
    pageWidth: number
    pageHeight: number
    margin: number
    font: string
    fontSize: number
    lineHeight: number
    x: number
    y: number
}

// https://pdfkit.org/docs/getting_started.html
export class PdfExporter extends Exporter<PDFKit.PDFDocument> {
    private readonly doc: PDFKit.PDFDocument
    private readonly options: Options

    constructor(options?: Partial<Options>) {
        super()

        this.doc = new PDFDocument({size: 'A4', margin: options?.margin ?? 50})
        this.options = this.getOptions(options)
    }

    export() {
        return this.doc
    }

    getExtension(): string {
        return 'pdf'
    }

    addText(text: string, options?: Partial<Options>) {
        const { font, fontSize, x, y } = this.getOptions(options)
        this.doc.font(font).fontSize(fontSize).text(text, x, y)
    }

    addNewLine(options?: Partial<Options>) {
        const { lineHeight } = this.getOptions(options)
        this.options.y += lineHeight
    }

    addTable<U extends IRow>(columns: string[], rows: U[], options?: Partial<Options>): void {
        const { margin } = this.getOptions(options)

        for (const [i, column] of columns.entries())
            this.addText(column, {x: margin + 120 * i, ...options})

        this.addNewLine()

        for (const row of rows) {
            for (const [i, value] of row.toRow().entries())
                this.addText(value, {x:  margin + 120 * i, ...options})

            this.addNewLine()
        }
    }

    private getOptions(options?: Partial<Options>): Options {
        return {
            pageWidth: options?.pageWidth ?? this.options?.pageWidth ?? 750,
            pageHeight: options?.pageHeight ?? this.options?.pageHeight ?? 550,
            margin: options?.margin ?? this.options?.margin ?? 50,
            font: options?.font ?? this.options?.font ?? 'Helvetica',
            fontSize: options?.fontSize ?? this.options?.fontSize ?? 12,
            lineHeight: options?.lineHeight ?? this.options?.lineHeight ?? 20,
            x: options?.x ?? this.options?.x ?? 50,
            y: options?.y ?? this.options?.y ?? 50
        }
    }
}