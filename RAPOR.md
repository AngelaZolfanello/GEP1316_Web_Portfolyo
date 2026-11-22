# Kişisel Web Portfolyosu — Süreç Raporu

## 1. Projenin Amacı ve Tasarım Kararları

Bu projenin amacı, Dijital Oyun Tasarımı eğitimim boyunca yaptığım çalışmaları ve mesleki ilgi alanlarımı tanıtan kişisel bir web portfolyosu oluşturmaktı. Portfolyoda kendimi tanıttığım ana sayfa, eğitimim ve hedeflerimi anlattığım hakkımda sayfası, önceki çalışmalarımı gösterdiğim projeler sayfası ve iletişim sayfası bulunmaktadır.

Tasarımda oyun geliştirme alanına uygun bulduğum koyu lacivert ve siyah ağırlıklı bir görünüm tercih ettim. Mor ve turkuaz renklerini vurgu amacıyla kullandım. Kullanıcının tercihine göre açık ve koyu tema arasında geçiş yapılabilmesini istedim. Açık temanın ilk arka plan rengini fazla parlak bulduğum için daha yumuşak bir turkuaz olan #ABDBD8 ile değiştirdim.

Sitenin telefon, tablet ve bilgisayarda kullanılabilmesine; sayfalar arasında kolay gezinmeye ve proje görsellerinin bozulmadan görüntülenmesine önem verdim. Portfolyoda tamamlamadığım projeleri varmış gibi göstermemek için yalnızca gerçekten yaptığım iki ders çalışmasını kullandım.


## 2. Geliştirme Süreci ve Kullanılan Teknolojiler

Portfolyoyu Visual Studio Code ortamında, GitHub Copilot'un Fusion Agent özelliğinden yardım alarak geliştirdim. HTML ile dört sayfanın yapısını, CSS ile ortak tasarımı ve duyarlı ekran düzenini, JavaScript ile kullanıcı etkileşimlerini oluşturdum.

JavaScript ile açık/koyu tema değiştirme, proje kategorilerini filtreleme, küçük ekranlarda açılıp kapanan gezinme menüsü ve iletişim formu doğrulaması özellikleri eklendi. Tema tercihi tarayıcının localStorage alanında tutulurken iletişim formuna girilen bilgiler gönderilmemekte veya saklanmamaktadır.

Projeler sayfasında Python ile geliştirdiğim 3B Varlık Üretim Takipçisi ve 3D Model Teknik Kalite Kontrol Algoritması çalışmalarına yer verdim. Bu projelerin ekran görüntülerini ekledim ve görsellerin farklı ekran boyutlarında oranlarını korumasını sağladım.

Geliştirme sırasında sayfaları tarayıcıda açarak özellikleri denedim. Brave geliştirici araçlarıyla 390×844, 844×390, 768×1024, 1024×768 ve 1440×900 çözünürlüklerinde ekran görüntüleri aldım. Ardından projeyi GitHub deposuna yükleyerek GitHub Pages üzerinden yayımladım.

Canlı site: https://angelazolfanello.github.io/GEP1316_Web_Portfolyo/


## 3. Yapay Zekâ Kullanım Günlüğü

Geliştirme sürecinde GitHub Copilot Fusion Agent kullandım. Aşağıdaki istemler, verdiğim talimatların özetidir. Üretilen kodu inceleyerek kabul ettim veya değişiklik istedim.

**İstem 1 — Site iskeleti:** Dört HTML sayfası, ortak CSS ve JavaScript dosyaları, README ve görsel klasörü oluşturmasını istedim. **Karar: Kabul.** Sayfaların temel yapısı oluşturuldu.

**İstem 2 — Tasarım ve duyarlılık:** Koyu temalı, mor ve turkuaz vurgulu, telefon ve tablet ekranlarına uyumlu bir tasarım istedim. **Karar: Kabul.** Ortak CSS, medya sorguları ve klavye odak stilleri eklendi.

**İstem 3 — Kişisel içerik:** Ana sayfa ve hakkımda sayfasına eğitimimi, kullandığım 3B araçları ve mesleki hedeflerimi eklemesini istedim. **Karar: Kabul.** İçerik gerçek bilgilerime göre düzenlendi.

**İstem 4 — Projeler:** Tamamladığım iki ders projesini açıklamaları, öğrenme çıktıları ve mevcut GitHub bağlantısıyla tanıtmasını istedim. **Karar: Kabul.** Gerçekte yapmadığım projeleri eklememeyi tercih ettim.

**İstem 5 — JavaScript etkileşimleri:** Tema değiştirme, proje filtreleme, mobil menü ve iletişim formu doğrulaması eklemesini istedim. **Karar: Değiştirerek kabul.** İşlevleri test ettim; açık tema arka planını fazla parlak bulduğum için sonradan #ABDBD8 olarak değiştirdim.

**İstem 6 — Proje görselleri:** İki projeye ait ekran görüntülerini, açıklayıcı alternatif metinlerle ve oranlarını koruyacak şekilde eklemesini istedim. **Karar: Kabul.** Görsel yer tutucuları gerçek ekran görüntüleriyle değiştirildi.

**İstem 7 — Mesleki bağlantılar:** ArtStation, LinkedIn ve itch.io bağlantılarımı uygun sayfalara eklemesini, dış bağlantıları güvenli açmasını istedim. **Karar: Kabul.** Bağlantılar eklendi ve kontrol edildi.

**İstem 8 — Eleştirel kod incelemesi:** Erişilebilirlik, gizlilik ve güvenlik sorunlarını bulmasını, ancak henüz dosyaları değiştirmemesini istedim. **Karar: İlk kodun güvenli olduğu** varsayımını reddettim. JavaScript kapalıyken form verilerinin URL'ye eklenebileceği tespit edildiği için mevcut çözümü yeterli bulmadım ve düzeltilmesini istedim.

**İstem 9 — Sorunları düzeltme:** Formun JavaScript olmadan veri göndermemesini ve e-posta doğrulamasının iyileştirilmesini istedim. **Karar: Test ederek kabul.** Değişikliklerden sonra hatalı ve geçerli e-posta örneklerini, JavaScript kapalıyken uyarı görünmesini ve URL'nin değişmemesini kendim test ettim.


## 4. Yapay Zekâ Kodunda Tespit Edilen Sorun ve Düzeltme

GitHub Copilot tarafından oluşturulan iletişim formunu gizlilik ve güvenlik açısından yeniden incelettim. İncelemede, JavaScript çalışmadığında formun varsayılan GET yöntemiyle kullanıcı bilgilerini URL'ye ekleyebileceği tespit edildi. Bu durum, formda bilgilerin gönderilmediğini belirten gizlilik açıklamasıyla çelişiyordu.

**Önceki kod (iletisim.html):**
```html
<form class="contact-form" autocomplete="off" novalidate>
  <input id="ad" name="ad" type="text">
  <input id="eposta" name="eposta" type="email">
  <textarea id="mesaj" name="mesaj"></textarea>
  <button type="submit">Doğrula</button>
</form>
```

**Düzeltilen kodun ilgili kısımları:**
```html
<input id="ad" type="text">
<input id="eposta" type="email">
<textarea id="mesaj"></textarea>
<button type="button">Doğrula</button>
```

Düzeltmede alanların `name` özellikleri kaldırıldı ve düğmenin türü `button` olarak değiştirildi. JavaScript doğrulaması düğmenin tıklanmasına bağlandı. Ayrıca JavaScript kapalı olduğunda kullanıcıyı bilgilendiren bir `noscript` açıklaması eklendi. Böylece formun veri göndermeyen bir doğrulama gösterimi olması sağlandı.

İkinci sorun, önceki e-posta kontrolünün `ece@site..com` gibi hatalı adresleri kabul edebilmesiydi. Copilot'un önerdiği yeni doğrulama işlevi, e-posta adresinin yerel kısmını ve alan adı bölümlerini ayrı ayrı kontrol edecek şekilde düzenlendi.

**Kendi testlerim:** `ece@site..com` için "Geçerli bir e-posta adresi girin." uyarısını aldım. `ece@example.com` için "Form doğrulandı; mesaj gönderilmedi." mesajı gösterildi. JavaScript'i kapattığımda bilgilendirme metni göründü; formu doldurup düğmeye ve Enter tuşuna bastığımda adres çubuğundaki URL değişmedi. Testlerden sonra JavaScript'i yeniden etkinleştirdim.

Bu süreçte yapay zekânın çalışan bir özellik üretmesinin, o özelliğin her koşulda gizlilik açısından güvenli olduğu anlamına gelmediğini öğrendim.


## 5. Testler ve Erişilebilirlik Kontrolü

### Ekran Boyutu Testleri

Portfolyonun farklı cihazlarda nasıl göründüğünü Brave tarayıcısının geliştirici araçlarıyla kontrol ettim. Ana sayfayı beş farklı ekran boyutunda görüntüleyerek ekran görüntülerini `test-ekran-goruntuleri` klasörüne kaydettim.

| Cihaz / Yön | Çözünürlük | Sonuç |
|---|---|---|
| Telefon (dikey) | 390 × 844 | Görünüm kontrol edildi; belirgin yerleşim sorunu görülmedi. |
| Telefon (yatay) | 844 × 390 | Görünüm kontrol edildi; belirgin yerleşim sorunu görülmedi. |
| Tablet (dikey) | 768 × 1024 | Görünüm kontrol edildi; belirgin yerleşim sorunu görülmedi. |
| Tablet (yatay) | 1024 × 768 | Görünüm kontrol edildi; belirgin yerleşim sorunu görülmedi. |
| Masaüstü | 1440 × 900 | Görünüm kontrol edildi; belirgin yerleşim sorunu görülmedi. |

### İşlev Testleri

- Açık/koyu tema geçişini denedim; seçtiğim açık tema renginin `#ABDBD8` olduğunu kontrol ettim.
- Proje filtrelerinin ve GitHub proje bağlantısının çalıştığını kontrol ettim.
- Telefon görünümünde açılır gezinme menüsünü denedim.
- İletişim formunda boş alanları, hatalı e-posta adresini (`ece@site..com`) ve geçerli e-posta adresini (`ece@example.com`) test ettim.
- JavaScript'i kapatarak formun uyarı gösterdiğini ve düğmeye veya Enter'a basıldığında URL'nin değişmediğini kontrol ettim.

### Erişilebilirlik ve Gizlilik Kontrol Listesi

- [x] Sayfalarda anlamlı HTML yapısı kullanıldı.
- [x] Proje görsellerine açıklayıcı `alt` metinleri eklendi.
- [x] Form alanları etiketlerle ilişkilendirildi.
- [x] Form hata mesajları erişilebilirlik özellikleriyle ilişkilendirildi.
- [x] Klavye odak stilleri tanımlandı.
- [x] Temel metin/arka plan renklerinin kontrastı Copilot tarafından hesaplanarak WCAG AA eşiğiyle karşılaştırıldı.
- [x] Dış bağlantılarda `rel="noopener noreferrer"` kullanıldı.
- [x] Formun gerçek veri göndermediği açıklandı ve JavaScript kapalıyken de gönderim yapmaması sağlandı.

Bu kontrol listesindeki kod ve kontrast incelemelerinin bir bölümü Copilot tarafından gerçekleştirildi. Form doğrulaması, JavaScript kapalıyken davranış ve ekran boyutu kontrollerini ise tarayıcıda kendim denedim.


## 6. Yansıtma (250–350 Kelime)

Dönemin başında kodlamayı kendi başıma öğrenmeye ve uygulamaya meraklıydım. Ancak yapay zekâ araçlarıyla çalışmaya başladıkça kod yazma sürecinin benim için biraz daha sıkıcı hâle geldiğini fark ettim. Kodları kendim oluşturmak yerine yapay zekâya komut verip sonuç beklemek, başlangıçtaki öğrenme isteğimi kısmen azalttı. Kodlama bilgimin yetersiz olması nedeniyle üretilen kodları bağımsız olarak değerlendirmekte zorlandım. Hatta bazen GitHub Copilot'a nasıl talimat vereceğimi belirlemek için ChatGPT veya Gemini gibi başka yapay zekâlardan yardım istemem gerekti. Bu durum, kendi problem çözme becerilerimi yeterince kullanıp kullanmadığımı sorgulamama neden oldu.

Yapay zekânın yeni nesil bir öğrenme aracı olabileceğini düşünüyorum. Özellikle fikir geliştirme, benzer çalışmaların üretim süreçlerini inceleme ve uygulamalı örnekler oluşturma konusunda faydalı buluyorum. Ancak üretken yapay zekânın sanat alanındaki kullanımına hâlâ karşıyım. Sanatsal üretimde kişisel emeğin, özgün tarzın ve yaratıcının esere kattığı ruhun önemli olduğuna inanıyorum. Örneğin manga ödevimde tek bir sayfayı çizmem yaklaşık yedi sekiz saat sürmesine rağmen bu sürecin yapay zekâyla görsel üretmekten daha verimli ve anlamlı olduğunu düşünüyorum.

Kodlama konusunda ise farklı bir bakış açısına sahibim. Bu ödevde iki yapay zekâ arasında köprü görevi üstlendiğimi hissettim. Kodlamanın belirli kurallara dayanan yapısı nedeniyle, proje fikrinin geliştirilmesinden sonraki birçok teknik aşamanın yapay zekâ tarafından otomatikleştirilebileceğini düşünüyorum. Buna rağmen kodlama eğitiminin gereksiz hâle geldiğine inanmıyorum. Aksine, bir uzmanın üretilen kodları anlayabilmesi, hataları hızlıca tespit edebilmesi ve istenmeyen sonuçlara doğrudan müdahale edebilmesi gerektiğini savunuyorum. İletişim formunda sonradan tespit ettiğimiz gizlilik sorunu da bunun önemini gösterdi.

Gelecekte portfolyomu hem 2B hem de 3B çalışmalarımı sergileyebileceğim şekilde geliştirmek istiyorum. İki alanda da üretim yaptığım için çalışmalarımı ayrı kategoriler altında düzenleyerek daha anlaşılır bir sunum oluşturmayı hedefliyorum. Ayrıca yapay zekâya tamamen bağımlı kalmadan kodun temel mantığını öğrenmek istiyorum.


## 7. Yapay Zekâ Kullanım Beyanı

### Öğrenci Yapay Zekâ Kullanım Beyan Formu

**Kullanılan yapay zekâ araçları:** GitHub Copilot (Fusion Agent), ChatGPT ve Google Gemini.

**Kullanım amaçları:**

- **GitHub Copilot:** Portfolyonun HTML, CSS ve JavaScript kodlarının oluşturulması, düzenlenmesi, erişilebilirlik ve güvenlik sorunlarının incelenmesi ve düzeltilmesi.
- **ChatGPT:** Geliştirme sürecinin planlanması, GitHub ve VS Code işlemlerinde yönlendirme, GitHub Copilot için istem hazırlanması ve rapor yazımına destek.
- **Google Gemini:** Portfolyonun ana sayfasında ve Hakkımda sayfasında kullanılan profil görselinin oluşturulması.

**Kontrol ve sorumluluk:** Yapay zekâ tarafından oluşturulan içerikleri inceleyip gerekli testleri gerçekleştirdim. Çalışmanın son hâlinden ve akademik dürüstlüğünden sorumlu olduğumu beyan ederim.

**Öğrenci:** Ece Dönmez

**Tarih:** 22.11.2026

**İmza:** ____________________


## 8. Kaynakça (APA 7)

GitHub. (t.y.). *GitHub Copilot* [Yapay zekâ destekli kodlama aracı]. 22 Kasım 2026 tarihinde https://github.com/features/copilot adresinden erişildi.

Google. (t.y.). *Gemini* [Üretken yapay zekâ aracı]. 22 Kasım 2026 tarihinde https://gemini.google.com/ adresinden erişildi.

OpenAI. (t.y.). *ChatGPT* [Yapay zekâ sohbet aracı]. 22 Kasım 2026 tarihinde https://chatgpt.com/ adresinden erişildi.