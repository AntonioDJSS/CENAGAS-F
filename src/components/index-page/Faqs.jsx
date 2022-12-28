const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function Faqs() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex justify-center items-center ">
        <h1 className="pt-8 text-xl">Preguntas y respuestas frequentes</h1>
      </div>
      <div className="mt-6 border border-white"></div>
      <div className="mx-auto px-12 pt-12 pb-5">
        <dl className="space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-normal font-medium leading-6 text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
