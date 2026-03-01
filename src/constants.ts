import { Project, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Полнофункциональный интернет-магазин, созданный на React с использованием Node.js.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'Stripe'],
    category: 'Web App',
    details: 'Проект включал в себя разработку корзины, системы оплаты и личного кабинета.'
  },
  {
    id: '2',
    title: 'Фитнес-трекер',
    description: 'Нативное iOS приложение для отслеживания тренировок и питания.',
    image: 'https://picsum.photos/seed/fitness/800/600',
    tags: ['SwiftUI', 'Firebase', 'Charts'],
    category: 'iOS App',
    details: 'Интеграция с HealthKit и кастомные графики прогресса.'
  },
  {
    id: '3',
    title: 'AI Assistant Bot',
    description: 'Интеллектуальный чат-бот на базе GPT-4 для автоматизации поддержки.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    category: 'UI/UX',
    details: 'Разработка интерфейса и логики обработки запросов.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Анна Петрова',
    role: 'CEO, TechFlow',
    content: 'Отличная работа! Проект был сдан вовремя, а качество кода превзошло все ожидания.',
    avatar: 'https://picsum.photos/seed/anna/100/100'
  },
  {
    id: '2',
    name: 'Иван Сидоров',
    role: 'Product Manager',
    content: 'Очень впечатлен вниманием к деталям. UI/UX решения просто на высоте.',
    avatar: 'https://picsum.photos/seed/ivan/100/100'
  }
];
