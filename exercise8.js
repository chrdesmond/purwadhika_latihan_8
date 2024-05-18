//nomor 1

//jadi di looping 1: player 1 nyerang player 2. terus nunjukin status
//jadi di looping 2: player 2 nyerang player 1. terus nunjukin status

class shootingGame {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
    
    getRandomItem() {
        let rand = Math.floor(Math.random * 2)
        if (rand == 0) {
            return {health:10, power:0}
        } else {
            return {health:0, power:10}
        }
    }

    start(){
        //giliran, siapa nembak siapa
        //atk adalah penembak
        //def adalah yg ditembak
        //atk dan def bisa berubah
        let atk = this.player1
        let def = this.player2
        while(this.player1.health > 0 && this.player2.health > 0){ //player 1 sebenarnya dari class shootingGame, tapi kita masukin ke class Player dengan let player1 = new Player("Jotaro")
            //generate item, yang mana nantinya di terima player
            let item1 = this.getRandomItem()
            let item2 = this.getRandomItem()
            
            //saat player menerima item
            //item1 untuk player1
            //item2 untuk player2
            this.player1.useItem(item1)
            this.player2.useItem(item2)

            //tujuannya biar tau masing-masing status setelah mendapatkan item
            console.log(" --- after GET item")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log(" --- after GET item ---")

            //giliran, siapa nembak siapa
            //gak bisa player1 nembak player2
            //player2 nembak player1
            //dalam 1 giliran
            def.damage(atk.power) // SHOOT

            // menunjukkan status setelah shoot
            console.log(" --- after shoot ---")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log(" --- after shoot ---")

            console.log(" ============ end turn ===========")

            //logika untuk mengganti giliram penyerang dan bertahan
            //kalau penyerang(atk) adalah player1 maka ganti atk menjadi player2
            if(atk == player1) {
                atk = this.player2
                def = this.player1
            } else {
                atk = this.player1
                def = this.player2
            }
        }

        if(this.player1.health > 0){
            console.log(this.player1.name , " WIN")
        } else{
            console.log(this.player2.name, " WIN")
        }
        //this.player1.showStatus()
        //this.player2.showStatus()
    }
}

class Player {
    name=""
    health=100
    power=10
    constructor(name) {
        this.name = name
    }

    damage(power) {
        this.health -= power
    }

    useItem(item) {
        this.health += item.health
        this.power += item.power
    }

    showStatus() {
        //console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`)
        //console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`)
        console.log(`${this.name}, Health => ${this.health}`)
        console.log(`${this.name}, Power => ${this.power}`)
    }
}

let player1 = new Player("Jotaro")
let player2 = new Player("Dio")

console.log(player1)
console.log(player2)

let arena1 = new shootingGame(player1, player2)
arena1.start()


//nomor 2
class Employee {
    constructor() {
        this.workingHoursPerDay = 0
    }

    addWorkingHours(hours) {
        this.workingHoursPerDay += hours
    }

    calculateSalary() {
        return 0
    }
}

class FulltimeEmployee extends Employee {
    calculateSalary(){
        let baseSalary = 100000
        if(this.workingHoursPerDay > 6) {
            baseSalary = 75000
        }
        return baseSalary * this.workingHoursPerDay
    }
}

class ParttimeEmployee extends Employee {
    calculateSalary(){
        let baseSalary = 50000
        if(this.workingHoursPerDay > 6) {
            baseSalary = 30000
        }
        return baseSalary * this.workingHoursPerDay
    }
}

const fulltimeEmployee = new FulltimeEmployee()
const parttimeEmployee = new ParttimeEmployee()

fulltimeEmployee.addWorkingHours(8)
parttimeEmployee.addWorkingHours(5)

console.log("Full-time employee salary:", fulltimeEmployee.calculateSalary());
console.log("Part-time employee salary:", parttimeEmployee.calculateSalary());

