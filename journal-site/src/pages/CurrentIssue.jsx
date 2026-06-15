// src/pages/CurrentIssue.jsx

export default function CurrentIssue() {
  const papers = [
    {
      title: "The Impact of Artificial Intelligence on Modern Healthcare Systems",
      authors: "Dr. Sarah Jenkins, Mark Sterling",
      pages: "1 - 15",
    },
    {
      title: "Sustainable Urban Development: A Case Study of Green Infrastructure",
      authors: "Prof. Alan Turing, Jane Doe",
      pages: "16 - 32",
    },
    {
      title: "Advancements in Quantum Computing Algorithms for Cryptography",
      authors: "Dr. Emily Chen, David Wu",
      pages: "33 - 48",
    }
  ];

  return (
    <div className="section5">
      <div className="section6">
        <h2 className="text5">Current Issue: Volume 10, Issue 1</h2>
        <p className="text4" style={{ fontWeight: 'bold' }}>Published: April 2024 | ISSN: 1234-5678</p>
        
      
        <div className="grid1" style={{ gridTemplateColumns: '1fr', gap: '30px', marginTop: '20px' }}>
          
          {papers.map((paper, index) => (
            <div 
              key={index} 
              className="grid-item" 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'default', paddingBottom: '25px' }}
            >
              <h3 style={{ fontSize: '1.4rem', color: '#1a237e', marginBottom: '8px', lineHeight: '1.4' }}>
                {paper.title}
              </h3>
              
              <p style={{ color: '#444', fontSize: '1rem', marginBottom: '5px' }}>
                <strong>Authors:</strong> {paper.authors}
              </p>
              
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>
                <strong>Pages:</strong> {paper.pages}
              </p>
              
              
              <button className="button2">
                📄 Download PDF
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}