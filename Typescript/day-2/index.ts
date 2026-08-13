

// -  Type Infernece and Annotation

let a = 90


a = 70

a = 2000
console.log(a)

// primitive data types 

// string

let val: string = "ami"

// boolean 

let val1:boolean = true

// number

let b: number = 90

// undefined

let i : undefined = undefined

//bigint

let x : bigint = 999999999n

// symbol

let d : symbol = Symbol("hello")




// enums - options

enum Role {
    ADMIN,
    SUP_ADMIN,
    USER,
}

let role: Role = Role.SUP_ADMIN