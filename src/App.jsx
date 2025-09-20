
import React, { useState, useEffect, useRef, useCallback, useMemo, useContext, createContext } from 'react';

            const manifestBlob = new Blob([JSON.stringify(manifestContent)], { type: 'application/json' });
            const manifestUrl = URL.createObjectURL(manifestBlob);
            const manifestLink = document.createElement('link');
            manifestLink.id = 'app-manifest-link';
            manifestLink.rel = 'manifest';
            manifestLink.href = manifestUrl;
            document.head.appendChild(manifestLink);


            let themeColor = document.querySelector('meta[name="theme-color"]');
            if (!themeColor) {
                themeColor = document.createElement('meta');
                themeColor.name = 'theme-color';
                themeColor.content = '#111827';
                document.head.appendChild(themeColor);
            }


            let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
            if (!appleIcon) {
                appleIcon = document.createElement('link');
                appleIcon.rel = 'apple-touch-icon';
                appleIcon.href = 'https://i.ibb.co/604jKG3/kokuo-logo-192.jpg';
                document.head.appendChild(appleIcon);
            }


            let favicon = document.querySelector('link[rel="icon"]');
            if (favicon) {
                favicon.href = 'https://i.ibb.co/604jKG3/kokuo-logo-192.jpg';
            } else {
                favicon = document.createElement('link');
                favicon.rel = 'icon';
                favicon.href = 'https://i.ibb.co/604jKG3/kokuo-logo-192.jpg';
                favicon.type = 'image/jpeg';
                document.head.appendChild(favicon);
            }
        }
    }, []);


    const customStyles = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      html, body, #root { min-height: 100vh; min-height: -webkit-fill-available; scroll-behavior: smooth; }
      body { font-family: 'Inter', sans-serif; background-color: #111827; color: #ffffff; max-width: 100%; overflow-x: hidden; }
      .shadow-neumorphic { box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6), -4px -4px 6px rgba(255, 255, 255, 0.05); }
      .shadow-inner-custom { box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.1); }
      @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px) translateX(-50%); } to { opacity: 1; transform: translateY(0) translateX(-50%); } }
      .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
      @keyframes fade-in-up-view { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-up-view { animation: fade-in-up-view 0.5s ease-out forwards; }
      .input-rounded-border, .select-rounded-border, .textarea-rounded-border { background-color: #1a1a1a; border: 1px solid #4a90e2; border-radius: 8px; padding: 12px; outline: none; color: #ffffff; font-size: 16px; box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.1); }
      .input-rounded-border:focus, .select-rounded-border:focus, .textarea-rounded-border:focus { border-color: #60a5fa; }
      .select-rounded-border { -webkit-appearance: none; -moz-appearance: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.7rem center; background-size: 1.5em; padding-right: 2.5rem; }
      .horizontal-scroll-container::-webkit-scrollbar { height: 8px; }
      .horizontal-scroll-container::-webkit-scrollbar-track { background: #333; border-radius: 10px; }
      .horizontal-scroll-container::-webkit-scrollbar-thumb { background: #555; border-radius: 10px; }
      .details-section { max-height: 1500px; overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, padding 0.5s ease-in-out; opacity: 1; }
      .details-section-hidden { max-height: 0; opacity: 0; padding-top: 0 !important; padding-bottom: 0 !important; margin-top: 0 !important; }
      @keyframes slide-in-up-scroll { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      .animate-on-scroll { animation: slide-in-up-scroll 0.6s ease-out forwards; }
      .popup-wrapper { transition: opacity 300ms ease-out, transform 300ms ease-out; opacity: 0; transform: scale(0.95); }
      .popup-wrapper-visible { opacity: 1; transform: scale(1); }
      .text-gradient {
        background: linear-gradient(45deg, #f87171, #fb923c, #facc15, #4ade80, #38bdf8, #a78bfa);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    `;
    return (
        <AppProvider>
            <style>{customStyles}</style>
            <MainApp />
        </AppProvider>
    );
}


export default App;



































            const canvas = document.createElement('canvas');
            let { width, height } = img;
            if (width > height) { if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; } } 
            else { if (height > maxHeight) { width *= maxHeight / height; height = maxHeight; } }
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', 0.7)); 
        };
        img.onerror = (error) => reject(error);
    });
};


const determineDisplayStatus = (record) => {
    if (!record || !record.status) return 'Status Tidak Diketahui';
    const { status, evaluationResult, cekingResult } = record;
    if (status.startsWith('Evaluasi')) {
        const evalName = status.replace('Evaluasi ', '');
        return evaluationResult === 'Lulus' ? `Lulus Evaluasi ${evalName}` : `Masih Tahap Evaluasi ${evalName}`;
    }
    if (status.startsWith('Ceking tahap')) {
         return cekingResult === 'Lulus' ? `Lulus Ceking` : 'Tahap Ceking';
    }
    return status;
};


const getNextCekingStage = (nama, activeRecords) => {
    if (!nama) return "Ceking tahap 1";
    const participantCekingRecords = activeRecords
        .filter(r => r.nama === nama && r.status.match(/Ceking tahap \d+/))
        .map(r => parseInt(r.status.replace('Ceking tahap ', ''), 10))
        .filter(num => !isNaN(num));


    if (participantCekingRecords.length === 0) return "Ceking tahap 1";
    return `Ceking tahap ${Math.max(...participantCekingRecords) + 1}`;
};


const matchesStatusFilter = (record, filter) => {
    if (!filter || filter === 'semua') return true;
    const displayStatus = determineDisplayStatus(record);
    switch (filter) {
        case 'Trainingan': return record.status.startsWith('Training');
        case 'Ceking': return displayStatus === 'Tahap Ceking';
        case 'Resign': return record.status === 'Resign';
        case 'Ganti Peserta': return record.status === 'Ganti Peserta';
        default: return true;
    }
};


const matchesEvaluationCategoryFilter = (record, filter) => {
    if (!filter || filter === 'semua') return true;
    if (record.status === filter) return true; // Mencocokkan status evaluasi eksplisit
    // Jika memfilter evaluasi pertama, sertakan juga lulusan baru dari TC
    if (filter === 'Evaluasi Reflexology' && record.status === 'Lulus') {
        return true;
    }
