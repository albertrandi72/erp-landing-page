import MetricImage from '../../assets/metric.svg'
import StaticWeb from '../../assets/staticWeb.svg'
export default function () {
    return <div className="pt-24 mx-8 flex justify-center text-lg">
        <div className='flex-1 lg:mt-36'>
            <div className=" mt-24 lg:mx-14 italic text-white text-xl text-center">
                "Grow your business together with us. Get Started With <span className=' text-2xl font-bold text-[#8BE8FF] cursor-pointer'>Our ERP Today!</span>"
            </div>
            <div className=" mt-16 lg:mt-20 xl:mt-24 mx-auto w-60 lg:w-80">
                <img src={MetricImage} alt="Bussiness Grow" />
            </div>
        </div>
        <div className='flex-1 hidden lg:flex flex-col justify-center'>
            <div className="text-center text-white">
                <div>The best way to manage your business is to use the right tools.</div>
                <div>ERP makes it easy to access the information you need from anywhere, anytime.</div>
            </div>
            <div className='flex-1 justify-center mt-12 mb-4'>
                <img src={StaticWeb} alt='Web' className='m-auto' />
            </div>
        </div>
    </div>
}