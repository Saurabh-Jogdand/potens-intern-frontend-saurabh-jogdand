import { useLanguage } from '../../context/LanguageContext';

const severityStyles = {
  critical: 'bg-red-500',
  elevated: 'bg-amber-500',
  routine: 'bg-neutral-400 dark:bg-neutral-500',
  approved: 'bg-emerald-500',
  held: 'bg-neutral-400 dark:bg-neutral-500',
};

const severityRank = {
  critical: 0,
  elevated: 1,
  routine: 2,
};

function StatusBadge({ status }) {
  const { t } = useLanguage();

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
      <span className={`h-1.5 w-1.5 rounded-full ${severityStyles[status] || 'bg-neutral-400'}`} />
      {t(`severity.${status}`) || status}
    </span>
  );
}

export default StatusBadge;
export { severityRank };