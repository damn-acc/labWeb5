document.getElementById('swapButton').addEventListener('click', () => {
    const blockX = document.querySelector('.block-x');
    const blockY = document.querySelector('.block-y');

    const contentX = blockX.innerHTML;
    const contentY = blockY.innerHTML;

    blockX.innerHTML = contentY;
    blockY.innerHTML = contentX;
});
