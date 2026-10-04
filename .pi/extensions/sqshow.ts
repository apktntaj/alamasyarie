import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { resolve } from "node:path";

function normalizeTable(value: string): string {
  return value.trim().replace(/^\{(.+)\}$/, "$1").toLowerCase();
}

export default function sqshowExtension(pi: ExtensionAPI) {
  pi.registerCommand("sqshow", {
    description: "Tampilkan data dari tabel SQLite (contoh: /sqshow orders)",
    getArgumentCompletions: (prefix) => {
      const table = "orders";
      return table.startsWith(prefix.trim().toLowerCase())
        ? [{ value: table, label: table, description: "Daftar orderan" }]
        : null;
    },
    handler: async (args, ctx) => {
      const table = normalizeTable(args);

      if (table !== "orders") {
        ctx.ui.notify("Penggunaan: /sqshow orders\nTabel yang tersedia: orders", "warning");
        return;
      }

      const scriptPath = resolve(ctx.cwd, "scripts/sqshow.mjs");

      try {
        const result = await pi.exec(process.execPath, [scriptPath, table], { timeout: 5000 });

        if (result.code !== 0) {
          const message = result.stderr.trim() || result.stdout.trim() || "Gagal membaca database.";
          ctx.ui.notify(message, "error");
          return;
        }

        ctx.ui.notify(result.stdout.trim(), "info");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        ctx.ui.notify(`Gagal membaca database: ${message}`, "error");
      }
    },
  });
}
