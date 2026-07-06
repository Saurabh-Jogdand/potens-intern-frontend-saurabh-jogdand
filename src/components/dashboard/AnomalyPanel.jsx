import SectionHeader from '../shared/SectionHeader';

function AnomalyPanel() {
  return (
    <section className="border border-neutral-200 rounded-lg bg-white">
      <div className="px-5 py-4 border-b border-neutral-200">
        <SectionHeader title="AI Watch" />
      </div>
      <div className="px-5 py-6">
        <p className="text-sm text-neutral-400">
          Anomalies will appear here.
        </p>
      </div>
    </section>
  );
}

export default AnomalyPanel;