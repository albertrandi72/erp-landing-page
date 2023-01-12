import { Button, Card } from "flowbite-react";

const data = [
    { buttonColor: "bg-indigo-400", color: "text-indigo-400", title: "Basic", price: "50", features: ["Mencatat barang masuk", "Mencatat barang keluar", "Mencatat keuntungan"] },
    { buttonColor: "bg-indigo-600", color: "text-indigo-600", title: "Business", price: "200", features: ["Paket Basic", "Menganalisa hasil penjualan dengan CHART", "Support 7x24 Jam"] },
    { buttonColor: "bg-indigo-800", color: "text-indigo-800", title: "Entrepreneur", price: "500", features: ["Paket Business", "Export data ke Excel", "AI Prediksi penghasilan"] }
]

export default function () {
    return <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-4">
        {data.map((item, index) => {
            return <Card className="lg:flex-1" key={index}>
                <div className="text-black flex justify-between">
                    <div className={`text-xl font-bold ${item.color}`}>{item.title}</div>
                    <div className="my-auto"><span className="font-bold">{item.price + " Ribu"}</span> {" / bulan"}</div>
                </div>
                <div className={`${item.color} font-bold`}>
                    <div className=" text-gray-500 font-xs">Fitur :</div>
                    {item.features.map(feature => (<div>{feature}</div>))}
                </div>
                <Button className={`${item.buttonColor}`}>Coba sekarang</Button>
            </Card>
        })}
    </div>
}

