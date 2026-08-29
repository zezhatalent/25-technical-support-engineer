import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useTypewriter } from './hooks/useTypewriter';

function Cursor() {
  const { theme } = useTheme();
  return (
    <motion.span
      className="inline-block h-4 w-2 align-middle"
      style={{ background: theme.accent }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  );
}

function StatusLine({ label, text, ok }: { label: string; text: string; ok: boolean }) {
  const { theme } = useTheme();
  return (
    <motion.div
      className="flex items-center gap-2 font-mono text-sm"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.6 }}
    >
      <span className="whitespace-pre text-[#26c6da]">$ </span>
      <span style={{ color: theme.text }}>{label}</span>
      <span style={{ color: '#26c6da' }}>{text}</span>
      <motion.span
        className="ml-2"
        style={{ color: ok ? theme.accent : '#ffb74d' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2 }}
      >
        {ok ? '[OK]' : '[IN PROGRESS]'}
      </motion.span>
    </motion.div>
  );
}

function TerminalWindow() {
  const { theme } = useTheme();
  const who = useTypewriter('whoami --full', 60, 300);
  return (
    <div
      className="w-full max-w-lg overflow-hidden rounded-lg"
      style={{ background: theme.surface, border: `1px solid ${theme.border}`, boxShadow: `0 0 30px ${theme.accent}20` }}
    >
      <div className="flex items-center gap-2 border-b px-4 py-2.5" style={{ borderColor: theme.border, background: theme.bg }}>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-[#7fa97f]">dev@compare: ~/support</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-sm">
        <div className="flex items-center gap-2">
          <span className="whitespace-pre text-[#26c6da]">$ </span>
          <span style={{ color: theme.text }}>{who.output}</span>
          {!who.done && <Cursor />}
        </div>
        {who.done && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ color: '#7fa97f' }}>
            Arjun Nair — Technical Support Engineer
          </motion.p>
        )}
        <div className="pt-2">
          <StatusLine label="netcheck --all" text=" " ok />
          <StatusLine label="gateway vpn" text=" " ok={false} />
          <StatusLine label="backups --verify" text=" " ok />
          <StatusLine label="uptime" text="99.9%" ok />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="hero" className="relative flex min-h-screen items-center" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(700px circle at 25% 30%, ${theme.accent}10, transparent)` }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            $ whoami · Technical Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 font-mono text-4xl font-bold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 font-mono text-xl"
            style={{ color: theme.accent2 }}
          >
            {content.role} · {content.tagline}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#skills"
              className="rounded px-7 py-3 font-mono font-semibold"
              style={{ background: theme.accent, color: '#06210f' }}
            >
              ./run_support
            </a>
            <a
              href="#contact"
              className="rounded border px-7 py-3 font-mono font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              ./open_ticket
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
