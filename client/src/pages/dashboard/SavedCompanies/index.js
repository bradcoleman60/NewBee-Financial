import React from 'react'
import { useMutation } from '@apollo/client'
import { SAVE_COMPANY } from '../../../utils/mutations'
import { idbPromise } from '../../../utils/helpers'

export default function SavedCompanies() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);
  return (
    <div>SavedCompanies</div>
  )
}
