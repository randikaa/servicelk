"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What can I sell?",
    answer: "You can sell any service you are skilled in! From digital tasks like graphic design, programming, and marketing to physical services like photography, house moving, or handyman tasks. If there's a demand for it, you can offer it."
  },
  {
    question: "How much does it cost to join?",
    answer: "Joining Srilanzer is completely free! There are no subscription fees. We follow a success-based model, meaning we only charge a small service fee once you successfully complete a project and get paid."
  },
  {
    question: "How do I get paid?",
    answer: "Once you complete a task and the client approves the final delivery, the funds are released from our secure escrow system directly to your Srilanzer wallet. You can then withdraw your earnings to your local bank account anytime."
  },
  {
    question: "Do I need a business registration (BR)?",
    answer: "No, you can sign up as an individual professional. However, for certain high-value categories or to get the 'Verified Business' badge, you may choose to provide your Business Registration details to build more trust with large-scale clients."
  },
  {
    question: "What is Srilanzer Pro?",
    answer: "Srilanzer Pro is a tier for our top-performing, hand-vetted professionals. Pro sellers get higher visibility, access to premium high-budget projects, and dedicated support to help scale their business."
  }
]

export function SellerFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 lg:mb-20">
          Questions & Answers
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === index ? "border-primary shadow-lg shadow-primary/5 bg-slate-50/50" : "border-slate-200 hover:border-slate-300"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === index ? "text-primary" : "text-slate-900"
                )}>
                  {faq.question}
                </span>
                <ChevronDown className={cn(
                  "h-5 w-5 text-slate-400 transition-transform duration-300",
                  openIndex === index && "rotate-180 text-primary"
                )} />
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
