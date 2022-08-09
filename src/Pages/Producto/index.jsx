import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useCart } from "../../Hooks/useCart";
import { useGet } from "../../Hooks/useGet";

const Producto = () => {
  const { addProduct } = useCart();
  const { id } = useParams();
  const { data } = useGet(`products/${id}?populate[0]=image`);
  if (!data) return null;

  return (
    <Flex justifyContent="center" w="100%" gap="30" display={{ md: "flex" }}>
      <Box>
        <Image
          src={data.data.attributes.image.data.attributes.url}
          w="400px"
          mt="25"
        />
      </Box>
      <Flex direction="column" m="20">
        <Heading fontSize="50px" fontFamily="Raleway">
          {data.data.attributes.title}
        </Heading>
        <Text fontSize="25px">$ {data.data.attributes.price}</Text>
        <Text fontSize="20px">{data.data.attributes.description}</Text>
        <Button bg="#11b68a" mt="50px" onClick={() => addProduct(data.data)}>
          Agregar al carrito
        </Button>
      </Flex>
    </Flex>
  );
};

export { Producto };
