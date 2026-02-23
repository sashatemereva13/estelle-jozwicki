# Estelle Jozwicki — Portfolio Website

Custom-built bilingual portfolio website developed by **Sasha13Studio**.

This project was architected as a high-performance, custom-coded platform prioritising visual integrity, structural clarity, and long-term scalability.

---

## Overview

This website is not template-based (Wix / WordPress).  
It is developed from scratch using a modern front-end architecture and deployed through an automated CI/CD pipeline.

The project was designed to:

- Preserve minimalist aesthetic precision
- Ensure performance across devices
- Support bilingual content (FR / EN)
- Maintain clean deployment standards
- Provide scalability for future content growth

---

## Technical Architecture

### Stack

- **React** — Front-end framework
- **Vite** — Build system
- **Custom CSS architecture**
- **GitHub** — Version control
- **GitHub Actions** — Automated deployment (CI/CD)
- **Hostinger VPS** — Dedicated hosting environment

---

## Deployment Flow

The website follows a controlled publishing pipeline:

1. Code updates are committed locally
2. Changes are pushed to GitHub
3. GitHub Actions triggers deployment
4. Secure SSH connection updates the VPS
5. The live website reflects the new build

This ensures:

- Version control integrity
- Reliable publishing
- Clean production builds
- Minimal deployment errors

---

## Content Structure

Content is structured to allow potential evolution toward a content-driven architecture.

Current structure includes:

- Bilingual translations (FR / EN)
- Modular component architecture
- Dedicated public media directory

If a CMS layer is implemented, content may be structured under:

```
/content
/i18n
/works
/public/uploads
```

---

## Media Optimisation Policy

All images are converted to **WebP format** before deployment.

This ensures:

- Faster loading time
- Reduced bandwidth usage
- Improved mobile performance
- SEO optimisation
- Scalable media handling as the artwork archive grows

Future uploads should follow the same optimisation standard to maintain performance integrity.

---

## Security & Access

For security reasons:

- Root VPS credentials are not publicly exposed
- Access transfers are handled through account ownership changes
- Deployment keys are managed securely

Infrastructure access can be transferred upon request.

---

## Maintenance & Evolution

The current architecture supports two autonomy pathways:

1. Developer-managed updates (direct repository workflow)
2. Integration of a structured CMS layer for editorial autonomy

The platform has been engineered with scalability in mind and can evolve into a fully modular content management architecture if required.

---

## Developed by

**Sasha Temereva**  
Founder — Sasha13Studio  
Digital Architecture & Immersive Web Systems

---
