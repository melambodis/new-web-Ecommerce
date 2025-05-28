



// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// slides[currentIndex].style.display = 'block';
// slides[currentIndex].style.transform = 'translateX(0)';

// function showNextSlide() {
//     slides[currentIndex].style.transition = 'transform 1s ease-in-out';
//     slides[currentIndex].style.transform = 'translateX(-100%)'; // حرك الصورة القديمة لليسار

//     const nextIndex = (currentIndex + 1) % slides.length;
//     slides[nextIndex].style.display = 'block';
//     slides[nextIndex].style.transform = 'translateX(100%)'; // حط الصورة الجاية على اليمين

//     setTimeout(() => {
//         slides[nextIndex].style.transition = 'transform 1s ease-in-out';
//         slides[nextIndex].style.transform = 'translateX(0)'; // اسحب الصورة الجاية لمكانها
//     }, 20);

//     setTimeout(() => {
//         slides[currentIndex].style.display = 'none'; // اخفي الصورة القديمة بعد التحريك
//         slides[currentIndex].style.transition = '';
//         slides[currentIndex].style.transform = 'translateX(0)';
//         currentIndex = nextIndex;
//     }, 1000);
// }

// setInterval(showNextSlide, 3000);


