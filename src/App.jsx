import { Fragment } from "react"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Footer from "./Footer"
import TaskBoard from "./Task/TaskBoard"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <Fragment>

      <Navbar />

      <HeroSection />

      <TaskBoard />

      <Footer />

      <ToastContainer />

    </Fragment>
  )
}
export default App