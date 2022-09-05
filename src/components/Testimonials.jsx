import { feedback } from '../constants';
import styles from '../styles';
import FeedBackCard from './FeedBackCard';

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute w-[60%] h-[60%] rounded-full -right-[50%] z-[0] blue__gradient" />
      <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z[1]">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full sm:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
        {feedback.map((feedback, index) => (
          <FeedBackCard key={feedback.id} {...feedback} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
