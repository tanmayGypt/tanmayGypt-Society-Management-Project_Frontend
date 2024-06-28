function About() {
  return (
    <div>
      {" "}
      <div className="App">
        <header className="App-header">
          <h1>ABHIGYAN Alumni Network</h1>
          <p>
            Welcome to the ABHIGYAN Alumni Network! Our dedicated platform aims
            to maintain connections among graduates, celebrate their
            achievements, and foster networking opportunities. Whether you're
            looking to reconnect with old friends, seek mentorship, or explore
            new career prospects, our alumni network is here to support you
            every step of the way.
          </p>
          <button onClick={() => alert("Overview section")}>Overview</button>
          <h2>About Us</h2>
          <p>
            In view of the national and international scenario of the growing
            demand of qualified technical personnel in different streams of
            engineering technology and management, Bhartiya Brahmin Charitable
            Trust in 2005 laid the foundation of Bhagwan Parshuram Institute of
            Technology (BPIT). BPIT is approved by the Ministry of Human
            Resource Development, Government of India, and the Directorate of
            Training and Technical Education, Government of National Capital
            Territory, Delhi. It is affiliated to Guru Gobind Singh Indraprastha
            University, Delhi, and offers courses of Bachelor of Technology
            (B.Tech) and Master of Business Administration (MBA), which are
            approved by the All India Council of Technical Education (AICTE).
            BPIT also offers a three years full-time Bachelor of Business
            Administration program to set the foundation for future managers.
            The admission is through Common Entrance Test conducted by GGSIP
            University.
          </p>
          <button onClick={() => alert("About Us section")}>About Us</button>
        </header>
      </div>
    </div>
  );
}

export default About;
