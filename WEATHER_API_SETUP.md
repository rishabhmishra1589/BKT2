# Real-Time Weather API Setup Guide
## ✅ Weather Already Working with Open-Meteo!

Your website now features **REAL-TIME WEATHER DATA** for all temple locations!

## 🎉 **GOOD NEWS: No Setup Required!**

Your website is now configured with **Open-Meteo API** which:
- ✅ **Works immediately** (no API key needed)
- ✅ **100% FREE forever** (unlimited calls)
- ✅ **No signup required**
- ✅ **Open-source and reliable**

**Just open your website and the weather will work!** See `WEATHER_FIXED.md` for details.

---

## 📖 **This Guide (Optional):**

If you want to switch to **OpenWeatherMap** (alternative API with more features), follow the guide below. Otherwise, you're all set!

---

## 🌤️ Features

✅ **Live Weather Data** for:
- **Badrinath Temple** (3,300 m altitude)
- **Kedarnath Temple** (3,583 m altitude)
- **Rishikesh** (Gateway city)
- **Dehradun** (BKTC Headquarters)

✅ **Weather Information Displayed:**
- Current temperature (°C)
- Weather condition (Clear, Cloudy, Rainy, Snowy, etc.)
- Humidity percentage
- Wind speed (km/h)
- Weather icon (emoji-based)

✅ **Auto-Refresh:**
- Updates every 10 minutes automatically
- Shows last update timestamp
- Header displays current Badrinath temperature

---

## 📝 Step 1: Get Your Free API Key

### Option A: OpenWeatherMap (Recommended - FREE)

1. **Go to OpenWeatherMap:**
   - Visit: https://openweathermap.org/api
   - Click **"Sign Up"** (top right)

2. **Create Account:**
   - Enter your details
   - Verify your email

3. **Get API Key:**
   - After login, go to: https://home.openweathermap.org/api_keys
   - Copy your **default API key** (looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)
   - OR click **"Generate"** to create a new one

4. **Pricing:**
   - **FREE tier:** 1,000 API calls/day (More than enough!)
   - Our website: ~4 locations × 6 updates/hour = 576 calls/day ✅

### Option B: WeatherAPI.com (Alternative)

1. Visit: https://www.weatherapi.com/
2. Sign up for free account
3. Copy API key from dashboard
4. **Note:** Requires code modification to use this API

---

## 🔧 Step 2: Add API Key to Your Website

### Method 1: Direct Edit (Quick & Easy)

1. **Open file:** `assets/js/main.js`

2. **Find this line** (around line 665):
   ```javascript
   API_KEY: 'YOUR_API_KEY_HERE',
   ```

3. **Replace** `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   API_KEY: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
   ```

4. **Save the file**

5. **Done!** Refresh your website to see live weather data

### Method 2: Using Find & Replace (Recommended)

#### Windows (VS Code / Notepad++):
1. Press `Ctrl + H` (Find & Replace)
2. **Find:** `YOUR_API_KEY_HERE`
3. **Replace with:** Your API key (paste it)
4. Click **Replace All**
5. Save file

#### Mac (VS Code / Sublime):
1. Press `Cmd + Option + F` (Find & Replace)
2. **Find:** `YOUR_API_KEY_HERE`
3. **Replace with:** Your API key (paste it)
4. Click **Replace All**
5. Save file

---

## ✅ Step 3: Test the Weather Feature

1. **Open your website** in a browser
2. **Go to Weather Section:**
   - Scroll to "Live Weather Updates" section
   - OR click "Weather" in header menu

3. **You should see:**
   - 4 weather widgets loading
   - After 1-2 seconds: Real temperature, icons, conditions
   - Humidity and wind speed for each location

4. **Check Header:**
   - Top yatra strip should show: "🌤️ 12°C" (or current temp)

---

## 🐛 Troubleshooting

### Problem: "Weather data unavailable" or "Check API key configuration"

**Solution 1: Verify API Key**
- Check if you replaced `YOUR_API_KEY_HERE` correctly
- Ensure no extra spaces or quotes
- API key should be exactly 32 characters

**Solution 2: Wait for Activation**
- New OpenWeatherMap API keys take **10-15 minutes** to activate
- Wait and refresh page

**Solution 3: Check Browser Console**
1. Press `F12` (open DevTools)
2. Click **Console** tab
3. Look for errors:
   - **401 Unauthorized:** Invalid API key
   - **429 Too Many Requests:** Exceeded free tier limit
   - **Network Error:** Internet connection issue

### Problem: Weather shows "Loading..." forever

**Solutions:**
- Check internet connection
- Verify API key is activated (wait 15 minutes after signup)
- Open browser console (F12) to see error messages
- Check if website is running on HTTPS (required for API calls on some hosts)

### Problem: Wrong temperature or location

**Solutions:**
- Coordinates are already set correctly:
  - Badrinath: 30.7433, 79.4938
  - Kedarnath: 30.7346, 79.0669
  - Rishikesh: 30.0869, 78.2676
  - Dehradun: 30.3165, 78.0322
- OpenWeatherMap uses nearest weather station
- Himalayan weather can vary by location

---

## 🎨 Customization Options

### Change Update Frequency

In `assets/js/main.js`, find (around line 806):
```javascript
// Update every 10 minutes (600000 ms)
setInterval(updateWeather, 600000);
```

**Options:**
- **5 minutes:** `300000`
- **15 minutes:** `900000`
- **30 minutes:** `1800000`

**Note:** More frequent = more API calls = closer to free tier limit

### Add More Locations

1. **Get coordinates:**
   - Visit: https://www.latlong.net/
   - Search for your location
   - Copy latitude and longitude

2. **Add new weather widget** in `index.html`:
```html
<div class="weather-widget scroll-reveal" data-location="guptkashi" data-lat="30.5272" data-lon="79.0809">
    <div class="weather-loading" style="display: block;">
        <div style="font-size: 2rem;">⏳</div>
        <p>Loading...</p>
    </div>
    <div class="weather-content" style="display: none;">
        <div class="weather-icon">🌤️</div>
        <div class="weather-temp">--°C</div>
        <div class="weather-location">Guptkashi</div>
        <div class="weather-description" style="margin-top: 0.5rem; font-size: 0.9rem;">--</div>
        <div class="weather-details" style="margin-top: 1rem; display: flex; justify-content: space-around; font-size: 0.85rem;">
            <span>💧 <span class="humidity">--</span>%</span>
            <span>💨 <span class="wind">--</span> km/h</span>
        </div>
    </div>
</div>
```

### Change Temperature Unit

In `assets/js/main.js`, find:
```javascript
UNITS: 'metric' // Celsius
```

**Options:**
- `'metric'` - Celsius (°C)
- `'imperial'` - Fahrenheit (°F)
- `'standard'` - Kelvin (K)

---

## 📊 API Usage & Limits

### Free Tier Limits:
- **1,000 calls/day** (OpenWeatherMap)
- **60 calls/minute**

### Our Usage:
- 4 locations
- Updated every 10 minutes
- = 4 × 6 updates/hour = **24 calls/hour**
- = **576 calls/day** ✅ Well within limit!

### Monitor Usage:
1. Login to: https://home.openweathermap.org/
2. Click **"Statistics"** or **"Usage"**
3. View daily API calls

---

## 🔒 Security Best Practices

### ⚠️ Important: API Key Security

Your current setup exposes the API key in client-side JavaScript. This is:
- ✅ **OKAY for OpenWeatherMap** (they expect client-side usage)
- ✅ **OKAY for FREE tier** (no payment risk)
- ⚠️ **NOT IDEAL** for production (can be seen by anyone)

### For Production (Advanced):

**Option 1: Use Environment Variables (Vercel/Netlify)**
1. Don't commit API key to Git
2. Set environment variable on hosting platform
3. Access via serverless function

**Option 2: Create Backend Proxy**
1. Create simple Node.js/PHP backend
2. Store API key on server
3. Website calls your backend, backend calls OpenWeatherMap

**Option 3: Domain Restriction**
1. Login to OpenWeatherMap
2. Go to API Keys
3. Click **"Edit"** on your key
4. Add **Application Restrictions** (your domain only)

---

## 🌐 Alternative Weather APIs

If you want to use a different weather service:

### 1. **WeatherAPI.com**
- Free: 1M calls/month
- URL: https://www.weatherapi.com/
- Easy to integrate

### 2. **Visual Crossing**
- Free: 1,000 calls/day
- Historical data available
- URL: https://www.visualcrossing.com/

### 3. **Tomorrow.io (formerly ClimaCell)**
- Free: 500 calls/day
- Advanced forecasting
- URL: https://www.tomorrow.io/

**Note:** Changing API requires code modifications in `main.js`

---

## 📱 Mobile & Performance

### Optimizations Already Implemented:
✅ **Debounced requests** (no duplicate calls)
✅ **Caching** (displays last data while fetching)
✅ **Async loading** (doesn't block page load)
✅ **Error handling** (shows fallback if API fails)
✅ **Auto-retry** (retries failed requests)

### Loading Speed:
- **First load:** 1-2 seconds
- **Subsequent updates:** Instant (background refresh)
- **No impact** on page load speed

---

## 📞 Support & Help

### OpenWeatherMap Resources:
- **Documentation:** https://openweathermap.org/api
- **FAQ:** https://openweathermap.org/faq
- **Support:** https://home.openweathermap.org/questions

### Common Questions:

**Q: Is it really free?**
A: Yes! Free tier: 1,000 calls/day forever. No credit card required.

**Q: Do I need to upgrade?**
A: No, unless you exceed 1,000 calls/day or need faster updates.

**Q: Can I use this commercially?**
A: Yes, OpenWeatherMap free tier allows commercial use.

**Q: What if I exceed the limit?**
A: API stops working until next day. No charges.

---

## ✅ Quick Checklist

Before going live:

- [ ] OpenWeatherMap account created
- [ ] API key copied
- [ ] API key added to `main.js` (replaced `YOUR_API_KEY_HERE`)
- [ ] File saved
- [ ] Website tested locally
- [ ] All 4 locations showing weather
- [ ] Header showing temperature
- [ ] No console errors (F12 to check)
- [ ] Waited 15 minutes for API activation (if new key)

---

## 🎉 Success!

Your temple website now has **REAL-TIME WEATHER** for all pilgrimage locations!

Pilgrims can now:
- ✅ Check current temperature before traveling
- ✅ See weather conditions (rain, snow, clear)
- ✅ Plan their visit with live data
- ✅ Get humidity and wind information

**Perfect for high-altitude temples like Kedarnath and Badrinath!** ⛰️🌤️

---

**🕉️ Jai Badrinath! Jai Kedarnath!**

---

**Last Updated:** November 20, 2024  
**API Used:** OpenWeatherMap v2.5  
**Status:** ✅ Ready for Production

