import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const History = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Roman History - The Glory of Rome</title>
        <meta name="description" content="Explore the rich history of Ancient Rome, from its founding to its fall." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-red-800">The History of Rome</h1>

      <Tabs defaultValue="kingdom" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
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
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <p className="mb-4">The Roman Kingdom began with the legendary founding of Rome by Romulus in 753 BC. According to myth, Romulus and his twin brother Remus were raised by a she-wolf before establishing the city.</p>
                <p className="mb-4">During this period, Rome was ruled by a succession of seven kings:</p>
                <ol className="list-decimal list-inside mb-4">
                  <li>Romulus (753-716 BC)</li>
                  <li>Numa Pompilius (716-673 BC)</li>
                  <li>Tullus Hostilius (673-642 BC)</li>
                  <li>Ancus Marcius (642-617 BC)</li>
                  <li>Lucius Tarquinius Priscus (617-579 BC)</li>
                  <li>Servius Tullius (579-535 BC)</li>
                  <li>Lucius Tarquinius Superbus (535-509 BC)</li>
                </ol>
                <p className="mb-4">The Roman Kingdom saw the development of key Roman institutions and the absorption of Etruscan cultural influences. The period ended with the overthrow of the last king and the establishment of the Roman Republic.</p>
              </ScrollArea>
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
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <p className="mb-4">The Roman Republic was established in 509 BC after the overthrow of the monarchy. It was characterized by a complex system of checks and balances, with power shared between magistrates, the Senate, and the people.</p>
                <p className="mb-4">Key events and developments of the Republican period include:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>The Conflict of the Orders (494-287 BC)</li>
                  <li>The Punic Wars against Carthage (264-146 BC)</li>
                  <li>The conquest of Greece (146 BC)</li>
                  <li>The Social War (91-88 BC)</li>
                  <li>The dictatorship of Sulla (82-79 BC)</li>
                  <li>The rise of Julius Caesar and the Civil War (49-45 BC)</li>
                </ul>
                <p className="mb-4">The Republic saw Rome's expansion across Italy and the Mediterranean, transforming it from a city-state into the dominant power of the ancient world. However, internal conflicts and the concentration of power in the hands of a few ultimately led to its downfall and the rise of the Roman Empire.</p>
              </ScrollArea>
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
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <p className="mb-4">The Roman Empire began with the reign of Augustus in 27 BC and lasted until the fall of Rome to Germanic invaders in 476 AD. This period saw Rome reach its greatest territorial extent and achieve remarkable stability known as the Pax Romana.</p>
                <p className="mb-4">Key periods and events of the Empire include:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>The Julio-Claudian Dynasty (27 BC - 68 AD)</li>
                  <li>The Year of the Four Emperors (69 AD)</li>
                  <li>The Flavian Dynasty (69-96 AD)</li>
                  <li>The Five Good Emperors (96-180 AD)</li>
                  <li>The Crisis of the Third Century (235-284 AD)</li>
                  <li>The Tetrarchy and rise of Constantine (284-337 AD)</li>
                  <li>The adoption of Christianity as the state religion (380 AD)</li>
                  <li>The division into Western and Eastern Empires (395 AD)</li>
                  <li>The fall of the Western Roman Empire (476 AD)</li>
                </ul>
                <p className="mb-4">The Roman Empire saw great achievements in architecture, engineering, and the arts. However, it also faced significant challenges including economic troubles, barbarian invasions, and internal strife, which eventually led to its collapse in the West. The Eastern Roman (Byzantine) Empire continued for nearly a thousand years more, until the fall of Constantinople in 1453.</p>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default History;
