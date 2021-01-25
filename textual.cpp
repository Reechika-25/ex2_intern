#include<bits/stdc++.h>
using namespace std;

//assumptions:
/*1. when checking for "the phone" in string
     --excluded cases where alphabet after the phone ex--the phones
     --excluded cases where there is apostrophe after the phone ex--the phone'*/

/*2. when counting the number of words in document
     --consider only alpahbets and numbers can be included in a word ex-- in 20% will not consider %*/ 

bool isValid(char ch){

    return ((ch >= 'a' and ch <= 'z') or
             (ch >= 'A' and ch <= 'Z') or 
             (ch >='1' and ch <= '9') or
             ch == '\'');
}


int strstr(ifstream &file, string x)
{   //kmp algorithm
    
    int len_x= x.size();
    
    //constructing dfa
    int ** states = new int * [len_x +1];
    for(int row = 0;row<len_x+1;row++)
        states[row]=new int[256];
    
    int prev_state = 0;  
    
    for(int idx = 0;idx<len_x+1;idx++){
        for(int ab = 0;ab<256;ab++){
            if(idx<len_x and ab + '\0' == x[idx])
               states[idx][ab]=idx+1;
               
            else if(idx==0)
               states[0][ab]=0;
               
            else
               states[idx][ab]=states[prev_state][ab];
        }
           
        if(idx>0 and idx<len_x)
            prev_state = states[prev_state][x[idx]-'\0'];
    }

    int state =0;

    int ct = 0;
    char ch;

    //parsing the string through dfa
    while(!file.eof()){
        
        //when we have reached the final state then check whether the next char is ' or alphabet
        if(state == len_x){
            
            if(!file.eof() and file.get(ch)){

                if(isValid(ch))
                    cout<<x<<ch<<endl;

                else{
                    ct ++;
                }
            }
        }

        if(state != len_x)    file.get(ch);  
        if(ch >= 'A' and ch <= 'Z')
          ch = ch - 'A' + 'a';   
        state = states[state][ch-'\0'];

     }
    
    cout<<ct<<endl;
    return ct;
}



bool isAlpha(char ch){

    return  ((ch >= 'a' and ch <= 'z') or
             (ch >= 'A' and ch <= 'Z') or
             (ch >= '1' and ch <= '9'));

}



int bigramCount(ifstream &file){

    int bigram = 0;
    char ch;
    file.get(ch);

    while(!file.eof()){
       
       if(isAlpha(ch) and file.get(ch)){

           if(!isAlpha(ch))
             bigram++;

           else
             continue;
       }

       file.get(ch);
    }

     cout<<bigram -1 <<endl;
     return bigram-1;
}



int main(){

    string word, filename ;
    filename = "doc.txt";
    ifstream file;
    file.open(filename.c_str());
  
    string str = "the phone";
    
    int num = strstr(file,str);

    file.clear();
    file.seekg(0,ios::beg);

    int den = bigramCount(file);

    
    cout<<float(num)/den<<endl;
    return 0;
    
}