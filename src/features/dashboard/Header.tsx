import { Sidebar } from 'flowbite-react'
import { AiOutlineMenu, AiFillPhone } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { IoIosHome, IoIosPricetag } from 'react-icons/io'
import { useEffect, useState } from 'react'
export default function Header() {
    const [showNav, setShowNav] = useState(false)

    return <div>
        <div className="hidden lg:flex py-6 px-12 text-white">
            <div className=" flex text-3xl font-bold"><svg className=' fill-white mr-4' width="32" height="32"><path d="M7 0v9l.58.268L20 15l6-5L7 0zm2 3.313 13.424 7.064-2.733 2.277L9 7.72V3.312zM7 11v21l7-17-7-4zm0 21 20-11V11l-1.725 1.81L7 32zm2-17.553 2.48 1.416L9 21.891v-7.444zM25 16v3.818l-7.635 4.2L25 16z" /></svg>Home</div>
            <div className="flex flex-1 flex-row-reverse gap-x-12 text-3xl font-bold">
                <div className=" cursor-pointer text-[#8BE8FF] border-[#8BE8FF] border-solid border-4 font-bold px-8 -mt-0.5 py-1 text-lg rounded-xl">LOGIN</div>
                <div>CONTACT</div>
                <div>PRICING</div>
                <div>ABOUT</div>
            </div>
        </div>
        <div className='flex lg:hidden py-4 px-4 justify-between cursor-pointer hover:shadow' onClick={() => setShowNav(!showNav)}>
            <svg className=' fill-white mr-4' width="32" height="32"><path d="M7 0v9l.58.268L20 15l6-5L7 0zm2 3.313 13.424 7.064-2.733 2.277L9 7.72V3.312zM7 11v21l7-17-7-4zm0 21 20-11V11l-1.725 1.81L7 32zm2-17.553 2.48 1.416L9 21.891v-7.444zM25 16v3.818l-7.635 4.2L25 16z" /></svg>
            <AiOutlineMenu size={32} color='white' />
        </div>
        <div className='absolute lg:hidden' hidden={!showNav}>
            <div className="w-screen">
                <Sidebar aria-label="Default sidebar example" className='w-full'>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup className='text-center'>
                            <Sidebar.Item
                                href="#"
                            >
                                Dashboard

                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                About
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Price
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Contact
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    </div>
}