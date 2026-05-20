import { Mail } from "lucide-react"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/2f381a23-752b-49de-bcf8-06146323613f/bucket/0bd4e905-622b-4721-8a9b-6f36e207bf5f.jpg"
                alt="Арийское Братство"
                className="h-16 w-16 rounded-full object-cover border-2 border-red-500/40"
              />
              <h2 className="font-orbitron text-2xl font-bold text-white">
                АРИЙСКОЕ<span className="text-red-500"> БРАТСТВО</span>
              </h2>
            </div>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Официальный московский фан-клуб группы АРИЯ. Более 20 лет преданности, братства и тяжёлой музыки.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Music" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Club */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Клуб</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  О клубе
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  История
                </a>
              </li>
              <li>
                <a
                  href="#members"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Участники
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Написать нам
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вступить в клуб
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 Арийское Братство. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}