import React from 'react';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

const SavePdfButton = ({ targetRef, fileName = 'itinerary.pdf' }) => {
  const handleSavePdf = async () => {
    if (!targetRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(targetRef.current, {
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });

      // Get actual image size
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [img.width, img.height], // one big page
        });

        pdf.addImage(dataUrl, 'PNG', 0, 0, img.width, img.height);
        pdf.save(fileName);
      };
    } catch (err) {
      console.error('PDF generation failed:', err);
    }
  };

  return (
    <button
      onClick={handleSavePdf}
      className=' bg-[#c90000]/80 hover:bg-[#c90000de] w-full text-white px-4 font-medium rounded-lg py-3 text-sm sm:text-base cursor-pointer'
    >
      Download PDF
    </button>
  );
};

export default SavePdfButton;
