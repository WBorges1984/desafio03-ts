import { Center, Link, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn,setEmailUser,setNameUser } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
      setEmailUser(data.email)
      setNameUser(data.name)
    };

    getData();
  }, []);

  const actualData = new Date();

  const dia = actualData.getDate().toString().padStart(2, "0");
  const mes = (actualData.getMonth() + 1).toString().padStart(2, "0");
  const ano = actualData.getFullYear();

  const horas = actualData.getHours().toString().padStart(2, "0");
  const minutos = actualData.getMinutes().toString().padStart(2, "0");

  const dataFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}`;

  if (userData && id !== userData.id) {
    navigate("/");
  }

  const GoPerfil = () => {
    navigate("/infoconta");
  };

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vinda ${userData?.name}`}
              content={dataFormatada}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
            <Center>
              <Link onClick={GoPerfil} backgroundColor={"orange"} padding={3} borderRadius={10}>
                <Text fontSize={20} fontWeight={500}>
                  Perfil do usuário
                </Text>
              </Link>
            </Center>
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
