PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tanggal_pemesanan TEXT NOT NULL
    CHECK (tanggal_pemesanan GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'),
  tanggal_pengambilan TEXT NOT NULL
    CHECK (tanggal_pengambilan GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]')
    CHECK (tanggal_pengambilan >= tanggal_pemesanan),
  jenis_paket TEXT NOT NULL CHECK (length(trim(jenis_paket)) > 0),
  qty INTEGER NOT NULL CHECK (qty > 0),
  harga_paket INTEGER NOT NULL CHECK (harga_paket >= 0),
  total INTEGER NOT NULL CHECK (total >= 0),
  uang_muka INTEGER NOT NULL DEFAULT 0 CHECK (uang_muka >= 0),
  ongkir INTEGER NOT NULL DEFAULT 0 CHECK (ongkir >= 0),
  ongbal INTEGER NOT NULL DEFAULT 0 CHECK (ongbal >= 0),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
) STRICT;

CREATE INDEX IF NOT EXISTS idx_orders_tanggal_pemesanan
  ON orders (tanggal_pemesanan);

CREATE INDEX IF NOT EXISTS idx_orders_tanggal_pengambilan
  ON orders (tanggal_pengambilan);

CREATE TRIGGER IF NOT EXISTS trg_orders_updated_at
AFTER UPDATE ON orders
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE orders
  SET updated_at = CURRENT_TIMESTAMP
  WHERE id = NEW.id;
END;
