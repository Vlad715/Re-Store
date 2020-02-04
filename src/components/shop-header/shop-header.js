import React, {Component} from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ShopHeader extends Component {

  render() {
    
    const {cartItems, orderTotal} = this.props;
    let numItems = cartItems.length === 0 ? 0 : cartItems.reduce( ( sum, books) => {
      return  sum + books.count }, 0);

    return (
      <header className="shop-header row">
        <Link to="/">
          <div className="logo text-dark">ReStore</div>
        </Link>
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            {numItems} items (${orderTotal})
          </div>
        </Link>
      </header>
    );
  }
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return { cartItems, orderTotal };
};

export default connect(mapStateToProps)(ShopHeader);