let listItems=[];

function getAllGameItem() {
    let gameItem = new XMLHttpRequest();

    gameItem.open('Get', 'http://tiy-28202.herokuapp.com/items');
    gameItem.addEventListener('load', function () {
        let itemResponse = JSON.parse(gameItem.responseText);
        console.log(itemResponse);
        for (let i = 0; i < itemResponse.length; i++) {
            
            listItems.push(itemResponse[i]);
            showAllItems(itemResponse[i]);
        }
        console.log('helloworld');
    });
    console.log(listItems); 
    gameItem.send();
 
   
}



window.addEventListener('load', function () {

    let btnUp = document.querySelector('#btnup1');
    btnUp.addEventListener('click', function () {
        y++;
        axisShow(x, y);
        compareItems(x,y);
    });
    let btnLeft = document.querySelector('#btnleft1');
    btnLeft.addEventListener('click', function () {
        x--;
        axisShow(x, y);
        compareItems(x,y);
    });
    let btnRight = document.querySelector('#btnright1');
    btnRight.addEventListener('click', function () {
        x++;
        axisShow(x, y);
        compareItems(x,y);
        
    });
    let btnDown = document.querySelector('#btndown1');
    btnDown.addEventListener('click', function () {
        y--;
        axisShow(x, y);
        compareItems(x,y);
       

    });

    function axisShow(a, b) {
        let axis = document.querySelector('#page');
        axis.textContent = '(' + a + ', ' + b + ')';
        return axis;
    }
    function compareItems(x,y)
    {
        // delete all children
        let dv = document.querySelectorAll('.div5');
        for (let i = 0; i < dv.length; i++) {
            dv[i].innerHTML='';
        }

        for(let i =0;i <listItems.length;i++)
        {
            if(listItems[i].x === x && listItems[i].y === y)
            {
                //console.log();
                    
                  listItems[i].found =true;
           }
            showAllItems(listItems[i]);
             console.log('list'+listItems);
        }

    }
    let x = 0;
    let y = 0;
    console.log(axisShow(x, y));
    getAllGameItem();
    console.log('hello list' +listItems);
   /*for(let i =0;i <items.length;i++)
    {
        showAllItems(items[i]);
    }
    console.log(items);*/
});

function showAllItems(item) {

//let temp= document.querySelector('#adventGame-template').innerHTML;
    let bool = false;
    let dv = document.querySelector('.div5');

    let pg = document.createElement('p');
    pg.textContent = item.name;

    dv.appendChild(pg);

    let dv1 = document.querySelector('#p2');

    let pg1 = document.createElement('p');
    pg1.textContent = '(' + item.x + ',' + item.y + ')';
   // dv1.

    dv1.appendChild(pg1);

    let div = document.querySelector('#p3');
    let page = document.createElement('p');
    page.textContent = item.found;

    div.appendChild(page);
}





