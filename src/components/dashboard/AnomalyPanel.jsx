import SectionHeader from '../shared/SectionHeader';
import StatusBadge from '../shared/StatusBadge';
import anomalies from '../../data/anomalies';
import { useLanguage } from '../../context/LanguageContext';

function AnomalyPanel() {
  const { t } = useLanguage();

  return (
    <section className="border border-neutral-200 rounded-lg bg-white">
      <div className="px-5 py-4 border-b border-neutral-200">
        <SectionHeader title={t('aiWatchTitle')} />
      </div>

      <ul className="divide-y divide-neutral-200">
        {anomalies.map((anomaly) => (
          <li key={anomaly.id} className="px-5 py-4">
            <p className="text-sm font-medium text-neutral-900">
              {anomaly.title}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              {anomaly.contextLine}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <StatusBadge status={anomaly.severity} />
              <span className="text-xs text-neutral-400">
                {anomaly.detectedAt}
              </span>
            </div>
            {anomaly.linkedActionItemId && (
              <p className="mt-2 text-xs text-neutral-400">
                → {t('linkedToActionItem')} #{anomaly.linkedActionItemId}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AnomalyPanel;