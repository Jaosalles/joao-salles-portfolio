// Global type definitions
export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  image?: string
  featured?: boolean
  category?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  technologies?: string[]
  location?: string
}

export interface Skill {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills'
}

export interface ContactInfo {
  email: string
  linkedin: string
  github: string
  location: string
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

// API types
export interface ApiResponse<T = unknown> {
  data: T
  success: boolean
  message?: string
}

export interface ApiError {
  code: string
  message: string
  status: number
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

export interface ThemeConfig {
  theme: Theme
  setTheme: (theme: Theme) => void
}
