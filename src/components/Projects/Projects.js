import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

// const Projects = () => {
//   if (!projects.length) return null

//   return (
//     <section id='projects' className='section projects'>
//       <h2 className='section__title'>Projects</h2>

//       <div className='projects__grid'>
//         {projects.map((project) => (
//           <ProjectContainer key={uniqid()} project={project} />
//         ))}
//       </div>
//     </section>
//   )
// }

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Experience</h2>
      <div className='projects_list'>
        {experience.map((exp) => (
          <div key={uniqid()} className='projects__item'>
            <h3 className='projects__role'>{exp.name}</h3>
            <ul className='projects__description'>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Projects
