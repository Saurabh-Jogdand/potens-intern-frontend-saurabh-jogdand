const actionItems = [
  {
    id: 1,
    title: 'Route deviation — Vehicle MH12-4471',
    contextLine: 'Driver deviated 8km from planned route near Chakan',
    severity: 'critical',
    city: 'Pune',
    timestamp: '08:12 AM',
  },
  {
    id: 2,
    title: 'Delayed dispatch — Warehouse B',
    contextLine: '14 vehicles pending release, 40 min behind schedule',
    severity: 'elevated',
    city: 'Mumbai',
    timestamp: '08:20 AM',
  },
  {
    id: 3,
    title: 'Fuel threshold alert — Fleet Unit 7',
    contextLine: 'Average fuel level below 15% across 6 vehicles',
    severity: 'elevated',
    city: 'Nashik',
    timestamp: '08:34 AM',
  },
  {
    id: 4,
    title: 'Driver shift overlap — Route 22',
    contextLine: 'Two drivers assigned to same vehicle for next shift',
    severity: 'routine',
    city: 'Nagpur',
    timestamp: '08:41 AM',
  },
  {
    id: 5,
    title: 'Customer reschedule request',
    contextLine: '3 delivery windows require confirmation before noon',
    severity: 'routine',
    city: 'Pune',
    timestamp: '08:50 AM',
  },
];

export default actionItems;