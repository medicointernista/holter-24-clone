"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Qué es el Monitoreo Holter 24 horas?",
    answer: "Es un dispositivo portátil que registra la actividad eléctrica del corazón de manera continua durante 24 horas. A diferencia de un electrocardiograma convencional que dura solo unos segundos, el Holter permite captar arritmias o anomalías que ocurren de forma esporádica durante tus actividades diarias o mientras duermes.",
  },
  {
    question: "¿Requiere alguna preparación especial?",
    answer: "No requiere ayuno ni hospitalización. Se recomienda bañarse antes de la cita, ya que no podrá mojar el dispositivo durante las 24 horas del estudio. Debe usar ropa cómoda (preferiblemente una camisa o blusa con botones al frente) y evitar el uso de cremas o lociones en el pecho para asegurar una buena adhesión de los electrodos.",
  },
  {
    question: "¿Es seguro y cómodo el procedimiento?",
    answer: "Es un procedimiento completamente no invasivo, indoloro y seguro. El dispositivo es pequeño (similar al tamaño de un celular pequeño o un busca) y liviano. Se lleva en una pequeña funda sujeta a la cintura o colgada, permitiéndote realizar casi todas tus actividades normales, excepto aquellas que involucren agua.",
  },
  {
    question: "¿Cuándo debo consultar por síntomas cardíacos?",
    answer: "Si experimentas palpitaciones, sensación de latidos irregulares, mareos inexplicables, desmayos (síncope) o dolor en el pecho, es fundamental realizar un estudio. También está indicado para evaluar la efectividad de medicamentos para el corazón o después de haber tenido un evento cardiovascular previo.",
  },
  {
    question: "¿Cuánto tiempo debo esperar por la cita y los resultados?",
    answer: "Contamos con una disponibilidad rápida, generalmente de 1 a 2 días hábiles para la asignación de cupos. Una vez finalizado el monitoreo de 24 horas, el Dr. Willmer Obregón realiza el análisis experto de los datos, entregando un informe detallado y personalizado en un tiempo breve.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-[#F8F9FA] overflow-hidden">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#E1F1F6] opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Header Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#E1F1F6]/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1080A0] shadow-sm backdrop-blur-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              Información al paciente
            </div>
            
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-tight text-[#0F172A] mb-4">
              Preguntas Frecuentes
            </h2>
            
            <p className="text-[1rem] leading-[1.6] text-[#64748B] max-w-md">
              Resolvemos tus dudas sobre el monitoreo Holter y la consulta con el Dr. Willmer Obregón.
            </p>
          </div>

          {/* Right Accordion Content */}
          <div className="lg:col-span-7 w-full flex flex-col gap-3">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "group overflow-hidden rounded-[1rem] border transition-all duration-300",
                  openIndex === index 
                    ? "border-[#1080A0] bg-white shadow-md" 
                    : "border-[#E2E8F0] bg-white hover:border-[#1080A0]/50"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className={cn(
                    "text-[1rem] font-semibold leading-[1.4] transition-colors duration-200",
                    openIndex === index ? "text-[#1080A0]" : "text-[#1E293B]"
                  )}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 flex-shrink-0 text-[#64748B] transition-transform duration-300 ease-in-out",
                      openIndex === index && "rotate-180 text-[#1080A0]"
                    )}
                  />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-[0.875rem] leading-[1.6] text-[#64748B] border-t border-[#F1F5F9] mx-6">
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;