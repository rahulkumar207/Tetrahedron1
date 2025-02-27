import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">Home </Link>
        </li>

        <li className="dropdown">
          <Link href="#">About</Link>
          <ul>
            <li>
              <Link href="about-us">Who We Are</Link>
            </li>
            <li>
              <Link href="team">Our Team</Link>
            </li>
            <li className="dropdown">
              <Link href="#">Policies</Link>
              <ul>
                <li>
                  <Link href="privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="terms-of-services">Terms of Services</Link>
                </li>
                
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="#">Consulting</Link>
          <ul>
            <li className="dropdown">
              <Link href="#">Mafacturing Excellence Services</Link>
              <ul>
                <li>
                  <Link href="team">Operational Excellence Consulting</Link>
                </li>
                <li>
                  <Link href="testimonials">TPM Consulting</Link>
                </li>
                <li>
                  <Link href="pricing">TQM Consulting</Link>
                </li>
                <li>
                  <Link href="gallery">Lean Manufacturing Cost Reduction</Link>
                </li>
                <li>
                  <Link href="faq">Visual Management Consulting</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="testimonials">Plant Layout Design</Link>
            </li>

            <li className="dropdown">
              <Link href="pricing">Dojo Training Center</Link>
              <ul>
                <li>
                  <Link href="team">
                    DOJO Training Center | DOJO Center | DOJO Simulations
                  </Link>
                </li>
                <li>
                  <Link href="testimonials">DOJO 2.0</Link>
                </li>
                <li>
                  <Link href="pricing">
                    Mini DOJO Training Center Design And Setup
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="gallery">Safety Management System</Link>
            </li>

            <li className="dropdown">
              <Link href="faq">ISO Implementation</Link>
              <ul>
                <li>
                  <Link href="testimonials">
                    ISO 9001:2015 (Quality Management System)
                  </Link>
                </li>
                <li>
                  <Link href="team">
                    ISO For Safety Management | ISO 45001 Consultancy | ISO
                    45001 Safety Management System
                  </Link>
                </li>
                <li>
                  <Link href="pricing">
                    ISO 31000:2018 Enterprise Risk Management System
                    Implementation ERM
                  </Link>
                </li>
                <li>
                  <Link href="gallery">
                    ISO 14001:2015 (Environmental Management System)
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    ISO 50001 EnMS (Energy Management System)
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="faq">Energy Cost Reduction Services</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="#">Skill Training</Link>
          <ul>
            <li>
              <Link href="services">Corporate Training Course In India</Link>
            </li>

            <li className="dropdown">
              <Link href="service-details">Technical Training Courses</Link>
              <ul>
                <li>
                  <Link href="team">
                    Advanced Product Quality Planning Program-APQP
                  </Link>
                </li>
                <li>
                  <Link href="testimonials">
                    Design Failure Mode Effect Analysis – DFMEA
                  </Link>
                </li>
                <li>
                  <Link href="pricing">
                    Process Failure Mode Effect Analysis – PFMEA
                  </Link>
                </li>
                <li>
                  <Link href="gallery">
                    Statistical Process Control Training – SPC
                  </Link>
                </li>
                <li>
                  <Link href="faq">Measurement System Analysis (MSA)</Link>
                </li>
                <li>
                  <Link href="faq">
                    GD&T Training | Geometric Dimensioning and Tolerancing
                  </Link>
                </li>
                <li>
                  <Link href="faq">Advanced GD&T Training Course | GD&T</Link>
                </li>
                <li>
                  <Link href="faq">Inventory Management Courses</Link>
                </li>
                <li>
                  <Link href="faq">
                    Production Part Approval Process – PPAP
                  </Link>
                </li>
                <li>
                  <Link href="faq">Industry 4.0 Courses | Training</Link>
                </li>
                <li>
                  <Link href="faq">Industry 5.0</Link>
                </li>
                <li>
                  <Link href="faq">Virtual Reality – VR</Link>
                </li>
                <li>
                  <Link href="faq">Design Of Experiment – DOE</Link>
                </li>
                <li>
                  <Link href="faq">Electric Vehicle – EV</Link>
                </li>
                <li>
                  <Link href="faq">
                    Design For Quality | DFQ Training Courses
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Overall Equipment Effectiveness Training | OEE
                  </Link>
                </li>
                <li>
                  <Link href="faq">TPM In Manufacturing Training Courses</Link>
                </li>
                <li>
                  <Link href="faq">
                    UL 60335-2-40/CSA Training Harmonized IEC Standard’
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Industrial Control Panel Standard UL 508A Training
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link href="services">Process Improvement Training Courses</Link>
              <ul>
                <li>
                  <Link href="team">
                    Cost Reduction Strategies | Training Courses
                  </Link>
                </li>
                <li>
                  <Link href="testimonials">
                    Problem Solving with new 7 QC Tools Training in India
                  </Link>
                </li>
                <li>
                  <Link href="pricing">
                    Line Balancing in Manufacturing | Training
                  </Link>
                </li>
                <li>
                  <Link href="gallery">
                    Root Cause Analysis Training | RCA Training
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Simple & Low-Cost Automation | Industrial Automation Course
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    5s Safety Training in Workplace | Lean Training
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Value Engineering & Value Analysis Training
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Performance Management and Improvement Plan
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Total Quality Management (TQM) Training Course in India
                  </Link>
                </li>
                <li>
                  <Link href="faq">Quality Control System</Link>
                </li>
                <li>
                  <Link href="faq">Cost Reduction by Lean Manufacturing</Link>
                </li>
                <li>
                  <Link href="faq">
                    Why Why Analysis | Fish-born | 5 why training
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Kaizen Training Program| Kaizen Certification
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link href="services">
                Strategic Management And Training Consultants
              </Link>
              <ul>
                <li>
                  <Link href="team">
                    Environmental, Social and Governance (ESG) Training
                  </Link>
                </li>
                <li>
                  <Link href="testimonials">Daily Work Management</Link>
                </li>
                <li>
                  <Link href="pricing">
                    Design Thinking Course | Online Trainings
                  </Link>
                </li>
                <li>
                  <Link href="gallery">
                    Finanace For Non Finance Managers Training
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Theory Of Inventive Problem Solving (Triz)
                  </Link>
                </li>
                <li>
                  <Link href="faq">Balance Score Card</Link>
                </li>
                <li>
                  <Link href="faq">Competency Mapping</Link>
                </li>
                <li>
                  <Link href="faq">Productivity Focus Skill Mapping</Link>
                </li>
                <li>
                  <Link href="faq">World Class Manufacturing</Link>
                </li>
                <li>
                  <Link href="faq">DWM and Time Management Techniques</Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link href="services">Behavioural Training</Link>
              <ul>
                <li>
                  <Link href="team">Presentation Skills Training Courses</Link>
                </li>
                <li>
                  <Link href="testimonials">
                    The Art of Delegation Training
                  </Link>
                </li>
                <li>
                  <Link href="pricing">
                    Planning & Prioritization Skills Training
                  </Link>
                </li>
                <li>
                  <Link href="gallery">
                    Team, Time and Task Management Training & Seminars
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    Non Verbal Communication Online Training
                  </Link>
                </li>
                <li>
                  <Link href="404">
                    Team Development & Motivation Training Programmes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="#">AMR/AGV</Link>
          <ul>
            <li>
              <Link href="projects">Autonomous Mobile Robot | AGV | AMR</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/career">Career</Link>
        </li>

        <li>
          <Link href="/career">Case Studies</Link>
        </li>

        <li>
          <Link href="blogs">Blogs</Link>
        </li>

        <li>
          <Link href="contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
