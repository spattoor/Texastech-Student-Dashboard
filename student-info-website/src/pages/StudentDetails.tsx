import React from 'react';
import { Link } from 'react-router-dom';
export default function StudentDetails() {
  return <main className="campus-shell"><header className="campus-header"><Link to="/" className="brand">TTU / STUDENT DASHBOARD</Link><span>Portfolio demo</span></header>
    <section className="campus-hero"><p className="eyebrow">SYNTHETIC RECORD</p><h1>Demo Student</h1><p>Sample term: November–December 2026 · 6 sample credits</p><p className="notice">Fictional demonstration data. No university accounts, grades, or student records are accessed.</p></section>
    <section className="course-grid"><article className="course"><p className="course-code">DEMO 101</p><h2>Algorithms workshop</h2><p>Monday, Wednesday · 10:00–10:50 AM CST</p><p>Demo Instructor A · 3 sample credits</p><p>Texas Tech University Library</p></article><article className="course"><p className="course-code">DEMO 202</p><h2>Software project studio</h2><p>Tuesday, Thursday · 2:00–3:15 PM CST</p><p>Demo Instructor B · 3 sample credits</p><p>Texas Tech University Student Union</p></article></section>
    <p><Link to="/">← Back to schedule and campus resources</Link></p></main>;
}
