import updateBookList from './book-list';
import updateShoppingCard from './shopping-cart';


const reducer = (state, action ) => {
  
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCard(state, action) 
  };
};

export default reducer;
