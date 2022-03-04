import DISPLAY_ID_INFO from "../../components/content/DISPLAY_ID_INFO";
import { GET_DETAILS, singleFetcher } from "../../config/server";

export default function ID({ result }) {
  return <DISPLAY_ID_INFO data={result} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await singleFetcher(
    `${GET_DETAILS(id)}&append_to_response=videos`
  );

  return {
    props: {
      result: data,
    },
  };
}
