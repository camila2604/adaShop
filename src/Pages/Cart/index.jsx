import {
  Text,
  Image,
  Button,
  Flex,
  Heading,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

import { useCart } from "../../Hooks/useCart";

const Cart = ({ onClose }) => {
  const {
    deleteAllProducts,
    dataCart,
    addProduct,
    deleteProduct,
    total,
    menosProduct,
  } = useCart();
  if (!dataCart.length) return null;
  return (
    <Flex direction="column" gap="30">
      <Box>
        {dataCart.map((item) => {
          return (
            <>
              <Flex key={item.id} justify="space-between">
                <Heading size="md" fontFamily="Raleway">
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
                <Image src={item.image.data.attributes.url} w="80px" />
                <Box>
                  <Heading size="md" fontFamily="Raleway">
                    ${item.price}
                  </Heading>
                  <Flex>
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
      <Box w="100%" gap="30" justify="center" mt="20">
        <Flex direction="column" w="100%">
          <Button
            w="100%"
            colorScheme="red"
            variant="outline"
            onClick={deleteAllProducts}
          >
            <Text p="4" fontFamily="Raleway">
              Vaciar carrito
            </Text>
            <ImBin />
          </Button>
          <Heading fontFamily="Raleway" m="4">
            Total: ${total(dataCart)}
          </Heading>

          <Button
            fontSize="20px"
            w="100%"
            mt="5"
            bg="#11b68a"
            onClick={onClose}
          >
            <Link to="/compra">Continuar compra</Link>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export { Cart };
