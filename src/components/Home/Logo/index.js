import './index.scss'

import LogoS from '../../../assets/images/U.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 5,
        duration: 5,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img src={LogoS} alt="logo" className="solid-logo" ref={solidLogoRef} />
    </div>
  )
}

export default Logo
