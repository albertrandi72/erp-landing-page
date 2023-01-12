import { Button, Label, TextInput, Textarea } from "flowbite-react";

const ContactForm = () => <form className="flex flex-col gap-4 text-left">
    <div>
        <div className="mb-2 block">
            <Label htmlFor="name" value="Nama" />
        </div>
        <TextInput
            id="name"
            type="text"
            placeholder="Nama"
            required={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
            id="email"
            type="email"
            placeholder="email@email.co"
            required={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label htmlFor="message" value="Pesan" />
        </div>
        <Textarea
            id="message"
            placeholder="Pesan"
            required={true}
        />
    </div>
    <Button type="submit">Kirim</Button>
</form>

export default ContactForm