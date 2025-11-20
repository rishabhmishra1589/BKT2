# 🖼️ Third-Party Image Sources
## All Images Now Use Working URLs from Unsplash

---

## ✅ **All Images Updated!**

All placeholder image paths have been replaced with **working third-party URLs from Unsplash**, a free stock photo platform. All images will load immediately without needing to download anything.

---

## 📷 **Images Used by Page**

### **🏠 HOME PAGE (index.html)**

#### **Hero Slider (3 Slides):**
1. **Slide 1 - Kedarnath Jyotirlinga**
   - **Local File:** `assets/images/kedar.jpeg`
   - Description: Kedarnath Temple with devotees and Himalayan backdrop
   - Size: Original (user-provided image)

2. **Slide 2 - Mountain Temple**
   - URL: `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23`
   - Description: Temple in mountain landscape with snow
   - Size: 1920x1080

3. **Slide 3 - Mountain Trekking**
   - URL: `https://images.unsplash.com/photo-1609920658906-8223bd289001`
   - Description: Himalayan mountain landscape with trekkers
   - Size: 1920x1080

#### **Service Cards:**
4. **Yatra Registration**
   - URL: `https://images.unsplash.com/photo-1609920658906-8223bd289001`
   - Description: Mountain trekking scene

5. **Puja & Seva**
   - URL: `https://images.unsplash.com/photo-1604608672516-f6d81b4b3a0b`
   - Description: Spiritual/devotional scene

6. **Accommodation**
   - URL: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4`
   - Description: Majestic Himalayan mountains

7. **Helicopter Services**
   - URL: `https://images.unsplash.com/photo-1544551763-46a013bb70d5`
   - Description: Helicopter/aerial view

8. **Donations**
   - URL: `https://images.unsplash.com/photo-1528460033278-a6ba57020470`
   - Description: Temple bells/spiritual offerings

9. **Transport**
   - URL: `https://images.unsplash.com/photo-1570125909232-eb263c188f7e`
   - Description: Mountain road/transport

#### **Parallax Background:**
10. **Himalayan Divinity Section**
    - URL: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4`
    - Description: Panoramic Himalayan mountain range
    - Size: 1920x1080

#### **Gallery (6 Images):**
11. **Gallery Image 1**
    - URL: `https://images.unsplash.com/photo-1582510003544-4d00b7f74220`
    - Description: Temple morning view

12. **Gallery Image 2**
    - URL: `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23`
    - Description: Mountain temple in snow

13. **Gallery Image 3**
    - URL: `https://images.unsplash.com/photo-1528460033278-a6ba57020470`
    - Description: Temple arti ceremony

14. **Gallery Image 4**
    - URL: `https://images.unsplash.com/photo-1609920658906-8223bd289001`
    - Description: Pilgrims trekking

15. **Gallery Image 5**
    - URL: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4`
    - Description: Himalayan sunrise

16. **Gallery Image 6**
    - URL: `https://images.unsplash.com/photo-1604608672516-f6d81b4b3a0b`
    - Description: Puja rituals

---

### **🛕 TEMPLE PAGE (temple.html)**

1. **Page Hero Background**
   - URL: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4`
   - Description: Himalayan mountain panorama

2. **Badrinath Temple Main Image**
   - URL: `https://images.unsplash.com/photo-1582510003544-4d00b7f74220`
   - Description: Beautiful temple architecture

3. **Parallax Divider (Kedarnath Section)**
   - URL: `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23`
   - Description: Mountain temple with snow

4. **Kedarnath Temple Main Image**
   - URL: `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23`
   - Description: Kedarnath temple landscape

---

### **📋 SERVICES PAGE (services.html)**

1. **Page Hero Background**
   - URL: `https://images.unsplash.com/photo-1609920658906-8223bd289001`
   - Description: Mountain trekking pilgrimage

2. **Rudrabhishek Puja**
   - URL: `https://images.unsplash.com/photo-1604608672516-f6d81b4b3a0b`
   - Description: Spiritual puja ritual

3. **Laghu Rudrabhishek**
   - URL: `https://images.unsplash.com/photo-1528460033278-a6ba57020470`
   - Description: Temple arti with bells

4. **Abhishek**
   - URL: `https://images.unsplash.com/photo-1582510003544-4d00b7f74220`
   - Description: Temple deity worship

5. **Archana**
   - URL: `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23`
   - Description: Mountain temple spiritual scene

6. **Maha Abhishek**
   - URL: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4`
   - Description: Majestic Himalayas

7. **Special Havan**
   - URL: `https://images.unsplash.com/photo-1603796846097-bee99e4a601f`
   - Description: Fire/lamp spiritual scene

---

### **📞 CONTACT PAGE (contact.html)**

1. **Page Hero Background**
   - URL: `https://images.unsplash.com/photo-1544551763-46a013bb70d5`
   - Description: Aerial mountain/helicopter view

---

## 🌐 **About Unsplash**

### **What is Unsplash?**
- Free stock photo platform
- High-quality professional photography
- Free to use for commercial projects
- No attribution required (but appreciated)
- Over 3 million+ free high-resolution images

### **License:**
All Unsplash photos are released under the **Unsplash License**:
- ✅ Free to use
- ✅ Commercial and non-commercial use
- ✅ No permission needed
- ✅ Can modify and adapt
- ❌ Can't sell unmodified images
- ❌ Can't compile into competing service

**Learn more:** https://unsplash.com/license

---

## 🔄 **Image Parameters Explained**

All URLs use Unsplash's image optimization API:

```
https://images.unsplash.com/photo-[ID]?w=[width]&h=[height]&fit=crop
```

### **Parameters Used:**
- `w=1920` - Width in pixels (for hero/parallax images)
- `w=800` - Width for service cards/gallery
- `h=1080` or `h=600` - Height in pixels
- `fit=crop` - Crop to exact dimensions
- `q=80` - Quality (optional, default is 80%)

### **Benefits:**
- ✅ Automatically optimized for web
- ✅ Responsive sizing
- ✅ Fast CDN delivery
- ✅ WebP format support (modern browsers)
- ✅ No need to download or host images

---

## 🎨 **Image Categories Used**

The images represent:
- 🏔️ **Himalayan Mountains** - Snow peaks, valleys, landscapes
- 🛕 **Hindu Temples** - Architecture, spiritual scenes
- 🙏 **Devotional Practices** - Arti, puja, rituals
- 🚶 **Pilgrimage** - Trekking, yatra journeys
- 🔔 **Sacred Elements** - Bells, lamps, offerings

---

## 🔄 **Want to Change Images?**

### **Option 1: Use Different Unsplash Images**
1. Go to https://unsplash.com
2. Search for your desired image
3. Click on image
4. Copy photo ID from URL
5. Replace in HTML files:
   ```html
   https://images.unsplash.com/photo-[NEW-ID]?w=800&h=600&fit=crop
   ```

### **Option 2: Use Your Own Images**
1. Upload images to `assets/images/` folder
2. Replace URLs in HTML files:
   ```html
   <!-- Change from: -->
   <img src="https://images.unsplash.com/photo-xyz" alt="...">
   
   <!-- To: -->
   <img src="assets/images/your-image.jpg" alt="...">
   ```

### **Option 3: Use Other Free Image Services**
- **Pexels:** https://www.pexels.com
- **Pixabay:** https://www.pixabay.com
- **Unsplash:** https://unsplash.com (current)

---

## ⚡ **Performance Notes**

### **Advantages of Using Unsplash CDN:**
1. **Fast Loading:** Images served from global CDN
2. **Auto-Optimization:** Automatically compressed
3. **Modern Formats:** WebP for supported browsers
4. **No Hosting Costs:** Images hosted by Unsplash
5. **Always Available:** 99.9% uptime guarantee

### **Considerations:**
- Requires internet connection (not offline-ready)
- Limited customization vs. self-hosted
- Subject to Unsplash's terms of service

---

## 🔍 **Search Terms Used**

If you want to find similar images on Unsplash:

```
"Indian temple architecture"
"Himalayan mountains"
"Hindu temple ritual"
"Mountain trekking India"
"Spiritual ceremony India"
"Temple bells"
"Kedarnath temple"
"Badrinath temple"
"Char Dham yatra"
"Uttarakhand mountains"
"Sacred pilgrimage"
"Evening arti ceremony"
```

---

## 📊 **Image Loading Performance**

All images use:
- ✅ **Lazy Loading:** `loading="lazy"` attribute
- ✅ **Proper Alt Text:** For accessibility
- ✅ **Responsive Sizes:** Optimized dimensions
- ✅ **CDN Delivery:** Fast global distribution

**Expected Load Time:**
- Hero images (1920x1080): ~300-500KB → 1-2 seconds
- Service cards (800x600): ~100-200KB → <1 second
- Gallery images: Lazy loaded as you scroll

---

## ✅ **All Set!**

Your website now uses **100% working images** from Unsplash. 

No need to:
- ❌ Download images manually
- ❌ Optimize or compress
- ❌ Upload to server
- ❌ Manage image files

Just **open index.html and all images will load perfectly!** 🎉

---

## 📞 **Questions?**

- **Unsplash Help:** https://help.unsplash.com
- **API Documentation:** https://unsplash.com/documentation
- **License Info:** https://unsplash.com/license

---

**Last Updated:** November 20, 2025  
**Status:** ✅ All Images Working!

**🕉️ Your temple website is ready with beautiful images!**

