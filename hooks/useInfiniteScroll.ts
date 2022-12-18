import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

interface InfiniteScrollProps {
  root?: Element | null;
  rootMargin?: string;
  target: MutableRefObject<HTMLDivElement | null>;
  threshold?: number;
  targetArray: Array<any>;
  endPoint?: number;
}

export const useInfiniteScroll = ({
  root = null,
  target,
  threshold = 1,
  rootMargin = '0px',
  targetArray,
  endPoint = 1,
}: InfiniteScrollProps) => {
  const [count, setCount] = useState<number>(0);
  const currentChild = useRef<Element | null>(null);

  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries, observer) => {
        if (target?.current === null) {
          return;
        }
        if (entries[0].isIntersecting) {
          setCount((v) => v + 1);
          observer.disconnect();
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );
  }, [target, root, rootMargin, threshold]);

  useEffect(() => {
    if (target?.current === null) {
      return;
    }

    const observeChild =
      target.current.children[target.current.children.length - endPoint];
    if (observeChild && currentChild.current !== observeChild) {
      currentChild.current = observeChild;
      observer.observe(observeChild);
    }

    return () => {
      if (target.current !== null && observer) {
        observer.unobserve(target.current);
      }
    };
  }, [count, targetArray, target, endPoint, observer]);

  return {
    count,
    setCount,
  };
};
