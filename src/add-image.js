import passportsize from './passportsize.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = "passport";
    img.width = "30px";
    img.src = passportsize;
    const body = document.querySelector("body");
    body.append(img);
}

export default addImage;