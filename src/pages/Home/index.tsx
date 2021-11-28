import { ProductItem } from 'components';
import { DivGrid } from 'containers';
import products from 'redux/initialState';

const Home = () => {
  return (
    <>
      <h1 className="">Products</h1>
      <DivGrid>
        {products?.products.map(({ id, ...data }: any) => (
          <ProductItem key={id} {...data} />
        ))}
      </DivGrid>
    </>
  );
};

export default Home;
