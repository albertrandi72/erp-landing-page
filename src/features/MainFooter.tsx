import { Footer } from "flowbite-react"
import Logo from '../assets/logo.svg'
const MainFooter = () => <>
    <Footer container={true}>
        <div className="w-full text-center">
            <Footer.Copyright
                href="#"
                by="ERP™"
                year={2023}
            />
        </div>
    </Footer>
</>
export default MainFooter