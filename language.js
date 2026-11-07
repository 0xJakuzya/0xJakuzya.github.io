(function () {
  var translations = {
    about: 'обо мне',
    blog: 'блог',
    name: 'Дмитрий Кузьмин',
    bio: 'Я студент четвёртого курса бакалавриата по направлению «Информационные системы и технологии» в <a href="https://www.psuti.ru/en">ПГУТИ</a>, мой научный руководитель — <a href="https://www.psuti.ru/ru/university/staff/n.i.limanova">профессор Наталья И. Лиманова</a>. Также я работаю инженером-исследователем в <a href="https://samsmu.ru/departments/nii/neuroscience/">НИИ нейронаук</a> под руководством директора Александра В. Захарова, где занимаюсь машинным обучением для анализа нейронных и физиологических сигналов. Большая часть моей работы связана с извлечением и анализом признаков биосигналов для разработки алгоритмов интерпретации физиологических процессов.',
    news: 'Новости',
    newsItem: '[Февраль 2026] Начал работать инженером-исследователем в <strong>НИИ нейронаук</strong>!',
    projects: 'Исследовательские проекты',
    interests: 'Мои основные исследовательские интересы — компьютерное зрение, глубокое и машинное обучение. Мне интересно изучать новые методы и архитектуры нейросетей для задач компьютерного зрения и применять их на практике.',
    rppgTitle: 'Обобщающая способность PhysNet на разных наборах данных для дистанционного измерения частоты сердечных сокращений',
    rppgMeta: 'Машинное обучение · Компьютерное зрение · Обработка сигналов',
    code: 'Код',
    rppgDescription: 'Дообучил PhysNet на общедоступных наборах данных rPPG и оценил качество определения частоты сердечных сокращений на независимых видеозаписях лица.',
    solarTitle: 'Инстанс-сегментация солнечных волокон с помощью Mask R-CNN и уточнения масок на основе U-Net',
    solarMeta: 'Компьютерное зрение · Сегментация изображений · U-Net',
    solarDescription: 'Инстанс-сегментация солнечных волокон на снимках наземных обсерваторий с использованием Mask R-CNN и уточнения масок на основе U-Net. Особое внимание уделяется выделению тонких структур, сокращению ложных обнаружений и сохранению непрерывности волокон.',
    education: 'Образование',
    university: 'Поволжский государственный университет телекоммуникаций и информатики',
    degree: 'Бакалавриат: информационные системы и технологии (2023 — настоящее время)',
    advisor: 'Научный руководитель: <a href="https://www.psuti.ru/ru/university/staff/n.i.limanova">профессор Наталья И. Лиманова</a>',
    work: 'Опыт работы',
    institute: 'НИИ нейронаук, Самарский государственный медицинский университет',
    role: 'Инженер-исследователь (2026 — настоящее время)',
    director: 'Директор: Александр В. Захаров',
    copyright: '© Дмитрий Кузьмин, 2026',
    soon: 'Скоро будет'
  };

  var elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(function (element) { element.dataset.english = element.innerHTML; });
  var language = 'en';
  try { language = localStorage.getItem('language') === 'ru' ? 'ru' : 'en'; } catch (error) {}

  function applyLanguage() {
    document.documentElement.lang = language;
    elements.forEach(function (element) {
      var translated = translations[element.dataset.i18n];
      element.innerHTML = language === 'ru' && translated ? translated : element.dataset.english;
    });
    var button = document.querySelector('.language-toggle');
    if (button) {
      button.textContent = language === 'en' ? 'EN / RU' : 'RU / EN';
      button.setAttribute('aria-label', language === 'en' ? 'Switch to Russian' : 'Switch to English');
      button.title = language === 'en' ? 'Switch to Russian' : 'Switch to English';
    }
    document.querySelectorAll('.site-nav').forEach(function (nav) {
      nav.setAttribute('aria-label', language === 'ru' ? 'Основная навигация' : 'Main navigation');
    });
    document.dispatchEvent(new Event('languagechange'));
  }

  var button = document.querySelector('.language-toggle');
  if (button) button.addEventListener('click', function () {
    language = language === 'en' ? 'ru' : 'en';
    try { localStorage.setItem('language', language); } catch (error) {}
    applyLanguage();
  });
  applyLanguage();
})();
