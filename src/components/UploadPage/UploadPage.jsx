import PDFDropzone from "./Dropzone";
const UploadPage = () => {
    return (
        <div className="page" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <PDFDropzone label="Upload Medical Records" />
        <PDFDropzone label="Upload Guidelines" />
      </div>
    )
}

export default UploadPage;