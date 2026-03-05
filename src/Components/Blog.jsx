import React, { useState } from 'react'
import blog from '../assets/blog.jpg'
// import blog1 from '../assets/b2.jpg'
// import blog3 from '../assets/b3.jpg'
// import blog4 from '../assets/b5.jpg'
// import blog5 from '../assets/b6.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

const CARDS_PER_PAGE = 4;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const openBlog = (item) => {
        navigate("/blog-news", {
            state: { card: item }
        });
    };


    const totalPages = Math.ceil(blogData.length / CARDS_PER_PAGE);

    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const currentCards = blogData.slice(
        startIndex,
        startIndex + CARDS_PER_PAGE
    );

    return (
        <>
            {/* desktop view */}
            <div className="container d-none d-md-block">
                <div className="row align-items-center my-5 py-5">
                    <div className="col-md-6">
                        <h1 className="mb-5">TheQRIFY Blog</h1>
                        <h1 className="h3">
                            Beyond intelligence: What AI agents need to succeed
                        </h1>
                        <p className="py-2">
                            Amazon Bedrock AgentCore is now generally available, helping organizations
                            build production-ready AI agents with security, scalability, and reliability
                        </p>
                        <a href="/blog-news" className="text-decoration-none">
                            <button className="btn px-3 rounded-pill">Read the post</button>
                        </a>
                    </div>

                    <div className="col-md-6">
                        <img
                            src={blog}
                            alt="blog_Main"
                            className="w-100 blog_Main_Data rounded-2"
                        />
                    </div>
                </div>
            </div>
            {/* mobile view */}
            <div className="container d-block d-md-none">
                <div className="row my-4">
                    <div className="col-12 text-center">
                        <img
                            src={blog}
                            alt="blog_Main"
                            className="w-100 blog_Main_Data rounded-2 mb-4"
                        />
                    </div>

                    <div className="col-12 text-center">
                        <h1 className="mb-3">TheQRIFY Blog</h1>
                        <h2 className="h5">
                            Beyond intelligence: What AI agents need to succeed
                        </h2>
                        <p className="py-2">
                            Amazon Bedrock AgentCore is now generally available, helping organizations
                            build production-ready AI agents with security, scalability, and reliability
                        </p>
                        <a href="/blog-news" className="text-decoration-none">
                            <button className="btn px-4 rounded-pill">Read the post</button>
                        </a>
                    </div>
                </div>
            </div>


            {/* <div className="container">
                <div className="d-flex row align-items-center my-5 py-5">
                    <div className="card p-3 col-md-3">
                        <img src={blog1} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                    <div className="card p-3 col-md-3">
                        <img src={blog2} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                    <div className="card p-3 col-md-3">
                        <img src={blog3} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                    <div className="card p-3 col-md-3">
                        <img src={blog4} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                </div>
            </div> */}
            {/* <p className="text-start text-muted mt-1">
                    <img src={calendar} className="m-1 claendar_Icon" height={20} width={20} />
                    {new Date(data?.published_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    })}
                </p> */}

            {/* <div className="container text-center py-5">
                <div className="row gx-4 gy-4 justify-content-center pt-4">
                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card h-100 max-w-100 w-100">
                            <img
                                src={blog1}
                                alt="Color Psychology in UI"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">Announcing Amazon Quick Suite: your new agentic teammate</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card max-w-100 w-100">
                            <img
                                src={blog5}
                                alt="Design Patterns"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">AWS named as a Leader in 2025 Gartner Magic Quadrant for Strategic Cloud Platform Services</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card max-w-100 w-100">
                            <img
                                src={blog3}
                                alt="Color Psychology in UI 2"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">OpenAI open weight modelsnow available on AWS</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0;"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card max-w-100 w-100">
                            <img
                                src={blog4}
                                alt="Color Psychology in UI 2"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">Introducing Claude Sonnet 4.5 in Amazon Bedrock: Anthropic’s most intelligent model</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container py-5">
                <div className="row g-4">
                    {currentCards.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-3">
                            <div
                                className="blog-news-card h-100"
                                onClick={() => openBlog(item)}
                            >
                                <img src={item.img} alt={item.title} className="blog-news-img" style={{objectFit:'contain'}} />

                                <div className="blog-news-body">
                                    <h2 className="blog-news-title">{item.title}</h2>
                                    <div className="blog-news-link">
                                        Learn more <FaArrowRightLong />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <ul className="pagination">
                    {/* PREV */}
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </button>
                    </li>

                    {/* PAGE NUMBERS */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li
                            key={page}
                            className={`page-item ${page === currentPage ? "active" : ""}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    {/* NEXT */}
                    <li
                        className={`page-item ${currentPage === totalPages ? "disabled" : ""
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Blog