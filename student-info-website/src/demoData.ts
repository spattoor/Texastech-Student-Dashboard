import type { DemoClass } from './calendar';
export const classes: DemoClass[] = [
  { code: 'DEMO 101', name: 'Algorithms workshop', instructor: 'Demo Instructor A', credits: 3, location: 'Texas Tech University Library', days: 'Monday, Wednesday', time: '10:00–10:50 AM CST', startUTC: '20261102T160000Z', endUTC: '20261102T165000Z', byDay: 'MO,WE' },
  { code: 'DEMO 202', name: 'Software project studio', instructor: 'Demo Instructor B', credits: 3, location: 'Texas Tech University Student Union', days: 'Tuesday, Thursday', time: '2:00–3:15 PM CST', startUTC: '20261103T200000Z', endUTC: '20261103T211500Z', byDay: 'TU,TH' },
];
export const student = { name: 'Demo Student', rNumber: 'SYNTHETIC-0000', term: 'Sample: November–December 2026', classes,
  totalCredits: 6, advisors: [], instructors: [], financialAidContact: 'For current official contacts, use the cited campus resources below.' };
