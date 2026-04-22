import { Search as SearchIcon, ArrowLeft, User, Library, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const filters = ["Livro Bíblico", "Doutrina", "Palavra-chave", "Período Histórico"];

const results = [
  {
    category: "Teologia Paulina",
    title: "A Justificação pela Fé em Romanos",
    description: "Uma análise profunda sobre a transição da Lei para a Graça, focando no termo grego 'dikaiosyne' e sua aplicação na vida cristã primitiva.",
    refs: ["Romanos 5:1", "Graça"],
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    category: "Cristologia",
    title: "O Logos no Evangelho de João",
    description: "Explorando a pré-existência de Cristo e o impacto da encarnação na filosofia helenística e no pensamento judaico do primeiro século.",
    refs: ["João 1:1", "Logos"],
    icon: <Sparkles className="w-5 h-5" />
  }
];

export default function Search() {
  const [activeFilter, setActiveFilter] = useState("Livro Bíblico");

  return (
    <div className="min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            <button className="active:scale-95 transition-all text-primary">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-serif text-lg tracking-tight text-primary">Pesquisa Avançada</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl font-bold tracking-tighter text-primary">VerboAI</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 overflow-hidden ring-2 ring-primary/10">
              <User className="w-full h-full p-1.5 text-primary" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-lg mx-auto space-y-10">
        {/* Search Input */}
        <section className="space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-primary/40">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input 
              type="text"
              placeholder="Buscar por versículos, temas ou doutrinas..."
              className="w-full pl-14 pr-6 py-5 bg-white rounded-xl border-none editorial-shadow focus:ring-2 focus:ring-secondary/20 font-serif text-lg italic placeholder:text-on-surface-variant/40 transition-all"
            />
          </div>
        </section>

        {/* Filters */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-xl text-primary font-bold">Parâmetros de Estudo</h2>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">4 filtros ativos</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-all active:scale-95 text-xs font-bold ${
                  f === activeFilter ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="space-y-8">
          <header className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
            <h3 className="font-serif text-sm italic text-on-surface-variant px-2">Principais Revelações</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
          </header>

          <div className="space-y-6">
            {results.map((r, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={r.title} 
                className="bg-white rounded-xl p-8 editorial-shadow space-y-4 group hover:bg-surface-bright transition-colors duration-500"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{r.category}</span>
                  <div className="text-outline-variant group-hover:text-primary transition-colors">
                    {r.icon}
                  </div>
                </div>
                <h4 className="font-serif text-2xl text-primary leading-tight font-bold">{r.title}</h4>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {r.description}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {r.refs.map(ref => (
                      <span key={ref} className="text-[10px] font-medium bg-surface-container-low px-2 py-1 rounded text-on-surface-variant italic">
                        {ref}
                      </span>
                    ))}
                  </div>
                  <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold transition-all hover:brightness-95 active:scale-90">
                    Estudar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Decoration */}
        <section className="py-12 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <p className="font-serif italic text-on-surface-variant max-w-xs text-sm">
            "A exposição das tuas palavras concede luz e dá entendimento aos simples."
          </p>
          <span className="text-[10px] tracking-widest text-secondary uppercase font-bold">Salmos 119:130</span>
        </section>
      </main>
    </div>
  );
}
