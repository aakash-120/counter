var counter =0;

function increase()
{
    counter = counter +1 ;
    display();
}

function decrease()
{
    if(counter <= 0)
    {
        document.getElementById("id4").innerHTML = "negative nuber not allowed";
    }
    else{
    counter = counter -1 ;
    display();
    }
}

function display()
{
    document.getElementById("id4").innerHTML = counter;
}

