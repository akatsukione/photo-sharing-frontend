import React, { useState, useEffect } from 'react';

import { StyledGoToTopBtn, SVG } from './styles';

export const GoToTopBtn: React.FC = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', scrollListner);

    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showTopButton) {
    return null;
  }

  return (
    <StyledGoToTopBtn onClick={goToTop}>
      <SVG src="./up-arrow.svg" />
    </StyledGoToTopBtn>
  );
};
