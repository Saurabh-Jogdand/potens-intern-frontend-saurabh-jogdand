const navItems = [
  { id: 'cockpit', label: 'Cockpit', active: true },
  { id: 'fleet', label: 'Fleet', active: false },
  { id: 'approvals', label: 'Approvals', active: false },
  { id: 'settings', label: 'Settings', active: false },
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
    <aside className="w-14 flex flex-col items-center gap-2 border-r border-neutral-200 bg-white py-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          title={item.label}
          disabled={!item.active}
          className={`h-10 w-10 flex items-center justify-center rounded-lg transition-colors ${
            item.active
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-400 hover:text-neutral-600 cursor-not-allowed'
          }`}
        >
          <NavGlyph id={item.id} />
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;