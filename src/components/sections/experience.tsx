import React from 'react';
import { CheckCircle2, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const managedConditions = [
    "Obesidad y control de peso",
    "Diabetes e hipertensión arterial",
    "Enfermedades renales y de tiroides",
    "Colon irritable, gastritis e hipotiroidismo",
    "Fibromialgia y enfermedades crónicas"
  ];

  return (
    <section className="bg-[#F8F9FA] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left Column: Trajectory Card */}
          <div className="flex flex-col">
            <div className="rounded-[2rem] border border-white bg-white p-8 md:p-10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] h-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1080A0]">
                Áreas de experiencia
              </span>
              <h2 className="mt-4 text-[1.875rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-tight text-[#0F172A]">
                Trayectoria en Estudios Cardiovasculares y Medicina Interna
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[#64748B]">
                El Dr. Willmer Obregón es especialista en Medicina Interna con más de 15 años de experiencia en el diagnóstico de enfermedades complejas y la realización de <strong>Estudios Cardiovasculares en Medellín</strong>.
              </p>

              <div className="mt-8">
                <h3 className="text-[1rem] font-bold text-[#0F172A] mb-4">
                  Experto en el manejo de:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {managedConditions.map((condition, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-[14px] font-medium text-[#1E293B] transition-all hover:border-[#1080A0]/30 hover:bg-[#F8FAFC]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#1080A0]" />
                      {condition}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 rounded-2xl bg-[#F1F5F9]/50 p-6 border border-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1080A0] shadow-sm">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[1.25rem] font-bold text-[#0F172A]">+15 años</p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">de experiencia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-[#F1F5F9]/50 p-6 border border-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1080A0] shadow-sm">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Formación en:</p>
                    <p className="text-[13px] font-bold text-[#0F172A]">Especialista en Medicina Interna</p>
                    <p className="text-[11px] text-[#1080A0]">Venezuela</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Approach content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-tight text-[#0F172A]">
              Atención Médica Integral en Medellín
            </h2>
            <p className="mt-6 text-[1rem] leading-[1.6] text-[#64748B]">
              El Dr. Willmer Obregón ofrece un enfoque que combina el rigor científico con una atención profundamente humana. Buscamos entender el origen de tus síntomas para brindarte tranquilidad y salud mediante <strong>estudios cardiovasculares</strong> precisos.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group rounded-[1.5rem] bg-white p-6 shadow-sm border border-[#E2E8F0] transition-all hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 className="mt-4 text-[1rem] font-bold text-[#0F172A]">Atención personalizada</h3>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-[#64748B]">Atención empática y enfocada en tus necesidades individuales.</p>
              </div>

              <div className="group rounded-[1.5rem] bg-white p-6 shadow-sm border border-[#E2E8F0] transition-all hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                </div>
                <h3 className="mt-4 text-[1rem] font-bold text-[#0F172A]">Diagnósticos precisos</h3>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-[#64748B]">Utilizamos tecnología avanzada para detectar arritmias y patrones cardiacos.</p>
              </div>

              <div className="group rounded-[1.5rem] bg-white p-6 shadow-sm border border-[#E2E8F0] transition-all hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="mt-4 text-[1rem] font-bold text-[#0F172A]">Enfoque integral</h3>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-[#64748B]">Consideramos tanto los aspectos físicos como emocionales de tu salud.</p>
              </div>

              <div className="group rounded-[1.5rem] bg-white p-6 shadow-sm border border-[#E2E8F0] transition-all hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M18 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="mt-4 text-[1rem] font-bold text-[#0F172A]">Seguimiento continuo</h3>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-[#64748B]">Acompañamiento cercano y respuesta a tus dudas vía WhatsApp.</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white p-8 border border-[#E2E8F0] shadow-sm">
              <h4 className="text-[14px] font-bold text-[#1080A0] uppercase tracking-wide">Compromiso y Ética Profesional</h4>
              <p className="mt-4 text-[0.9375rem] leading-[1.6] text-[#1E293B]">
                Mi compromiso es brindarte una atención ética, profesional y cercana. Cada procedimiento, desde el Holter hasta la consulta clínica, está diseñado para tu seguridad y comodidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;