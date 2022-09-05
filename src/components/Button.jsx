import React from 'react';

function Button(props) {
  const { styles, type, title } = props;
  return (
    <button
      type={type}
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none`}
    >
      {title}
    </button>
  );
}

export default Button;
