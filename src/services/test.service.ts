

export const test = async () => {
    
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

export const testPost = async () => {
    
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