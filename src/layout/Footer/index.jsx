import { Flex, Text, IconButton } from "@chakra-ui/react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex
      fontSize="20px"
      justify="space-between"
      display={{ md: "flex" }}
      textAlign="center"
      gap="20"
    >
      <Text>© 2022 AdaShop.</Text>
      <Link to="/">
        <Flex as="HStack" justify={{ md: "flex-end", base: "center" }}>
          <IconButton
            variant="ghost"
            fontSize="20"
            icon={<AiFillTwitterCircle />}
          />
          <IconButton
            variant="ghost"
            fontSize="20"
            icon={<AiFillInstagram />}
          />
          <IconButton variant="ghost" fontSize="20" icon={<AiFillYoutube />} />
        </Flex>
      </Link>
    </Flex>
  );
};
export { Footer };
