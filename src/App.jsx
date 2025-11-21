import { Header } from "./components/header/header"
// import { Skills } from "../src/components/skills"
import { Project } from "../src/components/projects"
import { Tech } from "../src/components/tech"
import { Skills } from "./components/skills"
// import { Articles } from "../src/components/articles"
import { Contact } from "../src/components/contact"



export const App = () => {
  return (
    <>

      <Header />

      {/* <Skills /> */}

      <Project />

      <Tech />

      {/* <Articles /> */}

      <Contact />

    </>
  )
}