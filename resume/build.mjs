// Renders resume/resume.html to public/Ashish-Sakthi-D-Resume.pdf with
// headless Chrome/Chromium. Usage:
//   node resume/build.mjs "<path to chrome.exe>"
// Edit resume.html, re-run, commit the PDF.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const chrome = process.argv[2];
if (!chrome) {
  console.error('usage: node resume/build.mjs "<path to chrome.exe>"');
  process.exit(1);
}
const src = pathToFileURL(resolve("resume/resume.html")).href;
const out = resolve("public/Ashish-Sakthi-D-Resume.pdf");
const port = 9400 + Math.floor(Math.random() * 400);

const proc = spawn(
  chrome,
  [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    "--no-first-run",
    `--user-data-dir=${mkdtempSync(join(tmpdir(), "resume-"))}`,
    "about:blank",
  ],
  { stdio: "ignore" }
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ws;
for (let i = 0; i < 60 && !ws; i++) {
  try {
    const pages = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    const page = pages.find((p) => p.type === "page");
    if (page) ws = new WebSocket(page.webSocketDebuggerUrl);
  } catch {
    /* browser still starting */
  }
  if (!ws) await sleep(250);
}
await new Promise((r) => ws.addEventListener("open", r));

let id = 0;
const pending = new Map();
ws.addEventListener("message", (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m);
    pending.delete(m.id);
  }
});
const send = (method, params = {}) =>
  new Promise((r) => {
    const i = ++id;
    pending.set(i, r);
    ws.send(JSON.stringify({ id: i, method, params }));
  });

await send("Page.enable");
await send("Page.navigate", { url: src });
await sleep(1500);
// wait for web fonts so the PDF embeds Geist, not a fallback
await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });
const overflow = await send("Runtime.evaluate", {
  expression: "document.body.scrollHeight > document.body.clientHeight + 1",
  returnByValue: true,
});

const pdf = await send("Page.printToPDF", {
  printBackground: true,
  preferCSSPageSize: true,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
});
const bytes = Buffer.from(pdf.result.data, "base64");
writeFileSync(out, bytes);
const pages = (bytes.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`wrote ${out} (${(bytes.length / 1024).toFixed(0)} KB, ${pages} page${pages === 1 ? "" : "s"})`);
if (overflow.result.result.value || pages !== 1) {
  console.warn("WARNING: content does not fit on one page");
  process.exitCode = 2;
}

ws.close();
proc.kill();
