import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  ChevronLeft,
  X,
  ZoomIn,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
  ShieldCheck,
  AlertTriangle,
  Snowflake,
  Flame,
  Award,
  Users,
  Camera,
  Home,
  Grid,
  Mail,
  Sun,
  Moon
} from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

import logoUrl from './logo.png';
import videoHeroUrl from './videohero.mp4';
import headerImgUrl from './header.png';
import img1Url from './1.jpeg';
import img2Url from './2.jpeg';

import galeria1 from './galeria/1.jpg';
import galeria2 from './galeria/2.jpg';
import galeria3 from './galeria/3.jpg';
import galeria4 from './galeria/4.jpg';
import galeria5 from './galeria/5.jpg';
import galeria6 from './galeria/6.jpg';
import galeria7 from './galeria/7.jpg';
import galeria8 from './galeria/8.jpg';

import videoGaleria1 from './galeria/radiadores.mp4';
import videoGaleria2 from './galeria/radiadores (1).mp4';
import videoGaleria3 from './galeria/radiadores (2).mp4';
import audioTrackUrl from './galeria/mickeyscat-adrenaline-619396.mp3';

const videoGalleryItems = [
  {
    src: videoGaleria1,
    title: "Mantenimiento y Reparación de Radiadores",
    category: "Procesos en Taller",
    desc: "Diagnóstico profundo de temperatura, sondeo especializado y sellado de alta resistencia."
  },
  {
    src: videoGaleria2,
    title: "Soldadura Especial TIG en Aluminio",
    category: "Soldadura de Precisión",
    desc: "Acabados reforzados y fabricación de tanques en aluminio con máxima durabilidad."
  },
  {
    src: videoGaleria3,
    title: "Pruebas Hidrostáticas y Control de Fugas",
    category: "Garantía de Calidad",
    desc: "Comprobación estricta bajo presión de cada radiador para certificar 100% de hermeticidad."
  }
];

const featuredGallery = [
  { src: img1Url, alt: "Fabricación y adaptación de radiadores en aluminio", title: "Fabricación a Medida en Aluminio" },
  { src: img2Url, alt: "Reparación técnica y mantenimiento especializado", title: "Reparación Especializada y Mantenimiento" }
];

const gridGallery = [
  { src: galeria1, alt: "Reparación y mantenimiento de radiadores en Medellín", title: "Mantenimiento Integral de Radiadores" },
  { src: galeria2, alt: "Fabricación de tanques de radiador en aluminio", title: "Tanques de Radiador en Aluminio Soldado" },
  { src: galeria3, alt: "Soldadura especializada de precisión TIG", title: "Soldadura TIG de Alta Resistencia" },
  { src: galeria4, alt: "Inspección técnica de sistema de enfriamiento automotriz", title: "Diagnóstico del Sistema de Refrigeración" },
  { src: galeria5, alt: "Servicio de carga y reparación de aire acondicionado", title: "Servicio y Carga de Aire Acondicionado" },
  { src: galeria6, alt: "Sondeo y limpieza profunda de panales de radiador", title: "Sondeo y Limpieza Interna de Panales" },
  { src: galeria7, alt: "Soldadura de tanques y componentes de aluminio", title: "Reparación y Soldadura de Tanques" },
  { src: galeria8, alt: "Pruebas de presión y diagnóstico de fugas", title: "Pruebas Hidrostáticas de Presión" },
];

const allGalleryImages = [...featuredGallery, ...gridGallery];

const Services = [
  {
    title: "Cambio de Tanque",
    desc: "Reemplazo de tanques deteriorados o averiados del radiador para evitar fugas y sobrecalentamientos.",
    icon: Wrench
  },
  {
    title: "Radiadores en Aluminio",
    desc: "Fabricación y reparación especializada utilizando aluminio de alta calidad y soldadura TIG.",
    icon: Settings
  },
  {
    title: "Aire Acondicionado",
    desc: "Diagnóstico completo, carga de gas y reparación de sistemas de aire acondicionado automotriz.",
    icon: Snowflake
  },
  {
    title: "Reparación de Radiadores",
    desc: "Diagnóstico y reparación de fugas, daños estructurales y obstrucciones internas.",
    icon: Flame
  },
  {
    title: "Soldadura de Tanques",
    desc: "Trabajos especializados de reparación y soldadura de tanques de gasolina con protocolos de seguridad.",
    icon: ShieldCheck
  },
  {
    title: "Soldaduras Especiales",
    desc: "Trabajos de soldadura en aluminio y otros metales para componentes automotrices.",
    icon: Wrench
  }
];

const Problems = [
  "El carro se está calentando constantemente",
  "El radiador presenta fugas o goteos",
  "El tanque del radiador está agrietado o dañado",
  "El aire acondicionado dejó de enfriar",
  "Necesitas fabricar un radiador a medida",
  "Requieres soldadura especializada en aluminio"
];

function App() {
  // Estado para Modo Oscuro (Dark) y Modo Claro (Light)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('site_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('site_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [videoEnded, setVideoEnded] = useState(false);
  const [showWaMenu, setShowWaMenu] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

  // Estados para el Carrusel de Videos Autoplay
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  const whatsappUrl = "https://wa.me/573046106795?text=Hola,%20encontré%20Radiadores%20Medellín%20A&D%20y%20necesito%20información%20sobre%20un%20servicio%20para%20mi%20vehículo.";
  const whatsappUrl2 = "https://wa.me/573157687743?text=Hola,%20encontré%20Radiadores%20Medellín%20A&D%20y%20necesito%20información%20sobre%20un%20servicio%20para%20mi%20vehículo.";

  // Reproducir automáticamente al cambiar de video
  useEffect(() => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.currentTime = 0;
      videoPlayerRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch(() => {
        if (videoPlayerRef.current) {
          videoPlayerRef.current.muted = true;
          setIsVideoMuted(true);
          videoPlayerRef.current.play().catch(() => {});
        }
      });
    }
    setVideoProgress(0);
  }, [activeVideoIndex]);

  // Al finalizar el video, pasar automáticamente al siguiente (Autoplay loop continuo)
  const handleVideoEnded = () => {
    setActiveVideoIndex((prev) => (prev + 1) % videoGalleryItems.length);
  };

  // Actualizar barra de progreso del video
  const handleTimeUpdate = () => {
    if (videoPlayerRef.current && videoPlayerRef.current.duration) {
      const pct = (videoPlayerRef.current.currentTime / videoPlayerRef.current.duration) * 100;
      setVideoProgress(pct);
    }
  };

  const togglePlayVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoPlayerRef.current) return;
    if (videoPlayerRef.current.paused) {
      videoPlayerRef.current.play();
      setIsVideoPlaying(true);
      if (isAudioPlaying && audioPlayerRef.current) {
        audioPlayerRef.current.play().catch(() => {});
      }
    } else {
      videoPlayerRef.current.pause();
      setIsVideoPlaying(false);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
    }
  };

  // Alternar el audio de la carpeta (mickeyscat-adrenaline-619396.mp3)
  const toggleAudio = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!audioPlayerRef.current) return;
    if (audioPlayerRef.current.paused) {
      audioPlayerRef.current.volume = 0.75;
      audioPlayerRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch((err) => {
        console.log("No se pudo iniciar el audio automáticamente:", err);
      });
    } else {
      audioPlayerRef.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const handlePrevVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveVideoIndex((prev) => (prev === 0 ? videoGalleryItems.length - 1 : prev - 1));
  };

  const handleNextVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveVideoIndex((prev) => (prev + 1) % videoGalleryItems.length);
  };

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCarouselIndex((prev) => (prev === null ? null : (prev === 0 ? allGalleryImages.length - 1 : prev - 1)));
  }, []);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCarouselIndex((prev) => (prev === null ? null : (prev === allGalleryImages.length - 1 ? 0 : prev + 1)));
  }, []);

  const handleCloseCarousel = useCallback(() => {
    setCarouselIndex(null);
  }, []);

  // Control de scroll y navegación por teclado (Esc, Flechas)
  useEffect(() => {
    if (carouselIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseCarousel();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [carouselIndex, handleCloseCarousel, handleNextImage, handlePrevImage]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 scroll-smooth pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4">
              <a href="#">
                <img src={logoUrl} alt="Radiadores Medellín A&D" className="h-14 sm:h-16 lg:h-20 w-auto transition-all drop-shadow-md hover:scale-105" />
              </a>
              <div className="text-white font-mono font-bold text-xs md:text-sm lg:text-base flex flex-col items-start sm:items-center">
                 <span className="hidden md:inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#D71920] pr-1 animate-typing-text">
                   304 610 6795
                 </span>
                 <span className="md:hidden text-[#D71920] tracking-widest text-xs font-mono font-bold">
                   304 610 6795
                 </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                <a href="#problema" className="text-gray-300 hover:text-white transition-colors">¿Problemas?</a>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
                <a href="#fabricacion" className="text-gray-300 hover:text-white transition-colors">Fabricación</a>
                <a href="#videos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"><Video size={14} className="text-[#D71920]" /> Videos</a>
                <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">Fotos</a>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-[#D71920] hover:bg-[#b0151a] text-white px-5 py-2 rounded font-medium transition-colors">
                  Cotizar
                </a>
              </div>

              {/* Botón Switch Modo Claro / Modo Oscuro */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                title={theme === 'dark' ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/10 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={18} className="text-amber-400" />
                    <span className="text-xs font-semibold">Claro</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} className="text-indigo-600" />
                    <span className="text-xs font-semibold">Oscuro</span>
                  </>
                )}
              </button>
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
                Reparación, fabricación a medida en aluminio y soldadura automotriz. Calidad industrial, durabilidad comprobada y el mejor respaldo técnico para tu vehículo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#D71920] hover:bg-[#b0151a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(215,25,32,0.3)] hover:shadow-[0_0_40px_rgba(215,25,32,0.5)] hover:-translate-y-1">
                  <WhatsAppIcon size={24} />
                  <span>Cotizar servicio urgente</span>
                </a>
                <a href="tel:+573046106795" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
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
                      Garantía de Calidad
                   </h3>
                   <ul className="space-y-4">
                     {[
                       "Diagnóstico preciso y honesto",
                       "Soldadura 100% garantizada",
                       "Materiales de alta resistencia",
                       "Atención rápida en Medellín"
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
                <AlertTriangle size={16} /> DIAGNÓSTICO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Qué problema presenta tu vehículo?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                El sistema de refrigeración es vital para la vida útil de tu motor. Ignorar las fallas puede resultar en daños costosos. Nosotros diagnosticamos y resolvemos estos problemas:
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
               <p className="text-gray-400 mb-6">Envíanos una foto o video de tu radiador por WhatsApp y recibe una evaluación inicial sin compromiso.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Soluciones integrales para tu vehículo</h2>
            <p className="text-gray-400 text-lg">
              Contamos con la experiencia y tecnología para reparar, fabricar y mantener los sistemas de enfriamiento.
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
                Cuando las refacciones originales no son suficientes o buscas mayor rendimiento, desarrollamos radiadores en aluminio personalizados. Ideales para vehículos clásicos, de competencia, maquinaria pesada o modificaciones especiales.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                   <ShieldCheck className="text-[#D71920] mb-3" size={28} />
                   <h4 className="text-white font-bold mb-2">Mayor durabilidad</h4>
                   <p className="text-sm text-gray-400">Soldaduras 100% en aluminio, sin plásticos que se tuesten.</p>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5">
                   <Thermometer className="text-[#D71920] mb-3" size={28} />
                   <h4 className="text-white font-bold mb-2">Mejor enfriamiento</h4>
                   <p className="text-sm text-gray-400">Diseños de paneles optimizados para máxima transferencia térmica.</p>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b0151a] text-white px-8 py-4 rounded font-bold transition-all">
                Cotizar fabricación a medida
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
                 ¿Tu aire acondicionado no enfría?
               </h3>
               <p className="text-gray-400 text-lg max-w-2xl">
                 Revisamos fugas, reparamos compresores, cambiamos evaporadores y realizamos cargas de gas con equipos de precisión. Recupera el confort en tu cabina.
               </p>
             </div>
             <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-shrink-0 bg-white text-[#0a0a0a] hover:bg-gray-200 px-8 py-4 rounded font-bold transition-all shadow-lg relative z-10 whitespace-nowrap">
               Agendar revisión
             </a>
           </div>
        </div>
      </section>

      {/* Confianza / Nosotros */}
      <section id="nosotros" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Por qué elegirnos en Medellín</h2>
            <p className="text-gray-400 text-lg">
              Años de experiencia combinados con técnicas modernas de soldadura y diagnóstico nos permiten garantizar cada trabajo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, title: "Atención Especializada", desc: "Trato directo y honesto" },
              { icon: Settings, title: "Taller Equipado", desc: "Herramientas de precisión" },
              { icon: ShieldCheck, title: "Trabajos Garantizados", desc: "Respaldo en cada reparación" },
              { icon: Award, title: "Experiencia Técnica", desc: "Expertos en aluminio" }
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

      {/* Carrusel de Videos en Acción (Autoplay) */}
      <section id="videos" className="py-24 bg-[#0d0d0d] border-t border-white/5 relative overflow-hidden">
        {/* Glow de fondo atmosférico */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D71920]/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D71920]/10 border border-[#D71920]/30 text-[#D71920] text-xs font-bold uppercase tracking-wider mb-4">
              <Video size={16} />
              <span>NUESTRO TALLER EN ACCIÓN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mira cómo trabajamos
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Transparencia y técnica comprobada. Observa en video los procesos reales de soldadura, diagnóstico y armado en nuestra sede de Medellín.
            </p>
          </div>

          {/* Reproductor Principal con Autoplay y Controles */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(215,25,32,0.15)] group">
              
              {/* Contenedor del Video */}
              <div className="relative aspect-video max-h-[580px] w-full flex items-center justify-center bg-black">
                <video
                  ref={videoPlayerRef}
                  src={videoGalleryItems[activeVideoIndex].src}
                  autoPlay
                  muted={isVideoMuted}
                  playsInline
                  onEnded={handleVideoEnded}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain"
                />

                {/* Overlay de Degradado Superior e Inferior para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                {/* Botón Central Grande de Play/Pause en hover */}
                <button
                  onClick={togglePlayVideo}
                  aria-label={isVideoPlaying ? "Pausar video" : "Reproducir video"}
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-[#D71920] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all transform hover:scale-110 active:scale-95 shadow-2xl opacity-0 group-hover:opacity-100 cursor-pointer z-20"
                >
                  {isVideoPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                </button>

                {/* Controles Flotantes Izquierda y Derecha para cambiar video */}
                <button
                  onClick={handlePrevVideo}
                  aria-label="Video anterior"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-[#D71920] text-white border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-md cursor-pointer"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNextVideo}
                  aria-label="Video siguiente"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-[#D71920] text-white border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-md cursor-pointer"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Badges de Información Superior */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2">
                  <span className="bg-[#D71920] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {videoGalleryItems[activeVideoIndex].category}
                  </span>
                  <span className="hidden sm:inline-block bg-black/60 backdrop-blur-md text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                    Video {activeVideoIndex + 1} de {videoGalleryItems.length}
                  </span>
                </div>

                {/* Elemento de Audio en bucle (mickeyscat-adrenaline-619396.mp3) */}
                <audio 
                  ref={audioPlayerRef} 
                  src={audioTrackUrl} 
                  loop 
                  preload="auto" 
                />

                {/* Botón de Sonido (Audio Track de la carpeta src/galeria) */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
                  <button
                    onClick={toggleAudio}
                    aria-label={isAudioPlaying ? "Silenciar audio" : "Activar audio"}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full border backdrop-blur-md transition-all cursor-pointer text-xs font-semibold shadow-lg ${
                      isAudioPlaying 
                        ? 'bg-[#D71920] hover:bg-[#b0151a] text-white border-white/30 shadow-[0_0_15px_rgba(215,25,32,0.6)]' 
                        : 'bg-black/70 hover:bg-black text-white border-white/20 hover:border-[#D71920]'
                    }`}
                  >
                    {isAudioPlaying ? (
                      <>
                        <Volume2 size={16} className="text-white animate-pulse" />
                        <span>Música activada</span>
                      </>
                    ) : (
                      <>
                        <VolumeX size={16} className="text-[#D71920]" />
                        <span>Activar audio</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Info Inferior y Barra de Progreso */}
                <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6">
                  {/* Barra de progreso de reproducción automática */}
                  <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden">
                    <div 
                      className="h-full bg-[#D71920] transition-all duration-150 rounded-full shadow-[0_0_8px_#D71920]" 
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                        {videoGalleryItems[activeVideoIndex].title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm max-w-2xl drop-shadow">
                        {videoGalleryItems[activeVideoIndex].desc}
                      </p>
                    </div>

                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b0151a] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0 self-start sm:self-auto cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      <span>Consultar este trabajo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Selector de los 3 videos (Tarjetas Interactivas con indicador activo) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {videoGalleryItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    idx === activeVideoIndex
                      ? 'bg-[#1a1a1a] border-[#D71920] shadow-[0_0_20px_rgba(215,25,32,0.25)] ring-1 ring-[#D71920]'
                      : 'bg-[#111111] border-white/5 hover:border-white/20 hover:bg-[#151515] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      idx === activeVideoIndex ? 'bg-[#D71920] text-white' : 'bg-white/10 text-gray-400'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">0{idx + 1}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1 line-clamp-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-24 bg-[#111111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="text-[#D71920] font-bold tracking-wider text-sm mb-4 block">NUESTROS TRABAJOS</span>
           <h2 className="text-4xl font-bold mb-12 text-white">Resultados comprobados</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             {featuredGallery.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCarouselIndex(idx)}
                  className="aspect-video bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden group relative cursor-pointer shadow-lg hover:border-[#D71920]/40 transition-all"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 justify-between">
                    <div>
                      <span className="text-[#D71920] text-xs font-bold uppercase tracking-wider block">Destacado</span>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    </div>
                    <div className="p-3 bg-[#D71920] rounded-full text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
             ))}
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
             {gridGallery.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCarouselIndex(featuredGallery.length + idx)}
                  className="aspect-square bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden group shadow-lg hover:border-[#D71920]/40 transition-all relative cursor-pointer"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                    <div className="p-2.5 bg-[#D71920] rounded-full text-white mb-2 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn size={18} />
                    </div>
                    <span className="text-white text-xs font-semibold line-clamp-2 px-1">
                      {item.title}
                    </span>
                  </div>
                </div>
             ))}
           </div>
           
           <div className="mt-12">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white bg-[#1a1a1a] px-8 py-4 rounded font-bold border border-white/10 hover:bg-[#222] transition-colors">
                 Ver más en nuestro WhatsApp
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
            No dejes que un problema de temperatura deje tu vehículo inoperativo. Contáctanos ahora y recibe atención experta.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b0151a] text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-[#D71920]/20">
            <MessageCircle size={24} />
            Hablar con un especialista
          </a>
        </div>
      </section>

      {/* Ubicación y Mapa */}
      <section id="ubicacion" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D71920]/5 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D71920] font-bold tracking-wider text-sm mb-4 block">DÓNDE ENCONTRARNOS</span>
              <h2 className="text-4xl font-bold mb-6 text-white">Visita nuestro taller</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Estamos ubicados en un punto estratégico de Medellín para brindarte el mejor servicio. Trae tu vehículo y recibe una asesoría técnica especializada.
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
                href="https://www.google.com/maps/search/?api=1&query=Carrera+50+%2370-08+barrio+Lovaina+Medellin" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1"
              >
                <MapPin size={20} />
                <span>Llévame allí (Google Maps)</span>
              </a>
            </div>
            
            <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe 
                src="https://maps.google.com/maps?q=Carrera%2050%2370-08%20barrio%20Lovaina%20Medellin&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
                Taller especializado en radiadores, fabricación en aluminio, soldaduras especiales y aire acondicionado automotriz en Medellín, Colombia.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wider">CONTACTO</h4>
              <ul className="space-y-4">
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                    <WhatsAppIcon size={18} />
                    <span>Línea Principal: 304 610 6795</span>
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                    <WhatsAppIcon size={18} />
                    <span>Línea Alterna: 315 768 7743</span>
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
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Navegación</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#problema" className="hover:text-[#D71920] transition-colors">Diagnóstico</a></li>
                <li><a href="#servicios" className="hover:text-[#D71920] transition-colors">Servicios</a></li>
                <li><a href="#fabricacion" className="hover:text-[#D71920] transition-colors">Fabricación a medida</a></li>
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
        {/* Menú emergente de WhatsApp */}
        <div className="mb-4 bg-[#111111] border border-white/10 rounded-2xl p-3 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col gap-2 min-w-[220px]">
          <p className="text-white text-sm font-bold px-2 pb-2 border-b border-white/10 mb-1">¿Con quién deseas chatear?</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl transition-colors">
            <WhatsAppIcon size={20} className="text-[#25D366]" />
            <span className="text-gray-200 text-sm font-medium">Línea Principal</span>
          </a>
          <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl transition-colors">
            <WhatsAppIcon size={20} className="text-[#25D366]" />
            <span className="text-gray-200 text-sm font-medium">Línea Alterna</span>
          </a>
        </div>
        {/* Botón Flotante */}
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
        <a href="tel:+573046106795" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors flex-1">
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

      {/* Carrusel Modal / Lightbox */}
      {carouselIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6 transition-all"
          onClick={handleCloseCarousel}
          role="dialog"
          aria-modal="true"
        >
          {/* Barra Superior */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between z-10 py-2 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-[#D71920] text-white text-xs font-mono font-bold px-3 py-1 rounded-full">
                {carouselIndex + 1} / {allGalleryImages.length}
              </span>
              <span className="text-white font-medium text-sm sm:text-base line-clamp-1">
                {allGalleryImages[carouselIndex].title}
              </span>
            </div>

            <button
              onClick={handleCloseCarousel}
              aria-label="Cerrar carrusel"
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D71920] text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>

          {/* Área Principal con Botones de Anterior / Siguiente e Imagen */}
          <div 
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto min-h-0 px-2 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Anterior */}
            <button
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
              className="absolute left-1 sm:left-4 z-20 p-2.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#D71920] text-white border border-white/15 transition-all hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-sm cursor-pointer"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Imagen Activa */}
            <div className="relative max-h-[68vh] sm:max-h-[72vh] max-w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#0e0e0e]">
              <img 
                src={allGalleryImages[carouselIndex].src} 
                alt={allGalleryImages[carouselIndex].alt}
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-2xl select-none transition-all duration-300"
              />
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={handleNextImage}
              aria-label="Siguiente imagen"
              className="absolute right-1 sm:right-4 z-20 p-2.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#D71920] text-white border border-white/15 transition-all hover:scale-110 active:scale-95 shadow-2xl backdrop-blur-sm cursor-pointer"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          {/* Barra Inferior: Descripción y Tira de Miniaturas */}
          <div 
            className="w-full max-w-5xl flex flex-col items-center gap-2 sm:gap-3 z-10 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-300 text-xs sm:text-sm text-center max-w-xl line-clamp-1 px-4">
              {allGalleryImages[carouselIndex].alt}
            </p>

            {/* Tira de Miniaturas */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full p-1 scrollbar-thin">
              {allGalleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === carouselIndex 
                      ? 'border-[#D71920] scale-105 shadow-[0_0_12px_rgba(215,25,32,0.6)] opacity-100' 
                      : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                  }`}
                >
                  <img src={img.src} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Menú Modal WhatsApp (Móvil) */}
      {showWaMenu && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-end justify-center pb-24 px-4" onClick={() => setShowWaMenu(false)}>
           <div className="bg-[#111111] w-full rounded-3xl p-5 border border-white/10 shadow-2xl animate-fade-in-up" onClick={e => e.stopPropagation()}>
             <h3 className="text-white font-bold mb-4 text-lg text-center">¿Con quién deseas chatear?</h3>
             <div className="flex flex-col gap-3">
               <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl active:bg-white/10 transition-colors border border-white/5">
                 <div className="bg-[#25D366]/20 p-2 rounded-full">
                    <WhatsAppIcon size={28} className="text-[#25D366]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold">Línea Principal</span>
                    <span className="text-gray-400 text-sm">304 610 6795</span>
                 </div>
               </a>
               <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl active:bg-white/10 transition-colors border border-white/5">
                 <div className="bg-[#25D366]/20 p-2 rounded-full">
                    <WhatsAppIcon size={28} className="text-[#25D366]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold">Línea Alterna</span>
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
