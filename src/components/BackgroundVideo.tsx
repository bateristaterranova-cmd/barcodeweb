import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full min-h-screen z-[-1] overflow-hidden no-print">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
      />
      {/* Overlay para modo oscuro */}
      <div className="absolute inset-0 bg-transparent dark:bg-black/40 transition-colors duration-300"></div>
    </div>
  );
};
