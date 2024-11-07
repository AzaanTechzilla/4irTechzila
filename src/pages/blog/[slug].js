import { useRouter } from "next/router";
import Link from "next/link";
import Blogapi from "../secondblogapi.json";
import Image from "next/image";
import Breadcrumbimg from "@/images/breadcrumb-title.png";
import Svg from "../../../public/assets/svg/blog-details-vector.svg";
import Navbar from "@/Componenets/home/Header";
import { useState, useEffect } from "react";
import User2 from "@/images/user/2.jpg";
import Headingh3 from "@/Componenets/typography/h3/Headingh3";
import Svg2 from "../../../public/assets/svg/title-effect2.svg";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import H2 from "@/Componenets/typography/h2/H2";
export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const blogData = Blogapi.find((blog) => blog.slug === slug);

  console.log(blogData.blogcontent[3].li, "blogData");

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
      />
      <section class="breadcrumb-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div>
                    <H2 title1="Blog Details" breakpoint={true} imgsrc={Breadcrumbimg} />
                  <Para paragraph="Discover the most recent
                    blogs about artificial intelligence here." iconadd={true} />
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-lg-inline-block d-none">
              <div class="breadcrumb-img">
                <Image src={Svg} class="img-fluid" alt="service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ratio_40">
        <div class="container">
          <div class="blog-details" id="blog_detail_container">
            <div class="blog-img bg-size">
              <Image
                src={blogData.image}
                style={{ borderRadius: "6px" }}
                width={100}
                height={100}
                id="current_blog_image"
                class="img-fluid w-100 bg-img"
                alt="blog"
              />
            </div>
            <div class="blog-title-box">
              <span
                data-cursor="pointer"
                class="main-title"
                id="current_blog_title"
              >
                {blogData.blogtitle}
              </span>
              <ul>
                <li>
                  <Image src={User2} class="img-fluid avtar" alt="author" />{" "}
                  <span id="current_blog_author">Barry Krevoy</span>
                </li>
                <li>
                  <i class="ri-calendar-todo-line"></i>{" "}
                  <span class="current_blog_date">21, Jul 2024</span>
                </li>
                <li>
                  <i class="ri-time-line"></i> 5 min
                </li>
              </ul>
            </div>

            <div class="current_blog_descritpion">
              <div class="row">
                <div class="col-lg-8 col-md-10 m-auto">
                  <div class="blog-main-content">
                    {blogData.blogcontent.map((items) => (
                      <div key={items.id}>
                        <Headingh3
                          imageclass="img-fluid title-effect"
                          className="mt-xl-5 mt-md-3 mt-2"
                          image={items.image}
                          imgstyle={{width: "62px"}}
                          showimage={true}
                          title={items.heading}
                        />
                        <Para
                          className="current_blog_overview"
                          paragraph={items.para}
                        />


                        {/* <ol>
                          {blogData.blogcontent[3]?.li?.map((item) => {
                            return <li key={item.id}>{item.title}</li>;
                          })}
                        </ol> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}