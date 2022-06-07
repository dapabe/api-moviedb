import DISPLAY_ID from "@components/UI/IDDetails/DISPLAY_ID";
import { GET_DETAILS, fetcher } from "@services/fetcherOptions";

export default function ID({ result }) {
  return <DISPLAY_ID data={result} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await fetcher(`${GET_DETAILS(id)}&append_to_response=videos`);

  return {
    props: {
      result: data,
    },
    // revalidate: 600, // 10 minutes to refresh the page if there is a new value.
  };
}
