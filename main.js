// create a div with jquery

let div = $('<div>Click Here</div>');

//  Add the `<div>` to the body of your document using jquery

$('body').append(div);



// * Add a `<ul>` to the body of your document using jquery

let ul = $('<ul></ul>');

$('body').append(ul);


// * Add a click listener on the `<div>` that makes in the text in the input box added earlier and add it to the `<ul>`

div.on('click', function() {
    let input = $('input').val();
    let li = $('<li></li>');
    li.text(input);
    ul.append(li);
    });

    
