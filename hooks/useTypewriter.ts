"use client";

import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function useTypewriter(
  words: string[],
  {
    typingSpeed = 120,
    deletingSpeed = 70,
    pauseDuration = 1500,
  }: UseTypewriterOptions = {}
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const isTypingComplete = displayText === currentWord;
    const isDeletingComplete = displayText === "";

    // PAUSE BEFORE STARTING DELETE
    if (isTypingComplete && !isDeleting) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(timeoutId);
    }

    // MOVE TO NEXT WORD
    if (isDeletingComplete && isDeleting) {
      setIsDeleting(false);

      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );

      return;
    }

    timeoutId = setTimeout(() => {
      const nextText = isDeleting
        ? currentWord.slice(0, displayText.length - 1)
        : currentWord.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [
    currentWord,
    displayText,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}