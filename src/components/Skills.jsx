function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Spring Boot",
    "MySQL",
    "WordPress",
    "Shopify",
    "AWS",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;