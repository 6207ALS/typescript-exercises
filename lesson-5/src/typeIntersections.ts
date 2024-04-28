// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Type Intersections


// Q1
type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping;

const item: ShippableProduct = {
	name: "Computer",
	price: 200,
	weight: 10,
	shippingCost: 20
}

// Q2
interface ShippableProduct2 extends Product, Shipping {};