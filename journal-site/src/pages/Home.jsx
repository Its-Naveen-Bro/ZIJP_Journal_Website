import { Search } from 'lucide-react';

export default function Home() {
  const subjects = [
    "Area Studies", "Economics, Finance, Business & Industry", "Health and Social Care", "Museum and Heritage Studies",
    "Arts", "Education", "Humanities", "Physical Sciences",
    "Behavioral Sciences", "Engineering & Technology", "Information Science", "Politics & International Relations"
  ];

  return (
    <div>

      <section className="section2">
  
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="vv1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>


        <div className="hero-content-wrapper">
          <h1 className="text1">Search journals and articles</h1>
          
          <div className="section3">
            <input 
              type="text" 
              placeholder="Enter keywords, authors, DOI, etc" 
              className="input1"
            />
            <button className="button1">
              <Search size={24} />
            </button>
          </div>

          <p className="text2">484,000+ articles | 1,500+ journals</p>
          
          <button className="button2">
            <Search size={18} /> Find a journal
          </button>
        </div>
      </section>

  
      <section className="section14">
        <h2 className="text1" align="center">Happening Across Scholarly Online</h2>
        <p className="text16">
          From the latest conferences and community events to the courses and opportunities that can help you grow in your research career, here's what's new.
        </p>

        <div className="grid5">

          <div className="card1">
            <img src="/img1.png" alt="Event" className="img1" />
            <div className="section15">
              <div className="text17">CONFERENCES, EVENTS & EXPERIENCES</div>
              <div className="text18">Scholarly Laureate Forum & Honors Ceremony</div>
            </div>
          </div>

      
          <div className="card1">
            <img src="/image2.png" alt="Impact" className="img1" />
            <div className="section15">
              <div className="text17">GLOBAL IMPACT</div>
              <div className="text18">10 Years of Advancing Technology for Humanity</div>
            </div>
          </div>


          <div className="card1">
            <img src="/image3.png" alt="Membership" className="img1" />
            <div className="section15">
              <div className="text17">MEMBERSHIP</div>
              <div className="text18">Join the global network of researchers and engineers</div>
            </div>
          </div>
        </div>
      </section>


      <section className="section4">
        <h2 className="text1">Explore journals and articles by subject</h2>
        <p className="text4">
          Search and explore the millions of quality, peer-reviewed journal articles published under our imprints.
        </p>

        <div className="grid1">
          {subjects.map((subject, index) => (
            <div key={index} className="grid-item">
              {subject}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}