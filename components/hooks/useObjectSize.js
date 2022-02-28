import { useEffect, useRef, useState } from "react";

export default function useObjectSize({ elementRef }) {
  const [objectSize, setObjectSize] = useState({
    height: 0,
  });
  let ref = useRef(null);
  useEffect(() => {
    ref.current = elementRef;
    setObjectSize({
      height: ref.current.clientHeight,
    });
  }, []);
  return element, objectSize;
}
