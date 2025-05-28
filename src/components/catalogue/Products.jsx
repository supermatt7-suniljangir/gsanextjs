import ProductCard from "./ProductCard";

const Products = ({products}) => {
    return (<div className="py-10">
        <h2 className="md:text-4xl text-3xl font-bold text-center">
            Explore Designs
        </h2>
        {/* products */}
        <div className="flex gap-4 mt-6 p-4 justify-center w-full flex-wrap">
            {products?.map((product) => (<ProductCard key={product?.id || Math.random() + 1} product={product}/>))}
        </div>
    </div>);
};

export default Products;
