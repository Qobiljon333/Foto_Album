const inputNumber = document.querySelector('#input_number')
const form = document.querySelector('#form')
const indexBody = document.querySelector('.index_body')



form.addEventListener("submit",addList)

function addList(e){
    e.preventDefault()

    let inputValue = inputNumber.value

    if(+inputValue !==1111){
        inputValue =""
        return alert("Xato malumat kiritdingiz !!!")

    }else{
        form.parentElement.classList.add("none")
        indexBody.classList.add("ACTIVE")

    }
}





















