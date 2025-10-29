import React, { useMemo, useState } from 'react';
import { Calendar, Zap } from 'lucide-react';

const platforms = [
  { id: 'twitter', label: 'X / Twitter' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'facebook', label: 'Facebook' }
];

export default function SchedulerForm() {
  const [message, setMessage] = useState('Excited to announce our new automation suite! 🚀');
  const [selected, setSelected] = useState(['twitter', 'linkedin']);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('09:00');
  const [imageUrl, setImageUrl] = useState('');
  const [recycle, setRecycle] = useState(false);
  const [frequency, setFrequency] = useState('weekly');

  const charCount = message.length;
  const canSubmit = message.trim().length > 0 && selected.length > 0;

  const preview = useMemo(() => {
    const dateTime = new Date(`${date}T${time}`);
    const readable = dateTime.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
    const platformsLabel = platforms
      .filter(p => selected.includes(p.id))
      .map(p => p.label)
      .join(', ');
    return `${platformsLabel} • Scheduled ${readable}`;
  }, [date, time, selected]);

  function togglePlatform(id) {
    setSelected(prev => (prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    alert('Scheduled! This demo does not post to APIs, but your configuration is saved locally.');
  }

  return (
    <section id="scheduler" className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-slate-200">Post content</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 p-3 text-slate-100 placeholder-slate-400 outline-none ring-emerald-400/0 transition focus:ring-2"
              placeholder="Write an engaging post..."
            />
            <div className="mt-1 text-right text-xs text-slate-400">{charCount} characters</div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-200">Date</label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-slate-100 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200">Time</label>
              <div className="mt-2 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-transparent text-slate-100 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-200">Platforms</label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {platforms.map(p => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`rounded-lg border px-3 py-2 text-sm transition ${
                    selected.includes(p.id)
                      ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                      : 'border-white/10 bg-slate-950/60 text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="image" className="block text-sm font-medium text-slate-200">Image URL (optional)</label>
            <input
              id="image"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-slate-100 placeholder-slate-400 outline-none ring-emerald-400/0 transition focus:ring-2"
            />
          </div>

          <div className="mb-6 rounded-lg border border-white/10 bg-slate-950/40 p-4">
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-transparent"
                checked={recycle}
                onChange={(e) => setRecycle(e.target.checked)}
              />
              Recycle as evergreen content
            </label>
            {recycle && (
              <div className="mt-3">
                <label className="block text-xs font-medium text-slate-300">Frequency</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-slate-100 outline-none"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Every 2 weeks</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            )}
          </div>

          <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-slate-400">
              This is a front-end demo. Connect your APIs to enable real publishing.
            </p>
            <button
              type="submit"
              disabled={!canSubmit}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                canSubmit
                  ? 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
                  : 'cursor-not-allowed bg-emerald-900/40 text-emerald-200/60'
              }`}
            >
              <Zap className="h-4 w-4" /> Schedule Post
            </button>
          </div>
        </form>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
          <h3 className="text-sm font-semibold text-white">Live preview</h3>
          <p className="mt-1 text-xs text-slate-400">{preview}</p>
          <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/60 p-4">
            <div className="mb-2 text-sm text-slate-300">{message || 'Your content will appear here.'}</div>
            {imageUrl && (
              <div className="mt-3 overflow-hidden rounded-lg border border-white/10">
                <img src={imageUrl} alt="Attachment" className="h-56 w-full object-cover" />
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {platforms.filter(p => selected.includes(p.id)).map(p => (
                <span key={p.id} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {p.label}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="rounded-lg border border-white/10 bg-slate-950/60 p-3">
              Optimal time: <span className="font-semibold text-emerald-300">9:00 AM</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/60 p-3">
              Est. reach boost: <span className="font-semibold text-emerald-300">+18%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
