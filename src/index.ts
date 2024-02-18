import express, {Request, Response} from 'express'
import {sendFile} from './utils/send-file'
import {users} from './data/user'
import {PdfExporter} from './exporter/pdf.exporter'
import {CsvExporter} from './exporter/csv.exporter'
import {JsonExporter} from './exporter/json.exporter'
import {Exporter} from './exporter/exporter'

const app = express()

function getUserReport(data: any[], exporter: Exporter) {
    exporter.addText('User Report')
    exporter.addNewLine()
    exporter.addTable(['ID', 'Name', 'Email', 'Phone'], data)
    exporter.addNewLine()
    exporter.addText('Generated at ' + new Date().toLocaleString())
}

app.get('/report', (req: Request, res: Response) => {
    const exporter = new PdfExporter()
    getUserReport(users, exporter)

    sendFile(res, `export.${exporter.getExtension()}`, exporter.export())
})

app.listen(3000, () => console.log(`http://localhost:3000`))
