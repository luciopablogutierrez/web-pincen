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
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    
    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);

  }, [text, isDeleting, wordIndex]);


  return (
    <span className="typewriter neon-text-purple">{text}</span>
  );
};

export default Typewriter;
