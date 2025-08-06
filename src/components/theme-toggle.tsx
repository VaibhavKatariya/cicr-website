"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

type ThemeMode = "light" | "dark" | "system"

interface ThemeToggleProps {
  variant?: "icon" | "text"
}

export function ThemeToggle({ variant = "icon" }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const modes: ThemeMode[] = ["light", "dark", "system"]

  const labels: Record<ThemeMode, string> = {
    light: "Light",
    dark: "Dark",
    system: "System",
  }

  const currentTheme = theme as ThemeMode
  const currentIndex = modes.indexOf(currentTheme)
  const next = modes[(currentIndex + 1) % modes.length]
  const nextLabel = labels[next]

  const handleClick = () => {
    setTheme(next)
  }

  const renderIcon = () => {
    switch (currentTheme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  if (variant === "text") {
    return (
      <div
        onClick={handleClick}
        className="cursor-pointer text-sm font-medium hover:underline"
      >
        Change theme to: {nextLabel}
      </div>
    )
  }

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="sm"
      className="w-9 h-9 p-0 bg-transparent"
    >
      {renderIcon()}
      <span className="sr-only">Change theme to: {nextLabel}</span>
    </Button>
  )
}
