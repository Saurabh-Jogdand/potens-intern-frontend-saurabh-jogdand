const anomalies = [
  {
    id: 101,
    title: 'Unusual idle time — Vehicle MH12-4471',
    contextLine: 'Vehicle stationary for 22 minutes outside scheduled stop',
    severity: 'critical',
    detectedAt: '08:10 AM',
    linkedActionItemId: 1,
  },
  {
    id: 102,
    title: 'Speed pattern anomaly — Route 14',
    contextLine: 'Average speed 30% below historical baseline this morning',
    severity: 'elevated',
    detectedAt: '08:26 AM',
    linkedActionItemId: null,
  },
  {
    id: 103,
    title: 'Geofence re-entry — Warehouse C',
    contextLine: 'Vehicle re-entered depot zone shortly after departure',
    severity: 'routine',
    detectedAt: '08:44 AM',
    linkedActionItemId: null,
  },
];

export default anomalies;