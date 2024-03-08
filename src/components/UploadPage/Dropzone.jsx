import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set worker src
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFDropzone = ({ label }) => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        // Simulate a file upload here
        console.log('Uploading file...', acceptedFiles[0].name);
        // Assuming the upload is done and setting the file to state
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
            const binaryStr = reader.result;
            setFile(binaryStr);
        };
        reader.readAsDataURL(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'application/pdf' });

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>


            <div style={{ width: '48%', textAlign: 'center' }}>
                <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', cursor: 'pointer' }}>
                    <input {...getInputProps()} />
                    <p>{label}</p>
                    <p>Drag 'n' drop a PDF here, or click to select one</p>

                </div>
                {file && (
                    <Document file={file} options={{ workerSrc: `/pdf.worker.js` }}>
                        <Page pageNumber={1} />
                    </Document>
                )}
            </div>
        </div>
    );
};

export default PDFDropzone;
