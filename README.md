# 3.- Ejercicio para "FizzBuzz"
## Agregando nuevos endpoints.

Nuevos requeriemientos basados en la práctica de Launch_X-FizzBuzz: 
- Endpoints con expressJs + contribución OpenSource + Code Challenge!

- Se regresa la palabra 'Fizz', 'Buzz', 'Fizzbuzz' o el score mismo, según es el caso. 
<!-- "Cobraremos por cada request que recibamos." -->

- Los endpoint son:
 localhost:3000/v1/fizzbuzz/:score

    > localhost:3000/v1/fizzbuzz/1  :: { score: 1, trick: 1 }

    > localhost:3000/v1/fizzbuzz/3  :: { score: 3, trick: "Fizz" }

    > localhost:3000/v1/fizzbuzz/5  :: { score: 3, trick: "Buzz" }

    > localhost:3000/v1/fizzbuzz/15  :: { score: 3, trick: "FizzBuzz" }