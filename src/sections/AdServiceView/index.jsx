import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import { useEffect } from "react";
import { getCategoryById } from "../../api/category";

export default function AdServiceView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(20));
  }, []);
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium">Reklama xizmatlari</h1>
    </Container>
  );
}
