import Layout from '../../components/Layout';
import User from '../../components/User';
import data from '../../utils/data';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product) => (
        <User product={product} key={product.slug}></User>
      ))}
    </div>
  );
}