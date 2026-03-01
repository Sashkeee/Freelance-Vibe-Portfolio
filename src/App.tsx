import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Bell, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Home, 
  FolderOpen, 
  FileText, 
  Mail, 
  ArrowLeft, 
  Share2,
  ExternalLink,
  Send,
  ChevronRight,
  User,
  Code2,
  Settings
} from 'lucide-react';
import { PROJECTS, TESTIMONIALS } from './constants';
import { Project } from './types';

type Tab = 'home' | 'projects' | 'resume' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6 pb-24"
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center px-6 pt-8 text-center">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-xl">
            <img 
              src="https://picsum.photos/seed/dev/300/300" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1.5 border-4 border-white dark:border-bg-dark">
            <CheckCircle2 size={16} />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Привет, я фриланс‑разработчик
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
          Full-stack developer & UI designer
        </p>
        <div className="flex gap-3 justify-center">
          <div className="bg-primary/5 dark:bg-primary/10 px-4 py-2 rounded-2xl flex items-center gap-2">
            <CheckCircle2 size={14} className="text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-wider">5+ лет опыта</span>
          </div>
          <div className="bg-emerald-500/5 dark:bg-emerald-500/10 px-4 py-2 rounded-2xl flex items-center gap-2">
            <Zap size={14} className="text-emerald-500" />
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider">Свободен</span>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Недавние проекты</h2>
          <button 
            onClick={() => setActiveTab('projects')}
            className="text-primary text-sm font-semibold flex items-center gap-1"
          >
            См. все <ChevronRight size={16} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {PROJECTS.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6">
        <h2 className="text-xl font-bold mb-4">Отзывы клиентов</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="min-w-[280px] bg-white dark:bg-card-dark p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-bold">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </section>

      <button 
        onClick={() => setActiveTab('projects')}
        className="mx-6 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
      >
        Смотреть все проекты <ArrowRight size={18} />
      </button>
    </motion.div>
  );

  const renderProjects = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 pb-24 pt-4"
    >
      <h2 className="text-2xl font-bold mb-6">Мои проекты</h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>
    </motion.div>
  );

  const renderResume = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 pb-24 pt-4"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Резюме</h2>
        <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
          <Settings size={20} />
        </button>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Code2 size={20} />
            <h3 className="font-bold uppercase tracking-widest text-xs">Опыт работы</h3>
          </div>
          <div className="space-y-6 border-l-2 border-slate-100 dark:border-slate-800 ml-2 pl-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-bg-dark" />
              <h4 className="font-bold">Senior Fullstack Developer</h4>
              <p className="text-sm text-primary mb-2">Tech Solutions Inc. • 2021 — Наст.</p>
              <p className="text-sm text-slate-500">Разработка архитектуры масштабируемых микросервисов на Node.js и Go.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-bg-dark" />
              <h4 className="font-bold">Middle Frontend Dev</h4>
              <p className="text-sm text-slate-500 mb-2">Digital Agency X • 2018 — 2021</p>
              <p className="text-sm text-slate-500">Создание интерактивных интерфейсов с использованием Vue.js и TypeScript.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4 text-primary">
            <User size={20} />
            <h3 className="font-bold uppercase tracking-widest text-xs">Образование</h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold">МГТУ им. Н.Э. Баумана</h4>
            <p className="text-sm text-slate-500">Информационные системы • 2012 — 2016</p>
          </div>
        </section>
      </div>
    </motion.div>
  );

  const renderContact = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 pb-24 pt-4"
    >
      <h2 className="text-2xl font-bold mb-2">Давайте создадим проект</h2>
      <p className="text-slate-500 mb-8">Расскажите о вашей идее, и я свяжусь с вами в течение 24 часов.</p>
      
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Имя</label>
          <input 
            type="text" 
            placeholder="Александр Иванов"
            className="w-full h-14 px-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
          <input 
            type="email" 
            placeholder="example@mail.ru"
            className="w-full h-14 px-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Описание задачи</label>
          <textarea 
            rows={4}
            placeholder="Расскажите о ваших целях..."
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
          />
        </div>
        <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          <Send size={18} /> Отправить в Telegram
        </button>
      </form>
    </motion.div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-bg-dark relative flex flex-col shadow-2xl overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-30 ios-blur px-6 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <button className="p-2 -ml-2">
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-bold">Портфолио</h1>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 -mr-2 text-slate-400"
        >
          <Bell size={24} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'resume' && renderResume()}
          {activeTab === 'contact' && renderContact()}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto ios-blur border-t border-slate-100 dark:border-slate-800 px-6 pb-8 pt-3 z-40">
        <div className="flex justify-between items-center">
          <NavButton 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
            icon={<Home size={24} />} 
            label="Главная" 
          />
          <NavButton 
            active={activeTab === 'projects'} 
            onClick={() => setActiveTab('projects')} 
            icon={<FolderOpen size={24} />} 
            label="Проекты" 
          />
          <NavButton 
            active={activeTab === 'resume'} 
            onClick={() => setActiveTab('resume')} 
            icon={<FileText size={24} />} 
            label="Резюме" 
          />
          <NavButton 
            active={activeTab === 'contact'} 
            onClick={() => setActiveTab('contact')} 
            icon={<Mail size={24} />} 
            label="Контакты" 
          />
        </div>
      </nav>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white dark:bg-bg-dark overflow-y-auto no-scrollbar"
          >
            <div className="sticky top-0 z-10 ios-blur px-6 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
              <button onClick={() => setSelectedProject(null)} className="p-2 -ml-2">
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-lg font-bold">Детали проекта</h2>
              <button className="p-2 -mr-2">
                <Share2 size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">{tag}</span>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-slate-500 leading-relaxed">{selectedProject.details || selectedProject.description}</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-primary" /> Результат
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Проект был успешно запущен и получил положительные отзывы от пользователей. Оптимизация производительности позволила достичь высоких показателей в Google PageSpeed.
                </p>
              </div>

              <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                <ExternalLink size={18} /> Посмотреть Live
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void; key?: string }) {
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group flex flex-col bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{project.category}</span>
        </div>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-500">{tag}</span>
          ))}
        </div>
        <button className="w-full h-10 bg-primary text-white rounded-xl text-sm font-bold">
          Подробнее
        </button>
      </div>
    </motion.div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
    >
      <div className={`transition-transform ${active ? 'scale-110' : 'scale-100'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'opacity-100' : 'opacity-60'}`}>
        {label}
      </span>
    </button>
  );
}
