import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            necessitatibus cumque porro cupiditate, provident corrupti voluptas
            quam recusandae molestiae voluptate!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            architecto, perspiciatis quod culpa facilis sed voluptate placeat
            rerum enim ipsa repellat aperiam ad quos numquam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in aut
            adipisci! Hic dignissimos suscipit ea minima, iure, repellendus
            deleniti placeat alias aut earum culpa odio! Libero nam quas
            reprehenderit.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
