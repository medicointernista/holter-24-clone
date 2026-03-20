import React from 'react';
import Image from 'next/image';
import { PhoneCall, Sparkles, CircleCheck as CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F8F9FA]">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#1080A0] blur-[100px] opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-[#E1F1F6] blur-[80px] opacity-30"></div>
      </div>

        <div className="container relative mx-auto px-6 py-16 md:py-24 lg:py-28 max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content Column */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Pre-encabezado / Eyebrow Text */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-700">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                <Sparkles size={16} />
              </span>
              Médico Internista Experto en Medellín | Citas disponibles en 24-48 horas
            </div>

            {/* Título Principal / H1 */}
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl lg:text-[3.75rem] leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-1000">
              Monitoreo Holter de 24 Horas: Detecta Arritmias a Tiempo y Sin Esperas
            </h1>

            {/* Subtítulo / Subheadline */}
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-100">
              Obtén un diagnóstico cardiovascular preciso y seguro con un dispositivo no invasivo. El Dr. Willmer Obregón te entregará un informe personalizado para que entiendas exactamente qué le ocurre a tu corazón.
            </p>

            {/* Checkmarks / Benefits List */}
            <ul className="mt-6 space-y-3 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-150">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1080A0] mt-0.5 flex-shrink-0" />
                <span className="text-[15px] text-[#64748B]">
                  <strong className="text-[#1E293B]">Dispositivo ultra-liviano:</strong> Continúa con tu vida normal sin molestias.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1080A0] mt-0.5 flex-shrink-0" />
                <span className="text-[15px] text-[#64748B]">
                  <strong className="text-[#1E293B]">Informe clínico directo:</strong> Análisis experto del médico, no de un software automático.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1080A0] mt-0.5 flex-shrink-0" />
                <span className="text-[15px] text-[#64748B]">
                  <strong className="text-[#1E293B]">Sin largas filas:</strong> Agenda hoy y realiza tu examen entre 1 y 2 días hábiles.
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <a
                href="https://api.whatsapp.com/send?phone=573011505174&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-[15px] font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
              >
                Agendar Holter por WhatsApp
              </a>
              <a
                href="tel:+573009895852"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-[15px] font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
              >
                <PhoneCall size={18} />
                Llamar ahora
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative z-0 group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Soft Glow Behind Image */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"></div>
            
            <figure className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative h-[400px] w-full md:h-[550px]">
                {/* Image Placeholder using high priority asset */}
                <Image
                  src="/Monitoreo-Holter-de-24-Horas.jpg"
                  alt="Dr. Willmer Obregón realizando estudio de Holter 24 horas a paciente en Medellín, Colombia"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Glassmorphic Caption Card */}
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/75 p-6 shadow-lg backdrop-blur-xl border border-white/20">
                  <p className="text-lg font-semibold text-[#1E293B]">Dr. Willmer Obregón</p>
                  <p className="mt-1 text-xs font-medium text-[#1080A0] uppercase tracking-wider">
                    Medicina Interna y Holter 24h
                  </p>
                </div>
              </figcaption>
            </figure>

            {/* Secondary Blur Effect */}
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;