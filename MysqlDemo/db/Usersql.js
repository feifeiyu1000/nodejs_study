// 作者：sprint
// 链接：http://www.jianshu.com/p/0a161f341771
// 來源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var UserSQL = {  
                insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
                queryAll:'SELECT * FROM User',  
                getUserById:'SELECT * FROM User WHERE uid = ? ',
              };
 module.exports = UserSQL;

