import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='bg-sky-950 text-white'>
            <div className='flex justify-end lg:gap-x-8 gap-x-3 py-2 px-3 lg:px-[6rem]  lg:text-sm text-xs items-center'>
                <div className='capitalize font-thin text-xs'>En English</div>
                <div className='uppercase text-sm font-medium'>sign in</div>
                <div className='uppercase pr-0 font-medium' text-sm> my account</div>
            </div>
            <nav className=' mx-auto flex items-center justify-between lg:gap-x-8 gap-x-3 pt-2 pb-3 px-3 lg:px-[6rem] lg:text-md text-xs'>
                <div className="flex items-center">
                    <a href="#" className="">
                        <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                    <div className='capitalize font-bold text-lg md:text-base ml-2'>splash screen</div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-8 ml-12">
                        <Popover className="relative pt-[2px]">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
                                Product
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <a href="#" className="text-sm font-semibold leading-6 text-white pt-[2px]">
                            Features
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white pt-[2px]">
                            Marketplace
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white pt-[2px]">
                            Company
                        </a>
                    </Popover.Group>
                </div>
                <div className="flex hidden lg:block relative pb-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full border-0 py-1.5 pl-10 pr-20 outline-none bg-sky-900/25 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Search"
                    />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Product
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...products].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Company
                                    </a>
                                    <div className="relative py-6">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="block w-full border-0 py-1.5 pl-10 pr-20 outline-none bg-sky-900/25 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>



            </nav>
        </header>
    )
}

