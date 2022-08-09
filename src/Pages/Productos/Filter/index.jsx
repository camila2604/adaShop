import { Box, Flex, Input, Switch, Text } from "@chakra-ui/react";

const Filter = ({ setTitle, setPriceMin, setPriceMax, setStock }) => {
  const handleSwitch = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      setStock(`&filters[stock][$gt]=0`);
    } else {
      setStock("");
    }
  };
  return (
    <Flex direction="column" align="flex-start" w="auto" gap="10">
      <Text fontSize={{ base: "35px", lg: "55px" }}>Productos</Text>
      <Input
        placeholder="Buscar"
        width="auto"
        variant="filled"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />

      <Box>
        <Text fontSize={{ base: "20px", md: "20px", lg: "30px" }} mb="5">
          Filtrar por precio
        </Text>
        <Input
          placeholder="Precio min"
          w="45%"
          variant="filled"
          me="5"
          type="text"
          onChange={(e) => setPriceMin(e.target.value)}
        />
        <Input
          placeholder="Precio max"
          w="45%"
          variant="filled"
          type="text"
          onChange={(e) => setPriceMax(e.target.value)}
        />
      </Box>

      <Box>
        <Text fontSize={{ base: "20px", md: "20px", lg: "30px" }}>
          Unidades disponibles
        </Text>
        <Switch size="md" colorScheme="green" onChange={handleSwitch} />
      </Box>
    </Flex>
  );
};
export { Filter };
