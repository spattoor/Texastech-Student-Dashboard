import test from 'node:test';
import assert from 'node:assert/strict';
import { makeCalendar } from '../src/calendar.ts';
test('calendar uses UTC dates, unique UIDs, CRLF, recurrence and UTF-8 safe folding', () => {
  const fixture = { code: 'DEMO 101', name: 'Synthetic class ' + 'é'.repeat(70), instructor: 'Demo', credits: 3, location: 'Room, A; B', days: 'Monday', time: '10 AM CST', startUTC: '20261102T160000Z', endUTC: '20261102T165000Z', byDay: 'MO' };
  const result = makeCalendar([fixture, { ...fixture, code: 'DEMO 202' }], new Date('2026-11-01T18:00:00Z'));
  assert.equal(result.match(/BEGIN:VEVENT/g).length, 2);
  assert.ok(result.includes('DTSTART:20261102T160000Z\r\n'));
  assert.ok(result.includes('DTEND:20261102T165000Z\r\n'));
  assert.ok(result.includes('UNTIL=20261205T055959Z'));
  assert.equal(new Set(result.match(/UID:[^\r]+/g)).size, 2);
  assert.ok(result.includes('LOCATION:Room\\, A\\; B'));
  for (const line of result.split('\r\n')) assert.ok(Buffer.byteLength(line) <= 75);
  assert.equal(result.replace(/\r\n[ \t]/g, '').includes(fixture.name), true);
});

import { classes } from '../src/demoData.ts';
test('actual demo export covers 20 sessions across two weekly classes', () => {
  const ics = makeCalendar(classes, new Date('2026-11-02T00:00:00Z'));
  const blocks = ics.split('BEGIN:VEVENT').slice(1);
  const weekdays = ['SU','MO','TU','WE','TH','FR','SA'];
  let total = 0;
  for (const block of blocks) {
    const start = block.match(/DTSTART:(\d{4})(\d{2})(\d{2})T/);
    const byday = block.match(/BYDAY=([^;]+)/)[1].split(',');
    const first = new Date(Date.UTC(+start[1], +start[2]-1, +start[3]));
    for (let d = first; d < new Date('2026-12-05T00:00:00Z'); d = new Date(+d + 86400000)) {
      if (byday.includes(weekdays[d.getUTCDay()])) total++;
    }
  }
  assert.equal(blocks.length, 2); assert.equal(total, 20);
});
