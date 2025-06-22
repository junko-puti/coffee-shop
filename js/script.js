// スムーススクロール（ヘッダー高さ80px考慮）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId === "#") {
      // href="#" の場合はページ最上部へ
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 0; // ヘッダーの高さ
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});
