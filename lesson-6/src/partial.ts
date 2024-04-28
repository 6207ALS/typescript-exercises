// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: Partial


// Q1
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"

	let productIndex = products.findIndex((product) => product.id === productId);

	if (productIndex !== -1) {
		products[productIndex] = { ...products[productIndex], ...updatedValues };
	} else {
		console.log("Product not found");
	}
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});