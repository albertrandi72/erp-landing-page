import { Card } from "flowbite-react";
import PricingCard from "./PricingCard";

export default function () {
    return <div className=" bg-indigo-500 py-12 lg:py-24 text-white text-center" id="pricing">
        <div className="text-3xl lg:text-4xl font-bold text-center ">Pricing</div>
        <div className=" mt-8">Tingkatkan bisnis anda bersama kami dengan paket ERP kami</div>
        <div className="mx-8 my-4">
            <PricingCard />
        </div>
    </div>
}