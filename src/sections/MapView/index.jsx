import Container from "../../components/Container";

import map_bg from "../../assets/images/map.jpg";

export default function MapView() {
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-semibold mb-8">
        O'zbekiston Respublikasi temir yo'l chizmasi
      </h1>
      <img className="w-full" src={map_bg} alt="" />
    </Container>
  );
}
