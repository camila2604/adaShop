import { Flex, Spinner, Box } from "@chakra-ui/react";

import { Card } from "../../Components/Card";
import { useGet } from "../../Hooks/useGet";
import { Filter } from "./Filter";
import { Paginated } from "./Paginated";

const Productos = () => {
  const {
    data,
    isloading,
    page,
    setPage,
    meta,
    setTitle,
    setPriceMin,
    setPriceMax,
    setStock,
  } = useGet(`products?populate[0]=image`);

  return (
    <Flex w="100%" display={{ md: "flex" }}>
      <Box gap="30" m="5">
        <Filter
          setTitle={setTitle}
          setPriceMin={setPriceMin}
          setPriceMax={setPriceMax}
          setStock={setStock}
        />
      </Box>
      <Flex direction="column">
        <Flex direction="row" wrap="wrap" justify="center" gap="30" m="10">
          {isloading ? (
            <Spinner />
          ) : (
            data &&
            [...data.data].map((result) => {
              return <Card key="cardKey" result={result} />;
            })
          )}
        </Flex>

        <Paginated page={page} setPage={setPage} meta={meta} />
      </Flex>
    </Flex>
  );
};
export { Productos };
