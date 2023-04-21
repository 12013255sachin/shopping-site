import React from 'react';
import '../styles/cart.css';
import Images from '../img-assets/images';

const Cart = ({ cart, setCart }) => {
    // will be called whenever any item is removed from the cart
    const handleRemove = (id) => {
        // arr will have all data except the one which was removed 
        // as it filters out only those whose id does not matches with the one just removed
        const arr = cart.filter((item) => item.id !== id);
        // set the cart now
        setCart(arr);
    }

    return (
        <>
            <div className="you-ordered">You have ordered:</div>
            {
                cart.map((item) => (
                    <div className="container detailsContainer" key={item.id}>
                        <div className="detailsImage">
                            <img src={Images[item.itemImg]} alt="cotton shirt" />
                        </div>
                        <div className="detailsContent">
                            <div className="detailsHeading">{item.itemName}</div>
                            <div className="detailsDescription">{item.itemDescription}</div>
                            <div className="detailsPrice">Price: Rs.{item.itemPrice}</div>
                        </div>
                        <div className="button">
                            <button className="btn btn-lg btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                    
                    ))}
                
                <div className="copyright">
                    <p>Made with &hearts;</p>
                    <a style={{color: 'black', textDecoration: 'none', textAlign:'center'}} target='_blank'
                     href="https://github.com/12013255sachin">&copy; 12013255sachin(sachin choudhary)</a>
                     <a style={{color: 'black', textDecoration:'none', textAlign:'center'}}
                     target='_blank' href='https://github.com/12013255sachin'>&copy;Sachin's github</a>
                    
                </div>
                
        </>
        
    );
};

export default Cart;