function rainAmount(mm){
    if (mm < 40) {
      console.log(mm)
         return `You need to give your plant ${40 - mm}mm of water`
    }
    else {
      console.log(mm)
         return "Your plant has had more than enough water for today!"
    }
}

# Alternate solution

function rainAmount(mm){
    return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
}