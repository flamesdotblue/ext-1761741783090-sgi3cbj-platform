import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import SchedulerForm from './components/SchedulerForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Hero />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <FeatureGrid />
        <SchedulerForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
