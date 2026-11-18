import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MINI_PLAYERS = [
  { id: "MiniPlayer 01", source: "" },
  { id: "MiniPlayer 02", source: "" },
  { id: "MiniPlayer 03", source: "" },
  { id: "MiniPlayer 04", source: "" },
  { id: "MiniPlayer 05", source: "" },
] as const;

const SLOT_LAYOUT = [
  "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  "lg:right-[7%] lg:top-[23%]",
  "lg:bottom-[1%] lg:right-[17%]",
  "lg:bottom-[1%] lg:left-[17%]",
  "lg:left-[7%] lg:top-[23%]",
];

export function MiniPlayerShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activePlayer = MINI_PLAYERS.find((player) => player.id === activeId);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activePlayer && !dialog.open) dialog.showModal();
    if (!activePlayer && dialog.open) dialog.close();
  }, [activePlayer]);

  return (
    <section aria-labelledby="motion-showcase-title" className="mt-28 border-t border-foreground/15 pt-12 md:mt-36 md:pt-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-primary">Motion showcase</p>
          <h3 id="motion-showcase-title" className="display mt-4 max-w-2xl text-4xl md:text-6xl">
            Work made to move.
          </h3>
        </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Five dedicated spaces for short-form work, ready for the original clips.
          </p>
      </div>

      <div className="relative mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:mx-auto lg:mt-16 lg:block lg:h-[760px] lg:max-w-[1120px]">
        {MINI_PLAYERS.map((player, index) => (
          <div
            key={player.id}
            className={`relative aspect-[4/5] overflow-hidden border border-foreground/15 bg-foreground text-background ${index === 4 ? "col-span-2 mx-auto w-1/2 sm:w-2/5" : ""} lg:absolute lg:aspect-[4/5] lg:w-[22%] lg:max-w-[235px] ${SLOT_LAYOUT[index]}`}
          >
            {player.source ? (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setActiveId(player.id)}
                aria-label={`Play ${player.id}`}
                className="group h-full w-full flex-col justify-between rounded-none p-0 text-background hover:bg-foreground"
              >
                <span aria-hidden="true" className="absolute inset-0 bg-foreground" />
                <span className="absolute inset-0 flex items-center justify-center bg-foreground/10 transition-colors group-hover:bg-foreground/30">
                  <span className="grid size-12 place-items-center border border-background/70 bg-foreground/50">
                    <Play aria-hidden="true" className="size-5 fill-current" />
                  </span>
                </span>
              </Button>
            ) : (
              <div className="flex h-full flex-col justify-between p-5 md:p-7" aria-label={`${player.id}, video not yet added`}>
                <p className="eyebrow text-background/60">TRU BLU / Motion</p>
                <div>
                  <p className="font-display text-4xl font-medium">0{index + 1}</p>
                  <p className="mt-3 text-sm text-background/75">{player.id}</p>
                  <div className="mt-5 border-t border-background/20 pt-3">
                    <p className="eyebrow text-orange">Awaiting original clip</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 lg:block" />
        <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-center font-serif text-2xl italic text-muted-foreground lg:block">
          Made with intent.
        </p>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={activePlayer?.id ?? "Video player"}
        onCancel={() => setActiveId(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveId(null);
        }}
        className="w-[min(92vw,900px)] max-w-none border border-border bg-background p-4 text-foreground backdrop:bg-foreground/85 md:p-6"
      >
        {activePlayer ? (
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="eyebrow">{activePlayer.id}</p>
              <Button type="button" variant="ghost" size="icon" aria-label="Close video" onClick={() => setActiveId(null)}>
                <X aria-hidden="true" />
              </Button>
            </div>
            <video
              className="max-h-[75vh] w-full bg-foreground"
              src={activePlayer.source}
              controls
              preload="metadata"
              playsInline
              aria-label={`${activePlayer.id} video`}
            />
          </div>
        ) : null}
      </dialog>
    </section>
  );
}