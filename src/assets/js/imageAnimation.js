console.log("Ucitan")

window.onscroll = () => {
    imageAnimation();
    imageAnimation2();
}

const imageAnimation = () => {
    let sectionToAnimate = document.querySelector('.animated .content');
    let sectionPosition = sectionToAnimate.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    let leftImage = document.querySelector('.slideFromLeft');
    let rightText = document.querySelector('.slideFromRight');

    console.log(`Screen position is: ${screenPosition}`);
    console.log(`Section position is: ${sectionPosition}`);

    if(sectionPosition < screenPosition){
        leftImage.classList.add('animate');
        rightText.classList.add('animate');
    }else{
        leftImage.classList.remove('animate');
        rightText.classList.remove('animate');
    }

}

const imageAnimation2 = () => {
    let sectionToAnimate = document.querySelector('.animated2 .content');
    let sectionPosition = sectionToAnimate.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    let leftText = document.querySelector('.animated2 .slideFromLeft');
    let rightImage = document.querySelector('.animated2 .slideFromRight');

    console.log(`Screen position is: ${screenPosition}`);
    console.log(`Section position is: ${sectionPosition}`);

    if(sectionPosition < screenPosition){
        leftText.classList.add('animate');
        rightImage.classList.add('animate');
    }else{
        leftText.classList.remove('animate');
        rightImage.classList.remove('animate');
    }

}