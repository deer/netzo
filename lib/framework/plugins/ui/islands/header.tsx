import type { NetzoConfig } from "../../../../framework/mod.ts";
import { cn } from "../../../../components/utils.ts";
import { ThemeToggle } from "../../../../components/ui/theme-toggle.tsx";
import { HeaderAuth } from "./header.auth.tsx";

export function Header({ className, ...props }: NetzoConfig["ui"]["header"]) {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-4 py-4 space-y-2 bg-[hsl(var(--background))]",
        className,
      )}
    >
      <div className="flex items-center">
        {props.children}

        {/* NOTE: use dark:filter-invert to invert color on dark */}
        {props?.image && (
          <img
            src={props?.image}
            class="w-auto h-10 my-auto mr-4"
          />
        )}
        <div>
          {props?.title && (
            <h1 className="text-2xl font-bold tracking-tight">
              {props?.title}
            </h1>
          )}
          {props?.description && (
            <p className="text-sm text-muted-foreground">
              {props?.description}
            </p>
          )}
        </div>
      </div>

      {/* CENTER CONTENT HERE */}

      {/* RIGHT CONTENT HERE */}
      <div className="flex items-center h-full gap-4">
        <ThemeToggle />
        {props.sessionUser && (
          <HeaderAuth f-client-nav={false} sessionUser={props.sessionUser} />
        )}
      </div>
    </header>
  );
}
