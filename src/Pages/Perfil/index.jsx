import { Flex, Heading, Text, Box, useColorModeValue } from "@chakra-ui/react";

import { useUser } from "../../Hooks/useUser";

const Perfil = () => {
  const { user } = useUser();
  return (
    <Box w="100%" bg={useColorModeValue("green.50")} minH="83vh">
      <Heading fontFamily="Raleway" m="20" size="2xl">
        Mi perfil
      </Heading>
      <Flex justify="center" m="20">
        <Flex
          w="500px"
          direction="column"
          bg={useColorModeValue("green.100")}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          p="5"
        >
          <Text fontWeight="bold" fontSize="xl">
            {user && user.user.username}
          </Text>
          <Text fontSize="2xl">{user && user.user.email}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export { Perfil };
