import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import { useEffect } from "react";
import { getCategoryById } from "../../api/category";

import "./style.css";

export default function StatisticsView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(18));
  }, []);

  return (
    <>
      <Container className="py-20">
        <h1
          className="text-2xl mb-6"
          dangerouslySetInnerHTML={{
            __html: data?.results?.find((_, idx) => idx === 0)?.title,
          }}
        ></h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.results?.find((_, idx) => idx === 0)?.description,
          }}
        ></div>
      </Container>
    </>
  );
}
