# 🧮 Máy Tính Đọc Kết Quả

Máy tính đọc kết quả bằng **tiếng Việt**, tối ưu cho điện thoại. Hỗ trợ cài đặt như ứng dụng (PWA).

🔗 **Demo:** [Xem trực tiếp trên GitHub Pages](https://your-username.github.io/may-tinh/)

---

## ✨ Tính năng

| Tính năng | Mô tả |
|-----------|-------|
| 🔊 Đọc kết quả | Tự động đọc kết quả bằng tiếng Việt sau khi nhấn `=` |
| 🔁 Đọc lại | Nhấn `=` lần 2 để nghe lại kết quả |
| 🎙 Chọn giọng | Chọn giọng đọc, tốc độ, cao độ, âm lượng |
| 📖 Chữ Việt | Hiển thị kết quả bằng chữ tiếng Việt dưới màn hình |
| 🕘 Lịch sử | Lưu lịch sử 200 phép tính gần nhất |
| 💰 Tiền tệ | Hiển thị đơn vị: đ, VNĐ, $ |
| 🔢 Làm tròn | Nhiều chế độ làm tròn, hỗ trợ "4 bỏ 6 lấy" hàng nghìn |
| 📳 Rung | Rung phản hồi mỗi lần nhấn phím |
| ⌨️ Bàn phím | Hỗ trợ nhập bằng bàn phím vật lý |
| 📱 PWA | Cài đặt như ứng dụng, hoạt động offline |

---

## 📱 Giao diện

- **Hàng nút cuối:** Phím `0` rộng gấp đôi (kiểu máy tính iOS)
- **Màn hình 3 vùng:**
  - Vùng A: Phép tính đang nhập
  - Vùng B: Kết quả số (lớn, rõ ràng)
  - Vùng C: Chữ Việt + sóng âm khi đọc

---

## 🚀 Dùng ngay

### Cách 1 – Mở trực tiếp
Tải file `index.html` về máy và mở bằng trình duyệt.

### Cách 2 – GitHub Pages
1. Fork repo này
2. Vào **Settings → Pages**
3. Chọn nhánh `main`, thư mục `/ (root)`
4. Truy cập `https://your-username.github.io/may-tinh/`

### Cách 3 – Cài như app (PWA)
Mở trang web trên điện thoại → trình duyệt sẽ hỏi **"Thêm vào màn hình chính"**.

---

## 📁 Cấu trúc thư mục

```
may-tinh/
├── index.html          ← File chính (toàn bộ app)
├── manifest.json       ← Cấu hình PWA
├── sw.js               ← Service Worker (offline)
├── favicon.ico         ← Icon tab trình duyệt
├── README.md           ← File này
└── icons/
    ├── icon.svg            ← Icon vector gốc
    ├── apple-touch-icon.png
    ├── icon-16x16.png
    ├── icon-32x32.png
    ├── icon-48x48.png
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-167x167.png
    ├── icon-180x180.png
    ├── icon-192x192.png
    ├── icon-256x256.png
    └── icon-512x512.png
```

---

## 🛠 Phím tắt bàn phím

| Phím | Chức năng |
|------|-----------|
| `0–9` | Nhập số |
| `+ - * /` | Toán tử |
| `. ,` | Dấu thập phân |
| `Enter` hoặc `=` | Tính kết quả / Đọc lại |
| `Backspace` | Xoá ký tự cuối |
| `Escape` | Xoá tất cả (AC) |

---

## 📜 Giấy phép

MIT License – Tự do sử dụng, chỉnh sửa và phân phối.
