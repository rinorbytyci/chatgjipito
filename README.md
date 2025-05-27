# Chatgjipito 🇦🇱

Një asistent AI që flet shqip dhe ndihmon me pyetjet tuaja. Bazuar në Google Generative AI dhe ideuar nga Logjikonomia

**An Albanian-themed ChatGPT-like interface using Google Generative AI**

![Albanian Flag Colors](https://img.shields.io/badge/Colors-Red%20%26%20Black-red?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-cyan?style=flat-square&logo=tailwindcss)

## ✨ Veçoritë / Features

- 🇦🇱 **Albanian Theme**: Beautiful Albanian flag-inspired design with red, black, and gold colors
- 🤖 **Google AI Integration**: Powered by Google's Generative AI (Gemini Pro)
- 💬 **Real-time Chat**: Instant responses with smooth animations
- 🎨 **Modern UI**: Built with Tailwind CSS and Framer Motion
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🌟 **Custom Prompts**: Configurable system prompts in Albanian
- 🖼️ **Random Avatars**: Each AI response uses a different Albanian-themed avatar
- ⚡ **Fast Performance**: Built with Next.js 14 and TypeScript

## 🚀 Si të filloni / Getting Started

### Parakushtet / Prerequisites

- Node.js 18+ 
- npm ose yarn
- Google AI API Key (nga [Google AI Studio](https://makersuite.google.com/app/apikey))

### Instalimi / Installation

1. **Klononi projektin / Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chatgjipito.git
   cd chatgjipito
   ```

2. **Instaloni varësitë / Install dependencies**
   ```bash
   npm install
   ```

3. **Konfiguroni variablat e mjedisit / Configure environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Hapni `.env.local` dhe shtoni:
   ```env
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. **Shtoni avatarët (opsionale) / Add avatar images (optional)**
   Vendosni 6 imazhe në dosjen `public/assets/avatars/` me emrat:
   ```
   1.jpg
   2.jpg
   3.jpg
   4.jpg
   5.jpg
   6.jpg
   ```

5. **Startoni aplikacionin / Start the application**
   ```bash
   npm run dev
   ```

6. **Hapni shfletuesin / Open your browser**
   
   Shkoni te [http://localhost:3000](http://localhost:3000)

## 🔧 Konfigurimi / Configuration

### Google AI API Key

1. Shkoni te [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Krijoni një API key të ri
3. Kopjoni dhe vendosni në `.env.local`

### Avatar Images

Mund të personalizoni avatarët duke zëvendësuar imazhet në `public/assets/avatars/`:
- Përdorni imazhe katrore (1:1) të madhësisë të paktën 256x256px
- Emërtoni ato nga 1.jpg deri në 6.jpg
- Imazhe me tematikë shqiptare do të përmirësojnë përvojën

## 🏗️ Arkitektura / Architecture

```
chatgjipito/
├── app/                    # Next.js App Router
│   ├── api/chat/          # Chat API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── chatgjipito-interface.tsx
├── lib/                  # Utility libraries
│   ├── google-ai.ts     # Google AI service
│   └── utils.ts         # General utilities
├── public/               # Static assets
│   └── assets/
│       └── avatars/     # AI avatar images (1.jpg through 6.jpg)
```

## 🎨 Tema Shqiptare / Albanian Theme

Aplikacioni përdor ngjyrat dhe motivet shqiptare:

- **🔴 E kuqe**: Ngjyra kryesore (Albanian Red - #dc2626)
- **⚫ E zezë**: Sfondi (Albanian Black - #0f0f0f)  
- **🟡 Ari**: Theksimet (Albanian Gold - #fbbf24)
- **🦅 Shqiponja**: Motivi dekorativ
- **🖼️ Avatarët**: Çdo përgjigje e AI-së përdor një avatar të ndryshëm me temë shqiptare

## 📱 Përdorimi / Usage

1. **Dërgoni një mesazh**: Shkruani pyetjen tuaj dhe shtypni Enter
2. **Kopjoni përgjigjen**: Klikoni butonin e kopjimit pranë përgjigjes
3. **Rigjeneroni**: Klikoni butonin e rigjenerimit për përgjigje të re

### Komanda të shkurtë / Keyboard Shortcuts

- `Enter`: Dërgo mesazhin
- `Shift + Enter`: Linjë e re
- `Ctrl/Cmd + C`: Kopjo tekstin e selektuar

## 🔄 API Endpoints

### POST /api/chat

Dërgo një mesazh tek AI-ja.

**Request Body:**
```json
{
  "message": "Përshëndetje!",
  "chatHistory": []
}
```

**Response:**
```json
{
  "response": "Përshëndetje! Si mund t'ju ndihmoj?"
}
```

### GET /api/chat

Kontrollo statusin e API-së.

**Response:**
```json
{
  "message": "Chatgjipito API është aktiv",
  "status": "online", 
  "version": "1.0.0"
}
```

## 🛠️ Zhvillimi / Development

### Script-et e disponueshme / Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Kontributi / Contributing

1. Fork projektin
2. Krijoni një branch (`git checkout -b feature/AmazingFeature`)
3. Commit ndryshimet (`git commit -m 'Add some AmazingFeature'`)
4. Push në branch (`git push origin feature/AmazingFeature`)
5. Hapni një Pull Request

## 📄 Licenca / License

Ky projekt është i licensuar nën MIT License - shihni [LICENSE](LICENSE) file për detaje.

## 🙏 Falënderime / Acknowledgments

- [Google AI](https://ai.google.dev/) për API-në e shkëlqyer
- [Next.js](https://nextjs.org/) për framework-un
- [Tailwind CSS](https://tailwindcss.com/) për styling
- [Framer Motion](https://www.framer.com/motion/) për animacionet
- [21st.dev](https://21st.dev/) për inspirimin e komponentëve

## 🐛 Raportoni probleme / Report Issues

Nëse gjeni ndonjë problem, ju lutem [krijoni një issue](https://github.com/yourusername/chatgjipito/issues).

## 📞 Kontakt / Contact

- Email: your.email@example.com
- Website: [chatgjipito.com](https://chatgjipito.com)

---

**Bërë me ❤️ për komunitetin shqiptar / Made with ❤️ for the Albanian community** 