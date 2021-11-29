import { ProductItem } from 'components';
import { DivGrid, LayoutSection } from 'containers';
import products from 'redux/initialState';

const Home = () => {
  return (
    <LayoutSection>
      <h1 className="">Products</h1>
      <DivGrid>
        {products?.products.map(({ id, ...data }: any) => (
          <ProductItem key={id} {...data} />
        ))}
      </DivGrid>
    </LayoutSection>
  );
};

export default Home;
