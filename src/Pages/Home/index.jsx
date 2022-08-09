import { Flex, Spinner } from "@chakra-ui/react";

import { Card } from "../../Components/Card";
import CaptionCarousel from "../../Components/Carrusel";
import { useGet } from "../../Hooks/useGet";

const Home = () => {
  const { data, isloading } = useGet(`products?populate[0]=image`);

  return (
    <Flex w="100%" direction="column">
      <CaptionCarousel />
      <Flex wrap="wrap" m="10" justify="center" gap="30">
        {isloading ? (
          <Spinner />
        ) : (
          data &&
          [...data.data].map((result) => {
            return <Card key="card" result={result} />;
          })
        )}
      </Flex>
    </Flex>
  );
};

export { Home };
