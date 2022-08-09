import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Flex justify="center" color="gray" w="100%" m="30">
      <Flex direction="column" textAlign="center" w="80%" border="2px" gap="10">
        <Heading fontSize="6xl" color="#11b68a" fontFamily="Raleway">
          404
        </Heading>
        <Text fontSize="40px">Page Not Found</Text>
        <Text fontSize="20px">
          The page youre looking for does not seem to exist
        </Text>
        <Link to="/">
          <Button fontSize="20px" color="black" bg="#11b68a" m="5">
            Go to home
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
export { Error };
