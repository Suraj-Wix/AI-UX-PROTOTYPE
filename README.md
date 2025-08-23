# AI UI/UX Prototype — Frontend-Only (Next.js + Tailwind + Storybook)

A polished **frontend-only** prototype that blends the best patterns from leading AI UIs. Built with **Next.js + TypeScript (strict)**, **Tailwind**, **Framer Motion**, and a small component library. Includes **mock APIs**, **Storybook**, accessibility polish, and a clean, responsive layout. Ready to deploy on **Vercel/Netlify**.

---

## 🔭 Step 1 — Research (Summary)

| Platform | Summary | Standout Features |
| --- | --- | --- |
| **OpenAI Playground** | Simple text playground with live parameter controls and result preview. | Prompt editor, parameters (temperature, top-p), model switcher |
| **Hugging Face Spaces** | Web-hosted ML demos with varied UIs and datasets. | Model picker, responsive layout, download artifacts |
| **Anthropic Claude** | Conversational UI with clean chat bubbles and attachments. | Chat history, copy tools, lightweight theming |
| **Microsoft Copilot Lab** | Task‑oriented prompts with templates and categories. | Template library, guide rails, quick actions |

### Features chosen for this prototype (6–8 core)

- **Model Selector** (sidebar)
- **Prompt Editor** with **template load/save**
- **Parameters Panel** (temperature, max tokens)
- **Chat/Output Area** with **copy & download JSON**
- **Theme Toggle** (light/dark, persisted)
- **Responsive Layout** (mobile → desktop)
- **Accessibility**: keyboard focus, ARIA labels, high-contrast focus ring
- **Micro‑animations** (Framer Motion)

---

## 🎨 Step 2 — Design (Figma + Tailwind Mapping)

**Mockup**: Create/attach your Figma/XD link here → `https://figma.com/file/… (add your link)`

**Tailwind Tokens**

- Color palette: `zinc` neutrals, brand: `indigo-500` → configured as `brand`
- Spacing: `p-2 p-3 p-4 p-6`, layout gaps `gap-6`
- Radius: `rounded-2xl`
- Shadows: custom `shadow-soft`
- Typography: defaults + `text-sm` body, `text-lg` section headings

**Element mapping**

- Sidebar card: `rounded-2xl border p-4 sticky top-24`
- Prompt area: `textarea rounded-2xl border p-3`
- Buttons: variants (`primary`, `secondary`, `ghost`)
- Sliders: native `<input type="range">` with labels & value readout
- Chat bubbles: rounded containers, role‑based colors

---

## ⚙️ Step 3 — Development Notes

- **Stack**: Next.js 14 (pages router), TypeScript `strict: true`, Tailwind 3
- **State**: `SessionContext` (model, params, messages) + `ThemeContext`
- **Mock API**: `/api/models`, `/api/templates` serve JSON from `/data/*`
- **No backend calls**: “Run” simulates a response to show the UX
- **Persistence**: Theme via `localStorage`; templates can be saved locally
- **A11y**: Labels, `aria-*`, `focus-visible` ring, keyboardable controls

---

## 🧪 Step 4 — Component Library & Storybook

**Stories** included: `Button`, `Slider`, `Modal`, `ChatBubble` in `/stories` with Storybook 8.

Run:
```bash
npm run storybook
```

---

## 🚀 Quick Start

```bash
# 1) Install deps
npm i

# 2) Start the app
npm run dev
# http://localhost:3000

# 3) Storybook (optional)
npm run storybook
# http://localhost:6006
```

**Build & Deploy**

- **Vercel**: push to GitHub, “Import Project”, build command `next build`, output handled by Next.
- **Netlify**: set build `next build`, publish directory `.next`. (Or use Next on Netlify adapter.)

---

## 📦 What’s Inside (Structure)

```
ai-ux-prototype/
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   └── api/
│       ├── models.ts        # serves /data/models.json
│       └── templates.ts     # serves /data/templates.json
├── components/
│   ├── Layout.tsx
│   ├── ChatBubble.tsx
│   ├── ModelSelector.tsx
│   ├── ParametersPanel.tsx
│   ├── PromptEditor.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       └── Slider.tsx
├── contexts/
│   ├── SessionContext.tsx
│   └── ThemeContext.tsx
├── data/
│   ├── models.json
│   └── templates.json
├── stories/                  # Storybook stories
├── .storybook/               # Storybook config
├── styles/globals.css
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## ✅ What to Submit

1. **Live URL** of your deployed prototype (Vercel/Netlify)
2. **GitHub repo** with the full source
3. **README** (this file) containing:
   - Research table + features chosen
   - Figma/XD mockups link
   - Implementation notes & limitations
   - Mock API explanation
   - Storybook instructions & screenshots (optional)

---

## 📝 Notes & Known Limitations

- “Run” is **simulated** to keep this frontend‑only.
- Models and templates are **mocked**; swap `/api/*` to your real endpoints later.
- Add more parameters (top‑p, frequency penalty) if desired.
```