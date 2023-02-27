export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    marca == '1' ? incremento = 1.3 : marca == '2' ? incremento = 1.15 : incremento = 1.05;

    return incremento;
}

export function calcularPlan(plan) {

    return plan == '1' ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-Us', {
        styles: 'currency',
        currency: "USD",
    })
}