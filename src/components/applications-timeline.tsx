import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Основание клуба",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Арийское Братство основано в начале 2000-х годов преданными поклонниками группы АРИЯ в Москве.
            С первых дней клуб стал местом притяжения для всех, кто живёт тяжёлой музыкой и духом братства.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Официальное признание от группы АРИЯ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Первые встречи и фанатские акции в Москве
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Формирование костяка сообщества
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Рост и развитие",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            На протяжении многих лет клуб рос вместе с группой АРИЯ. Организовывались совместные поездки на
            концерты, встречи с музыкантами, тематические вечеринки и памятные события.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сотни совместных поездок на концерты по всей России
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Backstage-встречи и автограф-сессии с музыкантами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ежегодные фестивали для членов клуба
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сегодня",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Сегодня Арийское Братство — это живое и активное сообщество сотен преданных фанатов.
            Мы продолжаем нести дух АРИЯ и открыты для всех новых братьев и сестёр по музыке.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Активное онлайн-сообщество и живые встречи
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Уникальный архив фото и видео группы АРИЯ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Открытый приём новых членов клуба
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="history" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">История клуба</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Более двух десятилетий преданности, братства и любви к музыке группы АРИЯ.
            Узнайте, как мы прошли путь от небольшой группы фанатов до официального клуба.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}