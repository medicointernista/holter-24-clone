import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  Stethoscope, 
  HeartPulse, 
  FileText, 
  ClipboardCheck, 
  HelpCircle 
} from 'lucide-react';

const benefitsData = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Diagnóstico Preciso",
    description: "El Holter detecta arritmias y patrones que un electro normal no capta."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Monitoreo 24/7",
    description: "Registramos la actividad de tu corazón durante todo un día mientras realizas tus actividades normales."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Disponibilidad rápida",
    description: "Tiempos de espera de 1–2 días para cupos."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Análisis experto",
    description: "El Dr. Obregón evalúa el impacto de medicamentos o la respuesta de tu corazón al ejercicio."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Procedimiento Cómodo y Seguro",
    description: "El dispositivo es pequeño, liviano, no causa dolor y es completamente no invasivo."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Informe Detallado y Personalizado",
    description: "Recibirás un análisis completo con recomendaciones específicas para tu caso."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Revisión y criterio clínico",
    description: "Por Dr. Willmer Obregón; determina si el paciente espera consulta o se deriva a urgencias."
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Respuestas claras",
    description: "Finalmente, entenderás el origen de tus síntomas."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Decorative background element */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-3xl opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header content */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
            Beneficios del Monitoreo Holter 24 horas en Medellín
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B]">
            Realizamos <strong className="font-semibold text-[#0F172A]">Estudios Cardiovasculares</strong> de alta calidad para detectar arritmias y mejorar tu salud cardiaca.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start gap-3 md:gap-4 p-5 md:p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-lg"
            >
              {/* Icon container */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                {React.cloneElement(benefit.icon as React.ReactElement, { size: 20 })}
              </div>
              
              {/* Text content */}
              <div className="mt-1">
                <h3 className="text-[0.9375rem] md:text-[1rem] font-bold leading-[1.4] text-[#1E293B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[0.75rem] md:text-[0.875rem] leading-[1.5] text-[#64748B] line-clamp-3 md:line-clamp-none">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;