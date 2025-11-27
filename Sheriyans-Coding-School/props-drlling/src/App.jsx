import {Bookmark} from 'lucide-react'
import './App.css'

function App() {
  return (
    <>
     <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span>4 days ago</span></h3>
          <h2>Senior Web Developer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>   
              <h3>$120/hr</h3>
              <p>Noida , India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
