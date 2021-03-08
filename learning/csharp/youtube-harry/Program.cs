using System;  //can use the classes in sysytem namespace
using Person;

namespace youtube_harry //namespace is a ontainer in which all the otehr classes and namespaces are introduced
{
    class Program
    {
        static void Greet(){
            Console.WriteLine("hi ! Reechika here");
        }
        static void Main(string[] args)
        {
            // string inp = Console.ReadLine();//console.readline()  returns a string
            // Console.WriteLine(inp);
            // Console.WriteLine("Hello World!");//console is the class of sysytem namespace
            // Console.Write("i am busy today");
            // Console.WriteLine("in learning c #");
            // Console.WriteLine("hi i am Reechika");
            // int a = 34;
            //float b = 34.4;//--will give error
            // double b = 34.4;
            // float c = 34.4F;
            // double d = 34.4D;
            // Console.WriteLine(a);
            // Console.WriteLine(b);
            // Console.WriteLine(c);
            // Console.WriteLine(d);

            //TYPECASTING
            // int a = (int) 3.5;
            // double b = a;
            // int z = 'y';
            // //int c = b; //--will give error because double can  not be typecasted to int explicitly
            // int c = (int) b;
            // Console.WriteLine(a);
            // Console.WriteLine(b);
            // Console.WriteLine(z);
            // Console.WriteLine(c);

            // //TYPECASTING USING INBUILT METHODS
            // float e = Convert.ToInt32(3.446);
            // Console.WriteLine(e);

            // Console.WriteLine("Enter your name : ");
            // string name = Console.ReadLine();
            // Console.WriteLine(name);
            // Console.WriteLine("how many candies do you want ?");
            // string candies = Console.ReadLine();
            // Console.WriteLine(name + " wants " + (Convert.ToInt32(candies) + 4) + " candies");

            Console.WriteLine(5 == 5);
            Console.WriteLine(425 >= 544);

            int a = Math.Min(34,345);
            int b = Math.Max(34,345);
            double c = Math.Sqrt(36);//sqrt fucntion returns double
            int d = Math.Abs(-39);
            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine(c);
            Console.WriteLine(d);

            string name = Console.ReadLine();
            string candies = Console.ReadLine();
            Console.WriteLine($"your name is {name} and you will get {candies} candies");

            Greet();
            Greet();

            Person.Person newPerson = new Person.Person("Reechika",1); //use 
            Console.WriteLine(newPerson.name);
            Console.WriteLine(newPerson.getID());
            newPerson.personInfo();



        }
    }
}
