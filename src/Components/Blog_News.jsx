import { useLocation } from "react-router-dom";
import { useState } from "react";
import calendar from "../assets/calendar.png";
// import Blog from "../assets/blog.png";
import blogData from "../data/blogData"; // ✅ import the array
import { FaArrowRightLong } from "react-icons/fa6";

const Blog_News = () => {
    const location = useLocation();
    const initialCard = location.state?.card || blogData[0];
    const [selectedCard, setSelectedCard] = useState(initialCard);

    return (
        <div className='container-fluid'>
            <div className='row mb-5'>
                <div className='col-12 col-md-9 col-lg-9'>
                    {selectedCard ? (
                        <>
                            <div className='py-3'>
                                <img
                                    src={selectedCard.img}
                                    className="img-fluid rounded-5"
                                    alt="news"
                                    style={{
                                        width: "100%",
                                        maxHeight: "600px",
                                        objectFit: "contain",
                                        borderRadius: "20px"
                                    }}
                                />
                            </div>

                            <p className="text-start text-muted mt-2">
                                <img
                                    src={calendar}
                                    className="m-1 mx-4 claendar_Icon"
                                    height={20}
                                    width={20}
                                />
                                04 Dec 2025
                            </p>

                            <h1 className="text-start mx-3">{selectedCard.title}</h1>

                            <div
                                className="mt-4 mx-3 text-start text-black"
                                style={{ fontSize: "18px", lineHeight: "1.6" }}
                            >
                                <div dangerouslySetInnerHTML={{ __html: selectedCard.content }} />
                            </div>
                        </>
                    ) : (
                        <div className="py-5">
                            <h3 className="text-start mx-3 text-muted">
                                Please click a blog card to view details.
                            </h3>
                        </div>
                    )}
                </div>




                <div className="vertical-line"></div>

                {/* RIGHT SIDEBAR */}
                <div className='col-12 col-md-2 col-lg-2 py-2 sidebar-scrollable' style={{ maxHeight: "1060px", overflowY: "auto", paddingRight: "10px" }}>
                    {blogData.map((item) => (
                        <div key={item.id} className="col-12 col-md-12 py-2">
                            <div
                                className="Main-Card_1 mb-3 shadow-sm"
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedCard(item)}
                            >
                                <img
                                    src={item.img}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ height: "195px", width: "100%", objectFit: "cover", borderRadius: "30px" }}
                                />

                                <div className="card-body1 d-flex flex-column">
                                    <p className="text-start text-muted mt-1">
                                        <img src={calendar} className="m-1 mx-3 claendar_Icon" height={20} width={20} />
                                        04 Dec 2025
                                    </p>

                                    <h6 className="mx-3 text-start">{item.title}</h6>

                                    {/* <div
                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                    /> */}

                                    {/* <p className="mx-3 text-muted text-start"
                                        style={{ fontSize: "12px", lineHeight: "1.6" }}>
                                        {item.content.slice(0, 40)}...
                                    </p> */}

                                    <div className="mt-auto">
                                        <div className="d-flex align-items-center justify-content-between px-3 rounded">
                                            <p className="text-black">Learn More</p>
                                            <button type="button" className="learn_BTn">
                                                <FaArrowRightLong />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};

export default Blog_News;
