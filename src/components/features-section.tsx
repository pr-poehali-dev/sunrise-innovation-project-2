import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Официальный статус",
    description: "Арийское Братство — официальный фан-клуб группы АРИЯ в Москве, признанный самой группой.",
    icon: "brain",
    badge: "Официальный",
  },
  {
    title: "Эксклюзивные встречи",
    description: "Закрытые встречи с музыкантами, автограф-сессии и backstage-доступ для членов клуба.",
    icon: "lock",
    badge: "VIP",
  },
  {
    title: "Фото и видеоархив",
    description: "Уникальный архив редких фотографий и видеозаписей группы АРИЯ, собранный за десятилетия.",
    icon: "globe",
    badge: "Архив",
  },
  {
    title: "Концерты и события",
    description: "Совместные поездки на концерты, организация фанатских зон и координация поклонников.",
    icon: "zap",
    badge: "События",
  },
  {
    title: "Сообщество фанатов",
    description: "Живое сообщество преданных поклонников АРИЯ — общение, дружба и единый дух братства.",
    icon: "link",
    badge: "Сообщество",
  },
  {
    title: "Мерч и коллекционка",
    description: "Эксклюзивный мерч клуба, коллекционные предметы и фирменная атрибутика для членов клуба.",
    icon: "target",
    badge: "Мерч",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему Арийское Братство?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 20 лет мы объединяем поклонников АРИЯ — тех, для кого это не просто музыка, а образ жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}