import { Home, Search, BookOpen, Sparkles, History, Bookmark, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-outline-variant/30 px-6 py-3 pb-8 flex justify-between items-center z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all active:scale-90 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Início</span>
      </NavLink>
      
      <NavLink 
        to="/search" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all active:scale-90 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <Search className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Pesquisa</span>
      </NavLink>
      
      <NavLink 
        to="/editor" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all active:scale-90 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
      >
        <Sparkles className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Criar</span>
      </NavLink>
      
      <button className="flex flex-col items-center gap-1 text-on-surface-variant transition-all active:scale-90">
        <Bookmark className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Salvos</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-on-surface-variant transition-all active:scale-90">
        <Settings className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Ajustes</span>
      </button>
    </nav>
  );
}
