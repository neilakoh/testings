import products from './products';
import categories from './categories';
import users from './users';
import uploadImg from './upload_img';
import pagination from './pagination';

export default function () {
  products();
  categories();
  users();
  uploadImg();
  pagination();
}
