function Courses() {
  return (
    <div>

      <h2 className="section-title">Courses</h2>

      <div className="courses">

        <div className="course-card">
          <h3>Web Development</h3>

          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/embed/UB1O30fR-EE"
            title="Web Dev"
          ></iframe>

        </div>

        <div className="course-card">
          <h3>Python Programming</h3>

          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/embed/_uQrJ0TkZlc"
            title="Python"
          ></iframe>

        </div>

        <div className="course-card">
          <h3>React Basics</h3>

          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/embed/bMknfKXIFA8"
            title="React"
          ></iframe>

        </div>

      </div>

    </div>
  );
}

export default Courses;