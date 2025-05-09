import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Next Level You: CV, Resume & LinkedIn" /> <br />
            <TitleLogo title="Get Ready!" />
          </div>
          <div>
            <button className="button-primary">Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
