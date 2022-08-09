import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Text,
  Button,
  useDisclosure,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useCart } from "../../../Hooks/useCart";
import { Cart } from "../../../Pages/Cart";

const Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataCart } = useCart();

  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="#11b68a"
        onClick={onOpen}
        fontSize="20"
        icon={<BsCart size="25" />}
      />
      <Text size="10">({dataCart.length}) </Text>

      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Heading fontFamily="Raleway" p="5">
              Mi Carrito
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            {!!dataCart.length || (
              <DrawerBody>
                <Text> No hay productos en el carrito</Text>
                <Link to="/productos">
                  <Button
                    fontSize="20px"
                    mt="20"
                    bg="#11b68a"
                    onClick={onClose}
                  >
                    Ir a la tienda
                  </Button>
                </Link>
              </DrawerBody>
            )}
            {!!dataCart.length && <Cart onClose={onClose} />}
          </DrawerBody>

          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Modal };
