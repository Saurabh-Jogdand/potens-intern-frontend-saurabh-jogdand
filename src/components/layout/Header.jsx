import { useLanguage } from '../../context/LanguageContext';

function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-neutral-200 bg-white">
      <span className="text-sm font-semibold tracking-tight text-neutral-900">
        RoutePulse
      </span>

      <div className="flex items-center gap-4">
        <span
          className="text-xs font-medium text-neutral-400"
          title="Region switching coming in a later milestone"
        >
          Pune, Maharashtra
        </span>

        <div className="flex items-center border border-neutral-200 rounded-md overflow-hidden text-xs">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 transition-colors ${
              language === 'en'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('mr')}
            className={`px-2.5 py-1 transition-colors ${
              language === 'mr'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            MR
          </button>
        </div>

        <div className="h-7 w-7 rounded-full bg-neutral-200 flex items-center justify-center text-[11px] font-medium text-neutral-600">
          SJ
        </div>
      </div>
    </header>
  );
}

export default Header;