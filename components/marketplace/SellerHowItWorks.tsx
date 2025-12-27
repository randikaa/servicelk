"use client"

import { UserCheck, Briefcase, Wallet } from "lucide-react"

const steps = [
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "1. Verify your profile",
    description: "Complete your professional profile and go through our verification process to build trust with clients."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "2. Deliver great work",
    description: "Connect with clients, manage projects efficiently, and deliver high-quality results to build your reputation."
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "3. Get paid",
    description: "Your payments are held securely in escrow and released to you as soon as the project is successfully completed."
  }
]

export function SellerHowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 lg:mb-24">
          How it works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
