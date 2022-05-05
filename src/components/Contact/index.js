import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3pka6ut',
        'template_0rmuogj',
        refForm.current,
        '8BC5pvk3oHLuGJIXI'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to  send the message')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dolores, odio debitis quam esse voluptates labore eum ea quis
            facilis, hic fugiat laborum assumenda officia sequi deleniti iusto
            veniam autem sint! Dignissimos illum quibusdam fugit consequuntur
            modi doloribus voluptatum. Quisquam?
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Sukharyev Oleksander,
          <br />
          Spain,
          <br />
          c/Doctor Sanchez 42, 28018 <br />
          Madrid <br />
          <span>oleksandrsukharyev@gmail.com</span>
        </div> */}
        <div className="map-wrap">
          <MapContainer center={[40.416729, -3.703339]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.416729, -3.703339]}>
              <Popup>
                Oleksander lives here, come over for a cup of coffee
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
