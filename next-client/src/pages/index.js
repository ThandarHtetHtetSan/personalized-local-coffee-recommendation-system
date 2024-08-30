import Layout from '@/components/Layout';
import { features } from '@/utils/jsonData';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Banner Section */}
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/images/coffee-banner.jpeg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Discover Your Perfect Coffee</h1>
              <p className="text-xl mb-8">Personalized recommendations powered by AI</p>
              <Link href="/recommendation" className="bg-[#A53F3F] text-white py-3 px-6 rounded-full text-lg hover:opacity-85">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Why You'll Love Our Recommendations</h2>
            <p className="text-lg mt-4">Explore the benefits of using our AI-powered coffee recommendation system.</p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={feature.image} alt={feature.title} width={400} height={300} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}