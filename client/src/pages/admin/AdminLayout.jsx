import { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AppContext';
import logoImg from '../../images/logo.jpeg';

const nav = [
  { to: '/admin', label: 'Overview', end: true, icon: '⬡' },
  { to: '/admin/blog', label: 'Blog', icon: '✎' },
  { to: '/admin/case-studies', label: 'Case Studies', icon: '◈' },
  { to: '/admin/services', label: 'Services', icon: '◉' },
  { to: '/admin/contacts', label: 'Contacts', icon: '✉' },
  { to: '/admin/users', label: 'Users', icon: '◇' },
  { to: '/admin/settings', label: 'Settings', icon: '⚙' },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      <aside
        className={`${sidebarOpen ? 'w-56' : 'w-16'
          } bg-[#0B1C2D] border-r border-white/5 flex flex-col transition-all duration-300 shrink-0`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-white/5 min-h-[56px]">
          {sidebarOpen && (
            <Link to="/admin" className="flex items-center gap-2 truncate">
              <div className="bg-white/90 rounded-md p-1">
                <img src={logoImg} alt="Intelera" className="h-6 w-auto object-contain" />
              </div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Admin</span>
            </Link>
          )}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition ml-auto"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-3 space-y-0.5">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${isActive
                  ? 'bg-[#00D4FF]/15 text-[#00D4FF] font-semibold'
                  : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className={`text-base ${sidebarOpen ? 'w-5 text-center shrink-0' : 'w-full text-center'}`}>
                {item.icon}
              </span>
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/5">
          {sidebarOpen && (
            <p className="text-xs text-neutral-500 truncate px-3 mb-2">{user?.email}</p>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className={`w-full py-2 rounded-lg text-sm text-red-400 hover:bg-red-400/10 transition ${sidebarOpen ? 'text-left px-3' : 'text-center'}`}
          >
            {sidebarOpen ? '↩ Log out' : '↩'}
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto min-w-0">
        <div className="p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
