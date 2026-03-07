import React from "react";

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-2 text-blue-600 font-bold text-xl">
          <i className="fas fa-graduation-cap"></i>
          <span>My Student Hub</span>
        </div>

        <div className="px-6 py-4 border-b">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
                alt="Student"
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <h2 className="mt-3 font-bold text-slate-900">Rohan Sharma</h2>
            <p className="text-xs text-slate-500 font-medium tracking-wide">
              UID: 20211456
            </p>
            <span className="mt-2 px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">
              Online
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold"
          >
            <i className="fas fa-th-large w-5"></i> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
          >
            <i className="far fa-user w-5"></i> Profile
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
          >
            <i className="fas fa-book-open w-5"></i> Academics
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
          >
            <i className="far fa-calendar-alt w-5"></i> Calendar
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
          >
            <i className="fas fa-rocket w-5"></i> Events
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
          >
            <i className="fas fa-briefcase w-5"></i> Placements
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-700">Dashboard</h1>
          <div className="flex items-center gap-6">
            <div className="relative text-slate-400">
              <i className="fas fa-bell text-lg"></i>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
                1
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <i className="far fa-calendar"></i>
              <span id="date">Aug 22, 2024</span>
            </div>
          </div>
        </header>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Events & Workshops
              </h3>
              <span className="text-xs text-slate-400">
                Registered Activities
              </span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex gap-4 hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg">
                  <i className="fas fa-pencil-ruler"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">
                    UI/UX Design Masterclass
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    <i className="far fa-clock mr-1"></i> Aug 25, 2:00 PM | Tech
                    Hall
                  </p>
                </div>
                <i className="fas fa-chevron-right text-slate-300 self-center"></i>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex gap-4 hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 flex items-center justify-center rounded-lg">
                  <i className="fas fa-code"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">
                    Campus Hackathon 2024
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    <i className="far fa-clock mr-1"></i> Sept 5-7 | Auditorium
                  </p>
                </div>
                <i className="fas fa-chevron-right text-slate-300 self-center"></i>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex gap-4 hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded-lg">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">
                    Guest Lecture: AI & Ethics
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    <i className="far fa-clock mr-1"></i> Aug 30, 11:00 AM |
                    Room 102
                  </p>
                </div>
                <i className="fas fa-chevron-right text-slate-300 self-center"></i>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Placement Drives
              </h3>
              <span className="text-xs text-slate-400">Enrolled Drives</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-blue-500">
                      G
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">
                        Google India
                      </h4>
                      <p className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                        SDE Intern
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-[10px] font-bold rounded">
                    Applied
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 border-t pt-3">
                  <span>
                    <i className="far fa-calendar-check mr-1"></i> Sept 12, 2024
                  </span>
                  <span className="font-semibold text-slate-700">
                    4 Openings
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-red-500">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">
                        Microsoft
                      </h4>
                      <p className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                        Data Scientist
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-600 text-[10px] font-bold rounded">
                    Interview Scheduled
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 border-t pt-3">
                  <span>
                    <i className="far fa-calendar-check mr-1"></i> Sept 20, 2024
                  </span>
                  <span className="font-semibold text-slate-700">
                    2 Openings
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-orange-500">
                      I
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">
                        Infosys Ltd.
                      </h4>
                      <p className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                        Systems Engineer
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">
                    Pending
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 border-t pt-3">
                  <span>
                    <i className="far fa-calendar-check mr-1"></i> Sept 18, 2024
                  </span>
                  <span className="font-semibold text-slate-700">
                    50 Openings
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
