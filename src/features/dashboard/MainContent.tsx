import MetricImage from '../../assets/metric.svg'
import StaticWeb from '../../assets/staticWeb.svg'
export default function () {
    return <div className="pt-16 mx-8 flex justify-center text-lg">
        <div className='flex-1'>
            <div className=" mt-10 lg:mx-14 italic text-white text-xl text-center">
                "Kembangkan bisnis anda bersama kami. Coba sekarang dengan <span className=' text-2xl font-bold text-[#8BE8FF] cursor-pointer'>Aplikasi ERP Kami!</span>"
            </div>
            <div className=" my-10 lg:mt-20 xl:mt-24 mx-auto w-60 lg:w-80">
                <img src={MetricImage} alt="Bussiness Grow" />
            </div>
            <div className='lg:hidden'>
                <Subtitle />
            </div>
        </div>
        <div className='flex-1 hidden lg:flex flex-col justify-center mb-8'>
            <Subtitle />
            <div className='flex-1 justify-center my-4'>
                <img src={StaticWeb} alt='Web' className='m-auto' />
            </div>
        </div>
    </div>
}

function Subtitle() {
    return <>
        <div className="text-center text-white">
            <div>Cara terbaik dalam mengembangkan bisnis adalah dengan menggunakan aplikasi yang tepat.</div>
            <div>ERP kami akan mempermudah bisnis anda yang dapat diakses dimanapun dan kapanpun.</div>
        </div>
    </>
}