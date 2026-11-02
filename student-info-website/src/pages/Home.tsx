import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';
import { makeCalendar } from '../calendar';
import { classes, student } from '../demoData';

export default function Home() {
  function downloadCalendar() {
    const url = URL.createObjectURL(new Blob([makeCalendar(classes)], { type: 'text/calendar;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'synthetic-ttu-schedule.ics'; a.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <main className="campus-shell">
    <header className="campus-header"><a href="#/" className="brand">TTU / STUDENT DASHBOARD</a><span>Portfolio demo</span></header>
    <section className="campus-hero"><p className="eyebrow">YOUR DAY, IN ONE PLACE</p><h1>A little less searching.<br /><span>A little more learning.</span></h1><p>A sample student workspace for schedules, campus directions, calendar export, and cited campus information.</p><p className="notice">All student details and classes below are synthetic. This is an independent portfolio project, not a TTU service.</p></section>
    <section className="campus-summary"><article><small>STUDENT</small><strong>Demo Student</strong></article><article><small>SAMPLE CREDITS</small><strong>6</strong></article><article><small>TIME ZONE</small><strong>America/Chicago</strong></article></section>
    <div className="section-heading"><div><p className="eyebrow">A WEEK AT A GLANCE</p><h2>Your sample schedule</h2></div><button onClick={downloadCalendar}>Export calendar (.ics)</button></div>
    <section className="course-grid">{classes.map(cls => <article className="course" key={cls.code}><p className="course-code">{cls.code} · SYNTHETIC</p><h3>{cls.name}</h3><p>{cls.days}<br /><strong>{cls.time}</strong></p><p>{cls.location}</p><a href={'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(cls.location + ', Lubbock TX')} target="_blank" rel="noopener noreferrer">Open Google Maps directions ↗</a></article>)}</section>
    <p><Link to="/student-details" state={student}>View the synthetic student details →</Link></p>
    <section className="campus-assistant"><div><p className="eyebrow">CAMPUS, WITH SOURCES</p><h2>Find the right place to ask.</h2><p>Search a small reference set for official Registrar, calendar, and financial aid links. This runs entirely in your browser and does not access grades, eligibility, or student accounts.</p><a href="https://www.depts.ttu.edu/registrar/" target="_blank" rel="noopener noreferrer">Registrar</a> · <a href="https://www.depts.ttu.edu/financialaid/" target="_blank" rel="noopener noreferrer">Financial Aid</a></div><Chatbot /></section>
    <footer>Built by Sai Abhinav Pattoor · React + TypeScript · <a href="https://github.com/spattoor/Texastech-Student-Dashboard">Source code</a><br />The sample calendar runs November 2–December 4, 2026. Times are fixed to CST for those dates; it is not a live university timetable.</footer>
  </main>;
}
