"use client"
import { useState, useRef, useEffect } from "react"
import { MetallicBusinessCard } from "@/components/ui/metallic-business-card"

type FlagItem = {
  code: string
  x: number
  y: number
  size: number
  rotation: number
}

const BACK_LAYER_FLAGS: FlagItem[] = [
  { code: "us", x: 12, y: 8, size: 56, rotation: -12 },
  { code: "gb", x: 45, y: 5, size: 64, rotation: 8 },
  { code: "jp", x: 78, y: 12, size: 52, rotation: -5 },
  { code: "br", x: 88, y: 35, size: 60, rotation: 15 },
  { code: "de", x: 22, y: 30, size: 48, rotation: -18 },
  { code: "fr", x: 55, y: 28, size: 56, rotation: 10 },
  { code: "in", x: 8, y: 55, size: 64, rotation: -8 },
  { code: "au", x: 35, y: 50, size: 52, rotation: 20 },
  { code: "kr", x: 68, y: 48, size: 60, rotation: -15 },
  { code: "ca", x: 92, y: 60, size: 48, rotation: 5 },
  { code: "mx", x: 18, y: 75, size: 56, rotation: -22 },
  { code: "za", x: 50, y: 72, size: 64, rotation: 12 },
  { code: "ng", x: 75, y: 78, size: 52, rotation: -10 },
  { code: "eg", x: 30, y: 90, size: 60, rotation: 18 },
  { code: "se", x: 62, y: 92, size: 48, rotation: -6 },
]

const MIDDLE_LAYER_FLAGS: FlagItem[] = [
  { code: "it", x: 15, y: 10, size: 60, rotation: -10 },
  { code: "es", x: 50, y: 8, size: 52, rotation: 14 },
  { code: "ar", x: 82, y: 15, size: 56, rotation: -20 },
  { code: "tr", x: 10, y: 38, size: 64, rotation: 7 },
  { code: "nl", x: 40, y: 32, size: 48, rotation: -15 },
  { code: "ch", x: 72, y: 35, size: 56, rotation: 22 },
  { code: "ke", x: 90, y: 55, size: 60, rotation: -8 },
  { code: "co", x: 25, y: 55, size: 52, rotation: 16 },
  { code: "ph", x: 58, y: 52, size: 64, rotation: -12 },
  { code: "no", x: 5, y: 72, size: 56, rotation: 10 },
  { code: "th", x: 35, y: 78, size: 48, rotation: -18 },
  { code: "pt", x: 65, y: 75, size: 60, rotation: 5 },
  { code: "cl", x: 85, y: 82, size: 52, rotation: -14 },
  { code: "pk", x: 20, y: 90, size: 56, rotation: 20 },
  { code: "gh", x: 48, y: 88, size: 64, rotation: -6 },
]

const FRONT_LAYER_FLAGS: FlagItem[] = [
  { code: "ie", x: 18, y: 12, size: 64, rotation: -8 },
  { code: "pl", x: 52, y: 6, size: 56, rotation: 12 },
  { code: "nz", x: 85, y: 18, size: 60, rotation: -16 },
  { code: "sg", x: 8, y: 40, size: 52, rotation: 20 },
  { code: "ae", x: 42, y: 35, size: 64, rotation: -10 },
  { code: "sa", x: 75, y: 38, size: 56, rotation: 6 },
  { code: "tw", x: 88, y: 58, size: 48, rotation: -22 },
  { code: "my", x: 22, y: 60, size: 60, rotation: 14 },
  { code: "at", x: 55, y: 55, size: 52, rotation: -5 },
  { code: "dk", x: 10, y: 78, size: 56, rotation: 18 },
  { code: "pe", x: 38, y: 82, size: 64, rotation: -12 },
  { code: "il", x: 70, y: 75, size: 48, rotation: 8 },
  { code: "fi", x: 90, y: 85, size: 56, rotation: -18 },
  { code: "vn", x: 28, y: 92, size: 60, rotation: 10 },
  { code: "be", x: 60, y: 90, size: 52, rotation: -14 },
]

const FlagLayer = ({
  flags,
  animationClass,
  zIndex,
  flagOpacity,
}: {
  flags: FlagItem[]
  animationClass: string
  zIndex: number
  flagOpacity: number
}) => (
  <div className={`absolute inset-0 ${animationClass}`} style={{ zIndex }}>
    {flags.map((flag) => (
      <div
        key={flag.code}
        style={{
          position: "absolute",
          left: `${flag.x}%`,
          top: `${flag.y}%`,
          width: `${flag.size}px`,
          height: `${flag.size}px`,
          transform: `rotate(${flag.rotation}deg)`,
        }}
      >
        <img
          src={`https://flagcdn.com/w80/${flag.code}.png`}
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
            opacity: flagOpacity,
          }}
        />
      </div>
    ))}
  </div>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export const WaitlistHero = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Show WhatsApp popup 1.5s after successful signup
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setShowWhatsApp(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [status])

  // Escape key dismissal
  useEffect(() => {
    if (!showWhatsApp) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowWhatsApp(false)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [showWhatsApp])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setEmail("")
      fireConfetti()
    } catch {
      // Reset on error so user can retry
      setStatus("idle")
    }
  }

  // --- Confetti Logic ---
  const fireConfetti = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      color: string
      size: number
    }[] = []
    const colors = ["#0079da", "#10b981", "#fbbf24", "#f472b6", "#fff"]

    // Resize canvas to cover the button area mostly
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const createParticle = () => {
      return {
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12, // Random spread X
        vy: (Math.random() - 2) * 10, // Upward velocity
        life: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
      }
    }

    // Create batch of particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.5 // Gravity
        p.life -= 2

        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, p.life / 100)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        if (p.life <= 0) {
          particles.splice(i, 1)
          i--
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }

  // Color tokens
  const colors = {
    textMain: "#ffffff",
    textSecondary: "#94a3b8",
    bluePrimary: "#0079da",
    success: "#10b981", // emerald-500
    inputBg: "#27272a",
    baseBg: "#09090b",
    inputShadow: "rgba(255, 255, 255, 0.1)",
  }

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center">
      {/* Animation Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes success-pulse {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes success-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 60px rgba(16, 185, 129, 0.8), 0 0 100px rgba(16, 185, 129, 0.4); }
        }
        @keyframes checkmark-draw {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes celebration-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        .animate-success-pulse {
          animation: success-pulse 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-success-glow {
          animation: success-glow 2s ease-in-out infinite;
        }
        .animate-checkmark {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          animation: checkmark-draw 0.4s ease-out 0.3s forwards;
        }
        .animate-ring {
          animation: celebration-ring 0.8s ease-out forwards;
        }
        @keyframes modal-backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-content-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-backdrop {
          animation: modal-backdrop-in 0.3s ease-out forwards;
        }
        .animate-modal-content {
          animation: modal-content-in 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      {/* Main Container */}
      <div
        className="relative w-full h-screen overflow-hidden shadow-2xl"
        style={{
          backgroundColor: colors.baseBg,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Background Decorative Layer */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            perspective: "1200px",
            transform: "perspective(1200px) rotateX(15deg)",
            transformOrigin: "center bottom",
            opacity: 1,
          }}
        >
          <FlagLayer flags={BACK_LAYER_FLAGS} animationClass="animate-spin-slow" zIndex={0} flagOpacity={0.5} />
          <FlagLayer flags={MIDDLE_LAYER_FLAGS} animationClass="animate-spin-slow-reverse" zIndex={1} flagOpacity={0.6} />
          <FlagLayer flags={FRONT_LAYER_FLAGS} animationClass="animate-spin-slow" zIndex={2} flagOpacity={0.8} />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${colors.baseBg} 10%, rgba(9, 9, 11, 0.8) 40%, transparent 100%)`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-24 gap-6">
          <div className="mb-2">
            <MetallicBusinessCard
              metal="black"
              innerMetal="gold"
              width={200}
              compact
              name="Network Pass"
              role="Global Access"
              company=""
              email=""
              align="left"
            />
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-center tracking-tight"
            style={{ color: colors.textMain }}
          >
            Optimize your daily loop anywhere
          </h1>
          <p
            className="text-lg font-medium"
            style={{ color: colors.textSecondary }}
          >
            If you found this, you probably belong here.
          </p>

          {/* Form / Success Container */}
          <div className="w-full max-w-md px-4 mt-4 h-[60px] relative perspective-1000">
            {/* Confetti Canvas - overlays everything but ignores clicks */}
            <canvas
              ref={canvasRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-50"
            />

            {/* SUCCESS STATE */}
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                status === "success"
                  ? "opacity-100 scale-100 rotate-x-0 animate-success-pulse animate-success-glow"
                  : "opacity-0 scale-95 -rotate-x-90 pointer-events-none"
              }`}
              style={{ backgroundColor: colors.success }}
            >
              {/* Celebration rings */}
              {status === "success" && (
                <>
                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 border-emerald-400 animate-ring"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 border-emerald-300 animate-ring"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 border-emerald-200 animate-ring"
                    style={{ animationDelay: "0.3s" }}
                  />
                </>
              )}
              <div
                className={`flex items-center gap-2 text-white font-semibold text-lg ${status === "success" ? "animate-bounce-in" : ""}`}
              >
                <div className="bg-white/20 p-1 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={
                        status === "success" ? "animate-checkmark" : ""
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>You&apos;re on the list!</span>
              </div>
            </div>

            {/* FORM STATE */}
            <form
              onSubmit={handleSubmit}
              className={`relative w-full h-full group transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                status === "success"
                  ? "opacity-0 scale-95 rotate-x-90 pointer-events-none"
                  : "opacity-100 scale-100 rotate-x-0"
              }`}
            >
              <input
                type="email"
                required
                placeholder="name@email.com"
                value={email}
                disabled={status === "loading"}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[60px] pl-6 pr-[150px] rounded-full outline-none transition-all duration-200 placeholder-zinc-500 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: colors.inputBg,
                  color: colors.textMain,
                  boxShadow: `inset 0 0 0 1px ${colors.inputShadow}`,
                }}
              />
              <div className="absolute top-[6px] right-[6px] bottom-[6px]">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-full px-6 rounded-full font-medium text-white transition-all active:scale-95 hover:brightness-110 disabled:hover:brightness-100 disabled:active:scale-100 disabled:cursor-wait flex items-center justify-center min-w-[130px]"
                  style={{ backgroundColor: colors.bluePrimary }}
                >
                  {status === "loading" ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Join waitlist"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Community Invite Modal */}
      {showWhatsApp && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center animate-modal-backdrop"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setShowWhatsApp(false)}
        >
          <div
            className="relative w-full max-w-sm mx-4 rounded-2xl p-8 animate-modal-content"
            style={{
              backgroundColor: "rgba(24, 24, 27, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowWhatsApp(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* WhatsApp icon circle */}
            <div className="flex justify-center mb-5">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#25D366" }}
              >
                <WhatsAppIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Join the Community
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-center text-sm mb-6">
              Connect with other members, get early updates, and shape what&apos;s next.
            </p>

            {/* WhatsApp CTA button */}
            <a
              href="https://chat.whatsapp.com/LNV7dpqdVk3FYMC276H6SD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Join WhatsApp Group
            </a>

            {/* Dismiss */}
            <button
              onClick={() => setShowWhatsApp(false)}
              className="w-full mt-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
