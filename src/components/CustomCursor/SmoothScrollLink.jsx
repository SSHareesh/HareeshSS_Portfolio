import React from 'react';

const SmoothScrollLink = ({ children, to, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    const targetId = to.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;