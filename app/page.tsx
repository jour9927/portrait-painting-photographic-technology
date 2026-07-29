"use client";

import { useState } from "react";

const products = [
  { id: "mini", name: "微光肖像", en: "MINI PORTRAIT", price: 1800, size: "10 × 15 cm", tone: "peach", image: "/works/mini-portrait.png" },
  { id: "classic", name: "經典人像", en: "CLASSIC PORTRAIT", price: 4200, size: "20 × 25 cm", tone: "sage", image: "/works/classic-portrait.png" },
  { id: "memory", name: "記憶修復", en: "MEMORY RESTORATION", price: 3200, size: "數位修復檔", tone: "ink", image: "/works/memory-restoration.png" },
];

const format = (value: number) => new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 }).format(value);

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const total = cart.reduce((sum, item) => sum + (products.find((p) => p.id === item)?.price ?? 0), 0);
  const add = (id: string) => { setCart([...cart, id]); setCartOpen(true); };

  return (
    <main>
      <nav className="nav" aria-label="主選單">
        <a className="brand" href="#top"><span>繪畫人像與</span>照片技術工紡</a>
        <div className="nav-links"><a href="#shop">商店</a><a href="#process">流程</a><button onClick={() => setCartOpen(true)} aria-label="開啟購物車">購物車 {cart.length ? `(${cart.length})` : ""}</button></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">PORTRAIT PAINTING &amp; PHOTOGRAPHIC TECHNOLOGY</p><h1>把時間，<br /><i>畫成肖像。</i></h1><p className="intro">以繪畫的感性與攝影的精準，為人物、回憶與重要時刻，留下一幅值得珍藏的影像。</p><a className="button" href="#shop">選一件作品 <span>↓</span></a></div>
        <div className="portrait-frame" aria-label="抽象人像展示圖"><div className="sun" /><div className="face"><span className="eye left" /><span className="eye right" /><span className="nose" /><span className="mouth" /></div><p>STUDIO / 2026</p></div>
      </section>

      <section className="shop" id="shop"><div className="section-head"><p className="eyebrow">PORTRAIT SHOP</p><h2>為重要的人，<br />留一件獨特的作品。</h2></div><div className="product-grid">{products.map((product) => <article className={`product ${product.tone}`} key={product.id}><div className="product-art"><img src={product.image} alt={`${product.name} 成品示意`} /></div><p className="eyebrow">{product.en}</p><h3>{product.name}</h3><p className="product-detail">{product.size} · 含一次細節確認</p><div className="product-bottom"><b>{format(product.price)}</b><button onClick={() => add(product.id)}>加入購物車 <span>+</span></button></div></article>)}</div></section>

      <section className="process" id="process"><p className="eyebrow">HOW IT WORKS</p><h2>從一張照片，<i>開始。</i></h2><div className="steps"><div><b>01</b><h3>選擇作品</h3><p>選擇尺寸與創作方式，加入購物車。</p></div><div><b>02</b><h3>提供照片</h3><p>完成訂單後，我們會邀請你上傳照片。</p></div><div><b>03</b><h3>確認與寄送</h3><p>確認細節後製作，細心包裝送到你手中。</p></div></div></section>

      <section className="contact" id="contact"><p className="eyebrow">NEED SOMETHING PERSONAL?</p><h2>想做一幅，<br /><i>只屬於你們的作品？</i></h2><a className="button light" href="mailto:hello@portrait-studio.example">聯絡工作室 <span>↗</span></a></section>
      <footer><span>© 2026 繪畫人像與照片技術工紡</span><span>Portrait Painting and Photographic Technology</span></footer>

      {cartOpen && <aside className="cart" aria-label="購物車"><button className="close" onClick={() => setCartOpen(false)} aria-label="關閉購物車">×</button><p className="eyebrow">YOUR CART</p><h2>你的選擇</h2>{cart.length === 0 ? <p className="empty">購物車還沒有作品。</p> : <><div className="cart-items">{cart.map((id, index) => { const product = products.find((p) => p.id === id)!; return <div key={`${id}-${index}`}><span>{product.name}</span><b>{format(product.price)}</b></div>; })}</div><div className="cart-total"><span>合計</span><b>{format(total)}</b></div><button className="checkout" onClick={() => alert("正式上線後，這裡會連接安全付款與照片上傳流程。")}>前往結帳</button></>}</aside>}
      {cartOpen && <button className="scrim" onClick={() => setCartOpen(false)} aria-label="關閉購物車遮罩" />}
    </main>
  );
}
