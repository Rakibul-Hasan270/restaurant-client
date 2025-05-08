import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hook/useAuth';
import ItemCart from '../ItemCart/ItemCart';
import useAxiosSecure from '../../hook/useAxiosSecure';

const Menu = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const getData = async () => {
        const res = await axiosSecure.get('/item');
        console.log(res)
        return res.data;
    }

    const { data = [] } = useQuery({
        queryKey: ['menu_item'],
        queryFn: () => getData(),
        enabled: !!user?.email
    })


    return (
        <div className='max-w-6xl mx-auto mb-24'>
            <p className="text-5xl font-bold text-center mb-6">Explore Delicious Dishes</p>
            <p className='text-center mb-10 w-3/4 mx-auto'>Take a culinary journey with our diverse menu, featuring local favorites and international classics. Each item is prepared with love and the finest ingredients to ensure you enjoy every bite. Whether dining in or ordering out, we have something to please every palate, every mood, and every moment.</p>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map((item, idx) => <ItemCart key={idx} item={item}></ItemCart>)
                }
            </div>
        </div>
    );
};

export default Menu;