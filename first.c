//intro to pointers
#include<stdio.h>
int main()
{
int a = 10;
int b = 10;
int* p;
int** z;
p=&a;
printf("The value of a=%d",a);
printf("\nThe address of a = %p",&a);
printf("\nThe address of a = %p\n",p);
printf("The address of a = %p\n",&b);
printf("The address of a = %p\n",(&a));
z=&p;
printf("The address of a = %p\n",*p);
}
