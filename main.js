// Данные альбома: фото + тексты на трёх языках
const pages = [
    {
        image: "images/hero.jpeg",
        ru: {
            tagline: "ПРЕМИАЛЬНЫЙ ФОТОАЛЬБОМ",
            title: "Наш день ожидания чуда",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Каждая страница этого альбома хранит дыхание счастья, прикосновения и лёгкие шевеления новой жизни. В этот день рождалась семья из трёх.",
            mini: "Этот альбом создан, чтобы внуки тоже могли почувствовать, как их ждали."
        },
        sv: {
            tagline: "PREMIUM FOTOALBUM",
            title: "Vår dag i väntan på miraklet",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Varje sida i albumet bär andetag av lycka, varma händer och stilla rörelser från ett nytt liv. Den här dagen föddes en familj på tre.",
            mini: "Albumet är gjort för att även barnbarnen ska känna hur efterlängtade de var."
        },
        en: {
            tagline: "PREMIUM PHOTO ALBUM",
            title: "Our Day of Expecting a Miracle",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "Every page of this album keeps the breath of happiness, gentle touches and the soft movements of new life. On this day, a family of three was born.",
            mini: "This album is made so even your grandchildren can feel how wanted they were."
        }
    },
    {
        image: "images/gallery dorizontal.jpeg",
        ru: {
            tagline: "ЛИСТ 1",
            title: "Горизонтальное счастье",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Мы опираемся друг на друга, а малыш — на нас обоих. Здесь всё будущее в одном спокойном вдохе.",
            mini: "Фотография о том, как комфортно миру, когда мама и папа рядом."
        },
        sv: {
            tagline: "SIDA 1",
            title: "Liggande lycka",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Vi vilar mot varandra och den lilla vilar mot oss båda. Hela framtiden får plats i ett enda lugnt andetag.",
            mini: "En bild om hur trygg världen är när mamma och pappa är nära."
        },
        en: {
            tagline: "PAGE 1",
            title: "Happiness in Repose",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "We lean on each other and the baby leans on us both. The whole future fits into a single quiet breath.",
            mini: "A photograph about how safe the world is when mum and dad are close."
        }
    },
    {
        image: "images/gallery.jpeg",
        ru: {
            tagline: "ЛИСТ 2",
            title: "Вдох между двумя сердцами",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Здесь мы учимся держаться за руки не только друг друга, но и наше завтра. Между ладонями помещается целая жизнь.",
            mini: "Кадр, в котором ожидание звучит громче, чем слова."
        },
        sv: {
            tagline: "SIDA 2",
            title: "Andetag mellan två hjärtan",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Här lär vi oss att hålla i både varandra och vår morgondag. Mellan våra händer får ett helt liv plats.",
            mini: "Ett ögonblick där väntan talar högre än orden."
        },
        en: {
            tagline: "PAGE 2",
            title: "A Breath Between Two Hearts",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "Here we learn to hold not only each other but also our tomorrow. A whole life fits between our hands.",
            mini: "A frame where expectation speaks louder than words."
        }
    },
    {
        image: "images/gallery1.jpeg",
        ru: {
            tagline: "ЛИСТ 3",
            title: "Объятие, в котором уже трое",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Мама, папа и маленькое сердечко между ними. В это объятие можно вернуться в любой момент жизни.",
            mini: "Фотография, где любовь уже нашла себе третье место."
        },
        sv: {
            tagline: "SIDA 3",
            title: "En kram där vi redan är tre",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Mamma, pappa och ett litet hjärta emellan. Till den här kramen kan man alltid återvända.",
            mini: "En bild där kärleken redan gjort plats för en tredje."
        },
        en: {
            tagline: "PAGE 3",
            title: "An Embrace Made for Three",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "Mum, dad and a tiny heart between them. This is an embrace you can return to at any moment in life.",
            mini: "A picture where love has already found room for a third."
        }
    },
    {
        image: "images/gallery4.jpeg",
        ru: {
            tagline: "ЛИСТ 4",
            title: "Цветы и первые пинки",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Каждый лепесток, как неделя ожидания — хрупкая, но бесконечно счастливая. Мы держим букет, а внутри растёт целый сад.",
            mini: "Кадр, который пахнет весной, даже если за окном зима."
        },
        sv: {
            tagline: "SIDA 4",
            title: "Blommor och de första sparkarna",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Varje kronblad är som en vecka av väntan – skör men oändligt lycklig. I våra händer finns en bukett, i magen växer en hel trädgård.",
            mini: "En bild som doftar vår även om det är vinter ute."
        },
        en: {
            tagline: "PAGE 4",
            title: "Flowers and First Kicks",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "Each petal is like a week of waiting – fragile yet endlessly joyful. A bouquet in our hands, a whole garden growing inside.",
            mini: "A frame that smells like spring even when it’s winter outside."
        }
    },
    {
        image: "images/gallery3.jpeg",
        ru: {
            tagline: "ЛИСТ 5",
            title: "Пауза между вдохами",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Тихий момент, чтобы просто послушать, как внутри шуршит новая жизнь. В эти секунды время почти останавливается.",
            mini: "Фотография, которую хочется рассматривать в тишине."
        },
        sv: {
            tagline: "SIDA 5",
            title: "Pausen mellan andetagen",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Ett stilla ögonblick för att lyssna på livet som rör sig där inne. Just här stannar tiden nästan.",
            mini: "En bild man vill titta på i tystnad."
        },
        en: {
            tagline: "PAGE 5",
            title: "The Pause Between Breaths",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "A quiet moment just to listen to the tiny sounds of life inside. In these seconds, time almost stops.",
            mini: "A photograph you want to look at in silence."
        }
    },
    {
        image: "images/gallery6.jpeg",
        ru: {
            tagline: "ЛИСТ 6",
            title: "Дом там, где этот взгляд",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Тёплый, уверенный и немного влюблённый заново. В этом взгляде уже есть место для маленькой пары глаз.",
            mini: "Любовь, которая не боится становиться больше."
        },
        sv: {
            tagline: "SIDA 6",
            title: "Hem är där den här blicken finns",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Varm, trygg och lite nyförälskad igen. I den här blicken finns redan plats för ett par små ögon till.",
            mini: "Kärlek som inte är rädd för att växa."
        },
        en: {
            tagline: "PAGE 6",
            title: "Home Is Where This Look Is",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "Warm, steady and a little in love all over again. This gaze already has room for one more pair of eyes.",
            mini: "Love that isn’t afraid to grow."
        }
    },
    {
        image: "images/gallery7.jpeg",
        ru: {
            tagline: "ЛИСТ 7",
            title: "Последний кадр до встречи",
            date: "26 января 2021 · Стокгольм, Швеция",
            story: "Мы ещё вдвоём, но уже навсегда втроём. Через несколько недель этот альбом получит первые отпечатки крошечных пальцев.",
            mini: "Финальная страница, где история только начинается."
        },
        sv: {
            tagline: "SIDA 7",
            title: "Sista bilden före mötet",
            date: "26 januari 2021 · Stockholm, Sverige",
            story: "Vi är fortfarande två, men redan för alltid tre. Om några veckor får albumet sina första små fingeravtryck.",
            mini: "Sista sidan där berättelsen egentligen börjar."
        },
        en: {
            tagline: "PAGE 7",
            title: "The Last Frame Before We Meet",
            date: "26 January 2021 · Stockholm, Sweden",
            story: "We are still two, but already forever three. In a few weeks, this album will get its first tiny fingerprints.",
            mini: "The final page where the story is only beginning."
        }
    }
];

let currentLang = "ru";
let currentIndex = 0;

// DOM-элементы
const pageEl = document.getElementById("albumPage");
const imgEl = document.getElementById("pageImage");
const taglineEl = document.getElementById("pageTagline");
const titleEl = document.getElementById("pageTitle");
const dateEl = document.getElementById("pageDate");
const storyEl = document.getElementById("pageStory");
const miniNoteEl = document.getElementById("pageMiniNote");

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const langButtons = document.querySelectorAll(".lang-btn");

// рендер страницы
function renderPage() {
    const pageData = pages[currentIndex][currentLang];

    imgEl.src = pages[currentIndex].image;
    imgEl.alt = pageData.title;

    taglineEl.textContent = pageData.tagline;
    titleEl.textContent = pageData.title;
    dateEl.textContent = pageData.date;
    storyEl.textContent = pageData.story;
    miniNoteEl.textContent = pageData.mini;
}

// навигация с анимацией перелистывания
function goToPage(direction) {
    // эффект перелистывания
    pageEl.classList.remove("turn-right", "turn-left");
    void pageEl.offsetWidth; // перезапустить анимацию

    if (direction === "next") {
        currentIndex = (currentIndex + 1) % pages.length;
        pageEl.classList.add("turn-right");
    } else {
        currentIndex = (currentIndex - 1 + pages.length) % pages.length;
        pageEl.classList.add("turn-left");
    }

    renderPage();
}

// переключение языка
langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        currentLang = lang;

        langButtons.forEach(b => b.classList.remove("lang-btn-active"));
        btn.classList.add("lang-btn-active");

        renderPage();
    });
});

prevBtn.addEventListener("click", () => goToPage("prev"));
nextBtn.addEventListener("click", () => goToPage("next"));

// первый рендер
renderPage();
