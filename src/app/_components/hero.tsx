import { WhatsappLogo, Heart, ShieldCheck, Users } from '@phosphor-icons/react/dist/ssr'
import idososImage from '../../../public/idosos.png'
import Image from 'next/image'

export function Hero() {
    return (
        <section id="inicio" className="bg-[#E2725B] text-white relative overflow-hidden">

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

            <div className='container mx-auto pt-7 pb-10 lg:pt-0 lg:pb-0 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>

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
                            href="https://wa.me/5511999999999"
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

                    </div>

                    <div className='hidden lg:block h-140 relative'>
                        <Image
                            src={idososImage}
                            alt="Casal de idosos felizes e saudáveis"
                            className='object-contain object-bottom'
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