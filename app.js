/* window.addEventListener('load',()=>){
    const form = document.querySelector('#add')
} */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()

}
function ready() {
  /*   var Remove = document.getElementsByClassName('delete')

    for (var i = 0; i < Remove.length; i++) {
        var button = Remove[i]
        button.addEventListener('click', removeItem)

    }
    
    var Edit = document.getElementsByClassName('edit')
    
    for (var i = 0; i < Edit.length; i++) {
        var button = Edit[i]
        button.addEventListener('click', EditItem)
       // console.log(button)
    } */
    /*  var f = document.getElementsByClassName('text')
    
    for (var i = 0; i < f.length; i++) {
        var button = f[i]
        button.addEventListener('click', Edititem)
       //console.log(f)
    }
  */
  
   
    addclicked()
}

/* function removeItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()

} */

/* function EditItem (event) {
    var Edit = event.target

    Edit.innerText = "Save"
    
    //Edititem ();
 var f = document.getElementsByClassName('text')
    for (var i = 0; i < f.length; i++) {
        var b = f[i]
            b.removeAttribute("readonly")
             b.focus();
             console.log(b)

        
      // console.log(f)
    }
 
} */
/* 
function Edititem (event) {
            var f = event.target
            f.removeAttribute("readonly")
             f.focus();
            //  console.log(f)
    } 
 */
function addclicked(event) {
    const form = document.querySelector('.add');
    const input = document.querySelector('#Input');
    const listing = document.querySelector('#tasks');
    

    //const listed = document.createElement('div');
    //const listed = document.createElement('div');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        console.log(task);
        if (!task) {
            alert("Input a valid Task");
            return;

        }
        const listed = document.createElement("div");
        listed.classList.add("task");

        const listedCon = document.createElement("div");
        listedCon.classList.add("content");
        

        listed.appendChild(listedCon);

        const listL = document.createElement("label");
        listL.classList.add("done");
        

        listedCon.appendChild(listL);

        const listC = document.createElement("input");
        listC.type='checkbox';

        listL.appendChild(listC);

        const listedIn = document.createElement("input");
        listedIn.classList.add("text");
        listedIn.setAttribute("id", "stay");
        listedIn.type='text';
        listedIn.value=task;
        listedIn.setAttribute("readonly", "readonly");

        listedCon.appendChild(listedIn);

        const listA = document.createElement("div");
        listA.classList.add("action");
        

        listedCon.appendChild(listA);

        const listE = document.createElement("button");
        listE.classList.add("edit");
        listE.innerHTML = "Edit";
        listE.setAttribute("id", "stay");

        listA.appendChild(listE);

        const listD = document.createElement("button");
        listD.classList.add("delete");
        listD.innerHTML = "Delete";
        listD.setAttribute("id", "stay");

        listA.appendChild(listD);


        listing.appendChild(listed);

        listE.addEventListener('click', () =>{
           if (listE.innerText.toLowerCase () == "edit"){
            listedIn.removeAttribute("readonly");
            listedIn.focus();
            listE.innerText="Save"
           } else{
            listedIn.setAttribute("readonly", "readonly");
            listE.innerText="Edit"
           }
        });

        listD.addEventListener('click', () =>{
            listed.classList.add("faded");
           
           listed.addEventListener('transitionend', function(){
            listing.removeChild(listed);
           });
            
        });

        listC.addEventListener('click', () =>{
            listedIn.classList.toggle('completed');
        });


       /*  const listed = document.createElement('div');
        listed.classList.add("task")
        var ToDo =

            ` 
            <div class="task">
                <div class="content">
                    <label class="done">
                        <input type="checkbox"   />
                    </label>
                    <input type="text" class="text" value="${task}" id="stay" readonly>
                    <div class="action">
                        <button class="edit" id="stay">Edit</button>
                        <button class="delete" id="stay">listD</button>
                    </div>
                </div>
            </div>
         `

        listed.innerHTML = ToDo
        listing.append(listed)
        console.log(ToDo)

        var Remove = document.getElementsByClassName('delete')

        for (var i = 0; i < Remove.length; i++) {
            var button = Remove[i]
            button.addEventListener('click', removeItem)

        }

        var Edit = document.getElementsByClassName('edit')

        for (var i = 0; i < Edit.length; i++) {
            var button = Edit[i]
            button.addEventListener('click', EditItem)

        }

        var f = document.getElementsByClassName('text')
    
        for (var i = 0; i < f.length; i++) {
            var button = f[i]
            button.addEventListener('click', Edititem)
           console.log(f)
        }
    */

    })
 

    //cartRow.getElementsByClassName('remove')[0].addEventListener('click',removeItem)
    //cartRow.getElementsByClassName('cartQ')[0].addEventListener('click',Qchange)


}
