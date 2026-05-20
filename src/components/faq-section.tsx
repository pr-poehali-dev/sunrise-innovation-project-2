import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как стать членом Арийского Братства?",
      answer:
        "Заполните форму заявки на нашем сайте. После рассмотрения заявки с вами свяжется администратор клуба и расскажет о дальнейших шагах. Членство открыто для всех фанатов группы АРИЯ.",
    },
    {
      question: "Есть ли членский взнос?",
      answer:
        "Да, клуб взимает небольшой ежегодный членский взнос, который идёт на организацию мероприятий, поддержку архива и деятельность клуба. Точная сумма указывается при вступлении.",
    },
    {
      question: "Какие привилегии у членов клуба?",
      answer:
        "Члены клуба получают доступ к закрытым встречам с музыкантами, эксклюзивному мерчу, фото и видеоархиву, приоритетным местам на концертах и участию в совместных поездках.",
    },
    {
      question: "Проводит ли клуб офлайн-мероприятия?",
      answer:
        "Да! Мы регулярно организуем встречи фанатов в Москве, совместные поездки на концерты по России, тематические вечеринки и памятные события, связанные с АРИЯ.",
    },
    {
      question: "Есть ли у клуба доступ к редким материалам об АРИЯ?",
      answer:
        "Клуб ведёт уникальный архив фотографий, видеозаписей и артефактов, связанных с группой АРИЯ. Часть материалов доступна только членам клуба.",
    },
    {
      question: "Можно ли вступить из другого города?",
      answer:
        "Конечно! Хотя клуб базируется в Москве, мы принимаем фанатов из любой точки России. Онлайн-участие полностью доступно, а на концерты мы ездим вместе.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о вступлении в Арийское Братство и жизни в нашем клубе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}