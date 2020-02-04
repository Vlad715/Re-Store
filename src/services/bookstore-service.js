import imgHarryPotter from './HarryPotter.jpg';
import imgGameOfThrones from './Game of Thrones.jpg';

export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Harry Potter And The Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      price: 25,
      coverImage: imgHarryPotter},
    {
      id: 2,
      title: 'A Dance with Dragons (A Song of Ice and Fire, Book 5)',
      author: 'George R. R. Martin',
      price: 20,
      coverImage: imgGameOfThrones}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 1) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}