'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

const blogs = [
    {
        id: 1,
        title: "What is safety incident management",
        date: "November 16, 2024",
        image: "assets/images/blog/Banner1.png",
        link: "/blog-details",
        description: "A safety incident management system is a process of identifying, reporting, tracking, correcting, mitigating, and analyzing potential incidents across the workplace."
    },
    {
        id: 2,
        title: "Value Stream Mapping Overview - What is VSM?",
        date: "September 23, 2023",
        image: "assets/images/blog/banner2.jpg",
        link: "/blog-details",
        description: "Value Stream Mapping (VSM) is a workplace efficiency tool developed by Toyota to enhance productivity."
    },
    {
        id: 3,
        title: "What is AGV & How it is benefiting Indian Manufacturers?",
        date: "August 28, 2024",
        image: "assets/images/blog/banner3.jpg",
        link: "/blog-details",
        description: "An Automated Guided Vehicle system is a driverless, electric mechanized transport for flexible loads."
    },
    {
        id: 4,
        title: "What is Visual Management? What are its types and benefits?",
        date: "July 3, 2024",
        image: "assets/images/blog/banner4.jpg",
        link: "/blog-details",
        description: "To scale your business, all employees must be on the same page. Visual management helps in this process."
    },
    {
        id: 5,
        title: "What are the Five S’s (5S) in 5S Methodology?",
        date: "February 27, 2024",
        image: "assets/images/blog/banner5.jpg",
        link: "/blog-details",
        description: "5S Methodology is a technique introduced by the Toyota Production System to create an organized workplace."
    },
    {
        id: 6,
        title: "Safety Dojo & Its Type | How it will help in workers’ safety",
        date: "February 27, 2024",
        image: "assets/images/blog/banner6.png",
        link: "/blog-details",
        description: "The word 'Dojo' refers to a place for learning safety measures and preventing harm in the workplace."
    },
    {
        id: 7,
        title: "Plant layout: Definition, Objectives, Types, Case Studies, Factors",
        date: "December 18, 2023",
        image: "assets/images/blog/banner7.jpg",
        link: "/blog-details",
        description: "Maximize potential with the right plant layout design. Explore definition, objectives, and case studies."
    },
    {
        id: 8,
        title: "Maximizing Performance with Operational Excellence",
        date: "April 28, 2023",
        image: "assets/images/blog/banner8.jpg",
        link: "/blog-details",
        description: "Operational excellence in manufacturing involves continuous process improvements to increase efficiency."
    },
    {
        id: 9,
        title: "Boosting Productivity in Manufacturing Industries: Kaizen",
        date: "April 28, 2023",
        image: "assets/images/blog/banner9.jpg",
        link: "/blog-details",
        description: "Kaizen principles help manufacturing companies improve processes and boost productivity."
    }
];

export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog">
                {/* Blog Section Start */}
                <section className="blog-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">Our Blogs</span>
                            </div>
                        </div>
                        <div className="row">
                            {blogs.map((blog) => (
                                <div className="col-xl-4 col-lg-4" data-wow-delay="300ms" key={blog.id}>
                                    <div className="blog-one__single">
                                        <div className="blog-one__img-box" style={{ overflow: 'hidden' }}>
                                            <div className="blog-one__img" style={{ transition: 'transform 0.3s ease-in-out' }}>
                                                <img 
                                                    src={blog.image} 
                                                    alt={blog.title} 
                                                    style={{ width: '100%', display: 'block', transition: 'transform 0.3s ease-in-out', opacity: 1 }}
                                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                                />
                                                <Link href={blog.link} className="blog-one__link">
                                                    <span className="sr-only"></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link href={blog.link}>
                                            <span className="icon-calender"></span> {blog.date}
                                        </Link>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <Link href={blog.link}>{blog.title}</Link>
                                            </h3>
                                            <p>{blog.description}</p>
                                            <div className="blog-one__read-more">
                                                <Link href={blog.link}>
                                                    Read more<span className="icon-dabble-arrow-right"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Blog Section End */}
            </Layout>
        </>
    );
}
