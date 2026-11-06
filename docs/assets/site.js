'use strict';

const byId = id => document.getElementById(id);
let language = 'en';
let activeFigure = 0;
const tabs = [...document.querySelectorAll('[data-figure]')];

function updateFigure() {
  const figure = window.PAPER_FIGURES[activeFigure];
  byId('result-image').src = figure.src;
  byId('result-image').alt = figure[language];
  byId('result-zoom').href = figure.src;
  byId('result-zoom').dataset.caption = figure[language];
  byId('result-caption').textContent = figure[language];
  byId('result-description').textContent = figure[language + 'Description'];
  byId('result-panel').setAttribute('aria-labelledby', tabs[activeFigure].id);
  tabs.forEach((tab, index) => {
    tab.setAttribute('aria-selected', String(index === activeFigure));
    tab.tabIndex = index === activeFigure ? 0 : -1;
  });
}

byId('language').addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  byId('language').textContent = language === 'en' ? '中文' : 'EN';
  byId('language').setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换到英文');
  updateFigure();
});

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => { activeFigure = index; updateFigure(); });
  tab.addEventListener('keydown', event => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    activeFigure = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
      (activeFigure + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    updateFigure();
    tabs[activeFigure].focus();
  });
});

const dialog = byId('figure-dialog');
document.querySelectorAll('[data-zoom]').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    byId('dialog-image').src = link.href;
    byId('dialog-image').alt = link.dataset.caption;
    byId('dialog-caption').textContent = link.dataset.caption;
    dialog.showModal();
  });
});
byId('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

byId('copy-citation').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(byId('bibtex').textContent);
    byId('toast').textContent = language === 'zh' ? '引用已复制' : 'Citation copied';
  } catch {
    byId('toast').textContent = language === 'zh' ? '请选中引用文本复制' : 'Select the citation text to copy';
  }
  setTimeout(() => { byId('toast').textContent = ''; }, 3000);
});

updateFigure();
