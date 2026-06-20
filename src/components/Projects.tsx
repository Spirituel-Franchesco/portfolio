import Title from "./Title";
import img1 from "../assets/projects/img1.png";
import img2 from "../assets/projects/img2.png";
import img3 from "../assets/projects/img3.png";
import { Video } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Premiers Pas",
    description:
      "Application mobile destinée aux nouveaux arrivants au Québec offrant navigation des ressources, intégration sociale, accompagnement dans les démarches administratives et vocabulaire québécois.",
    technologies: ["React Native", "JavaScript", "Expo", "Firebase"],
    demoLink: "https://www.youtube.com/watch?v=-sAont8RFM8",
    repoLink: "https://github.com/Spirituel-Franchesco/Premiers-Pas",
    image: img1,
  },
  {
    id: 2,
    title: "Online Store",
    description: "Application web de commerce en ligne.",
    technologies: ["React", "JavaScript", "Firebase", "HTML", "SCSS"],
    demoLink: "https://www.youtube.com/watch?v=kyYIE2wrOFE",
    repoLink: "https://github.com/Spirituel-Franchesco/Online-Store-Web3",
    image: img2,
  },
  {
    id: 3,
    title: "Osullivan Movies App",
    description:
      "Application mobile de catalogue de films avec mini-jeu de quiz intégré.",
    technologies: ["Java", "XML", "SQLite"],
    demoLink: "https://youtu.be/sMowIBdefFc",
    repoLink: "https://github.com/Spirituel-Franchesco/Osullivan-Movies-App",
    image: img3,
  },
];

const Projects = () => {
  return (
    <div className="mt-16" id="Projects">
      <Title title="Mes Projects" />
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-3 h-fit rounded-xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <div>
              <h1 className="text-xl my-2 font-bold">{project.title}</h1>
              <p className="text-sm mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="badge badge-accent badge-sm mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 justify-center">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-sm w-2/3"
              >
                Demo
                <Video className="w-4" />
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral btn-sm w-1/3"
              >
                <FaGithub className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
