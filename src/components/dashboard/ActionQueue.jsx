import { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import StatusBadge from '../shared/StatusBadge';
import Button from '../shared/Button';
import actionItems from '../../data/actionItems';
import { useLanguage } from '../../context/LanguageContext';

function ActionQueue() {
  const { t } = useLanguage();
  const [statusMap, setStatusMap] = useState({});

  const handleApprove = (id) => {
    setStatusMap((prev) => ({ ...prev, [id]: 'approved' }));
  };

  const handleHold = (id) => {
    setStatusMap((prev) => ({ ...prev, [id]: 'held' }));
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

          return (
            <li key={item.id} className="px-5 py-4 flex items-start justify-between gap-4">
              <div className={`min-w-0 ${isResolved ? 'opacity-50' : ''}`}>
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