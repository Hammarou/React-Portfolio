import React from 'react'

export default function PdfViewer() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/resume/sample-resume.pdf"
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
        title="PDF Resume Viewer"
      />
    </div>
  )
}
