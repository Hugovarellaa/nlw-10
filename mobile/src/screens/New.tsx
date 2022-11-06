import { Heading, Text, VStack } from "native-base";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function New() {
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Criar novo bolão" />


      <VStack mt={8} mx={5} alignItems="center">
        <Logo />
        <Heading fontFamily="heading" color="white" fontSize="lg" my={8} textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        <Input placeholder="Qual nome do seu bolão?" mb={2} />
        <Button title="CRIAR MEU BOLÃO" />

        <Text color="white" fontSize="sm" textAlign="center" mt={4}>
          Após criar seu bolão, você receberá um {'\n'}código único que poderá usar para convidar {'\n'}outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}
