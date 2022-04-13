 void afisare(int a, int b) {
    int prima, i, ultima, copie;

    if (a > b) {
        prima = b;
        ultima = a;
    }
    else {
        prima = a;
        ultima = b;
    }

    if (prima % 2 == 0) copie = prima;
    else copie = prima + 1;

    for (i = copie; i <= ultima; i += 2) cout << i <<' ';
 }