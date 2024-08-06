import { useLoaderData, Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useAppContext } from '../context/AppProvider.jsx'

// Components
import { CallToActionBlog } from '../components/CallToActionBlog';

import House from '../assets/house.jpg';

const options = { day: 'numeric', month: 'long', year: 'numeric' };

export const BlogPost = () => {

  // Import Loader Data
  const post = useLoaderData();
  const { scrollToTop } = useAppContext()

  return (
    <section id="blog-post-single">
      <LazyLoadImage
        className="posts-img post-img-blog single-blog-img"
        src={House}
      />
      {Object.entries(post).map(([key, value]) => (
        <>
          <div key={post._id} className='single-post-container'>
            {key === 'title' && (
                <h4 className="single-blog-title">{value}</h4>
            )}

            {key === 'createdAt' && (
                <p className="single-blog-date">{new Date(value).toLocaleString('en-CA', options)}</p>
            )}

            {key === 'body' && <p className="single-blog-body">{value}</p>}

            {key === 'tags' && 
            <>
                <p className="single-blog-tag">Tags:</p>
                <br />
                <p className="single-blog-tags">{value}</p>
            </>}
          </div>
        </>
      ))}
      <br />
      <Link to='/guest/blog' className='single-post-home-btn' onClick={scrollToTop}>All Blogs</Link>
      <br />
      <br />
      <br />
      <Link to='/guest/home' className='single-post-home-btn' onClick={scrollToTop}>Return Home</Link>
      <br />
      <br />
      <hr />
      <CallToActionBlog />
    </section>
  );
};

// Loader Function
export const singlePostLoader = async ({ params }) => {
  try {
    const ID = params.id;

    const response = await fetch(`https://insurance-website-api.onrender.com/api/blog/${ID}`);

    if (!response.ok) {
      throw Error('Failed to fetch posts');
    }

    if (response.length === 0) {
      throw Error('There are no posts to show');
    }

    return response;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};
