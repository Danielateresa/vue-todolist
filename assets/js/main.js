/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */
const { createApp } = Vue;

createApp({
    data() {
        return {
            alert: false,
            newTask: { text: '', done: false },
            tasks: [
                {
                    text: 'svolgere esercizio',
                    done: true
                },
                {
                    text: 'fare spesa',
                    done: false
                },
                {
                    text: 'fare allenamento',
                    done: true
                },
                {
                    text: 'fare doccia',
                    done: true
                },
                {
                    text: 'preparare la cena',
                    done: false
                },
            ]
        }
    },
    //milestone 2
    methods: {
        removeTask(i) {
            console.log('ho cliccato');
            this.tasks.splice(i, 1)
        },
        addTask() {
            console.log('add');
            if (this.newTask.text < 2) {
                //console.log('no');
                this.alert = true;
            } else {
                this.alert = false;

                this.tasks.push(this.newTask);
                this.newTask = { text: '', done: false };
                console.log(this.tasks);
            }
        },
        changeStatus(i) {
            if (this.tasks[i].done === false) {
                this.tasks[i].done = true;
                console.log('ho cliccato nell if');
            } else {
                this.tasks[i].done = false;
            }
        }
    }
}).mount('#app')

