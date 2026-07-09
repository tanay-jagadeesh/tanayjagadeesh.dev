const ASCII_NAME = `  _____                         _                   _            _
 |_   _|_ _ _ _  __ _ _  _   _ | |__ _ __ _ __ _ __| |___ ___ __| |_
   | |/ _\` | ' \\/ _\` | || | | || / _\` / _\` / _\` / _\`  / -_) -_|_-< ' \\
   |_|\\__,_|_||_\\__,_|\\_, |  \\__/\\__,_\\__, \\__,_\\__,_\\___\\___/__/_||_|
                      |__/            |___/                           `;

export default function AsciiHeader() {
  return (
    <div className="w-full max-w-full overflow-hidden flex justify-center">
      <pre className="font-mono text-[5.4px] xs:text-[7px] sm:text-[9px] md:text-[11px] leading-tight text-neutral-500 select-none whitespace-pre">
        {ASCII_NAME}
      </pre>
    </div>
  );
}
