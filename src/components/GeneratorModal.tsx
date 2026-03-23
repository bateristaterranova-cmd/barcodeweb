import React, { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { X, Printer } from 'lucide-react';

interface GeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeneratorModal: React.FC<GeneratorModalProps> = ({ isOpen, onClose }) => {
  const [originalNumber, setOriginalNumber] = useState('1234567890');
  const [productModel, setProductModel] = useState('Villacorp ML-400 L');
  const barcodePreviewRef = useRef<SVGSVGElement>(null);
  const barcodePrintRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (originalNumber) {
      try {
        if (barcodePreviewRef.current) {
          JsBarcode(barcodePreviewRef.current, originalNumber, {
            format: 'CODE128',
            displayValue: false, 
            width: 2,
            height: 50,
            margin: 0,
          });
        }
        if (barcodePrintRef.current) {
          JsBarcode(barcodePrintRef.current, originalNumber, {
            format: 'CODE128',
            displayValue: false, 
            width: 2,
            height: 50,
            margin: 0,
          });
        }
      } catch (error) {
        console.warn('Barcode generation error:', error);
      }
    }
  }, [originalNumber, isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm no-print"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative z-10 w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden no-print">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-zinc-800">
            <h2 className="font-['Manrope'] font-bold text-xl text-black dark:text-white">Generador de Etiquetas</h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            
            <div className="space-y-4">
              <div>
                <label className="block font-['Inter'] text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex flex-col">
                  Número Original 
                  <span className="text-xs text-gray-400 font-normal mt-0.5">Genera las líneas del código de barras</span>
                </label>
                <input
                  type="text"
                  value={originalNumber}
                  onChange={(e) => setOriginalNumber(e.target.value)}
                  placeholder="Ej. 1234567890"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-black dark:text-white font-['Inter'] focus:ring-2 focus:ring-[#7b39fc] focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block font-['Inter'] text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex flex-col">
                  Modelo del Producto
                  <span className="text-xs text-gray-400 font-normal mt-0.5">Texto que se muestra debajo del código</span>
                </label>
                <input
                  type="text"
                  value={productModel}
                  onChange={(e) => setProductModel(e.target.value)}
                  placeholder="Ej. Villacorp ML-400"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-black dark:text-white font-['Inter'] focus:ring-2 focus:ring-[#7b39fc] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-black rounded-xl p-8 flex flex-col items-center justify-center border border-gray-200 dark:border-zinc-800 border-dashed">
              <span className="font-['Manrope'] text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">Vista Previa</span>
              
              <div className="bg-white p-2 shadow-sm rounded-sm flex flex-col items-center justify-center w-[151px] h-[75px] overflow-hidden">
                <svg ref={barcodePreviewRef} className="w-full h-auto max-h-[45px] object-contain"></svg>
                <div className="font-['Cabin'] font-medium text-black text-[11px] leading-tight truncate w-full text-center mt-0.5">
                  {productModel || '\u00A0'}
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 flex justify-end">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 bg-[#7b39fc] text-white font-['Manrope'] font-semibold text-[14px] px-6 py-2.5 rounded-lg hover:bg-[#6c2ee0] transition-colors shadow-md hover:shadow-lg"
            >
              <Printer size={18} />
              <span>Imprimir Etiqueta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Print View 40x20mm */}
      <div id="print-area">
        <svg ref={barcodePrintRef}></svg>
        <div className="model-text">
          {productModel}
        </div>
      </div>
    </>
  );
};
