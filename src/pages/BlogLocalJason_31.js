import { useState } from 'react';
import blogData from '../data/blogData';

const BlogLocalJason_31 = () => {
    const [blogs, setBlogs] = useState(blogData);
    const [name, setName] = useState('Cai Ben');
    const [id, setId] = useState(211410831);
    return (
        <section className="blogs">
          <div className="section-title">
            <h2> Blogs From Node Server</h2>
            <h3> {name},{id}</h3>
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
};

export default BlogLocalJason_31