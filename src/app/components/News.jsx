import React from "react";
const News = () => {
    return(
        <section className="news py-24">
        <div className="container w-10/12 m-auto">
            <div className="top-blog">
                <div className="row flex flex-wrap justify-between">
                    <h1 className="text-3xl">NEWS & ARTICLE</h1>
                    <button className="bg-white p-3 hover:bg-orange-500 hover:text-white hover:shadow-2xl" style={{border: `1px solid gray`}}>ALL ARTICLE</button>
                </div>
            </div>
            <div className="blogs pt-20">
                <a href="#" className="hover:text-orange-500">
                    <div className="columns mb-4">
                        <div className="row flex flex-wrap">
                            <img src="images/blogs/blog1.jpg" alt="" />
                            <div className="info pl-2">
                                <h1 className="text-5xl mb-10">Amber apartment project <br />
                                    Update progress 8x2023</h1>
                                <p className="mb-8">NEWS,TECHNICAL</p>
                                <span>5 Days ago</span>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#" className="hover:text-orange-500">
                    <div className="columns mb-4">
                        <div className="row flex flex-wrap">
                            <img src="images/blogs/blog2.jpg" alt="" />
                            <div className="info pl-2">
                                <h1 className="text-5xl mb-10">construction law 2023</h1>
                                <p className="mb-8">EXPERIENCE</p>
                                <span>12 Days ago</span>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#" className="hover:text-orange-500">
                    <div className="columns mb-4">
                        <div className="row flex flex-wrap">
                            <img src="images/blogs/blog3.jpg" alt="" />
                            <div className="info pl-2">
                                <h1 className="text-5xl mb-10">Roxtow building completed<br />
                                    rough construction</h1>
                                <p className="mb-8">CONSTRUCT</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    )
}
export default News;