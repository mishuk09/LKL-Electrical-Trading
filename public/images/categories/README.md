# Product category photos

Add your category photos directly to this folder: `public/images/categories/`.
Use the filenames below. `.webp`, `.jpg`, `.jpeg`, and `.png` are supported (in that order if more than one exists).

| Category | Example filename |
| --- | --- |
| Pencuci & Pengering | `pencuci-pengering.webp` |
| Peralatan Dapur Besar | `peralatan-dapur-besar.webp` |
| Penyejuk & Pemanas | `penyejuk-pemanas.webp` |
| Keselamatan & Pengawasan | `keselamatan-pengawasan.webp` |
| Aksesori TV | `aksesori-tv.webp` |
| Peralatan Rumah Kecil | `peralatan-rumah-kecil.webp` |
| Penambahbaikan Rumah | `penambahbaikan-rumah.webp` |
| Alat Ganti Kereta | `alat-ganti-kereta.webp` |
| Aksesori Kamera | `aksesori-kamera.webp` |
| Baju | `baju.webp` |
| Bekalan Perumahan | `bekalan-perumahan.webp` |
| Bekalan Haiwan Peliharaan | `bekalan-haiwan-peliharaan.webp` |

Use lowercase filenames, ideally 600 x 400 pixels or larger. Images are contained rather than cropped, so the complete product remains visible.

The Products section shows a matching icon when a photo has not been added. Add a file and refresh in development; restart the dev server if it is cached. For production, rebuild/redeploy after adding photos because this page is prerendered.

The category names and store statistics live in `src/components/products.tsx`. Stats are from the supplied October 2026 reference, not a live Shopee feed. Category cards currently open the official store; replace those links when individual category URLs are available.
