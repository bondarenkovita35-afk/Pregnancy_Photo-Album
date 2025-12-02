// ===== ДАННЫЕ АЛЬБОМА =====

const albumData = {
  ru: {
    cover: {
      tag: "ПРЕМИАЛЬНЫЙ ФОТОАЛЬБОМ",
      title: "Наш день ожидания чуда",
      meta: "26 января 2021 · Стокгольм, Швеция",
      desc:
        "Каждая страница этого альбома хранит дыхание счастья, прикосновения и лёгкие шевеления новой жизни. В этот день рождалась семья из трёх.",
      note:
        "Создано с любовью VS LiteCode Studio — для самых волшебных недель ожидания.",
      image: "images/hero.jpeg"
    },
    slides: [
      {
        sheet: "Лист 1",
        title: "Горизонтальное счастье",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Мы опираемся друг на друга, а малыш — на нас обоих. Здесь всё будущее уместилось в одном спокойном вдохе.",
        note:
          "Фотография о том, как комфортно миру, когда мама и папа рядом.",
        image: "images/gallery dorizontal.jpeg"
      },
      {
        sheet: "Лист 2",
        title: "Вдох между двумя сердцами",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Здесь мы учимся держаться за руки не только друг друга, но и наше завтра. Между ладонями помещается целая жизнь.",
        note:
          "Кадр, в котором ожидание звучит громче, чем слова.",
        image: "images/gallery.jpeg"
      },
      {
        sheet: "Лист 3",
        title: "Объятие, в котором уже трое",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Мама, папа и маленькое сердечко между ними. В это объятие можно вернуться в любой момент жизни.",
        note:
          "Фотография, где любовь уже нашла себе третье место.",
        image: "images/gallery1.jpeg"
      },
      {
        sheet: "Лист 4",
        title: "Цветы и первые пинки",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Каждый лепесток, как неделя ожидания — хрупкая, но бесконечно счастливая. Мы держим букет, а внутри растёт целый сад.",
        note:
          "Кадр, который пахнет весной, даже если за окном зима.",
        image: "images/gallery4.jpeg"
      },
      {
        sheet: "Лист 5",
        title: "Пауза между вдохами",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Тихий момент, чтобы просто послушать, как внутри шуршит новая жизнь. В эти секунды время почти останавливается.",
        note:
          "Фотография, которую хочется рассматривать в тишине.",
        image: "images/gallery3.jpeg"
      },
      {
        sheet: "Лист 6",
        title: "Дом там, где этот взгляд",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Тёплый, уверенный и немного влюблённый заново. В этом взгляде уже есть место для маленькой пары глаз.",
        note:
          "Любовь, которая не боится становиться больше.",
        image: "images/gallery6.jpeg"
      },
      {
        sheet: "Лист 7",
        title: "Последний кадр до встречи",
        meta: "26 января 2021 · Стокгольм, Швеция",
        desc:
          "Мы ещё вдвоём, но уже навсегда втроём. Через несколько недель этот альбом получит первые отпечатки крошечных пальцев.",
        note:
          "Финальная страница, где история только начинается. Создано с любовью VS LiteCode Studio.",
        image: "images/gallery7.jpeg"
      }
    ]
  },

  // ===== ШВЕДСКИЙ =====
  sv: {
    cover: {
      tag: "PREMIUM FOTOALBUM",
      title: "Vår dag i väntan på ett mirakel",
      meta: "26 januari 2021 · Stockholm, Sverige",
      desc:
        "Varje sida i det här albumet bär andetag av lycka, beröringar och de första små rörelserna av ett nytt liv. Den här dagen föddes en familj på tre.",
      note:
        "Skapat med kärlek av VS LiteCode Studio – för de mest magiska veckorna i väntan.",
      image: "images/hero.jpeg"
    },
    slides: [
      {
        sheet: "Blad 1",
        title: "Horisontell lycka",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Vi lutar oss mot varandra, och bebisen lutar sig mot oss båda. Hela framtiden finns i ett lugnt andetag.",
        note:
          "Ett foto om hur trygg världen känns när mamma och pappa är nära.",
        image: "images/gallery dorizontal.jpeg"
      },
      {
        sheet: "Blad 2",
        title: "Ett andetag mellan två hjärtan",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Här lär vi oss att hålla i handen inte bara varandra, utan också vår morgondag. Mellan handflatorna ryms ett helt liv.",
        note:
          "En bild där väntan låter högre än orden.",
        image: "images/gallery.jpeg"
      },
      {
        sheet: "Blad 3",
        title: "En kram där ni redan är tre",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Mamma, pappa och ett litet hjärta mellan dem. Till den här kramen kan man återvända när som helst i livet.",
        note:
          "Ett foto där kärleken redan har hittat plats för en tredje.",
        image: "images/gallery1.jpeg"
      },
      {
        sheet: "Blad 4",
        title: "Blommor och de första små sparkarna",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Varje kronblad är som en vecka av väntan – skör men oändligt lycklig. Vi håller en bukett, men inuti växer en hel trädgård.",
        note:
          "En bild som doftar vår, även om det är vinter utanför.",
        image: "images/gallery4.jpeg"
      },
      {
        sheet: "Blad 5",
        title: "Paus mellan andetagen",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Ett stilla ögonblick för att bara lyssna på hur ett nytt liv prasslar inuti. I de här sekunderna stannar tiden nästan.",
        note:
          "Ett foto man vill betrakta i tystnad.",
        image: "images/gallery3.jpeg"
      },
      {
        sheet: "Blad 6",
        title: "Hemmet är där den här blicken finns",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Varm, trygg och lite nyförälskad igen. I den här blicken finns redan plats för ett par små ögon.",
        note:
          "Kärlek som inte är rädd för att bli större.",
        image: "images/gallery6.jpeg"
      },
      {
        sheet: "Blad 7",
        title: "Sista bilden före mötet",
        meta: "26 januari 2021 · Stockholm, Sverige",
        desc:
          "Vi är fortfarande två, men redan för alltid tre. Om några veckor får det här albumet de första avtrycken av pyttesmå fingrar.",
        note:
          "Sista sidan där historien bara har börjat. Skapat med kärlek av VS LiteCode Studio.",
        image: "images/gallery7.jpeg"
      }
    ]
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    cover: {
      tag: "PREMIUM PHOTO ALBUM",
      title: "Our Day of Expecting a Miracle",
      meta: "26 January 2021 · Stockholm, Sweden",
      desc:
        "Every page of this album keeps the breath of happiness, gentle touch and the first tiny movements of a new life. On this day, a family of three was born.",
      note:
        "Created with love by VS LiteCode Studio – for the most magical weeks of waiting.",
      image: "images/hero.jpeg"
    },
    slides: [
      {
        sheet: "Sheet 1",
        title: "Horizontal Happiness",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "We lean on each other, and the baby leans on both of us. The whole future fits into one calm breath.",
        note:
          "A photograph about how safe the world feels when mum and dad are close.",
        image: "images/gallery dorizontal.jpeg"
      },
      {
        sheet: "Sheet 2",
        title: "A Breath Between Two Hearts",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "Here we learn to hold not only each other’s hands, but also our tomorrow. A whole life fits between our palms.",
        note:
          "A frame where expectation sounds louder than words.",
        image: "images/gallery.jpeg"
      },
      {
        sheet: "Sheet 3",
        title: "An Embrace That’s Already Three",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "Mum, dad and a tiny heart between them. This is an embrace you can return to at any moment of life.",
        note:
          "A photograph where love has already found space for the third.",
        image: "images/gallery1.jpeg"
      },
      {
        sheet: "Sheet 4",
        title: "Flowers and the First Kicks",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "Every petal is like a week of waiting – fragile, yet endlessly happy. We hold a bouquet, while a whole garden grows inside.",
        note:
          "A frame that smells like spring, even if it’s winter outside.",
        image: "images/gallery4.jpeg"
      },
      {
        sheet: "Sheet 5",
        title: "A Pause Between Breaths",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "A quiet moment just to listen to how new life rustles inside. For these few seconds, time almost stops.",
        note:
          "A photograph you want to look at in silence.",
        image: "images/gallery3.jpeg"
      },
      {
        sheet: "Sheet 6",
        title: "Home Is Where This Look Lives",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "Warm, confident and a little in love again. In this look there is already room for a tiny pair of eyes.",
        note:
          "Love that isn’t afraid of becoming bigger.",
        image: "images/gallery6.jpeg"
      },
      {
        sheet: "Sheet 7",
        title: "The Last Frame Before We Meet",
        meta: "26 January 2021 · Stockholm, Sweden",
        desc:
          "We are still two, but already forever three. In a few weeks this album will receive the first prints of tiny fingers.",
        note:
          "The final page where the story is only beginning. Created with love by VS LiteCode Studio.",
        image: "images/gallery7.jpeg"
      }
    ]
  }
};

// ===== ЛОГИКА ПЕРЕКЛЮЧЕНИЯ =====

let currentLang = "ru";
let currentIndex = 0; // 0 = обложка; дальше 1..slides.length

const pageEl = document.getElementById("page");
const imgEl = document.getElementById("page-image");
const tagEl = document.getElementById("page-tag");
const sheetEl = document.getElementById("page-sheet");
const titleEl = document.getElementById("page-title");
const metaEl = document.getElementById("page-meta");
const descEl = document.getElementById("page-desc");
const noteEl = document.getElementById("page-note");

const prevBtn = document.querySelector(".nav-btn-left");
const nextBtn = document.querySelector(".nav-btn-right");
const langButtons = document.querySelectorAll(".lang-btn");

function renderPage(direction) {
  const data = albumData[currentLang];

  let pageData;
  if (currentIndex === 0) {
    pageData = data.cover;
    pageEl.classList.add("page--cover");
    sheetEl.textContent = "";
  } else {
    const slide = data.slides[currentIndex - 1];
    pageData = slide;
    pageEl.classList.remove("page--cover");
    sheetEl.textContent = slide.sheet || "";
  }

  tagEl.textContent = pageData.tag || "";
  titleEl.textContent = pageData.title;
  metaEl.textContent = pageData.meta;
  descEl.textContent = pageData.desc;
  noteEl.textContent = pageData.note;
  imgEl.src = pageData.image;

  // Анимация перелистывания
  if (direction === "next") {
    pageEl.classList.remove("turn-left");
    void pageEl.offsetWidth;
    pageEl.classList.add("turn-right");
  } else if (direction === "prev") {
    pageEl.classList.remove("turn-right");
    void pageEl.offsetWidth;
    pageEl.classList.add("turn-left");
  }
}

function goNext() {
  const slidesCount = albumData[currentLang].slides.length;
  if (currentIndex < slidesCount) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  renderPage("next");
}

function goPrev() {
  const slidesCount = albumData[currentLang].slides.length;
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = slidesCount;
  }
  renderPage("prev");
}

// Слушатели
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (lang === currentLang) return;

    currentLang = lang;
    langButtons.forEach((b) => b.classList.toggle("active", b === btn));
    // остаёмся на той же странице по номеру
    renderPage();
  });
});

// Сброс анимации после окончания
pageEl.addEventListener("animationend", () => {
  pageEl.classList.remove("turn-right", "turn-left");
});

// стартовая отрисовка
renderPage();
