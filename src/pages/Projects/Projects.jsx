import { useState, useEffect } from "react";
import "./Projects.css";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Amine-Triki/projects-data/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading projects:", error);
        setLoading(false);
      });
  }, []);

  const switchCategories = (category) => {
    setActiveCategory(category);
  };

  const categories = [
    { key: "all", label: "All works" },
    { key: "JavaScript", label: "JavaScript" },
    { key: "Wordpress", label: "Wordpress" },
    { key: "React", label: "React" },
    { key: "NextJs", label: "NextJs" },
    { key: "vue", label: "Vue" },
  ];

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Helmet>
        <title>My Projects</title>
        <link rel="icon" type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
      <section className="text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>My Projects</h2>
            <p>What I build</p>
          </div>
          <ul className="switcher bg-warning text-white d-flex flex-row py-3 justify-content-around px-0 flex-wrap sm:flex-column">
            {categories.map(({ key, label }) => (
              <li
                key={key}
                className={activeCategory === key ? "active" : ""}
                onClick={() => switchCategories(key)}
                style={{ cursor: "pointer" }}
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="gallery text-start">
            <div className="gap-5 d-flex justify-content-center flex-wrap">
              {projects
                .filter(
                  (project) =>
                    activeCategory === "all" ||
                    project.category === activeCategory
                )
                .map((project, index) => (
                  <div className={`post ${project.category} mb-3`} key={index}>
                    <div className="card h-100" style={{ width: "18rem" }}>
                      <img
                        src={project.imageSrc}
                        className="card-img-top"
                        alt={project.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-info">
                          {project.title}
                        </h5>
                        <p className="card-text">{project.description}</p>
                        <div className="d-flex justify-content-around">
                          {project.github && (
                            <a
                              href={project.github}
                              className="btn"
                              rel="noreferrer"
                              target="_blank"
                              style={{ backgroundColor: "#ffc0cb" }}
                            >
                              github
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              className="btn"
                              rel="noreferrer"
                              target="_blank"
                              style={{ backgroundColor: "#BFECFF" }}
                            >
                              Visit
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
