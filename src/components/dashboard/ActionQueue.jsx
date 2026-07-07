import { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import StatusBadge, { severityRank } from '../shared/StatusBadge';
import Button from '../shared/Button';
import actionItems from '../../data/actionItems';
import { useLanguage } from '../../context/LanguageContext';
import { useActionItems } from '../../context/ActionItemsContext';

const sortedItems = [...actionItems].sort(
  (a, b) => severityRank[a.severity] - severityRank[b.severity]
);

function ActionQueue() {
  const { t } = useLanguage();
  const { statusMap, approveItem, holdItem } = useActionItems();
  const [leavingIds, setLeavingIds] = useState([]);
  const [justUpdatedId, setJustUpdatedId] = useState(null);

  const handleApprove = (id) => {
    setLeavingIds((prev) => [...prev, id]);
    setTimeout(() => {
      approveItem(id);
      setLeavingIds((prev) => prev.filter((leavingId) => leavingId !== id));
    }, 320);
  };

  const handleHold = (id) => {
    holdItem(id);
    setJustUpdatedId(id);
    setTimeout(() => setJustUpdatedId((current) => (current === id ? null : current)), 1500);
  };

  const visibleItems = sortedItems.filter((item) => statusMap[item.id] !== 'approved');

  return (
    <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900 transition-colors">
      <div className="px-5 py-4">
        <SectionHeader title={t('actionItemsTitle')} />
      </div>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
        {visibleItems.map((item) => {
          const currentStatus = statusMap[item.id];
          const isHeld = currentStatus === 'held';
          const isLeaving = leavingIds.includes(item.id);
          const isJustUpdated = justUpdatedId === item.id;

          return (
            <li
              key={item.id}
              className={`px-5 flex items-start justify-between gap-4 transition-all duration-300 ease-in-out hover:bg-neutral-50 dark:hover:bg-neutral-800/50 ${
                isLeaving
                  ? 'opacity-0 -translate-x-2 py-0 max-h-0 overflow-hidden'
                  : 'opacity-100 translate-x-0 py-4 max-h-56'
              }`}
            >
              <div className={`min-w-0 transition-opacity duration-300 ${isHeld && !isJustUpdated ? 'opacity-50' : ''}`}>
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {item.contextLine}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <StatusBadge status={currentStatus || item.severity} />
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    {item.city} · {item.timestamp}
                  </span>
                  {isJustUpdated && (
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      ✓ Done
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="secondary"
                  disabled={isHeld}
                  onClick={() => handleHold(item.id)}
                >
                  {t('hold')}
                </Button>
                <Button
                  variant="primary"
                  disabled={isHeld}
                  onClick={() => handleApprove(item.id)}
                >
                  {t('approve')}
                </Button>
              </div>
            </li>
          );
        })}

        {visibleItems.length === 0 && (
          <li className="px-5 py-6">
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              All action items resolved.
            </p>
          </li>
        )}
      </ul>
    </section>
  );
}

export default ActionQueue;