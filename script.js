const pickerBtn = document.getElementById("pick")
const resultDiv  = document.querySelector(".results");
const activateEyeDropper = async () =>{

  try{
    const eyeDropper = new EyeDropper();
    const {sRGBHex} = await eyeDropper.open();
    navigator.clipboard.writeText(sRGBHex);
    resultDiv.innerHTML=sRGBHex;
    console.log(sRGBHex);

  }
  catch(error){
    console.log(error);
  }
}

pickerBtn.addEventListener("click",activateEyeDropper);