export interface DemoClass {
  code: string; name: string; instructor: string; credits: number; location: string;
  days: string; time: string; startUTC: string; endUTC: string; byDay: string;
}
const escape = (s: string) => s.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
export function makeCalendar(classes: DemoClass[], stamp = new Date()) {
  const utcStamp = stamp.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Spattoor//Synthetic Student Dashboard//EN', 'CALSCALE:GREGORIAN'];
  for (const cls of classes) lines.push('BEGIN:VEVENT', `UID:${cls.code.replace(/[^a-z0-9]/gi, '')}-2026@spattoor.github.io`,
    `DTSTAMP:${utcStamp}`, `DTSTART:${cls.startUTC}`, `DTEND:${cls.endUTC}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${cls.byDay};UNTIL=20261205T055959Z`, `SUMMARY:${escape(cls.code + ' · ' + cls.name)}`,
    `LOCATION:${escape(cls.location)}`, 'DESCRIPTION:Synthetic portfolio schedule. Not an official TTU enrollment record.', 'END:VEVENT');
  lines.push('END:VCALENDAR');
  // RFC 5545 limits content lines to 75 octets. Fold without splitting UTF-8 characters.
  const folded: string[] = [];
  for (const line of lines) {
    let part = '', bytes = 0;
    for (const character of line) {
      const size = new TextEncoder().encode(character).length;
      if (bytes + size > 75) { folded.push(part); part = ' '; bytes = 1; }
      part += character; bytes += size;
    }
    folded.push(part);
  }
  return folded.join('\r\n') + '\r\n';
}
