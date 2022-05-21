import DISPLAY_ID from "../../src/components/UI/IDDetails/DISPLAY_ID";
import { GET_DETAILS, singleFetcher } from "../../services/fetcherOptions";

export default function ID({ result }) {
  return <DISPLAY_ID data={result} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await singleFetcher(
    `${GET_DETAILS(id, true)}&append_to_response=videos`
  );

  return {
    props: {
      result: data,
    },
  };
}