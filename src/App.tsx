import React, { useState } from 'react';
import { 
  Wrench, 
  Thermometer, 
  Settings, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Snowflake,
  Flame,
  Award,
  Users,
  Camera,
  Home,
  Grid,
  Mail
} from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

import logoUrl from './logo.png';
import videoHeroUrl from './videohero.mp4';
import headerImgUrl from './header.png';

const Services = [
  {
    title: "Cambio de Tanque",
    desc: "Reemplazo de tanques deteriorados o averiados del radiador para evitar fugas y sobrecalentamientos.",
    icon: Wrench
  },
  {
    title: "Radiadores en Aluminio",
    desc: "Fabricacion y reparacion especializada utilizando aluminio de alta calidad y soldadura TIG.",
    icon: Settings
  },
  {
    title: "Aire Acondicionado",
    desc: "Diagnostico completo, carga de gas y reparacion de sistemas de aire acondicionado automotriz.",
    icon: Snowflake
  },
  {
    title: "Reparacion de Radiadores",
    desc: "Diagnostico y reparacion de fugas, daños estructurales y obstrucciones internas.",
    icon: Flame
  },
  {
    title: "Soldadura de Tanques",
    desc: "Trabajos especializados de reparacion y soldadura de tanques de gasolina con protocolos de seguridad.",
    icon: ShieldCheck
  },
  {
    title: "Soldaduras Especiales",
    desc: "Trabajos de soldadura en aluminio y otros metales para componentes automotrices.",
    icon: Wrench
  }
];

const Problems = [
  "El carro se esta calentando constantemente",
  "El radiador presenta fugas o goteos",
  "El tanque del radiador esta agrietado o dañado",
  "El aire acondicionado dejo de enfriar",
  "Necesitas fabricar un radiador a medida",
  "Requieres soldadura especializada en aluminio"
];

function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showWaMenu, setShowWaMenu] = useState(false);
  const whatsappUrl = "https://wa.me/573046106795?text=Hola,%20encontre%20Radiadores%20Medellín%20A&D%20y%20necesito%20informacion%20sobre%20un%20servicio%20para%20mi%20vehiculo.";
  const whatsappUrl2 = "https://wa.me/573157687743?text=Hola,%20encontre%20Radiadores%20Medellín%20A&D%20y%20necesito%20informacion%20sobre%20un%20servicio%20para%20mi%20vehiculo.";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 scroll-smooth pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between items-center py-2">
            <div className="flex-shrink-0 flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <a href="#">
                <img src={logoUrl} alt="Radiadores Medellín A&D" className="h-16 lg:h-20 w-auto transition-all drop-shadow-md hover:scale-105" />
              </a>
              <div className="text-white font-mono font-bold text-xs md:text-sm lg:text-base flex flex-col items-center">
                 <span className="hidden md:inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#D71920] pr-1 animate-typing-text">
                   304 610 6795 / 315 768 7743
                 </span>
                 <span className="md:hidden text-[#D71920] tracking-widest mt-1">
                   304 610 6795 / 315 768 7743
                 </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center ml-auto">
              <a href="#problema" className="text-gray-300 hover:text-white transition-colors">¿Problemas?</a>
              <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
              <a href="#fabricacion" className="text-gray-300 hover:text-white transition-colors">Fabricacion</a>
              <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">Trabajos</a>
              <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-[#D71920] hover:bg-[#b0151a] text-white px-6 py-2 rounded font-medium transition-colors">
                Cotizar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <video 
            autoPlay 
            loop
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105 pointer-events-none"
          >
            <source src={videoHeroUrl} type="video/mp4" />
          </video>
          {/* Degradado protector suave: Oscuro a la izquierda (donde va el texto), transparente a la derecha */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D71920]/40 via-transparent to-transparent opacity-60 mix-blend-screen" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 animate-fade-in-up">
                <span className="flex h-2 w-2 rounded-full bg-[#D71920] animate-pulse"></span>
                <span className="text-gray-300 font-medium text-sm tracking-wide">Taller especializado en Medellín</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up delay-100 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                SOLUCIONES EXPERTAS EN RADIADORES <br />
                <span className="text-shiny-effect drop-shadow-[0_0_15px_rgba(215,25,32,0.8)]">Radiadores medellín A&D</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fade-in-up delay-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-medium">
                Reparacion, fabricacion a medida en aluminio y soldadura automotriz. Calidad industrial, durabilidad comprobada y el mejor respaldo tecnico para tu vehiculo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#D71920] hover:bg-[#b0151a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(215,25,32,0.3)] hover:shadow-[0_0_40px_rgba(215,25,32,0.5)] hover:-translate-y-1">
                  <WhatsAppIcon size={24} />
                  <span>Cotizar servicio urgente</span>
                </a>
                <a href="tel:+573157687743" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
                  <Phone size={24} />
                  <span>Llamar ahora</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4 animate-fade-in-up delay-300">
               <div className="glass-panel rounded-2xl p-8 relative">
                 <div className="absolute -top-6 -right-6 text-[#D71920] opacity-20">
                   <ShieldCheck size={120} />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Award className="text-[#D71920]" size={24} />
                      Garantia de Calidad
                   </h3>
                   <ul className="space-y-4">
                     {[
                       "Diagnostico preciso y honesto",
                       "Soldadura 100% garantizada",
                       "Materiales de alta resistencia",
                       "Atencion rapida en Medellín"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                         <div className="w-6 h-6 rounded-full bg-[#D71920]/20 flex items-center justify-center flex-shrink-0 text-[#D71920]">
                           <CheckCircle2 size={14} />
                         </div>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse-slow opacity-60">
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Deslizar</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D71920] to-transparent" />
        </div>
      </section>

      {/* Problema Section */}
      <section id="problema" className="py-20 bg-[#111111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D71920]/10 text-[#D71920] mb-6 text-sm font-bold">
                <AlertTriangle size={16} /> DIAGNOSTICO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Que problema presenta tu vehiculo?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                El sistema de refrigeracion es vital para la vida util de tu motor. Ignorar las fallas puede resultar en daños costosos. Nosotros diagnosticamos y resolvemos estos problemas:
              </p>
              <ul className="space-y-4">
                {Problems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#D71920] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#D71920]/10 blur-3xl rounded-full" />
               <h3 className="text-2xl font-bold text-white mb-4">Evita daños mayores en tu motor</h3>
               <p className="text-gray-400 mb-6">Envianos una foto o video de tu radiador por WhatsApp y recibe una evaluacion inicial sin compromiso.</p>
               <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded font-bold transition-all">
                <Camera size={20} />
                Enviar foto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Soluciones integrales para tu vehiculo</h2>
            <p className="text-gray-400 text-lg">
              Contamos con la experiencia y tecnologia para reparar, fabricar y mantener los sistemas de enfriamiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services.map((srv, idx) => (
              <div key={idx} className="bg-metallic-gradient p-8 rounded-xl group hover:border-[#D71920]/50 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#111] rounded-lg flex items-center justify-center mb-6 border border-white/5 group-hover:bg-[#D71920] group-hover:border-transparent transition-colors">
                  <srv.icon className="text-gray-300 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{srv.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{srv.desc}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-[#D71920] font-medium flex items-center gap-2 group-hover:text-white transition-colors text-sm uppercase tracking-wide">
                  Cotizar servicio <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Section */}
      <section id="fabricacion" className="py-24 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D71920] font-bold tracking-wider text-sm mb-4 block">HECHO A MEDIDA</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Fabricamos radiadores totalmente en aluminio</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Cuando las refacciones originales no son suficientes o buscas mayor rendimiento, desarrollamos radiadores en aluminio personalizados. Ideales para vehiculos clasicos, de competencia, maquinaria pesada o modificaciones especiales.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                   <ShieldCheck className="text-[#D71920] mb-3" size={28} />
                   <h4 className="text-white font-bold mb-2">Mayor durabilidad</h4>
                   <p className="text-sm text-gray-400">Soldaduras 100% en aluminio, sin plasticos que se tuesten.</p>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                   <Thermometer className="text-[#D71920] mb-3" size={28} />
                   <h4 className="text-white font-bold mb-2">Mejor enfriamiento</h4>
                   <p className="text-sm text-gray-400">Diseños de paneles optimizados para maxima transferencia termica.</p>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b0151a] text-white px-8 py-4 rounded font-bold transition-all">
                Cotizar fabricacion a medida
              </a>
            </div>
            <div className="relative">
               <img src={headerImgUrl} alt="Proceso de soldadura en aluminio" className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Aire Acondicionado Banner */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#111111] py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#1a1a1a] rounded-2xl border border-[#D71920]/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute right-0 top-0 w-64 h-64 bg-[#D71920]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
             <div className="relative z-10">
               <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                 <Snowflake className="text-[#D71920]" size={32} />
                 ¿Tu aire acondicionado no enfria?
               </h3>
               <p className="text-gray-400 text-lg max-w-2xl">
                 Revisamos fugas, reparamos compresores, cambiamos evaporadores y realizamos cargas de gas con equipos de precision. Recupera el confort en tu cabina.
               </p>
             </div>
             <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-shrink-0 bg-white text-[#0a0a0a] hover:bg-gray-200 px-8 py-4 rounded font-bold transition-all shadow-lg relative z-10 whitespace-nowrap">
               Agendar revision
             </a>
           </div>
        </div>
      </section>

      {/* Confianza / Nosotros */}
      <section id="nosotros" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Por que elegirnos en Medellín</h2>
            <p className="text-gray-400 text-lg">
              Años de experiencia combinados con tecnicas modernas de soldadura y diagnostico nos permiten garantizar cada trabajo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, title: "Atencion Especializada", desc: "Trato directo y honesto" },
              { icon: Settings, title: "Taller Equipado", desc: "Herramientas de precision" },
              { icon: ShieldCheck, title: "Trabajos Garantizados", desc: "Respaldo en cada reparacion" },
              { icon: Award, title: "Experiencia Tecnica", desc: "Expertos en aluminio" }
            ].map((feature, idx) => (
              <div key={idx} className="p-6">
                <div className="w-16 h-16 mx-auto bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 border border-white/5 shadow-[0_0_15px_rgba(215,25,32,0.1)]">
                  <feature.icon className="text-[#D71920]" size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-24 bg-[#111111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="text-[#D71920] font-bold tracking-wider text-sm mb-4 block">NUESTROS TRABAJOS</span>
           <h2 className="text-4xl font-bold mb-12 text-white">Resultados comprobados</h2>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               "https://www.radiadorescopar.com/wp-content/uploads/2022/01/Mantenimiento-de-radiadores-y-tanques.jpg",
               "https://www.semana.com/resizer/v2/ZB3P4J3OLRG65HAITZTUX7GP3Q.jpg?smart=true&auth=96bc2054da1f5af58bc69e9283acd9b66a3801d86acb4de47a8b819d3f3ab94c&width=1280&height=720",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbqt7m-ffhRiE2o5cb_HtQKKwB7qEuRi89CY8Ojvm_l4kK8VzQCoSWxbK&s=10",
               "https://radiadoresingeradcol.com/wp-content/uploads/2024/06/servicio-tecnico-para-pagina-1.png",
               "https://thermecs.co/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqm9arff4%2Fimage%2Fupload%2Fv1768855830%2Fbenefits_radiadores_top_img_8eae236749.png&w=3840&q=75"
             ].map((url, idx) => (
                <div key={idx} className="aspect-square bg-[#1a1a1a] rounded-lg border border-white/5 overflow-hidden group">
                  <img src={url} alt={`Trabajo realizado ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
             ))}
           </div>
           
           <div className="mt-12">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white bg-[#1a1a1a] px-8 py-4 rounded font-bold border border-white/10 hover:bg-[#222] transition-colors">
                 Ver mas en nuestro WhatsApp
              </a>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D71920]/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Necesitas reparar tu radiador hoy?</h2>
          <p className="text-xl text-gray-400 mb-10">
            No dejes que un problema de temperatura deje tu vehiculo inoperativo. Contactanos ahora y recibe atencion experta.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b0151a] text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-[#D71920]/20">
            <MessageCircle size={24} />
            Hablar con un especialista
          </a>
        </div>
      </section>

      {/* Ubicacion y Mapa */}
      <section id="ubicacion" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D71920]/5 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D71920] font-bold tracking-wider text-sm mb-4 block">DONDE ENCONTRARNOS</span>
              <h2 className="text-4xl font-bold mb-6 text-white">Visita nuestro taller</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Estamos ubicados en un punto estrategico de Medellín para brindarte el mejor servicio. Trae tu vehiculo y recibe una asesoria tecnica especializada.
              </p>
              
              <div className="flex items-start gap-4 bg-[#111111] p-6 rounded-2xl border border-white/5 mb-8">
                <div className="bg-[#D71920]/10 p-4 rounded-xl shrink-0">
                  <MapPin className="text-[#D71920]" size={32} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Sede Principal</h3>
                  <p className="text-gray-400 mb-1">Carrera 50 #70-08</p>
                  <p className="text-gray-400">Barrio Lovaina, Medellín</p>
                </div>
              </div>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Carrera+50+%2370-08+barrio+Lovaina+Medellín" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1"
              >
                <MapPin size={20} />
                <span>Llevame alli (Google Maps)</span>
              </a>
            </div>
            
            <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe 
                src="https://maps.google.com/maps?q=Carrera%2050%2370-08%20barrio%20Lovaina%20Medellín&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <a href="#">
                  <img src={logoUrl} alt="Radiadores Medellín A&D" className="h-16 w-auto grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                </a>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Taller especializado en radiadores, fabricacion en aluminio, soldaduras especiales y aire acondicionado automotriz en Medellín, Colombia.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wider">CONTACTO</h4>
              <ul className="space-y-4">
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                    <WhatsAppIcon size={18} />
                    <span>Linea Principal: 304 610 6795</span>
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                    <WhatsAppIcon size={18} />
                    <span>Linea Alterna: 315 768 7743</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Aura_kristina79@hotmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                    <Mail size={18} />
                    <span className="break-all">Aura_kristina79@hotmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Navegacion</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#problema" className="hover:text-[#D71920] transition-colors">Diagnostico</a></li>
                <li><a href="#servicios" className="hover:text-[#D71920] transition-colors">Servicios</a></li>
                <li><a href="#fabricacion" className="hover:text-[#D71920] transition-colors">Fabricacion a medida</a></li>
                <li><a href="#nosotros" className="hover:text-[#D71920] transition-colors">Nosotros</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Radiadores Medellín A&D. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Desarrollo: <a href="https://www.jacomeovalle.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white font-bold transition-colors">WEBCINCODEV</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA (Desktop only) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end group">
        {/* Menu emergente de WhatsApp */}
        <div className="mb-4 bg-[#111111] border border-white/10 rounded-2xl p-3 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col gap-2 min-w-[220px]">
          <p className="text-white text-sm font-bold px-2 pb-2 border-b border-white/10 mb-1">¿Con quien deseas chatear?</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl transition-colors">
            <WhatsAppIcon size={20} className="text-[#25D366]" />
            <span className="text-gray-200 text-sm font-medium">Linea Principal</span>
          </a>
          <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl transition-colors">
            <WhatsAppIcon size={20} className="text-[#25D366]" />
            <span className="text-gray-200 text-sm font-medium">Linea Alterna</span>
          </a>
        </div>
        {/* Boton Flotante */}
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
          <WhatsAppIcon size={32} />
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 z-50 flex justify-around items-center px-2 py-3 pb-safe-area shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <a href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors flex-1">
          <Home size={22} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Inicio</span>
        </a>
        <a href="tel:+573157687743" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors flex-1">
          <Phone size={22} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Llamar</span>
        </a>
        <button onClick={() => setShowWaMenu(true)} className="flex flex-col items-center gap-1 text-[#25D366] flex-1">
          <div className="bg-[#25D366]/10 p-1.5 rounded-full mb-0.5">
             <WhatsAppIcon size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </button>
        <a href="#servicios" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors flex-1">
          <Grid size={22} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Servicios</span>
        </a>
      </div>

      {/* Menu Modal WhatsApp (Movil) */}
      {showWaMenu && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-end justify-center pb-24 px-4" onClick={() => setShowWaMenu(false)}>
           <div className="bg-[#111111] w-full rounded-3xl p-5 border border-white/10 shadow-2xl animate-fade-in-up" onClick={e => e.stopPropagation()}>
             <h3 className="text-white font-bold mb-4 text-lg text-center">¿Con quien deseas chatear?</h3>
             <div className="flex flex-col gap-3">
               <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl active:bg-white/10 transition-colors border border-white/5">
                 <div className="bg-[#25D366]/20 p-2 rounded-full">
                    <WhatsAppIcon size={28} className="text-[#25D366]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold">Linea Principal</span>
                    <span className="text-gray-400 text-sm">304 610 6795</span>
                 </div>
               </a>
               <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl active:bg-white/10 transition-colors border border-white/5">
                 <div className="bg-[#25D366]/20 p-2 rounded-full">
                    <WhatsAppIcon size={28} className="text-[#25D366]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold">Linea Alterna</span>
                    <span className="text-gray-400 text-sm">315 768 7743</span>
                 </div>
               </a>
             </div>
             <button onClick={() => setShowWaMenu(false)} className="w-full mt-4 p-4 text-gray-400 font-bold bg-white/5 rounded-2xl active:bg-white/10">Cancelar</button>
           </div>
        </div>
      )}
    </div>
  );
}

export default App;
