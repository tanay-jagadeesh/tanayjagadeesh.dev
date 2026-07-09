'use client';

import { useEffect, useState } from 'react';
import AsciiHeader from '@/components/AsciiHeader';

const FULL_NAME = 'Tanay Jagadeesh';

function TypedName() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [charCount, setCharCount] = useState(prefersReducedMotion ? FULL_NAME.length : 0);

  useEffect(() => {
    if (prefersReducedMotion || charCount >= FULL_NAME.length) return;
    const timeout = setTimeout(() => setCharCount((c) => c + 1), 70);
    return () => clearTimeout(timeout);
  }, [charCount, prefersReducedMotion]);

  return (
    <>
      {FULL_NAME.slice(0, charCount)}
      <span className="inline-block w-[3px] h-[0.85em] ml-1 -mb-[0.05em] bg-neutral-800 align-middle animate-[blink_1s_step-end_infinite]" />
    </>
  );
}

const highlightColors = {
  yellow: 'bg-[#fde68a] text-[#713f12]',
  teal: 'bg-[#99f0dc] text-[#0f4f42]',
  red: 'bg-[#fecdd3] text-[#7f1d2e]',
  green: 'bg-[#bbf0a0] text-[#2c4a17]',
} as const;

function Highlight({
  children,
  color,
}: {
  children: React.ReactNode;
  color: keyof typeof highlightColors;
}) {
  return (
    <span
      className={`px-2 py-0.5 rounded-full font-sans text-[0.88em] font-medium tracking-tight transition-transform duration-150 ease-out hover:-translate-y-px ${highlightColors[color]}`}
    >
      {children}
    </span>
  );
}

function Logo({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="inline-flex items-center justify-center w-[1.5em] h-[1.5em] rounded-[4px] bg-neutral-200 text-neutral-600 text-[0.55em] font-sans font-semibold align-middle -translate-y-[0.05em]">
        {initials}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="inline-block w-[1.5em] h-[1.5em] object-contain align-middle -translate-y-[0.1em]"
      onError={() => setFailed(true)}
    />
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.047.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const links = [
  { label: 'Email', href: 'mailto:tanayj2107@gmail.com', icon: <EmailIcon /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tanay-jagadeesh', icon: <LinkedInIcon /> },
  { label: 'GitHub', href: 'https://github.com/tanay-jagadeesh', icon: <GitHubIcon /> },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-neutral-900">
      <div className="max-w-xl mx-auto px-6 sm:px-12 py-20 md:py-28">
        <div className="fade-in mb-8 flex justify-center">
          <AsciiHeader />
        </div>

        <div className="fade-in flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/tanay.png"
            alt="Tanay Jagadeesh"
            className="shrink-0 w-24 h-24 rounded-full object-cover object-top ring-1 ring-black/5"
          />
          <h1 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            <TypedName />
          </h1>
        </div>

        <div
          className="fade-in mt-9 space-y-3 font-sans text-lg leading-[1.6] text-neutral-600"
          style={{ animationDelay: '0.1s' }}
        >
          <p className="flex flex-wrap items-center gap-2">
            <span>management engineering @</span>
            <span className="inline-flex items-center gap-1">
              <Logo src="/logos/waterloo.png" alt="University of Waterloo" initials="UW" />
              <Highlight color="yellow">University of Waterloo</Highlight>
            </span>
          </p>

          <p className="flex flex-wrap items-center gap-2">
            <span>data scientist @</span>
            <span className="inline-flex items-center gap-1">
              <Logo src="/logos/wsib.png" alt="WSIB" initials="WS" />
              <Highlight color="teal">WSIB</Highlight>
            </span>
          </p>

          <p className="flex flex-wrap items-center gap-2">
            <span>member of technical staff @</span>
            <span className="inline-flex items-center gap-1">
              <Logo src="/logos/wedge.png" alt="Wedge" initials="W" />
              <Highlight color="red">Wedge</Highlight>
            </span>
            <span className="text-neutral-400 text-base">(YC S25)</span>
          </p>
        </div>

        <div
          className="fade-in mt-7 space-y-2.5 font-mono text-sm leading-[1.6] text-neutral-500"
          style={{ animationDelay: '0.15s' }}
        >
          <p className="relative pl-5">
            <span className="absolute left-0 top-[0.1em] text-[0.85em] text-neutral-400">▸</span>
            <Highlight color="green">1st place overall</Highlight> at CXC, Canada&rsquo;s largest data
            &amp; AI hackathon
          </p>

          <p className="relative pl-5">
            <span className="absolute left-0 top-[0.1em] text-[0.85em] text-neutral-400">▸</span>
            building Sift-HQ, cutting CI/CD pipeline times
          </p>

          <p className="relative pl-5">
            <span className="absolute left-0 top-[0.1em] text-[0.85em] text-neutral-400">▸</span>
            avid leetcode grinder
          </p>
        </div>

        <div
          className="fade-in flex flex-wrap gap-2.5 mt-9"
          style={{ animationDelay: '0.2s' }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pl-4 pr-5 py-2 rounded-full font-sans text-sm font-medium leading-none border border-neutral-800 text-neutral-800 transition-all duration-200 ease-out hover:bg-neutral-800 hover:text-white hover:-translate-y-px"
            >
              <span className="inline-flex items-center justify-center w-4 h-4 shrink-0">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
