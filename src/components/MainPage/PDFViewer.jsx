import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc to use the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100%', overflow: 'auto' }}>
      <Document
        file={pdfUrl}
        onLoadError={console.error}
        style={{ width: '100%', height: 'auto' }}>
        <Page pageNumber={1} width={window.innerWidth / 2} />
      </Document>
    </div>
  );
};

export default PDFViewer;
