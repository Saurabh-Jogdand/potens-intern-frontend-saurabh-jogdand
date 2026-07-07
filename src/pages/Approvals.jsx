import actionItems from '../data/actionItems';
import StatusBadge from '../components/shared/StatusBadge';
import { useActionItems } from '../context/ActionItemsContext';

function Approvals() {
  const { statusMap } = useActionItems();
  const approvedItems = actionItems.filter((item) => statusMap[item.id] === 'approved');

  return (
    <div className="space-y-4">
      <h1 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
        Approvals
      </h1>

      {approvedItems.length === 0 ? (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          No items approved yet. Approved action items from the Cockpit will appear here.
        </p>
      ) : (
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900">
          {approvedItems.map((item) => (
            <li key={item.id} className="px-5 py-4">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {item.title}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {item.contextLine}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <StatusBadge status="approved" />
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  {item.city} · {item.timestamp}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Approvals;