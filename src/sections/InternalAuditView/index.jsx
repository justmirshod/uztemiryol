import { useDispatch } from "react-redux";
import Container from "../../components/Container";

export default function InternalAuditView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(35));
  }, []);
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium mb-8">Ichki audit xizmati</h1>
    </Container>
  );
}
