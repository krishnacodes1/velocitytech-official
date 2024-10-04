import React, { useEffect, useState } from "react";
import axios from "axios";
import Images from "./Image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "./blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog.velocitytech.in/wp-json/wp/v2/posts?categories=4")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching WordPress posts:", error);
      });
  }, []);

  return (
    <div className="my-5">
      <h2>Latest Posts & Articles</h2>
      <hr class="mx-auto mb-3 w-50" />
      <p className="mb-5">Read latest articles from Velocity Tech experts!</p>
      <Swiper
        style={{ "--swiper-pagination-color": "#FFBA08" }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay
        effect={"cards"}
        pagination={{ clickable: true }}
      >
        <div className="post rounded border border-warning">
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="post">
              {post._links && post._links["wp:featuredmedia"] && (
                <a href={post.link} className="post-link" target="_blank">
                  <Images imgUrl={post._links["wp:featuredmedia"][0].href} />
                </a>
              )}
              <p className="px-5">{post.title.rendered}</p>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Blog;
