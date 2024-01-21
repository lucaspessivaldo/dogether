import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function AccordionTokes() {
  return (
    <div className="flex justify-center	px-6 mb-6">
      <Accordion type="single" collapsible className="w-full max-w-4xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-[#b89509] text-xl">BLOCK TIME</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-500">
            Our blockchain features a swift block time of just <span className="font-bold">13 seconds</span>, ensuring
            quick transaction confirmations and efficient mining.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-[#b89509] text-xl">MINING ALGORITHM</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-500">
            Dogether utilizes the <span className="font-bold">Ethash</span> algorithm, known for its security and wide
            accessibility, allowing miners to participate using a range of hardware.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-[#b89509] text-xl">MINING REWARDS</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-500">
            <p className="mb-2">Initial Phase (Up to Block 2,100,000): During the first phase,
              miners receive <span className="font-bold">40,000</span> Dogether per block.
            </p>
            <p className="mb-2">In addition, a developer fee of <span className="font-bold">4,000</span> Dogether (equivalent to <span className="font-bold">10%</span> of the mining reward) is allocated
              to support ongoing development and innovation.
            </p>
            <p className="mb-2">Long-Term Phase (After Block 2,100,000):
              After reaching block 2,100,000, the reward per block for miners will be adjusted to <span className="font-bold">4,000</span> Dogether.
            </p>
            <p className="mb-2">
              This phase marks the <span className="font-bold">removal of the developer fee</span>, ensuring a greater reward share for our dedicated miners.
            </p>
            <p>
              This will occur approximately one year from our launch date: the 12th of December 2023.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

  )
}