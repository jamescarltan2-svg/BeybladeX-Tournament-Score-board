
async function fetchBey1() {
    try {

        const beyName = document.getElementById("searchInput1").value.toUpperCase();

        const response = await fetch (`http://localhost:8080/beyblade/${beyName}`);

        if(!response.ok){
            throw new Error ("Could Not Fetch Resource")
        }

        const data = await response.json();
        const beyblade = data.beyblade;
        const winRecord = document.getElementById("p1Win");
        const loseRecord = document.getElementById("p1Lose");
        const nameBlade = document.getElementById("nameBey1");

        winRecord.innerHTML = beyblade.win;
        loseRecord.innerHTML = beyblade.lose;
        nameBlade.innerHTML = beyblade.name;

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchBey2() {
    try {

        const beyName = document.getElementById("searchInput2").value.toUpperCase();

        const response = await fetch (`http://localhost:8080/beyblade/${beyName}`);

        if(!response.ok){
            throw new Error ("Could Not Fetch Resource")
        }

        const data = await response.json();
        const beyblade = data.beyblade;
        const winRecord = document.getElementById("p2Win");
        const loseRecord = document.getElementById("p2Lose");
        const nameBlade = document.getElementById("nameBey2");

        winRecord.innerHTML = beyblade.win;
        loseRecord.innerHTML = beyblade.lose;
        nameBlade.innerHTML = beyblade.name;

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}



// console.log("Print" + `${beyName}`);