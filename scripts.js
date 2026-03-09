// Scroll to Puppies section
document.getElementById('shopNow').addEventListener('click', () => {
    document.getElementById('puppies').scrollIntoView({behavior:'smooth'});
});

// Popup logic
function showPopup(name, breed, age, imgSrc){
    document.getElementById('popupName').innerText = name;
    document.getElementById('popupBreed').innerText = "Breed: "+breed;
    document.getElementById('popupAge').innerText = "Age: "+age;
    document.getElementById('popupImg').src = imgSrc;
    document.getElementById('popup').style.display = 'flex';
}
document.getElementById('closePopup').addEventListener('click', ()=>{document.getElementById('popup').style.display='none';});

document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const fullNumber = countryCode + phoneNumber;

    const whatsappLink = "https://wa.me/237651639725";

    window.open(whatsappLink, "_blank");
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = {threshold:0.1};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('visible'); appearOnScroll.unobserve(entry.target);}
    });
}, appearOptions);

faders.forEach(fader => {appearOnScroll.observe(fader);});

