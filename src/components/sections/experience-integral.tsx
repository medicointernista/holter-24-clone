import React from 'react';
import { Stethoscope, MapPin, Target, Heart, Users, CircleCheck as CheckCircle2, ShieldCheck, Award, GraduationCap } from 'lucide-react';

const ExperienceIntegral = () => {
  return (
    <section className="bg-[#F8F9FA] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          
          {/* Left Column: Trajectory & Experience */}
          <div className="flex flex-col">
            <div className="rounded-[2rem] border border-[#E2E8F0] bg-white p-8 md:p-12 shadow-medical relative h-full">
              {/* Badge/Overline */}
              <span className="text-[14px] font-semibold uppercase tracking-wider text-[#1080A0] block mb-4">
                ÁREAS DE EXPERIENCIA
              </span>
              
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
                Trayectoria en Estudios Cardiovasculares y Medicina Interna
              </h2>
              
              <p className="text-[1.125rem] leading-[1.6] text-[#64748B] mb-8">
                El Dr. Willmer Obregón es especialista en Medicina Interna con más de 15 años de experiencia en el diagnóstico de enfermedades complejas y la realización de <strong>Estudios Cardiovasculares en Medellín</strong>.
              </p>

              <div className="space-y-6">
                <h4 className="text-[1.125rem] font-bold text-[#1E293B]">
                  Experto en el manejo de:
                </h4>
                
                <ul className="flex flex-wrap gap-3">
                  {[
                    "Obesidad y control de peso",
                    "Diabetes e hipertensión arterial",
                    "Enfermedades renales y de tiroides",
                    "Colon irritable, gastritis e hipotiroidismo",
                    "Fibromialgia y enfermedades crónicas"
                  ].map((tag, idx) => (
                    <li 
                      key={idx} 
                      className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8F9FA] px-4 py-2 text-[0.875rem] font-medium text-[#1E293B] shadow-sm transition-colors hover:border-[#1080A0] hover:bg-white"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#1080A0]" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats/Badges Row */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 rounded-2xl bg-[#E1F1F6] p-5 border border-white/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1080A0] shadow-sm">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-bold text-[#1E293B] leading-tight">+15 años</p>
                    <p className="text-[0.75rem] font-medium uppercase tracking-wider text-[#1080A0]">DE EXPERIENCIA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#F8F9FA] p-5 border border-[#E2E8F0]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1080A0] shadow-sm">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[0.875rem] font-bold text-[#1E293B] leading-tight">Especialista en Medicina Interna</p>
                    <p className="text-[0.75rem] font-medium text-[#1080A0] uppercase tracking-wider">Venezuela</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Integral Care Philosophy */}
          <div className="flex flex-col">
            <h3 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
              Atención Médica Integral en Medellín
            </h3>
            
            <p className="text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B] mb-12">
              El Dr. Willmer Obregón ofrece un enfoque que combina el rigor científico con una atención profundamente humana. Buscamos entender el origen de tus síntomas para brindarte tranquilidad y salud mediante <strong>estudios cardiovasculares</strong> precisos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-7 rounded-[1.5rem] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-5">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#1E293B] mb-2">Atención personalizada</h4>
                <p className="text-[0.875rem] leading-[1.6] text-[#64748B]">
                  Atención empática y enfocada en tus necesidades individuales.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-7 rounded-[1.5rem] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#1E293B] mb-2">Diagnósticos precisos</h4>
                <p className="text-[0.875rem] leading-[1.6] text-[#64748B]">
                  Utilizamos tecnología avanzada para detectar arritmias y patrones cardiacos.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-7 rounded-[1.5rem] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#1E293B] mb-2">Enfoque integral</h4>
                <p className="text-[0.875rem] leading-[1.6] text-[#64748B]">
                  Consideramos tanto los aspectos físicos como emocionales de tu salud.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-7 rounded-[1.5rem] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#1E293B] mb-2">Seguimiento continuo</h4>
                <p className="text-[0.875rem] leading-[1.6] text-[#64748B]">
                  Acompañamiento cercano y respuesta a tus dudas vía WhatsApp.
                </p>
              </div>
            </div>

            {/* Bottom Statement Card */}
            <div className="mt-8 p-7 rounded-[1.5rem] border border-[#FEF3C7] bg-[#FFFBEB] shadow-sm">
              <h4 className="text-[1rem] font-bold text-[#92400E] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Compromiso y Ética Profesional
              </h4>
              <p className="text-[0.9375rem] leading-[1.6] text-[#92400E]">
                Mi compromiso es brindarte una atención ética, profesional y cercana. Cada procedimiento, desde el Holter hasta la consulta clínica, está diseñado para tu seguridad y comodidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceIntegral;