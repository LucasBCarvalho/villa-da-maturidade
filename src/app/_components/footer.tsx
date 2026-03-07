import Image from 'next/image'
import logoImage from '../../../public/logo villa branca.png'
import { FacebookLogo, InstagramLogo, YoutubeLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { MapPin, Phone, Mail } from 'lucide-react'

const partners = [
  { name: "Unimed" },
  { name: "Bradesco Saúde" },
  { name: "SulAmérica" },
  { name: "Amil" },
  { name: "Hapvida" },
  { name: "NotreDame" },
]

export function Footer() {
  return (
    <footer>

      <div className="bg-[#f5ede4]">
        <div className="container mx-auto px-4 py-12">
          <h4 className="text-2xl font-bold text-center text-[#7c3a2a] mb-8">
            Parceiros e Convênios
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e8d0c0] rounded-xl px-4 py-5 flex items-center justify-center"
              >
                <span className="text-sm font-semibold text-[#7c3a2a] text-center leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#b07050] mt-4">
            Consulte-nos sobre outros convênios aceitos.
          </p>
        </div>
      </div>

      <div className="bg-[#6b2d1e]">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-[#f5ede4]">
            Pronto para cuidar de quem você ama? Entre em contato agora.
          </p>
          <a
            href="https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-5 py-2 rounded-md font-semibold text-sm text-white whitespace-nowrap"
          >
            <WhatsappLogo className="w-5 h-5" weight="fill" />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="bg-[#7c3a2a]">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="space-y-4">
              <div className="w-48">
                <Image
                  src={logoImage}
                  alt="Logo Vila da Maturidade"
                  quality={100}
                  className="object-contain"
                />
              </div>
              <p className="leading-relaxed text-sm text-[#f5ede4]/80">
                Cuidando de quem você ama com dedicação, respeito e muito carinho. Sua família pode confiar em nós.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#f5ede4]">Contato</h3>
              <ul className="space-y-3 text-sm text-[#f5ede4]/80">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#f5c4b0]" />
                  contato@viladamaturidade.com.br
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#f5c4b0]" />
                  (67) 9999-8800
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#f5c4b0]" />
                  <span>Rua das Acácias, 123 — Centro<br />Campo Grande | MS</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#f5ede4]">Redes Sociais</h3>
              <p className="text-sm text-[#f5ede4]/80">
                Siga-nos e fique por dentro das novidades e atividades da clínica.
              </p>
              <div className="flex gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#f5ede4]/15 hover:bg-[#f5ede4]/30 text-[#f5ede4] transition-colors"
                >
                  <FacebookLogo className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#f5ede4]/15 hover:bg-[#f5ede4]/30 text-[#f5ede4] transition-colors"
                >
                  <InstagramLogo className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#f5ede4]/15 hover:bg-[#f5ede4]/30 text-[#f5ede4] transition-colors"
                >
                  <YoutubeLogo className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-[#f5ede4]/15">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#f5ede4]/50">
            <p>© {new Date().getFullYear()} Vila da Maturidade. Todos os direitos reservados.</p>
            <p>Cuidado especializado para a melhor idade.</p>
          </div>
        </div>
      </div>

    </footer>
  )
}