import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppProvider.jsx'

export const About = () => {
    const aboutData = [
      {
        iconName: 'fa-solid fa-mobile-screen',
        title: 'Reliable',
        description:
          'I work hard to provide the best, most ethical service to my clients. I work to ensure that my clients are always looked after and never left guessing about their insurance coverage!',
      },
      {
        iconName: 'fa-solid fa-book',
        title: 'Knowledable',
        description:
          'I am knowledagable about all things personal lines insurance. Based on your risk situation, I know which carriers will be the best fit and price! If there is something I don\'t know, you can be sure I will find the answer!',
      },
      {
        iconName: 'fa-solid fa-business-time',
        title: 'Experienced',
        description:
          'I have a background in buissness, real estate, and law. I have serviced clients across several industries and am passionate about helping people navigate the insurance process! When you work with me, you also work with Hub International Ontario and its roster of experienced brokers who are always willing to help!',
      },
    ];

    // const aboutHubData = [
    //   {
    //     iconName: 'fa-solid fa-mobile-screen',
    //     title: 'Global',
    //     description:
    //       'Hub is recognized globally in the insurance industry! Since 1998, Hub has specialized in providing insurance coverage to the North American region, and quickly expanded into many other countries.',
    //   },
    //   {
    //     iconName: 'fa-solid fa-book',
    //     title: 'Resourceful',
    //     description:
    //       'Hub has a roster of experienced and friendly brokers always willing to help. If your broker is unsure about something, it is garaunteed that there is a senior broker in the office who will have the answers!',
    //   },
    //   {
    //     iconName: 'fa-solid fa-business-time',
    //     title: 'Committed',
    //     description:
    //       'Committed to servicing clients all around the world! Hub has no plans of slowing down growth, and is constantly training its brokers to be the best in the industry.',
    //   },
    // ];

    const { scrollToTop } = useAppContext()
  
    return (
      <section id='about'>
        <h1>Why Choose Me</h1>
        <p>A Broker you can trust.</p>
  
        {aboutData.map((item, index) => (
          <div className="about-container" key={index}>
            
            <i className={`${item.iconName} about-icon ${index === Math.floor(aboutData.length / 2) ? 'middle-icon' : ''}`}></i>

            <div className="about-sub-container">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        
        {/* <hr className='about-underline'/> */}

        {/* <h1>Why Choose Hub</h1>
        <p>Globally Recognized Insurance Brokerage.</p>
        {aboutHubData.map((item, index) => (
          <div className="about-container" key={index}>
            
            <i className={`${item.iconName} about-icon ${index === Math.floor(aboutHubData.length / 2) ? 'middle-icon' : ''}`}></i>

            <div className="about-sub-container">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))} */}
        
        <Link className='about-quote-btn' to='/guest/quote/auto-quote' onClick={scrollToTop}>Get a Quote</Link>
      </section>
    );
};

// Why Choose me:

// I am a professional with a passion to help my customers better understand the insurance they are paying for. I consider myself to be more than just a broker. I consider myself to be a personal insurance consultant, guiding you through any frustarions and confusion around insurance. I help to take the 'complicated' out of insurance, where you can walk away with a better unserstanding of the entire process. 

// Why Choose Hub:

// Benefits:

// - We have a large list of over 20 insurance companies that we work with so that we can find you the right competitive coverage!