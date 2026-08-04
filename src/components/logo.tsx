import { clsx } from "clsx";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col leading-none">
      <span
        className={clsx(
          "font-[family-name:var(--font-serif-display)] text-3xl tracking-tight",
          light ? "text-sand-50" : "text-ink-900",
        )}
      >
        AMA<span className="text-clay-500">.</span>
      </span>
      <span
        className={clsx(
          "-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em]",
          light ? "text-sand-300" : "text-ink-400",
        )}
      >
        Lomé, Togo
      </span>
    </div>
  );
}
