function Home() {
  return (
    <div>

      {/* HERO SECTION */}

      <div className="hero-container">

        <h3 className="welcome">Welcome to LearnLoop</h3>

        <h1 className="hero-title">
          Start Your Journey With <span className="brand-highlight">LearnLoop</span>
        </h1>

        <p className="hero-description">
          A perfect guide for your future tech dreams. LearnLoop helps
          you master programming, prepare for placements, attend mentor
          sessions and grow into a confident developer.
        </p>

        <p className="hero-subtext">
          Learn • Practice • Build • Achieve
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Start Learning</button>
          <button className="btn-secondary">Explore Courses</button>
        </div>

      </div>


      {/* FEATURES SECTION */}

      <div className="features">

        <div className="feature-box">
          <h3>🚀 Learn Skills</h3>
          <p>
            Explore web development, programming and real world projects
            designed to build strong technical foundations.
          </p>
        </div>

        <div className="feature-box">
          <h3>💼 Placement Preparation</h3>
          <p>
            Practice aptitude, coding challenges and interview questions
            to prepare yourself for top tech company placements.
          </p>
        </div>

        <div className="feature-box">
          <h3>🤖 AI Guided Practice</h3>
          <p>
            Get instant explanations, coding guidance and practice
            support through intelligent AI powered learning.
          </p>
        </div>

      </div>


      {/* COURSES SECTION */}

      <div className="courses-section">

        <h2 className="section-title">Popular Courses</h2>

        <div className="courses">

          <div className="course-card">
            <h3>Web Development</h3>
            <p>
              Learn HTML, CSS, JavaScript and React to build modern websites.
            </p>
            <button className="course-btn">Start Course</button>
          </div>

          <div className="course-card">
            <h3>Python Programming</h3>
            <p>
              Master Python fundamentals, problem solving and automation.
            </p>
            <button className="course-btn">Start Course</button>
          </div>

          <div className="course-card">
            <h3>Data Structures</h3>
            <p>
              Strengthen your coding logic and prepare for technical interviews.
            </p>
            <button className="course-btn">Start Course</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;