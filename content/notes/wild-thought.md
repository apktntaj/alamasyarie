---
title: "A wandering mind"
date: "2026-08-05"
excerpt: "Sebuah catatan saat termenung"
---

<!-- 05/08/2024 -->
Rasanya pembeda antara imperatif dan functional terletak pada variabel yang bermutasi. Imperatif secara gamblang melakukan statement perubahan langsung pada data. Sedangkan functional tidak ada variabel yang berubah selama runtime, yang ada hanya transformasi melalui fungsi. 

Itu juga kenapa diksi yang dipilih oleh bahasa C dan turunannya adalah `var` atau variabel. Karena sifat yang dikehendaki memang berubah selama runtime.

Berbeda dengan functional yang menggunakan `define`. Atau jangan-jangan ga apple-to-apple. Apa `define` itu padanannya adalah `static` kalau di imperative?

```go
x := 1
x = x + 1
x = x + 1 // hasilnya 3
```

```javascript
const inc = x => x + 1
inc(inc(1)) // hasilnya juga tiga
```
