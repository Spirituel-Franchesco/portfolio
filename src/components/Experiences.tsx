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

const Experiences = () => {
  return (
    <div>
      <Title title="Expériences" />
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
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
        <div></div>
      </div>
    </div>
  );
};
export default Experiences;
