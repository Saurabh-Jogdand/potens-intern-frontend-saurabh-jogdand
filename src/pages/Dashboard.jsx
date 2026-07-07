import MorningBrief from '../components/dashboard/MorningBrief';
import ActionQueue from '../components/dashboard/ActionQueue';
import AnomalyPanel from '../components/dashboard/AnomalyPanel';
import useCounter from '../hooks/useCounter';
import { useLanguage } from '../context/LanguageContext';

function Dashboard() {
  const inTransit = useCounter(482, 1, 5000);
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <MorningBrief />

      <div className="flex items-baseline gap-3 border-t border-b border-neutral-200 dark:border-neutral-800 py-4">
        <span className="text-4xl font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
          {inTransit}
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">{t('vehiclesInTransit')}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-6">
        <ActionQueue />
        <AnomalyPanel />
      </div>
    </div>
  );
}

export default Dashboard;