'use client';

import {FC} from "react";
import {Navbar} from "flowbite-react";
import AppLogo from '../assets/logo.svg'

const NavBar: FC = () => {
    return (
        <Navbar
            fluid
            rounded
            className="border-solid border-[rgba(204,_207,_206,_0.24)] bg-white flex flex-row gap-2 w-full h-24 items-center px-64 border"
        >
            <img
                alt="logo"
                className="mr-16 h-6 sm:h-9"
                src={AppLogo}
            />
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="/hello">
                    <div className="flex flex-row justify-center gap-2 w-full h-8 items-center rounded-[1000px]">
                        <img
                            src="https://file.rendit.io/n/1uRdgdlIBRKTNsndf9yH.svg"
                            className="w-5 shrink-0"
                            id="Vuesaxlinearhome"
                            alt=''
                        />
                        <div
                            className="text-sm font-['Matter'] font-medium tracking-[-0.28] text-[#808785]"
                            id="Logo"
                        >
                            Dashboard
                        </div>
                    </div>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <div className="flex flex-row justify-center gap-2 w-full h-8 items-center rounded-[1000px]">
                        <img
                            src="https://file.rendit.io/n/Z9gw79JnDcoADE8vA0Zq.svg"
                            className="w-5 shrink-0"
                            id="Vuesaxlinearcalendar"
                        />
                        <div
                            className="text-sm font-['Matter'] font-medium tracking-[-0.28] text-[#808785]"
                            id="Logo"
                        >
                            Bookings
                        </div>
                    </div>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <div
                        className="bg-[#f3f4f6] flex flex-row justify-center mr-4 gap-2 h-8 items-center p-3 rounded-[1000px]"
                        id="Tabs2"
                    >
                        <img
                            src="https://file.rendit.io/n/KidqWxkPfbNyi15J5g1L.svg"
                            className="w-5 shrink-0"
                            id="User"
                        />
                        <div
                            className="text-sm font-['Matter'] font-medium tracking-[-0.28] text-[#808785]"
                            id="Logo"
                        >
                            Customers
                        </div>
                    </div>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <div className="flex flex-row justify-center gap-2 w-full h-8 items-center rounded-[1000px]">
                        <img
                            src="https://file.rendit.io/n/4iEJ2rw23gkakb9pFDNc.svg"
                            className="w-5 shrink-0"
                            id="Vuesaxlinearcategory"
                        />
                        <div
                            className="text-sm font-['Matter'] font-medium tracking-[-0.28] text-[#808785]"
                            id="Logo"
                        >
                            Services
                        </div>
                    </div>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <div
                        className="border-solid border-[#e5e5e4] overflow-hidden flex flex-row justify-center gap-4 w-full h-10 items-center border rounded pb-3 pl-3 pr-3">
                        <div className="flex flex-col gap-2 w-full h-6 items-start">
                            <p className="text-sm font-['Matter'] font-medium text-[#404040]">
                                Buukmenow Demo
                            </p>
                            <p className="text-xs font-['Matter'] font-medium text-[#a6a6a5]">
                                Buukmenow@gmail.com
                            </p>
                        </div>
                        <img
                            src="https://file.rendit.io/n/oDW2aJ93PrLsZmt2Zvnx.svg"
                            className="w-4 shrink-0"
                            id="Chevrondown"
                        />
                    </div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;