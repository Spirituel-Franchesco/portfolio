import Title from "./Title";

import imgJS from "../assets/techno/js.png";
import imgJava from "../assets/techno/java.png";
import imgReact from "../assets/techno/react.png";
import imgReactNative from "../assets/techno/react-native.webp";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgSCSS from "../assets/techno/scss.png";
import imgTypeScript from "../assets/techno/typescript.svg";
import imgTailwind from "../assets/techno/tailwind.png";
import wintechnologie from "../assets/companies/wintechnologie.jpg";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    image: imgJS,
  },
  {
    id: 2,
    name: "Java",
    image: imgJava,
  },
  {
    id: 3,
    name: "React",
    image: imgReact,
  },
  {
    id: 4,
    name: "React Native",
    image: imgReactNative,
  },
  {
    id: 5,
    name: "HTML",
    image: imgHTML,
  },
  {
    id: 6,
    name: "CSS",
    image: imgCSS,
  },
  {
    id: 7,
    name: "SCSS",
    image: imgSCSS,
  },
  {
    id: 8,
    name: "TypeScript",
    image: imgTypeScript,
  },
  {
    id: 9,
    name: "Tailwind CSS",
    image: imgTailwind,
  },
];

const experiences = [
  {
    id: 1,
    rôle: "Stagiaire développeur mobile",
    company: "Win Technologie",
    duration: "Jan 2026 - Mars 2026",
    description: [
      "Développement d'une application mobile sociale pour amateurs de microbrasseries.",
      "Conception et intégration du backend complet avec Firebase/Firestore.",
      "Développement des interfaces avec FlutterFlow, intégration de l'API Mapbox Geocoding.",
    ],
    image: wintechnologie,
  },
];

const Experiences = () => {
  return (
    <div>
      <Title title="Expériences" />
      <div>
        <div className="flex flex-wrap justify-center gap-4 items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-24 h-24 p-2  rounded-full border-2 border-accent ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div>
              <div key={experience.id} className="flex items-center mt-4">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-10 h-10 object-cover "
                />
                <div className="ml-4">
                  <h3 className="text-lg text-accent font-bold">
                    {experience.rôle}, {experience.company}
                  </h3>
                  <span className="text-sm">{experience.duration}</span>
                </div>
              </div>
              <ul className="list-disc list-inside mt-2">
                {experience.description.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experiences;
