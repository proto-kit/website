import React from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const GITHUB_URL = "https://github.com/proto-kit/starter-kit";

export const CallToAction = () => {
  return (
    <section className="container flex flex-col items-center gap-8 text-center rounded-lg bg-card p-6">
      <h2 className="text-[3rem] font-semibold bg-gradient-to-r from-yellow to-red bg-clip-text text-transparent">Start building on devnet</h2>
      <p className="leading-7 text-accent-foreground max-w-xl">
        Protokit is open-source and ready for you to explore. Dive into the starter-kit and build your
        first verifiable application - all available on GitHub.
      </p>
      <Button size="lg" asChild>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2"
        >
          <GithubIcon size={20} />
          <span>View on GitHub</span>
        </a>
      </Button>
    </section>
  );
};
