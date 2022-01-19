
 //* slide partner*//
const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector(".img-xx");
const closeIcon = document.querySelector(".icon-x");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");
 
window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++){
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);
            function preview() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            const prewBtn = document.querySelector(".prew");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prewBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prewBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prewBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prewBtn.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                prewBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
            }

            shadow.onclick = ()=>{
                previewBox.classList.remove("show");
                shadow.style.display = "none";
            }
        }
    }
}