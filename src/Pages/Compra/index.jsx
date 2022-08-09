import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { useAuthModal } from "../../Hooks/useAuthModal";
import { useCart } from "../../Hooks/useCart";
import { useUser } from "../../Hooks/useUser";

const Compra = () => {
  const {
    dataCart,
    addProduct,
    deleteProduct,
    total,
    menosProduct,
    deleteAllProducts,
  } = useCart();
  const { user } = useUser();
  const toast = useToast();
  const { onOpen } = useAuthModal();
  const navigate = useNavigate();
  const finalizarCompra = async () => {
    if (!user) {
      return onOpen();
    }
    try {
      const { data } = await axios.post(
        `https://strapiecommerce-production-56e9.up.railway.app/api/orders`,
        {
          data: {
            Item: dataCart,
            users_permissions_users: user.user.id,
          },
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      deleteAllProducts(data);
      navigate("../pedidos", { replace: true });
      toast({
        title: "Compra realizada con exito",
        description: user.name,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Los datos ingresados son incorrectos",
        description: user.mail,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" w="100%" gap="20">
      <Heading fontFamily="Raleway" textAlign="center" mt="10">
        Finalizar compra
      </Heading>
      <Flex justify="space-evenly" display={{ md: "flex" }} gap="10">
        <Box>
          {dataCart.map((item) => {
            return (
              <>
                <Flex key={item.id} justify="space-between">
                  <Heading size="lg" fontFamily="Raleway">
                    {item.title}
                  </Heading>

                  <IconButton
                    variant="outline"
                    colorScheme="red"
                    onClick={() => deleteProduct(item.id)}
                    icon={<ImBin />}
                  />
                </Flex>
                <Flex gap="30">
                  <Image src={item.image.data.attributes.url} w="90px" />
                  <Box>
                    <Heading size="md" fontFamily="Raleway">
                      ${item.price}
                    </Heading>
                    <Flex direction="row">
                      <Text size="2xl" mr="3" pt="2" fontFamily="Raleway">
                        Cantidad:
                      </Text>
                      <NumberInput
                        defaultValue={item.cant}
                        min={1}
                        max={item.stock}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper
                            onClick={() => addProduct(item)}
                          />
                          <NumberDecrementStepper
                            onClick={() => menosProduct(item)}
                          />
                        </NumberInputStepper>
                      </NumberInput>
                    </Flex>
                  </Box>
                </Flex>
              </>
            );
          })}
        </Box>
        <Box>
          <TableContainer>
            <Table variant="simple">
              <Thead />
              <Tbody>
                <Tr>
                  <Td>Envio</Td>
                  <Td>No contamos con envios</Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>
                    <Heading size="xl"> ${total(dataCart)}</Heading>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Button
                  fontSize="20px"
                  mt="20"
                  bg="#11b68a"
                  onClick={finalizarCompra}
                >
                  Finalizar compra
                </Button>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Flex>
  );
};
export { Compra };
