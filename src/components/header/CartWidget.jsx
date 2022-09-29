import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <a>
            <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
        </a>
    )
}

export default CartWidget