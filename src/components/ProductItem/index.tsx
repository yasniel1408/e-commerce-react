import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FC } from 'react';

type AppProps = {
  title: string;
  image: string;
  price: string;
  description: string;
};

const ProductItem: FC<AppProps> = ({ title, image, price, description }) => {
  return (
    <div className="p-col-12 p-md-6 p-lg-3">
      <Card
        style={{ marginBottom: '1rem' }}
        title={`$${price}`}
        subTitle={title}
        header={
          <img
            alt="Card"
            style={{ objectFit: 'cover' }}
            src={image}
            height="180px"
            loading="lazy"
          />
        }
        footer={
          <>
            <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          </>
        }
      >
        {description}
      </Card>
    </div>
  );
};

export default ProductItem;
