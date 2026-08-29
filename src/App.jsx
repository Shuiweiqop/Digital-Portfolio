import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Certifications from './components/Certifications'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './useReveal'
import { SkillFocusProvider } from './SkillFocus'
import { profile, about, projects, experience, skills, education, certifications } from './data'

export default function App() {
  useReveal()

  return (
    <SkillFocusProvider>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <Certifications certifications={certifications} />
        <About about={about} education={education} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </SkillFocusProvider>
  )
}
