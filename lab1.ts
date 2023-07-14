interface Product {
  id: number | string;
  name: string;
  image: string;
  price: number;
  desc?: string;
  status: boolean;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', image: 'https://picsum.photos/100/100', price: 200, desc: 'Mô tả 1', status: true },
  { id: 2, name: 'Product 2', image: 'https://picsum.photos/100/100', price: 300, desc: 'Mô tả 2', status: false },
  { id: 3, name: 'Product 3', image: 'https://picsum.photos/100/100', price: 400, desc: 'Mô tả 3', status: true },
];

function addProduct(newProduct: Product) {
  products.push(newProduct);
  console.log('Thêm mới thành công!');
}

function updateProduct(id: number | string, updatedProduct: Partial<Product>) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    console.log('Cập nhật thành công!');
  } else {
    console.log('Không tìm thấy sản phẩm với ID đã cho.');
  }
}

function removeProduct(id: number | string) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    console.log('Xóa thành công!');
  } else {
    console.log('Không tìm thấy sản phẩm với ID đã cho.');
  }
}

addProduct({ id: 4, name: 'Product 4', image: 'https://picsum.photos/100/100', price: 500, status: true });

updateProduct(2, { name: 'Updated Product 2', price: 350 });

removeProduct(3);