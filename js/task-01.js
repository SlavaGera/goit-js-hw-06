const arrList = document.querySelectorAll('.item');
console.log(`Number of categories : ${arrList.length}`);

arrList.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});