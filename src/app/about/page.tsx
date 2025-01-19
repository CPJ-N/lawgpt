import Image from 'next/image';

const values = [
  {
    title: "Delight",
    description: "At the centre of everything we do, we believe in creating delight for our customers, our partners, our vendors and for our employees. Work is more purpose-driven and fulfilling when creating delight is at the centre of our focus.",
    icon: "✨"
  },
  {
    title: "Empathy",
    description: "Work is not transactions done by faceless people. It is an organic process - a group of people, referred to as a 'company', who get together with a shared purpose to move forward. They get sad, happy, distressed, overjoyed; but always unmistakably human. And humans connect.",
    icon: "❤️"
  },
  {
    title: "Innovation",
    description: "The 'Why' always precedes the 'How'. As hard as it may be to articulate the why, we strive hard to ask ourselves why do we do the things we do, so we do it better. This discipline allows us to continuously innovate as we improve our understanding of the world each day, and everything in it.",
    icon: "💡"
  },
  {
    title: "Frugality",
    description: "We call ourselves a bunch of rebels and counterculturists; in a world fuelled by seemingly infinite VC money, we bootstrapped the company with customer revenue. We doubled down to focus on unit economics, customer satisfaction, product supremacy, employee happiness, efficient usage of available resources and taking a long term view. Value is created by compounding returns, which occurs over long term.",
    icon: "🎯"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-brand-white min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-skyblue text-brand-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <div className="max-w-3xl flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-6 text-center">
              We enable legal teams to thrive in this digital world
            </h1>
            <p className="text-xl text-brand-white/90 text-center">
              Founded by lawyers and software engineers, Provakil is a first-principles approach on how legal ops should be done
              in the modern world; increasingly so, as more and more businesses take to doing things the right way.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-darkblue text-4xl font-bold mb-6">Our Purpose</h2>
            <p className="text-3xl text-brand-blue/90 max-w-2xl mx-auto">
              Make businesses more efficient, compliant and reduce their risk exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-brand-white to-brand-skyblue/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-darkblue text-center mb-16">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-brand-darkblue mb-4">{value.title}</h3>
                <p className="text-brand-blue/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-darkblue rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-brand-white mb-6">
              Ready to transform your legal operations?
            </h2>
            <button className="bg-brand-skyblue text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-brand-mediumblue transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
