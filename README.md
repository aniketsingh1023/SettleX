<div align="center">

# 🚀 SettleX

**An Open-Source, Community-Driven Crypto Exchange Platform**

<img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop" width="100%" alt="SettleX Banner" style="border-radius: 15px;">

<br />

[![Open Source Love img!](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

_Inspired by the simplicity of **WazirX** and supercharged with **Web3** security paradigms._

[Explore the Code](#️-explore-the-code) • [Learn Multisig](#-what-is-multisig) • [Contribute](#-contributing)

</div>

---

## 🌍 For the Community, By the Community

SettleX is meant for anyone who wants to learn, build, and experiment with fintech and cryptocurrency applications.

We started this project because we loved the user experience of popular exchanges like **WazirX** and CoinDCX, but we wanted to build something completely transparent that the developer community could dissect and learn from.

Whether you're a frontend enthusiast wanting to craft sleek UIs with TailwindCSS, or a blockchain curious builder wanting to explore Next.js + Web3, **you are welcome here**.

---

## 🔐 What is Multisig?

One of the core concepts we explore in Web3 finance is **Multisig (Multi-Signature)** wallets.

### The Concept

Imagine a bank vault with three locks, and three different people hold the keys. To open the vault, you need at least two keys. That is exactly what a **Multi-Signature wallet** is.

### Why does it matter?

Most crypto exchange hacks occur because a single point of failure (a single private key) was compromised. Multisig solves this by requiring `M-of-N` signatures.

- **N**: The total number of signers (e.g., 3 partners in a company).
- **M**: The minimum number of signatures required to approve a transaction (e.g., 2 out of 3).

By distributing the keys across different devices, hardware wallets, or individuals, you exponentially increase the security of your funds.

---

## 📚 Learning & Building

This repository serves as a practical sandbox. Here is what you'll learn by exploring SettleX:

### 1. Modern Frontend Architecture

- **Next.js 15 (App Router)**: Utilizing server and client components effectively.
- **Component-Driven UIs**: Reusable, atomic button and layout components.
- **TailwindCSS**: Pixel-perfect, rapidly designed fintech user interfaces.

### 2. Web3 & Auth Concepts

- **NextAuth**: Managing seamless user authentication (e.g., Sign in with Google) securely in a modern application.
- **Digital Assets**: Modeling high-performance ticker grids, mock market data handling, and live-like pricing UIs.

> 💡 **Task for Beginners**: Take a look at `frontend/app/components/Hero.tsx`. Notice the use of `requestAnimationFrame` to build custom tabular odometers for counters!

---

## 🛠️ Contributing

We absolutely love contributions! From fixing typos to submitting major structural refactors, everything helps. SettleX is wide open for anyone to grab issues and raise PRs.

1. **Fork** the repository
2. **Clone** it strictly to your local machine
3. **Branch** out (`git checkout -b feature/amazing-feature`)
4. **Commit** your changes (`git commit -m 'Added an amazing feature'`)
5. **Push** to the branch (`git push origin feature/amazing-feature`)
6. Open a **Pull Request** and let's review it together!

---

<p align="center">
  Made with ❤️ by the community.
</p>
