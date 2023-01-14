import React from "react"
import "./About.scss"

export function About() {
  return <body className="body-about">
    <span>
    <div>
      <h4>Sofia, Bulgaria</h4>
      <h6>Stara Planina street</h6>
      <p>11:00 - 19:00</p>
    </div>
    <div>
      <h4>Amsterdam, Netherlands</h4>
      <h6>Nieuwe Hoogstraat</h6>
      <p>10:00 - 18:00</p>
    </div>
    <div>
      <h4>Vienna, Austria</h4>
      <h6>Kärntner Strasse</h6>
      <p>9:00 - 21:00</p>
    </div>
    <div>
      <h4>Paris, France</h4>
      <h6>Avenue Victor Hugo</h6>
      <p>10:00 - 20:00</p>
    </div>
    </span>
    <span>
      <img src="./public/imgs/map.png" />
    </span>
  </body>
}

