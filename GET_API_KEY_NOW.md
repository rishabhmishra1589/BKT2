# GET YOUR FREE API KEY - STEP BY STEP

## 🚀 Quick Setup (5 Minutes)

### Step 1: Sign Up for OpenWeatherMap

1. **Open this link in browser:**
   ```
   https://home.openweathermap.org/users/sign_up
   ```

2. **Fill the form:**
   - Username: (choose any)
   - Email: your email
   - Password: (create password)
   - ✅ Check "I am 16 years old and over"
   - ✅ Check "I agree with Privacy Policy..."
   - ✅ Check reCAPTCHA

3. **Click "Create Account"**

4. **Check your email:**
   - Open verification email from OpenWeatherMap
   - Click verification link

### Step 2: Get Your API Key

1. **After email verification, you'll be redirected to:**
   ```
   https://home.openweathermap.org/
   ```

2. **Click "API keys" in the menu** (or go to: https://home.openweathermap.org/api_keys)

3. **You'll see a default API key already created!**
   - It looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`
   - Click the 📋 copy icon to copy it

4. **IMPORTANT: Wait 10-15 minutes**
   - New API keys take time to activate
   - Have coffee ☕ while waiting

### Step 3: Add API Key to Your Website

1. **Open file:** `assets/js/main.js`

2. **Find line 665** (search for: `YOUR_API_KEY_HERE`)

3. **You'll see:**
   ```javascript
   API_KEY: 'YOUR_API_KEY_HERE',
   ```

4. **Replace it with:**
   ```javascript
   API_KEY: 'paste_your_copied_key_here',
   ```
   
   Example:
   ```javascript
   API_KEY: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
   ```

5. **Save the file** (Ctrl+S or Cmd+S)

### Step 4: Test

1. **Open your website** in browser
2. **Go to weather section** (scroll down or click "Weather" in menu)
3. **Refresh page** (F5 or Ctrl+R)
4. **Wait 2-3 seconds** - Weather should load!

## ✅ Success Checklist

- [ ] OpenWeatherMap account created
- [ ] Email verified
- [ ] API key copied (32 characters)
- [ ] Waited 10-15 minutes for activation
- [ ] API key added to main.js (line 665)
- [ ] File saved
- [ ] Page refreshed
- [ ] Weather showing!

## ⚠️ Still Not Working?

### Check Browser Console:
1. Press **F12** (open DevTools)
2. Click **Console** tab
3. Refresh page (F5)
4. Look for errors:
   - **"401 Unauthorized"** → API key not activated yet (wait 15 min)
   - **"API_KEY_NOT_SET"** → You didn't replace YOUR_API_KEY_HERE
   - **"Network error"** → Check internet connection

### Common Mistakes:
❌ **Wrong:** `API_KEY: YOUR_API_KEY_HERE,` (no quotes)
❌ **Wrong:** `API_KEY: 'YOUR_API_KEY_HERE',` (not replaced)
❌ **Wrong:** `API_KEY: ' a1b2c3... ',` (extra spaces)
✅ **Right:** `API_KEY: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',`

## 🎉 Done!

Your website will now show:
- ✅ Live temperature for Badrinath, Kedarnath, Rishikesh, Dehradun
- ✅ Weather conditions (sunny, cloudy, rainy, snowy)
- ✅ Humidity and wind speed
- ✅ Auto-updates every 10 minutes

---

**Need Help?** Open browser console (F12) and share error messages.

