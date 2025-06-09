import { useParams } from "react-router";

export const Animal = () => {
  const params = useParams();

  return <>{params.id}</>;
};
