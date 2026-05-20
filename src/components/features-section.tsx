import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const sections = [
  {
    id: "sostav",
    icon: "Users",
    badge: "Состав",
    title: "Состав клуба",
    description:
      "Познакомьтесь с активными членами Арийского Братства. Более 500 преданных фанатов АРИЯ из Москвы и других городов России — все объединены одной музыкой.",
    stats: [{ label: "Активных членов", value: "500+" }, { label: "Городов", value: "12" }],
    link: "Смотреть состав",
  },
  {
    id: "merch",
    icon: "ShoppingBag",
    badge: "Мерч",
    title: "Мерч и атрибутика",
    description:
      "Эксклюзивная фирменная атрибутика Арийского Братства: футболки, худи, значки, нашивки и коллекционные предметы. Только для членов клуба.",
    stats: [{ label: "Позиций в каталоге", value: "40+" }, { label: "Эксклюзивных", value: "100%" }],
    link: "Перейти в магазин",
  },
  {
    id: "archive",
    icon: "Archive",
    badge: "Архив",
    title: "Фото и видеоархив",
    description:
      "Уникальная коллекция редких фотографий, видеозаписей и артефактов группы АРИЯ за 6+ лет работы клуба. Backstage, репетиции, концерты.",
    stats: [{ label: "Фотографий", value: "2000+" }, { label: "Видеозаписей", value: "300+" }],
    link: "Открыть архив",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Арийское Братство</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-space-mono">
            6 лет мы объединяем поклонников АРИЯ — тех, для кого это не просто музыка, а образ жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-black border border-red-500/20 rounded-2xl p-8 flex flex-col gap-6 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <Icon name={section.icon as "Users" | "ShoppingBag" | "Archive"} size={24} className="text-red-500" />
                </div>
                <span className="text-xs font-space-mono text-red-400 border border-red-500/30 px-3 py-1 rounded-full">
                  {section.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-3">{section.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-space-mono">{section.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {section.stats.map((stat, i) => (
                  <div key={i} className="bg-zinc-900 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-red-500 font-orbitron">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-space-mono mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron border-0 mt-auto"
                size="lg"
              >
                {section.link}
              </Button>
            </div>
          ))}
        </div>

        {/* Нижняя строка — CTA вступление */}
        <div className="mt-12 bg-black border border-red-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-orbitron mb-2">Стань частью братства</h3>
            <p className="text-gray-400 font-space-mono text-sm">Официальный московский фан-клуб группы АРИЯ. Открытый приём новых членов.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Button className="bg-red-500 hover:bg-red-600 text-white font-orbitron border-0" size="lg">
              Вступить в клуб
            </Button>
            <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10 font-orbitron bg-transparent" size="lg">
              О нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
