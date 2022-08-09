import { Text, Flex, Heading, Image } from "@chakra-ui/react";
const Nosotros = () => {
  return (
    <Flex justify="center" w="100%">
      <Flex direction="column" align="center" m="20">
        <Heading>ADA SHOP</Heading>
        <Text textAlign="center" fontSize="20px">
          Somos especialistas en la fabricación de muebles de estilo y
          apasionados en la creación de aquellos ambientes que siempre soñaste.
          Nuestra diferencia es marcada por el trabajo individual de nuestros
          artesanos en la creación de cada pieza. Productos exclusivos a medida,
          detalles de ebanistería, tallas y herrajes de época. Te Invitamos a
          Recorrer Nuestro Taller de Carpintería, Lustrado y Patinas.
        </Text>
        <Flex justify="center" m="20" wrap="wrap" w="100%">
          <Image
            src="https://static1.mujerhoy.com/www/multimedia/202201/28/media/cortadas/tendencias-decoracion-2022-copiar-muebles-bonitos-baratos-casa-mas-grande-kUdF-U160688509442QsG-624x624@MujerHoy.jpg"
            w="500px"
            m="10"
          />
          <Image
            src="https://www.elmueble.com/medio/2021/03/17/comedor-junto-a-tabique-abierto-con-vano-00521292_ad2d820d_1333x2000.jpg"
            w="500px"
            m="10"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export { Nosotros };
