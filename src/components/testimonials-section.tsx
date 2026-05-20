import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Член клуба с 2003 года",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Арийское Братство — это не просто клуб, это семья. Здесь я нашёл друзей на всю жизнь и ощутил настоящий дух АРИЯ живьём.",
  },
  {
    name: "Наталья Воронова",
    role: "Член клуба с 2007 года",
    avatar: "/professional-woman-scientist.png",
    content:
      "Благодаря клубу побывала на backstage у АРИЯ и пообщалась с музыкантами лично. Такие моменты не забываются никогда!",
  },
  {
    name: "Дмитрий Захаров",
    role: "Член клуба с 2010 года",
    avatar: "/placeholder-user.jpg",
    content:
      "Уникальное сообщество преданных фанатов. Совместные поездки на концерты, общение и атмосфера братства — это то, чего не найдёшь нигде больше.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="members" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Голоса братства</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят члены Арийского Братства о жизни в клубе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}