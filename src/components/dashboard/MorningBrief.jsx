import { useLanguage } from '../../context/LanguageContext';

function MorningBrief() {
  const { t } = useLanguage();

  return (
    <div className="space-y-1">
      <h1 className="text-base font-medium text-neutral-900">{t('morningGreeting')}</h1>
      <p className="text-sm text-neutral-500">{t('morningSummary')}</p>
    </div>
  );
}

export default MorningBrief;