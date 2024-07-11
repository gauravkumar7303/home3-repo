import React from "react";
const News = () => {
    return (
        <section class="news">
            <div class="container">
                <div class="top-blog">
                    <div class="row" style={{justifyContent: `space-between`}}>
                        <h1 class="news-title">NEWS & ARTICLE</h1>
                        <button class="all-articles-button">ALL ARTICLE</button>
                    </div>
                </div>
                <div class="blogs">
                    <a href="#">
                        <div class="columns1">
                            <div class="row blog-item">
                                <img src="images/blogs/blog1.jpg" alt="Blog 1" class="blog-image" />
                                    <div class="info">
                                        <h1 class="blog-title">Amber apartment project <br /> Update progress 8x2023</h1>
                                        <p class="blog-category">NEWS, TECHNICAL</p>
                                        <span class="blog-date">5 Days ago</span>
                                    </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="columns1">
                            <div class="row blog-item">
                                <img src="images/blogs/blog2.jpg" alt="Blog 2" class="blog-image" />
                                    <div class="info">
                                        <h1 class="blog-title">Construction law 2023</h1>
                                        <p class="blog-category">EXPERIENCE</p>
                                        <span class="blog-date">12 Days ago</span>
                                    </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="columns1">
                            <div class="row blog-item">
                                <img src="images/blogs/blog3.jpg" alt="Blog 3" class="blog-image" />
                                    <div class="info">
                                        <h1 class="blog-title">Roxtow building completed <br /> rough construction</h1>
                                        <p class="blog-category">CONSTRUCT</p>
                                        <span class="blog-date">1 month ago</span>
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