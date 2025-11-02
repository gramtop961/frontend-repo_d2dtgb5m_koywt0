export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">About</h3>
            <p className="mt-3 text-sm text-slate-600">
              EduSphere helps you learn modern skills with concise lessons and practical projects designed by experts.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#courses" className="hover:text-slate-900">Courses</a></li>
              <li><a href="#features" className="hover:text-slate-900">Guides</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Stay in the loop</h3>
            <p className="mt-3 text-sm text-slate-600">Get new courses and updates straight to your inbox.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button
                type="submit"
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} EduSphere. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
