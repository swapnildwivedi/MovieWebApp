const app = Vue.createApp({
    data() {
        return {
            title : "Batman : Dark Knight Rises",
            summary : "It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.",
            like: 0,
            dislike: 0,

        }
    }
})

app.mount("#app")