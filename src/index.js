"use strict";
// https://www.typescriptlang.org/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
tsc -w
npm run nodemon
*/
// npm run typescript
// npm run nodemon
// tsc
// tsc -w
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
    var data1 = 44;
    data1 = 99;
    console.log(data1);
    console.log(typeof data1);
    data1 = 99.88;
    console.log(data1);
    console.log(typeof data1);
    // TS datatypes (string)
    var data2 = " ts ÖĞreniyorum ts";
    console.log(data2);
    data2 = data2.trim();
    console.log(data2);
    console.log(typeof data2);
    // TS datatypes (boolean)
    var data3 = 3 > 1;
    console.log(data3);
    console.log(typeof data3);
    // Dikkat: const mutlaka başlangıç değeri vermelisiniz.
    // 'const' declarations must be initialized.
    // const data5:number;
    // console.log(data5);
}
//staticDataTypes();
// #### DYNAMICS DATA TYPES #################################################
var dynamicsDataTypes = function () {
    // Dynamics data types (any)
    // karşı taraftan(api,database,object) gelen veri türünü bilmiyorum.
    var data4 = true; //44;   //"Malatya";
    console.log(data4);
    data4 = 44;
    console.log(data4);
    data4 = false;
    console.log(data4);
    // unknown
    // any ile unknown arasındaki farklar
    // null
    // undefined
};
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
var tsArray = function () {
    // TypeScript Diziler
    // 1.YOL
    var array_0 = [1, 2, 9, 5, 3];
    // 2.YOL
    var array_1 = [1, 2, 9, 5, 3];
    //console.log(array[0]);
    //array[5] = 23;
    //console.log(array[array.length - 1]);
    var array2 = [1, 2, 9, 5, 3];
    var array3 = ["İstanbul", "Ankara", "Adana"];
    var array4 = [3 > 1, 44 < 1, true];
    var array5 = [44, "str", true];
    // tuple: Veri olarak birden fazla datatypes tek bir bileşende göstermek için kullanıyoruz.
    var tuple1 = [1, "Adana"];
    var result = "".concat(tuple1[0], " => ").concat(tuple1[1]);
    console.log(result);
    tuple1.push(2, "Adıyaman");
    tuple1.push(3, "Afyon");
    tuple1.push(4, "Bolu");
    tuple1.push(5, "Amasya");
    tuple1.forEach(function (temp) {
        console.log("".concat(temp));
    });
    var tuple2 = [44, "str", true];
};
//tsArray()
// number,string,boolean,any
// #### OBJECT  #################################################
var tsObject = function () {
    // TypeScript Object
    console.log("TypeScript Object");
    // Normal object
    // let computer={
    //     computerName:"Msi Titan",
    //     trade:"msi",
    //     year:"2024"
    // }
    var computer = {
        computerName: "Msi Titan",
        trade: "msi",
        year: 2024,
        newVersion: true,
    };
    console.log(computer.computerName);
    console.log(computer.trade);
    console.log(computer.year);
    console.log(computer.newVersion);
};
//tsObject();
// #### FUNCTIONS #################################################
// TypeScript Fonksiyonlar
// void: dönüşü olmayan (Yani işlem sonunda bana birşey döndermee)
/*function tsFunction(x,y,z){
    console.log(`Normal: ${x} ${y} ${z}`);
}
tsFunction(4,10,99);*/
function tsFunction2(x, y, z) {
    console.log("TS Function2: ".concat(x, " ").concat(y, " ").concat(z));
}
//tsFunction2(4,10,"Merhabalar")
function tsFunction3(x, y, z) {
    console.log("TS Function3: ".concat(x, " ").concat(y, " ").concat(z));
}
//tsFunction3(44,10,"Merhabalar");
//tsFunction3(true,10,"Merhabalar");
//tsFunction3("Malatya",10,"Merhabalar");
// void: geriye bir şey dönderme
function tsFunction4(x, y, z) {
    console.log("TS Function4: ".concat(x, " ").concat(y, " ").concat(z));
}
//tsFunction4("Malatya",10,"Merhabalar");
function tsFunction5(x, y, z) {
    //console.log(`TS Function4: ${x} ${y} ${z}`);
    //return 10;
    //return Number(x)+y+Number(z);
    return parseInt(x) + y + parseFloat(z);
}
//const result5=tsFunction5("44",10,"99.12");
//console.log(result5);
// Bitirme Projesini PDF
// tsconfig.json
// tsc -w
// tsc -w index.ts
// nodemon
// Web pack
// live-server
// Babil
// Node JS Server- HTML- Document - URL - EXPRESS
// #### ENUM #################################################
// TypeScript Enum
var tsEnum = function () {
    console.log("Enum");
    // ENUM
    var computerTrade;
    (function (computerTrade) {
        computerTrade["msi"] = "MSI";
        computerTrade["dell"] = "DELL";
        computerTrade["hp"] = "HP";
    })(computerTrade || (computerTrade = {}));
    console.log(computerTrade.msi);
    var computerOtherTrade = computerTrade.dell;
    console.log(computerOtherTrade);
};
//tsEnum();
// #### CLASS #################################################
// TypeScript Sınıflar
// OOP
// this
var tsClass = function () {
    console.log("Class Examples");
    /* CLASS
      FIELD
      CONSTRUCTOR
      FUNCTION
       */
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(computerName, ram, newVersion) {
            this._computerName = computerName;
            this._ram = ram;
            this._newVersion = newVersion;
        }
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Information => Computer Name: ".concat(this._computerName, " Computer Ram: ").concat(this._ram, " Computer version: ").concat(this._newVersion);
            console.log(result);
        }; //end function
        return Computer;
    }()); //end Computer
    // INSTANCE
    var computerIntance = new Computer("Msi", 8, true);
    console.log("NAME: " + computerIntance._computerName);
    console.log("RAM: " + computerIntance._ram);
    console.log("VERSION: " + computerIntance._newVersion);
}; //end common Function
//tsClass()
// #### OPTIONAL #################################################
// TypeScript Sınıflar
var tsOptionalClass = function () {
    console.log("TypeScript Optional Class");
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(computerName, ram, newVersion, copilot) {
            this._computerName = computerName;
            this._ram = ram;
            this._newVersion = newVersion;
            // Optional(?)
            this._copilot = copilot;
        }
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Information => Computer Name: ".concat(this._computerName, " Computer Ram: ").concat(this._ram, " Computer version: ").concat(this._newVersion);
            console.log(result);
        }; //end function
        // Optional(?:)
        Computer.prototype.everyComputerCopilot = function () {
            if (this._copilot !== undefined) {
                console.error("YES AI computer available");
                var other = "Computer Name: ".concat(this._computerName, " Computer Ram: ").concat(this._ram, " Computer version: ").concat(this._newVersion);
                var data = other + "Copilot: ".concat(this._copilot);
                console.log(data);
            }
            else {
                console.error("No AI computer available");
                var other = "Computer Name: ".concat(this._computerName, " Computer Ram: ").concat(this._ram, " Computer version: ").concat(this._newVersion);
                console.log(other);
            }
        };
        return Computer;
    }()); //end Computer
    // INSTANCE
    // copilot: argüman eklenebilinirde eklenmeyebilirde
    var computerIntance1 = new Computer("Msi", 8, true);
    computerIntance1.everyComputerCopilot();
    var computerIntance2 = new Computer("Msi", 8, true, true);
    computerIntance2.everyComputerCopilot();
};
//tsOptionalClass();
// #### ACCESS MODIFIER #################################################
// TypeScript Sınıflar
// OOP
// this
var tsAccessModifierClass = function () {
    // CLASS
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(mainCard, cpu, ram, harddisk, newVersion) {
            this._mainCard = mainCard;
            this._cpu = cpu;
            this._ram = ram;
            this._harddisk = harddisk;
            this._newVersion = newVersion;
        }
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion);
            console.log(result);
        };
        return Computer;
    }()); //end class Computer
    // 2.CLASS (MSI)
    // protected: subClass alanda çalışır.
    var Msi = /** @class */ (function (_super) {
        __extends(Msi, _super);
        // Constructor
        function Msi(mainCard, cpu, ram, harddisk, newVersion, usb) {
            //super: üst atadan gelen bilgileri gösterir
            var _this = _super.call(this, mainCard, cpu, ram, harddisk, newVersion) || this;
            //this global state gösterir.
            _this._usb = usb;
            return _this;
        }
        // function
        Msi.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, "  NewVersion: ").concat(this._newVersion, " USB: ").concat(this._usb);
            console.log(result);
        };
        return Msi;
    }(Computer));
    // INTANCE (Computer)
    var computerInstance = new Computer("Computer", "i7", 8, "1TB", false);
    console.log("MAIN CARD: " + computerInstance._mainCard);
    console.log("CPU: " + computerInstance._cpu);
    console.log("RAM: " + computerInstance._ram);
    //console.log("HARD DISK: " + computerInstance._harddisk);
    //console.log("Version: " + computerInstance._newVersion);
    computerInstance.computerInformation();
    console.log("**********************************************");
    // INSTANCE (MSI)
    var msiInstance = new Msi("Msi", "i9", 16, "4TB", true, "Usb2");
    console.log("MAIN CARD: " + msiInstance._mainCard);
    console.log("CPU: " + msiInstance._cpu);
    console.log("RAM: " + msiInstance._ram);
    //console.log("HARD DISK: " + msiInstance._harddisk);
    //console.log("Version: " + msiInstance._newVersion);
    console.log("USB: " + msiInstance._usb);
    msiInstance.computerInformation();
    console.log("**********************************************");
    // console.log("RAM: " + computerIntance._ram); //private: sadece o classta çalışır
    // console.log("VERSION: " + computerIntance._newVersion); // protected extends değilse sadece o classta çalışır
};
//tsAccessModifierClass()
// #### ENCAPSULATION #################################################
// Encapsulation: private
/*
 Encapsulation(Kapsulleme) bir sınıf içerisinde bazı verileri erişim kısıtlaması getirir.
Amaç: Verinin dış dünyalayla kapalı olmasını sağlamak ancak sadece bizim belirlediğimiz arayüzde kullanabilelim.
Encapsulation Kısaca: iç yapısı dış dünyayadan gizlenir. böylelikle veri güvenliğini sağlamış oluruz.
 */
var tsEncapsulationClass = function () {
    // CLASS
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(mainCard, cpu, ram, harddisk, newVersion) {
            this._mainCard = mainCard;
            this._cpu = cpu;
            this._ram = ram;
            this._harddisk = harddisk;
            this._newVersion = newVersion;
        }
        Object.defineProperty(Computer.prototype, "encapsulationNewVersion", {
            // ENCAPSULATION (private)
            // GET (Veriyi getir, okuma)
            // GET: veri döndeririz
            get: function () {
                return this._newVersion;
            },
            // SET (Veriyi manipulation, yani değiştirme)
            // SET: veri dönderilmezzzz
            set: function (version) {
                this._newVersion = version;
            },
            enumerable: false,
            configurable: true
        });
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion);
            console.log(result);
        };
        return Computer;
    }()); //end class Computer
    // Encapsulation (Computer)
    var computerInstance = new Computer("Computer", "i7", 8, "1TB", false);
    console.log("MAIN CARD: " + computerInstance._mainCard);
    console.log("CPU: " + computerInstance._cpu);
    console.log("RAM: " + computerInstance._ram);
    console.log("HARD DISK: " + computerInstance._harddisk);
    // private böyle yazamazsınız sadece encapsulation olarak private kullanabilirsin.
    // Encapsulation(SET)
    computerInstance.encapsulationNewVersion = true;
    // Encapsulation(GET)
    console.log("Version: " + computerInstance.encapsulationNewVersion);
    //console.log("Version: " + computerInstance._newVersion);
    computerInstance.computerInformation();
    console.log("**********************************************");
};
//tsEncapsulationClass()
// #### INHERITANCE #################################################
// TypeScript Inheritance
// this
// super
var tsInheritance = function () {
    console.log("TypeScript Inheritance Class");
    // 1.CLASS (COMMON CLASS)
    var Computer = /** @class */ (function () {
        // CONSTRUCTOR
        function Computer(mainCard, cpu, ram, harddisk, newVersion) {
            this._mainCard = mainCard;
            this._cpu = cpu;
            this._ram = ram;
            this._harddisk = harddisk;
            this._newVersion = newVersion;
        }
        // FUNCTION
        Computer.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion);
            console.log(result);
        };
        return Computer;
    }()); //end class Computer
    // 2.CLASS (MSI)
    var Msi = /** @class */ (function (_super) {
        __extends(Msi, _super);
        // Constructor
        function Msi(mainCard, cpu, ram, harddisk, newVersion, usb) {
            //super: üst atadan gelen bilgileri gösterir
            var _this = _super.call(this, mainCard, cpu, ram, harddisk, newVersion) || this;
            //this global state gösterir.
            _this._usb = usb;
            return _this;
        }
        // function
        Msi.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion, " USB: ").concat(this._usb);
            console.log(result);
        };
        return Msi;
    }(Computer));
    // 3.CLASS (ASUS)
    var Asus = /** @class */ (function (_super) {
        __extends(Asus, _super);
        // Constructor
        function Asus(mainCard, cpu, ram, harddisk, newVersion, typeC) {
            //super: üst atadan gelen bilgileri gösterir
            var _this = _super.call(this, mainCard, cpu, ram, harddisk, newVersion) || this;
            //this global state gösterir.
            _this._typeC = typeC;
            return _this;
        }
        // function
        Asus.prototype.computerInformation = function () {
            var result = "Information => MainCard: ".concat(this._mainCard, " Cpu: ").concat(this._cpu, " Ram: ").concat(this._ram, " Harddisk: ").concat(this._harddisk, " NewVersion: ").concat(this._newVersion, " USB: ").concat(this._typeC);
            console.log(result);
        };
        return Asus;
    }(Computer));
    // INTANCE (Computer)
    var computerInstance = new Computer("Computer", "i7", 8, "1TB", false);
    console.log("MAIN CARD: " + computerInstance._mainCard);
    console.log("CPU: " + computerInstance._cpu);
    console.log("RAM: " + computerInstance._ram);
    console.log("HARD DISK: " + computerInstance._harddisk);
    console.log("Version: " + computerInstance._newVersion);
    computerInstance.computerInformation();
    console.log("**********************************************");
    // INSTANCE (MSI)
    var msiInstance = new Msi("Msi", "i9", 16, "4TB", true, "Usb2");
    console.log("MAIN CARD: " + msiInstance._mainCard);
    console.log("CPU: " + msiInstance._cpu);
    console.log("RAM: " + msiInstance._ram);
    console.log("HARD DISK: " + msiInstance._harddisk);
    console.log("Version: " + msiInstance._newVersion);
    console.log("USB: " + msiInstance._usb);
    msiInstance.computerInformation();
    console.log("**********************************************");
    // INSTANCE (ASUS)
    var asusInstance = new Asus("Asus", "i9", 32, "2TB", false, "TypeC");
    console.log("MAIN CARD: " + asusInstance._mainCard);
    console.log("CPU: " + asusInstance._cpu);
    console.log("RAM: " + asusInstance._ram);
    console.log("HARD DISK: " + asusInstance._harddisk);
    console.log("Version: " + asusInstance._newVersion);
    console.log("TypeC: " + asusInstance._typeC);
    asusInstance.computerInformation();
};
//tsInheritance();
// #### ABSTRACT #################################################
// TypeScript Abstract
// super
var abstractFunction = function () {
    // abstract class( Genel Ortak Özellikler )
    var bilgisayarOrtakOzellikler = /** @class */ (function () {
        // FIELD
        // CONSTRUCTOR
        function bilgisayarOrtakOzellikler() {
        }
        // FUNCTION
        // Gövdeli Function
        bilgisayarOrtakOzellikler.prototype.anakart = function () {
            console.log("Anakart");
        };
        return bilgisayarOrtakOzellikler;
    }()); //end class abstract bilgisayarOrtakOzellikler
    // MSI
    var msiTitan = /** @class */ (function (_super) {
        __extends(msiTitan, _super);
        //FIELD
        // CONSTRUCTOR
        function msiTitan() {
            return _super.call(this) || this; // abstract class almak
        }
        // Override
        msiTitan.prototype.anakart = function () {
            console.log("Anakart Msi");
        };
        // NOT: abstract yazdığımız gövdesiz metodu extends ettiğimiz classta yazmak zorundayız.
        msiTitan.prototype.cpu = function () {
            console.log("MSI CPU");
        };
        return msiTitan;
    }(bilgisayarOrtakOzellikler)); //end class msiTitan
    /////////////////////////
    // abstract class instance yapamazsınız.
    // let bilgisayarOrtakOzellik = new bilgisayarOrtakOzellikler();
    var msiVersion1 = new msiTitan();
    msiVersion1.anakart();
    msiVersion1.cpu();
};
abstractFunction();
// #### GENERICS #################################################
// TypeScript Generics
// #### ASSERTIONS (CAST #################################################
// TypeScript Type Assertions
// TypeScript Type Aliases
function typeAssertionsFunction() {
    console.log("type Assertions:  Tür değiştirme");
    var data;
    // bu yazımda otomatik any
    data = "Merhabalar";
    //any: string, number,boolean
    // 1. YOL
    var value1 = data.length;
    console.log(value1);
    // 2. YOL (Assertions)
    var value2 = data.length;
    console.log(value2);
    // 3. YOL (Assertions)
    var value3 = data.length;
    console.log(value3);
}
//typeAssertionsFunction();
// #### INTERFACE #################################################
// TypeScript Interface
// TypeScript Never
// TypeScript Decorators
// TypeScript Mixins
// TypeScript Interfaces vs Types
// TypeScript Modules
// TypeScript Namespaces vs Modules
// TypeScript Ambient Namespaces
// TypeScript Ambient Modules
// TypeScript Inference
// TypeScript Type Compatibility
// TypeScript Intersection Types
