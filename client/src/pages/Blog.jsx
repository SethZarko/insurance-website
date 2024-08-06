import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppContext } from '../context/AppProvider';

import House from '../assets/house.jpg';

// Components
import { CallToActionBlog } from '../components/CallToActionBlog';

export const Blog = () => {
  const { scrollToTop } = useAppContext();

  const postData = useLoaderData();

  const [sortedPosts, setSortedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [postsPerPage, setPostsPerPage] = useState(9); 

  const sortByDateDescending = postData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    setSortedPosts(sortByDateDescending);
  }, [postData]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPostsPerPage(9);
      } else {
        setPostsPerPage(postData.length); 
      }
    }

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    
  }, [sortedPosts])


  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const filteredSortedPosts = sortedPosts.filter(post => {
    if (selectedCategory === 'all') {
      return true;
    } else {
      return post.tags.includes(selectedCategory); 
    }
  });

  const posts = filteredSortedPosts.slice(startIndex, endIndex);

  useEffect(() => {
    updatePostGridHeight()
  }, [filteredSortedPosts])

  const updatePostGridHeight = () => {
    const postGrid = document.getElementById('post-grid')

    if (posts.length >= 0 && posts.length <= 3) {
      postGrid.classList.add('height-three')
      postGrid.classList.remove('height-six')
      postGrid.classList.remove('height-nine')
    } else if(posts.length >= 4 && posts.length <= 6) {
      postGrid.classList.add('height-six')
      postGrid.classList.remove('height-three')
      postGrid.classList.remove('height-nine')
    } else if(posts.length >= 7 && posts.length <= 9) {
      postGrid.classList.add('height-nine')
      postGrid.classList.remove('height-three')
      postGrid.classList.remove('height-six')
    } else {
      postGrid.classList.add('height-nine')
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleDesktopWindowScroll = () => {
    if(window.innerWidth >= 1023) {
      window.scrollTo(0, 0)
    }
  }

  const handleMobileWindowScroll = () => {
    if(window.innerWidth <= 1023) {
      window.scrollTo(0, 550)
    }
  }

  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  return (
    <>
      <section id="blog">
        <h1>Blog Posts</h1>
        <p>Learn More About Insurance</p>

        <div className="blog-flex">
          <div className="blog-sub-flex">
            <h4 className='category-title'>Categories: <br/> <span>{selectedCategory === 'home' ? 'Home Insurance' : selectedCategory === 'auto' ? 'Auto Insurance' : selectedCategory === 'rent' ? 'Renters Insurance' : selectedCategory === 'high' ? 'High Risk Insurance' : selectedCategory === 'misc' ? 'Miscellaneous Posts' : 'All Posts'}</span></h4>
            <br />
            <ul className="blog-categories-menu">
              <li onClick={() => {
                handleCategoryClick('all'),
                handleMobileWindowScroll(),
                handleDesktopWindowScroll()
              }}>All</li>

              <li onClick={() => { 
                handleCategoryClick('auto'),
                handleMobileWindowScroll(),
                handleDesktopWindowScroll()
              }}>
                Auto Insurance
              </li>

              <li onClick={() => { 
                handleCategoryClick('home')
                handleMobileWindowScroll(),
                handleDesktopWindowScroll()
              }}>
                Home Insurance
              </li>

              <li onClick={() => {
                handleCategoryClick('rent'),
                handleMobileWindowScroll(),
                handleDesktopWindowScroll()
              }}>
                Renters Insurance
              </li>

              <li onClick={() => {
                  handleCategoryClick('high'),
                  handleMobileWindowScroll(),
                  handleDesktopWindowScroll()
              }}>
                High Risk Insurance
              </li>

              <li onClick={() => {
                handleCategoryClick('misc'),
                handleMobileWindowScroll(),
                handleDesktopWindowScroll()
              }}>Misc</li>
            </ul>
          </div>

          <hr />

          <div id='post-grid' className="posts-grid">
            {posts.map((post, index) => {
              if (
                post.tags.slice(0, 3) === selectedCategory || post.tags.slice(5, 9) === selectedCategory
              ) {

                return (
                  <div className="post-card blog-post-card" key={index}>
                    <LazyLoadImage
                      className="posts-img post-img-blog"
                      src={House}
                      alt={post.title}
                    />
                    <Link
                      to={`/guest/post/${post._id}`}
                      className="blog-post-card-title"
                      onClick={scrollToTop}
                    >
                      {post.title}
                    </Link>
                    <div className="date-comment-container date-comment-container-blog">
                      <p className="blog-date">
                        <i className="fa-regular fa-clock blog-date"></i>{' '}
                        {new Date(post.createdAt).toLocaleString(
                          'en-CA',
                          dateOptions
                        )}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          
        </div>

        <div className="pagination paginate-blog">
          {Array.from(
            { length: Math.ceil(filteredSortedPosts.length / postsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                className={`page-btn ${
                  index + 1 === currentPage ? 'active' : ''
                }`}
                onClick={() => {
                  paginate(index + 1), 
                  scrollToTop();
                }}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </section>
      <CallToActionBlog />
    </>
  );
};

// Loader Function
export const postLoader = async () => {
  try {
    const response = await fetch('https://insurance-website-api.onrender.com/api/blog/all');

    if (!response.ok) {
      throw Error('Failed to fetch posts');
    }

    if (response.headers.length === 0) {
      throw Error('There are no posts to show');
    }

    return response;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};