#include<bits/stdc++.h>
using namespace std;

//assumptions:
/*1. when checking for str
     --excluded cases where alphabet after str ex--the phones for str "the phone"
     --excluded cases where there is apostrophe after str ex--the phone' for str "the phone"
     --excluded cases when there is ' or alphabets or numbers before the string ex-- hat for str "at"*/

/*2. when counting the number of words in document
     --consider only alphabets and numbers can be included in a word ex-- in 20% will not consider %*/

/*3. the string entered by the user does not start and end with a punctuation mark or a space*/



bool isValid(char ch){

    return ((ch >= 'a' and ch <= 'z') or
             (ch >= 'A' and ch <= 'Z') or 
             (ch >='1' and ch <= '9') or
             ch == '\'');
}
//FUNCTION TO FIND THE OCCURRENCES OF A GIVEN STRING IN DOC EXCLUDING THE ABOVE REJECTED CASES
int strstr(string &file, string x)
{   //kmp algorithm
    
    int len_x= x.size();
    
    //1.constructing dfa
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


    //2.parsing the string
    int state =0;
    int ct = 0;

    int n =file.size();

    for(int idx = 0;idx<=n;idx ++){

        if(state == len_x){

            if(idx < n and isValid(file[idx]))                                        cout<<x<<file[idx]<<endl;
            else if(idx - x.size() - 1 >=0 and isValid(file[idx - x.size() - 1]))     cout<<file[idx-x.size()-1]<<x<<endl;
            else                                                                      ct ++;
        }

        if(idx == n)   break;

        if(file[idx]>='A' and file[idx]<='Z')
           file[idx] = file[idx] - 'A' + 'a';

        state = states[state][file[idx] -'\0'];
    }
    
    return ct;
}





bool isAlpha(char ch){

    return  ((ch >= 'a' and ch <= 'z') or
             (ch >= 'A' and ch <= 'Z') or
             (ch >= '1' and ch <= '9'));

}
//FUNCTION TO FIND THE NUMBER OF WORDS IN THE PARTICULAR STRING
int wordCount(string& str){
    
    int n = str.size();

    if(n == 0)   return 0;

    int words = 0;

    for(int idx =0;idx<n;){

        //loop for not alpha characters
        int ptr;
        for(ptr = idx ; ptr < n and !isAlpha(str[ptr]) ;ptr ++);
        if(ptr == n) break;
        words ++;

        //loop for alpha characters
        int itr;
        for( itr = ptr;itr < n and isAlpha(str[itr]);itr ++);
        if(itr == n) break;
        else         idx = itr;          
        
    }
    return words;
}


//MAIN FUNCTION TO FIND THE PROBABILITY OF A GIVNE STRING IN THE DOCUMENT
int main(){

    //1. read the file
    string  filename ;
    filename = "doc.txt";
    ifstream file;
    file.open(filename.c_str());
    string rfile;
    char ch;
    while(!file.eof()){
        file.get(ch);
        rfile += ch;
    }
  
    //2.take the input str
    string str;
    cout<<"please enter the string for which u want to find the probability"<<endl;
    getline(cin,str);
    cout<<endl;

    //3.find the number of words in the entered string
    int words = wordCount(str);
    cout<<"number of words in the entered string : "<<words<<endl<<endl;
    
   //4.print the rejected cases and find the occurrences of string in the doc
    cout<<"Rejected cases :"<<endl;
    int num = strstr(rfile,str);
    cout<<endl;
    cout<<"occurences of "<<str<<" in document = " <<num<<endl<<endl;

    
    //5.find the number of words in the doc
    int den = wordCount(rfile);
    cout<<"denominator for finding the probability = "<<den - words + 1<<endl<<endl;

    
    //6.print the probability
    cout<<"probability = "<<float(num)/den<<endl;
    return 0;
    
}