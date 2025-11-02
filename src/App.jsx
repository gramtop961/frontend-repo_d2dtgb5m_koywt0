import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';

function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why learners choose us</h2>
          <p className="mt-3 text-slate-600">Built for focus, progress and real-world results.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            title: 'Expert instructors',
            desc: 'Learn from industry leaders with years of practical experience.',
          }, {
            title: 'Hands-on projects',
            desc: 'Apply concepts with real assignments and portfolio pieces.',
          }, {
            title: 'Certificates of completion',
            desc: 'Showcase your skills with shareable certificates.',
          }, {
            title: 'Flexible learning',
            desc: 'Bite-sized lessons that fit your schedule and pace.',
          }, {
            title: 'Community support',
            desc: 'Get help and feedback from peers and mentors.',
          }, {
            title: 'Up-to-date content',
            desc: 'We keep courses fresh with the latest tools and practices.',
          }].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instructors() {
  const people = [
    {
      name: 'Ava Thompson',
      role: 'Senior Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Noah Patel',
      role: 'Data Scientist',
      avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mia Chen',
      role: 'Product Designer',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    },
  ];
  return (
    <section id="instructors" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meet our instructors</h2>
            <p className="mt-2 text-slate-600">Learn from professionals who do the work every day.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.avatar} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <Instructors />
      <Footer />
    </div>
  );
}
