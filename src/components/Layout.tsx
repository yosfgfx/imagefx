import React from 'react';
import { Palette } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="border-b border-gray-800 bg-gray-950 p-6">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <svg 
            id="Layer_1" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 204.69 130.13"
            className="w-48 h-48" // This sets a consistent size for the logo
          >
            {/* SVG definitions */}
   <defs>
    <linearGradient id="linear-gradient" x1="141.3" y1="30.51" x2="144.96" y2="93.76" gradientUnits="userSpaceOnUse">
      <stop offset=".36" stop-color="#1f2937" stop-opacity=".8"/>
      <stop offset=".83" stop-color="#101827" stop-opacity=".2"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="43.11" y1="19.53" x2="62.7" y2="60.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#45ddd5" stop-opacity=".2"/>
      <stop offset="1" stop-color="#45ddd5" stop-opacity=".8"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="177.64" y1="-106.49" x2="126.76" y2="155.22" gradientUnits="userSpaceOnUse">
      <stop offset=".47" stop-color="#9334e9" stop-opacity="0"/>
      <stop offset=".77" stop-color="#9334e9" stop-opacity=".2"/>
      <stop offset=".92" stop-color="#fff" stop-opacity=".9"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="38.04" y1="93.37" x2="87.12" y2="93.37" gradientUnits="userSpaceOnUse">
      <stop offset=".37" stop-color="#f99393" stop-opacity=".8"/>
      <stop offset=".81" stop-color="#f99393" stop-opacity=".2"/>
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="133.01" y1="61.39" x2="5.3" y2="66.53" gradientUnits="userSpaceOnUse">
      <stop offset=".23" stop-color="#1f2937" stop-opacity=".8"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".9"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="176.66" y1="-101.45" x2="127.24" y2="152.74" gradientUnits="userSpaceOnUse">
      <stop offset=".28" stop-color="#9334e9"/>
      <stop offset=".65" stop-color="#9334e9" stop-opacity=".2"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".9"/>
    </linearGradient>
  </defs>
  <path d="M93.49,51.54c6.15,3.38,10.31,9.91,10.31,17.42s-4.17,14.04-10.31,17.42c.67,1.93,1.46,3.82,2.34,5.64,6.73-1.96,14.3-.28,19.61,5.03,5.31,5.31,6.98,12.87,5.03,19.61,1.83.88,3.71,1.67,5.64,2.34,3.38-6.15,9.91-10.31,17.42-10.31s14.04,4.17,17.42,10.31c1.93-.67,3.82-1.46,5.64-2.34-1.96-6.73-.28-14.3,5.03-19.61s12.87-6.98,19.61-5.03c.88-1.83,1.67-3.71,2.34-5.64-6.15-3.38-10.31-9.91-10.31-17.42s4.17-14.04,10.31-17.42c-.67-1.93-1.46-3.82-2.34-5.64-6.73,1.96-14.3.28-19.61-5.03-5.31-5.31-6.98-12.87-5.03-19.61-1.83-.88-3.71-1.67-5.64-2.34-3.38,6.15-9.91,10.31-17.42,10.31s-14.04-4.17-17.42-10.31c-1.93.67-3.82,1.46-5.64,2.34,1.96,6.73.28,14.3-5.03,19.61-5.31,5.31-12.87,6.98-19.61,5.03-.88,1.83-1.67,3.71-2.34,5.64Z" fill="url(#linear-gradient)" fill-rule="evenodd"/>
  <path d="M112.54,10.28l-3.9,5.22-13.45,17.98c-4.79-.53-9.51,1.99-11.68,6.45-1.12,2.31-2.1,4.68-2.95,7.11-.74,2.14-.83,4.37-.34,6.44l-1.39,1.86-18.8,24.65-13.59-13.41c-2.87-2.83-7.56-2.54-10.06.62l-27.39,34.7V10.28h103.54Z" fill="url(#linear-gradient-2)" fill-rule="evenodd"/>
  <path d="M82.98,47.89c.81-2.33,1.76-4.62,2.83-6.84,2.36-4.88,7.9-7.34,13.11-5.83,3.05.89,6.36.07,8.64-2.21s3.1-5.59,2.21-8.64c-1.51-5.21.95-10.75,5.83-13.11,2.22-1.08,4.5-2.02,6.84-2.83,5.12-1.78,10.79.39,13.4,5.15,1.53,2.79,4.44,4.55,7.68,4.55s6.14-1.76,7.68-4.55c2.61-4.76,8.28-6.93,13.4-5.15,2.33.81,4.62,1.76,6.84,2.83,4.88,2.36,7.34,7.9,5.83,13.11-.89,3.05-.07,6.36,2.21,8.64s5.59,3.1,8.64,2.21c5.21-1.51,10.75.95,13.11,5.83,1.08,2.22,2.02,4.5,2.83,6.84,1.78,5.12-.39,10.79-5.15,13.4-2.79,1.53-4.55,4.44-4.55,7.68s1.76,6.14,4.55,7.68c4.76,2.61,6.93,8.28,5.15,13.4-.81,2.33-1.76,4.62-2.83,6.84-2.36,4.88-7.9,7.34-13.11,5.83-3.05-.89-6.36-.07-8.64,2.21s-3.1,5.59-2.21,8.64c1.51,5.21-.95,10.75-5.83,13.11-2.22,1.08-4.5,2.02-6.84,2.83-5.12,1.78-10.79-.39-13.4-5.15-1.53-2.79-4.44-4.55-7.68-4.55s-6.14,1.76-7.68,4.55c-2.61,4.76-8.28,6.93-13.4,5.15-2.33-.81-4.62-1.76-6.84-2.83-4.88-2.36-7.34-7.9-5.83-13.11.89-3.05.07-6.36-2.21-8.64s-5.59-3.1-8.64-2.21c-5.21,1.51-10.75-.95-13.11-5.83-1.08-2.22-2.02-4.5-2.83-6.84-1.78-5.12.39-10.79,5.15-13.4,2.79-1.53,4.55-4.44,4.55-7.68s-1.76-6.14-4.55-7.68c-4.76-2.61-6.93-8.28-5.15-13.4Z" fill="url(#linear-gradient-3)" fill-rule="evenodd"/>
  <path d="M109.87,120.05c-.65-2.05-.73-4.29-.09-6.48.89-3.05.07-6.36-2.21-8.64-2.28-2.28-5.59-3.1-8.64-2.21-5.21,1.51-10.75-.95-13.11-5.83-1.08-2.22-2.02-4.5-2.83-6.84-1.78-5.12.39-10.79,5.15-13.4,2.79-1.53,4.55-4.44,4.55-7.68,0-.22,0-.43-.02-.65-.65-.68-1.42-1.24-2.28-1.64-10.83,12.33-26.44,34.73-26.44,34.73l-20.33-19.9-30.93,38.52h97.2Z" fill="url(#linear-gradient-4)" fill-rule="evenodd"/>
  <g id="image-d">
    <path d="M10.28,128.78c-5.67,0-10.28-4.61-10.28-10.28V10.28C0,4.61,4.61,0,10.28,0h108.22c2.43,0,4.7.83,6.48,2.28-1.01.19-2,.45-2.98.79-2.59.9-5.16,1.97-7.64,3.17-.5.24-1,.51-1.48.79H7.03v104.24l33.18-42.05c.67-.85,1.68-1.34,2.76-1.34.93,0,1.81.36,2.47,1.01l16.21,16,17.09-22.42c1.06,2.22,2.52,4.22,4.33,5.93l-18.25,23.94c-.67.88-1.69,1.38-2.8,1.38-.93,0-1.8-.36-2.46-1.01l-16.26-16.05L7.73,121.75h95.82c.61,2.55,1.7,4.94,3.2,7.03H10.28ZM44.1,54.38c-9.4,0-17.04-7.65-17.04-17.04s7.65-17.04,17.04-17.04,17.04,7.65,17.04,17.04-7.65,17.04-17.04,17.04ZM44.1,27.32c-5.52,0-10.01,4.49-10.01,10.01s4.49,10.01,10.01,10.01,10.01-4.49,10.01-10.01-4.49-10.01-10.01-10.01Z" fill="url(#linear-gradient-5)" fill-rule="evenodd"/>
  </g>
  <g id="gear-d">
    <path d="M160.95,128.3c-3.39,0-6.51-1.85-8.15-4.82-1.86-3.39-5.42-5.49-9.28-5.49s-7.41,2.11-9.28,5.49c-1.63,2.97-4.76,4.82-8.15,4.82-1.04,0-2.07-.17-3.05-.52-2.26-.79-4.49-1.71-6.64-2.75-4.09-1.98-6.14-6.59-4.87-10.96,1.08-3.71.05-7.71-2.67-10.44-2-2-4.65-3.1-7.47-3.1-1,0-2,.14-2.97.42-.85.25-1.72.37-2.59.37-3.54,0-6.82-2.06-8.36-5.24-1.04-2.15-1.97-4.39-2.75-6.64-1.5-4.3.31-9.01,4.3-11.2,3.39-1.86,5.49-5.42,5.49-9.28s-2.11-7.41-5.49-9.28c-3.99-2.19-5.8-6.9-4.3-11.2.79-2.26,1.71-4.49,2.75-6.64,1.54-3.19,4.83-5.24,8.36-5.24.88,0,1.75.12,2.59.37.97.28,1.97.42,2.97.42,2.82,0,5.47-1.1,7.47-3.1,2.73-2.73,3.75-6.73,2.67-10.44-1.27-4.37.78-8.98,4.87-10.96,2.15-1.04,4.39-1.97,6.64-2.75.99-.34,2.01-.52,3.05-.52,3.39,0,6.51,1.85,8.15,4.82,1.86,3.39,5.42,5.49,9.28,5.49s7.41-2.11,9.28-5.49c1.63-2.97,4.76-4.82,8.15-4.82,1.04,0,2.07.17,3.05.52,2.25.79,4.49,1.71,6.64,2.75,4.09,1.98,6.14,6.59,4.87,10.96-1.08,3.71-.05,7.71,2.67,10.44,2,2,4.65,3.1,7.47,3.1,1,0,2-.14,2.97-.42.85-.25,1.72-.37,2.59-.37,3.54,0,6.82,2.06,8.36,5.24,1.04,2.15,1.97,4.39,2.75,6.64,1.5,4.3-.31,9.01-4.3,11.2-3.39,1.86-5.49,5.42-5.49,9.28s2.11,7.41,5.49,9.28c3.99,2.19,5.8,6.9,4.3,11.2-.78,2.26-1.71,4.49-2.75,6.64-1.54,3.19-4.83,5.24-8.36,5.24-.87,0-1.75-.12-2.59-.37-.97-.28-1.97-.42-2.97-.42-2.82,0-5.47,1.1-7.47,3.1-2.73,2.73-3.75,6.73-2.67,10.44,1.27,4.37-.78,8.98-4.87,10.96-2.15,1.04-4.39,1.97-6.64,2.75-.99.34-2.01.52-3.05.52ZM143.53,110.52c6.58,0,12.65,3.59,15.82,9.36l.74,1.35,1.46-.51c1.98-.69,3.95-1.51,5.84-2.42l1.39-.67-.43-1.48c-1.84-6.33-.09-13.15,4.57-17.81,3.41-3.41,7.94-5.28,12.76-5.28,1.71,0,3.41.24,5.05.72l1.48.43.67-1.39c.92-1.89,1.73-3.86,2.42-5.84l.51-1.46-1.35-.74c-5.78-3.17-9.37-9.24-9.37-15.82s3.59-12.65,9.37-15.82l1.35-.74-.51-1.46c-.69-1.98-1.51-3.95-2.42-5.84l-.67-1.39-1.48.43c-1.64.48-3.34.72-5.05.72-4.82,0-9.35-1.88-12.76-5.28-4.66-4.66-6.4-11.48-4.57-17.81l.43-1.48-1.39-.67c-1.89-.92-3.86-1.73-5.84-2.42l-1.46-.51-.74,1.35c-3.17,5.78-9.24,9.37-15.82,9.37s-12.65-3.59-15.82-9.37l-.74-1.35-1.46.51c-1.98.69-3.95,1.51-5.84,2.42l-1.39.67.43,1.48c1.84,6.33.09,13.15-4.57,17.81-3.41,3.41-7.94,5.28-12.76,5.28-1.71,0-3.41-.24-5.05-.72l-1.48-.43-.67,1.39c-.92,1.89-1.73,3.86-2.42,5.84l-.51,1.46,1.35.74c5.78,3.17,9.37,9.24,9.37,15.82s-3.59,12.65-9.37,15.82l-1.35.74.51,1.46c.69,1.98,1.51,3.95,2.42,5.84l.67,1.39,1.48-.43c1.64-.48,3.34-.72,5.05-.72,4.82,0,9.35,1.88,12.76,5.28,4.66,4.66,6.4,11.48,4.57,17.81l-.43,1.48,1.39.67c1.89.92,3.86,1.73,5.84,2.42l1.46.51.74-1.35c3.17-5.78,9.24-9.36,15.82-9.36ZM143.53,89.38c-11.26,0-20.41-9.16-20.41-20.41s9.16-20.41,20.41-20.41,20.41,9.16,20.41,20.41-9.16,20.41-20.41,20.41ZM143.53,56.02c-7.14,0-12.95,5.81-12.95,12.95s5.81,12.95,12.95,12.95,12.95-5.81,12.95-12.95-5.81-12.95-12.95-12.95Z" fill="url(#linear-gradient-6)" fill-rule="evenodd"/>
  </g>
</svg>
          <h1 className="text-2xl font-bold">Image Effect تأثيرات الصور</h1>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        {children}
      </main>
    </div>
  );
}