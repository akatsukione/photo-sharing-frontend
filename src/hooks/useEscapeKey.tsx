import { useEffect, useCallback } from 'react';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';

export function useEscapeKey(handleClose: () => void) {
  const handleEsckey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );
  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEsckey, false);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEsckey, false);
    };
  }, [handleEsckey]);
}
