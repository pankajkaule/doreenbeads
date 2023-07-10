import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../styles/Navbar2.css'

const Navbar2 = () => {
    return (
        <div className='Navbar2'>
            <div className=""><p><img src="https://www.doreenbeads.com/Themes/Starter/Content/images/logo.png" alt="" /></p><p>WORLDWIDE FREE SHIPPING <LocalShippingIcon /></p></div>
            <div className=""><div className="input"><input type="text" placeholder='Search for items' /> <span ><SearchIcon className='searchicon'/></span></div></div>
            <div className=""><img src="/Themes/Starter/Content/images/footer/en/free_icon.png" alt="" /></div>
            <div className=""><p><img src="https://doreenbeads.com/Themes/Starter/Content/images/icon_account.png" alt="" /></p><p><span>Log in</span></p></div>
            <div className=""><p><img src="https://doreenbeads.com/Themes/Starter/Content/images/icon_wishlist.png" alt="" /></p><p><span>wishlist</span><span>(0)</span></p></div>
            <div className=""><p><ShoppingCartOutlinedIcon /></p><p><span>Cart</span><span>(0)</span></p></div>
        </div>
    )
}

export default Navbar2
