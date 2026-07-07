import { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import StatusBadge from '../shared/StatusBadge';
import Button from '../shared/Button';
import actionItems from '../../data/actionItems';
import { useLanguage } from '../../context/LanguageContext';

function ActionQueue() {
  const { t } = useLanguage();
  const [statusMap, setStatusMap] = useState({});
  const [justUpdatedId, setJustUpdatedId] = useState(null);

  const handleApprove = (id) => {
    setStatusMap((prev) => ({ ...prev, [id]: 'approved' }));
    setJustUpdatedId(id);
    setTimeout(() => setJustUpdatedId((current) => (current === id ? null : current)), 1500);
  };

  const handleHold = (id) => {
    setStatusMap((prev) => ({ ...prev, [id]: 'held' }));
    setJustUpdatedId(id);
    setTimeout(() => setJustUpdatedId((current) => (current === id ? null : current)), 1500);
  };

  return (
    <section className="border border-neutral-200 rounded-lg bg-white">
      <div className="px-5 py-4">
        <SectionHeader title={t('actionItemsTitle')} />
      </div>

      <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
        {actionItems.map((item) => {
          const currentStatus = statusMap[item.id];
          const isResolved = Boolean(currentStatus);
          const isJustUpdated = justUpdatedId === item.id;

          return (
            <li
              key={item.id}
              className="px-5 py-4 flex items-start justify-between gap-4 transition-opacity duration-300"
            >
              <div className={`min-w-0 ${isResolved && !isJustUpdated ? 'opacity-50' : ''}`}>
                <p className="text-sm font-medium text-neutral-900 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {item.contextLine}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <StatusBadge status={currentStatus || item.severity} />
                  <span className="text-xs text-neutral-400">
                    {item.city} · {item.timestamp}
                  </span>
                  {isJustUpdated && (
                    <span className="text-xs font-medium text-emerald-600">
                      ✓ Done
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="secondary"
                  disabled={isResolved}
                  onClick={() => handleHold(item.id)}
                >
                  {t('hold')}
                </Button>
                <Button
                  variant="primary"
                  disabled={isResolved}
                  onClick={() => handleApprove(item.id)}
                >
                  {t('approve')}
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ActionQueue;