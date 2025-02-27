import { Box, Center, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";

const ContaInfo = () => {
  const { emailUser, nameUser } = useContext(AppContext);
  const navigate = useNavigate()

  const GoConta = () => {
    navigate("/conta/1");
  };

  return (
    <Box padding={10}>
      <Center paddingBottom={3}>
        <Text fontSize="3xl" fontWeight="bold">
          Informações da conta
        </Text>
      </Center>
      <Box backgroundColor={"whiteAlpha.800"} padding={5} borderRadius={10}>
        <Text fontWeight={600}>Nome do usuário: {nameUser}</Text>

        <Text fontWeight={600}>Email do usuário: {emailUser}</Text>
      </Box>
    <Center marginTop={10}>
      <Link onClick={GoConta} backgroundColor={"orange"} padding={3} borderRadius={10}>
        <Text fontSize="xl">Conta</Text>
      </Link>
    </Center>
    </Box>
  );
};

export default ContaInfo;
