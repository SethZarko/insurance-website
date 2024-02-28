import { Link, useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppContext } from '../context/AppProvider.jsx'

import House from '../assets/house.jpg';

export const HomeBlog = () => {
  const postData = useLoaderData();

  const { scrollToTop } = useAppContext()

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const sortedPosts = postData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section id="home-blog">
      <h1>Latest Posts</h1>
      <p>Learn More About Insurance</p>

      <div className="post-card-container">
        {sortedPosts.slice(0, 3).map((post, index) => (
          <div className="post-card" key={index}>
            <LazyLoadImage
              className="posts-img"
              src={House}
              alt={post.title}
            />
            <Link 
              to={`/guest/post/${post._id}`}
              className="blog-post-card-title" 
              onClick={scrollToTop}
            >{post.title}</Link>
            <div className="date-comment-container">
                <p><i className="fa-regular fa-clock"></i>{' '}{new Date(post.createdAt).toLocaleString('en-CA', options)}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className='blog-more-btn' to='/guest/blog' onClick={scrollToTop}>See More Posts</Link>
      <br />
    </section>
  );
};

export const homePostLoader = async () => {
  try {
      const response = await fetch('http://localhost:8000/api/blog/all')

      if (!response.ok) {
          throw Error('Failed to fetch posts');
      }

      if (response.headers.length === 0) {
         throw Error('There are no posts to show')
      }

      return response

  } catch (error) {
      console.error(error)
      throw Error(error);
  }
}