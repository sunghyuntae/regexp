const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbccccdddd
d`
console.log(str.match(/f\w{1,}/gm))
console.log(str.match(/[a-c]/g))
