import React from "react";

let position = 0;
let screenWidth = document.documentElement.clientWidth
let slidesToShow = (screenWidth < 1024) ? 2 : 4;
const slidesToScroll = 1;
const container = document.querySelector('.homes-block-cards');
const track = document.querySelector('.homes-list');
const items = document.querySelectorAll('.homes-list-item');
const btnPrev = document.querySelector('#hgl-leftBtn');
const btnNext = document.querySelector('#hgl-rightBtn');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log('screenWidth', screenWidth)
    console.log('slidesToShow', slidesToShow)
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () =>{
    const itemsLeft = Math.abs(position) / itemWidth

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

