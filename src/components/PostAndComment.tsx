import { useEffect } from "react";
import { useFoodFactStore } from "./store/useStore";

const PostAndComment = () => {
  const { foods, loading, error, fetchData } = useFoodFactStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <div>
      <ul>
        {foods.map((food: any) => (
          <li key={food.id}>
            <p>This is the title: </p>
            <h1>{food.title}</h1>
            <p>This is the useid : </p>
            <p>{food.userId}</p>
            <p>This is the body :</p>
            <p>{food.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostAndComment;
