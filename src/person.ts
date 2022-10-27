class Person {
    private personality: string;

    constructor() {
        this.personality = "mystery"; 
    }

    public askQuestion(answer: number): void {
        if (answer === 1){
            this.personality = "Extrovert";
        } else {
            this.personality = "Introvert";
        }
    }

    public getPersonality(): string{
        return this.personality;
    }
}

export default Person