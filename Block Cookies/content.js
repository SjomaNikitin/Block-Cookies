

function removeElem(element) {
    element.parentElement.removeChild(element);
}

const removers = [
    function () {
        const elem = document.querySelector("reddit-cookie-banner");
        if (elem) {
            removeElem(elem);
            return true;
        }
    },
    function () {
        const elem = document.querySelector("._1MLS_xjiUjam_u2qmURY4i");
        if (elem) {
            const styles = document.createElement("style");
            styles.innerText="html body{overflow: auto !important}";
            document.head.appendChild(styles);
            console.log("founded ._1MLS_xjiUjam_u2qmURY4i");
            return true;
        }
    },
    function () {
        const elem = document.querySelector(".btn.secondary.reject-all");
        if (elem) {
            elem.click();
            return true;
        }
    },
    function () {
        const elem = document.querySelector("[aria-label][aria-modal][role='dialog']")
        if (elem) {
            const styles = document.createElement("style");
            styles.innerText="html body{overflow: auto !important}";
            document.head.appendChild(styles);
            console.log("founded [aria-label][aria-modal][role]");
        }
    },
    function () {
        const elem = document.querySelector("[jscontroller][jsaction='click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;'][jsname][data-idom-class][aria-label][class]")
        if (elem) {
            elem.click();
            return true;
        }
    },
    function () {
        const elem = document.querySelector("[data-testid='reject_home_view_action'][data-role='reject-rodo']");
        if(elem){
            elem.click();
            return true;
        }
    },
    function () {
        const elem = document.querySelector(".ulheJb0a");
        if(elem){
            document.body.overflow="auto"
            return true;
        }
    },
    function () {
        const elem = document.querySelector("#modal-root");
        if(elem){
            const styles = document.createElement("style");
            styles.innerText="html body{overflow: auto !important}";
            document.head.appendChild(styles);
            console.log("founded #modal-root");
        
            return true;
        }
    },
    function () {
        const elem = document.querySelector(".gl-modal.gl-modal--mobile-full.gl-modal--active.gl-modal--full-mobile.cookie-consent-modal");
        if(elem){
            const styles = document.createElement("style");
            styles.innerText="html body{overflow: auto !important}";
            console.log("founded .gl-modal.gl-modal--mobile-full.gl-modal--active.gl-modal--full-mobile.cookie-consent-modal");
            document.head.appendChild(styles);
            return true;
        }
    },
    function () {
        const elem = document.querySelector(".flex.items-center.justify-center");
        if(elem){
           console.log(elem.children);
           return true;
        }
    },
    function () {
        const elem = document.querySelector(".fc-dialog-content");
        if(elem){
            const styles = document.createElement("style");
            styles.innerText="html body{overflow: auto !important}";
            document.head.appendChild(styles);
            return true;
        }
    },
    function(){
        const elem = document.querySelector("#didomi-popup");
        if(elem){
            const styles = document.createElement("style");
            styles.innerText="html body.region_europe.content{overflow: auto !important}";
            document.head.appendChild(styles);
            console.log("founded #didomi-popup");
            return true;
        }
    }
];


addEventListener("load", (event) => {
        for (const remover of removers) {
            if (remover()) {
                break;
            }
        }
    let num = 0;
    let intervalID = setInterval(function () {
        if(num<15){
            num++
            for (const remover of removers) {
                if (remover()) {
                    clearInterval(intervalID);
                    break;
                }
            }
        } else {
            clearInterval(intervalID);
        }

    }, 700);
});