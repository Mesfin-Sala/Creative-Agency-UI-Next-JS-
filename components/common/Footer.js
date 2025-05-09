import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo
                title="Career
"
                caption="J.U"
                className="logobg"
              />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+251 949417565</h3>
              <br />
              <button className="button-primary">Request for quote</button>
            </div>
            <ul>
              <h3>Agency</h3>
              <li>
                <Link href="/">About agency</Link>
              </li>

              <li>
                <Link href="/">Showcase</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>

              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">CV(Curriculum Vitae)</Link>
              </li>
              <li>
                <Link href="/">
                  Resume 
                </Link>
              </li>
              <li>
                <Link href="/">LinkedIn Profile</Link>
              </li>
              <li>
                <Link href="/">Notion Portfolio Website</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2025 UTOPIA. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>UTOPIA Agency</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
