import { IconButton, Flex } from "@chakra-ui/react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const Paginated = ({ page, setPage, meta }) => {
  return (
    <Flex justify="center" m="20">
      <IconButton
        variant="solid"
        colorScheme="teal"
        bg="#11b68a"
        m="10"
        icon={<BsFillArrowLeftSquareFill size="35" />}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      />
      <IconButton
        variant="solid"
        colorScheme="teal"
        bg="#11b68a"
        m="10"
        icon={<BsFillArrowRightSquareFill size="35" />}
        onClick={() => setPage(page + 1)}
        disabled={page === meta?.pageCount}
      />
    </Flex>
  );
};
export { Paginated };
