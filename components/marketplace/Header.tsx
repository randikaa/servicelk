"use client"

import Link from "next/link"
import { Menu, Search, Globe, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/context/LanguageContext"
import { Language } from "@/lib/dictionary"
import React from "react"
import { SignInDialog } from "@/components/auth/SignInDialog"
import { SignUpDialog } from "@/components/auth/SignUpDialog"
import { TrendingBar } from "./TrendingBar"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const lang = language

  const changeLanguage = (code: string) => {
    setLanguage(code as Language)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Left: Logo & Search */}
        <div className="flex items-center gap-6 lg:gap-8 flex-1">
          <Link href="/" className="flex items-end">
            <span className="text-2xl md:text-3xl font-medium tracking-tighter text-slate-900">
              sril<span className="text-primary font-black">anzer</span><span className="text-slate-900 text-4xl leading-none">.</span>
            </span>
          </Link>

          <div className="hidden lg:block max-w-sm w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="What service are you looking for?" 
              className="pl-9 h-10 bg-slate-50 border-slate-200 focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-white transition-all" 
            />
          </div>
        </div>

        {/* Right: Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent hover:bg-slate-100 hover:text-primary transition-colors border-none shadow-none">srilanzer Pro</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            srilanzer Pro
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            The top 1% of talent for your most critical projects. Verified & Vetted.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#" title="I am a Business">
                      Hire for large projects.
                    </ListItem>
                    <ListItem href="#" title="I am a Freelancer">
                      Apply to join Pro.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent hover:bg-slate-100 hover:text-primary transition-colors border-none shadow-none">Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem title="Digital & Tech" href="#">Web, Mobile, AI</ListItem>
                    <ListItem title="Creative" href="#">Design, Video, Music</ListItem>
                    <ListItem title="Business" href="#">Legal, Finance, Admin</ListItem>
                    <ListItem title="Local Services" href="#">Transport, Home, Events</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hidden xl:flex items-center gap-1 text-slate-600 uppercase">
                <Globe className="h-4 w-4" /> {lang.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => changeLanguage('en')} className="flex items-center gap-2 cursor-pointer">
                <span>English</span>
                {lang === 'en' && <Check className="h-4 w-4 text-primary" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('si')} className="flex items-center gap-2 cursor-pointer">
                <span className="font-sans">සිංහල</span>
                {lang === 'si' && <Check className="h-4 w-4 text-primary" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>



          <Button variant="ghost" className="font-medium text-slate-600 hover:text-primary">
            Become a Seller
          </Button>
          
          <SignInDialog>
            <Button variant="ghost" className="font-medium text-slate-600 hover:text-primary">
              Sign In
            </Button>
          </SignInDialog>

          <SignUpDialog>
            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors font-bold px-6">
              Join
            </Button>
          </SignUpDialog>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-6">
              <SignUpDialog>
                <Button className="w-full">Join srilanzer</Button>
              </SignUpDialog>
              <div className="flex flex-col gap-4 text-lg">
                <SignInDialog>
                  <button className="font-medium hover:text-primary text-left w-full">Sign In</button>
                </SignInDialog>
                <Link href="#" className="font-medium hover:text-primary">Browse Categories</Link>
                <Link href="#" className="font-medium hover:text-primary">Become a Seller</Link>
                
                <div className="flex items-center gap-4 mt-4 border-t pt-4">
                    <Button 
                      variant={lang === 'en' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </Button>
                    <Button 
                      variant={lang === 'si' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => changeLanguage('si')}
                    >
                      සිංහල
                    </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
      <TrendingBar />
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

