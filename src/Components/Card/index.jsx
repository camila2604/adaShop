import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { Link, Link as ReactLink } from "react-router-dom";

const Card = ({ result }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      w="100%"
      maxW="300px"
      h="sm"
      p="2"
      Key={result.id}
    >
      <Box h="50%">
        <Link as={ReactLink} to={`/producto/${result.id}`}>
          <Image
            src={result.attributes.image.data.attributes.url}
            alt={`Picture of ${result.title}`}
            roundedTop="lg"
            // objectFit="cover"
            margin="auto"
            boxSize="200px"
          />
        </Link>
      </Box>

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            mt="10"
            fontSize="20px"
          >
            {result.attributes.title}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="30px" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color="gray.600" fontSize="25px">
              $
            </Box>
            {result.attributes.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export { Card };
