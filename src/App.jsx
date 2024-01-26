import { Fragment } from "react"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Footer from "./Footer"
import TaskBoard from "./TaskBoard/TaskBoard"

const App = () => {
  return (
    <Fragment>

      <Navbar />

      <HeroSection />

      <TaskBoard />

      <Footer />

    </Fragment>
  )
}
export default App