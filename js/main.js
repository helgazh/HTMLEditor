;(function () {
    "use strict";

    const div = document.querySelector('.ba-div');
    const textarea = document.querySelector('.ba-textarea');

    textarea.hidden = true;

    document.addEventListener('keydown', change);

    function change(event){
        //ctrlE
        if(event.keyCode == 69 && event.ctrlKey){ 

            event.preventDefault();

            textarea.value = div.innerHTML;
            
            textarea.hidden = false;
            div.hidden = true;
            textarea.focus();
        }
        //ctrlS
        if(event.keyCode == 83 && event.ctrlKey){ 
            event.preventDefault();
            div.innerHTML = textarea.value;
            textarea.hidden = true;
            div.hidden = false;

        }
        //esc
        if(event.keyCode == 27){ 
            event.preventDefault();


            textarea.hidden = true;
            div.hidden = false;
        }
    }

})();