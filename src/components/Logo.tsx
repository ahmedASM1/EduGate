import Image from 'next/image';

export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/EduGate.svg"
        alt="EduGate Logo"
        width={200}
        height={64}
        className="h-full w-auto"
        priority
      />
    </div>
  );
} 