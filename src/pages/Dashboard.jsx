import MorningBrief from '../components/dashboard/MorningBrief';
import ActionQueue from '../components/dashboard/ActionQueue';
import AnomalyPanel from '../components/dashboard/AnomalyPanel';
import useCounter from '../hooks/useCounter';

function Dashboard() {
  const inTransit = useCounter(482, 1, 5000);

  return (
    <div className="space-y-8">
      <MorningBrief />

      <div className="flex items-baseline gap-2 border-t border-b border-neutral-200 py-3">
        <span className="text-2xl font-semibold tabular-nums text-neutral-900">
          {inTransit}
        </span>
        <span className="text-xs text-neutral-500">vehicles in transit</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-6">
        <ActionQueue />
        <AnomalyPanel />
      </div>
    </div>
  );
}

export default Dashboard;