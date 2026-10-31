// src/components/Home/Home.js
import About from '../About/About'
import ExploreOverview from '../ExploreOverview/ExploreOverview'
import Carousel from '../Carousel/Carousel'
import { experience, projects } from '../../portfolio'

const Home = ({ navigate }) => {
  const expItems = experience.map((e, i) => ({
    label: e.company,
    hook: e.hook,
    blurb: e.description && e.description[0],
    index: i,
  }))
  const prjItems = projects.map((p, i) => ({
    label: p.name,
    tag: p.stack && p.stack.length ? p.stack[0] : 'Project',
    hook: p.hook,
    blurb: p.description && p.description[0],
    index: i,
  }))

  return (
    <>
      <About />
      <ExploreOverview navigate={navigate} />
      <Carousel
        title='Experience'
        viewAllLabel='View all'
        items={expItems}
        onSelect={(i) => navigate('experience', i)}
        onViewAll={() => navigate('experience')}
      />
      <Carousel
        title='Projects'
        viewAllLabel='View all'
        items={prjItems}
        onSelect={(i) => navigate('projects', i)}
        onViewAll={() => navigate('projects')}
      />
    </>
  )
}

export default Home
