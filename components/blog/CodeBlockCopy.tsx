"use client";

import { useEffect } from "react";

export default function CodeBlockCopy() {
    useEffect(() => {
        const blocks = document.querySelectorAll("pre code");

        blocks.forEach((block) => {
            const pre = block.parentElement;
            if (!pre) return;

            if (pre.querySelector("button")) return;

            const button = document.createElement("button");
            button.innerText = "Copy";
            button.className =
                "absolute top-2 right-2 text-xs bg-black/70 text-white px-2 py-1 rounded opacity-80 hover:opacity-100";

            button.onclick = async () => {
                await navigator.clipboard.writeText(block.textContent || "");
                button.innerText = "Copied";
                setTimeout(() => (button.innerText = "Copy"), 1500);
            };

            pre.style.position = "relative";
            pre.appendChild(button);
        });
    }, []);

    return null;
}