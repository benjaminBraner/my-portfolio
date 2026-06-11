import './styles/core.css'
import './styles/navbar.css'
import './styles/main.css'
import './styles/about.css'
import './styles/message.css'
import './styles/stack.css'
import './styles/projects.css'
import './styles/contact.css'
import './styles/footer.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Message from './components/Message'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="light-theme">
      <Navbar />
      <Hero />
      <About />
      <Message />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
