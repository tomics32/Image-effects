async function init() {
    let rustApp = null;

    try{
        rustApp = await import('../pkg')
    }
    catch(e) {
        console.error(e)
        return;
    }

    console.log(rustApp)


    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {  //function will be executed when file is loaded
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        );

    
       let grayOut = rustApp.grayscale(base64);
       let blurOut = rustApp.blur(grayOut.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''), 2.0);


       
        
       

       document.getElementById('new-img').setAttribute(
        'src', blurOut
       );

       

       
  
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0])
    })
}

init()