import AppLogo from '../assets/logo.svg'

const Home: React.FC = () => {
    return (
        <div className="relative bg-whitesmoke-100 box-border w-full h-[1002px] overflow-hidden text-left text-sm text-primary-colour-3 font-matter border-[1px] border-solid
border-stroke">
            <div className="absolute top-[calc(50%_-_502px)] bg-white box-border w-full flex flex-row py-6 px-[250px] items-center justify-between
border-[1px] border-solid border-stroke">
                <img
                    className="relative w-[125.32px] h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src={AppLogo}
                />
                <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="rounded-981xl flex flex-row py-2 px-3 items-center justify-start gap-[8px]">
                        <img
                            className="relative w-5 h-5 object-cover"
                            alt=""
                            src="/undefined1.png"
                        />
                        <div className="relative tracking-[-0.02em] font-medium">
                            Dashboard
                        </div>
                    </div>
                    <div className="rounded-981xl flex flex-row py-2 px-3 items-center justify-start gap-[8px]">
                        <img
                            className="relative w-5 h-5 object-cover"
                            alt=""
                            src="/undefined2.png"
                        />
                        <div className="relative tracking-[-0.02em] font-medium">
                            Bookings
                        </div>
                    </div>
                    <div
                        className="rounded-981xl bg-whitesmoke-100 flex flex-row py-2 px-3 items-center justify-start gap-[8px] text-primary-colour-6">
                        <img
                            className="relative w-5 h-5 object-cover"
                            alt=""
                            src="/undefined3.png"
                        />
                        <div className="relative tracking-[-0.02em] font-medium">
                            Customers
                        </div>
                    </div>
                    <div className="rounded-981xl flex flex-row py-2 px-3 items-center justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start">
                            <img
                                className="relative w-5 h-5 object-cover"
                                alt=""
                                src="/undefined4.png"
                            />
                        </div>
                        <div className="relative tracking-[-0.02em] font-medium">
                            Services
                        </div>
                    </div>
                    <div className="rounded-981xl hidden flex-row py-2 px-3 items-center justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-row items-center justify-start">
                                <img
                                    className="relative w-5 h-5 object-cover"
                                    alt=""
                                    src="/undefined5.png"
                                />
                            </div>
                        </div>
                        <div className="relative tracking-[-0.02em] font-medium">Staff</div>
                    </div>
                </div>
                <div className="rounded box-border w-52 overflow-hidden shrink-0 flex flex-row py-2 px-4 items-center justify-center gap-[16px] text-darkslategray-100 border-[1px]
border-solid border-gainsboro-100">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="relative font-medium">Buukmenow Demo</div>
                        <div className="relative text-xs font-medium text-darkgray">
                            Buukmenow@gmail.com
                        </div>
                    </div>
                    <img
                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/undefined6.png"
                    />
                </div>
            </div>
            <div
                className="absolute top-[122px] left-[calc(50%_-_470px)] w-[939px] flex flex-row items-end justify-start text-[20px] text-primary-colour-6">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="relative tracking-[-0.02em] font-medium inline-block w-[110px]">
                        Customers
                    </div>
                    <div
                        className="relative text-sm tracking-[-0.02em] text-primary-colour-3">{`See all your customers in one place `}</div>
                </div>
            </div>
            <div
                className="absolute top-[202px] left-[251px] box-border w-[939px] flex flex-row items-start justify-start gap-[12px] border-b-[1.5px] border-solid border-stroke">
                <div className="flex flex-row pt-0 px-3 pb-5 items-end justify-start">
                    <div className="relative tracking-[-0.02em]">Customer Log</div>
                </div>
                <div
                    className="flex flex-row pt-0 px-3 pb-5 items-end justify-start text-primary-colour-6 border-b-[1.5px] border-solid border-primary-colour-6">
                    <div className="relative tracking-[-0.02em] font-medium">
                        Campaigns
                    </div>
                </div>
                <div className="hidden flex-row pt-0 px-3 pb-5 items-end justify-start">
                    <div className="relative tracking-[-0.02em]">Advailability</div>
                </div>
                <div className="hidden flex-row pt-0 px-3 pb-5 items-end justify-start">
                    <div className="relative tracking-[-0.02em]">Payment</div>
                </div>
                <div className="hidden flex-row pt-0 px-3 pb-5 items-end justify-start">
                    <div className="relative tracking-[-0.02em]">Socials</div>
                </div>
                <div className="hidden flex-row pt-0 px-3 pb-5 items-end justify-start">
                    <div className="relative tracking-[-0.02em]">Settings</div>
                </div>
                <div className="hidden flex-row pt-0 px-3 pb-5 items-end justify-start">
                    <div className="relative tracking-[-0.02em]">Password</div>
                </div>
            </div>
            <div
                className="absolute top-[328px] left-[250px] flex flex-col items-end justify-start text-smi text-primary-colour-4">
                <div className="self-stretch flex flex-row items-start justify-start text-primary-colour-6">
                    <div className="rounded-tl-lg rounded-tr-none rounded-b-none bg-whitesmoke-200 box-border w-[195px] flex flex-row py-4 px-6 items-center justify-start gap-[16px]
border-t-[2px] border-solid border-whitesmoke-300 border-b-[2px] border-l-[2px]">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined7.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[16px] font-medium">
                                Campaign Title
                            </div>
                            <img
                                className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/undefined8.png"
                            />
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-whitesmoke-200 flex flex-row py-4 px-6 items-center justify-start gap-[16px] border-t-[2px] border-solid border-whitesmoke-300 border-b-[2px]">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined9.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[16px] font-medium">
                                Description
                            </div>
                            <img
                                className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/undefined10.png"
                            />
                        </div>
                    </div>
                    <div className="bg-whitesmoke-200 box-border w-[145px] flex flex-row py-4 px-6 items-center justify-start gap-[16px] border-t-[2px] border-solid border-whitesmoke-300
border-b-[2px]">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined11.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[16px] font-medium">
                                Target Group
                            </div>
                            <img
                                className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/undefined12.png"
                            />
                        </div>
                    </div>
                    <div className="rounded-tl-none rounded-tr-lg rounded-b-none bg-whitesmoke-200 box-border w-[152px] flex flex-row py-4 px-6 items-center justify-start gap-[16px]
border-t-[2px] border-solid border-whitesmoke-300 border-r-[2px] border-b-[2px]">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined13.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[16px] font-medium">
                                Campaign Status
                            </div>
                            <img
                                className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                                src="/undefined14.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined15.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined16.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined17.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined18.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined19.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined20.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined21.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined22.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined23.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined24.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined25.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined26.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined27.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined28.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined29.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined30.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined31.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined32.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined33.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined34.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined35.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined36.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined37.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined38.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined39.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined40.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined41.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined42.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined43.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined44.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined45.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined46.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
                <div className="w-[937px] flex flex-row items-start justify-start">
                    <div
                        className="bg-white box-border w-[193px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined47.png"
                        />
                        <div className="relative leading-[15px]">
                            Mobile app coming soon
                        </div>
                    </div>
                    <div
                        className="flex-1 bg-white box-border h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined48.png"
                        />
                        <div className="relative leading-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl
                            dol...
                        </div>
                    </div>
                    <div
                        className="bg-white box-border w-[145px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined49.png"
                        />
                        <div className="relative leading-[15px]">All customers</div>
                    </div>
                    <div
                        className="bg-white box-border w-[150px] h-12 flex flex-row py-2.5 px-6 items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-6">
                        <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/undefined50.png"
                        />
                        <div className="relative leading-[15px]">Active</div>
                    </div>
                </div>
            </div>
            <div
                className="absolute top-[256px] left-[251px] w-[936px] flex flex-row items-start justify-between text-darkslategray-200">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[16px]">
                        <div className="relative tracking-[-0.02em] font-medium hidden">
                            Email
                        </div>
                        <div className="self-stretch rounded-md bg-white box-border h-[51px] flex flex-row p-4 items-center justify-start gap-[10px] text-primary-colour-3 border-[1.5px]
border-solid border-lightgray">
                            <img
                                className="relative w-5 h-5 object-cover"
                                alt=""
                                src="/undefined51.png"
                            />
                            <div
                                className="relative tracking-[-0.02em]">{`Search customer log by customer name, email address & phone number`}</div>
                        </div>
                    </div>
                    <div className="rounded-md bg-white box-border h-12 flex flex-row p-4 items-center justify-center text-darkslategray-300 border-[1px] border-solid
border-darkslategray-300">
                        <div className="relative tracking-[-0.02em] font-medium">
                            Search
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-darkslategray-300 box-border h-12 flex flex-row p-4 items-center justify-center gap-[10px] text-white border-[1px] border-solid
border-darkslategray-300">
                    <img
                        className="relative w-5 h-5 object-cover"
                        alt=""
                        src="/undefined52.png"
                    />
                    <div className="relative tracking-[-0.02em] font-medium">
                        Create a campaign
                    </div>
                </div>
            </div>
            <div
                className="absolute top-[832px] left-[955px] flex flex-row items-start justify-start gap-[8px] text-xs text-darkslategray-300">
                <div className="rounded w-8 h-8 flex flex-row items-center justify-center">
                    <img
                        className="relative w-4 h-4 object-cover"
                        alt=""
                        src="/undefined53.png"
                    />
                </div>
                <div
                    className="rounded-81xl bg-darkslategray-300 w-8 h-8 flex flex-col p-2 box-border items-center justify-center text-white">
                    <div className="relative leading-[15px]">1</div>
                </div>
                <div
                    className="rounded-81xl bg-white w-8 h-8 flex flex-col p-2 box-border items-center justify-center opacity-[0.8]">
                    <div className="relative leading-[15px]">2</div>
                </div>
                <div
                    className="rounded-81xl bg-white w-8 h-8 flex flex-row p-2 box-border items-center justify-center gap-[2px] opacity-[0.8]">
                    <div className="relative rounded-[50%] bg-darkslategray-300 w-0.5 h-0.5"/>
                    <div className="relative rounded-[50%] bg-darkslategray-300 w-0.5 h-0.5"/>
                    <div className="relative rounded-[50%] bg-darkslategray-300 w-0.5 h-0.5"/>
                </div>
                <div className="rounded-81xl bg-white w-8 h-8 flex flex-col p-2 box-border items-center justify-center">
                    <div className="relative leading-[15px]">6</div>
                </div>
                <div
                    className="rounded w-8 h-8 flex flex-row items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                    <img
                        className="relative w-4 h-4 object-cover"
                        alt=""
                        src="/undefined54.png"
                    />
                </div>
            </div>
            <div className="absolute top-[884px] left-[1085px] rounded-[50%] bg-gainsboro-200 w-0.5 h-0.5"/>
        </div>
    )
};

export default Home;