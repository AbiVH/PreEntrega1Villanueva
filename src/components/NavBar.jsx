import React from 'react'
import CartWidget from './CartWidget'
import { Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
      <>
          <div>
             <Flex>
            <Box p='4' >
                <h2>Brand</h2>
            </Box>
              <Spacer />
               <Menu>
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
            </Menu>
              <Spacer/>
            <Box p='4' >
                <CartWidget/>
            </Box>
        </Flex>
                
        </div>
      </>
     
  )
}

export default NavBar