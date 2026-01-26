import React from 'react';
import { PhoneCall } from 'lucide-react';

/**
 * CtaBanner Component
 * 
 * Clones the "Final CTA Bar" section with pixel-perfect accuracy.
 * Features a light blue background, centered headline, and two action buttons.
 */
const CtaBanner: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 md:p-12 lg:p-16 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.05)] border border-white">
          {/* Subtle decorative background elements */}
          <div className="pointer-events-none absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#E1F1F6] rounded-full blur-3xl opacity-40"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#E1F1F6] rounded-full blur-3xl opacity-40"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row lg:text-left text-center">
            <div className="max-w-2xl">
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold tracking-tight text-[#0F172A] leading-[1.2]">
                ¿Buscas un médico internista en Medellín?
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#64748B]">
                No te quedes sin tu cita. Escríbenos o llama y te ayudamos a agendar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                className="flex h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#1080A0] px-8 py-2 text-[15px] font-bold text-white shadow-lg transition-all hover:bg-[#0D6E8A] hover:scale-[1.02] active:scale-95"
              >
                Enviar WhatsApp
              </a>
              <a
                href="tel:+573011505174"
                className="flex h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-8 py-2 text-[15px] font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
              >
                <PhoneCall size={18} />
                Llamar por teléfono
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;