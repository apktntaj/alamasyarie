import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const databasePath = resolve(rootDir, process.env.SQLITE_PATH ?? "data/orders.db");
const rawTable = process.argv[2] ?? "";
const table = rawTable.trim().replace(/^\{(.+)\}$/, "$1").toLowerCase();

if (table !== "orders") {
  console.error("Penggunaan: /sqshow orders");
  console.error("Tabel yang tersedia: orders");
  process.exitCode = 1;
} else if (!existsSync(databasePath)) {
  console.error(`Database tidak ditemukan: ${databasePath}`);
  console.error("Jalankan `npm run db:init` terlebih dahulu.");
  process.exitCode = 1;
} else {
  const database = new DatabaseSync(databasePath, { readOnly: true });

  try {
    const rows = database.prepare(`
      SELECT
        id,
        tanggal_pemesanan,
        tanggal_pengambilan,
        jenis_paket,
        qty,
        harga_paket,
        total,
        uang_muka,
        ongkir,
        ongbal,
        total - uang_muka AS sisa_pembayaran
      FROM orders
      ORDER BY id DESC
      LIMIT 50
    `).all();

    if (rows.length === 0) {
      console.log("Belum ada data orderan.");
    } else {
      const rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      });

      const output = rows.map((row) => [
        `Order #${row.id}`,
        `Tanggal pemesanan : ${row.tanggal_pemesanan}`,
        `Tanggal pengambilan: ${row.tanggal_pengambilan}`,
        `Jenis paket        : ${row.jenis_paket}`,
        `Qty                 : ${row.qty}`,
        `Harga paket        : ${rupiah.format(row.harga_paket)}`,
        `Total               : ${rupiah.format(row.total)}`,
        `Uang muka           : ${rupiah.format(row.uang_muka)}`,
        `Ongkir              : ${rupiah.format(row.ongkir)}`,
        `Ongbal              : ${rupiah.format(row.ongbal)}`,
        `Sisa pembayaran     : ${rupiah.format(row.sisa_pembayaran)}`,
      ].join("\n"));

      console.log(`Data orders (${rows.length} baris, maksimal 50)\n`);
      console.log(output.join("\n\n────────────────────────\n\n"));
    }
  } finally {
    database.close();
  }
}
