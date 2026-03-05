import { WhatsappLogo, Heart, ShieldCheck, Users } from '@phosphor-icons/react/dist/ssr'
import idososImage from '../../../public/idosos.png'
import logoImage from '../../../public/logo villa branca.png'
import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-[#E2725B] text-white relative overflow-hidden">

            <div>
                <Image
                    src={idososImage}
                    alt='Casal de idosos felizes'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='space-y-6'>

                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full w-fit">
                            <ShieldCheck className='w-4 h-4' weight="fill" />
                            Cuidado especializado para a melhor idade
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Sua família merece o melhor cuidado na melhor fase da vida.
                        </h1>

                        <p className="lg:text-lg text-white/90">
                            Oferecemos serviços especializados em saúde e bem-estar para idosos,
                            com equipe dedicada a proporcionar qualidade de vida, segurança e muito carinho.
                        </p>

                        <a
                            href="https://wa.me/55SEUNUMERO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 transition-colors px-5 py-3 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogo className='w-5 h-5' weight="fill" />
                            Fale conosco pelo WhatsApp
                        </a>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-sm text-white/90">
                                <Heart className='w-4 h-4 text-white' weight="fill" />
                                Atendimento humanizado
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/90">
                                <Users className='w-4 h-4 text-white' weight="fill" />
                                Equipe multidisciplinar
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{' '}
                                de desconto na primeira consulta.
                            </p>

                            <div className='flex mt-4'>
                                <div className='w-64 hidden lg:block'>
                                    <Image
                                        src={logoImage}
                                        alt='Logo Vila da Maturidade'
                                        quality={100}
                                        className='object-fill'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={idososImage}
                            alt="Casal de idosos felizes e saudáveis"
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vw, 50vw'
                            quality={100}
                            priority
                        />
                    </div>

                </article>

            </div>

        </section>
    )
}