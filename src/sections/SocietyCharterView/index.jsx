import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import { useEffect } from "react";
import { getCategoryById } from "../../api/category";

export default function SocietyCharterView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(30));
  }, []);

  return (
    <Container className="py-20">
      <h1 className="">Jamiyat ustavi</h1>
    </Container>
  );
}
