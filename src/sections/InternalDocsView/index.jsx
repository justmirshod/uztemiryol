import { useDispatch } from "react-redux";
import Container from "../../components/Container";

export default function InternalDocsView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(36));
  }, []);
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium mb-8">Ichki hujjatlar</h1>
    </Container>
  );
}
