import { useEffect, useState } from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";

const Pedidos = () => {
  const [order, setOrder] = useState();
  const parseDateToString = (date) => {
    const fecha = new Date(date);
    const day = `0${fecha.getDate()}`.slice(-2);
    const month = `0${fecha.getMonth() + 1}`.slice(-2);
    return `${day}/${month}/${fecha.getFullYear()}`;
  };
  useEffect(() => {
    const ordenes = async () => {
      const response = await axios.get(
        `https://strapiecommerce-production-56e9.up.railway.app/api/orders`
      );
      setOrder(response.data);
    };
    ordenes();
  }, []);
  console.log(order);
  return (
    <Box w="100%" bg={useColorModeValue("green.50")} minH="83vh">
      <Heading fontFamily="Raleway" m="10" size="2xl">
        Mis pedidos
      </Heading>
      <Flex w="100%" direction="row" justify="center" display={{ md: "flex" }}>
        {order &&
          order.data.map((item) => {
            return (
              <>
                <Flex
                  key={item.id}
                  direction="column"
                  bg={useColorModeValue("green.100")}
                  rounded="lg"
                  shadow="lg"
                  p="5"
                  m="25"
                >
                  <Text fontWeight="black" fontSize="xl">
                    Pedido n° {item.id}
                  </Text>
                  <Text fontWeight="bold">Productos</Text>
                  <OrderedList>
                    {item &&
                      item.attributes.Item.map((titulo) => {
                        return (
                          <>
                            <ListItem key={titulo.id}>{titulo.title}</ListItem>
                          </>
                        );
                      })}
                  </OrderedList>

                  <Text fontWeight="bold" fontSize="xl">
                    Fecha de la compra:
                  </Text>
                  <Text> {parseDateToString(item.attributes.createdAt)}</Text>
                </Flex>
              </>
            );
          })}
      </Flex>
    </Box>
  );
};
export { Pedidos };
