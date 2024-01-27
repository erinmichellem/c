/*#include<stdio.h>
int main()
{
    int a[]  = {1,2,3,4};
    printf("\n a = %p",a);
    printf("\n *a = %d",*a);
    printf("\n a+1 = %p",a+1);
    printf("\n &a = %p",&a);
    printf("\n &a+1 =%p"&a+1);
    q=&a;
    printf("q=%p"q);
}

//pointers and array
#include<stdio.h>
int main()
{
int a [] = {0,1,2,3,4};
int *p[] = {a,a+1,a+2,a+3,a+4};
int **ptr = p;
printf("%p %d\n",a,*a);
printf("%p %p %d\n",p,*p,**p);
printf("%p %p %d\n",ptr,*ptr,**ptr);
}


#include<stdio.h>
int main()
{
    int a [] = {0,1,2,3,4};
    int *p[] = {a,a+1,a+2,a+3,a+4};
    int **ptr = p;
    ptr++;
    printf("%d %d %d \n",ptr-p,*ptr-a,**ptr);

    *ptr++;
    printf("%d %d %ld %d \n",ptr-p,*ptr-a,**ptr);

    *++ptr;
    printf("%ld %ld %d \n",ptr-p,*ptr-a,**ptr);

    ++*ptr;
    printf("%ld %ld %d \n",ptr-p,*ptr-a,**ptr);
}
*/