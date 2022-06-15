const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,result)=> {
    if(err)
    {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(error,result)=>
    {
        const second = result;
        writeFile(`./content/result-sync.txt','Here is the result ${first},${second} `,'utf8',
        (err,result)=>
        {
            if(err)
            {
                console.log(err);
                reurn 
            }
            console.log(result);
        })
    })
    console.log(result);
})