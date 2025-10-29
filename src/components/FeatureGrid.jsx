import React from 'react';
import { Zap, Calendar, Repeat, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Multi-platform publishing',
    desc: 'Compose once, publish to X, Instagram, LinkedIn, Facebook, and more with one click.'
  },
  {
    icon: Calendar,
    title: 'Visual scheduler',
    desc: 'Drag-and-drop calendar to plan weeks of content and hit optimal time slots.'
  },
  {
    icon: Repeat,
    title: 'Evergreen recycling',
    desc: 'Automatically reshare top-performing posts to maximize reach without extra effort.'
  },
  {
    icon: Shield,
    title: 'Safe & secure',
    desc: 'Granular permissions, audit logs, and secure token storage keep your accounts safe.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Automate every step of your workflow</h2>
        <p className="mt-3 text-slate-300">
          Powerful building blocks to create a consistent, high-performing social media engine.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10"
          >
            <div className="mb-3 inline-flex rounded-lg bg-emerald-400/15 p-2 text-emerald-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
