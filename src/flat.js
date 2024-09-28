export function renderedOrNot()
{
    let rendered = 0;
    return function()
    {
       return rendered++;
    }
}

