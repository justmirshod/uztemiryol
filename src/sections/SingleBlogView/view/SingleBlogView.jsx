import React from "react";

function SingleBlogView() {
  const blog = {
    img: "https://railway.uz/upload/resize_cache/iblock/ded/1021_680_2/9iio913oqtpg3uif8on0q2sw2yjch769.jpg",
    title: "“Ma'naviyat - inson ko'zgusi” mavzusida davra suhbati bo'lib o'tdi",
    date: "4 Fevral, 2024",
    content: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Railway Infrastructure: A Marvel of Engineering</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
            }   
    
            .article {
                background-color: #fff;
                border-radius: 10px;
            }
    
            .author {
                font-style: italic;
                margin-top: 16px
            }
    
            .img-container {
                text-align: center;
                margin-bottom: 20px;
            }
            .part-text {
              margin-bottom: 16px
            }
    
          
        </style>
    </head>
    <body>
    
        <div class="article">
    
            <p class="part-text">The intricate web of railway tracks, bridges, and stations forms the backbone of modern transportation. It's not just a means of getting from one place to another; it's a testament to human ingenuity and engineering excellence.</p>
    
            <p class="part-text">As trains speed along the tracks, they traverse awe-inspiring landscapes, cross towering bridges, and pass through bustling stations. The synergy between technology, design, and functionality is what makes railway infrastructure truly remarkable.</p>
    
            <p class="part-text">Whether it's the sleek lines of high-speed trains or the sturdy construction of railway bridges, every element serves a purpose in ensuring the efficiency and safety of the railway system. The blend of form and function creates an experience that goes beyond mere travel.</p>
    
            <p class="author">Written by Railway Enthusiast - Jane Smith</p>
        </div>
    
    </body>
    </html>
    
    `,
  };
  return (
    <section className="blog-image">
      <div className="img-box">
        <img src={blog.img} alt="" />
      </div>
      <div className="meta-details mt-8">
        <p className="text-[#bcbcbc] font-semibold ">{blog.date}</p>
      </div>
      <p className="blog-title font-bold text-[2rem] text-[#212121]">
        {blog.title}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="text-[#666]"
      ></div>
    </section>
  );
}

export default SingleBlogView;
