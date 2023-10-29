import React from 'react'
import { Badge } from '@chakra-ui/react'

const CartWidget = () => {
  return (
      <>
          <div>
              <h3>Carrito</h3>
               <Badge colorScheme='purple'>5 productos</Badge>
      </div>
      </>
  )
}

export default CartWidget