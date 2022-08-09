import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { useUser } from "../../Hooks/useUser";

const Login = () => {
  const toast = useToast();
  const { loginUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = async (data) => {
    try {
      await loginUser(data);
      toast({
        title: "Bienvenido",
        description: data.mail,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Los datos ingresados son incorrectos",
        description: data.mail,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container borderRadius="xl" bg="white" gap="5">
      <Heading
        align="center"
        color="#11b68a"
        mb="5"
        h="50px"
        borderRadius="md"
        w="100%"
      >
        LOGIN
      </Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" alignItems="center">
          <FormControl w="100%" isInvalid={!!errors.mail}>
            <FormLabel htmlFor="email" pt="5px">
              Email
            </FormLabel>
            <Input
              id="email"
              {...register("mail", {
                required: "este campo es requerido",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i,
                  message: "Ingrese un email correcto",
                },
              })}
            />
            {errors.mail && (
              <FormErrorMessage>{errors.mail?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl w="100%" isInvalid={!!errors.password}>
            <FormLabel htmlFor="password" pt="10px">
              Contraseña
            </FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                {...register("password", {
                  required: "este campo es requerido",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Máximo 10 caracteres",
                  },
                })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            my="35px"
            w="100%"
            bg="#11b68a"
            justifyContent="center"
          >
            Login
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export { Login };
