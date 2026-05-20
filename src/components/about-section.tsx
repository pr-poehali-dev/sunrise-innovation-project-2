export function AboutSection() {
  const stats = [
    { value: "6+", label: "Лет истории" },
    { value: "500+", label: "Членов клуба" },
    { value: "300+", label: "Концертов вместе" },
    { value: "1", label: "Официальный клуб" },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron leading-tight">
              Официальный фан-клуб <span className="text-red-500">АРИЯ</span> в Москве
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Арийское Братство — это больше, чем фан-клуб. Это живое сообщество людей, объединённых любовью
              к группе АРИЯ и тяжёлой музыке. Мы официально признаны группой и активно взаимодействуем
              с музыкантами.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Здесь вы найдёте единомышленников, узнаете последние новости об АРИЯ раньше других,
              получите доступ к эксклюзивным мероприятиям и редким материалам из нашего архива.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-sm font-space-mono">
                Официальный статус
              </span>
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-sm font-space-mono">
                Москва
              </span>
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-sm font-space-mono">
                С 2000-х годов
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-red-500/20 rounded-2xl p-8 text-center hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="text-5xl font-bold text-red-500 font-orbitron mb-2">{stat.value}</div>
                <div className="text-gray-400 font-space-mono text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}