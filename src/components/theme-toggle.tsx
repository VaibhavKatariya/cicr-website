"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const modes = ["light", "dark", "system"] as const

  const nextTheme = () => {
    const currentIndex = modes.indexOf(theme as typeof modes[number])
    const next = modes[(currentIndex + 1) % modes.length]
    setTheme(next)
  }

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />
      case "system":
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  return (
    <Button
      onClick={nextTheme}
      variant="outline"
      size="sm"
      className="w-9 h-9 p-0 bg-transparent"
    >
      {renderIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
