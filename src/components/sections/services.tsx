import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    title: "Monitoreo Holter 24 horas",
    description: "Detecta arritmias que un electrocardiograma normal no capta. Procedimiento cómodo, no invasivo, pequeño y liviano. Monitoreo continuo durante 24 horas mientras realizas tus actividades normales. Informe completo y personalizado con análisis y recomendaciones del Dr. Willmer Obregón.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97a64b44-91da-4112-9daf-4ae102c188a2-holter-24-vercel-app/assets/images/images_3.png",
    alt: "Equipo de monitoreo Holter 24 horas en Medellín para estudios cardiovasculares",
    whatsappLink: "https://api.whatsapp.com/send?phone=573053979628&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20el%20Holter%2024%20horas."
  },
    {
      title: "Electrocardiograma",
      description: "Estudio rápido y eficaz de la actividad eléctrica del corazón para detectar anomalías básicas.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/97a64b44-91da-4112-9daf-4ae102c188a2/electrocardiograma-1769391164191.webp?width=8000&height=8000&resize=contain",
      alt: "Dr. Willmer Obregón realizando electrocardiograma en Medellín",
      whatsappLink: "https://api.whatsapp.com/send?phone=573053979628&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20el%20electrocardiograma."
    },
    {
      title: "Mapa 24 horas",
      description: "Monitoreo ambulatorio de la presión arterial (MAPA) para un control riguroso de la hipertensión.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/97a64b44-91da-4112-9daf-4ae102c188a2/Mapa24-1769391145207.webp?width=8000&height=8000&resize=contain",
      alt: "Estudio de MAPA 24 horas para presión arterial en Medellín",
      whatsappLink: "https://api.whatsapp.com/send?phone=573053979628&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20el%20MAPA%20de%20presi%C3%B3n%20arterial."
    }
];

export default function MedicalServices() {
  return (
    <section id="servicios" className="relative bg-[#F8F9FA] py-16 md:py-24">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#E1F1F6] opacity-40 blur-3xl"></div>
      
      <div className="container mx-auto max-w-[1280px] px-6">
        {/* Section Heading */}
        <div className="mb-10 max-w-2xl md:mb-16">
          <h2 className="text-[1.875rem] font-bold leading-[1.2] tracking-tight text-[#0F172A] md:text-[2.25rem]">
            Estudios Cardiovasculares en Medellín y Consulta Especializada
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Tecnología avanzada y atención humana para el diagnóstico y tratamiento de enfermedades cardiovasculares y crónicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden md:h-52">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-[1.125rem] font-semibold leading-[1.4] tracking-tight text-[#0F172A] transition-colors group-hover:text-[#1080A0]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-[#64748B] line-clamp-4 md:line-clamp-none">
                  {service.description}
                </p>
                
                {/* CTA Link */}
                <div className="mt-auto pt-5">
                  <a 
                    href={service.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[0.875rem] font-bold text-[#1080A0] transition-opacity hover:opacity-80"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}