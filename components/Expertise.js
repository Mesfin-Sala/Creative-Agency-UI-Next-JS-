import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              We Understand University Hiring. Our expertise
              in LinkedIn, CV, and resume building helps students make a strong
              impression on future employers.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise
