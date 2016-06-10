import React from 'react';

export const Page3 = () => (
  <div>
    Page3
    <p><a href="/">Back</a></p>
    <ProductsAdd/>
  </div>
);

class ProductsAdd extends React.Component {
  render() {
    return (
      <div>
        <div>View <a href="/page3">Page 3</a></div>
        <div>View <a href="/page3/sub/">Page 3 Sub</a></div>
      </div>
    );
  }
}

export default ProductsAdd;
