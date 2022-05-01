import { Box, Button, Flex, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box>
      <Flex justifyContent={'space-between'} margin='0' padding='4' bgColor={'blue.100'}>
        <Text fontSize={20} fontWeight='bold'>Lista de Clientes</Text>
        <Button colorScheme={'blue'}>+</Button>
      </Flex>

      <VStack paddingX={20} paddingY={10}>

        <FormControl marginY={5}>
          <FormLabel>Name</FormLabel>
          <Input type={'text'}/>
        </FormControl>
        
        <FormControl margin={5}>
          <FormLabel>E-mail</FormLabel>
          <Input type={'email'}/>
        </FormControl>

        <Button colorScheme={'blue'} alignSelf='flex-end' margin={20}>Cadastrar</Button>
      </VStack>
    </Box>
    

  )
}
