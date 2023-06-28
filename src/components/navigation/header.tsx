import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiSettings, FiMenu, FiX } from 'react-icons/fi'
import { MdOutlineLightMode } from 'react-icons/md'
import { BsTranslate } from 'react-icons/bs'

export const Header = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false)

  return (
    <header className="fixed z-10 h-20 w-full bg-purple-500 top-0">
      <div className="flex justify-between items-center max-w-container mx-auto w-full h-full px-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="K" width="48" height="48" />
        </Link>
        <button
          onClick={() => setMenuIsOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <FiX size="34" /> : <FiMenu size="34" />}
        </button>

        <nav
          className={`flex justify-center bg-purple-500 absolute top-20 transition-all duration-500 h-screen w-full  md:static md:h-full md:justify-end md:items-center ${
            isMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col gap-14 text-xl font-medium items-center pt-10 md:flex-row  md:justify-end md:pt-0 md:text-lg md:leading-none">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>WORK</li>
            <li>CONTACT</li>
            <li className="hidden md:block">
              <button>
                <FiSettings size="24" />
              </button>
            </li>
            <li className="block md:hidden">
              <div className="flex gap-10">
                <button>
                  <MdOutlineLightMode size="32" />
                </button>
                <button>
                  <BsTranslate size="32" />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
