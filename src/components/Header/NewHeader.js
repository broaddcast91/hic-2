import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { MdBed } from 'react-icons/md';
// import { IoBedSharp } from 'react-icons/io5';
import { MdOutlineBed, MdPrivacyTip, MdEmail } from 'react-icons/md';
import { IoBedOutline } from 'react-icons/io5';
import { LuPartyPopper } from 'react-icons/lu';
import { BiSolidDoorOpen } from 'react-icons/bi';

const products = [
  {
    name: 'Standard Room',
    description:
      'Comfortable accommodations with essential amenities for a pleasant stay',
    href: '/standardroom',
    icon: MdOutlineBed,
  },
  {
    name: 'Executive Room',
    description:
      'Elevate your stay with luxurious amenities and personalized service',
    href: '/executiveroom',
    icon: IoBedOutline,
  },
  {
    name: 'Deluxe Room',
    description:
      'Experience indulgence and sophistication in every detail for a memorable stay',
    href: '/deluxeroom',
    icon: MdBed,
  },
  {
    name: 'Suite',
    description:
      'Where luxury meets comfort, creating an unforgettable retreat.',
    href: '/suite',
    icon: LuPartyPopper,
  },
  // {
  //   name: 'Banquet Hall',
  //   description:
  //     'The perfect venue for celebrations, meetings, and events, offering elegance and versatility',
  //   href: '/rooms',
  //   icon: IoBedSharp,
  // },

  {
    name: 'Refund Policy',
    description: 'Ensuring your peace of mind with hassle-free refunds.',
    href: '/privacypolicy',
    icon: MdPrivacyTip,
  },
];
const callsToAction = [
  { name: 'All Rooms', href: '/newrooms', icon: BiSolidDoorOpen },
  { name: 'Contact Us', href: '/contact', icon: MdEmail },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NewHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white header '>
      <nav
        className='mx-auto flex max-w-7xl items-center  justify-between p-6 lg:px-8 '
        aria-label='Global'
      >
        <div className='flex lg:flex-1 '>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-10 w-auto sm:h-16'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/logos/new-hic-logo-2024-webp.webp'
              alt=''
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12 '>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1  font-semibold leading-6 text-gray-900'>
              Rooms
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-2'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4  leading-6 hover:bg-orange-100'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-orange-00'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-orange-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <Link
                          to={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </Link>
                        <p className='mt-1 text-sm text-gray-600'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to='/iceandspice'
            className=' font-semibold leading-6 text-gray-900 text-md'
          >
            Ice n' Spice
          </Link>
          <Link
            to='/banquethall'
            className='text-md font-semibold leading-6 text-gray-900'
          >
            Banquet
          </Link>
          <Link
            to='/gallery'
            className='text-md font-semibold leading-6 text-gray-900'
          >
            Gallery
          </Link>
          <Link
            to='/contact'
            className='text-md font-semibold leading-6 text-gray-900'
          >
            Contact
          </Link>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            to='/enroll'
            class='uppercase inline-flex items-center justify-center w-full px-10 py-3 text-base leading-0 text-white bg-gradient-to-br bg-[#F86F03] border border-transparent rounded-full md:w-auto hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-lg font-bold'
          >
            Book
          </Link>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link to='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Rooms
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to='/#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Ice and Spice
                </Link>
                <Link
                  to='/#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Gallery
                </Link>
                <a
                  href='/#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Contact
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='/#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Book a Room
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
