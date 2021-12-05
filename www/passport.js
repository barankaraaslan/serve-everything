var passport = require('passport');
var LdapStrategy = require('passport-ldapauth');
var fs = require('fs');

var OPTS = {
    server: {
        url: fs.readFileSync("/LDAP_URI", { encoding: "utf-8" }),
        bindDN: fs.readFileSync("/LDAP_BINDDN", { encoding: "utf-8" }),
        bindCredentials: fs.readFileSync("/run/secrets/LDAP_BINDPW", { encoding: "utf-8" }),
        searchBase: fs.readFileSync("/LDAP_BASE", { encoding: "utf-8" }),
        searchFilter: '(uid={{username}})'
    }
};

passport.use(new LdapStrategy(OPTS));

passport.serializeUser(function(user, done) {
    done(null, user.uid);
});
  
passport.deserializeUser(function(id, done) {
    done(null, id);
});
  
module.exports = passport;
