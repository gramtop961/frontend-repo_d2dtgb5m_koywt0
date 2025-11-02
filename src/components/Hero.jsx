import { PlayCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-[40rem] rounded-full bg-sky-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Star size={14} />
              Learn anything, anytime
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Upgrade your skills with expert-led courses
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Master in-demand skills with bite-sized lessons, hands-on projects, and certificates that showcase your growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Browse Courses
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <PlayCircle size={18} />
                Watch Intro
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">1,200+</span> lessons
              </div>
              <div>
                <span className="font-semibold text-slate-900">250k+</span> learners
              </div>
              <div>
                <span className="font-semibold text-slate-900">4.8/5</span> average rating
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop"
                alt="Students learning online"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
