"use client"
import * as React from "react";
import "./BlogPage.css"
import BlogPostCard from './BlogPostCard/BlogPostCard'
import Navbar from "../Navbar/Navbar";

const BlogPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="all ">
        <div className="all-wrapper">
          <div className="all-blog">
            <BlogPostCard
            PostAdminImg="/assets/images/about-sec-img.jpg"
            PostAdminName="Abu Huraira Khan"
            PostDesc="blog post 1 hello world"
            PostImg="/assets/images/Screenshot 2024-04-16 034539.png"
            />
            <BlogPostCard
            PostAdminImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPxliccSvodnSAgl3UaJdMWFigduYjlk0lQ&s"
            PostAdminName="mr cartoon"
            PostDesc="blog post 2 hello world"
            PostImg="/assets/images/Screenshot 2024-04-16 034557.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
