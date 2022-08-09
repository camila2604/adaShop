import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Layout } from "./layout";
import {
  Compra,
  Error,
  Home,
  Nosotros,
  Pedidos,
  Perfil,
  Producto,
  Productos,
} from "./Pages";
import { ProtectedRoutes } from "./Routes/ProtectedRoutes";

const App = () => {
  return (
    <Flex justify="center">
      <RecoilRoot>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/compra" element={<Compra />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/pedidos" element={<Pedidos />} />
            </Route>
            <Route path="/*" element={<Error />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </Flex>
  );
};

export default App;
