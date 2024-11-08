// TODO
const a_mettre_en_rouge = document.querySelector("#a-mettre-en-rouge");
a_mettre_en_rouge.style.color = "red";

const en_rouge_suite_a_click = document.querySelector("#en-rouge-suite-a-click")
en_rouge_suite_a_click.addEventListener("click", (evt) => { en_rouge_suite_a_click.style.color = "red" });

const collH2 = document.querySelectorAll("H2");
collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red"
    })
});