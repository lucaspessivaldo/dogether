import Navbar from "./components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import SectionHero from "./components/sectionHero"
import Footer from "./components/footer"
import Cards from "./components/cards"
import SectionOne from "./components/sectionOne"
import SectionTwo from "./components/sectionTwo"
import SectionThree from "./components/sectionThree"
import { AccordionTokes } from "./components/accordionTokes"
import SectionFour from "./components/sectionFour"
import Jumbotron from "./components/jumbotron"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <SectionHero />
      <SectionOne />
      <Cards />
      <SectionTwo />
      <SectionThree />
      <AccordionTokes />
      <SectionFour />
      <Jumbotron />
      <Footer />
    </ThemeProvider>
  )
}

export default App
