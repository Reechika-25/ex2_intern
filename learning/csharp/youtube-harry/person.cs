using System;

//recommended --- give different names to namespaces and c#

namespace Person{

    class Person{

        private int id;
        public string name;

        public int getID(){
            return id;
        }

        public Person(string name , int id){//mistake -- by default the constructor is private in c#
            this.id = id;
            this.name = name;
            
        }

        public void personInfo(){
            Console.WriteLine($"{id} ---> {name}");
        }
    }
}