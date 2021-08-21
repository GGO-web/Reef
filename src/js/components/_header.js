const parseVal = (value) => {
   if (value) {
      return parseInt(value);
   }

   return 0;
}

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight + parseVal(header.style.paddingTop) + parseVal(header.style.paddingBottom);

const vhCalculate = () => {
   const vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
}

vhCalculate();
document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

window.addEventListener("resize", () => {
   vhCalculate();
   const headerHeight = header.offsetHeight + parseVal(header.style.paddingTop) + parseVal(header.style.paddingBottom);
   document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
});
