import { NavLink } from 'react-router-dom';

const navItems = [
  { id: 'cockpit', label: 'Cockpit', path: '/' },
  { id: 'fleet', label: 'Fleet', path: '/fleet' },
  { id: 'approvals', label: 'Approvals', path: '/approvals' },
  { id: 'settings', label: 'Settings', path: '/settings' },
];

function NavGlyph({ id }) {
  switch (id) {
    case 'cockpit':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      );
    case 'fleet':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="7" width="12" height="8" rx="1" />
          <path d="M15 10h4l2 3v2h-6z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      );
    case 'approvals':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'settings':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="7.5" />
        </svg>
      );
    default:
      return null;
  }
}

function Sidebar() {
  return (
    <aside className="w-14 flex flex-col items-center gap-2 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-4 transition-colors">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === '/'}
          title={item.label}
          className={({ isActive }) =>
            `h-10 w-10 flex items-center justify-center rounded-lg transition-colors ${
              isActive
                ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                : 'text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`
          }
        >
          <NavGlyph id={item.id} />
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;