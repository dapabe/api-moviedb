import Thumbnail from "./Thumbnail";

export default function Slider({ title, ...props }) {
  return (
    <section className="container mx-auto space-y-1 px-3">
      <h2>{!title ? "Colección" : title}</h2>
      <ul className="flex space-x-6 overflow-y-scroll px-2 pt-5 pb-16 scrollbar-hide ">
        <ThumbnailRouteSwitch {...props} />
      </ul>
    </section>
  );
}

const ThumbnailRouteSwitch = ({ list, isShow }) => {
  return (
    <>
      {list.map((list) => (
        <li key={list.id}>
          <Thumbnail obj={list} isShow={isShow} />
        </li>
      ))}
    </>
  );
};
