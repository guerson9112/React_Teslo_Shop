import { useParams, useSearchParams } from 'react-router';
import { getProductsAction } from '../actions/get-products.action'
import { useQuery } from '@tanstack/react-query'


export const useProducts = () => {

  const { gender } = useParams();
  const [serachParams] = useSearchParams();

  const limit = serachParams.get('limit') || 9;
  const page = serachParams.get('page') || 1;
  const sizes = serachParams.get('sizes') || undefined;
  const query = serachParams.get('query') || undefined;



  const offset = (Number(page) - 1) * Number(limit);

  const price = serachParams.get('price') || 'any';
  console.log(price);

  let minPrice = undefined;
  let maxPrice = undefined;

  switch (price) {
    case 'any':
      break;
    case '0-50':
      minPrice = 0;
      maxPrice = 50;
      break;
    case '50-100':
      minPrice = 50;
      maxPrice = 100;
      break;
    case '100-200':
      minPrice = 100;
      maxPrice = 200;
      break;
    case '200+':
      minPrice = 200;
      maxPrice = undefined;
      break;
  }


  return useQuery({
    queryKey: ['products', { limit, offset, gender, sizes, minPrice, maxPrice, query }],
    queryFn: () => getProductsAction({
      limit: isNaN(+limit) ? 9 : limit,
      offset: isNaN(offset) ? 0 : offset,
      gender,
      sizes,
      minPrice,
      maxPrice,
      query
    }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
