import { useCallback, useRef, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);

      if (raw !== null) {
        return JSON.parse(raw);
      }
    } catch {
      // Storage unavailable or corrupted:
      // fall back to the initial value.
    }

    return typeof initialValue === 'function'
      ? initialValue()
      : initialValue;
  });

  // Keep track of the latest value.
  const valueRef = useRef(value);

  const setStoredValue = useCallback(
    (next) => {
      const nextValue =
        typeof next === 'function'
          ? next(valueRef.current)
          : next;

      // Update our reference immediately.
      valueRef.current = nextValue;

      // Update React's state so the UI can re-render.
      setValue(nextValue);

      // Save the same value to browser storage.
      try {
        window.localStorage.setItem(
          key,
          JSON.stringify(nextValue),
        );
      } catch {
        // If storage fails, in-memory state still works.
      }
    },
    [key],
  );

  return [value, setStoredValue];
}
