ldapsearch \
  -H ldap://localhost:389 \
  -x \
  -D cn=admin,dc=example,dc=org \
  -w admin \
  -b cn=users,dc=example,dc=org \
  "(uid=bkaraaslan)"