/*
Javascript Nedir ?

Betik dildir.
Tarayıcı tarafında çalışır.
Nodejs ile sunucu tarafında da çalışır.
OOP (interface,inheritance,abstract)

TypeScript Nedir ?

TS: Açık kaynak kodlu bir dildir.
TS: Esnektir.
TS: Js herşeyi kullanabilirsiniz.
TS: Microsoft ürünüdür. C# , Hejlberg 
TS: Javascript+...+ diğer özellikleri 
Javascript = TS

 TypeScript Özellikleri Nelerdir ?
TS: Esnektir
TS: Static type
TS: Derleme zamanı
TS: Yazılım kalitesini arttırır.
TS: Hata bulma kolaylığı
TS: Kod okunabilirliği
TS: Büyük projelerde kullanılır.
TS: Angular,React JS,Vue ile geliştirmeler yapabiliriz.
TS: Nodejs ile backend tarafında da kullanabiliriz.
TS: Javascript ile çalışır.
TS: Javascript kodlarını derler.
TS: Javascript'e dönüştürür.

TypeScript Neden Öğrenmeliyim ?
TypeScript Genel Bileşenleri Nelerdir ?
Ecmascript ile JavaScript Arasındaki Farklar Nelerdir ?
TypeScript ile JavaScript Arasındaki Farklar Nelerdir ?
TypeScript ile Ecmascript Arasındaki Farklar Nelerdir ?
TypeScript Kurulumu
TypeScript Compiler
Javascript Interpreter
Java: Interpreter and Compiler 
*/

// TypeScript Editor
// TypeScript İlk Program
// TypeScript Değişkenler

// ####  STATIC DATA TYPES #################################################
function staticDataTypes() {
    // TypeScript Veri Tipleri
    // Dynamics data types
    // let data=44;
    // console.log(data);
    // data="kelime";
    // console.log(data);
    // data=true;
    // console.log(data);

    // Data types: number,string,boolean
    // type Safe: 
    // TS datatypes (number)
    let data1: number = 44;
    data1 = 99;
    console.log(data1);
    console.log(typeof data1);
    data1 = 99.88;
    console.log(data1);
    console.log(typeof data1);

    // TS datatypes (string)
    let data2: string = " ts ÖĞreniyorum ts";
    console.log(data2);
    data2 = data2.trim();
    console.log(data2);
    console.log(typeof data2);

    // TS datatypes (boolean)
    let data3: boolean = 3 > 1;
    console.log(data3);
    console.log(typeof data3);

    // Dikkat: const mutlaka başlangıç değeri vermelisiniz.
    // 'const' declarations must be initialized.
    // const data5:number;
    // console.log(data5);
}
//staticDataTypes()


// #### DYNAMICS DATA TYPES #################################################
const dynamicsDataTypes = function () {
    // Dynamics data types (any)
    // karşı taraftan(api,database,object) gelen veri türünü bilmiyorum.
    let data4: any = true;  //44;   //"Malatya";
    console.log(data4);
    data4 = 44;
    console.log(data4);
    data4 = false;
    console.log(data4);
}
//dynamicsDataTypes ();

// #### OPERATORS #################################################
// TypeScript Operatörler
// + - * / % && || ! > >= < <=


// #### CONDITION #################################################
// TypeScript Koşullu İfadeler
// if else if, ternary


// #### LOOP #################################################
// TypeScript Döngüler
// for() while() do-while() foreach() for-in() for-of()

// number,string,boolean,any
// #### ARRAY #################################################
// TypeScript Döngüler
let tsArray = () => {
    // TypeScript Diziler
    let array: number[] = [1, 2, 9, 5, 3];
    console.log(array[0]);
    array[5] = 23;
    console.log(array[array.length - 1]);

    let array2 :string[]  =["İstanbul","Ankara","Adana"]
    let array3 :boolean[]  =[3>1, 44<1,true]
    let array4 :any[]  =[44,"str",true]
}
tsArray()



// #### FUNCTIONS #################################################
// TypeScript Fonksiyonlar
// void


// #### CLASS #################################################
// TypeScript Sınıflar

// #### ENUM #################################################
// TypeScript Enum


// #### GENERICS #################################################
// TypeScript Generics

// #### INHERITANCE #################################################
// TypeScript Inheritance


// #### ABSTRACT #################################################
// TypeScript Abstract

// #### INTERFACE #################################################
// TypeScript Interface


// TypeScript Tuple
// TypeScript Null ve Undefined
// TypeScript Never
// TypeScript Type Assertion
// TypeScript Type Aliases

// TypeScript Array Methods
// TypeScript Object Methods
// TypeScript Tarih Metodları
// TypeScript Math Metodları
// TypeScript Regular Expressions
// TypeScript Template Literals
// TypeScript Decorators
// TypeScript Mixins
// TypeScript Interfaces vs Types
// TypeScript Modules
// TypeScript Namespaces
// TypeScript Namespaces vs Modules
// TypeScript Ambient Namespaces
// TypeScript Ambient Modules
// TypeScript Generics
// TypeScript Generic Constraints
// TypeScript Generic Classes
// TypeScript Generic Interfaces
// TypeScript Generic Functions
// TypeScript Generic Enums
// TypeScript Generic Type Aliases
// TypeScript Generic Utility Types
// TypeScript Inference
// TypeScript Type Compatibility
// TypeScript Advanced Types
// TypeScript Intersection Types




