import DISPLAY_ID from "../../components/content/IDDetails/DISPLAY_ID";
import { GET_DETAILS, singleFetcher } from "../../utilities/fetcherOptions";

export default function ID({ result }) {
  return <DISPLAY_ID data={result} />;
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
    // revalidate: 600, // 10 minutes to refresh the page if there is a new value.
  };
}
