import { tesloApi } from '@/api/tesloApi';
import type { ProductsResponse } from '@/interfaces/products.response';

interface Options {
    limit?: number | string | undefined;
    offset?: number | string | undefined;
    sizes?: string | null | undefined;
    gender?: string | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
    query?: string;

}

export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {

    const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;

    const { data } = await tesloApi.get<ProductsResponse>('/products', {
        params: {
            limit,
            offset,
            gender,
            sizes,
            minPrice,
            maxPrice,
            q: query,

        }
    });

    console.log('data', data);

    const productsWithImageUrls = data.products.map(product => {
        return {
            ...product,
            images: product.images.map(image => `${import.meta.env.VITE_API_URL}/files/product/${image}`)
        }
    });

    return {
        ...data,
        products: productsWithImageUrls
    }
};