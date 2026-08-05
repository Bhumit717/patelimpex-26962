
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Ultra Pro Accordion Animations
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },

        // Ultra Advanced Fade Animations
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },

        // Ultra Pro Scale Animations  
        "scale-in": {
          "0%": {
            transform: "scale(0.8) rotate(-10deg)",
            opacity: "0"
          },
          "50%": {
            transform: "scale(1.05) rotate(2deg)",
            opacity: "0.8"
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "1"
          }
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },

        // Ultra Advanced Slide Animations
        "slide-in-up": {
          "0%": {
            transform: "translateY(100px) scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1"
          }
        },
        "slide-in-down": {
          "0%": {
            transform: "translateY(-100px) scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1"
          }
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100px) scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0) scale(1)",
            opacity: "1"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100px) scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0) scale(1)",
            opacity: "1"
          }
        },

        // Ultra Pro Bounce & Elastic Animations
        "bounce-in": {
          "0%": {
            transform: "scale(0.3)",
            opacity: "0"
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8"
          },
          "70%": {
            transform: "scale(0.9)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "elastic": {
          "0%": {
            transform: "scale(1, 1)"
          },
          "25%": {
            transform: "scale(0.9, 1.1)"
          },
          "50%": {
            transform: "scale(1.1, 0.9)"
          },
          "75%": {
            transform: "scale(0.95, 1.05)"
          },
          "100%": {
            transform: "scale(1, 1)"
          }
        },

        // Ultra Advanced Rotation & Flip Animations
        "rotate-in": {
          "0%": {
            transform: "rotate(-180deg) scale(0.5)",
            opacity: "0"
          },
          "100%": {
            transform: "rotate(0deg) scale(1)",
            opacity: "1"
          }
        },
        "flip-in-x": {
          "0%": {
            transform: "perspective(400px) rotateX(90deg)",
            opacity: "0"
          },
          "40%": {
            transform: "perspective(400px) rotateX(-20deg)"
          },
          "60%": {
            transform: "perspective(400px) rotateX(10deg)",
            opacity: "1"
          },
          "80%": {
            transform: "perspective(400px) rotateX(-5deg)"
          },
          "100%": {
            transform: "perspective(400px) rotateX(0deg)",
            opacity: "1"
          }
        },
        "flip-in-y": {
          "0%": {
            transform: "perspective(400px) rotateY(90deg)",
            opacity: "0"
          },
          "40%": {
            transform: "perspective(400px) rotateY(-20deg)"
          },
          "60%": {
            transform: "perspective(400px) rotateY(10deg)",
            opacity: "1"
          },
          "80%": {
            transform: "perspective(400px) rotateY(-5deg)"
          },
          "100%": {
            transform: "perspective(400px) rotateY(0deg)",
            opacity: "1"
          }
        },

        // Ultra Pro Special Effects
        "shimmer": {
          "0%": {
            transform: "translateX(-100%)"
          },
          "100%": {
            transform: "translateX(100%)"
          }
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-20px)"
          }
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)"
          },
          "50%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)"
          }
        },

        // Ultra Advanced Text Animations
        "text-shimmer": {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        },
        "typing": {
          "0%": {
            width: "0"
          },
          "100%": {
            width: "100%"
          }
        },
        "blink": {
          "0%, 50%": {
            borderColor: "transparent"
          },
          "51%, 100%": {
            borderColor: "currentColor"
          }
        },

        // Ultra Pro Morphing Animations
        "morph": {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%"
          }
        },
        "wiggle": {
          "0%, 7%": { transform: "rotateZ(0)" },
          "15%": { transform: "rotateZ(-15deg)" },
          "20%": { transform: "rotateZ(10deg)" },
          "25%": { transform: "rotateZ(-10deg)" },
          "30%": { transform: "rotateZ(6deg)" },
          "35%": { transform: "rotateZ(-4deg)" },
          "40%, 100%": { transform: "rotateZ(0)" }
        },

        // Ultra Advanced Counter Animation
        "counter": {
          "0%": {
            transform: "translateY(100%) scale(0.5)",
            opacity: "0"
          },
          "50%": {
            transform: "translateY(-10%) scale(1.1)",
            opacity: "0.8"
          },
          "100%": {
            transform: "translateY(0%) scale(1)",
            opacity: "1"
          }
        },

        // Ultra Pro Matrix Effect
        "matrix": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            transform: "translateY(100vh)",
            opacity: "0"
          }
        }
      },
      animation: {
        // Basic Enhanced Animations
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        
        // Ultra Pro Fade Animations
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
        "fade-in-left": "fade-in-left 0.8s ease-out forwards",
        "fade-in-right": "fade-in-right 0.8s ease-out forwards",
        
        // Ultra Advanced Scale Animations
        "scale-in": "scale-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        
        // Ultra Pro Slide Animations
        "slide-in-up": "slide-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-down": "slide-in-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        
        // Ultra Advanced Bounce & Elastic
        "bounce-in": "bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "elastic": "elastic 1s ease-in-out infinite",
        
        // Ultra Pro Rotation & Flip
        "rotate-in": "rotate-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "flip-in-x": "flip-in-x 0.8s ease-in forwards",
        "flip-in-y": "flip-in-y 0.8s ease-in forwards",
        
        // Ultra Advanced Special Effects
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        
        // Ultra Pro Text Effects
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 1s infinite",
        
        // Ultra Advanced Morphing
        "morph": "morph 8s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out",
        
        // Ultra Pro Counters & Matrix
        "counter": "counter 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "matrix": "matrix 20s linear infinite"
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
        "pos-200": "200% 200%"
      },
      boxShadow: {
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
        "4xl": "0 50px 100px -20px rgba(0, 0, 0, 0.25)",
        "glow": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.6)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
