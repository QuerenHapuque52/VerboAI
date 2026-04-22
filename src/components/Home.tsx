import { GraduationCap, BookText, ScrollText, Library, Calendar, Bell, User, ArrowRight, Search as SearchIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function HomeView() {
  return (
    <div className="min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-surface-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <ScrollText className="w-5 h-5" />
          </div>
          <span className="text-xl font-serif font-bold text-primary tracking-tight">VerboAI</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary overflow-hidden">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-lg mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 px-2"
        >
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">Paz do Senhor,</h1>
          <p className="text-on-surface-variant leading-relaxed">O que vamos preparar para o Reino hoje?</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Aula Card */}
          <motion.section variants={item} className="bg-white rounded-xl shadow-sm border border-surface-variant/20 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">EBD & Ensino</span>
              </div>
              <h2 className="text-xl font-serif font-bold text-primary mb-2">Preparar Aula</h2>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                Crie planos de aula estruturados para a Escola Bíblica, com referências, objetivos e aplicações práticas para seus alunos.
              </p>
              <button className="w-full bg-primary text-on-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98]">
                <span>Iniciar Preparação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.section>

          {/* Sermão Card */}
          <motion.section variants={item} className="bg-white rounded-xl shadow-sm border border-surface-variant/20 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center">
                  <BookText className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider rounded-full">Pregação</span>
              </div>
              <h2 className="text-xl font-serif font-bold text-primary mb-2">Esboço de Sermão</h2>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                Desenvolva mensagens expositivas ou temáticas impactantes com introdução, pontos chave e conclusão bíblica.
              </p>
              <Link to="/editor" className="w-full bg-primary text-on-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98]">
                <span>Criar Esboço</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>

          {/* Devocional Card */}
          <motion.section variants={item} className="bg-white rounded-xl shadow-sm border border-surface-variant/20 overflow-hidden">
            <div className="p-6 border-l-4 border-emerald-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ScrollText className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-serif font-bold text-primary">Devocional Diário</h2>
              </div>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed italic">
                "Lâmpada para os meus pés é a tua palavra..." - Gere reflexões diárias para crescimento espiritual pessoal ou do grupo.
              </p>
              <button className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-all active:scale-[0.98]">
                Gerar Devocional
              </button>
            </div>
          </motion.section>

          {/* Estudo Teológico Card */}
          <motion.section variants={item} className="bg-primary text-on-primary rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 relative">
              <Library className="absolute top-4 right-4 opacity-10 w-16 h-16" />
              <h2 className="text-xl font-serif font-bold mb-2">Estudo Teológico</h2>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Aprofundamento doutrinário e exegético assistido por IA. Ideal para seminários e pesquisas bíblicas profundas.
              </p>
              <Link to="/search" className="w-full bg-white text-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-bright transition-all active:scale-[0.98]">
                <span>Pesquisar Agora</span>
                <SearchIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>

          {/* Planejamento de Série Card */}
          <motion.section variants={item} className="bg-white rounded-xl shadow-sm border-2 border-dashed border-primary/20 overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-serif font-bold text-primary mb-2">Séries de Mensagens</h2>
              <p className="text-sm text-on-surface-variant mb-6 max-w-xs">
                Organize o calendário litúrgico da sua igreja com séries temáticas para meses inteiros.
              </p>
              <button className="w-full border-2 border-primary text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary/5 transition-all active:scale-[0.98]">
                Planejar Calendário
              </button>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}
