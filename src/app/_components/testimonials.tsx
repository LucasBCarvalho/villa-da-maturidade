"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import tutor1 from '../../../public/tutor1.jpg'
import tutor2 from '../../../public/tutor2.jpg'
import tutor3 from '../../../public/tutor3.jpg'
import Image from 'next/image'

const testimonials = [
  {
    content:
      "Minha mãe está morando na clínica há 8 meses e a mudança foi incrível. Ela era semi-dependente e hoje participa de todas as atividades com muito ânimo. A equipe é extremamente atenciosa e sempre nos mantém informados sobre qualquer novidade. Me sinto tranquila sabendo que ela está em boas mãos!",
    author: "Mariana Souza",
    role: "Filha da Dona Maria (Residente Semi-dependente)",
    image: tutor2,
  },
  {
    content:
      "Precisávamos de um lugar seguro e acolhedor para meu pai, que é dependente e precisa de cuidados 24h. A clínica superou todas as nossas expectativas. A equipe de enfermagem é impecável, a fisioterapia tem feito muito bem a ele e o carinho de todos é visível. Recomendo de coração!",
    author: "Rafael Mendes",
    role: "Filho do Seu José (Residente Dependente)",
    image: tutor1,
  },
  {
    content:
      "Minha avó é independente e no início resistiu à ideia de se mudar para a clínica. Hoje ela mesma diz que foi a melhor decisão! Fez novas amizades, participa das atividades recreativas e o acompanhamento da nutricionista melhorou muito a saúde dela. A família toda ficou mais tranquila!",
    author: "Camila Fernandes",
    role: "Neta da Dona Rosa (Residente Independente)",
    image: tutor3,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="py-16" style={{ backgroundColor: '#f5ede4' }}>
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-2" style={{ color: '#7c3a2a' }}>O que as famílias dizem</h2>
        <p className="text-center mb-12" style={{ color: '#b07050' }}>Depoimentos de quem confia no nosso cuidado</p>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="rounded-2xl p-8 space-y-4 h-full flex flex-col" style={{ backgroundColor: '#fff8f3', border: '1px solid #e8d0c0' }}>
                    <div className='flex flex-col items-center text-center space-y-4'>

                      <Quote className='w-8 h-8' style={{ color: '#c0714f' }} />

                      <p className='text-lg leading-relaxed' style={{ color: '#5a3a2a' }}>{item.content}</p>

                      <div className='relative w-20 h-20'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='80px'
                          className='object-cover rounded-full'
                          style={{ outline: '4px solid #e8c4ae' }}
                        />
                      </div>

                      <div>
                        <p className='font-bold' style={{ color: '#7c3a2a' }}>{item.author}</p>
                        <p className='text-sm' style={{ color: '#b07050' }}>{item.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='flex items-center justify-center rounded-full shadow-md w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            style={{ backgroundColor: '#c0714f' }}
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-white' />
          </button>

          <button
            className='flex items-center justify-center rounded-full shadow-md w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            style={{ backgroundColor: '#c0714f' }}
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-white' />
          </button>

        </div>

      </div>
    </section>
  )
}