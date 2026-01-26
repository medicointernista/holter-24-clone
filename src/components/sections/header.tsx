import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative w-full z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#1080A0] text-[#F8FAFC]">
        <div className="container mx-auto px-6 py-2 max-w-[1400px]">
          <div className="text-center">
            <span className="text-[14px] font-semibold tracking-wide uppercase">
              Monitoreo Holter 24 horas
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 transition-all duration-300 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 py-4 max-w-[1400px]">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <a 
              className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]" 
              aria-label="Ir al inicio" 
              href="/"
            >
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/97a64b44-91da-4112-9daf-4ae102c188a2/Wilmer-Obregon-Logo-1769391260059.png?width=8000&height=8000&resize=contain" 
                    alt="Logo del Dr. Willmer Obregón" 
                    className="h-12 md:h-14 w-auto object-contain"
                  />
            </a>

            {/* CTA Button Section */}
            <div className="flex items-center gap-3">
              <a 
                href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta." 
                className="items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] text-white shadow-[0_10px_15px_-3px_rgba(16,128,160,0.1),0_4px_6px_-4px_rgba(16,128,160,0.1)] hover:shadow-[#1080A0]/30 hover:scale-[1.02] h-[48px] px-6 py-2"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;