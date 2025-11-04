import "./UploadImage.css"
import { useState, type DragEvent } from "react"

export default function UploadImage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return alert("Selecciona un archivo primero");
    console.log("Archivo subido:", file);
    // Aquí puedes agregar tu lógica de subida al servidor (fetch o axios)
  };

  return (
    <div className="uploadImage-container">
      <h1>Upload New Image</h1>
      <p>Drag and drop your file here or click to select</p>

      <div
        className={`upload-box ${dragActive ? "active" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <label htmlFor="file-upload" className="upload-label">
          {file ? (
            <span>{file.name}</span>
          ) : (
            <>
              <strong>Drag & Drop</strong>
              <p>or select a file to upload</p>
              <button type="button" className="select-btn">Select file</button>
            </>
          )}
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>

      <button className="upload-btn" onClick={handleUpload}>Subir</button>
    </div>
  );
}