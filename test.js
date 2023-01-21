const a = require(".")
const {print} = a

print("Hello World!")
print("TEST", "TEST1")
print({
	"number": 1,
	"message": "Hello World!"
})

print(a.owoify("Hello World! !k"))

print(a.fetchURLs("Hello everyone! Come join my server at https://discord.gg/invite/invite@!!! and https://discord.gg/invite/invite2! and https://example.com/t34r55r23fds/home/4353454?token=323423424&aaaaaa?test=bbbbb"))


const urls = a.fetchURLs("Check out https://example.com! And also https://example.com/dashboard/home?test=4t42t4.");
console.log(urls);