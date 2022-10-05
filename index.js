//  const profile = new Object();
//   profile.brand = "Toyota",
//    profile.school = "living"


// const school = Object.create(profile);
// document.getElementById("h").innerHTML=profile.school + " "+ "hello world";
 const testimonial = document.getElementsByClassName("body9-container2-about1");
 let translateX = 0; 

testimonial[0].style.transform =  "translateX(-50%)"

const sideSlide = (value) => {
  translateX += value;
   for (let i = 0; i < testimonial.length; i++) {
    testimonial[i].style.transform = `translateX(${translateX}%)`;
   }
};
