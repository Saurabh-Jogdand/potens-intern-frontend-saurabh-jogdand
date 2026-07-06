const severityStyles = {
  critical: 'bg-red-500',
  elevated: 'bg-amber-500',
  routine: 'bg-neutral-400',
  approved: 'bg-emerald-500',
  held: 'bg-neutral-400',
};

const severityLabels = {
  critical: 'Critical',
  elevated: 'Elevated',
  routine: 'Routine',
  approved: 'Approved',
  held: 'On hold',
};

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
      <span className={`h-1.5 w-1.5 rounded-full ${severityStyles[status] || 'bg-neutral-400'}`} />
      {severityLabels[status] || status}
    </span>
  );
}

export default StatusBadge;