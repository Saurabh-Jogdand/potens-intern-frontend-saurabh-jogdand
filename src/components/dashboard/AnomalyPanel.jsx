import SectionHeader from '../shared/SectionHeader';
import StatusBadge, { severityRank } from '../shared/StatusBadge';
import anomalies from '../../data/anomalies';
import { useLanguage } from '../../context/LanguageContext';

const sortedAnomalies = [...anomalies].sort(
  (a, b) => severityRank[a.severity] - severityRank[b.severity]
);

function AnomalyPanel() {
  const { t } = useLanguage();

  return (
    <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900 transition-colors">
      <div className="px-5 py-4">
        <SectionHeader title={t('aiWatchTitle')} />
      </div>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
        {sortedAnomalies.map((anomaly) => (
          <li
            key={anomaly.id}
            className="px-5 py-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
          >
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {anomaly.title}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {anomaly.contextLine}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <StatusBadge status={anomaly.severity} />
              <span className="text-xs text-neutral-400 dark:text-neutral-500">
                {anomaly.detectedAt}
              </span>
            </div>
            {anomaly.linkedActionItemId && (
              <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
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