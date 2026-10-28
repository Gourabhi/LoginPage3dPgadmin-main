
import { useState } from 'react'

const balls = [
  { x: '5%', y: '10%', size: 90, color: '#8b5cf6', duration: '7s', delay: '-2s' },
  { x: '18%', y: '68%', size: 55, color: '#06b6d4', duration: '9s', delay: '-4s' },
  { x: '30%', y: '20%', size: 38, color: '#f472b6', duration: '6s', delay: '-1s' },
  { x: '45%', y: '78%', size: 105, color: '#3b82f6', duration: '10s', delay: '-6s' },
  { x: '60%', y: '8%', size: 60, color: '#f59e0b', duration: '8s', delay: '-3s' },
  { x: '76%', y: '65%', size: 85, color: '#ec4899', duration: '7s', delay: '-5s' },
  { x: '88%', y: '18%', size: 115, color: '#6366f1', duration: '11s', delay: '-2s' },
  { x: '93%', y: '82%', size: 45, color: '#22d3ee', duration: '6s', delay: '-4s' },
  { x: '10%', y: '43%', size: 30, color: '#34d399', duration: '8s', delay: '-3s' },
  { x: '70%', y: '38%', size: 35, color: '#fb7185', duration: '9s', delay: '-1s' },
  { x: '38%', y: '45%', size: 48, color: '#a78bfa', duration: '7s', delay: '-5s' },
  { x: '54%', y: '55%', size: 28, color: '#facc15', duration: '6s', delay: '-2s' },
]

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleLogin(event) {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setMessage('Please enter your email and password.')
      return
    }

    setMessage('Demo login submitted successfully!')
  }

  return (
    <main className="login-scene relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#172554_0%,_#080b1b_45%,_#020617_100%)]" />

      {/* Animated balls */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {balls.map((ball, index) => (
          <div
            key={index}
            className="ball"
            style={{
              left: ball.x,
              top: ball.y,
              width: `${ball.size}px`,
              height: `${ball.size}px`,
              background: `radial-gradient(circle at 30% 25%, white 0%, ${ball.color} 35%, ${ball.color}99 100%)`,
              '--glow': `${ball.color}80`,
              '--duration': ball.duration,
              '--delay': ball.delay,
            }}
          />
        ))}
      </div>

      {/* Login card */}
      <section className="glass-card relative z-10 w-full max-w-md rounded-3xl p-7 sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl shadow-lg shadow-violet-500/30">
            ✦
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />
          </div>

          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input
                type="checkbox"
                className="accent-violet-500"
              />
              Remember me
            </label>

            <a
              href="#forgot-password"
              onClick={(event) => {
                event.preventDefault()
                setMessage('Connect your password-reset flow here.')
              }}
              className="text-violet-300 transition-colors duration-300 hover:text-cyan-300"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-3.5 font-semibold shadow-lg shadow-violet-900/30 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:from-violet-500 hover:to-cyan-500 active:translate-y-0 active:scale-[0.99]"
          >
            Sign In →
          </button>

          {message && (
            <p
              role="status"
              className="text-center text-sm text-cyan-300"
            >
              {message}
            </p>
          )}
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <a
            href="#signup"
            onClick={(event) => {
              event.preventDefault()
              setMessage('Connect your registration page here.')
            }}
            className="font-semibold text-violet-300 transition-colors duration-300 hover:text-cyan-300"
          >
            Sign up
          </a>
        </p>
      </section>

      <p className="pointer-events-none absolute bottom-3 z-10 text-center text-xs text-slate-500">
        Powered by React & Tailwind CSS
      </p>
    </main>
  )
}
