

## Inyeccion de Dependencias

```ts
// POO

// class - state + behavior

// classA -> ....work (petición http)
// classB -> ....work (petición http)
// classHTTP

class ClassA {
    classHTTP = new ClassHTTP();
}

class ClassB {
    classHTTP = new ClassHTTP();
}

// Evoluciona
// Interface
interface HTTPv1 {}
interface HTTPv2 {}

class ClassHTTP1 implements HTTPv1 {}
class ClassHTTP2 implements HTTPv2 {}


classOmega implements HTTPv1 - http // http2

class ClassA {
    classHTTP: HTTPv1;

    constructor(_classHTTP: HTTPv1) {
        this.classHTTP = _classHTTP;
    }
}

// Framework Angular - IoC
new ClassA(new ClassHTTP());

// const c = new ClassA();
// c.classHTTP = new ClassHTTP();
```

## REFERENCES

- https://martinfowler.com/articles/injection.html

