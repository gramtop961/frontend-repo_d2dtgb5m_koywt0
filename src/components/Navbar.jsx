import { useState } from 'react';
import { BookOpen, Menu, X, Award, Users } from 'lucide-react';

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-slate-900 font-semibold">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-600 text-white">
              <BookOpen size={20} />
            </div>
            <span>EduSphere</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#courses" label="Courses" />
            <NavLink href="#instructors" label="Instructors" />
            <NavLink href="#features" label="Why Us" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-slate-900 text-sm">Sign in</a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              <Award size={16} />
              Get Pro
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="space-y-1 px-4 py-3">
            <NavLink href="#courses" label="Courses" onClick={closeMenu} />
            <NavLink href="#instructors" label="Instructors" onClick={closeMenu} />
            <NavLink href="#features" label="Why Us" onClick={closeMenu} />
            <NavLink href="#contact" label="Contact" onClick={closeMenu} />
            <div className="pt-3 flex items-center gap-3">
              <a href="#" className="text-slate-600 hover:text-slate-900 text-sm">Sign in</a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                onClick={closeMenu}
              >
                <Users size={16} />
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
