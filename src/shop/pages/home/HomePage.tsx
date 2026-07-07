import { CustomPagination } from '@/components/custom/CustomPagination'
import { Button } from '@/components/ui/button'
//import { products } from '@/mocks/products.mock'
import { CustomJumbotron } from '@/shop/components/CustomJumbotron'
import { ProductsGrid } from '@/shop/components/ProductsGrid'
import { useProducts } from '@/shop/hooks/useProducts'

export const HomePage = () => {

    const { data } = useProducts();
    console.log('data', data);

    return (
        <>
            <CustomJumbotron title='Todos los productos' />

            <ProductsGrid products={data?.products || []} />

            <CustomPagination totalPages={data?.pages || 1} />
        </>
    )
}
