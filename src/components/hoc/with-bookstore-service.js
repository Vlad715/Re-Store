import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                      two={'****************'}
                     bookstoreService={bookstoreService}/>);
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;
