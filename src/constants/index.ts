import { ArrowUpRight, BookOpen, Code, Compass, FileCode, Heart, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export const NAV_LINKS = [
  {
    path: '#home',
    label: 'Home',
  },
  {
    path: '#about',
    label: 'About',
  },
  {
    path: '#services',
    label: 'Services',
  },
  {
    path: '#projects',
    label: 'Projects',
  },
  {
    path: '#testimonials',
    label: 'Testimonials',
  },
  {
    path: '#contact',
    label: 'Contact',
  },
];

export const COMPANY_INFO = {
  name: 'Cuestera Co.',
  tagline: 'Design Simplified',
  description: 'We create thoughtful digital experiences that bring joy to everyday interactions.',
  yearFounded: 2020,
  location: 'San Francisco, CA',
  values: [
    'User-centered design',
    'Sustainable innovation',
    'Ethical technology',
    'Continuous learning',
  ],
};

export const SERVICES = [
  {
    title: 'UX/UI Design',
    description: 'Creating intuitive and beautiful interfaces that delight users and solve complex problems.',
    icon: Heart,
  },
  {
    title: 'Web Development',
    description: 'Building performant, accessible, and responsive websites using modern technologies.',
    icon: Code,
  },
  {
    title: 'Digital Strategy',
    description: 'Developing comprehensive digital strategies to help businesses grow and adapt.',
    icon: Compass,
  },
  {
    title: 'Brand Identity',
    description: 'Crafting unique and memorable brand identities that resonate with target audiences.',
    icon: BookOpen,
  },
];

export const PROJECTS = [
  {
    title: 'Harmony App',
    category: 'Mobile App',
    description: 'A meditation and wellness app with personalized recommendations.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'EcoTrack',
    category: 'Web Application',
    description: 'A sustainability platform helping users reduce their carbon footprint.',
    image: 'https://images.pexels.com/photos/3693572/pexels-photo-3693572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'Culinary Connection',
    category: 'Web & Mobile',
    description: 'A recipe sharing community for food enthusiasts and home chefs.',
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'Urban Planner',
    category: 'Web Application',
    description: 'An interactive map tool for urban planning and community development.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Verdant Inc.',
    quote: 'Working with Cuestera Co. transformed our digital presence. Their attention to detail and innovative approach exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Michael Torres',
    role: 'Creative Director, Pulse Media',
    quote: 'Cuestera Co. brings a rare combination of technical expertise and creative vision. They delivered a product that was both beautiful and functional.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Emily Chen',
    role: 'Founder, NeoCraft',
    quote: 'The team at Cuestera truly listens and cares about creating meaningful solutions. They were a joy to collaborate with throughout the process.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const CONTACT_INFO = {
  email: 'hello@cuestera.co',
  phone: '+1 (415) 555-0123',
  address: '123 Design Street, San Francisco, CA 94110',
  socials: [
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: MessageSquare,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: ArrowUpRight,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: FileCode,
    },
  ],
  contactPoints: [
    {
      title: 'Email Us',
      value: 'hello@cuestera.co',
      icon: Mail,
    },
    {
      title: 'Call Us',
      value: '+1 (415) 555-0123',
      icon: Phone,
    },
    {
      title: 'Visit Us',
      value: '123 Design Street, San Francisco, CA',
      icon: MapPin,
    },
  ],
};