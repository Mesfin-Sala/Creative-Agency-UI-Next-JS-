import Banner from "@/components/Banner"

import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Expanding Career Horizons for Every Student." />
              <p className="desc-p">
                Elevate Your Future!
                At J.U. Career Boost, we specialize in
                crafting standout resumes, CVs, and LinkedIn profiles tailored
                for Jimma University students. Impress employers and land your
                dream opportunities. Invest in your success today!
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">1+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">100+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo"></h1>
                  <h3></h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/image.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/mmm.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                To be the leading force in equipping every university student
                with compelling LinkedIn profiles, impactful CVs, and strategic
                resumes. At JuCareer Hub, we understand the unique challenges
                and opportunities facing students entering the professional
                world. Our expertise lies in transforming potential into
                tangible assets, ensuring you stand out in a competitive
                landscape. We go beyond basic document creation, crafting
                personalized narratives that showcase your skills, experiences,
                and aspirations. Partner with JuCareer Hub Agency and take
                confident steps towards your career goals. Your success is our
                priority.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Agency
