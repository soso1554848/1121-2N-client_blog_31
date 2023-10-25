import { useState, useEffect } from 'react';

let api_url = `http://localhost:5000/api/card_31`;

const BlogNodeServer_31 = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogFromNodeServer = async () => {
     try {
       const response = await fetch(api_url);
       const data = await response.json();
       console.log('blogs data',data);
       setBlogs(data);

     } catch (error){
        console.log(error);
     }
  }
  useEffect(()=>{fetchBlogFromNodeServer()}, []);

  return (
    <section className="blogs">
      <div className="section-title">
        <h2> Blogs From Node Server</h2>
        <h3> Cai Ben, 211410831</h3>
      </div>
      <div className="blogs-center">
        {blogs.map((item)=>{
        const { id, img, remove, url, title, category, description} = item;
        return (
            <article key={id} className="blog">
            <img
              src={img}
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#">read more</a>
            </div>
          </article>
        )

        })}

      </div>
    </section>
  )
}

export default BlogNodeServer_31