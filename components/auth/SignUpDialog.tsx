import React, { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Check, Apple, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

/* Social Icons (using placeholders where lucide doesn't have exact brand matches or for custom styling) */
const GoogleIcon = () => (
  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

const FacebookIcon = () => (
  <svg className="h-5 w-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.742-2.971 2.28v1.691h3.753l-.521 3.667h-3.232v7.98H9.101Z" />
  </svg>
)

const AppleIcon = () => (
  <svg className="h-5 w-5 mr-2" viewBox="0 0 50 50" width="50px" height="50px">
    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
  </svg>
)

interface SignUpDialogProps {
  children: React.ReactNode
}

export function SignUpDialog({ children }: SignUpDialogProps) {
  const [view, setView] = useState<'default' | 'email'>('default')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[850px] overflow-hidden gap-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
          {/* Left Panel - Hero/Benefits */}
          <div className="hidden md:flex flex-col justify-between bg-[#8c3343] p-8 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold leading-tight">
                  Join ServiceLK
                </h2>
                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 opacity-90" />
                    <span className="text-sm font-medium opacity-90">Manage your freelance business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 opacity-90" />
                    <span className="text-sm font-medium opacity-90">Collaborate with top talent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 opacity-90" />
                    <span className="text-sm font-medium opacity-90">Secure payment system</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 w-full mt-auto -mb-8 -mr-8">
                 <div className="absolute bottom-0 right-0 w-[120%] h-full bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 grayscale rounded-tl-3xl"></div>
            </div>
          </div>

          {/* Right Panel - Sign Up Form */}
          <div className="flex flex-col justify-center p-8 md:p-12 bg-white relative">
            {view === 'default' ? (
              <div className="w-full max-w-sm mx-auto space-y-6">
                <div className="space-y-2">
                  <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900">
                    Create a new account
                  </DialogTitle>
                  <DialogDescription className="text-slate-500">
                    Already have an account?{" "}
                    <Link href="#" className="font-semibold text-slate-900 hover:underline">
                      Sign In
                    </Link>
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full h-11 justify-start font-medium text-slate-700 hover:bg-slate-50 relative">
                    <span className="absolute left-4 flex items-center">
                      <GoogleIcon />
                    </span>
                    <span className="w-full text-center">Continue with Google</span>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full h-11 justify-start font-medium text-slate-700 hover:bg-slate-50 relative"
                    onClick={() => setView('email')}
                  >
                    <span className="absolute left-4 flex items-center text-slate-900">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                     <span className="w-full text-center">Continue with email/username</span>
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <Button variant="outline" className="w-full h-11 font-medium text-slate-700 hover:bg-slate-50">
                      <AppleIcon />
                      Apple
                   </Button>
                   <Button variant="outline" className="w-full h-11 font-medium text-slate-700 hover:bg-slate-50">
                      <FacebookIcon />
                      Facebook
                   </Button>
                </div>

                <div className="pt-4 text-xs text-center text-muted-foreground">
                  By joining, you agree to the ServiceLK{" "}
                  <Link href="#" className="underline underline-offset-2 hover:text-slate-900">
                    Terms of Service
                  </Link>{" "}
                  and to occasionally receive emails from us. Please read our{" "}
                  <Link href="#" className="underline underline-offset-2 hover:text-slate-900">
                    Privacy Policy
                  </Link>{" "}
                  to learn how we use your personal data.
                </div>
              </div>
            ) : (
              <div className="w-full max-w-sm mx-auto space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                <Button 
                    variant="ghost" 
                    className="pl-0 hover:bg-transparent hover:text-primary mb-2 -ml-2 h-auto py-1"
                    onClick={() => setView('default')}
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                </Button>

                <div className="space-y-4">
                  <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900">
                    Continue with your email or username
                  </DialogTitle>
                  
                  <div className="space-y-4 pt-2">
                      <div className="space-y-2">
                          <Label htmlFor="email">Email or username</Label>
                          <Input id="email" placeholder="" className="bg-white" />
                      </div>

                      <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                              <Input 
                                id="password" 
                                type={showPassword ? "text" : "password"} 
                                className="pr-10 bg-white" 
                              />
                              <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                              >
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                          </div>
                          
                      </div>
                  </div>

                  <Button className="w-full h-11 bg-slate-200 text-slate-400 hover:bg-slate-300 pointer-events-none mt-4 font-semibold text-md">
                      Join
                  </Button>

                   <div className="pt-4 text-xs text-center text-muted-foreground border-t mt-6">
                    By joining, you agree to the ServiceLK{" "}
                    <Link href="#" className="underline underline-offset-2 hover:text-slate-900">
                      Terms of Service
                    </Link>{" "}
                    and to occasionally receive emails from us. Please read our{" "}
                    <Link href="#" className="underline underline-offset-2 hover:text-slate-900">
                      Privacy Policy
                    </Link>{" "}
                    to learn how we use your personal data.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
