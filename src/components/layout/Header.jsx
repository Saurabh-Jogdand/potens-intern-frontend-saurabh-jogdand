import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" strokeLinejoin="round" />
    </svg>
  );
}

function Header() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors">
      <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        RoutePulse
      </span>

      <div className="flex items-center gap-4">
        <span
          className="text-xs font-medium text-neutral-400 dark:text-neutral-500"
          title="Region switching coming in a later milestone"
        >
          Pune, Maharashtra
        </span>

        <button
          type="button"
          onClick={toggleTheme}
          className="h-7 w-7 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Toggle dark mode"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-md overflow-hidden text-xs">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 transition-colors ${
              language === 'en'
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('mr')}
            className={`px-2.5 py-1 transition-colors ${
              language === 'mr'
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            MR
          </button>
        </div>

        <div className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[11px] font-medium text-neutral-600 dark:text-neutral-300">
          SJ
        </div>
      </div>
    </header>
  );
}

export default Header;