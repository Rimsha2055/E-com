"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section
      className="relative my-16 px-6 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/back3.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto shadow-2xl rounded-2xl p-8 bg-gray-900/90 text-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">What is your return policy?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              You can return items within 30 days of delivery if they are in original condition.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">Do you offer free shipping?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes, we offer free shipping on orders above $50. For smaller orders, shipping charges apply.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">How can I track my order?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              After your order ships, you will receive an email with a tracking link.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white">Do you deliver internationally?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes, we deliver worldwide. Shipping charges and delivery time may vary by country.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-white">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              We accept credit/debit cards, PayPal, and Cash on Delivery in selected regions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-white">How long does delivery take?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Standard delivery takes 3–7 business days. Express delivery options are also available.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-white">Can I cancel or change my order?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Orders can be canceled or updated within 2 hours of placing them. After that, they may already be processed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-white">Are your products authentic?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes, we only sell 100% authentic and verified products from trusted suppliers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-white">Do you offer discounts or sales?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes, we run seasonal sales and offer discount codes. Subscribe to our newsletter to stay updated.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-white">How do I contact customer support?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              You can reach our support team 24/7 via email at support@ecom.com or through live chat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
