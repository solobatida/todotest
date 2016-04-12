/**
 * Created by solobatida on 12/04/16.
 */

var allInput;

function begin(){
    
    allInput = document.querySelectorAll('header input');
    
    for (var i=0;i<allInput.length;i++){
        allInput[i].addEventListener('click',remove);
        
    }


}


function remove(){
    alert('mi');
    this.style.display = 'none';

}

addEventListener('load',begin);