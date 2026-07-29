const products = [
  { id: "mini", name: "微光肖像", en: "WARM PORTRAIT", detail: "小幅原作 · 已完成交付", tone: "peach", image: "/works/mini-portrait.png" },
  { id: "classic", name: "經典人像", en: "CLASSIC PORTRAIT", detail: "客製肖像委託 · 已完成交付", tone: "sage", image: "/works/classic-portrait.png" },
  { id: "memory", name: "記憶修復", en: "MEMORY RESTORATION", detail: "老照片修復委託 · 已完成交付", tone: "ink", image: "/works/memory-restoration.png" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主選單">
        <a className="brand" href="#top"><span>繪畫人像與</span>照片技術工紡</a>
        <div className="nav-links"><a href="#shop">成果牆</a><a href="#process">流程</a><a href="#contact">聯絡</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">PORTRAIT PAINTING &amp; PHOTOGRAPHIC TECHNOLOGY</p><h1>把時間，<br /><i>畫成肖像。</i></h1><p className="intro">以繪畫的感性與攝影的精準，為人物、回憶與重要時刻，留下一幅值得珍藏的影像。</p><a className="button" href="#shop">選一件作品 <span>↓</span></a></div>
        <div className="portrait-frame" aria-label="抽象人像展示圖"><div className="sun" /><div className="face"><span className="eye left" /><span className="eye right" /><span className="nose" /><span className="mouth" /></div><p>STUDIO / 2026</p></div>
      </section>

      <section className="shop" id="shop"><div className="section-head"><p className="eyebrow">COMPLETED COMMISSIONS</p><h2>已交付的作品，<br />成為某個人的珍藏。</h2></div><div className="product-grid">{products.map((product) => <article className={`product ${product.tone}`} key={product.id}><div className="product-art"><img src={product.image} alt={`${product.name} 成品紀錄`} /></div><p className="eyebrow">{product.en}</p><h3>{product.name}</h3><p className="product-detail">{product.detail}</p><div className="product-bottom"><span>COMMISSION ARCHIVE</span><span className="delivered">已交付</span></div></article>)}</div></section>

      <section className="process" id="process"><p className="eyebrow">HOW IT WORKS</p><h2>從一張照片，<i>開始。</i></h2><div className="steps"><div><b>01</b><h3>提出委託</h3><p>告訴我們想保存的人與故事。</p></div><div><b>02</b><h3>提供照片</h3><p>確認方向後，我們會邀請你上傳照片。</p></div><div><b>03</b><h3>確認與交付</h3><p>確認細節後製作，細心包裝送到你手中。</p></div></div></section>

      <section className="contact" id="contact"><p className="eyebrow">NEED SOMETHING PERSONAL?</p><h2>想做一幅，<br /><i>只屬於你們的作品？</i></h2><a className="button light" href="mailto:hello@portrait-studio.example">聯絡工作室 <span>↗</span></a></section>
      <footer><span>© 2026 繪畫人像與照片技術工紡</span><span>Portrait Painting and Photographic Technology</span></footer>

    </main>
  );
}
