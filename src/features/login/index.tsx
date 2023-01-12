import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function ({ closeForm }: { closeForm: () => void }) {
    return <div className="p-4">
        <form className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="email"
                    />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="password"
                    />
                </div>
                <TextInput
                    id="password1"
                    type="password"
                    required={true}
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <div className="text-blue-500 cursor-pointer font-bold">Sign Up</div>
            </div>
            <Button type="submit" onClick={(e) => { e.preventDefault(); closeForm() }}>
                Register
            </Button>
        </form>
    </div>
}