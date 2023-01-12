import TeamImage from "../assets/team.svg"
export default function () {
    return <div className="bg-white py-12 lg:py-24 px-8" id="about">
        <div className="text-3xl lg:text-4xl font-bold text-center">About</div>
        <div className="my-8 lg:flex">
            <div><img src={TeamImage} alt="team"></img></div>
            <div className=" text-center flex flex-col justify-center">
                <div className=" my-8 text-xl lg:text-2xl lg:mb-16 font-bold">Kami menyediakan solusi ERP terabik untuk bisnis anda.</div>
                <div className="">Tim kami telah berpengalaman dalam pengembangan perangkat lunak dalam bisnis ERP. Kami mengkostumisasi dan mengimplementasi Sistem ERP untuk memenuhi kebutuhan khusus setiap client.</div>
            </div>
        </div>
    </div >
}