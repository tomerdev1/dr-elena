import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

const PDFViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPDF = async () => {
      const pdfUrl = "/assets/accessibilityStatement.pdf";
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;

      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    };

    loadPDF();
  }, []);

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Makes the container take the full viewport height
  },
};

export default PDFViewer;
