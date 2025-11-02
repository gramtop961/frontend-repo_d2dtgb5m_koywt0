import { useMemo, useState } from 'react';
import { BookOpen, Clock, Award, Star } from 'lucide-react';

const allCourses = [
  {
    id: 1,
    title: 'Modern JavaScript from Scratch',
    level: 'Beginner',
    duration: '8h 30m',
    rating: 4.7,
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'UI/UX Design Essentials',
    level: 'Beginner',
    duration: '6h 10m',
    rating: 4.6,
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Data Analysis with Python',
    level: 'Intermediate',
    duration: '10h 45m',
    rating: 4.8,
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Digital Marketing 101',
    level: 'Beginner',
    duration: '5h 20m',
    rating: 4.5,
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'React and State Management',
    level: 'Intermediate',
    duration: '9h 15m',
    rating: 4.9,
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Product Management Fundamentals',
    level: 'All Levels',
    duration: '4h 50m',
    rating: 4.6,
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  },
];

const categories = ['All', 'Programming', 'Design', 'Data', 'Marketing', 'Business'];

function CourseCard({ course }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-indigo-700">
          <BookOpen size={14} />
          <span>{course.category}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 text-base font-semibold text-slate-900">{course.title}</h3>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
          <div className="inline-flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
              {course.level}
            </span>
            <div className="inline-flex items-center gap-1">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-slate-700">{course.rating}</span>
          </div>
        </div>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          <Award size={16} />
          Enroll now
        </button>
      </div>
    </div>
  );
}

export default function Courses() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return allCourses;
    return allCourses.filter((c) => c.category === active);
  }, [active]);

  return (
    <section id="courses" className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular Courses</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Curated learning paths to take you from fundamentals to mastery.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition border ${
                  active === c
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
