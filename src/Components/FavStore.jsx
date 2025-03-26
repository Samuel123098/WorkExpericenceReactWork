
export default function FavStore(cardID) {
    const retrievedIDs = [];
    for (let i = 0; i < 5; i++) {
        retrievedIDs.push(parseInt(localStorage.getItem(`CardID${i}`), 10));
    }

    if (retrievedIDs.includes(cardID)) {
    const index = retrievedIDs.indexOf(cardID);
        if (index !== -1) {
        retrievedIDs.splice(index, 1);
        retrievedIDs.push(NaN);
        }

    alert("Item removed from favorites");
    retrievedIDs.forEach((num, index) => {
        localStorage.setItem(`CardID${index}`, num);
    }   );

    }

     else if (retrievedIDs.some(num => isNaN(num))) {
        alert("new item added to favorites");
        retrievedIDs.reverse();
        retrievedIDs.push(cardID);
        retrievedIDs.shift();
        retrievedIDs.reverse();
        retrievedIDs.forEach((num, index) => {
            localStorage.setItem(`CardID${index}`, num);
        });
    } else {
        alert("You have already added 5 items to your favorites");
    }
}


