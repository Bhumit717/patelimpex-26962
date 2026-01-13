
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				ai: {
					primary: 'hsl(var(--ai-primary))',
					secondary: 'hsl(var(--ai-secondary))',
					accent: 'hsl(var(--ai-accent))',
					glow: 'hsl(var(--ai-glow))',
					neon: 'hsl(var(--ai-neon))',
					cyber: 'hsl(var(--ai-cyber))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// 1-10: Basic animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-30px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0.8)', opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				// 11-20: Advanced animations
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)', opacity: '0.8' },
					'70%': { transform: 'scale(0.9)', opacity: '0.9' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'text-shimmer': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'logo-morph': {
					'0%': { transform: 'scale(0.8) rotate(-5deg)', opacity: '0.8' },
					'50%': { transform: 'scale(1.1) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'sparkle-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'ai-text-glow': {
					'0%, 100%': { textShadow: '0 0 20px hsl(271, 91%, 65%, 0.5)' },
					'50%': { textShadow: '0 0 30px hsl(195, 100%, 50%, 0.8), 0 0 40px hsl(330, 100%, 70%, 0.3)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				// 21-32: New AI and futuristic animations
				'ai-pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(271, 91%, 65%, 0.4)' },
					'50%': { boxShadow: '0 0 40px hsl(195, 100%, 50%, 0.6), 0 0 60px hsl(330, 100%, 70%, 0.2)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)', opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
					'75%': { opacity: '0.9' }
				},
				'wave': {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'typewriter': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'cyberpunk-scan': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'digital-rain': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'hologram': {
					'0%, 100%': { opacity: '0.8', filter: 'hue-rotate(0deg)' },
					'25%': { opacity: '1', filter: 'hue-rotate(90deg)' },
					'50%': { opacity: '0.6', filter: 'hue-rotate(180deg)' },
					'75%': { opacity: '1', filter: 'hue-rotate(270deg)' }
				},
				'circuit-pulse': {
					'0%': { 
						boxShadow: '0 0 0 0 hsl(271, 91%, 65%, 0.7)',
						transform: 'scale(1)'
					},
					'70%': { 
						boxShadow: '0 0 0 10px hsl(271, 91%, 65%, 0)',
						transform: 'scale(1.05)'
					},
					'100%': { 
						boxShadow: '0 0 0 0 hsl(271, 91%, 65%, 0)',
						transform: 'scale(1)'
					}
				},
				'neural-network': {
					'0%': { 
						strokeDasharray: '0 100',
						stroke: 'hsl(271, 91%, 65%)'
					},
					'50%': { 
						strokeDasharray: '50 100',
						stroke: 'hsl(195, 100%, 50%)'
					},
					'100%': { 
						strokeDasharray: '100 100',
						stroke: 'hsl(330, 100%, 70%)'
					}
				},
				'data-stream': {
					'0%': { transform: 'scaleX(0)', opacity: '0' },
					'50%': { transform: 'scaleX(1)', opacity: '1' },
					'100%': { transform: 'scaleX(0)', opacity: '0' }
				}
			},
			animation: {
				// Basic animations (1-10)
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'scale-out': 'scale-out 0.5s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-in-up': 'slide-in-up 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				// Advanced animations (11-20)
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
				'logo-morph': 'logo-morph 0.3s ease-in-out',
				'sparkle-rotate': 'sparkle-rotate 4s linear infinite',
				'ai-text-glow': 'ai-text-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 8s linear infinite',
				// AI and futuristic animations (21-32)
				'ai-pulse-glow': 'ai-pulse-glow 2s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite',
				'wave': 'wave 2s ease-in-out',
				'typewriter': 'typewriter 3s steps(40, end)',
				'cyberpunk-scan': 'cyberpunk-scan 2s ease-in-out infinite',
				'digital-rain': 'digital-rain 2s linear infinite',
				'hologram': 'hologram 4s ease-in-out infinite',
				'circuit-pulse': 'circuit-pulse 2s infinite',
				'neural-network': 'neural-network 3s ease-in-out infinite',
				'data-stream': 'data-stream 2s ease-in-out infinite'
			},
			backgroundSize: {
				'200%': '200% 200%'
			},
			backgroundPosition: {
				'pos-0': '0% 50%',
				'pos-100': '100% 50%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
