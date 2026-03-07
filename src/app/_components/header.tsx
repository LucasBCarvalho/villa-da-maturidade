'use client'

import { useState } from 'react'
import { WhatsappLogo, List, X, Phone } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import logoImage from '../../../public/logo villa branca.png'

const navLinks: { label: string; href: string }[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-[#E2725B] shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Logo branca à esquerda */}
                    <a
                        href="#inicio"
                        onClick={(e) => handleNavClick(e, '#inicio')}
                        className="flex items-center shrink-0"
                    >
                        <div className="w-44">
                            <Image
                                src={logoImage}
                                alt="Vila da Maturidade"
                                quality={100}
                                className="object-contain"
                            />
                        </div>
                    </a>

                    {/* Nav + CTAs alinhados à direita — desktop */}
                    <div className="hidden lg:flex items-center gap-8">

                        <nav className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                            <a
                                href="tel:+5511999999999"
                                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4" weight="fill" />
                                (11) 99999-9999
                            </a>
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 active:bg-green-700 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm"
                            >
                                <WhatsappLogo className="w-4 h-4" weight="fill" />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Botão menu mobile */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        {menuOpen
                            ? <X className="w-6 h-6" weight="bold" />
                            : <List className="w-6 h-6" weight="bold" />
                        }
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            <div
                className={`lg:hidden bg-[#d4644d] overflow-hidden transition-all duration-300 ${
                    menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-white/90 hover:text-white hover:bg-white/10 font-medium text-sm px-4 py-3 rounded-lg transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="border-t border-white/20 mt-2 pt-3 flex flex-col gap-2">
                        <a
                            href="tel:+5511999999999"
                            className="flex items-center gap-2 text-white/80 text-sm px-4 py-2"
                        >
                            <Phone className="w-4 h-4" weight="fill" />
                            (11) 99999-9999
                        </a>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <WhatsappLogo className="w-4 h-4" weight="fill" />
                            Fale pelo WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}