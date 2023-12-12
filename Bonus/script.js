/*
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            error: false,
            message: "",
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        delTask(i) { //MILESTONE 2
            //Partendo dall'indice i gli dico di rimuovere il primo 
            this.todos.splice(i, 1);
        },
        addTask() { //MILESTONE 3
            if (this.message.length < 5) {
                this.error = true;
            } else {
                this.todos.unshift({ text: this.message, done: false });
                //unshift = push pero' all'inizio anziche' alla fine
                this.message = "";
                this.error = false;
            }
        }
    }
}).mount("#app");