"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { PersonStanding, HeartHandshake, Stethoscope, Activity, Brain, Salad, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { WhatsappLogo, WhatsappLogoIcon } from '@phosphor-icons/react'

const services = [
  {
    title: "Idoso Independente",
    description: "Destinado a idosos que realizam suas atividades diárias com autonomia. Oferecemos acomodação confortável, alimentação balanceada, atividades recreativas e sociais, com acompanhamento médico periódico para garantir saúde e bem-estar.",
    duration: "Residencial",
    price: "Sob consulta",
    icon: <PersonStanding />,
    linkText: 'Olá, vi no site sobre a categoria Idoso Independente e gostaria de mais informações.'
  },
  {
    title: "Idoso Semi-dependente",
    description: "Para idosos que necessitam de apoio parcial nas atividades do dia a dia. Contamos com equipe treinada para auxiliar em higiene, mobilidade e medicação, mantendo ao máximo a autonomia e qualidade de vida do residente.",
    duration: "Residencial",
    price: "Sob consulta",
    icon: <HeartHandshake />,
    linkText: 'Olá, vi no site sobre a categoria Idoso Semi-dependente e gostaria de mais informações.'
  },
  {
    title: "Idoso Dependente",
    description: "Atendimento especializado para idosos que necessitam de cuidados contínuos. Nossa equipe multidisciplinar oferece suporte completo 24h, incluindo enfermagem, fisioterapia, acompanhamento médico e cuidados paliativos com dignidade e respeito.",
    duration: "Residencial",
    price: "Sob consulta",
    icon: <Stethoscope />,
    linkText: 'Olá, vi no site sobre a categoria Idoso Dependente e gostaria de mais informações.'
  },
  {
    title: "Fisioterapia",
    description: "Sessões de fisioterapia individualizadas focadas na reabilitação, prevenção de quedas e manutenção da mobilidade dos residentes. Nossa equipe trabalha para preservar a independência motora e melhorar a qualidade de vida no dia a dia.",
    duration: "45min",
    price: "Sob consulta",
    icon: <Activity />,
    linkText: 'Olá, vi no site sobre Fisioterapia e gostaria de mais informações.'
  },
  {
    title: "Psicologia",
    description: "Acompanhamento psicológico regular para apoio emocional, prevenção de depressão e ansiedade, adaptação à vida residencial e fortalecimento de vínculos familiares. Atendimento individual e em grupo para promover saúde mental e bem-estar.",
    duration: "50min",
    price: "Sob consulta",
    icon: <Brain />,
    linkText: 'Olá, vi no site sobre Psicologia e gostaria de mais informações.'
  },
  {
    title: "Nutricionista",
    description: "Acompanhamento nutricional personalizado para cada residente, considerando restrições alimentares, condições de saúde e preferências individuais. Cardápios balanceados e adaptados para garantir nutrição adequada e qualidade de vida.",
    duration: "30min",
    price: "Sob consulta",
    icon: <Salad />,
    linkText: 'Olá, vi no site sobre Nutricionista e gostaria de mais informações.'
  },
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section id="servicos" className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">Nossos Serviços</h2>

                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4'/>
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                target='_blank'
                                                href={`https://wa.me/71987552007?text=Olá vim pelo site e gostaria de mais informações sobre o serviço de ${item.title}`}
                                                className="flex items-center justify-center gap-2 hover:bg-[#E84C3D] px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogoIcon className='w-5 h-5'/>
                                                Entrar em contato
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                    >
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>
                </div>
            </div>
        </section>
    )
}