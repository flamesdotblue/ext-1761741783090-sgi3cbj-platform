import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} SocialFlow Automation. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-200">Features</a>
            <a href="#scheduler" className="hover:text-slate-200">Scheduler</a>
            <a href="#" className="hover:text-slate-200">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
