import React from 'react'
import CartWidget from './CartWidget'
import { Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer,Grid,GridItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
      <>
         <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              <Box h='10' bg='blue.500'><h2>Brand</h2></Box>
              <Box h='10' bg='blue.500'> <Menu>
                <MenuButton>
                    Categorías
                </MenuButton>
                <MenuList>
                    <MenuItem>CATEGORÍA 1</MenuItem>
                    <MenuItem>CATEGORÍA 2</MenuItem>
                    <MenuItem>CATEGORÍA 3</MenuItem>
                    <MenuItem>CATEGORÍA 4</MenuItem>
                    <MenuItem>CATEGORÍA 5</MenuItem>
                </MenuList>
            </Menu></Box>
               <Box  h='10' bg='blue.500'><CartWidget/></Box>

          </Grid>       
          

      </>
     
  )
}

export default NavBar