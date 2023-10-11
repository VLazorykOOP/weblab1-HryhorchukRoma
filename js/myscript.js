const colorChoose = document.querySelectorAll(".color"); //клас для зміни  active
const gradientBg = document.querySelectorAll(".gradient"); //клас для зміни  second
const gradientShoe = document.querySelectorAll(".shoe"); //клас для зміни  show
const price = document.querySelector("#outprice");
const prices = ["189.99", "179.99", "169.99", "159.99", "199.99"];
const remove = ["active", "second", "show"];

colorChoose.forEach((but, index) => {
  but.addEventListener("click", () => {
    replacement(colorChoose, remove[0]);
    colorChoose[index].classList.add(remove[0]);
    replacement(gradientBg, remove[1]);
    gradientBg[index].classList.add(remove[1]);
    replacement(gradientShoe, remove[2]);
    gradientShoe[index].classList.add(remove[2]);
    price.textContent = `${prices[index]} $`;
  });
});

function replacement(element, remove) {
  element.forEach((item) => {
    if (item.classList.contains(remove)) {
      item.classList.remove(remove);
    }
  });
}
