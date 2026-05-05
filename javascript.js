const lines = [
    " ",
    " ",
    "No one saw him disembark in the unanimous night,",
    "He climbed up to the circular enclosure crowned with a stone tiger or horse,",
    "which sometimes was the color of flame and now was that of ashes.",
    "This circle was a temple which had been devoured by ancient fires,",
    "He knew that his immediate obligation was to dream.",
    "He wanted to dream a man.",
    "He wanted to dream him in minute entirety and impose him on reality.",
    "The stranger dreamed that he was in the center of a circular amphitheater",
    "Clouds of taciturn students filled the tiers of seats",
    "The man lectured his pupils on anatomy, cosmography, and magic:",
    "He was seeking a soul worthy of participating in the universe",
    "to redeem one of them from his condition of empty illusion",
    "and interpolate him into the real world.",
    "After nine or ten nights he understood with a certain bitterness",
    "he could expect nothing from those pupils who accepted his doctrine passively,",
    "but he could expect something from those who occasionally dared to oppose him.",
    "The former group, although worthy of love and affection,",
    "could not ascend to the level of individuals;",
    "the latter pre-existed to a slightly greater degree.",
    "Asleep or awake, the man thought over the answers of his phantoms,",
    "did not allow himself to be deceived by imposters,",
    "and in certain perplexities he sensed a growing intelligence.",
    "One afternoon, he dismissed the vast illusory student body for good,",
    "and kept only one pupil.",
    "He was a taciturn, sallow boy, at times intractable,",
    "and whose sharp features resembled of those of his dreamer.",
    "After a few private lessons, his progress was enough to astound the teacher.",
    "Nevertheless, a catastrophe took place.",
    "He understood that he had not dreamed.",
    "All that night and all day long,",
    "the intolerable lucidity of insomnia fell upon him.",
    "He tried to assemble the student body,",
    "but scarcely had he articulated a few brief words of exhortation,",
    "when it became deformed and was then erased.",
    "In his almost perpetual vigil, tears of anger burned his old eyes.",
    "He understood that modeling the incoherent,",
    "and vertiginous matter of which dreams,",
    "are composed was the most difficult task that a man could undertake.",
    "He swore he would forget the enormous hallucination,",
    " which had thrown him off at first,",
    "and he sought another method of work.",
    "He spent a month recovering his strength.",
    "Before resuming his task, he waited until the moon's disk was perfect.",
    "Then, in the afternoon, he purified himself in the waters of the river,",
    "worshiped the planetary gods,",
    "pronounced the prescribed syllables of a mighty name,",
    "and went to sleep.",
    "He dreamed almost immediately, with his heart throbbing.",
    "He dreamed that it was warm, secret, about the size of a clenched fist,",
    "and of a garnet color within the penumbra of a human body,",
    "as yet without face or sex;",
    "during fourteen lucid nights he dreampt of it with meticulous love.",
    "Every night he perceived it more clearly.",
    "On the fourteenth night he lightly touched the pulmonary artery,",
    "then the whole heart, outside and inside.",
    "He was satisfied.",
    "He deliberately did not dream for a night.",
    "He took up the heart again.",
    "Within a year he had come to the skeleton and the eyelids.",
    "The innumerable hair was perhaps the most difficult task.",
    "He dreamed an entire man--a young man,",
    "but who did not sit up or talk, who was unable to open his eyes.",
    "Night after night, the man dreamt him asleep.",
    "When he had exhausted all supplications to the deities of earth,",
    "he threw himself at the feet of the effigy",
    "which was perhaps a tiger or perhaps a colt and implored its unknown help.",
    "That evening, at twilight, he dreamt of the statue.",
    "He dreamt it was alive, tremulous:",
    "This multiple god revealed to him that his earthly name was Fire,",
    "and that in this circular temple, ",
    "people had once made sacrifices to him and worshiped him",
    "Fire would magically animate the dreamed phantom,",
    "all creatures would believe to be a man of flesh and blood,",
    "except Fire itself and the dreamer,",
    "Fire commanded that once this man had been instructed in all the rites,",
    "he should be sent to the other ruined temple",
    "so that some voice would glorify him in that deserted edifice.",
    "In the dream of the man that dreamed, the dreamed one awoke.",
    "The wizard carried out the orders he had been given.",
    "He devoted a certain length of time (finally proved to be two years),",
    "to instructing him in the mysteries of the universe and the cult of fire.",
    "Gradually, the wizard began accustoming him to reality.",
    "With a certain bitterness,",
    "he understood that his son was ready to be born,",
    "and perhaps impatient.",
    "He destroyed in him all memory of his years of apprenticeship,",
    "so that his son should never know that he was a phantom,",
    "so that he should think himself a man like any other.",
    "That night he kissed him for the first time,",
    "and sent him off to the other temple.",
    "His victory and peace became blurred with boredom.",
    "After a certain time,",
    "A few years or decades,",
    "two oarsmen awoke him at midnight;",
    "he could not see their faces,",
    "but they spoke to him of a charmed man in a temple of the North,",
    "capable of walking on fire without burning himself.",
    "The wizard suddenly remembered the words of the god.",
    "Of all the creatures that people the earth,",
    "Fire was the only one who knew his son to be a phantom.",
    "He feared lest his son should meditate on this abnormal privilege,",
    "and by some means find out he was a mere simulacrum.",
    "Not to be a man,",
    "to be a projection of another man's dreams,",
    "what an incomparable humiliation, what madness!",
    "Any father is interested in the sons he has procreated",
    "out of the mere confusion of happiness.",
    "His misgivings ended abruptly,",
    "but not without certain forewarnings.",
    "After a long drought, a remote cloud,",
    "as light as a bird, appeared on a hill",
    "then toward the South, the sky took on the rose color of leopard's gums,",
    "then came clouds of smoke which rusted the metal of the nights,",
    "afterwards came the panic-stricken flight of wild animals.",
    "For what had happened many centuries before was repeating itself.",
    "The ruins of the sanctuary of the god of Fire was destroyed by fire.",
    "In a dawn without birds, the wizard saw the concentric fire licking the walls.",
    "For a moment, he thought of taking refuge in the water,",
    "but then he understood that death was coming.",
    "He walked toward the sheets of flame.",
    "They did not bite his flesh,",
    "they caressed him and flooded him without heat or combustion.",
    "With relief,",
    "with humiliation,",
    "with terror,",
    "he understood that he also was an illusion,",
    "that someone else was dreaming him..."
];

/* ── DOM refs ─────────────────────────────────────────────────────────────── */
const visiblerings = 8;
const ringsEl      = document.getElementById("rings");
const group        = document.getElementById("textrings");
const ts           = Array.from({ length: visiblerings }, (_, i) => document.getElementById(`t${i + 1}`));
const fire         = document.getElementById("fire");
const firepng      = document.getElementById("firepng");
const blackout     = document.getElementById("blackout");
const intro        = document.getElementById("intro");
const progressbar  = document.getElementById("progressbar");
const scrollhint   = document.getElementById("scrollhint");

/* ── Scroll thresholds ────────────────────────────────────────────────────── */
const textend       = 0.80;
const firestarttext = "They did not bite his flesh,";
const triggerindex  = lines.findIndex(s => s.trim() === firestarttext);
const scrollsteps   = lines.length + visiblerings;
const firestart     = (triggerindex >= 0 ? triggerindex : lines.length - 1) / scrollsteps;
const firebegin     = firestart * textend;
const firetime      = 0.10;
const blackscreen   = 0.05;
const fireend       = Math.min(0.98, firebegin + firetime);
const blackscreenup = fireend;
const end           = Math.min(0.999, blackscreenup + blackscreen);

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function fit(x)    { return Math.max(0, Math.min(1, x)); }
function movein(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }

/* ═══════════════════════════════════════════════════════════════════════════
   CIRCULAR SLIDER
   ─────────────────────────────────────────────────────────────────────────
   Uses the Pointer Events API (pointerdown / pointermove / pointerup) which
   works identically for mouse, touch, and stylus — no separate touch branch.

   setPointerCapture() on the SVG element means pointermove keeps firing even
   if the pointer leaves the element, which is essential for smooth circular
   dragging.

   The SVG has explicit width/height attributes (110×110) AND the CSS now
   scopes the large width rule to #rings only, so getBoundingClientRect()
   on sliderSvg returns the correct 110×110 box every time.
   ═══════════════════════════════════════════════════════════════════════════ */
const circSlider   = document.getElementById("circSlider");
const sliderSvg    = document.getElementById("sliderSvg");
const sliderArc    = document.getElementById("sliderArc");
const sliderHandle = document.getElementById("sliderHandle");

const SLIDER_R = 42;
const SLIDER_C = 2 * Math.PI * SLIDER_R; // ≈ 263.894

let sliderDragging = false;

/** Sync the visual dial to a 0–1 text-progress value. */
function updateSlider(p) {
    sliderArc.style.strokeDashoffset = SLIDER_C * (1 - p);
    const a = -Math.PI / 2 + p * 2 * Math.PI;
    sliderHandle.setAttribute("cx", (SLIDER_R * Math.cos(a)).toFixed(3));
    sliderHandle.setAttribute("cy", (SLIDER_R * Math.sin(a)).toFixed(3));
}

/**
 * Convert pointer coords → 0–1 progress by measuring the clockwise angle
 * from the top of the slider.  Uses the SVG element's bounding rect so the
 * calculation is always relative to where the dial actually appears on screen.
 */
function progressFromPointer(px, py) {
    const r  = sliderSvg.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    let a    = Math.atan2(py - cy, px - cx) + Math.PI / 2;
    if (a < 0) a += 2 * Math.PI;
    return a / (2 * Math.PI);               // 0 (top) → 1 (full rotation)
}

/** Jump the page scroll to match a 0–1 text progress value. */
function seekToProgress(p) {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    window.scrollTo({ top: fit(p) * textend * max, behavior: "instant" });
}

/* Pointer Events — covers mouse, touch, and stylus uniformly */
sliderSvg.addEventListener("pointerdown", (e) => {
    sliderDragging = true;
    sliderSvg.setPointerCapture(e.pointerId); // keep receiving events after leaving
    circSlider.classList.add("active");
    e.preventDefault();
});

sliderSvg.addEventListener("pointermove", (e) => {
    if (!sliderDragging) return;
    const p = progressFromPointer(e.clientX, e.clientY);
    seekToProgress(p);
    updateSlider(p); // update the dial visually right away, don't wait for scroll event
});

sliderSvg.addEventListener("pointerup", (e) => {
    sliderDragging = false;
    sliderSvg.releasePointerCapture(e.pointerId);
    circSlider.classList.remove("active");
});

sliderSvg.addEventListener("pointercancel", (e) => {
    sliderDragging = false;
    circSlider.classList.remove("active");
});

/* ── Intro ────────────────────────────────────────────────────────────────── */
let resetting = false;

function playintro() {
    intro.classList.remove("play");
    void intro.offsetWidth;
    intro.classList.add("play");
}

function reset() {
    resetting = true;
    window.scrollTo(0, 0);
    fire.classList.remove("up");
    firepng.style.transform = "translateY(110vh)";
    blackout.style.transform = "translateY(100%)";
    setTimeout(() => {
        playintro();
        resetting = false;
        scroll();
    }, 50);
}

/* ── Main scroll handler ──────────────────────────────────────────────────── */
function scroll() {
    if (resetting) return;

    const doc       = document.documentElement;
    const maxScroll = doc.scrollHeight - doc.clientHeight;
    const p         = maxScroll > 0 ? doc.scrollTop / maxScroll : 0;

    const textP = fit(p / textend);
    const k     = Math.floor(textP * (lines.length + visiblerings));

    ringsEl.style.transform = `scale(${0.95 + textP * 0.45})`;

    for (let j = 0; j < visiblerings; j++) {
        const idx = k - j;
        ts[j].textContent = (idx >= 0 && idx < lines.length) ? lines[idx] : "";
    }

    group.setAttribute("transform", `rotate(${(textP - 0.5) * 12})`);

    // Sync slider only when not being dragged (avoids fighting the user)
    if (!sliderDragging) updateSlider(textP);

    progressbar.style.height = (textP * 100) + "%";



    // Fire
    if (p < firebegin) {
        fire.classList.remove("up");
        firepng.style.transform = "translateY(110vh)";
    } else {
        fire.classList.add("up");
        const fireP = fit((p - firebegin) / (fireend - firebegin));
        firepng.style.transform = `translateY(${(1 - movein(fireP)) * 110}vh)`;
    }

    // Blackout + loop reset
    if (p < blackscreenup) {
        blackout.style.transform = "translateY(100%)";
    } else {
        const blackP = fit((p - blackscreenup) / (end - blackscreenup));
        blackout.style.transform = `translateY(${(1 - movein(blackP)) * 100}%)`;
        if (blackP >= 0.999) reset();
    }
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    playintro();
    scroll();
});

window.addEventListener("scroll", () => requestAnimationFrame(scroll), { passive: true });
