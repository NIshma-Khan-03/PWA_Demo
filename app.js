

document.getElementById('ping').addEventListener('click', function(){

    document.getElementById('out').textContent="JS is working";
})


//helper file
//runs in background, seperate from the main page
//offline permance, overall performance, push nptofications

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(()=> console.log('service Worker Registereed', err))
    .catch(err => console.log('SW registration failed', err));

}