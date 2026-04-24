// Nav au scroll
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
    });

    // Reveal au scroll
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Onglets cas d'usage
    function showUC(id, btn) {
      document.querySelectorAll('.uc-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.uc-content').forEach(c => c.classList.remove('active'));
      document.getElementById('uc-' + id).classList.add('active');
      btn.classList.add('active');
    }

    // Toggle FAQ
    function toggleFaq(element) {
      element.classList.toggle('active');
      element.nextElementSibling.classList.toggle('active');
    }