import {Response} from 'express'
import PDFDocument from 'pdfkit'

export function sendFile(res: Response, filename: string, content: string | PDFKit.PDFDocument) {
    const isPDF = content instanceof PDFDocument
    res.setHeader('Content-Type', isPDF ? 'application/pdf' : 'text/csv')
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`)

    if (!isPDF) res.send(content)
    else {
        content.pipe(res)
        content.end()
    }
}