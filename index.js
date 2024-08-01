
// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.btn');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             // const productId = button.closest('.product').id;
//             // alert(`Redirecting to purchase page for ${productId}`);
//             window.location.href = "http://fkrt.it/fEU5KhuuuN";
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const url = button.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
