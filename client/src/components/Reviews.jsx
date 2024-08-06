import { useState, useEffect } from 'react';
  

export const Reviews = () => {

  const [reviewsData, setReviewsData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchReviews()
  }, [reviewsData])

  const fetchReviews = async () => {
    try {
      let res = await fetch('https://insurance-website-api.onrender.com/api/reviews/all')

      if (res.ok) {
        let json = await res.json()
        setReviewsData(json)
      }

    } catch (error) {
      throw Error('No Reviews')
    }
  }

  const reviewsPerPage = 1;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="reviews">
      <h1>Client Reviews</h1>
      <p>What my clients are saying</p>

      <div className="reviews-card">
        {currentReviews.map((review) => (
            <div key={review.id} className="review-card">
            <h3>{review.name}:</h3>
            <p>&quot;{review.review}&quot;</p>
            </div>
        ))}
      </div>


      <div className="pagination">
        {Array.from(
          { length: Math.ceil(reviewsData.length / reviewsPerPage) },
          (_, index) => (
            <button key={index + 1} className={`page-btn ${index + 1 === currentPage ? 'active' : ''}`} onClick={() => paginate(index + 1)}>
              <i className="fa-solid fa-circle"></i>
            </button>
          )
        )}
      </div>
    </section>
  );
};

// export const reviewLoader = async () => {
//   try {
//       const response = await fetch('http://localhost:8000/api/reviews/all')

//       if (!response.ok) {
//           throw Error('Failed to fetch reviews');
//       }

//       if (response.headers.length === 0) {
//          throw Error('There are no reviews to show')
//       }

//       return response

//   } catch (error) {
//       console.error(error)
//       throw Error(error);
//   }
// }