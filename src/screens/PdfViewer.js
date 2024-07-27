import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PdfViewer.css';

const PdfViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookName, pdfUrl } = location.state || {};

  if (!bookName || !pdfUrl) {
    return <p>Book information is missing.</p>;
  }

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <h1 className="book-title">{bookName}</h1>
      </div>
      <iframe src={pdfUrl} title={bookName} className="pdf-iframe" />
    </div>
  );
};

export default PdfViewer;
