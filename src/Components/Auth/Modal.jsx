import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  IconButton,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";

import { useAuthModal } from "../../Hooks/useAuthModal";
import { Login } from "./Login";
import { Register } from "./Register";

const ModalForm = () => {
  const { onOpen, onClose, authModal } = useAuthModal();
  return (
    <>
      <IconButton
        variant="ghost"
        onClick={onOpen}
        colorScheme="#11b68a"
        fontSize="20"
        icon={<BiUser size="25" />}
      />

      <Modal isOpen={authModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Ingresar</Tab>
                <Tab>Registrate</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { ModalForm };
