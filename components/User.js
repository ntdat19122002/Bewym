import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function User({ product }) {
  return (
    <div className="card">
      <Link href={`/user/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-48 w-96"
          />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg">{product.name}</h2>
        </Link>
        <button className="primary-button" type="button">
          More info
        </button>
      </div>
    </div>
  );
}