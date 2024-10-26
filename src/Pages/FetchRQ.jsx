import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["post"], // useState
    queryFn: getPostData, // useeEffect
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((currElem) => {
          const { id, title, body } = currElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;
