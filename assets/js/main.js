let mainBoxElement = document.createElement('main');
let spanElement = document.createElement("span");
let buttonElement = document.createElement("button");
spanElement.classList = "pattern";
mainBoxElement.classList = "main";
mainBoxElement.append(spanElement);
mainBoxElement.append(buttonElement);
document.querySelector("body").prepend(mainBoxElement);


function fetchAPI () {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else{
            throw Error(response.status);
        }
    })
    .then((json) => {
        let adviceTextElement = document.createElement("div");
        let adviceIdElement = document.createElement("span");
        adviceIdElement.innerText = 'Advice # '+json.slip['id'];
        adviceTextElement.classList = "advice_txt";
        adviceTextElement.innerText = '" '+json.slip['advice']+ ' "';
        mainBoxElement.prepend(adviceTextElement);
        adviceTextElement.prepend(adviceIdElement);
    })
    .catch((error) => console.log(error));
}

fetchAPI();

let buttonDice = document.querySelector("button");
buttonDice.addEventListener("click", () => {
    let adv_box = document.querySelector(".advice_txt");
    if(adv_box) {
        adv_box.remove();
        fetchAPI();
    }
});