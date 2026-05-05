# Mejora de Steps 1, 3, 5 + Tipografía Completa

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Mejorar visualmente todos los steps restantes (1, 3, 5) y unificar tipografía a Space Mono en toda la app.

**Architecture:** Aplicar el mismo nivel de diseño de Step 2 y Step 4 a los steps faltantes, con gradientes, animaciones y mejor espaciado.

**Tech Stack:** React/Next.js 16, CSS inline, animaciones CSS3

---

## File Structure

- **Modify:** `components/Step1Form.tsx` - Inputs mejorados, tipografía, gradientes
- **Modify:** `components/Step3Input.tsx` - Inputs mejorados, back button, tipografía
- **Modify:** `components/Step5CTA.tsx` - Cards con gradientes, botones mejorados
- **Modify:** `components/Step4Report.tsx` - Usar Space Mono en títulos

---

### Task 1: Mejorar Step1Form

**Files:**
- Modify: `components/Step1Form.tsx`

**Changes:**
- h2: fontSize 22px, Space Mono, color #1a3a52, marginBottom 28px
- form padding: 40px 20px
- label: fontFamily Space Mono, fontWeight 600, color #1a3a52, fontSize 14px
- inputs: 
  - padding: 16px
  - border: 2px solid #e2e8f0 (normal), #00d4ff (focus)
  - borderRadius: 12px
  - fontSize: 16px
  - transition: all 0.3s
  - focus: outline none, borderColor #00d4ff, boxShadow 0 0 0 3px rgba(0, 212, 255, 0.1)
- button:
  - background: linear-gradient(135deg, #1a3a52 0%, #2c5282 100%)
  - padding: 14px 40px
  - borderRadius: 8px
  - fontSize: 16px
  - fontWeight: 600
  - transition: all 0.3s
  - hover: boxShadow 0 8px 24px rgba(26, 58, 82, 0.3), transform translateY(-2px)
- error text: color #ef4444, fontSize 12px
- marginBottom between fields: 20px

---

### Task 2: Mejorar Step3Input

**Files:**
- Modify: `components/Step3Input.tsx`

**Changes:**
- back button: color #1a3a52, hover #00d4ff, transition 0.3s
- h2: fontSize 22px, Space Mono, color #1a3a52, marginBottom 28px
- form padding: 40px 20px
- label: fontFamily Space Mono, fontWeight 600, color #1a3a52, fontSize 14px
- input:
  - padding: 16px
  - border: 2px solid #e2e8f0 (normal), #00d4ff (focus)
  - borderRadius: 12px
  - fontSize: 16px
  - transition: all 0.3s
  - focus: outline none, borderColor #00d4ff, boxShadow 0 0 0 3px rgba(0, 212, 255, 0.1)
- hint text: fontSize 13px, color #64748b
- button:
  - background: linear-gradient(135deg, #1a3a52 0%, #2c5282 100%)
  - padding: 14px 40px
  - borderRadius: 8px
  - fontSize: 16px
  - fontWeight: 600
  - transition: all 0.3s
  - hover: boxShadow 0 8px 24px rgba(26, 58, 82, 0.3), transform translateY(-2px)

---

### Task 3: Mejorar Step5CTA

**Files:**
- Modify: `components/Step5CTA.tsx`

**Changes:**
- div padding: 40px 20px
- h1: fontSize 28px, Space Mono, color #1a3a52, marginBottom 28px, fontWeight 700
- card container (WhatsApp section):
  - background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%)
  - padding: 32px 24px
  - borderRadius: 12px
  - border: 2px solid #10b981
  - marginBottom: 20px
  - animation: fadeIn 0.6s ease-out
- card p (strong): fontFamily Space Mono, fontWeight 700, fontSize 16px, color #047857
- card p (description): fontSize 14px, color #059669
- WhatsApp button:
  - background: linear-gradient(135deg, #10b981 0%, #059669 100%)
  - padding: 14px 40px
  - borderRadius: 8px
  - fontSize: 16px
  - fontWeight: 600
  - transition: all 0.3s
  - hover: boxShadow 0 8px 24px rgba(16, 185, 129, 0.3), transform translateY(-2px)
  - width: 100%
- restart button container: marginTop 20px, textAlign center
- restart button:
  - background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)
  - color: #1a3a52
  - padding: 12px 24px
  - borderRadius: 8px
  - fontWeight: 600
  - border: 2px solid #e2e8f0
  - transition: all 0.3s
  - hover: borderColor #00d4ff, background linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)

---

### Task 4: Actualizar Step4Report con Space Mono

**Files:**
- Modify: `components/Step4Report.tsx`

**Changes:**
- h2: fontFamily Space Mono (añadir si no está)
- back button: color #1a3a52, hover #00d4ff
- label texts: fontFamily Space Mono, fontWeight 600
- Keep all gradient and animation changes from before

---

### Task 5: Commit y Testing Final

**Steps:**
1. Verificar que dev server corre sin errores
2. Probar flujo completo:
   - Landing → Calc
   - Step 1 (form mejorado) → Step 2 → Step 3 (input mejorado) → Step 4 → Step 5 (CTA mejorado)
3. Verificar tipografía Space Mono en todos los títulos
4. Verificar animaciones y hover effects
5. Commit: `git add -A && git commit -m "feat: improve all steps with Space Mono typography, gradients, and animations"`

---
