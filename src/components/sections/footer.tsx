"use client";

import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F9FA] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: Bio */}
          <div className="bg-white p-8 rounded-[1.5rem] border border-[#E2E8F0] shadow-sm">
            <h2 className="text-[1.125rem] font-bold text-[#0F172A] mb-4">Dr. Willmer Obregón</h2>
            <p className="text-[0.875rem] leading-[1.6] text-[#64748B] mb-6">
              Especialista en Medicina Interna en Medellín, con enfoque personalizado y comprensivo hacia el cuidado de la salud. Acompañamiento en condiciones cardiovasculares y metabólicas con tratamiento basado en evidencia.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/tu.internista.favorito/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#64748B] hover:text-[#1080A0] hover:border-[#1080A0] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/tu_internista_favorito/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#64748B] hover:text-[#1080A0] hover:border-[#1080A0] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@tuinternistafavorito" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#64748B] hover:text-[#1080A0] hover:border-[#1080A0] transition-colors">
                <FaTiktok size={18} />
              </a>
              <a href="https://www.youtube.com/@tuinternistafavorito" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#64748B] hover:text-[#1080A0] hover:border-[#1080A0] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="bg-white p-8 rounded-[1.5rem] border border-[#E2E8F0] shadow-sm">
            <h2 className="text-[1.125rem] font-bold text-[#0F172A] mb-6">Información de contacto</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#1080A0] shrink-0 mt-1" />
                <span className="text-[0.875rem] text-[#64748B] leading-tight">
                  Biencrecer, Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia, 050030
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="tel:+573011505174" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">+57 301 150 5174</a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="tel:+573009895852" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">+57 300 989 5852</a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="tel:+573053979628" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">+57 305 397 9628</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Emails */}
          <div className="bg-white p-8 rounded-[1.5rem] border border-[#E2E8F0] shadow-sm">
            <h2 className="text-[1.125rem] font-bold text-[#0F172A] mb-6">Correo y horarios</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="mailto:consulta@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">consulta@internistamedellin.com</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="mailto:asistente@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">asistente@internistamedellin.com</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="mailto:estudios@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">estudios@internistamedellin.com</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#1080A0] shrink-0" />
                <a href="mailto:procedimientos@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0]">procedimientos@internistamedellin.com</a>
              </li>
              <li className="flex gap-4 pt-2">
                <Clock className="w-5 h-5 text-[#1080A0] shrink-0" />
                <div>
                  <p className="text-[0.75rem] font-bold text-[#0F172A] uppercase tracking-wider mb-1">Horario de atención</p>
                  <p className="text-[0.875rem] text-[#64748B]">Lunes a viernes: 8am a 5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[0.875rem] text-[#64748B]">
            2026 <a href="https://localrank.com.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1080A0] transition-colors">LocalRank</a>. Todos los derechos reservados
          </div>
          
            <div className="flex items-center">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/97a64b44-91da-4112-9daf-4ae102c188a2/Wilmer-Obregon-Logo-1769391260059.png?width=8000&height=8000&resize=contain"
                alt="Dr. Willmer Obregón - Médico Internista Medellín - Holter 24 horas"
                className="h-12 w-auto"
                width="200"
                height="48"
                loading="lazy"
              />
            </div>

          <a 
            href="#inicio" 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748B] hover:text-[#1080A0] transition-colors"
          >
            Volver arriba
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E1F1F6] text-[#1080A0]">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;