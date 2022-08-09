import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  Heading,
  Button,
  useColorMode,
  IconButton,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ModalForm } from "../../Components/Auth/Modal";
import { ModalProfile } from "../../Components/Auth/Profile";
import { useUser } from "../../Hooks/useUser";
import { Modal } from "./Drawer";

const Header = () => {
  const { user } = useUser();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex p="8" bg="#11b68a" justify="space-between" display={{ md: "flex" }}>
      <Flex fontSize="xl" fontWeight="bold">
        <Link to="/">
          <Heading fontFamily="Raleway">ADASHOP </Heading>
        </Link>
      </Flex>

      <Flex as="HStack" direction="row" alignItems="center">
        <Box display={{ base: "none", md: "flex" }}>
          <Link to="/productos">
            <Text fontSize="xl" px="4">
              Tienda
            </Text>
          </Link>
          <Link to="/nosotros">
            <Text fontSize="xl" px="4">
              Nosotros
            </Text>
          </Link>
        </Box>
      </Flex>
      <Flex as="HStack" direction="row" alignItems="flex-end">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                variant="ghost"
                as={Button}
                display={{ md: "none" }}
                colorScheme="#11b68a"
                fontSize="20"
              >
                {isOpen ? (
                  <CloseIcon fontSize="25" />
                ) : (
                  <HamburgerIcon fontSize="25" />
                )}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/productos">
                    <Text fontSize="sm" px="2">
                      Tienda
                    </Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/nosotros">
                    <Text fontSize="sm" px="2">
                      Nosotros
                    </Text>
                  </Link>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Button variant="ghost" colorScheme="#11b68a" onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <IconButton
              variant="ghost"
              size="20"
              colorScheme="#11b68a"
              icon={<FaRegMoon size="25" />}
            />
          ) : (
            <IconButton
              variant="ghost"
              size="20"
              colorScheme="#11b68a"
              icon={<BsSun size="25" />}
            />
          )}
        </Button>

        <Modal />
        {user ? <ModalProfile /> : <ModalForm />}
      </Flex>
    </Flex>
  );
};

export { Header };
