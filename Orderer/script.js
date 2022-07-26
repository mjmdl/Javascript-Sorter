let mode_button = document.getElementsByClassName("mode-btn")[0];
let ascendent_mode = false;

function appendNumberField()
{
    let inputs = document.getElementsByClassName("number-input");
    let last_input = inputs[inputs.length - 1];

    let new_input = last_input.cloneNode(false);
    new_input.placeholder = "Número " + (inputs.length + 1);
    new_input.value = "";
    
    last_input.parentNode.insertBefore(new_input, last_input.nextSibling);
}

function getInputedNumbers()
{
    let number_fields = document.getElementsByClassName("number-input");
    let numbers = [];
    
    for (let i = 0; i < number_fields.length; i++)
    {
        let number = parseFloat(number_fields[i].value);
        if (!isNaN(number))
        {
            numbers.push(parseFloat(number_fields[i].value));
        }
    }

    return numbers;
}

function setNumberFields(number_list)
{
    let number_fields = document.getElementsByClassName("number-input");

    for (i = 0; i < number_fields.length; i++)
    {
        if (i != number_list.length)
        {
            number_fields[i].value = number_list[i];
        } 
        else
        {
            number_fields[i].value = "";
        }
    }
}

function getInOrder(numbers)
{
    let new_list = numbers;
    let ordered = false;
    
    while (!ordered)
    {
        ordered = true;

        for (let i = 0; i < numbers.length - 1; i++)
        {
            if (new_list[i] < new_list[i + 1])
            {
                let current = new_list[i];
                new_list[i] = new_list[i + 1];
                new_list[i + 1] = current;

                ordered = false;
            }
        }
    }

    return new_list;
}

function orderFields()
{
    let numbers = getInputedNumbers();
    let ordered = getInOrder(numbers);
    
    setNumberFields(ascendent_mode ? ordered.reverse() : ordered);
}

function changeOrderMode()
{
    if (ascendent_mode)
    {
        ascendent_mode = false;
        mode_button.value = "v";
    }
    else
    {
        ascendent_mode = true;
        mode_button.value = "^";
    }

    orderFields();
}

appendNumberField();
appendNumberField();
