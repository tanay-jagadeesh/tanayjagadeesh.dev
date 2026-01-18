'use client';

import { BorderTrail } from '@/components/ui/border-trail';

const howItWorksSteps = [
  {
    title: 'Submit Draft',
    subtitle: 'The first step to transforming your content from average to overachieving',
    description: 'Upload your draft and campaign brief. Our AI instantly forecasts performance and assigns a quality score, giving you a clear look into the future before publishing.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    imageAlt: 'Clipboard with resume, pen, and laptop on desk',
  },
  {
    title: 'Validation Engine',
    subtitle: 'Engineer content that lands, resonates, and performs with our proprietary validation series that tests against 10+ performance signals',
    description: 'Run your content through our multi-layer validation series, where it\'s tested against multiple performance signals, including synthetic audience simulations and AI personas, delivering feedback in seconds, not weeks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    imageAlt: 'Person writing on document with laptop',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
          How it works
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          The magical conveyor belt transforming your drafts into high-impact content in five simple steps.
        </p>

        <div className="space-y-12">
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
            >
              <BorderTrail
                size={100}
                style={{
                  boxShadow:
                    "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                }}
              />
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 italic mb-4 text-lg">{step.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors group"
                  >
                    <span className="mr-2">Discover more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden">
                    <BorderTrail
                      size={80}
                      style={{
                        boxShadow:
                          "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                      }}
                    />
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

