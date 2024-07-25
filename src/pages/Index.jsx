import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sword, Shield, Book, Crown, Scroll, Building, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-red-100">
      <Helmet>
        <title>The Glory of Rome: Explore the Ancient Empire</title>
        <meta name="description" content="Dive into the fascinating world of Ancient Rome. Discover its rich history, powerful empire, and lasting legacy." />
      </Helmet>

      <header className="bg-red-800 text-white py-8 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">The Glory of Rome</h1>
          <p className="text-xl md:text-2xl lg:text-3xl">Explore the Grandeur of the Ancient Empire</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-900">Discover the Majesty of Ancient Rome</h2>
          <p className="text-lg mb-4">
            Welcome to our comprehensive exploration of the Roman Empire, one of the most influential civilizations in human history. From its humble beginnings as a small village on the banks of the Tiber River to its zenith as a vast empire spanning three continents, Rome's legacy continues to shape our world today.
          </p>
          <p className="text-lg mb-4">
            Join us on a journey through time as we uncover the fascinating stories, monumental achievements, and enduring impact of this remarkable civilization. Whether you're a history enthusiast, a student, or simply curious about the ancient world, you'll find a wealth of information and insights on this page.
          </p>
          <Button className="bg-red-700 hover:bg-red-800 text-white">Start Your Roman Adventure</Button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-900">Key Aspects of Roman Civilization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sword className="mr-2" /> Military Prowess
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rome's legendary legions conquered vast territories, creating one of the largest empires in ancient history.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2" /> Architecture & Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>From aqueducts to the Colosseum, Roman architectural marvels continue to inspire awe to this day.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scroll className="mr-2" /> Law & Governance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Roman legal system laid the foundation for many modern legal principles and practices.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" /> Social Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Roman society was complex, with distinct social classes and a unique system of patronage.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="mr-2" /> Imperial Power
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>The transition from Republic to Empire marked a crucial turning point in Roman history.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2" /> Culture & Arts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Roman literature, art, and philosophy have profoundly influenced Western culture.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-900">Explore Roman History</h2>
          <Tabs defaultValue="republic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="kingdom">Kingdom</TabsTrigger>
              <TabsTrigger value="republic">Republic</TabsTrigger>
              <TabsTrigger value="empire">Empire</TabsTrigger>
            </TabsList>
            <TabsContent value="kingdom">
              <Card>
                <CardHeader>
                  <CardTitle>The Roman Kingdom (753 BC - 509 BC)</CardTitle>
                  <CardDescription>The legendary beginnings of Rome</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>According to legend, Rome was founded by Romulus in 753 BC. The early Roman state was governed by kings, with a social structure divided between patricians and plebeians. This period saw the establishment of key Roman institutions and the absorption of Etruscan cultural influences.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="republic">
              <Card>
                <CardHeader>
                  <CardTitle>The Roman Republic (509 BC - 27 BC)</CardTitle>
                  <CardDescription>The rise of Rome as a Mediterranean power</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>The Republic was characterized by a complex system of checks and balances, with power shared between magistrates, the Senate, and the people. This era saw Rome's expansion across Italy and the Mediterranean, the Punic Wars against Carthage, and ultimately, civil wars that led to the Republic's fall.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="empire">
              <Card>
                <CardHeader>
                  <CardTitle>The Roman Empire (27 BC - 476 AD)</CardTitle>
                  <CardDescription>The height of Roman power and influence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Beginning with Augustus, the Empire reached its greatest territorial extent under Trajan. This period saw remarkable stability (Pax Romana), architectural achievements, and the spread of Roman culture. However, it also faced challenges like economic troubles, barbarian invasions, and internal strife, leading to its eventual fall in 476 AD.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-900">The Lasting Legacy of Rome</h2>
          <p className="text-lg mb-4">
            The influence of Ancient Rome extends far beyond its historical boundaries, shaping many aspects of our modern world:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>Language: Latin derivatives in English and Romance languages</li>
            <li>Law: Principles of Roman law in modern legal systems</li>
            <li>Government: Concepts of republic and separation of powers</li>
            <li>Architecture: Enduring influence on Western architecture</li>
            <li>Engineering: Roads, aqueducts, and construction techniques</li>
            <li>Art and Literature: Classical traditions in Western art and writing</li>
          </ul>
          <p className="text-lg">
            As we continue to uncover and interpret the remnants of this great civilization, our understanding of Ancient Rome - and its relevance to our world today - only grows deeper.
          </p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-900">Embark on Your Roman Journey</h2>
          <p className="text-lg mb-4">
            Ready to dive deeper into the fascinating world of Ancient Rome? Explore our detailed sections on Roman history, culture, and legacy. Whether you're a student, a history enthusiast, or simply curious about this influential civilization, there's always more to discover about the glory that was Rome.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-700 hover:bg-red-800 text-white">Explore Roman History</Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Discover Roman Culture</Button>
            <Button className="bg-green-700 hover:bg-green-800 text-white">Learn About Roman Legacy</Button>
          </div>
        </section>
      </main>

      <footer className="bg-red-800 text-white py-8 px-4 md:px-8 lg:px-16 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The Glory of Rome. All rights reserved.</p>
          <p className="mt-2">Dedicated to preserving and sharing the fascinating history of Ancient Rome.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
