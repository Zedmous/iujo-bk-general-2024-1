export const concept = async () => {
    
    try {



        return {
            message: `Test Funcional`,
            status: 200,
            data:{
                test:"Hola este es la data del test"
            }
          
        }

    } catch (error) {
        console.log(error)
        return {
            message: `Contact the administrator: error`,
            status: 500
        }
    }
}

export const conceptPost = async () => {
    
    try {
        return {
            message: `Test Funcional Post`,
            status: 200,
            data:{
                test:"Hola este es la data del test"
            }
          
        }
    } catch (error) {
        return {
            message: `Contact the administrator: error`,
            status: 500
        }
    }
}
export class ConceptService {
    private concepts: concepts[] = [];
  
    constructor() {}
  
    getConcepts(): concepts[] {
      return this.concepts;
    }
  
    getConceptById(id: number): concepts | undefined {
      return this.concepts.find((concept) => concept.id === id);
    }
  
    addConcept(concept: concepts): void {
      this.concepts.push(concept);
    }
  
    deleteConcept(id: number): void {
      const index = this.concepts.findIndex((concept) => concept.id === id);
      if (index !== -1) {
        this.concepts.splice(index, 1);
      }
    }
  
    editConcept(id: number, updatedConcept: Concepts): void {
      const index = this.concepts.findIndex((concept) => concept.id === id);
      if (index !== -1) {
        this.concepts[index] = updatedConcept;
      }
    }
  }