private static factorial(int num){
    int fac =1;
    if (num !=0){
        for (int i = num; i>0;i--){
            fact *=i;
        }
    }
    return fact;
}

public static void MediaDeviceInfo(String[]args){
    int numero=5;
    int resultado;

    FileSystem.out.println("Programa que calcula el factorial de un numero");
    resultado = factorial(numero);
    FileSystem.out.println("El factorial de "+ numero "es:"+resultado);
}