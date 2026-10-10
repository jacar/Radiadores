import React, { useState, useEffect } from 'react';
import { ShieldAlert, KeyRound, Eye, EyeOff, Unlock } from 'lucide-react';

interface SuspensionOverlayProps {
  // Clave maestra por defecto para revertir/desbloquear
  defaultPin?: string;
  // Permite activar/desactivar la capa por completo si se desea
  enabled?: boolean;
}

export const SuspensionOverlay: React.FC<SuspensionOverlayProps> = ({ 
  defaultPin = 'admin2026',
  enabled = true
}) => {
  // Estado de bloqueo guardado en localStorage ('true' = bloqueado, 'false' = desbloqueado por admin)
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    const saved = localStorage.getItem('site_suspended_state');
    return saved === null ? true : saved === 'true';
  });

  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [inputPin, setInputPin] = useState<string>('');
  const [showPinText, setShowPinText] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);

  // Si no está habilitado, no bloquea nada
  const activeLock = enabled && isLocked;

  // Bloquear el scroll del body cuando la capa está activa
  useEffect(() => {
    if (activeLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLock]);

  // Atajo de teclado invisible para el administrador: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setErrorMsg('');
        setShowAdminModal((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // También se puede abrir haciendo 5 clics rápidos sobre el icono
  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setClickCount(0);
      setErrorMsg('');
      setShowAdminModal(true);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPin === defaultPin) {
      setIsLocked(false);
      localStorage.setItem('site_suspended_state', 'false');
      setSuccessMsg('Sitio desbloqueado correctamente.');
      setTimeout(() => {
        setShowAdminModal(false);
        setInputPin('');
        setErrorMsg('');
        setSuccessMsg('');
      }, 700);
    } else {
      setErrorMsg('PIN incorrecto.');
      setInputPin('');
    }
  };

  const handleRelock = () => {
    setIsLocked(true);
    localStorage.setItem('site_suspended_state', 'true');
    setShowAdminModal(false);
  };

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* CAPA DE BLOQUEO ACTIVA: Solo muestra "Sitio Web No Disponible" sin botones visibles */}
      {activeLock && (
        <div 
          className="fixed inset-0 z-[99999] bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none"
          style={{ touchAction: 'none' }}
        >
          {/* Fondo con brillo sutil */}
          <div className="absolute w-96 h-96 bg-[#D71920]/15 rounded-full blur-3xl pointer-events-none -top-10 -left-10 animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none -bottom-10 -right-10" />

          <div className="relative max-w-md w-full bg-[#111111]/90 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center">
            {/* Ícono de alerta (5 clics secretos permiten abrir el admin si se desea) */}
            <div 
              onClick={handleSecretClick}
              className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center mb-6 cursor-default"
            >
              <ShieldAlert className="w-8 h-8 text-[#D71920]" />
            </div>

            {/* Texto único requerido por el usuario */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sitio Web No Disponible
            </h1>
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE DISCRETO SI TÚ YA LO DESBLOQUEASTE LOCALMENTE */}
      {!isLocked && (
        <div className="fixed bottom-4 left-4 z-[9999] flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAdminModal(true)}
            className="flex items-center gap-2 bg-[#111111]/90 border border-green-500/50 text-green-400 text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur hover:bg-[#1a1a1a] transition-all cursor-pointer"
            title="Panel de Control de Administrador"
          >
            <Unlock className="w-3.5 h-3.5 text-green-400" />
            <span className="font-mono text-[11px]">Admin: Desbloqueado</span>
          </button>
        </div>
      )}

      {/* MODAL SECRETO DE ADMINISTRADOR (Se abre con Ctrl+Shift+A o 5 clics en el icono) */}
      {showAdminModal && (
        <div 
          className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setShowAdminModal(false)}
        >
          <div 
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">Control de Administrador</h3>
                <p className="text-gray-400 text-xs">Gestión del estado del sitio</p>
              </div>
            </div>

            {activeLock ? (
              <form onSubmit={handleUnlock} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    PIN de Desbloqueo
                  </label>
                  <div className="relative">
                    <input
                      type={showPinText ? 'text' : 'password'}
                      value={inputPin}
                      onChange={(e) => setInputPin(e.target.value)}
                      placeholder="Ingrese el PIN..."
                      autoFocus
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPinText(!showPinText)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPinText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {errorMsg && (
                  <div className="text-xs text-red-400 bg-red-950/40 border border-red-800/50 rounded-lg p-2.5">
                    {errorMsg}
                  </div>
                )}

                {successMsg && (
                  <div className="text-xs text-green-400 bg-green-950/40 border border-green-800/50 rounded-lg p-2.5">
                    {successMsg}
                  </div>
                )}

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAdminModal(false)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-gray-400 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-[#D71920] hover:bg-[#b0151a] rounded-xl transition-colors shadow-lg"
                  >
                    Desbloquear
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-gray-300 leading-relaxed">
                  El sitio web está <strong className="text-green-400">Desbloqueado</strong> actualmente.
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAdminModal(false)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-gray-400 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    onClick={handleRelock}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors"
                  >
                    Volver a Bloquear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
