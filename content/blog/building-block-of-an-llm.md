
# Building Blocks of an LLM: From Dancing Men to Next-Token Prediction

## 1. Language Model

**Language model adalah model yang mempelajari pola dan hubungan antar-token dalam bahasa berdasarkan distribusi statistik dari data teks.**

Secara sederhana, language model belajar menjawab pertanyaan:

> "Dengan melihat token-token sebelumnya, token apa yang paling mungkin muncul berikutnya?"

Contoh:

```text
The cat is sitting on the ...
```

Model mungkin menghasilkan probabilitas:

```text
mat      60%
floor    20%
chair     8%
table     5%
...
```

Secara sederhana:

```text
context
   ↓
language model
   ↓
probability distribution
   ↓
next token
```

---

## 2. Token

Model tidak bekerja langsung dengan "kata" seperti yang kita pahami sebagai manusia.

Teks terlebih dahulu dipecah menjadi **token**.

Satu token bisa berupa:

* satu kata
* sebagian kata
* tanda baca
* karakter tertentu
* kombinasi karakter lainnya

Tergantung tokenizer yang digunakan. Tokenizer adalah program yang memecah input menjadi token.

Contoh sederhana:

```text
makan
```

bisa saja menjadi:

```text
[makan]
```

Sedangkan:

```text
pelajaran
```

bisa saja menjadi:

```text
[pel][ajaran]
```

**Catatan:** pembagian sebenarnya bergantung pada tokenizer. Jadi jangan menganggap `pelajaran` pasti menjadi dua atau tiga token.

### Contoh sederhananya

Bayangkan bahasa adalah Lego.

Kita bisa membuat vocabulary berisi seluruh bentuk kata:

```text
ajar
belajar
pelajar
pelajaran
mempelajari
dipelajari
...
```

Tetapi ini membuat jumlah "batu Lego" yang harus disediakan menjadi sangat banyak.

Alternatifnya, kita menyediakan potongan-potongan yang dapat digunakan kembali:

```text
ajar
bel
pel
mem
di
an
i
...
```

Kemudian berbagai kata dapat dibangun dari kombinasi potongan tersebut.

Jadi tokenization pada dasarnya mencari **building blocks yang cukup kecil tetapi tetap berguna**.

---

## 3. Vocabulary

**Vocabulary adalah kumpulan token yang tersedia bagi model/tokenizer.**

Misalnya sebuah tokenizer mempunyai:

```text
50.000 unique tokens
```

maka vocabulary-nya berisi sekitar 50.000 token tersebut.

Ini berbeda dengan jumlah kata yang dapat ditulis oleh model.

Dengan 50.000 token, model dapat menghasilkan **jauh lebih banyak kemungkinan sequence**, karena token-token tersebut dapat dikombinasikan.

```text
Vocabulary
   ↓
[token A] [token B] [token C] ...
   ↓
kombinasi
   ↓
kata
   ↓
kalimat
   ↓
paragraf
   ↓
dokumen
```

Ini berkaitan dengan konsep **open-ended output**.

Vocabulary-nya finite, tetapi kombinasi token yang dapat dibuat sangat besar.

---

## 4. Mengapa Menggunakan Token, Bukan Seluruh Kata?

Salah satu alasannya adalah **efisiensi vocabulary dan kemampuan menangani kata yang belum pernah dilihat secara utuh**.

Misalnya jika setiap bentuk kata harus menjadi satu token:

```text
ajar
belajar
pelajar
pelajaran
mempelajari
dipelajari
pembelajaran
...
```

Model harus mempunyai token terpisah untuk setiap bentuk tersebut.

Dengan subword tokenization, banyak bentuk dapat dibangun dari token-token yang sama.

Misalnya secara ilustratif:

```text
belajar
pelajaran
mempelajari
```

dapat memiliki bagian yang saling digunakan kembali.

Keuntungannya:

> **Vocabulary dapat tetap relatif kecil, tetapi model masih dapat merepresentasikan jumlah kata yang sangat besar.**

---

## 5. Bagaimana Language Model Belajar?

Di sinilah **self-supervised learning** berperan.

Model diberikan teks:

```text
The cat sat on the mat.
```

Untuk autoregressive language model, teks tersebut dapat digunakan untuk membuat training task:

```text
Input:
The

Target:
cat
```

Lalu:

```text
Input:
The cat

Target:
sat
```

Lalu:

```text
Input:
The cat sat

Target:
on
```

Dan seterusnya.

Tidak perlu manusia memberi label satu per satu.

**Data itu sendiri menyediakan targetnya.**

Model membuat prediksi:

```text
The cat sat on the
                ↓
mat      20%
floor    50%
chair    10%
...
```

Kemudian dibandingkan dengan token sebenarnya:

```text
mat
```

Kesalahan tersebut digunakan untuk memperbarui **parameter model**.

---

## 6. Parameter

**Parameter adalah angka-angka internal yang menentukan bagaimana model mengubah input menjadi output probabilities.**

Gambaran sederhananya:

```text
Input tokens
     ↓
[ model parameters ]
     ↓
probability distribution
     ↓
next token
```

Training secara berulang melakukan:

```text
data
 ↓
prediction
 ↓
compare with target
 ↓
calculate error
 ↓
update parameters
 ↓
prediction menjadi lebih baik
```

Jadi:

> **Parameter menentukan bagaimana probabilitas output dihitung.**

Bukan parameter yang mengubah output setelah probabilitas keluar.

---

## 7. Masked vs Autoregressive Language Model

Ada dua pendekatan penting yang perlu dibedakan.

### Masked Language Model

Sebagian token disembunyikan:

```text
The cat [MASK] on the mat.
```

Model harus menebak:

```text
sat
```

Model dapat menggunakan **konteks di kiri dan kanan**.

Pendekatan ini terkenal dari model seperti BERT.

### Autoregressive Language Model

Model memprediksi token berikutnya berdasarkan token sebelumnya:

```text
The
 ↓
The cat
 ↓
The cat sat
 ↓
The cat sat on
 ↓
The cat sat on the
 ↓
The cat sat on the mat
```

GPT termasuk keluarga pendekatan ini.

---

## 8. Kenapa Sekarang Sering Terdengar "Language Model = Generative AI"?

Secara teknis, **tidak benar jika language model selalu berarti generative/autoregressive model**.

Masked language model juga merupakan language model.

Namun, ketika kita berbicara tentang model seperti GPT, kita sedang berbicara tentang model yang dapat **menghasilkan sequence baru secara autoregressive**.

Itulah sebabnya istilah:

> **Generative AI**

menjadi sangat populer.

Model tidak hanya melakukan:

```text
input → classification
```

tetapi dapat:

```text
input
 ↓
generate token
 ↓
generate token
 ↓
generate token
 ↓
...
 ↓
output yang open-ended
```

---

## 9. Analogi Dancing Men

Dalam *The Adventure of the Dancing Men*, Holmes melihat simbol-simbol yang awalnya tampak tidak bermakna:

```text
🕺 🕺 🕺 🕺 ...
```

Ia kemudian mengamati **pola, frekuensi, dan konteks** untuk menemukan sistem di balik simbol tersebut. Dalam bahasa inggris, huruf yang paling sering muncul adalah `e`. Ia lalu mencari simbol yang paling sering muncul dan menggantinya dengan huruf `e`. Setelah itu ia mencari simbol dengan sedikit karakter dan mencari relasinya dengan kata `I, of, a, an dll`. Lalu setelah itu ia mencari akhiran simbol yang sama dan mengasumsikan itu adalah `tion, ing, ed dll`. Setelah semua selesai akhirnya ia berhasil memecahkan arti dari simbol dancing men.

Ada kemiripan konseptual dengan language model:

```text
Dancing Men
simbol → pola → inferensi

Language Model
token → pola statistik → probabilitas token berikutnya
```

Tetapi jangan menyimpulkan bahwa LLM bekerja seperti Holmes secara harfiah.

**Holmes mencari makna dan aturan cipher secara eksplisit. LLM mempelajari parameter statistik dari pola yang terdapat dalam data.**

---

## 10. Mental Model

Secara keseluruhan:

```text
                DATA TEKS
                    ↓
               TOKENIZATION
                    ↓
                 TOKENS
                    ↓
          SELF-SUPERVISED LEARNING
                    ↓
              MODEL PARAMETERS
                    ↓
        belajar pola & hubungan statistik
                    ↓
             LANGUAGE MODEL
                    ↓
      "Apa token berikutnya yang mungkin?"
                    ↓
          PROBABILITY DISTRIBUTION
                    ↓
              NEXT TOKEN
                    ↓
          ulangi proses tersebut
                    ↓
          OPEN-ENDED OUTPUT
```

### Inti yang perlu diingat

> **LLM bukan sekadar database hubungan antar-kata.**

Lebih tepat membayangkannya sebagai:

> **fungsi matematika besar dengan parameter yang dipelajari dari data, yang menerima konteks token dan menghasilkan distribusi probabilitas token berikutnya.**

Mental model ini akan membantu ketika masuk ke topik berikutnya seperti:

* embeddings
* neural networks
* weights
* Transformer
* attention
* training
* inference
* context window
