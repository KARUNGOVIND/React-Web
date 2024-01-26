import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import './App.css'
import React from 'react'
import Effect from './pages/Effect'
import Reduce from './Reduce'


export default function App() {
  return (
    <BrowserRouter>                                         
    <div className="kec">Web Wires</div>
    <Routes>
      <Route path="/"element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    <div style={{padding:"20px"}}></div>
      <div className="effect">
      <Effect/>
      <Reduce/>
      </div>
      <div style={{padding:"20px"}}></div>
      <div class="last">
        <div class="lasst">
          <div class="lastrig">
      <div class="coll">
        <div class="pad"><b>Product</b></div>
        <div class="pad">Delta</div>
        <div class="pad">Sigma</div>
        <div class="pad">Zita</div>
        <div class="pad">Alpha</div>
      </div>
    </div>
    <div class="lastrig">
      <div class="coll">
        <div class="pad"><b>Resources</b></div>
        <div class="pad">Help</div>
        <div class="pad">Training Videos</div>
        <div class="pad">Webinar</div>
        <div class="pad">Request a demo</div>
        <div class="pad">Create Survey </div>
      </div>
    </div>
    <div class="lastrig">
      <div class="coll">
        <div class="pad"><b>Company</b></div>
        <div class="pad">About Us</div>
        <div class="pad">Career</div>
        <div class="pad">Team</div>
        <div class="pad">Contact Us</div>
      </div>
    </div>
    </div>
    </div>
    </BrowserRouter>
  )
}
// import React from 'react'
// import Effect from './pages/Effect'
// import Reduce from './Reduce'

// export default function App() {
//   return (
//     <div>
//       <Effect/>
//       <Reduce/>
//       </div>
//   )
// }
