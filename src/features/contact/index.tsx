import ContactForm from "./ContactForm";

export default function () {
  return (<div className=" bg-gray-100 py-12 lg:py-24 text-black text-center" id="contact">
    <div className="text-3xl lg:text-4xl font-bold text-center mb-4">Hubungi kami</div>
    <div className="text-gray-500 mb-8">Kami dengan senang hati dalam menerima pertanyaan dan masukan dari anda. Silakan kirim pesan melalui form dibawah ini</div>
    <div className="p-4 lg:px-60">
      <ContactForm />
    </div>
  </div>
  );
}
