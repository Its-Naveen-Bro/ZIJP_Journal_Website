// src/pages/Issues2026.jsx

export default function Issues2026() {

  const issues = [
    { title: "Volume 12, Issue 3 - March", date: "June 2026" },
    { title: "Volume 12, Issue 2 - February", date: "May 2026" },
    { title: "Volume 12, Issue 1 - January", date: "February 2026" }
  ];

  return (
    <div className="section5">
      <div className="section6">
        <h2 className="text5">2026 Issues (Volume 12)</h2>
        <p className="text4">Select an issue below to view the published research papers.</p>
        
       
        <div className="grid1" style={{ gridTemplateColumns: '1fr' }}>
          {issues.map((issue, index) => (
            <div 
              key={index} 
              className="grid-item" 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{issue.title}</span>
              <span style={{ color: '#666', fontWeight: 'normal' }}>{issue.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}