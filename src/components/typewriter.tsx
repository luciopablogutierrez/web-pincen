"use client";

import { useState, useEffect } from 'react';

const words = [
  "automate your workflows",
  "secure your assets",
  "analyze market data",
  "optimize infrastructure",
];

const Typewriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      setText(
        shouldDelete
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );
      
      let typeSpeed = isDeleting ? 75 : 150;

      if (!shouldDelete && text === currentWord) {
        typeSpeed = 2000; // Pause at end of word
        setIsDeleting(true);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 500; // Pause before typing new word
      }
      
      const timer = setTimeout(type, typeSpeed);
      return () => clearTimeout(timer);
    }
    
    const timer = setTimeout(type, 150);
    return () => clearTimeout(timer);

  }, [text, isDeleting, wordIndex]);


  return (
    <span className="typewriter neon-text-purple">{text}</span>
  );
};

export default Typewriter;
