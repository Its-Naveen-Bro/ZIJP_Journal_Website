// src/pages/Issues2025.jsx

export default function Issues2025() {
  const issues = [
    { title: "Volume 10, Issue 3 - March", date: "July 2025" },
    { title: "Volume 10, Issue 2 - February", date: "May 2025" },
    { title: "Volume 10, Issue 1 - January", date: "January 2025" }
  ];

  return (
    <div className="section5">
      <div className="section6">
        <h2 className="text5">2025 Issues (Volume 10)</h2>
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