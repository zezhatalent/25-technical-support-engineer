import { motion } from 'framer-motion';
import Reveal from './lib/Reveal';
import { useInView } from './hooks/useMotion';
import { useTheme } from './components/ThemeProvider';

const logs = [
  { ts: '09:12', level: 'RESOLVED', msg: 'VPN outage — gateway reconfig', code: '#4821' },
  { ts: '10:45', level: 'RESOLVED', msg: 'Server RAID rebuild complete', code: '#1192' },
  { ts: '11:30', level: 'AUTO-FIX', msg: '40% tickets resolved by script', code: '#0071' },
  { ts: '13:05', level: 'RESOLVED', msg: 'Mail relay blacklist — delisted', code: '#3374' },
  { ts: '14:20', level: 'DOCS', msg: 'KB article #204 published', code: '#9602' },
];

export default function Syslog() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section id="logs" className="py-24" style={{ background: theme.surface }}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="font-mono text-3xl font-bold" style={{ color: theme.text }}>
            ~/tickets/resolved.log
          </h2>
          <p className="mt-2 font-mono text-sm" style={{ color: theme.muted }}>
            Fresh from the support console
          </p>
        </Reveal>
        <div ref={ref} className="mt-10 space-y-2 rounded-lg border p-5 font-mono text-sm" style={{ borderColor: theme.border, background: theme.bg }}>
          {logs.map((l, i) => (
            <motion.div
              key={l.code}
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2 }}
            >
              <span style={{ color: theme.muted }}>{l.ts}</span>
              <span className="w-24" style={{ color: l.level === 'RESOLVED' ? theme.accent : theme.accent2 }}>[{l.level}]</span>
              <span style={{ color: theme.text }}>{l.msg}</span>
              <span className="ml-auto" style={{ color: theme.muted }}>{l.code}</span>
            </motion.div>
          ))}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
          >
            <span style={{ color: theme.accent2 }}>$</span>
            <span style={{ color: theme.text }}>nc -w1 problem</span>
            <motion.span className="inline-block h-4 w-2" style={{ background: theme.accent }} animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
