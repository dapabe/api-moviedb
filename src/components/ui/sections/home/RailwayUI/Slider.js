import { useRef, useEffect } from "react";
import Thumbnail from "./Thumbnail";

export default function Slider({ title, list, isShow }) {
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current?.addEventListener("wheel", (e) => {
      e.preventDefault();
      sliderRef.current?.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
      });
    });

    return sliderRef.current?.removeEventListener("wheel", (e) => {
      e.preventDefault();
      sliderRef.current?.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
      });
    });
  }, []);
  // console.log(sliderRef?.current?.wheel);

  return (
    <section className="mx-auto space-y-1 pl-3">
      <h2>{title ? title : "Colección"}</h2>
      <ul
        ref={sliderRef}
        className="space-x-6 overflow-x-scroll  whitespace-nowrap px-2 pt-5 pb-10 scrollbar-hide"
      >
        {list.map((props) => (
          <li key={props.id} className="inline-block">
            <Thumbnail obj={props} isShow={isShow ?? false} />
          </li>
        ))}
      </ul>
    </section>
  );
}
