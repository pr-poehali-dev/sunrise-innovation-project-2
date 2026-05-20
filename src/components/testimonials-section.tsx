import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Член клуба с 2020 года",
    initials: "АГ",
    content:
      "Арийское Братство — это не просто клуб, это семья. Здесь я нашёл друзей на всю жизнь и ощутил настоящий дух АРИЯ живьём.",
  },
  {
    name: "Наталья Воронова",
    role: "Член клуба с 2021 года",
    initials: "НВ",
    content:
      "Благодаря клубу побывала на backstage у АРИЯ и пообщалась с музыкантами лично. Такие моменты не забываются никогда!",
  },
  {
    name: "Дмитрий Захаров",
    role: "Член клуба с 2022 года",
    initials: "ДЗ",
    content:
      "Уникальное сообщество преданных фанатов. Совместные поездки на концерты, общение и атмосфера братства — это то, чего не найдёшь нигде больше.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="members" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Голоса братства</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Что говорят члены Арийского Братства о жизни в клубе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black border border-red-500/20 hover:border-red-500/40 transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed italic font-space-mono">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-orbitron text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-red-400 font-orbitron text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 font-space-mono">{testimonial.role}</p>
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