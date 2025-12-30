# Logo ve Resim Ekleme Rehberi

## 📸 1. Profil Fotoğrafınız

### Nereye:
- **Konum:** `/home/okanarif/repositories/personalWebPage/profile.jpg`

### Nasıl:
```bash
# Fotoğrafınızı kopyalayın
cp /yol/to/sizin/fotograf.jpg /home/okanarif/repositories/personalWebPage/profile.jpg
```

### Özellikler:
- **Format:** JPG, PNG veya WebP
- **Boyut:** 500x500 piksel veya daha büyük (kare format önerilir)
- **Tip:** Profesyonel çekim veya biometrik tarzı
- **Kullanıldığı Yerler:** 
  - Home sayfası (büyük, merkezi)
  - About Me sayfası (orta boy, sol üstte)

---

## 🏢 2. Şirket ve Organizasyon Logoları

### Logos Klasörü:
Tüm logolar `/home/okanarif/repositories/personalWebPage/logos/` klasörüne gitmeli.

### Gerekli Logolar:

#### ✅ Quantum Systems
- **Dosya adı:** `quantum-systems-logo.png`
- **Boyut:** Genişlik: 200-400px, yükseklik orantılı
- **Format:** PNG (şeffaf arka plan tercih edilir)
- **Nerede kullanılıyor:** Experience > Working Experience

```bash
cp /yol/to/quantum-systems-logo.png /home/okanarif/repositories/personalWebPage/logos/quantum-systems-logo.png
```

#### ✅ ASELSAN
- **Dosya adı:** `aselsan-logo.png`
- **Boyut:** Genişlik: 200-400px, yükseklik orantılı
- **Format:** PNG (şeffaf arka plan tercih edilir)
- **Nerede kullanılıyor:** Experience > Working Experience

```bash
cp /yol/to/aselsan-logo.png /home/okanarif/repositories/personalWebPage/logos/aselsan-logo.png
```

#### ✅ Sabancı University Robotic Club (SURK)
- **Dosya adı:** `surk-logo.png`
- **Boyut:** Genişlik: 200-400px, yükseklik orantılı
- **Format:** PNG (şeffaf arka plan tercih edilir)
- **Nerede kullanılıyor:** Experience > Voluntary Experience

```bash
cp /yol/to/surk-logo.png /home/okanarif/repositories/personalWebPage/logos/surk-logo.png
```

#### ✅ Sabancı Motorsports
- **Dosya adı:** `sabanci-motorsports-logo.png`
- **Boyut:** Genişlik: 200-400px, yükseklik orantılı
- **Format:** PNG (şeffaf arka plan tercih edilir)
- **Nerede kullanılıyor:** Experience > Voluntary Experience

```bash
cp /yol/to/sabanci-motorsports-logo.png /home/okanarif/repositories/personalWebPage/logos/sabanci-motorsports-logo.png
```

#### ✅ Sabancı Aerospace Team
- **Dosya adı:** `sabanci-aerospace-logo.png`
- **Boyut:** Genişlik: 200-400px, yükseklik orantılı
- **Format:** PNG (şeffaf arka plan tercih edilir)
- **Nerede kullanılıyor:** Experience > Voluntary Experience

```bash
cp /yol/to/sabanci-aerospace-logo.png /home/okanarif/repositories/personalWebPage/logos/sabanci-aerospace-logo.png
```

---

## 📝 Not:

### Sabancı University ve TUM Logoları
Bu logolar zaten Wikipedia'dan çekildiği için eklemenize gerek yok:
- ✅ **TUM Logo:** Otomatik yükleniyor
- ✅ **Sabancı University Logo:** Otomatik yükleniyor

**Kullanıldığı yerler:**
- About Me > Education
- Experience > Teaching Experience (Sabancı)
- Taken Courses (her iki logo da)

---

## 🎨 Logo Boyutlandırma İpuçları

Logoları hazırlarken:

1. **Şeffaf Arka Plan:** PNG formatı kullanın
2. **Yüksek Çözünürlük:** Minimum 200px genişlik
3. **Oran:** Orijinal oranı koruyun (bozulmayı önlemek için)
4. **Renk:** Koyu tema üzerinde görünür renkler (açık renkli logolar tercih edilir)

### Örnek Boyutlandırma (ImageMagick ile):
```bash
# Logo boyutunu ayarlama
convert input-logo.png -resize 300x -background none output-logo.png

# Şeffaf arka plan ekleme
convert input-logo.png -background none -alpha set output-logo.png
```

---

## ✅ Kontrol Listesi

Web sitenizin tam olarak çalışması için:

- [ ] **profile.jpg** - Profil fotoğrafınız
- [ ] **logos/quantum-systems-logo.png** - Quantum Systems logosu
- [ ] **logos/aselsan-logo.png** - ASELSAN logosu
- [ ] **logos/surk-logo.png** - SURK logosu
- [ ] **logos/sabanci-motorsports-logo.png** - Sabancı Motorsports logosu
- [ ] **logos/sabanci-aerospace-logo.png** - Sabancı Aerospace logosu

---

## 🚀 Hızlı Kurulum

Tüm resimleri bir klasörde topladıysanız:

```bash
# Profil fotoğrafı
cp /yol/to/resimler/profile.jpg /home/okanarif/repositories/personalWebPage/

# Tüm logoları kopyala
cp /yol/to/resimler/quantum-systems-logo.png /home/okanarif/repositories/personalWebPage/logos/
cp /yol/to/resimler/aselsan-logo.png /home/okanarif/repositories/personalWebPage/logos/
cp /yol/to/resimler/surk-logo.png /home/okanarif/repositories/personalWebPage/logos/
cp /yol/to/resimler/sabanci-motorsports-logo.png /home/okanarif/repositories/personalWebPage/logos/
cp /yol/to/resimler/sabanci-aerospace-logo.png /home/okanarif/repositories/personalWebPage/logos/
```

---

## 🔍 Resimler Yüklenmezse

Eğer resimler yüklenmezse:

1. **Dosya adlarını kontrol edin** - Tam olarak yukarıdaki gibi olmalı
2. **Dosya izinlerini kontrol edin**:
   ```bash
   chmod 644 /home/okanarif/repositories/personalWebPage/profile.jpg
   chmod 644 /home/okanarif/repositories/personalWebPage/logos/*.png
   ```
3. **Tarayıcı önbelleğini temizleyin** (Ctrl+Shift+R veya Cmd+Shift+R)

---

## 💡 İpucu

Logoları bulamazsanız:
- Şirketlerin resmi web sitelerinden indirebilirsiniz
- Google Images'da "quantum systems logo png" araması yapabilirsiniz
- Şirketlere email atıp logo dosyası isteyebilirsiniz

**Şeffaf arka plan istiyorsanız:** PNG formatını tercih edin ve "transparent background" araması yapın.

