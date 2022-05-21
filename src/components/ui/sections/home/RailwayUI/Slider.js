import Thumbnail from "./Thumbnail";

export default function Slider({ title, list, isShow }) {
  return (
    <section className="container space-y-1 px-3">
      <h2>{title ? title : "Colección"}</h2>
      <ul className="flex space-x-6 overflow-y-scroll px-2 pt-5 pb-16 scrollbar-hide ">
        {list.map((props) => (
          <li key={props.id}>
            <Thumbnail obj={props} isShow={isShow ?? false} />
          </li>
        ))}
      </ul>
    </section>
  );
}
