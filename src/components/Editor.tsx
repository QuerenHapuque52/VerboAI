import { BookOpen, Sparkles, Lightbulb, Flag, Bell, ChevronDown, Plus, Bold, Italic, List, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function Editor() {
  return (
    <div className="min-h-screen pb-48">
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-surface-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-serif font-bold text-primary">Editor de Sermão</h1>
        </div>
        <button className="text-primary hover:opacity-80 transition-opacity">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <main className="pt-24 px-6 max-w-lg mx-auto space-y-8">
        <section className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant px-1">Tema do Sermão</label>
          <input 
            type="text" 
            placeholder="Ex: O Caminho da Sabedoria" 
            className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary outline-none py-3 text-2xl font-serif text-primary placeholder:text-outline-variant transition-colors"
          />
        </section>

        <section className="space-y-6">
          {/* Introduction */}
          <motion.article 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 editorial-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-primary flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                Introdução
              </h3>
              <ChevronDown className="w-5 h-5 text-outline-variant" />
            </div>
            <textarea 
              rows={4}
              placeholder="Comece com uma história ou um gancho teológico..."
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface-variant font-body resize-none p-0 placeholder:italic"
            />
          </motion.article>

          {/* Points */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 px-1">
              <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Pontos Principais</span>
              <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 border-l-4 border-secondary shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl text-secondary font-bold">I.</span>
                <input 
                  placeholder="Primeiro ponto teológico"
                  className="flex-grow bg-transparent border-none focus:ring-0 p-0 font-serif text-lg text-primary placeholder:text-outline-variant"
                />
              </div>
              <div className="mt-4 ml-8 space-y-3">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="w-4 h-4 flex items-center justify-center text-xs opacity-40">↳</span>
                  <input placeholder="Sub-ponto ou referência bíblica" className="flex-grow bg-transparent border-none focus:ring-0 p-0 text-sm" />
                </div>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-wider font-bold">Adicionar Sub-ponto</span>
                </button>
              </div>
            </motion.div>

            <button className="w-full py-4 rounded-xl border-2 border-dashed border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              <span className="text-sm font-semibold">Novo Ponto</span>
            </button>
          </div>

          {/* Illustrations */}
          <motion.article 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 editorial-shadow"
          >
            <h3 className="font-serif text-lg text-primary flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Ilustrações
            </h3>
            <textarea 
              rows={3}
              placeholder="Ex: Uma analogia sobre as estrelas..."
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface-variant font-body resize-none p-0 italic"
            />
          </motion.article>

          {/* Conclusion */}
          <motion.article 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 editorial-shadow"
          >
            <h3 className="font-serif text-lg text-primary flex items-center gap-2 mb-4">
              <Flag className="w-5 h-5 text-secondary" />
              Conclusão
            </h3>
            <textarea 
              rows={3}
              placeholder="O apelo final e oração..."
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface-variant font-body resize-none p-0"
            />
          </motion.article>
        </section>
      </main>

      {/* Toolbar */}
      <div className="fixed bottom-32 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-primary/95 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between shadow-xl text-on-primary z-40">
        <button className="hover:text-secondary transition-colors"><Bold className="w-5 h-5" /></button>
        <button className="hover:text-secondary transition-colors"><Italic className="w-5 h-5" /></button>
        <button className="hover:text-secondary transition-colors"><List className="w-5 h-5" /></button>
        <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
        <button className="flex items-center gap-2 hover:text-secondary transition-colors">
          <BookOpen className="w-4 h-4" />
          <span className="text-[10px] uppercase font-bold tracking-tighter">Versículo</span>
        </button>
      </div>

      <div className="fixed bottom-24 left-0 w-full px-6 flex justify-center z-50">
        <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-3 active:scale-95 transition-transform">
          <Eye className="w-5 h-5" />
          Visualizar Esboço
        </button>
      </div>
    </div>
  );
}
