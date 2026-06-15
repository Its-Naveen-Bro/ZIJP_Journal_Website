// src/pages/Issues2024.jsx

export default function Issues2024() {

  const issues = [
    { title: "Volume 09, Issue 3 - March", date: "April 2024" },
    { title: "Volume 09, Issue 2 - February", date: "March 2024" },
    { title: "Volume 09, Issue 1 - January", date: "January 2024" }
  ];

  return (
    <div className="section5">
      <div className="section6">
        <h2 className="text5">2024 Issues (Volume 09)</h2>
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