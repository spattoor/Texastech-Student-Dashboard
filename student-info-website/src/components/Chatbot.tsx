import React, { useState } from 'react';
const facts = [
  { id: 'registrar', terms: ['registrar', 'register', 'registration', 'transcript', 'enrollment', 'records'], text: 'The Registrar provides registration, transcript, enrollment, and degree-record services. Check its official page for current contacts and office hours.', url: 'https://www.depts.ttu.edu/registrar/' },
  { id: 'calendar', terms: ['calendar', 'semester', 'dates', 'academic'], text: 'Use the academic calendar linked by the Registrar for current university dates. The schedule in this demo is synthetic.', url: 'https://www.depts.ttu.edu/registrar/' },
  { id: 'financial', terms: ['fafsa', 'aid', 'financial', 'scholarship', 'scholarships'], text: 'Financial Aid and Scholarships provides official guidance on aid applications and scholarships. Eligibility and personal awards must be confirmed with the office.', url: 'https://www.depts.ttu.edu/financialaid/' }
];
export default function Chatbot() {
  const [question, setQuestion] = useState('Where can I get my transcript?');
  const [results, setResults] = useState<typeof facts | null>(null);
  function search(e: React.FormEvent) {
    e.preventDefault();
    const words = new Set(question.toLowerCase().match(/[a-z]+/g) || []);
    setResults(facts.map(f => ({...f, score: f.terms.filter(t => words.has(t)).length})).filter(f => f.score > 0).sort((a,b) => b.score-a.score));
  }
  return <div className="chat-card"><form onSubmit={search}><label htmlFor="campus-question">Find an official campus resource</label><textarea id="campus-question" value={question} onChange={e => setQuestion(e.target.value)} maxLength={300} required rows={3} /><button>Find sources</button></form>
    <p className="small">Free reference search, not AI. No question is sent to a server. Public campus questions only.</p>
    <div aria-live="polite">{results !== null && (results.length ? results.map(f => <div key={f.id}><p>{f.text}</p><a href={f.url} target="_blank" rel="noopener noreferrer">Official TTU source ↗</a></div>) : <p>No match in this small reference set. Try “transcript,” “calendar,” or “financial aid.”</p>)}</div></div>;
}
