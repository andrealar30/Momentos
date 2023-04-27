
class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculator();
        this.operador = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
            potenciar: '**'
        }
        this.advancedSignos = {
            raiz: '√'
            //Agregar mas funciones
        }
    }
    
    //Si el numero es igual a un punto y nuestro valor actual ya incluye un punto entonces retorna al valor anterior y que no agregue nada y si no es un punto se agrega el valor
    addNumber(numero){
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        //Para que se escriba en el div de valor actual y anterior el valor que pongamos
            this.printValues();
        }
    
        printValues(){
            this.displayValorActual.textContent = this.valorActual;
            this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operador] || this.advancedSignos[this.operador] || ''}`;
        }
    
        deleteValue(){
            this.valorActual = this.valorActual.toString().slice(0, -1);
            this.printValues();
        }
    
        deleteAll(){
            this.valorActual = '';
            this.valorAnterior = '';
            this.operador = undefined;
            this.printValues();
        }
        computar(tipo){
            this.operador !== 'igual' && this.calcular(this.verificador);
            this.operador = tipo;
            if (this.operador in this.signos){
                this.operacion = this.signos[this.operador];
                this.verificador = 'basic_operar';
            }
            if (this.operador in this.advancedSignos){
                this.operacion = this.operador;
                this.verificador = 'advanced_operar';
            }
            this.valorAnterior = this.valorActual || this.valorAnterior;
            this.valorActual='';
            this.printValues();
        }
    
        calcular(x){
            this.funcion = x;
            if((this.valorAnterior !== '')&&(this.valorActual !=='')){
                this.valorActual = this.calculadora[this.funcion](this.valorAnterior, this.valorActual, this.operacion);
            }
        }
    }