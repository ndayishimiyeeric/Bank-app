import React from 'react';
import { features } from '../constants';
import styles from '../styles';

function FeatureCard(props) {
  const { index, icon, title, content } = props;
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index === features.length - 1 ? 'mb-0' : 'mb-6'
      } feature-card cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
