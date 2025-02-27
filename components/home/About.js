'use client'

export default function About() {
    return (
        <>

            {/*About Two Start */}
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">ABOUT US</span>
                                    </div>
                                    <h2 className="section-title__title"
                                        style={{ display: "flex", flexDirection: "column", textAlign: "left", fontSize: "clamp(32px, 4vw, 36px)", lineHeight: "1.2" }}>
                                        Tetrahedron Manufacturing
                                        <span style={{ display: "block" }}>Services Pvt Ltd</span>
                                    </h2>

                                </div><p className="about-two__text" style={{ textAlign: "justify", marginBottom: "10px" }}>
                                    Tetrahedron provides manufacturing optimization consulting services. It is India’s one of the fastest-growing
                                    end-to-end solution providers to 280+ manufacturing companies in 20 different industry segments.
                                    TMS supports its customers in improving profitability and sustenance through 3 different service verticals.
                                </p>

                                <p className="about-two__text" style={{ textAlign: "justify" }}>
                                    Manufacturing Management Consulting, Automation & Industry 4.0, Training and Skill Development,
                                    by designing, developing, implementing the focused solution.
                                </p>
                                {/* <ul className="list-unstyled about-two__points">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>ConstructoPro Building Your Dreams</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Construction with Precision</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Constructive Innovations</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Craftsmen Construction</p>
                                    </div>
                                </li>
                            </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div className="about-two__img wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <img src="assets/images/resources/about-two-img-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End */}
        </>
    )
}
