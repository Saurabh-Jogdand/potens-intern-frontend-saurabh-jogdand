import { useEffect, useState } from 'react';

/**
 * Ticks a number upward on a slow, deliberate interval.
 * Paced at 5s to feel like a calm pulse, not an anxious clock.
 */
function useCounter(initialValue = 0, step = 1, intervalMs = 5000) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + step);
    }, intervalMs);

    return () => clearInterval(id);
  }, [step, intervalMs]);

  return count;
}

export default useCounter;