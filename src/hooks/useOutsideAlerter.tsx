import React, { useEffect } from 'react';

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLElement>,
  setStatus: (status: boolean) => void
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // alert('You clicked outside of me!');
        setStatus(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
