import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); // Reset text when dependencies change
    let i = 0;
    let typingInterval: ReturnType<typeof setInterval>;
    let isCancelled = false;

    const startTyping = () => {
      if (isCancelled) return;

      typingInterval = setInterval(() => {
        if (i < text.length) {
          const char = text.charAt(i);
          setDisplayText((prev) => prev + char);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      isCancelled = true;
      clearTimeout(delayTimeout);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [text, speed, delay]);

  return displayText;
};