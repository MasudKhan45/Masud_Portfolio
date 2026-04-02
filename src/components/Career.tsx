import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Intern</h4>
                <h5>Codec Technologies Pvt. Ltd. (Remote)</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Executed end-to-end data analysis projects using Python and SQL for
              data cleaning, transformation, and visualization. Developed interactive
              dashboards and visual reports (Matplotlib/Seaborn) for KPIs. Optimized
              data pipelines, reducing preprocessing time through automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Subject Matter Expert (Statistics)</h4>
                <h5>Chegg India Pvt. Ltd. (Remote)</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Solved complex statistical problems including Regression, Hypothesis Testing,
              and Probability with 95%+ accuracy. Maintained high throughput under
              strict SLAs, consistently delivering quality solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Lead & Technical Mentor (AI/ML)</h4>
                <h5>GFG Student Chapter, Bilaspur</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Led a team of 15+ members to host AI/ML workshops for 200+ students.
              Orchestrated technical events and hackathons, increasing student
              engagement by 40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
